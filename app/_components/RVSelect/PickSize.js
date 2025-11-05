"use client";

import { sizes } from "@/_lists/sizes";
import { Gem, Sparkles } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSize } from "@/_lib/store/cartSlice";
import PickSizeCard from "@/_ui/PickSizeCard";

const PickSize = () => {
  const dispatch = useDispatch();
  const selectedKey = useSelector((state) => state.cart.selectedSize);

  const handleSelect = (key) => {
    dispatch(setSelectedSize(key));
  };
  //   notes
  // container will contain max-w-7xl px-4 sm:px-6 pt-10
  return (
    <section className="bg-slate-950/60 pt-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 ">
        {/* Pick A Size */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* icon */}
            <Sparkles className="h-10 w-10  text-cyan-300 " />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3 text-white">
              Choose Your RV — Size &amp; Quality
            </h1>
          </div>

          {/* Flex+ Program */}
          <div className="hidden md:flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 bg-slate-900 shadow-sm">
            <Gem className="w-4 h-4 text-cyan-400" />
            <h1 className="text-sm font-medium text-white">Flex+ Program</h1>
          </div>
        </div>

        {/* pick a size */}
        <div className="pt-10">
          {/* text */}
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Pick a Size
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              From S to XXL — Travel Trailers, Fifth Wheels, and Class A
              options.
            </p>
          </div>

          {/* card */}
          <div className="pt-5 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5">
            {Object.entries(sizes).map(([key, data]) => (
              <PickSizeCard
                key={key}
                {...data}
                isSelected={selectedKey === key}
                onClick={() => handleSelect(key)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickSize;
