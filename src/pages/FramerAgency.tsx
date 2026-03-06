import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/framer/Herosection";
import TrustedBy from "@/components/TrustedBy";
import FramerGlance from "@/components/framer/FramerGlance";
import FramerProjects from "@/components/framer/FramerProjects";
import FramerMarketing from "@/components/framer/FramerMarketing";
import FramerServices from "@/components/framer/FramerServices";
import FramerProccessSection from "@/components/framer/FramerProccessSection";
import WhyWorkWithUs from "@/components/framer/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import FramerflowFAQ from "@/components/framer/FramerflowFAQ";
import FramerFunnelSection from "@/components/framer/FramerFunnelSection";
import CTA from "@/components/CTA";

const FramerAgency = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy /> 
      <FramerGlance />
      <FramerProjects />
      <FramerServices />
      <FramerMarketing />
      <FramerProccessSection />
      <WhyWorkWithUs />
      <Testimonials />
      <FramerflowFAQ />
      <FramerFunnelSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default FramerAgency;

