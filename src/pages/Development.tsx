import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/development/HeroCanvas";
import designCanvasImg from "@/assets/Design/design-canvas.png";
import TrustedBy from "@/components/TrustedBy";
import PopularServices from "@/components/PopularServices";
import DevelopmentFAQ from "@/components/development/DevelopmentFAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const services = ["Design", "Development", "SEO", "Maintenance", "Copywriting", "AI & Automation"];

const Development = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div>
        <div className="mx-auto max-w-[1240px] px-4 py-12 md:py-20 mt-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 pt-4 lg:pt-8"
            >
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 cursor-pointer hover:bg-secondary transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">Development</span>
                  <motion.svg
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 z-50 rounded-xl border border-border bg-background p-4 shadow-lg"
                    >
                      <div className="flex flex-wrap gap-2 max-w-xs">
                        {services.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors cursor-pointer"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[56px] lg:leading-[1.1]">
                Web development that ships
              </h1>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Showmine builds fast, scalable websites and web apps with clean code and modern tooling.
              </p>
              <div className="pt-2">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-primary-foreground shadow-button transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Chat about development
                </a>
              </div>
            </motion.div>
            <div className="relative">
              <HeroCanvas imageSrc={designCanvasImg} />
            </div>
          </div>
        </div>
        <TrustedBy />
        <PopularServices />
        <DevelopmentFAQ />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Development;
