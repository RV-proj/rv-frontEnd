import FullMatrix from "@/_components/RVSelect/FullMatrix";
import PickSize from "@/_components/RVSelect/PickSize";
import QualityLevel from "@/_components/RVSelect/QualityLevel";
import QualityScore from "@/_components/RVSelect/QualityScore";
import YourSelection from "@/_components/RVSelect/YourSelection";

export default function Page() {
  return (
    <section className="bg-[#020618]">
      <PickSize />
      <QualityLevel />
      <QualityScore />
      <YourSelection />
      <FullMatrix />
    </section>
  );
}
