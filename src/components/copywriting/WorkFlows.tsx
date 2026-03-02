import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cardTyping from "@/assets/Copywriting/1.png";
import cardPresenting from "@/assets/Copywriting/2.png";
import cardLaptop from "@/assets/Copywriting/3.png";
import { useState } from "react";

const cards = [
    {
      title: "Clarify your offer",
      description:
        "We translate complex products and services into clear, accessible language that still feels true to your brand.",
      image: cardPresenting,
      alt: "Team discussing ideas in a warm, collaborative workspace",
    },
    {
      title: "Create a consistent voice",
      description:
        "A unified tone across your website, landing pages, and emails so your messaging feels cohesive and professional.",
      image: cardLaptop,
      alt: "Team reviewing content on a laptop in a creative studio",
    },
    {
      title: "Encourage action naturally",
      description:
        "Thoughtful calls to action and clear signposting that guide visitors toward the next step without pressure.",
      image: cardTyping,
      alt: "Person typing content on a laptop in a focused workspace",
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

const WorkFlows = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] max-w-xl"
        >
          Turn ideas into clear messages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-lg text-muted-foreground leading-relaxed max-w-md"
        >
          Good copy is about helping people understand what you do, who it is for,
          and why it helps. We listen, ask questions, and then turn everything into
          confident copy.
        </motion.p>
      </div>

      {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, i) => (
        <CreativeCard key={card.title} {...card} index={i} />
      ))}
    </div>
    </section>
  );
};

export default WorkFlows;
