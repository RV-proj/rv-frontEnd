import { Check } from "lucide-react";
import TierBadge from "./TierBadge";

const QualityLevelCard = ({
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
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 w-[70%]">
          {/* badge */}
          <TierBadge tierKey={plan} />

          <p className="text-slate-400 text-xs">{slogan}</p>
        </div>

        <div className="w-[10%]">
          <h1 className="text-[10px] text-slate-500 text-end">Quality Score</h1>
        </div>
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
        <h1 className="text-white font-bold">{qualityScore}</h1>
      </div>
    </div>
  );
};

export default QualityLevelCard;
