import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/migrateFromElementor/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ElementorGlance from "@/components/migrateFromElementor/ElementorGlance";
import ElementorProjects from "@/components/migrateFromElementor/ElementorProjects";
import ElementorMarketing from "@/components/migrateFromElementor/ElementorMarketing";
import ElementorProccessSection from "@/components/migrateFromElementor/ElementorProccessSection";
import WhyWorkWithUs from "@/components/migrateFromElementor/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import ElementorflowFAQ from "@/components/migrateFromElementor/ElementorflowFAQ";
import ElementorFunnelSection from "@/components/migrateFromElementor/ElementorFunnelSection";

const MigrateFromElementor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy /> 
      <ElementorGlance />
      <ElementorProjects />
      <ElementorMarketing />
      <ElementorProccessSection />
      <WhyWorkWithUs />
      <Testimonials />
      <ElementorflowFAQ />
      <ElementorFunnelSection />
      <Footer />
    </div>
  );
};

export default MigrateFromElementor;

