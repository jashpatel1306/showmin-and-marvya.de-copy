
import { motion } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const caseStudies = [
  {
    videoSrc: "https://framerusercontent.com/assets/x299ObADfs04u2HWJ5wwQJoGrg.mp4",
    backgroundImage: "https://framerusercontent.com/images/0vgRip7c5uFxjUc7mWaKmQeII.jpg",
    stat: "300%",
    statLabel: "Increase in enterprise leads",
    category: "SaaS",
    countryFlag: "🇨🇦",
    description: "Ongoing Design & Development Support for Voiceflow’s Marketing Website.",
    testimonial: "Description: We truly enjoy working with the Showmine team. Their deep expertise in Webflow — from thoughtful design execution to innovative development solutions — consistently helps us improve and scale our marketing site.",
    clientName: "Daniel D'Souza",
    clientRole: "Head of Growth at Voiceflow",
    clientAvatar: "https://framerusercontent.com/images/5M5spO6nxHokpgsXWAUd8Wk3yc.png",
  },
  {
    videoSrc: "https://framerusercontent.com/assets/njPHl1FkYIA3QPATOSRiX36dQ.mp4",
    backgroundImage: "https://framerusercontent.com/images/aLeKBNFcnH63tbSKw4EfueNHwQk.jpg",
    stat: "0 to 20k+",
    statLabel: "Monthly visits in 10 months",
    category: "Nonprofit",
    countryFlag: "🇬🇧",
    description: "Development and Continuous Management of FoodFacts’ Content-Driven Platform.",
    testimonial: "Their dedication to quality is reflected in every part of the website. We’re proud of the exceptional resource they’ve built and continue to maintain for our audience.",
    clientName: "Robbie Lockie",
    clientRole: "CEO at FoodFacts",
    clientAvatar: "https://framerusercontent.com/images/Bxhs6oz2LYrzLbnB5pNpPwE.jpg",
  },
];

const RecentWork = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Recent work
          </h2>
        </motion.div>
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            asChild
            className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-6 py-3 rounded-lg shadow-[inset_0_6.75px_13.5px_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_rgba(255,255,255,0.34),0_1.125px_2.25px_rgba(8,8,8,0.19),0_4px_4.5px_rgba(8,8,8,0.05)]"
          >
            <Link to="/portfolio">View portfolio</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWork;
