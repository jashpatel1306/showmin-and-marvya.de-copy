// Loveable desing inprogess in this page on jash.p@vedaha.com account.

import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCard from "@/components/leading/HeroCard";
import StatsBar from "@/components/leading/StatsBar";
import ServiceDetail from "@/components/leading/ServiceDetail";
import LandingFAQ from "@/components/leading/LandingFAQ";
import LandingRecentDesign from "@/components/leading/LandingRecentDesign";
import Stack from "@/components/Stack";
import FinalCTA from "@/components/FinalCTA";
import CTA from "@/components/CTA";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8 lg:px-16">
        <HeroCard />
        <StatsBar />
        <ServiceDetail />
        <LandingFAQ />
        <LandingRecentDesign />
        <Stack />
        <CTA />
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Landing;
