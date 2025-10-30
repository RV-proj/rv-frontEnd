import OurSecretSauce from "./_components/landing/OurSecretSauce";
import Pricing from "./_components/landing/Pricing";
import SampleFloorplans from "./_components/landing/SampleFloorplans";
import Divider from "./_ui/Divider";

export default function Page() {
  return (
    <>
      <Pricing />
      <Divider />
      <OurSecretSauce />
      <Divider />
      <SampleFloorplans />
    </>
  );
}
