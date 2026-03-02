import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/copywriting/HeroCanvas";
import designCanvasImg from "@/assets/Design/design-canvas.png";
import TrustedBy from "@/components/TrustedBy";
import PopularServices from "@/components/copywriting/PopularServices";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import HeroSection from "@/components/copywriting/HeroCanvas";
import WorkFlows from "@/components/copywriting/WorkFlows";
import Projects from "@/components/copywriting/Projects";
import PurposeSection from "@/components/copywriting/PurposeSection";
import CopyWritingFAQ from "@/components/copywriting/CopywritingFAQ";

const services = ["Design", "Development", "SEO", "Maintenance", "Copywriting", "AI & Automation"];

const Copywriting = () => {
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
      <CopyWritingFAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Copywriting;