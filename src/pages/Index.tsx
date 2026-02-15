import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import RecentWork from "@/components/RecentWork";
import PopularServices from "@/components/PopularServices";
import Industries from "@/components/Industries";
import Stack from "@/components/Stack";
import LetsHappen from "@/components/LetsHappen";
import FinalCTA from "@/components/FinalCTA";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <RecentWork />
        <PopularServices />
        <Industries />
        <Stack />
        <LetsHappen />
        <FinalCTA />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
