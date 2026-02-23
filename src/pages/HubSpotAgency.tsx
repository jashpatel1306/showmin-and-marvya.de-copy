import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Herosection from "@/components/hubSpotAgency/Herosection";
import TrustedBy from "@/components/TrustedBy";

const HubSpotAgency = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <Herosection />
      <TrustedBy /> 
      <Footer />
    </div>
  );
};

export default HubSpotAgency;
