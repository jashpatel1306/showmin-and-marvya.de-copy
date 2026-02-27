import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/openAi/Herosection";
import TrustedBy from "@/components/TrustedBy";
import OpenAiGlance from "@/components/openAi/OpenAiGlance";
import OpenAiRecentProjects from "@/components/openAi/OpenAiRecentProjects";
import OpenAiServiceCard from "@/components/openAi/OpenAiServiceCard";
import OpenAiMarketing from "@/components/openAi/OpenAiMarketing";
import OpenAiProccessSection from "@/components/openAi/OpenAiProccessSection";
import WhyWorkWithUs from "@/components/openAi/WhyWorkWithUs";
import Testimonials from "@/components/Testimonials";
import OpenAiflowFAQ from "@/components/openAi/OpenAiflowFAQ";
import OpenAiFunnelSection from "@/components/openAi/OpenAiFunnelSection";

const OpenAi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy /> 
     <OpenAiGlance />
     <OpenAiRecentProjects />
     <OpenAiServiceCard />
     <OpenAiMarketing />
     <OpenAiProccessSection />
     <WhyWorkWithUs />
     <Testimonials />
     <OpenAiflowFAQ />
     <OpenAiFunnelSection />
      <Footer />
    </div>
  );
};

export default OpenAi;

