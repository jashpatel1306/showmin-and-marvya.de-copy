import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/aiAutomation/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import WorkFlows from "@/components/aiAutomation/WorkFlows";
import Projects from "@/components/aiAutomation/Projects";
import PopularServices from "@/components/aiAutomation/PopularServices";
import PurposeSection from "@/components/aiAutomation/PurposeSection";
import AiFAQ from "@/components/aiAutomation/AiFAQ";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";

const AiAutomation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBy />
      <WorkFlows />
      <Projects />
      <PopularServices />
      <PurposeSection />
      <AiFAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default AiAutomation;

