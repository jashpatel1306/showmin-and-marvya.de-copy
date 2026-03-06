import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/Figma/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import FigmaGlance from "@/components/Figma/FigmaGlance";
import FigmaProjects from "@/components/Figma/FigmaProjects";
import FigmaServices from "@/components/Figma/FigmaServices";
import FigmaMarketing from "@/components/Figma/FigmaMarketing";
import FigmaProccessSection from "@/components/Figma/FigmaProccessSection";
import WhyWorkWithUs from "@/components/Figma/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import FigmaflowFAQ from "@/components/Figma/FigmaflowFAQ";
import FigmaFunnelSection from "@/components/Figma/FigmaFunnelSection";
import CTA from "@/components/CTA";

const FigmaAgency = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy /> 
      <FigmaGlance />
      <FigmaProjects />
      <FigmaServices />
      <FigmaMarketing />
      <FigmaProccessSection />
      <WhyWorkWithUs />
       <Testimonials />
       <FigmaflowFAQ />
       <FigmaFunnelSection />
       <CTA />
      <Footer />
    </div>
  );
};

export default FigmaAgency;

