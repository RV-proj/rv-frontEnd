import { ChevronRight, Sparkles } from "lucide-react";

export default function BookFlexButton({ color = "default" }) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition active:translate-y-px";

  const colorClasses =
    color === "white"
      ? "bg-white/5 text-white/60 hover:bg-white/10"
      : "bg-cyan-400 text-slate-900 hover:bg-cyan-300";

  return (
    <button className={`${baseClasses} ${colorClasses}`}>
      <Sparkles className="h-4 w-4 transition group-hover:rotate-12" />
      <span>Book Flex+ Now</span>
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}
