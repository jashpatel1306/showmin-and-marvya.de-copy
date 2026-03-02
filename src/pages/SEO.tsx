import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/seo/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import PopularServices from "@/components/seo/PopularServices";
import SEOFAQ from "@/components/seo/SEOFAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import WorkFlows from "@/components/seo/WorkFlows";
import Projects from "@/components/seo/Projects";
import PurposeSection from "@/components/seo/PurposeSection";

const SEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBy />
      <WorkFlows />
      <Projects />
      <PopularServices />
      <PurposeSection />
      <SEOFAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default SEO;
