import FloorPlansCard from "@/_ui/FloorPlansCard";

const SampleFloorplans = () => {
  const floorData = [
    {
      id: 1,
      title: "Small",
      size: "1000 sq ft",
      beds: 2,
      details: "Spacious",
    },
    { id: 2, title: "Small", size: "1200 sq ft", beds: 3, details: "Modern" },
    { id: 2, title: "Small", size: "1200 sq ft", beds: 3, details: "Modern" },
    { id: 2, title: "Small", size: "1200 sq ft", beds: 3, details: "Modern" },
  ];

  //   notes
  // container will contain max-w-7xl px-4 sm:px-6 pt-10
  return (
    <section className="bg-slate-950/60 py-16">
      <div className="container mx-auto  max-w-7xl px-4 sm:px-6">
        {/* text */}
        <div className="text-center">
          <h1 className="text-center  text-[#27DBFD] uppercase font-semibold text-xs">
            Sample floorplans
          </h1>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
            Layouts you’ll love
          </h1>

          <p className="mx-auto max-w-3xl text-balance text-white/70 mt-2">
            Exact floorplan varies by match. Here are common industry standards
            by size.
          </p>
        </div>

        {/* card */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          {floorData.map((floor) => (
            <FloorPlansCard key={floor.id} {...floor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleFloorplans;
