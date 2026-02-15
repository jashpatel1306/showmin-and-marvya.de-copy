import wordpressIcon from "@/assets/wordpress-icon.png";

const checkIcon = (
  <svg viewBox="0 0 23 23" className="w-5 h-5 flex-shrink-0" fill="currentColor">
    <path d="M11.5 0C5.149 0 0 5.149 0 11.5S5.149 23 11.5 23 23 17.851 23 11.5 17.851 0 11.5 0zm5.864 8.357l-7.071 7.071a1 1 0 01-1.414 0l-3.536-3.536a1 1 0 011.414-1.414l2.829 2.829 6.364-6.364a1 1 0 011.414 1.414z" />
  </svg>
);
const bulletPoints = [
  "Redesign of key marketing and landing pages in Webflow",
  "Keep Shopify for products and checkout",
  "Clean, joined-up journeys between site and store",
];
const cards = [
  {
    title: "Typical projects",
    description:
      "Moving home, about, category, and landing pages from Shopify themes into Webflow, keeping Shopify for product pages and checkout, and tightening up the journeys between content and commerce.",
    icon: (
      <svg viewBox="0 0 35 35" className="w-[35px] h-[35px]">
        <rect width="35" height="35" rx="8" fill="hsl(var(--primary))" />
        <path d="M10 17.5L15 22.5L25 12.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Best for teams that",
    description:
      "Have a working Shopify store, but feel held back by theme limits when it comes to brand, content, and campaigns.",
    icon: (
      <svg viewBox="0 0 35 35" className="w-[35px] h-[35px]">
        <rect width="35" height="35" rx="8" fill="hsl(var(--primary))" />
        <circle cx="17.5" cy="14" r="4" stroke="white" strokeWidth="2" fill="none" />
        <path d="M10 26c0-4.418 3.358-8 7.5-8s7.5 3.582 7.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Typical results",
    description:
      "A marketing site that looks and feels more like your brand, more flexible landing pages for campaigns, and a cleaner handover into Shopify checkout.",
    icon: (
      <svg viewBox="0 0 35 35" className="w-[35px] h-[35px]">
        <rect width="35" height="35" rx="8" fill="hsl(var(--primary))" />
        <path d="M12 24V15M17.5 24V11M23 24V18" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Where Shopify still fits in",
    description:
      "We keep Shopify for products, inventory, and checkout, and use Webflow for marketing pages, launch campaigns, and content hubs.",
    icon: (
      <svg viewBox="0 0 35 35" className="w-[35px] h-[35px]">
        <rect width="35" height="35" rx="8" fill="hsl(var(--primary))" />
        <rect x="10" y="10" width="15" height="15" rx="3" stroke="white" strokeWidth="2" fill="none" />
        <path d="M15 17.5h5M17.5 15v5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];
const ShopifyGlance = () => {
  return (
    <section className="relative z-10 w-full max-w-[1340px] mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Header with icon */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={wordpressIcon}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-left">
              A glance at Shopify
            </h2>
          </div>
          {/* Description with left border */}
          <div
            className="border-l-2 pl-6"
            style={{ borderColor: "hsl(var(--border))" }}
          >
            <p className="text-muted-foreground text-base leading-relaxed">
              We work with teams that want a stronger marketing site than their
              Shopify theme allows, but do not want to abandon Shopify for
              commerce. Our focus is on pairing a Webflow front-end with a
              Shopify store so the experience feels consistent for customers and
              simple for your team.
            </p>
          </div>
          {/* Bullet points */}
          <div className="flex flex-col gap-4">
            {bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-foreground mt-0.5">{checkIcon}</span>
                <p className="text-foreground/80 text-sm md:text-base">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right column — 2×2 card grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden">
          {cards.map((card, i) => {
            const isTop = i < 2;
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className="p-6 flex flex-col gap-4"
                style={{
                  backgroundColor: "hsl(var(--muted))",
                  borderRight: isLeft ? "0.5px solid hsl(var(--border))" : "none",
                  borderBottom: isTop ? "0.5px solid hsl(var(--border))" : "none",
                  borderLeft: !isLeft ? "0.5px solid hsl(var(--border))" : "none",
                  borderTop: !isTop ? "0.5px solid hsl(var(--border))" : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  {card.icon}
                  <h3 className="text-sm font-semibold text-foreground">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ShopifyGlance;
