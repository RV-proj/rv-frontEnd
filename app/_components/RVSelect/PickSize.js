import PickSizeCard from "@/_ui/PickSizeCard";
import { Gem, Sparkles } from "lucide-react";

const PickSize = () => {
  // test api
  const pickSizeCardData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1635787501769-10b8e23b3ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      size: "Small (S)",
      desc: "Travel Trailer • 18–22 ft • Sleeps 2–3",
      benefits: [
        "Best for 1–2 travelers",
        "Ultra‑easy to tow/park",
        "Great fuel economy",
      ],
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1560871958-59f4647aa6ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
      size: "Medium (M)",
      desc: "Travel Trailer • 23–26 ft • Sleeps 3–4",
      benefits: [
        "Comfort for small families",
        "Easy setup, intuitive systems",
        "Versatile floorplans",
      ],
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1608161317310-c079ae39d224?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      size: "Large (L)",
      desc: "Travel Trailer • 27–30 ft • Sleeps 4–6",
      benefits: [
        "Room for 4–6",
        "Separate sleeping areas",
        "Larger tanks for boondocking",
      ],
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1714044763161-12910756c633?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      size: "Extra Large (XL)",
      desc: "Travel Trailer / Fifth Wheel • 31–34 ft • Sleeps 6–8",
      benefits: [
        "Spacious living area",
        "Slide‑outs &amp; full galley",
        "Ideal for week+ trips",
      ],
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1652953826135-5b3f50906d85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
      size: "Ultimate (XXL)",
      desc: "Fifth Wheel / Motorcoach (Class A) • 35–40+ ft • Sleeps 8–10+",
      benefits: [
        "Residential feel",
        "Multiple sleeping zones",
        "Perfect for long stays &amp; groups",
      ],
    },
  ];

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
          <div className="pt-5 grid grid-cols-1 gap-4 sm:grid-cols-5">
            {pickSizeCardData.map((card) => (
              <PickSizeCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickSize;
