import { useEffect, useRef, useState } from "react";
import tickerIcon from "@/assets/ticker-icon.png";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

const StepCard = ({ step, title, description }: StepCardProps) => (
  <div
    className="flex-shrink-0 w-[300px] md:w-[320px] rounded-xl"
    style={{ scrollSnapAlign: "start" }}
  >
    <div
      className="rounded-xl border border-border p-6 h-full"
      style={{
        backdropFilter: "blur(10px)",
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)",
      }}
    >
      {/* Step number badge */}
      <div
        className="inline-flex items-center justify-center w-8 h-8 rounded-full border mb-5"
        style={{ borderColor: "rgba(0,0,0,0.1)" }}
      >
        <span
          className="text-[1.35rem] font-black leading-none tracking-tight"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgb(40, 198, 179) 0%, rgb(44, 183, 206) 54%, rgb(53, 169, 239) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {step}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const steps = [
  {
    step: 1,
    title: "Audit and split plan",
    description:
      "We review your current Shopify site, analytics, and key journeys, then agree which pages stay on Shopify and which move to Webflow.",
  },
  {
    step: 2,
    title: "Content and design for Webflow",
    description:
      "We refine messaging where needed and design core marketing pages and components in Webflow so the site feels sharper and more on brand.",
  },
  {
    step: 3,
    title: "Build Webflow marketing site",
    description:
      "We build the agreed pages and collections in Webflow, set up navigation and content structures, and prepare links into Shopify for products and checkout.",
  },
  {
    step: 4,
    title: "Integrate, redirect, and QA",
    description:
      "We connect Webflow and Shopify journeys, set up redirects from old Shopify URLs where needed, update tracking, and test key flows from content to checkout.",
  },
  {
    step: 5,
    title: "Launch and iterate",
    description:
      "We support launch, watch how people use the new site, and help you refine pages and campaigns based on early data.",
  },
];

const HowProjectsRunSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 10);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "next" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-2xl space-y-4 mb-12">
        <h2 className="section-title text-foreground">
          How our Shopify to Webflow projects run
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          We separate your marketing site from your Shopify theme in a
          controlled way so content, brand, and campaigns can move faster
          without breaking the store.
        </p>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {steps.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>

        {/* Nav buttons */}
        {canScrollPrev && (
          <button
            aria-label="Previous"
            onClick={() => scroll("prev")}
            className="absolute top-1/2 -translate-y-1/2 -left-2 md:left-0 w-10 h-10 rounded-full bg-foreground text-background grid place-items-center cursor-pointer z-10"
            style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.25)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 6.5L8 13l6.5 6.5" />
            </svg>
          </button>
        )}
        {canScrollNext && (
          <button
            aria-label="Next"
            onClick={() => scroll("next")}
            className="absolute top-1/2 -translate-y-1/2 -right-2 md:right-0 w-10 h-10 rounded-full bg-foreground text-background grid place-items-center cursor-pointer z-10"
            style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.25)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scaleX(-1)" }}>
              <path d="M14.5 6.5L8 13l6.5 6.5" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default HowProjectsRunSection;
