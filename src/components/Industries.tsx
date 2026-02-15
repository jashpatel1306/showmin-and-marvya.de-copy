import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface IndustryCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
}

export const IndustryCard = ({ title, imageUrl, imageAlt }: IndustryCardProps) => {
  return (
    <div className="relative w-[280px] md:w-[320px] h-[400px] md:h-[480px] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer">
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
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-xl md:text-2xl font-semibold">
            {title}
          </h3>
          <div className="w-9 h-9 rounded-full bg-white/40 flex items-center justify-center">
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      {/* Shadow overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

const industries = [
  {
    title: "SaaS",
    imageUrl:
      "https://framerusercontent.com/images/nSHkOdyFNwlBYoEymvENkn4rlII.png?scale-down-to=1024",
    imageAlt: "photo of three people working at a saas agency having a meeting",
  },
  {
    title: "Nonprofits",
    imageUrl:
      "https://framerusercontent.com/images/osc0QT1r4VHNQevoEKxf70jzo.png?scale-down-to=1024",
    imageAlt: "photo of a woman who is part of a charity",
  },
  {
    title: "Digital Agencies",
    imageUrl:
      "https://framerusercontent.com/images/OzfMsOb1rIlS0zM5Nq6dxbUwC8.png?scale-down-to=1024",
    imageAlt: "photo of two woman working together at a digital agency",
  },
  {
    title: "E-commerce",
    imageUrl:
      "https://framerusercontent.com/images/NdixShUQeJ8X9rhvzQIIbp1nro.png?scale-down-to=1024",
    imageAlt: "photo of an e-commerce website",
  },
  {
    title: "Finance",
    imageUrl:
      "https://framerusercontent.com/images/oOnECjIh7KpAGrWpnng7jg3Mom0.png?scale-down-to=1024",
    imageAlt: "photo of three finance people gathered around a table",
  },
  {
    title: "Real Estate",
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
          className="text-3xl md:text-4xl font-semibold text-foreground mb-8"
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
