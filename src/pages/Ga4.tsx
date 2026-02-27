import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/ga4/Herosection";
import TrustedBy from "@/components/TrustedBy";
import Ga4Glance from "@/components/ga4/Ga4Glance";
import Ga4RecentProjects from "@/components/ga4/Ga4RecentProjects";
import Ga4SpotServiceCard from "@/components/ga4/Ga4SpotServiceCard";
import Ga4Marketing from "@/components/ga4/Ga4Marketing";
import Ga4ProccessSection from "@/components/ga4/Ga4ProccessSection";
import WhyWorkWithUs from "@/components/ga4/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import Ga4FAQ from "@/components/ga4/Ga4FAQ";
import Ga4FunnelSection from "@/components/ga4/Ga4FunnelSection";

const Ga4 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy />
      <Ga4Glance />
      <Ga4RecentProjects />
      <Ga4SpotServiceCard />
      <Ga4Marketing />
      <Ga4ProccessSection />
      <WhyWorkWithUs />
      <Testimonials />
      <Ga4FAQ />
      <Ga4FunnelSection />
      <Footer />
    </div>
  );
};

export default Ga4;

