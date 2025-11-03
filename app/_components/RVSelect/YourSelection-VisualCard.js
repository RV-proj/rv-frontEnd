import { Check, GaugeCircle, Ruler, Users } from "lucide-react";
import TierBadge from "@/_ui/TierBadge";
import QualityBadge from "@/_ui/QualityBadge";

const amnenities = [
  "Newer model or finish",
  "Additional comfort touches",
  "Convenience focused amenities",
  "Refined interior details",
];

const profile = [
  "Best for 1–2 travelers",
  "Ultra‑easy to tow/park",
  "Great fuel economy",
];

export default function VisualCard() {
  return (
    <div className="rounded-3xl overflow-hidden border border-slate-700 bg-slate-900">
      <div className="aspect-video relative">
        <img
          src="/l.webp"
          alt="rvImage"
          className="absolute inset-0 w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/10" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="text-white drop-shadow">
            <div className="text-sm opacity-90">
              Large • 18-22ft • Sleeps 2-3
            </div>
            <div className="text-xs opacity-80">Rig Type: Travel Trailer</div>
            <div className="flex items-center gap-2 mt-1">
              <TierBadge tierKey="Standard" />
              <QualityBadge quality={33} />
            </div>
          </div>
          <div className="text-white/90 text-right hidden md:block">
            <div className="text-xs">Est. nightly</div>
            <div className="text-2xl font-semibold tabular-nums">$125</div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="grid sm:grid-cols-3 gap-3 text-sm">
          <div className="rounded-xl border border-slate-700 p-3 bg-slate-900/60">
            <div className="text-slate-400 text-xs">Length</div>
            <div className="flex items-center gap-2 mt-1">
              <Ruler className="w-4 h-4 text-slate-400" /> 18-22ft
            </div>
          </div>
          <div className="rounded-xl border border-slate-700 p-3 bg-slate-900/60">
            <div className="text-slate-400 text-xs">Sleeps</div>
            <div className="flex items-center gap-2 mt-1">
              <Users className="w-4 h-4 text-slate-400" /> 2-3
            </div>
          </div>
          <div className="rounded-xl border border-slate-700 p-3 bg-slate-900/60">
            <div className="text-slate-400 text-xs">Ideal For</div>
            <div className="flex items-center gap-2 mt-1">
              <GaugeCircle className="w-4 h-4 text-slate-400" /> Best For 1-2
              Travelers
            </div>
          </div>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-700 p-4 bg-slate-900/60">
            <div className="text-xs text-slate-400">Level Amenities</div>
            <ul className="mt-2 text-sm space-y-1">
              {amnenities.map((a, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700 p-4 bg-slate-900/60">
            <div className="text-xs text-slate-400">Size Profile</div>
            <ul className="mt-2 text-sm space-y-1">
              {profile.map((p, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
