import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebflowGlance from "@/components/webflowAgency/WebflowGlance";
import HeroSection from "@/components/webflowAgency/HeroSection";
import DashboardSection from "@/components/webflowAgency/DashboardSection";
import TrustedBy from "@/components/TrustedBy";
import WebflowRecentProjects from "@/components/webflowAgency/WebflowRecentProjects";
import PopularWebflowServiceCard from "@/components/webflowAgency/WebflowServices";
import WebflowMarketing from "@/components/webflowAgency/WebflowMarketing";
import WebflowProccessSection from "@/components/webflowAgency/WebflowProccessSection";
import WebflowWhyWorkWithUs from "@/components/webflowAgency/WebflowWhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import WebflowFAQ from "@/components/webflowAgency/WebflowFAQ";
import WebflowFunnelSection from "@/components/webflowAgency/WebflowFunnelSection";

const WebflowAgency = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      {/* <DashboardSection /> */}
      <TrustedBy />
      <WebflowGlance />
      <WebflowRecentProjects />
      <PopularWebflowServiceCard />
      <WebflowMarketing />
      <WebflowProccessSection />
      <WebflowWhyWorkWithUs />
      <Testimonials />
      <WebflowFAQ />
      <WebflowFunnelSection />
      <Footer />
    </div>
  );
};

export default WebflowAgency;

