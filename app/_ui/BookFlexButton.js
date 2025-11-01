import { ChevronRight, Sparkles } from "lucide-react";

export default function BookFlexButton({ color = "default" }) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition active:translate-y-px";

  const colorClasses =
    color === "white"
      ? "bg-white text-slate-900 hover:bg-white/90"
      : "bg-cyan-400 text-slate-900 hover:bg-white/90";

  return (
    <button className={`${baseClasses} ${colorClasses} cursor-pointer`}>
      <Sparkles className="h-4 w-4 transition group-hover:rotate-12" />
      <span>Book Flex+ Now</span>
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}
