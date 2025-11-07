import { createPortal } from "react-dom";

export default function Confirmation({ open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="w-full max-w-6xl mx-4 rounded-2xl bg-slate-950 text-white border border-white/10 shadow-2xl p-8 animate-popIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <h2 className="text-2xl font-semibold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Lock your trip — we handle the magic ✨
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
              5% to lock
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
              Cleaning & Prep $150
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
              Tax 7%
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
              Security Deposit $750
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
              PriceLabs smart pricing
            </span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Trip Info */}
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4">Your Trip</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="text-gray-400">Destination Address</p>
                <p className="bg-[#0f2027] p-2 rounded-md mt-1 border border-white/5">
                  123 Main St, Lexington, KY
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-gray-400">Start Date</p>
                  <p className="bg-[#0f2027] p-2 rounded-md mt-1 border border-white/5">
                    08 – Nov – 2025
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">End Date</p>
                  <p className="bg-[#0f2027] p-2 rounded-md mt-1 border border-white/5">
                    15 – Nov – 2025
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-gray-400">Guests</p>
                  <p className="bg-[#0f2027] p-2 rounded-md mt-1 border border-white/5">
                    4
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Preferred Size</p>
                  <p className="bg-[#0f2027] p-2 rounded-md mt-1 border border-white/5">
                    M
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Checkout Steps */}
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4">Checkout</h3>
            <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2 mb-6">
              <li>
                <span className="font-semibold">Step 1 —</span> 5% deposit
                (locks price, refundable until confirmed)
              </li>
              <li>
                <span className="font-semibold">Step 2 —</span> We confirm RV
                and apply upgrades
              </li>
              <li>
                <span className="font-semibold">Step 3 —</span> 45% due within
                48h
              </li>
              <li>
                <span className="font-semibold">Step 4 —</span> $750 Security
                Deposit (auto-billed 7 days before start)
              </li>
              <li>
                <span className="font-semibold">Step 5 —</span> Final balance
                due 2 days before trip
              </li>
            </ol>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="bg-linear-to-r from-emerald-400 to-teal-500 text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:opacity-90 transition">
                Pay 5% Deposit
              </button>
              <button className="bg-white/10 px-5 py-2 rounded-lg hover:bg-white/20 transition">
                Pay 45%
              </button>
              <button className="bg-white/10 px-5 py-2 rounded-lg hover:bg-white/20 transition">
                Pay $750 Security Deposit
              </button>
              <button className="bg-white/10 px-5 py-2 rounded-lg hover:bg-white/20 transition">
                Pay Final Balance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
