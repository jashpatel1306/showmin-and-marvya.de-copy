import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cardDesignAnything from "@/assets/Seo/1.png";
import cardStayOnBrand from "@/assets/Seo/2.png";
import cardGetCreative from "@/assets/Seo/3.png";

const cards = [
    {
      title: "Resolve technical barriers",
      description:
        "We fix crawl errors, improve slow-loading pages, and tidy up technical structures so search engines can properly access and trust your site.",
      image: cardDesignAnything,
      alt: "Team collaborating in a professional workspace",
    },
    {
      title: "Structure content strategically",
      description:
        "We refine site architecture and internal linking so both users and search engines are guided toward your most valuable pages.",
      image: cardStayOnBrand,
      alt: "Hands reviewing layout and design materials",
    },
    {
      title: "Attract high-intent traffic",
      description:
        "Through focused keyword research and content planning, we target visitors who are likely to convert—supported by thoughtful, ethical link building where it adds real value.",
      image: cardGetCreative,
      alt: "Creative concept illustration representing growth and ideas",
    },
  ];

const CreativeCard = ({
  title,
  description,
  image,
  alt,
  index,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      style={{ aspectRatio: "3 / 4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <div className="flex items-end justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white italic mb-1">
              {title}
            </h3>
            <AnimatePresence>
              {hovered && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-white/80 leading-relaxed overflow-hidden"
                >
                  {description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Toggle button */}
          <button
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white/60"
            aria-label={hovered ? "Collapse" : "Expand"}
          >
            <motion.div
              animate={{ rotate: hovered ? 0 : 45 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {!hovered && (
                  <path
                    d="M7 1V13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </motion.div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const WorkFlows = () => (
  <section className="mx-auto max-w-[1240px] px-4 py-16 md:py-24">
    {/* Heading & description */}
    <div className="mb-10 max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-foreground lg:leading-[1.15]"
      >
        Turn search visibility into steady growth
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground"
      >
        Good SEO is a mix of technical health, useful content, clear structure, and authority link signals. We help you get those foundations in place so search becomes a reliable channel, not a guess.
      </motion.p>
    </div>

    {/* Cards grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, i) => (
        <CreativeCard key={card.title} {...card} index={i} />
      ))}
    </div>
  </section>
);

export default WorkFlows;
