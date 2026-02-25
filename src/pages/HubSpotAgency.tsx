import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/hubSpotAgency/Herosection";
import TrustedBy from "@/components/TrustedBy";
import HubSpotGlance from "@/components/hubSpotAgency/HubSpotGlance";
import HubspotRecentProjects from "@/components/hubSpotAgency/HubspotRecentProjects";
import PopularHubSpotServiceCard from "@/components/hubSpotAgency/PopularHubSpotServiceCard";
import HubSpotMarketing from "@/components/hubSpotAgency/HubSpotMarketing";
import HubSpotProccessSection from "@/components/hubSpotAgency/HubSpotProccessSection";
import WhyWorkWithUs from "@/components/hubSpotAgency/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import HubSpotflowFAQ from "@/components/hubSpotAgency/HubSpotflowFAQ";
import HubSpotFunnelSection from "@/components/hubSpotAgency/HubSpotFunnelSection";

const HubSpotAgency = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <Herosection />
      <TrustedBy /> 
      <HubSpotGlance />
      <HubspotRecentProjects />
      <PopularHubSpotServiceCard />
      <HubSpotMarketing />
      <HubSpotProccessSection />
      <WhyWorkWithUs />
      <Testimonials />
      <HubSpotflowFAQ />
      <HubSpotFunnelSection />
      <Footer />
    </div>
  );
};

export default HubSpotAgency;
