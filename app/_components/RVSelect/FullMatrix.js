"use client";

import { useState } from "react";
import { tiers } from "@/_lists/tiers";
import { sizes } from "@/_lists/sizes";
import TierBadge from "@/_ui/TierBadge";

// 🔹 Dummy data since you don’t have the real deal yet
const BASE_RATES = {
  S: 80,
  M: 100,
  L: 130,
  XL: 160,
  XXL: 200,
};

const TIER_MULTIPLIER = {
  Basic: 1.0,
  Standard: 1.3,
  Premium: 1.6,
};

const STANDARD_BASE_RATES = {
  S: 90,
  M: 110,
  L: 140,
  XL: 170,
  XXL: 210,
};

const STANDARD_TIER_MULTIPLIER = {
  Basic: 1.1,
  Standard: 1.4,
  Premium: 1.8,
};

const SETUP_FEE = 120;
const CLEANING_FEE = 90;

// lil’ formatter — no external helper needed
const formatUSD = (num) => `$${num.toLocaleString()}`;

export default function FullMatrix() {
  const [sizeKey, setSizeKey] = useState("M");
  const [tierKey, setTierKey] = useState("Standard");

  return (
    <section
      id="fullmatrix"
      className="container mx-auto max-w-7xl px-4 sm:px-6 text-white mt-10 space-y-5"
    >
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Compare the full Matrix
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Click any combo to update your selection
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-900">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-slate-800 text-slate-300">
              <th className="text-left p-3">Size</th>
              {Object.entries(tiers).map(([tKey]) => (
                <th key={tKey} className="text-left p-3">
                  <div className="flex items-center gap-2">
                    <TierBadge tierKey={tKey} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Object.entries(sizes).map(([sKey, s]) => (
              <tr key={sKey} className="border-t border-slate-700">
                <td className="p-3">
                  <div className="font-medium">{s.label}</div>
                  <div className="text-xs text-slate-400">
                    {s.length} • Sleeps {s.sleeps} • {s.rig}
                  </div>
                </td>

                {Object.entries(tiers).map(([tKey]) => {
                  const nightly = Math.round(
                    BASE_RATES[sKey] * TIER_MULTIPLIER[tKey]
                  );
                  const marketNightly = Math.round(
                    STANDARD_BASE_RATES[sKey] * STANDARD_TIER_MULTIPLIER[tKey]
                  );
                  const perNightSave = Math.max(0, marketNightly - nightly);
                  const isActive = sizeKey === sKey && tierKey === tKey;

                  return (
                    <td key={tKey} className="p-3 align-top">
                      <button
                        onClick={() => {
                          setSizeKey(sKey);
                          setTierKey(tKey);
                        }}
                        className={`w-full text-left rounded-xl border px-3 py-2 transition ${
                          isActive
                            ? "border-cyan-400 ring-2 ring-cyan-300 bg-slate-900"
                            : "border-slate-700 hover:bg-slate-800"
                        }`}
                      >
                        <div className="font-medium tabular-nums">
                          {formatUSD(nightly)} / night
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Setup {formatUSD(SETUP_FEE)} • Cleaning{" "}
                          {formatUSD(CLEANING_FEE)} • Service 9%
                        </div>
                        {perNightSave > 0 && (
                          <div className="mt-1 text-[11px] text-emerald-300">
                            Save {formatUSD(perNightSave)}/night with Flex+
                          </div>
                        )}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
