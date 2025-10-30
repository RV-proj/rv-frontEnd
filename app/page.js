import Hero from "@/_components/landing/Hero";
import Pricing from "@/_components/landing/Pricing";
import Why from "./_components/landing/Why";
import OurSecretSauce from "./_components/landing/OurSecretSauce";
import Pricing from "./_components/landing/Pricing";
import SampleFloorplans from "./_components/landing/SampleFloorplans";
import Divider from "./_ui/Divider";

export default function Page() {
  return (
    <>
      <Hero />
      <Why />
      <Pricing />
      <Divider />
      <OurSecretSauce />
      <Divider />
      <SampleFloorplans />
    </>
  );
}
