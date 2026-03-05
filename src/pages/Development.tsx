import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/development/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import DevelopmentFAQ from "@/components/development/DevelopmentFAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import WorkFlows from "@/components/development/WorkFlows";
import Projects from "@/components/development/Projects";
import PopularServices from "@/components/development/PopularServices";
import PurposeSection from "@/components/development/PurposeSection";

const services = ["Design", "Development", "SEO", "Maintenance", "Copywriting", "AI & Automation"];

const Development = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBy />
      <WorkFlows />
      <Projects />
      <PopularServices />
      <PurposeSection />
      <DevelopmentFAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Development;
