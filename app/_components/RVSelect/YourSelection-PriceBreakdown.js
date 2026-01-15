"use client";

import { useState } from "react";
import {
  Percent,
  Calculator,
  Shield,
  Sparkles,
  Star,
  Truck,
  Info,
} from "lucide-react";
import { useSelector } from "react-redux";

export default function PriceBreakdown() {
  const saving = useSelector((state) => state.cart.saving);
  const savingPercentage = useSelector((state) => state.cart.savingPercentage);
  const cleaningPrepFee = useSelector((state) => state.cart.cleaningPrepFee);
  const tax = useSelector((state) => state.cart.tax);
  const taxAmount = useSelector((state) => state.cart.taxAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const flexPrice = useSelector((state) => state.cart.flexPrice);
  const totalDate = useSelector((state) => state.cart.totalDate);
  const quantity = useSelector((state) => state.cart.quantity);

  const [deliveryOption, setDeliveryOption] = useState(null);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const handleDeliverySelect = (option, price, event) => {
    setDeliveryOption(option);
    setDeliveryPrice(price);
    // Close the dropdown
    const details = event.target.closest("details");
    if (details) {
      details.removeAttribute("open");
    }
  };

  const rows = [
    {
      label: `Nightly x $${flexPrice}`,
      value: `${flexPrice * totalDate}`,
      Icon: Star,
    },
    { label: "Cleaning & Prep", value: cleaningPrepFee, Icon: Shield },
    { label: `Tax (${tax}%)`, value: taxAmount, Icon: Percent },
    { label: `Quantity`, value: quantity, Icon: Calculator },
  ];

  const finalTotal = totalPrice + deliveryPrice;

  return (
    <div className="rounded-2xl border border-slate-700 p-4 bg-slate-900">
      <h3 className="font-semibold mb-3">Price Breakdown</h3>
      <div className="mb-3 rounded-lg bg-emerald-900/40 text-emerald-300 p-3 text-xs flex items-center justify-between border border-emerald-700/40">
        <span>Flex+ savings vs. typical market</span>
        <span className="font-semibold">
          ${saving} ({savingPercentage}% off)
        </span>
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
            <div className="tabular-nums">
              {r.label === "Quantity"
                ? `x${Math.round(r.value)}`
                : `$${Math.round(r.value)}`}
            </div>
          </div>
        ))}

        {/* Delivery Options Dropdown */}
        <div className="pt-2">
          <div className="relative w-full">
            <details className="group w-full">
              <summary className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg cursor-pointer list-none hover:bg-slate-700 flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-slate-400" />
                  <span>
                    {deliveryOption === null
                      ? "Select delivery option"
                      : deliveryOption === "transport"
                      ? "I will transport"
                      : "Add Delivery, Setup & Pickup"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-emerald-400">
                    ${deliveryPrice}
                  </span>
                  <svg
                    className="w-4 h-4 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </summary>
              <ul className="absolute left-0 mt-1 w-full bg-slate-800 rounded-lg shadow-lg border border-slate-600 z-10 hidden group-open:block">
                <li>
                  <button
                    onClick={(e) => handleDeliverySelect("transport", 0, e)}
                    className="w-full text-left px-3 py-3 hover:bg-slate-700 flex justify-between items-center border-b border-slate-700 text-sm"
                  >
                    <span>I will transport</span>
                    <span className="font-semibold text-emerald-400">$0</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleDeliverySelect("delivery", 250, e)}
                    className="w-full text-left px-3 py-3 hover:bg-slate-700 flex justify-between items-center text-sm"
                  >
                    <span>Add Delivery, Setup & Pickup</span>
                    <span className="font-semibold text-emerald-400">$250</span>
                  </button>
                </li>
              </ul>
            </details>
          </div>

          {/* Option Details with Info Icon */}
          {deliveryOption !== null && (
            <div className="mt-2 bg-slate-800/50 border border-slate-700 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <div className="group/tooltip relative shrink-0">
                  <Info className="w-4 h-4 text-cyan-400 cursor-help" />
                  <div className="invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 transition-opacity absolute left-0 top-6 w-64 bg-slate-950 text-slate-200 text-xs rounded-lg p-3 shadow-xl z-20 border border-slate-700">
                    {deliveryOption === "transport"
                      ? "It is required for driver to show proof of insurance for the added tow vehicle to their policy and present prior to pickup."
                      : "We will include delivery, full setup of the RV so it's ready for you upon arrival, and pickup at the end of your trip. Our minimum is $250 and prices are subject to change based on availability and destination."}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-300 font-medium">
                    {deliveryOption === "transport"
                      ? "Self Transport"
                      : "Delivery Service Included"}
                  </p>
                  <p className="text-sm font-semibold text-emerald-400 mt-0.5">
                    ${deliveryPrice}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-slate-700 my-2" />
        <div className="flex items-center justify-between font-semibold text-lg">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" /> Estimated Total
          </div>
          <div className="tabular-nums">${Math.round(finalTotal)}</div>
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
