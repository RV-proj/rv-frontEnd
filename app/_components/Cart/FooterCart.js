"use client";

import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "lucide-react";
import { setQuantity } from "@/_lib/store/cartSlice";
import { useState } from "react";
import TierBadge from "../../_ui/TierBadge";
import Confirmation from "./Confirmation";

export default function FooterCart() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    selectedSize,
    selectedQuality,
    totalPrice,
    saving,
    savingPercentage,
    quantity,
  } = useSelector((state) => state.cart);

  const handleIncrease = () => {
    dispatch(setQuantity(quantity + 1));
  };

  const handleDecrease = () => {
    dispatch(setQuantity(Math.max(1, quantity - 1)));
  };
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
            {/* <span className="text-[11px] text-slate-400 mr-1"></span> */}
            <button
              aria-label="Decrease"
              onClick={handleDecrease}
              className="p-1 rounded hover:bg-slate-700"
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="w-8 text-center tabular-nums text-sm">
              {quantity}
            </div>
            <button
              aria-label="Increase"
              onClick={handleIncrease}
              className="p-1 rounded hover:bg-slate-700"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400">
              Est. Total (x{quantity})
            </div>
            <div className="text-xl font-bold text-white tabular-nums">
              ${Math.round(totalPrice)}
            </div>
          </div>
          <span
            onClick={() => {
              setOpen(true);
            }}
            className="rounded-xl px-6 py-3 font-semibold text-white bg-linear-to-r from-cyan-500 to-fuchsia-600 shadow-lg hover:cursor-pointer"
          >
            Select & Continue
          </span>
        </div>
      </div>
      {open && <Confirmation open={open} onClose={() => setOpen(false)} />}
    </section>
  );
}
