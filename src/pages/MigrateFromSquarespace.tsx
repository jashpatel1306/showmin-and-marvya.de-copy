import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/migrateFromSquarespace/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import SquarespaceGlance from "@/components/migrateFromSquarespace/SquarespaceGlance";
import SquarespaceProjects from "@/components/migrateFromSquarespace/SquarespaceProjects";
import SquarespaceMarketing from "@/components/migrateFromSquarespace/SquarespaceMarketing";
import SquarespaceProccessSection from "@/components/migrateFromSquarespace/SquarespaceProccessSection";
import WhyWorkWithUs from "@/components/migrateFromSquarespace/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import SquarespaceFAQ from "@/components/migrateFromSquarespace/SquarespaceFAQ";
import SquarespaceFunnelSection from "@/components/migrateFromSquarespace/SquarespaceFunnelSection";

const MigrateFromSquarespace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy />
      <SquarespaceGlance />
      <SquarespaceProjects />
      <SquarespaceMarketing />
      <SquarespaceProccessSection />
      <WhyWorkWithUs />
      <Testimonials />
      <SquarespaceFAQ />
      <SquarespaceFunnelSection />
      <Footer />
    </div>
  );
};

export default MigrateFromSquarespace;

