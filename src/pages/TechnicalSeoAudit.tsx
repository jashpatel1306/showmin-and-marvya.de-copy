import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import HeroSection from "@/components/TechnicalSeoAudit/HeroSection";
import Process from "@/components/Process";
import ServiceSection from "@/components/TechnicalSeoAudit/ServiceSection";
import FaqSection from "@/components/TechnicalSeoAudit/FaqSection";
import PopularServices from "@/components/TechnicalSeoAudit/PopularServices";

const TechnicalSeoAudit = () => {
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

export default TechnicalSeoAudit;

