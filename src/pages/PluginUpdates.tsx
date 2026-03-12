import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Process from "@/components/Process";
import HeroSection from "@/components/PluginUpdates/HeroSection";
import ServiceSection from "@/components/PluginUpdates/ServiceSection";
import FaqSection from "@/components/PluginUpdates/FaqSection";
import PopularServices from "@/components/PluginUpdates/PopularServices";

const PluginUpdates = () => {
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

export default PluginUpdates;

