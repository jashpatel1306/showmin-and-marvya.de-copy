import { motion } from "framer-motion";
import projectVoiceflow from "@/assets/Seo/project.webp";
import projectFoodfacts from "@/assets/project-foodfacts.png";
import projectConsensus from "@/assets/project-consensus.png";
import project1dsmax from "@/assets/project-1dsmax.webp";
import avatarDaniel from "@/assets/avatar-daniel.png";
import avatarRobbie from "@/assets/avatar-robbie.jpg";
import bgGreen from "@/assets/bg-green.jpg";
import bgBlueOrange from "@/assets/Seo/project-bg.jpg";
import StarRating from "../portfolio/StarRating";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";


interface ProjectCardProps {
  backgroundImage: string;
  screenshotImage: string;
  screenshotAlt: string;
  statValue: string;
  statLabel: string;
  category: string;
  countryFlag: string;
  description: string;
  testimonial?: string;
  reviewerName?: string;
  reviewerRole?: string;
  reviewerAvatar?: string;
  layout?: "left" | "right";
}

const ProjectCard = ({
  backgroundImage,
  screenshotImage,
  screenshotAlt,
  statValue,
  statLabel,
  category,
  countryFlag,
  description,
  testimonial,
  reviewerName,
  reviewerRole,
  reviewerAvatar,
  layout = "left",
}: ProjectCardProps) => {
  const imageSection = (
    <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[400px] lg:min-h-[500px]">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Screenshot overlay */}
      <div className="absolute inset-6 flex items-center justify-center">
        <div className="relative w-full max-w-[90%] rounded-md border border-foreground/10 shadow-2xl">
          <img
            src={screenshotImage}
            alt={screenshotAlt}
            className="w-full h-auto rounded-md object-contain"
          />
        </div>
      </div>

      {/* Stat badge */}
      {statValue && (
        <div className="absolute bottom-5 left-5 right-5 rounded-xl p-4 flex items-center gap-4 bg-card/90 backdrop-blur-sm">
          <div className="pr-4 border-r border-foreground/10">
            <span className="text-2xl font-semibold text-foreground font-display">
              {statValue}
            </span>
          </div>
          <span className="text-sm text-foreground">{statLabel}</span>
        </div>
      )}
    </div>
  );

  const contentSection = (
    <div className="flex-1 flex flex-col justify-center px-2 lg:px-10 py-8 space-y-8">
      {/* Tags */}
      <div className="flex items-center gap-3">
        <span className="text-base text-muted-foreground">{category}</span>
        <span className="w-px h-5 bg-muted-foreground/40" />
        <span className="text-lg">{countryFlag}</span>
      </div>

      {/* Description as heading */}
      <h2 className="text-3xl lg:text-4xl font-display font-medium leading-tight text-foreground">
        {description}
      </h2>

      {/* Testimonial */}
      {testimonial && (
        <div className="space-y-5">
          <StarRating />
          <p className="text-base leading-relaxed text-foreground">
            {testimonial}
          </p>

          {reviewerName && (
            <div className="flex items-center gap-3 pt-2">
              {reviewerAvatar && (
                <img
                  src={reviewerAvatar}
                  alt={reviewerName}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {reviewerName}
                </p>
                <p className="text-sm text-muted-foreground">{reviewerRole}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      className="rounded-[20px] bg-card-surface p-4 lg:p-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {layout === "left" ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {imageSection}
          </>
        )}
      </div>
    </motion.div>
  );
};


const projects = [
  {
    backgroundImage: bgBlueOrange,
    screenshotImage: projectVoiceflow,
    screenshotAlt: "Voiceflow client home page",
    statValue: "300%",
    statLabel: "Increase in enterprise leads",
    category: "SaaS",
    countryFlag: "🇨🇦",
    description:
      "Ongoing design and development support for Voiceflow's marketing site.",
    testimonial:
      "We're huge fans of working with the team at Showmine. They have a unique understanding of Webflow - both from a design perspective and creating innovating development builds.",
    reviewerName: "Daniel D'Souza",
    reviewerRole: "Head of Growth at Voiceflow",
    reviewerAvatar: avatarDaniel,
    layout: "left" as const,
  },
//   {
//     backgroundImage: bgGreen,
//     screenshotImage: projectFoodfacts,
//     screenshotAlt: "FoodFacts client homepage design",
//     statValue: "0 to 20k+",
//     statLabel: "Monthly visits in 10 months",
//     category: "Nonprofit",
//     countryFlag: "🇬🇧",
//     description:
//       "Development and ongoing management of FoodFacts' content-heavy site.",
//     testimonial:
//       "Their commitment to excellence is evident in every aspect of the site, and I take immense pride in the outstanding resource they have developed for us.",
//     reviewerName: "Robbie Lockie",
//     reviewerRole: "CEO at FoodFacts",
//     reviewerAvatar: avatarRobbie,
//     layout: "right" as const,
//   },
//   {
//     backgroundImage: bgBlueOrange,
//     screenshotImage: projectConsensus,
//     screenshotAlt: "Consensus homepage",
//     statValue: "500%",
//     statLabel: "Faster to launch new pages",
//     category: "SaaS",
//     countryFlag: "🇺🇸",
//     description:
//       "Migrated Consensus' 5,000+ page site from complex WordPress to an easy-to-manage Framer build.",
//     layout: "left" as const,
//   },
//   {
//     backgroundImage: bgGreen,
//     screenshotImage: project1dsmax,
//     screenshotAlt: "1DS Max landing page",
//     statValue: "",
//     statLabel: "",
//     category: "Digital agency",
//     countryFlag: "🇺🇸",
//     description:
//       "High-converting landing page design and build for 1DS Max.",
//     layout: "right" as const,
//   },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-24 pb-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-display font-medium tracking-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Recent SEO work

        </motion.h1>
      </section>

      {/* Projects Grid */}
      <section className="max-w-[1400px] mx-auto px-8 pb-24">
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

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
    </main>
  );
};

export default Projects;
