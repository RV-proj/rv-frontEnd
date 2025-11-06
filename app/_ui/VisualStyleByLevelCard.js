import Image from "next/image";
import TierBadge from "./TierBadge";

const VisualStyleByLevelCard = ({ img, tag, note, label, plan }) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 ">
      {/* img */}
      <div className="relative z-10">
        <Image
          src={img}
          alt="RVEEDOM Flex+"
          width={200}
          height={200}
          className="h-[300px] w-full object-cover"
        />
        <div className={`absolute inset-0 opacity-25 ${tag} `}></div>
      </div>
      {/* badge */}
      <div className="px-5 pb-5">
        <div className="flex  gap-3 items-center mt-5">
          {/* Quality level badge with an icon and name */}
          <div>
            <TierBadge tierKey={plan} />
          </div>

          <div>
            <p className="text-sm text-slate-300 ">{note}</p>
          </div>
        </div>

        {/* <div>
          <p className="text-sm text-slate-300 mt-2">{note}</p>
        </div> */}
      </div>
    </div>
  );
};

export default VisualStyleByLevelCard;
