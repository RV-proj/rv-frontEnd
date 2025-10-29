import Card from "@/_ui/Card";
import { CircleCheck } from "lucide-react";

const Pricing = () => {
  const cardData = [
    {
      id: 1,
      title: "Flex+ Booking",
    },
    {
      id: 2,
      title: "Typical Marketplace",
    },
  ];
  return (
    <section className="container mx-auto">
      {/* pricing */}
      <div>
        <h1 className="text-center mt-5 text-[#27DBFD] uppercase font-semibold text-xs">
          Pricing
        </h1>
        <p className="text-center text-4xl text-white font-bold mt-2">
          Flex+ vs. standard marketplace
        </p>
        <p className="text-base text-white/70 text-center mt-2">
          Our model lowers total trip cost while lifting quality and support.
        </p>
      </div>

      {/* REVIEW  card */}
      <div className="mt-10">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
