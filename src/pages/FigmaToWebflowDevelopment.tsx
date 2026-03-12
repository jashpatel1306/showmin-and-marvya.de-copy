import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import HeroSection from "@/components/FigmaToWebflowDevelopment/HeroSection";
import ServiceSection from "@/components/FigmaToWebflowDevelopment/ServiceSection";
import FaqSection from "@/components/FigmaToWebflowDevelopment/FaqSection";
import PopularServices from "@/components/FigmaToWebflowDevelopment/PopularServices";
import Process from "@/components/Process";

const FigmaToWebflowDevelopment = () => {
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

export default FigmaToWebflowDevelopment;

