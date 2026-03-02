import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/maintenance/HeroCanvas";
import designCanvasImg from "@/assets/Design/design-canvas.png";
import TrustedBy from "@/components/TrustedBy";
import MaintenanceFAQ from "@/components/maintenance/MaintenanceFAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import HeroSection from "@/components/maintenance/HeroSection";
import PopularServices from "@/components/maintenance/PopularServices";
import WorkFlows from "@/components/maintenance/WorkFlows";
import Projects from "@/components/maintenance/Projects";
import PurposeSection from "@/components/maintenance/PurposeSection";

const services = ["Design", "Development", "SEO", "Maintenance", "Copywriting", "AI & Automation"];

const Maintenance = () => {
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
      <MaintenanceFAQ />
      <Testimonials />
      <CTA />

      <Footer />
    </div>
  );
};

export default Maintenance;
