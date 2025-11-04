import { tiers } from "@/_lists/tiers";
import { Check, Gem } from "lucide-react";
import TierBadge from "./TierBadge";
import QualityBadge from "./QualityBadge";

const QualityLevelCard = ({
  // badgeColor,
  // textColor,
  // level,
  plan,
  benefits,
  backgroundColor,
  qualityScore,
  slogan,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-4 border relative z-10 overflow-hidden border-transparent cursor-pointer ${
        isSelected ? "ring ring-cyan-400 border-cyan-400" : "border-transparent"
      }`}
    >
      <div
        className={`${backgroundColor} inset-0 w-full h-full absolute -z-10`}
      ></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 w-[70%]">
          {/* badge */}
          <TierBadge tierKey={plan} />
          {/* <div
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
          </div> */}

          <p className="text-slate-400 text-xs">{slogan}</p>
        </div>

        <QualityBadge quality={qualityScore} />
      </div>

      <div className="flex items-start justify-between pt-3">
        <ul className="grid grid-cols-2 gap-x-0 gap-y-2 w-[80%]">
          {benefits.map((benefit, index) => (
            <li key={index}>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <p className="text-white/80">{benefit}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QualityLevelCard;
