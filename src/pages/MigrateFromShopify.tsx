import Header from "@/components/Header";
import Footer from "@/components/Footer";
import shopifyWebflowIcon from "@/assets/shopify-webflow-icon.svg";
import dashboardImg from "@/assets/dashboard-screenshot.webp";
import TrustedBy from "@/components/TrustedBy";
import ShopifyGlance from "@/components/ShopifyGlance";
import FunnelSection from "@/components/FunnelSection";
import WhenToPeelSection from "@/components/WhenToPeelSection";
import HowProjectsRunSection from "@/components/HowProjectsRunSection";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ShopifyFAQ from "@/components/ShopifyFAQ";
import Testimonials from "@/components/Testimonials";
import RecentProjects from "@/components/RecentProjects";
import HeroSection from "@/components/shopifyAgency/HeroSection";

const MigrateFromShopify = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBy />
      <ShopifyGlance />
      <RecentProjects />
      <WhenToPeelSection />
      <HowProjectsRunSection />
      <WhyWorkWithUs />
      <Testimonials />
      <ShopifyFAQ />
      <FunnelSection />
      <Footer />
    </div>
  );
};

export default MigrateFromShopify;

