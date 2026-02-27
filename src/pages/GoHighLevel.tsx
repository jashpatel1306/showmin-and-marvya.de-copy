import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/goHighLevel/Herosection";
import TrustedBy from "@/components/TrustedBy";
import GoHighLevelGlance from "@/components/goHighLevel/GoHighLevelGlance";
import GoHighLevelServiceCard from "@/components/goHighLevel/GoHighLevelServiceCard";
import GoHighLevelMarketing from "@/components/goHighLevel/GoHighLevelMarketing";
import GoHighLevelProccessSection from "@/components/goHighLevel/GoHighLevelProccessSection";
import WhyWorkWithUs from "@/components/goHighLevel/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import GoHighLevelFAQ from "@/components/goHighLevel/GoHighLevelFAQ";
import GoHighLevelFunnelSection from "@/components/goHighLevel/GoHighLevelFunnelSection";

const GoHighLevel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy /> 
     <GoHighLevelGlance />
     <GoHighLevelServiceCard />
     <GoHighLevelMarketing />
     <GoHighLevelProccessSection />
     <WhyWorkWithUs />
     <Testimonials />
     <GoHighLevelFAQ />
     <GoHighLevelFunnelSection />
      <Footer />
    </div>
  );
};

export default GoHighLevel;

