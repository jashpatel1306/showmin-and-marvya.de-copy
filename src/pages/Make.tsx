import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/make/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import MakeGlance from "@/components/make/MakeGlance";
import MakeRecentProjects from "@/components/make/MakeRecentProjects";
import MakeServiceCard from "@/components/make/MakeServiceCard";
import MakeMarketing from "@/components/make/MakeMarketing";
import MakeProccessSection from "@/components/make/MakeProccessSection";
import WhyWorkWithUs from "@/components/make/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import MakeflowFAQ from "@/components/make/MakeflowFAQ";
import MakeFunnelSection from "@/components/make/MakeFunnelSection";

const Make = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy />
      <MakeGlance />
      <MakeRecentProjects />
      <MakeServiceCard />
      <MakeMarketing />
      <MakeProccessSection />
      <WhyWorkWithUs />
      <Testimonials />
      <MakeflowFAQ />
      <MakeFunnelSection />
      <Footer />
    </div>
  );
};

export default Make;

