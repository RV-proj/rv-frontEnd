import BookFlexButton from "@/_ui/BookFlexButton";

const Ready = () => {
  return (
    <section className="bg-slate-950/60 py-16">
      <div className="bg-linear-to-r from-cyan-600 to-blue-600 py-8">
        <div className="container mx-auto  max-w-7xl px-4 sm:px-6">
          {/* flex here */}
          <div className="flex items-center md:flex-row flex-col md:justify-between justify-center md:gap-0 gap-5 md:text-start text-center">
            {/* text */}
            <div>
              <h1 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Ready?
              </h1>
              <p className="text-balance text-xl font-extrabold text-white sm:text-2xl">
                Save more on the same RV type with Flex+
              </p>
            </div>

            {/* button */}
            <BookFlexButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
