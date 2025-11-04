import { tiers } from "@/_lists/tiers";
import VisualStyleByLevelCard from "@/_ui/VisualStyleByLevelCard";

const VisualStyleByLevel = () => {
  const qualityLevelCardData = Object.entries(tiers).map(([key, value]) => ({
    plan: key,
    backgroundColor: `bg-gradient-to-br ${value.color} opacity-25`,
    ...value,
  }));

  console.log(qualityLevelCardData);

  // NOTE test json data
  const visualStyleByLevelCardData = [
    {
      id: 1,
      plan: "basic",
      text: "Reliable, essentials covered. Premium emphasizes refined finishes and a modern look.",
      img: "https://images.unsplash.com/photo-1629222247198-00b164054719?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175",
      badgeColor: "bg-slate-800 border-slate-600",
      textColor: "text-slate-300",
      backgroundColor:
        "bg-gradient-to-br from-slate-600 to-slate-800 opacity-30",
    },
    {
      id: 2,
      plan: "Standard",
      text: "Newer models and more features. Premium emphasizes refined finishes and a modern look.",
      img: "https://images.unsplash.com/photo-1635492346092-729ba774b9e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      badgeColor: "bg-cyan-900 border-cyan-600",
      textColor: "text-cyan-200",
      backgroundColor: "bg-gradient-to-br from-cyan-500 to-cyan-700 opacity-30",
    },
    {
      id: 3,
      plan: "Premium",
      text: "Top-tier, feature-rich and like-new. Premium emphasizes refined finishes and a modern look.",
      img: "https://images.unsplash.com/photo-1468802337661-685a628d58a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      badgeColor:
        " bg-gradient-to-r from-cyan-950 via-fuchsia-950 to-purple-950 border-fuchsia-700",
      textColor: "text-fuchsia-200",
      backgroundColor:
        "bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-purple-600 opacity-30",
    },
  ];

  //   notes
  // container will contain max-w-7xl px-4 sm:px-6 pt-10
  return (
    <section className="bg-slate-950/60 py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 ">
        {/* VisualStyleByLevel */}

        <div>
          <div>
            <h1 className="text-center  text-[#27DBFD] uppercase font-semibold text-xs">
              Visual Style by Level
            </h1>
            <p className="text-center text-4xl text-white font-bold mt-2">
              Here’s the vibe you can expect. Actual units vary by availability.
            </p>
          </div>

          {/* card */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {qualityLevelCardData.map((card) => (
              <VisualStyleByLevelCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualStyleByLevel;
