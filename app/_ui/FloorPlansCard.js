import Image from "next/image";
import Pill from "./Pill";

const FloorPlansCard = ({ title, size, beds, details }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-800/60 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur ">
      {/* title size beds */}
      <div className="flex items-center justify-between">
        {title && <h2 className="text-lg font-bold text-white">{title}</h2>}
        <Pill>
          {size}
          {beds}
        </Pill>
      </div>
      {/* card */}
      <div>
        {
          <div className="pt-3">
            {/* image */}
            <Image
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974"
              alt="floorplan1"
              className="h-28 w-full object-cover rounded-md"
              width={800}
              height={450}
            />
            <div className="">
              <h1>{details}</h1>
            </div>
          </div>
        }``
      </div>
    </div>
  );
};

export default FloorPlansCard;
