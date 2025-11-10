"use client";

import { useState } from "react";

const Collapse = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className=" rounded-xl border border-cyan-400/30 bg-cyan-400/10 font-semibold text-cyan-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5  transition-colors duration-200 flex justify-between items-center"
      >
        <span className="font-medium text-white">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden  ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className=" pb-5">
          {content.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className=" block px-5 py-2 text-white hover:bg-cyan-400/20 capitalize"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
