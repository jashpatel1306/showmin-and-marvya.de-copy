import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Design",
    description: "Beautiful & purposeful design",
    href: "/design",
  },
  {
    title: "Development",
    description: "Fast, reliable cross-platform builds",
    href: "/development",
  },
  {
    title: "SEO",
    description: "Improving your search visibility",
    href: "/seo",
  },
  {
    title: "Maintenance",
    description: "Updates, fixes & improvements",
    href: "/maintenance",
  },
  {
    title: "Copywriting",
    description: "Clear, human-first copy",
    href: "/copywriting",
  },
  {
    title: "AI & Automation",
    description: "Automate your business",
    href: "/ai-automation",
  },
];


const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 330;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="w-full py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Explore services
        </motion.h2>
        {/* Scrollable container */}
        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ scrollSnapAlign: "start" }}
              >
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  subtitle={service.description}
                  variant={service.title.toLowerCase().replace(/[^a-z]/g, "")}
                  href={service.href}
                />
              </motion.div>
            ))}
          </div>
          {/* Navigation buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg z-10 hover:scale-105 transition-transform"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg z-10 hover:scale-105 transition-transform"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
