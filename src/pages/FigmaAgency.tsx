import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/Figma/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import FigmaGlance from "@/components/Figma/FigmaGlance";
import FigmaProjects from "@/components/Figma/FigmaProjects";
import FigmaServices from "@/components/Figma/FigmaServices";
import FigmaMarketing from "@/components/Figma/FigmaMarketing";

const FigmaAgency = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Herosection />
      <TrustedBy /> 
      <FigmaGlance />
      <FigmaProjects />
      <FigmaServices />
      <FigmaMarketing />
      <Footer />
    </div>
  );
};

export default FigmaAgency;

