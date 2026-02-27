import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/migrateFromGoDaddy/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import GodaddyGlance from "@/components/migrateFromGoDaddy/GodaddyGlance";
import GoDaddyProjects from "@/components/migrateFromGoDaddy/GoDaddyProjects";
import GoDaddyMarketing from "@/components/migrateFromGoDaddy/GoDaddyMarketing";
import GodaddyProccessSection from "@/components/migrateFromGoDaddy/GodaddyProccessSection";
import WhyWorkWithUs from "@/components/migrateFromGoDaddy/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import GoDaddyflowFAQ from "@/components/migrateFromGoDaddy/GoDaddyflowFAQ";
import GoDaddyFunnelSection from "@/components/migrateFromGoDaddy/GoDaddyFunnelSection";

const MigrateFromGoDaddy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy />
      <GodaddyGlance />
      <GoDaddyProjects />
      <GoDaddyMarketing />
      <GodaddyProccessSection />
      <WhyWorkWithUs />
      <Testimonials />
      <GoDaddyflowFAQ />
      <GoDaddyFunnelSection />
      <Footer />
    </div>
  );
};

export default MigrateFromGoDaddy;

