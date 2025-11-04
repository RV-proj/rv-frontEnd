import { tiers } from "@/_lists/tiers";
import QualityScoreCard from "@/_ui/QualityScoreCard";

const QualityScore = () => {
  //   notes
  // container will contain max-w-7xl px-4 sm:px-6 pt-10
  const qualityLevelCardData = Object.entries(tiers).map(([key, value]) => ({
    plan: key,
    backgroundColor: `bg-gradient-to-br ${value.color} opacity-25`,
    ...value,
  }));

  const qualityScoreCardData = [
    {
      id: 1,
      title: "Build & Model",
      weight: "30%",
      desc: "Manufacturer quality and model line reputation.",
    },
    {
      id: 2,
      title: "Features",
      weight: "25%",
      desc: "Amenities, technology, and trim level.",
    },
    {
      id: 3,
      title: "Age & Condition",
      weight: "15%",
      desc: "Newer model years scored higher.",
    },
    {
      id: 4,
      title: "Host QA",
      weight: "15%",
      desc: "Owner checklist + RVEEDOM spot‑checks.",
    },
    {
      id: 5,
      title: "Guest Reviews",
      weight: "15%",
      desc: "Recent ratings weighted more heavily.",
    },
  ];

  return (
    <section className="bg-slate-950/60 pt-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 ">
        {/* Quality Score */}
        <div className="rounded-2xl border border-slate-700 p-4 bg-slate-900">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-white text-[16px]">
              Quality Score
            </h1>

            {/* score */}
            <div className="text-xs px-2 py-1 rounded-full bg-emerald-900/40 text-emerald-300 border border-emerald-700/50">
              <div className="flex items-center gap-1">
                <h1>Current selection:</h1>
                {/* NOTE here basic standard premium should be dynamic */}
                <h1>
                  {
                    qualityLevelCardData.find(
                      (card) => card.plan === "Standard"
                    ).qualityScore
                  }
                </h1>
              </div>
            </div>
          </div>

          {/* STUB w-[70%] should be dynamic */}
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden mt-5">
            <div className="h-2  bg-linear-to-r from-cyan-500 via-fuchsia-500 to-purple-600 w-[70%]"></div>
          </div>

          <p className="mt-2 text-xs text-slate-400">
            Higher score indicates a newer, more feature‑rich model with strong
            guest reviews and confirmed quality.
          </p>

          {/* quality score card */}
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 ">
            {qualityScoreCardData.map((card) => (
              <QualityScoreCard key={card.id} {...card} />
            ))}
          </div>

          <p className="text-[12px] text-slate-500 mt-3">
            Scores are calculated by RVEEDOM’s algorithm and may update with
            inventory, verification, and new reviews.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityScore;
