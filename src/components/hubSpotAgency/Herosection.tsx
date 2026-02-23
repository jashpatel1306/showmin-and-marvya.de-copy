import { motion, useScroll, useTransform } from "framer-motion";
import WaveAnimation from "./WaveAnimation";
// import HeroBadge from "@/components/HeroBadge";
// import DashboardPreview from "@/components/DashboardPreview";
import hubspotIcon from "@/assets/HubSpotAgency/hubspot-icon.png";
import dashboardImg from "@/assets/HubSpotAgency/dashboard-preview.webp";
import { useRef } from "react";


const HeroBadge = () => {
  return (
    <div className="badge-frosted inline-flex items-center gap-2 px-3 py-1.5">
      <img
        src={hubspotIcon}
        alt="HubSpot"
        className="w-5 h-5 object-cover"
      />
      <span className="text-sm font-medium text-foreground">
        HubSpot CRM and funnels
      </span>
    </div>
  );
};

const Herosection = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Wave background */}
        <div className="absolute inset-0 z-0" style={{ height: 540 }}>
          <WaveAnimation />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center pt-32 sm:pt-40 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroBadge />
          </motion.div>

          <motion.h1
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-center max-w-4xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            HubSpot agency for CRM and funnels
          </motion.h1>

          <motion.p
            className="mt-6 text-base sm:text-lg text-foreground max-w-2xl text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We set up and improve HubSpot so your website, funnels, and follow up all connect cleanly. You get clear pipelines, cleaner data, and a website that feeds HubSpot instead of leaving your team guessing.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="/get-started"
              className="cta-primary bg-blue-500 text-white rounded-lg inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all"
            >
              Get started
            </a>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <div
          ref={containerRef}
          className="w-full max-w-[1270px] mx-auto px-4 sm:px-8 mt-12 sm:mt-16"
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="rounded-xl overflow-hidden shadow-2xl border border-foreground/5"
            style={{ rotateX, opacity }}
          >
            <img
              src={dashboardImg}
              alt="Dashboard preview showing a WordPress website in development for Resurgam"
              className="w-full h-auto block"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
