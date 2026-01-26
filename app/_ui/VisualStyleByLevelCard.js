"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import TierBadge from "./TierBadge";
const { ChevronLeft, ChevronRight } = require("lucide-react");

const VisualStyleByLevel = ({ img, images, tag, note, label, plan }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allImages = images || [img];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900">
      {/* Image Carousel */}
      <div className="relative z-10 group">
        <img
          src={allImages[currentIndex]}
          alt={`${label} - Image ${currentIndex + 1}`}
          className="h-[300px] w-full object-cover"
        />
        <div className={`absolute inset-0 opacity-25 ${tag}`}></div>

        {/* Navigation Arrows - Only show if more than 1 image */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Badge */}
      <div className="px-5 pb-5">
        <div className="flex gap-3 items-center mt-5">
          <div>
            <TierBadge tierKey={plan} />
          </div>
          <div>
            <p className="text-sm text-slate-300">{note}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualStyleByLevel;
