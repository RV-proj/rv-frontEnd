import { CirclePlay } from "lucide-react";

const SeeHowItWorks = () => {
  return (
    <section className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white/80 transition hover:bg-white/10 cursor-pointer">
      <CirclePlay />
      <h1>See how it works</h1>
    </section>
  );
};

export default SeeHowItWorks;
