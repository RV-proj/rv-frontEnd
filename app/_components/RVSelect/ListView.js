"use client";

import { setSelectedQuality, setSelectedSize } from "@/_lib/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Ruler, Users } from "lucide-react";
import { getPrice } from "@/_lib/getPrice";
import { tiers } from "@/_lists/tiers";
import { sizes } from "@/_lists/sizes";
import TierBadge from "@/_ui/TierBadge";

export default function ListView() {
  const dispatch = useDispatch();
  const { selectedSize, selectedQuality, cleaningPrepFee, tax } = useSelector(
    (state) => state.cart
  );

  const handleSelect = (sKey, tKey) => {
    dispatch(setSelectedQuality(tKey));
    dispatch(setSelectedSize(sKey));
  };

  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 mt-10 space-y-5 mb-10 text-white">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Compare the full List View
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Click any card to update your selection
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(sizes).map(([sKey, s]) => (
          <div key={sKey} className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200">
              {s.label} | {s.rig}
            </h3>

            {/* TIER CARDS FOR THIS SIZE */}
            {Object.entries(tiers).map(([tKey, t]) => {
              const isActive =
                selectedSize === sKey && selectedQuality === tKey;

              const { flexPrice, marketPrice } = getPrice(sKey, tKey);

              return (
                <div
                  key={`${sKey}-${tKey}`}
                  onClick={() => handleSelect(sKey, tKey)}
                  className={`flex gap-4 p-4 rounded-2xl border cursor-pointer transition ${
                    isActive
                      ? "border-cyan-400 ring-2 ring-cyan-300 bg-slate-900/80"
                      : "border-slate-700 bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-44 sm:w-56 relative rounded-xl overflow-hidden shrink-0">
                    <img
                      src="/l.webp"
                      alt={s.label}
                      className="w-full h-40 sm:h-36 object-cover"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <TierBadge tierKey={tKey} />
                      <span className="text-xs text-slate-400">{s.rig}</span>
                      <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-900/40 text-emerald-300 border border-emerald-700/50">
                        Quality Score {t.qScore}
                      </span>
                    </div>

                    <h4 className="mt-1 font-semibold text-base truncate">
                      {t.label} • {s.label}
                    </h4>

                    <div className="text-xs text-slate-400">
                      {s.length} • Sleeps {s.sleeps}
                    </div>

                    <ul className="mt-2 text-sm grid sm:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-slate-400" /> Size:{" "}
                        {s.length}
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-slate-400" /> Sleeps:{" "}
                        {s.sleeps}
                      </li>
                    </ul>
                  </div>

                  {/* Price Section */}
                  <div className="w-36 sm:w-40 text-right flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400">from</div>
                      <div className="text-xl font-semibold tabular-nums">
                        ${flexPrice}
                        <span className="text-xs font-normal">/night</span>
                      </div>

                      <div className="text-[11px] text-slate-400 mt-1">
                        Setup + Cleaning Fee: ${cleaningPrepFee} • Tax: {tax}%
                      </div>

                      <div className="text-[11px] text-emerald-400 mt-1">
                        Save ${marketPrice - flexPrice}/night
                      </div>
                    </div>

                    <button className="text-xs font-medium px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 rounded-lg mt-2">
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
