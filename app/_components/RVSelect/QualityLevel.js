"use client";

import QualityLevelCard from "@/_ui/QualityLevelCard";
import { useState } from "react";

//   notes
// container will contain max-w-7xl px-4 sm:px-6 pt-10
const QualityLevel = () => {
  // test api
  const qualityLevelCardData = [
    {
      id: 1,
      plan: "basic",
      badgeColor: "bg-slate-800 border-slate-600",
      textColor: "text-slate-300",
      backgroundColor:
        "bg-gradient-to-br from-slate-600 to-slate-800 opacity-50",
      qualityScore: "73",
      textColor: "text-slate-300",
      slogan: "Reliable, essentials covered",
      benefits: [
        "Clean & comfortable",
        "Well‑maintained systems",
        "Core essentials provided",
        "Reliable climate control",
      ],
    },
    {
      id: 2,
      plan: "Standard",
      badgeColor: "bg-cyan-900 border-cyan-600",
      textColor: "text-slate-300",
      backgroundColor: "bg-gradient-to-br from-cyan-500 to-cyan-700 opacity-50",
      qualityScore: "81",
      textColor: "text-cyan-200",
      slogan: "Newer models & more features",
      benefits: [
        "Newer model or finish",
        "Convenience‑focused amenities",
        "Additional comfort touches",
        "Refined interior details",
      ],
    },
    {
      id: 3,
      plan: "Premium",
      badgeColor:
        " bg-gradient-to-r from-cyan-950 via-fuchsia-950 to-purple-950 border-fuchsia-700",
      textColor: "text-slate-300",
      backgroundColor:
        "bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-purple-600 opacity-50",
      qualityScore: "88",
      textColor: "text-fuchsia-200",
      slogan: "Top-tier, feature-rich & like-new",
      benefits: [
        "High comfort standard",
        "Modern interiors &amp; finishes",
        "Feature‑forward package",
        "Exceptional overall condition",
      ],
    },
  ];

  const [selectedId, setSelectedId] = useState(qualityLevelCardData[0].id);

  return (
    <section className="bg-slate-950/60 pt-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 ">
        {/* Quality Level */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Pick a Quality Level
          </h1>
          <p className="text-sm text-slate-400 mt-1 ">
            Basic (1 diamond), Standard (2), Premium (3). See how we score
            quality below.
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5">
          {qualityLevelCardData.map((card) => (
            <QualityLevelCard
              key={card.id}
              {...card}
              level={card.id}
              isSelected={selectedId === card.id}
              onClick={() => setSelectedId(card.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityLevel;
