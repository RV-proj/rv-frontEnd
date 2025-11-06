"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import TierBadge from "./TierBadge";

export default function FooterCart() {
  const selectedSize = useSelector((state) => state.cart.selectedSize);
  const selectedQuality = useSelector((state) => state.cart.selectedQuality);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const saving = useSelector((state) => state.cart.saving);
  const savingPercentage = useSelector((state) => state.cart.savingPercentage);
  return (
    <section
      id="footercart"
      className="fixed bottom-0 inset-x-0 z-40 backdrop-blur bg-slate-900/90 border-t border-slate-700"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-400">Selected</div>
          <div className="text-base md:text-lg font-semibold flex flex-wrap items-center gap-2">
            <span className="text-slate-200 text-base md:text-xl font-semibold">
              {selectedSize || "None"}
            </span>
            <TierBadge tierKey={selectedQuality} />
            <span className="hidden md:inline text-emerald-300 font-medium">
              Save ${saving} ({savingPercentage}%)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 border rounded-lg px-2 py-1 bg-slate-800 border-slate-700">
            <span className="text-[11px] text-slate-400 mr-1">Qty</span>
            <button
              aria-label="Decrease"
              //   onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="p-1 rounded hover:bg-slate-700"
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="w-8 text-center tabular-nums text-sm">5</div>
            <button
              aria-label="Increase"
              //   onClick={() => setQty((q) => q + 1)}
              className="p-1 rounded hover:bg-slate-700"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400">Est. Total (xqty)</div>
            <div className="text-xl font-bold text-white tabular-nums">
              ${Math.round(totalPrice)}
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-xl px-4 py-3 font-semibold text-slate-100 bg-slate-800 border border-slate-700">
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </span>
          <span className="rounded-xl px-6 py-3 font-semibold text-white bg-linear-to-r from-cyan-500 to-fuchsia-600 shadow-lg">
            Select & Continue
          </span>
        </div>
      </div>
    </section>
  );
}
