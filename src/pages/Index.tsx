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
import { motion } from "framer-motion";
import JashIcon from "@/assets/TeamMember/jash.jpg";
import JainishIcon from "@/assets/TeamMember/jainish.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustedBy />

        <section className="py-16 md:pb-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">

            {/* Co-founders Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-24 text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center gap-4 mb-8">
                <div className="relative">
                  <img
                    src={JashIcon}
                    alt="Zac Santer"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-background shadow-lg"
                  />
                </div>
                <div className="relative -ml-4">
                  <img
                    src={JainishIcon}
                    alt="Ellie Hill"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-background shadow-lg"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Co-founders of Showmine</p>

              <h2 className="section-title mb-6">
                Built to Launch. Designed to Grow.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start with a focused website build, or choose ongoing support for design, development, and SEO to continuously grow your online presence.
              </p>
              <a href="#contact" className="btn-primary">
                Get started
              </a>
            </motion.div>
          </div>
        </section>


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
