import { tripLengthCalc } from "@/_lib/tripLengthCalc";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Input from "@/_ui/Input";
import TierBadge from "@/_ui/TierBadge";
import QualityBadge from "@/_ui/QualityBadge";
import { toast } from "react-toastify";

export default function Confirmation({ open, onClose }) {
  const {
    selectedSize,
    selectedQuality,
    startDate,
    endDate,
    totalPrice,
    qualityScore,
    cleaningPrepFee,
    savingPercentage,
    tax,
    quantity,
  } = useSelector((state) => state.cart);
  if (!open) return null;

  // payment handler
  async function handlePay() {
    try {
      const res = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount_paid: totalPrice,
        }),
      });

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();

      // save session ID
      localStorage.setItem("stripe_session_id", data.sessionId);

      // redirect to stripe
      window.location.href = data.url;
    } catch (err) {
      console.error("Error creating order:", err.message);
      toast.error("Failed to create order.");
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl mx-4 rounded-2xl bg-slate-950 text-white border border-white/10 shadow-2xl p-8 animate-popIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-900 border border-white/10 rounded-xl p-5 mb-6">
          <h2 className="text-3xl font-semibold mb-5">
            Lock your trip — we handle the magic ✨
          </h2>
          <div className="flex flex-wrap gap-2 my-3">
            <span className="px-3 py-1 rounded-full bg-linear-to-r from-emerald-400 to-teal-500 text-sm text-black">
              5% to lock
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
              Saving {savingPercentage}%
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
              Cleaning & Prep ${cleaningPrepFee}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
              Tax {tax}%
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Cart Info */}
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4">Your Selection</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <Input
                label="Email Address"
                placeholder="something@something.com"
                name="email"
                type="email"
                required
              />
              <Input
                label="Destination Address"
                placeholder="123 Main St, Lexington, KY"
                name="address"
                type="text"
                required
              />

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-gray-400">Start Date</p>
                  <p className="bg-[#0a1626] p-2 rounded-md mt-1 border border-white/5">
                    {startDate}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">
                    End Date (Total: {tripLengthCalc(startDate, endDate)} Day)
                  </p>
                  <p className="bg-[#0a1626] p-2 rounded-md mt-1 border border-white/5">
                    {endDate}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-gray-400">Preferred Size</p>
                  <p className="bg-[#0a1626] p-2 rounded-md mt-1 border border-white/5">
                    {selectedSize}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Total Price</p>

                  <p className="bg-[#0a1626] p-2 rounded-md mt-1 border border-white/5">
                    {totalPrice}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-gray-400 mb-1">Preferred Quality</p>

                  <TierBadge tierKey={selectedQuality} />
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Quality Level</p>

                  <QualityBadge quality={qualityScore} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Checkout Steps */}
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4">
              Checkout (Pay 5% deposit to lock your RV)
            </h3>
            <h1 className="text-center">Stripe Form</h1>
            {/* <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2 mb-6">
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
            </ol> */}

            {/* Buttons */}
            <div className="flex justify-end">
              {/* confirm payment */}
              <button
                onClick={handlePay}
                className="bg-linear-to-r from-cyan-400 to-emerald-500 text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:opacity-90 transition"
              >
                Confirm
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
