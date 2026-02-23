import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

interface IndustryCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
}

export const IndustryCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
}: IndustryCardProps) => {
  return (
    <div
      className="relative w-[280px] md:w-[320px] h-[400px] md:h-[480px] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
      tabIndex={0}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay border */}
        <div className="absolute inset-0 rounded-lg border border-black/10" />
      </div>
      {/* Shadow overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="max-w-[85%]">
          <h3 className="text-white text-xl md:text-2xl font-semibold transition-transform duration-300 group-hover:-translate-y-0.5 group-focus-within:-translate-y-0.5">
            {title}
          </h3>

          {description ? (
            <div className="overflow-hidden max-h-0 opacity-0 translate-y-2 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:max-h-40 group-focus-within:opacity-100 group-focus-within:translate-y-0">
              <p className="mt-3 text-white/90 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ) : null}
        </div>

        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/35 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/45 group-focus-within:bg-white/45">
          <Plus className="w-5 h-5 text-white transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0" />
          <Minus className="absolute w-5 h-5 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />
        </div>
      </div>
    </div>
  );
};

const industries = [
  {
    title: "SaaS",
    description: "Launch pages, pricing experiences, onboarding flows, and in-product marketing moments designed with clarity, intention, and a polished user experience.",
    imageUrl:
      "https://framerusercontent.com/images/nSHkOdyFNwlBYoEymvENkn4rlII.png?scale-down-to=1024",
    imageAlt: "photo of three people working at a saas agency having a meeting",
  },
  {
    title: "Nonprofits",
    description: "Share your mission with clarity and inspire more donations through trust-focused design and compelling, easy-to-follow calls to action.",
    imageUrl:
      "https://framerusercontent.com/images/osc0QT1r4VHNQevoEKxf70jzo.png?scale-down-to=1024",
    imageAlt: "photo of a woman who is part of a charity",
  },
  {
    title: "Digital Agencies",
    description: "Company websites and campaign landing pages built to showcase the work, thinking, and capabilities of marketing and creative agencies.",
    imageUrl:
      "https://framerusercontent.com/images/OzfMsOb1rIlS0zM5Nq6dxbUwC8.png?scale-down-to=1024",
    imageAlt: "photo of two woman working together at a digital agency",
  },
  {
    title: "E-commerce",
    description: "High-end storefronts and conversion-focused landing pages that deliver a premium feel while loading fast and performing smoothly.",
    imageUrl:
      "https://framerusercontent.com/images/NdixShUQeJ8X9rhvzQIIbp1nro.png?scale-down-to=1024",
    imageAlt: "photo of an e-commerce website",
  },
  {
    title: "Finance",
    description: "Clear, reliable digital experiences designed for brokers, advisors, and fintech teams—focused on trust, compliance, and usability.",
    imageUrl:
      "https://framerusercontent.com/images/oOnECjIh7KpAGrWpnng7jg3Mom0.png?scale-down-to=1024",
    imageAlt: "photo of three finance people gathered around a table",
  },
  {
    title: "Real Estate",
    description: "Professional, trust-focused websites built for agents, developers, and property service teams—designed to showcase listings, expertise, and credibility with clarity.",
    imageUrl:
      "https://framerusercontent.com/images/8HOLMiir5SPK9C4azrGZS0PdXQ.png?scale-down-to=1024",
    imageAlt: "photo of a real estate building",
  },
];

const Industries = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-16 px-8">

      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Industries we serve
        </motion.h2>

        <div className="relative">
        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
              imageUrl={industry.imageUrl}
              imageAlt={industry.imageAlt}
            />
          ))}
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:grid absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 place-items-center rounded-full bg-foreground text-background shadow-lg hover:opacity-90 transition-opacity z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:grid absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 place-items-center rounded-full bg-foreground text-background shadow-lg hover:opacity-90 transition-opacity z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      </div>


      
      
    </section>
  );
};

export default Industries;
