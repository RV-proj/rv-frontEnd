import { Sparkles } from "lucide-react";

//   notes
// container will contain max-w-7xl px-4 sm:px-6 pt-10

const OurSecretSauce = () => {
  return (
    <section className="container mx-auto pt-10 max-w-7xl px-4 sm:px-6">
      {/* text */}
      <div className="text-center">
        <h1 className=" mt-5 text-[#27DBFD] uppercase font-semibold text-xs">
          Our Secret Sauce
        </h1>

        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
          AI-powered booking magic
        </h1>

        <p className="mx-auto max-w-3xl text-balance text-white/70 mt-2">
          We do the hard work connecting you with the ultimate <br /> RV at the
          best value—so you don’t waste time or money.
        </p>
      </div>
      <Sparkles className=" h-10 w-10 text-cyan-300" />
      <div></div>
    </section>
  );
};

export default OurSecretSauce;
