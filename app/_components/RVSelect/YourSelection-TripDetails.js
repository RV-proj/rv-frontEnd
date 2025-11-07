"use client";
import { Info } from "lucide-react";
import { useState } from "react";
import { setTotalDate } from "@/_lib/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TripDetails() {
  const dispatch = useDispatch();
  const totalDate = useSelector((state) => state.cart.totalDate);
  const today = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [error, setError] = useState("");

  const handleDateChange = (e, type) => {
    const value = e.target.value;

    if (type === "start") {
      setStartDate(value);

      // Reset endDate if startDate > endDate
      if (endDate && new Date(value) > new Date(endDate)) {
        setEndDate("");
        dispatch(setTotalDate(0));
        setError("");
      }
      return;
    }

    // handle end date logic
    if (type === "end") {
      setEndDate(value);
      const diffDays =
        (new Date(value) - new Date(startDate)) / (1000 * 60 * 60 * 24);

      if (diffDays < 4) {
        setError("Minimum 4 nights required.");
        dispatch(setTotalDate(0));
      } else {
        setError("");
        dispatch(setTotalDate(diffDays));
      }
    }
  };

  const dateInputClasses =
    "bg-slate-900 text-slate-100 border border-slate-700 rounded-md px-2 py-1 focus:ring-2 focus:ring-cyan-400 outline-none transition duration-150 ease-in-out [color-scheme:dark]";

  return (
    <div className="rounded-2xl border border-slate-700 p-4 bg-slate-900">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Info className="w-4 h-4 text-cyan-400" /> Trip Details
        </h3>
        {error && (
          <span className="text-red-400 text-xs bg-red-900/40 px-2 py-0.5 rounded-md">
            {error}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <label className="flex flex-col gap-2">
          <span className="text-slate-300">Starting Date</span>
          <input
            type="date"
            min={today}
            value={startDate}
            onChange={(e) => handleDateChange(e, "start")}
            className={dateInputClasses}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-slate-300">Ending Date</span>
          <input
            type="date"
            min={startDate}
            value={endDate}
            onChange={(e) => handleDateChange(e, "end")}
            className={dateInputClasses}
          />
        </label>
      </div>

      <div className="mt-3 text-xs text-slate-500">
        Trip length: <span className="text-slate-300">{totalDate} nights</span>
      </div>
    </div>
  );
}
