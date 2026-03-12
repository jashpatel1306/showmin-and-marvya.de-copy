import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FaqSection from "@/components/CustomAiInterface/FaqSection";
import HeroSection from "@/components/CustomAiInterface/HeroSection";
import ServiceSection from "@/components/CustomAiInterface/ServiceSection";
import Process from "@/components/Process";
import PopularServices from "@/components/CustomAiInterface/PopularServices";

const CustomAiInterface = () => {
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

export default CustomAiInterface;

