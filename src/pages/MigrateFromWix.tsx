import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/migrateFromWix/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import WixGlance from "@/components/migrateFromWix/WixGlance";
import WixProjects from "@/components/migrateFromWix/WixProjects";
import WixMarketing from "@/components/migrateFromWix/WixMarketing";
import WixProccessSection from "@/components/migrateFromWix/WixProccessSection";
import WhyWorkWithUs from "@/components/migrateFromWix/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import WixflowFAQ from "@/components/migrateFromWix/WixflowFAQ";
import WixFunnelSection from "@/components/migrateFromWix/WixFunnelSection";

const MigrateFromWix = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy />
      <WixGlance />
      <WixProjects />
      <WixMarketing />
      <WixProccessSection />
      <WhyWorkWithUs />
      <Testimonials />
      <WixflowFAQ />
      <WixFunnelSection />
      <Footer />
    </div>
  );
};

export default MigrateFromWix;

