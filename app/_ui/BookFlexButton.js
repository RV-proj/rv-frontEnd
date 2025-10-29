import { ChevronRight, Sparkles } from "lucide-react";

export default function BookFlexButton() {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-cyan-300 active:translate-y-px`}
    >
      <Sparkles className="h-4 w-4 transition group-hover:rotate-12" />
      <span>Book Flex+ Now</span>
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}
