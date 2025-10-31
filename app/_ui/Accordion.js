"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ indexNum, question, answer }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div
        key={indexNum}
        className="rounded-xl border border-white/10 bg-white/5 p-4 overflow-hidden transition-all duration-300"
      >
        <button
          onClick={() => toggleAccordion(indexNum)}
          className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 transition-colors"
        >
          <span className="font-semibold text-white">{question}</span>
          <ChevronDown
            className={`w-5 h-5 text-slate-600 transition-transform duration-300 shrink-0 ${
              openIndex === indexNum ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            openIndex === indexNum ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-6 py-4">
            <p className="text-sm mt-2 text-white/70">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
