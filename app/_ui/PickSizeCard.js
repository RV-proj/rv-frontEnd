import { Check } from "lucide-react";
import Image from "next/image";

const PickSizeCard = ({ size, desc, benefits, img }) => {
  return (
    <div className="rounded-2xl overflow-hidden border text-left bg-slate-900 ring ring-cyan-400 border-transparent transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="relative">
        {/* img */}
        <Image
          src={img}
          alt=""
          width={200}
          height={200}
          className="object-cover h-[150px] w-full brightness-50"
        />
        {/* text */}
        <div className="absolute bottom-5 left-5">
          {/* size */}
          <h1 className="text-sm opacity-90 text-white font-bold">{size}</h1>
          {/* desc */}
          <p className="text-xs opacity-80 text-white ">{desc}</p>
        </div>
      </div>
      {/* details */}
      <div className="p-4">
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <p className="text-white/80">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PickSizeCard;
