import Hero from "@/_components/landing/Hero";
import Pricing from "@/_components/landing/Pricing";
import Why from "./_components/landing/Why";
import OurSecretSauce from "./_components/landing/OurSecretSauce";
import SampleFloorplans from "./_components/landing/SampleFloorplans";
import Divider from "./_ui/Divider";
import HappyGuests from "./_components/landing/HappyGuests";
import ForOwners from "./_components/landing/ForOwners";
import Faq from "./_components/landing/Faq";
import Ready from "./_components/landing/Ready";
import Footer from "./_components/Footer/Footer";
import HowItWorks from "./_components/landing/HowItWorks";

export default function Page() {
  return (
    <>
      <Hero />
      <Why />
      <HowItWorks />
      <Pricing />
      <Divider />
      <OurSecretSauce />
      <Divider />
      <SampleFloorplans />
      <Divider />
      <HappyGuests />
      <Divider />
      <ForOwners />
      <Divider />
      <Faq />
      <Ready />
      <Footer />
    </>
  );
}
