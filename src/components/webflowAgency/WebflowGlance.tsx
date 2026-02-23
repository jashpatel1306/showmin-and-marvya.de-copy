import webflowIcon from "@/assets/webflow-logo.svg";


const bulletPoints = [
  "Fully hosted infrastructure with built-in security",
  "Clean, high-performance front end designed to support SEO",
  "Intuitive visual editor that allows your team to update content safely and independently",
];

const CheckBadge = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="checkGrad" x1="0.04" x2="0.96" y1="0" y2="1">
        <stop offset="0" stopColor="hsl(197, 100%, 80%)" />
        <stop offset="1" stopColor="hsl(214, 100%, 53%)" />
      </linearGradient>
    </defs>
    <path
      d="M 6.153 1.192 C 7.314 -0.397 9.686 -0.397 10.847 1.192 C 11.114 1.556 11.562 1.741 12.008 1.672 C 13.953 1.37 15.63 3.047 15.328 4.992 C 15.259 5.438 15.444 5.886 15.809 6.153 C 17.397 7.314 17.397 9.686 15.809 10.847 C 15.444 11.114 15.259 11.562 15.328 12.008 C 15.63 13.953 13.953 15.63 12.008 15.328 C 11.562 15.259 11.114 15.444 10.847 15.808 C 9.686 17.397 7.314 17.397 6.153 15.808 C 5.886 15.444 5.438 15.259 4.992 15.328 C 3.047 15.63 1.37 13.953 1.672 12.008 C 1.741 11.562 1.556 11.114 1.192 10.847 C -0.397 9.686 -0.397 7.314 1.192 6.153 C 1.556 5.886 1.741 5.438 1.672 4.992 C 1.37 3.047 3.047 1.37 4.992 1.672 C 5.438 1.741 5.886 1.556 6.153 1.192 Z M 12.321 6.73 C 12.638 6.384 12.614 5.847 12.268 5.529 C 11.922 5.212 11.385 5.236 11.067 5.582 L 7.882 8.998 L 6.956 8.184 C 6.611 7.867 6.073 7.889 5.755 8.235 C 5.438 8.581 5.461 9.119 5.807 9.436 L 7.358 10.826 C 7.525 10.979 7.745 11.059 7.97 11.049 C 8.195 11.04 8.408 10.941 8.56 10.774 Z"
      fill="url(#checkGrad)"
    />
  </svg>
);

const cards = [
  {
    title: "Typical projects",
    description:
      "Marketing website launches, full site redesigns, long-form sales pages, blogs and resource centers, lightweight membership or client portals, and multi-step lead-generation funnels.",
    icon: (
      <svg viewBox="0 0 35 35" className="w-[35px] h-[35px]">
        <rect width="35" height="35" rx="8" fill="hsl(var(--primary))" />
        <path d="M10 17.5L15 22.5L25 12.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Best suited for teams that",
    description:
      "Need a fully custom website without maintaining a dedicated development team, want faster launch timelines, and prefer marketing teams to create or update pages independently without engineering delays.",
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
      "Quicker campaign launch cycles, improved organic visibility with well-structured landing pages, and a Webflow website your internal team can easily maintain and scale over time.",
    icon: (
      <svg viewBox="0 0 35 35" className="w-[35px] h-[35px]">
        <rect width="35" height="35" rx="8" fill="hsl(var(--primary))" />
        <path d="M12 24V15M17.5 24V11M23 24V18" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Webflow capabilities",
    description:
      "Webflow Designer, CMS Collections, reusable components, forms, and integrations with tools such as HubSpot, Zapier, and analytics platforms—delivered within a clean, performance-focused front end optimized for speed and SEO.",
    icon: (
      <svg viewBox="0 0 35 35" className="w-[35px] h-[35px]">
        <rect width="35" height="35" rx="8" fill="hsl(var(--primary))" />
        <rect x="10" y="10" width="15" height="15" rx="3" stroke="white" strokeWidth="2" fill="none" />
        <path d="M15 17.5h5M17.5 15v5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];
const WebflowGlance = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-8 mt-24">
          {/* Header with icon */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={webflowIcon}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="section-title text-foreground text-left">
              A glance at Webflow
            </h2>
          </div>
          {/* Description with left border */}
          <div
            className="border-l-2 pl-6"
            style={{ borderColor: "hsl(var(--border))" }}
          >
            <p className="text-muted-foreground text-base leading-relaxed">
              We use Webflow when you need a custom marketing website that delivers a premium feel, launches quickly, and remains easy to manage without relying on a full-time developer. It blends visual editing flexibility with production-quality code, giving teams both speed and control.
            </p>
          </div>
          {/* Bullet points */}
          <div className="flex flex-col gap-4">
            {bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckBadge />
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
export default WebflowGlance;
