import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Process from "@/components/Process";
import ServiceSection from "@/components/WebsiteDesign/ServiceSection";
import FaqSection from "@/components/WebsiteDesign/FaqSection";
import HeroSection from "@/components/WebsiteDesign/HeroSection";
import PopularServices from "@/components/WebsiteDesign/PopularServices";

const WebsiteDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServiceSection />
      <FaqSection />
      <PopularServices />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default WebsiteDesign;

