import {
  BadgePercentIcon,
  ShieldIcon,
  Sparkles,
  StarIcon,
  TruckIcon,
} from "lucide-react";

export default function PriceBreakdown() {
  const rows = [
    { label: `Nightly x $10`, value: 55, Icon: StarIcon },
    { label: "Delivery (optional)", value: 56, Icon: TruckIcon },
    { label: "Setup + Cleaning", value: 67, Icon: ShieldIcon },
    { label: "Service (9%)", value: 88, Icon: BadgePercentIcon },
  ];
  return (
    <div className="rounded-2xl border border-slate-700 p-4 bg-slate-900">
      <h3 className="font-semibold mb-3">Price Breakdown</h3>
      <div className="mb-3 rounded-lg bg-emerald-900/40 text-emerald-300 p-3 text-xs flex items-center justify-between border border-emerald-700/40">
        <span>Flex+ savings vs. typical market</span>
        <span className="font-semibold">$103 (13% off)</span>
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between gap-4 text-sm"
          >
            <div className="flex items-center gap-2">
              <r.Icon className="w-4 h-4 text-slate-400" /> {r.label}
            </div>
            <div className="tabular-nums">{Math.round(r.value)}</div>
          </div>
        ))}
        <div className="border-t border-slate-700 my-2" />
        <div className="flex items-center justify-between font-semibold text-lg">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" /> Estimated Total
          </div>
          <div className="tabular-nums">{Math.round(123.56)}</div>
        </div>
        <p className="text-xs text-slate-400">
          Displayed pricing is an estimate within the RVEEDOM Flex+ program.
          Final quote may vary based on exact dates, availability, and location
          specifics.
        </p>
      </div>
    </div>
  );
}
