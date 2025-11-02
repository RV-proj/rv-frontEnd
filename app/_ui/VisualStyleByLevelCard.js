import { Gem } from "lucide-react";
import Image from "next/image";

const VisualStyleByLevelCard = ({
  text,
  plan,
  img,
  badgeColor,
  textColor,
  level,
  backgroundColor,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 ">
      {/* img */}
      <div className="relative">
        <Image
          src={img}
          alt="RVEEDOM Flex+"
          width={200}
          height={200}
          className="h-auto w-full object-cover"
        />
        <div className={`absolute inset-0 ${backgroundColor}`}></div>
      </div>

      <div className="px-5 pb-5">
        <div className="flex justify-between items-center mt-5">
          {/* Quality level badge with an icon and name */}
          <div
            className={`flex items-center gap-2 px-2 py-1 rounded-full border ${badgeColor}`}
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: level }).map((_, index) => (
                <Gem key={index} className={`w-4 h-4 ${textColor}`} />
              ))}
            </div>
            <h1 className={` font-normal text-sm capitalize ${textColor}`}>
              {plan}
            </h1>
          </div>

          <div></div>
        </div>

        <div>
          <p className="text-sm text-slate-300 mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default VisualStyleByLevelCard;
