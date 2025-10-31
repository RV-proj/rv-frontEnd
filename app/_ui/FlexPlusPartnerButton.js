import { ChevronRight } from "lucide-react";

const FlexPlusPartnerButton = () => {
  return (
    <button className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/20">
      Become a Flex+ Partner <ChevronRight className="" />
    </button>
  );
};

export default FlexPlusPartnerButton;
