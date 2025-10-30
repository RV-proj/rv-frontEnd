//   notes
// container will contain max-w-7xl px-4 sm:px-6 pt-10

import FloorPlansCard from "@/_ui/FloorPlansCard";

const SampleFloorplans = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 pt-10">
      {/* text */}
      <div className="text-center">
        <h1 className="text-center  text-[#27DBFD] uppercase font-semibold text-xs">
          Sample floorplans
        </h1>

        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
          Layouts you’ll love
        </h1>

        <p className="mx-auto max-w-3xl text-balance text-white/70 mt-2">
          Exact floorplan varies by match. Here are common industry standards by
          size.
        </p>
      </div>

      {/* card */}
      <div className="mt-10">{/* <FloorPlansCard /> */}</div>
    </section>
  );
};

export default SampleFloorplans;
