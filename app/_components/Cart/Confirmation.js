import { tripLengthCalc } from "@/_lib/tripLengthCalc";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import TierBadge from "@/_ui/TierBadge";
import QualityBadge from "@/_ui/QualityBadge";
import { X } from "lucide-react";
import { createOrder } from "@/_lib/api/orders";

export default function Confirmation({ open, onClose, session }) {
  const email = session.user.email;
  const {
    selectedSize,
    selectedQuality,
    startDate,
    endDate,
    totalPrice,
    qualityScore,
    cleaningPrepFee,
    savingPercentage,
    quantity,
    tax,
  } = useSelector((state) => state.cart);
  if (!open) return null;

  const deposit = totalPrice * 0.05;

  // payment handler
  async function handlePay() {
    try {
      const data = await createOrder(deposit, email, {
        size: selectedSize,
        quality: selectedQuality,
        price: totalPrice,
        startDate: startDate,
        endDate: endDate,
        quantity: quantity,
      });
      // redirect to stripe
      window.open(data.url, "_blank", "noopener,noreferrer");
      // window.location.href = data.url;
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
        className="w-full max-w-7xl mx-4 rounded-2xl bg-slate-950 text-white border border-white/10 shadow-2xl p-8 animate-popIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-900 border border-white/10 rounded-xl p-5 mb-6">
          <div className="flex justify-between">
            <h2 className="text-3xl font-semibold mb-5">
              Lock your trip — we handle the magic ✨
            </h2>
            <X className="cursor-pointer text-cyan-200" onClick={onClose} />
          </div>

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

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: Cart Info */}
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5">
            <h3 className="text-xl font-bold mb-4">Your Selection</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="text-gray-400">Email Addresss</p>
                <p className="bg-[#0a1626] p-2 rounded-md mt-1 border border-white/5">
                  {email}
                </p>
              </div>

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
                    {Math.round(totalPrice * 100) / 100}
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

          {/* middle checkout steps */}
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4">
              Please Fill up the Delivery Address Form
            </h3>

            <div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Address Details */}
            <div className="space-y-4 mt-3">
              <div>
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="New York"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="NY"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="10001"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-slate-900"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right: Checkout Steps */}
          <div className="bg-slate-900 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4">
              Checkout (Pay 5% deposit to lock your RV)
            </h3>

            <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2 mb-4">
              <li> 5% deposit now locks price, refundable until confirmed</li>
              <li>
                We confirm RV, arrange logistics, and apply upgrades if
                applicable
              </li>
              <li>45% of balance due within 48 hours of confirmation</li>
              <li>Final balance auto-billed 14 days before start date</li>
              <li>
                Refundable security deposit of $750 auto billed 7 days before
                trip
              </li>
            </ol>

            <div>
              <h1 className="text-gray-400">
                Please describe the nature of your trip and any special
                requests. The more information you provide, the better we can
                sync you up with your ideal RV and experience (optional)
              </h1>
              <textarea
                name=""
                id=""
                className="ring ring-cyan-700 w-full my-3 rounded-sm p-2"
              ></textarea>
            </div>

            <div className="flex justify-end">
              {/* confirm payment */}
              <button
                onClick={handlePay}
                className="bg-linear-to-r from-cyan-400 to-emerald-500 text-black font-semibold px-5 py-2 cursor-pointer rounded-lg shadow-lg hover:opacity-90 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
