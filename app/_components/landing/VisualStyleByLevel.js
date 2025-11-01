import QualityLevelCard from "@/_ui/QualityLevelCard";

const VisualStyleByLevel = () => {
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
          <div>
            <QualityLevelCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualStyleByLevel;
