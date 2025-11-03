"use client";
import { Info } from "lucide-react";

export default function TripDetails() {
  const nights = 5;
  const deliveryMiles = 5;
  return (
    <div className="rounded-2xl border border-slate-700 p-4 bg-slate-900">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Info className="w-4 h-4 text-cyan-400" /> Trip Details
      </h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <label className="flex flex-col gap-2">
          <span className="text-slate-300">Nights</span>
          <input
            type="range"
            min={1}
            max={30}
            value={nights}
            onChange={(e) => setNights(parseInt(e.target.value))}
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>1</span>
            <span>{nights}</span>
            <span>30</span>
          </div>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-slate-300">Delivery Distance (mi)</span>
          <input
            type="range"
            min={0}
            max={200}
            step={5}
            value={deliveryMiles}
            onChange={(e) => setDeliveryMiles(parseInt(e.target.value))}
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>0</span>
            <span>{deliveryMiles}</span>
            <span>200</span>
          </div>
        </label>
      </div>
      <div className="mt-3 text-xs text-slate-500">
        Delivery priced at $5usd per mile. Set to 0 if you will pickup.
      </div>
    </div>
  );
}
