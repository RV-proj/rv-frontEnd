import { Ruler, Users } from "lucide-react";
import TierBadge from "./TierBadge";

export default function ListViewCard() {
  const selected = false;
  return (
    <div
      className={`flex gap-4 p-4 rounded-2xl border ${
        selected
          ? "border-cyan-400 ring-2 ring-cyan-300 bg-slate-900/80"
          : "border-slate-700 bg-slate-900"
      }`}
    >
      <div className="w-44 sm:w-56 relative rounded-xl overflow-hidden shrink-0">
        <img
          src="/l.webp"
          alt="RV Label"
          className="w-full h-40 sm:h-36 object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <TierBadge tierKey="Basic" />
          <span className="text-xs text-slate-400">Rig Type</span>
          <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-900/40 text-emerald-300 border border-emerald-700/50">
            Quality Score qScore
          </span>
        </div>
        <h4 className="mt-1 font-semibold text-base truncate">
          Tier Label Size Label
        </h4>
        <div className="text-xs text-slate-400">
          size.length • Sleeps size.sleeps
        </div>
        <ul className="mt-2 text-sm grid sm:grid-cols-2 gap-2">
          {/* benefits.slice(0, 3).map((a) => (
            <li key={a} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" /> {a}
            </li>
          ))} */}
          <li className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-slate-400" /> Size:{" "}
          </li>
          <li className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-400" /> Sleeps: Sleeps
          </li>
        </ul>
      </div>

      <div className="w-36 sm:w-40 text-right flex flex-col justify-between">
        <div>
          <div className="text-[11px] text-slate-400">from</div>
          <div className="text-xl font-semibold tabular-nums">
            $nightly price
            <span className="text-xs font-normal">/night</span>
          </div>
          <div className="text-[11px] text-emerald-400 mt-1">Save %5/night</div>
        </div>
        <>Book Button</>
      </div>
    </div>
  );
}
