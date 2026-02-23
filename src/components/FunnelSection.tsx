import { Figma, BarChart3, Layers, Scissors, ShoppingBag, Globe, Info } from "lucide-react";
import centralIcon from "@/assets/central-icon.png";
import IconDot from "./IconDot";

const icons = [
  {
    icon: Figma,
    label: "Figma",
    description:
      "We design and prototype your pages in Figma before we build them in Webflow, so layout and interactions are clear from the start.",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    description:
      "We set up and connect your analytics so you can track performance across both Webflow and Shopify from day one.",
  },
  {
    icon: Layers,
    label: "CMS",
    description:
      "We structure your content in Webflow's CMS so your team can update pages, blogs, and resources without developer help.",
  },
  {
    icon: Scissors,
    label: "Custom Code",
    description:
      "We add custom code where needed to connect systems, extend functionality, or match specific design requirements.",
  },
  {
    icon: ShoppingBag,
    label: "Shopify",
    description:
      "Your Shopify store stays intact for products, cart, and checkout while marketing moves to Webflow.",
  },
  {
    icon: Globe,
    label: "SEO",
    description:
      "We handle redirects, metadata, and site structure so your search rankings are preserved during the transition.",
  },
];

const FunnelSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Text Content */}
        <div className="text-center mb-12 space-y-4 md:space-y-5">
          <h2 className="section-title text-foreground">
            Pair a Webflow marketing site with your Shopify store
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We help you move marketing and content into Webflow while keeping
            Shopify for products and checkout, so you get the best of both worlds
            without a risky full rebuild.
          </p>
        </div>

        {/* Funnel Visual */}
        <div className="relative flex flex-col items-center">
          {/* Icon Row */}
          <div className="flex justify-center gap-3 sm:gap-[90px] md:gap-24 lg:gap-32 xl:gap-32 z-10">
            {icons.map((item, i) => (
              <IconDot
                key={i}
                icon={item.icon}
                label={item.label}
                description={item.description} />
            ))}
          </div>

          {/* SVG Curves - uses a single SVG for proper alignment */}
          <div className="relative w-full" style={{ height: "clamp(120px, 25vw, 200px)" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 200"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Path from icon 1 (leftmost) to center bottom */}
              {[
                "M0 0 C0 150, 250 75, 250 200",
                "M100 0 C100 125, 250 75, 250 200",
                "M200 0 C200 125, 250 100, 250 200",
                "M300 0 C300 125, 250 100, 250 200",
                "M400 0 C400 125, 250 75, 250 200",
                "M500 0 C500 150, 250 75, 250 200",
              ].map((path, i) => (
                <g key={i}>
                  {/* Base line */}
                  <path
                    d={path}
                    stroke="hsl(var(--line-base))"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="transparent"
                  />
                  {/* Animated dash */}
                  <path
                    d={path}
                    stroke="hsl(var(--line-active))"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="transparent"
                    strokeDasharray="30 100"
                    pathLength={100}
                    className="animate-dash-flow"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Central Icon */}
          <div className="relative z-10 -mt-3 md:-mt-4 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary shadow-lg shadow-primary/30">
            <img
              src={centralIcon}
              alt="Central platform icon"
              className="w-7 h-7 md:w-10 md:h-10 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelSection;
