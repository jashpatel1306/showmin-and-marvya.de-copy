import { Check } from "lucide-react";
import hubspotGlance from "@/assets/HubSpotAgency/hubspot.jpg";


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
      "HubSpot onboarding and account cleanup, website and funnel integrations, pipeline structuring, foundational marketing automation, and reporting systems that clearly show performance.",
    borderClass: "border-r border-b",
  },
  {
    title: "Best for teams that",
    description:
      "Are already using HubSpot or transitioning to it, and want their website, funnels, and day-to-day workflows aligned with how their business actually operates.",
    borderClass: "border-l border-b",
  },
  {
    title: "Typical results",
    description:
      "More organized data, clearly defined lead and deal stages, and stronger visibility into which channels, campaigns, and pages are driving revenue.",
    borderClass: "border-r border-t",
  },
  {
    title: "What we handle inside HubSpot",
    description:
      "CRM configuration, custom contact and deal properties, pipeline setup, forms, lists, essential workflows, and integrations with your website, calendar, and other tools.",
    borderClass: "border-l border-t",
  },
];

const features = [
  "HubSpot onboarding, audits, and full account migrations",
  "Websites and conversion funnels seamlessly integrated with HubSpot",
  "Clear pipelines, automated emails, and reporting dashboards built for real visibility",
];



const CardIcon = ({ index }: { index: number }) => {
    const icons = [
        // Clipboard/list icon
        <svg key={0} viewBox="0 0 35 35" width="35" height="35" fill="none">
            <rect x="6" y="3" width="23" height="29" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="12" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="17" x2="23" y2="17" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="22" x2="20" y2="22" stroke="currentColor" strokeWidth="1.5" />
            <rect x="13" y="5" width="9" height="4" rx="1" stroke="currentColor" strokeWidth="1.2" fill="hsl(var(--background))" />
        </svg>,
        // People icon
        <svg key={1} viewBox="0 0 35 35" width="35" height="35" fill="none">
            <circle cx="14" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="23" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M24 20c3.3 0 6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>,
        // Chart/results icon
        <svg key={2} viewBox="0 0 35 35" width="35" height="35" fill="none">
            <rect x="5" y="20" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="15" y="13" width="5" height="17" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="25" y="6" width="5" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>,
        // Settings/gear icon
        <svg key={3} viewBox="0 0 35 35" width="35" height="35" fill="none">
            <circle cx="17.5" cy="17.5" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17.5 4v4M17.5 27v4M4 17.5h4M27 17.5h4M8.1 8.1l2.8 2.8M24.1 24.1l2.8 2.8M8.1 26.9l2.8-2.8M24.1 10.9l2.8-2.8" stroke="currentColor" strokeWidth="1.5" />
        </svg>,
    ];
    return icons[index];
};

const HubSpotGlance = () => {
    return (
        <section className="w-full px-4 py-16 sm:py-24">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6 lg:w-[45%] shrink-0">
                        {/* Image + Heading */}
                        <div className="flex items-center gap-4">
                            <img
                                src={hubspotGlance}
                                alt="A glance at HubSpot"
                                className="w-14 h-14 rounded-lg object-cover"
                            />
                            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                                A glance at HubSpot
                            </h2>
                        </div>

                        {/* Description with left border */}
                        <div className="border-l-2 border-border pl-5">
                            <p className="text-muted-foreground leading-relaxed">
                                We use HubSpot as the central system where website leads, deals, and email activity come together—so sales, marketing, and operations teams all work from the same, up-to-date view of the pipeline.
                            </p>
                        </div>

                        {/* Feature list */}
                        <div className="flex flex-col gap-3 mt-2">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 opacity-80">
                                    <CheckBadge />
                                    <span className="text-foreground text-sm sm:text-base">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - 2x2 Card Grid */}
                    <div className="lg:w-[55%]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden">
                            {cards.map((card, i) => (
                                <div
                                    key={i}
                                    className="bg-secondary/60 p-6 sm:p-7 border-border/50"
                                    style={{
                                        borderRight: i % 2 === 0 ? "0.5px solid hsl(var(--border))" : "none",
                                        borderBottom: i < 2 ? "0.5px solid hsl(var(--border))" : "none",
                                        borderLeft: i % 2 === 1 ? "0.5px solid hsl(var(--border))" : "none",
                                        borderTop: i >= 2 ? "0.5px solid hsl(var(--border))" : "none",
                                    }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="text-foreground">
                                            <CardIcon index={i} />
                                        </div>
                                        <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HubSpotGlance;
