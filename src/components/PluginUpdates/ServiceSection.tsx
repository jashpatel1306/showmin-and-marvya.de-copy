import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import heroImg from "@/assets/PluginUpdates/PluginUpdates.png";
import zacAvatar from "@/assets/TeamMember/jash.jpg";

/* ─── Types ─────────────────────────────────────────────── */
type Tab = "Overview" | "Deliverables" | "Process" | "Reviews";

/* ─── Data ───────────────────────────────────────────────── */
const tabs: Tab[] = ["Overview", "Deliverables", "Process", "Reviews"];

const deliverables = [
    {
      title: "WordPress plugin and theme audit",
      desc: "Review of your plugins, theme, versions, licensing, and potential risks, with a short summary of what needs attention first.",
    },
    {
      title: "Update schedule and policy",
      desc: "A clear update schedule outlining how often updates run, which components are included, and how major changes are handled.",
    },
    {
      title: "Backup and rollback setup",
      desc: "Verification or setup of reliable backups and optional staging, with clear instructions for restoring the site if needed.",
    },
    {
      title: "Managed update cycles",
      desc: "Regular WordPress core, plugin, and theme updates applied on schedule, with basic testing of key user journeys.",
    },
    {
      title: "Issue tracking and recommendations",
      desc: "Monitoring of plugin conflicts, deprecated tools, and recurring issues, with recommendations for fixes or replacements.",
    },
    {
      title: "Simple summary reports",
      desc: "Plain-language summaries of updates completed, issues discovered, and suggested next steps delivered on a regular cadence.",
    },
  ];

  const processSteps = [
    {
      n: "1",
      title: "Kickoff and access",
      desc: "We start with a short call to understand your site, risk tolerance, and key user flows, then gather access to WordPress, hosting, and relevant tools.",
    },
    {
      n: "2",
      title: "Audit and planning",
      desc: "We review your current plugin and theme stack, identify risks, and agree on an update schedule, backup approach, and scope for the first cycle.",
    },
    {
      n: "3",
      title: "First update cycle",
      desc: "We run the first round of updates using the agreed process, test key user flows, resolve smaller issues, and refine the checklist.",
    },
    {
      n: "4",
      title: "Ongoing cycles and review",
      desc: "Updates continue on the agreed schedule with brief reports and periodic reviews to adjust scope, frequency, or priorities.",
    },
  ];

const reviews = [
    {
        name: "Peter Maraziotis",
        text: "Highly recommend the website service, these guys go over and beyond to offer the best service. Really happy with my new site Pete M…",
        stars: 5,
        avatar: "PM",
    },
    {
        name: "Alona Shavi",
        text: "Zac and his team are fantastic! They listen to everything you want and don't try to sell you something you don't. They offer professional advice and do…",
        stars: 5,
        avatar: "AS",
    },
    {
        name: "Bamo Sawra",
        text: "South digital have done a great job designing my website and helping to launch my mobile app. The team are always on hand to answer any…",
        stars: 5,
        avatar: "BS",
    },
    {
        name: "Billy Willson",
        text: "South Digital did an absolutely amazing job on our new website. It exceeded expectations in every way. Not only do their websites look amazing but they…",
        stars: 5,
        avatar: "BW",
    },
    {
        name: "Sarah Mitchell",
        text: "Working with South Digital was a seamless experience from start to finish. They understood our brand immediately and delivered a Webflow site that exceeded every expectation…",
        stars: 5,
        avatar: "SM",
    },
    {
        name: "James Hartley",
        text: "The attention to detail on our Figma to Webflow build was remarkable. Every component was pixel perfect and the CMS setup made content editing so easy for our team…",
        stars: 5,
        avatar: "JH",
    },
    {
        name: "Priya Nair",
        text: "Incredible work from the South Digital team. Our site performance scores went through the roof after the build — 98 on Lighthouse. Couldn't recommend more highly…",
        stars: 5,
        avatar: "PN",
    },
    {
        name: "Tom Gallagher",
        text: "They took our complex Figma designs and turned them into a beautifully structured Webflow site. The class naming convention they use is a dream to maintain…",
        stars: 5,
        avatar: "TG",
    },
    {
        name: "Emma Clarke",
        text: "From discovery to launch everything was documented and communicated clearly. The Loom walkthroughs for our editors were a fantastic touch — our team felt confident immediately…",
        stars: 5,
        avatar: "EC",
    },
    {
        name: "Dan Osei",
        text: "South Digital handled our migration from WordPress to Webflow without losing a single URL or dropping our rankings. The technical detail and care they put in was outstanding…",
        stars: 5,
        avatar: "DO",
    },
];

/* ─── Sub-components ─────────────────────────────────────── */

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

const GoogleG = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const StarIcon = () => (
    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const VerifiedIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#1DA1F2" />
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
);

const overviewSections = [
    {
      title: "Why Safe Plugin Updates Matter",
      body: `Most WordPress sites rely on a stack of plugins and themes that grow over time. Each component updates at its own pace, often with little warning about breaking changes. When nobody owns the update process, sites either fall behind on outdated versions or rush updates when something breaks.
  
  Our plugin update service provides a structured middle ground. We keep WordPress core, plugins, and themes updated in a planned way with backups, checks, and clear ownership. The result is fewer security risks, fewer compatibility surprises, and a more predictable update routine.`,
      bullets: [],
      subSections: [],
    },
    {
      title: "Understanding Your Setup First",
      body: `We do not start by updating everything immediately. Instead, we begin with an audit of your WordPress environment, including the theme, active and inactive plugins, hosting setup, and any custom code that might depend on specific versions.`,
      bullets: [
        "Identify outdated or abandoned plugins",
        "Spot duplicate plugins performing the same function",
        "Review mission-critical plugins such as forms, ecommerce, or membership tools",
        "Check licensing and premium plugin update access",
      ],
      subSections: [],
    },
    {
      title: "Planned Update Cycles",
      body: `Instead of random updates, we create a predictable update cycle. Together we decide how often updates should run and which parts of the system require extra care.`,
      bullets: [
        "Routine updates for safe patches and minor releases",
        "Careful scheduling for major version updates",
        "Communication before changes that may affect layouts or functionality",
        "Clear update windows so your team knows what to expect",
      ],
      subSections: [],
    },
    {
      title: "Backups, Staging, and Rollback Plans",
      body: `Safe updates depend on reliable recovery options. Before any live updates happen, we confirm that backups are working and that recovery paths are clear.`,
      bullets: [
        "Reliable backups before updates",
        "Optional staging environments for testing",
        "Fast rollback if an update causes issues",
        "Clear troubleshooting when compatibility problems appear",
      ],
      subSections: [],
    },
    {
      title: "Security and Dependency Monitoring",
      body: `Outdated plugins and themes are a common source of WordPress security issues. We monitor known vulnerabilities and prioritize updates when security patches are released.`,
      bullets: [
        "Monitoring plugin and theme vulnerabilities",
        "Prioritizing security patches",
        "Identifying abandoned plugins",
        "Recommending safer alternatives when needed",
      ],
      subSections: [],
    },
    {
      title: "Performance and Compatibility Checks",
      body: `After updates, we run basic checks across key user flows to ensure the site still works as expected.`,
      bullets: [
        "Homepage and navigation checks",
        "Forms and lead capture functionality",
        "Checkout or membership flows",
        "Login and account areas",
      ],
      subSections: [],
    },
    {
      title: "Clear Update Logs for Your Team",
      body: `We maintain a simple update log showing what changed, when it happened, and any issues encountered. This transparency helps your team understand updates and simplifies troubleshooting later.`,
      bullets: [
        "Record of plugin and theme updates",
        "Notes on issues or workarounds",
        "Timeline of update windows",
        "Helpful context for future troubleshooting",
      ],
      subSections: [],
    },
    {
      title: "Built for WordPress Sites That Matter",
      body: `This service is designed for WordPress sites that play an important role in your business, such as lead generation websites, content platforms, membership portals, or ecommerce stores. Managed updates reduce downtime risk and remove the stress of maintaining the plugin stack.`,
      bullets: [],
      subSections: [],
    },
  ];
/* ─── Tab content panels ─────────────────────────────────── */

const OverviewTab = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="space-y-8">
            {/* Description */}
            <p className="text-[15px] leading-relaxed text-foreground">
                We handle WordPress plugin and theme updates through a careful, controlled process. The result is stronger security, fewer unexpected issues, and a reliable update routine your team can trust.
            </p>
            {/* Category + Tools */}
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-0 border border-border rounded-xl overflow-hidden">
                {/* Category */}
                <div className="flex-1 p-5">
                    <p className="text-xs font-medium text-muted-foreground mb-3">Category</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-lg border border-border bg-card text-sm font-medium text-foreground">
                        Maintenance
                    </span>
                </div>
                {/* Divider */}
                <div className="hidden sm:block w-px bg-border" />
                <div className="block sm:hidden h-px bg-border" />
                {/* Tools */}
                <div className="flex-1 p-5">
                    <p className="text-xs font-medium text-muted-foreground mb-3">Tools</p>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-border bg-card text-sm font-medium text-foreground">
                            <svg viewBox="0 0 288 432" className="w-3.5 h-3.5" aria-label="Figma">
                                <rect width="144" height="144" rx="72" fill="#F24E1E" y="144" />
                                <rect width="144" height="144" rx="72" fill="#FF7262" />
                                <rect width="144" height="144" rx="72" fill="#A259FF" x="144" />
                                <rect width="144" height="144" rx="72" fill="#1ABCFE" x="144" y="144" />
                                <rect width="144" height="144" rx="72" fill="#0ACF83" y="288" />
                            </svg>
                            Figma
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-border bg-card text-sm font-medium text-foreground">
                            <svg viewBox="0 0 130 81" className="w-4 h-2.5" aria-label="Webflow">
                                <path d="M97.2 0S79.5 39.9 78 47.4C77.2 42.7 70 0 70 0H48.7S31.7 39.8 29.9 47.4C29.2 42.9 21.3 0 21.3 0H0l18.3 81h22.4S58 41.7 59.6 34.3C60.5 39 68.1 81 68.1 81h22.5L113 0H97.2z" fill="#146EF5" />
                            </svg>
                            Webflow
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-border bg-card text-sm font-medium text-foreground">
                            <svg viewBox="0 0 130 81" className="w-4 h-2.5" aria-label="Webflow">
                                <path d="M97.2 0S79.5 39.9 78 47.4C77.2 42.7 70 0 70 0H48.7S31.7 39.8 29.9 47.4C29.2 42.9 21.3 0 21.3 0H0l18.3 81h22.4S58 41.7 59.6 34.3C60.5 39 68.1 81 68.1 81h22.5L113 0H97.2z" fill="#146EF5" />
                            </svg>
                            WordPress
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-border bg-card text-sm font-medium text-foreground">
                            <svg viewBox="0 0 130 81" className="w-4 h-2.5" aria-label="Webflow">
                                <path d="M97.2 0S79.5 39.9 78 47.4C77.2 42.7 70 0 70 0H48.7S31.7 39.8 29.9 47.4C29.2 42.9 21.3 0 21.3 0H0l18.3 81h22.4S58 41.7 59.6 34.3C60.5 39 68.1 81 68.1 81h22.5L113 0H97.2z" fill="#146EF5" />
                            </svg>
                            Framer
                        </span>
                    </div>
                </div>
            </div>

            {/* Book a call banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-muted border-l-4 border-l-[hsl(var(--brand-blue))] border border-border">
                <div>
                    <h3 className="font-bold text-base text-foreground">Book a call to discuss your project</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">15-30 minute strategy call, no charge</p>
                </div>
                <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow whitespace-nowrap text-sm font-semibold text-foreground flex-shrink-0"
                >
                    <img src={zacAvatar} alt="Zac" className="w-6 h-6 rounded-full object-cover border border-[hsl(var(--brand-blue))]" />
                    Book a call with Jash
                </a>
            </div>

            {/* Structured long-form sections with See more */}
            <div className="relative">
                <div
                    className={`space-y-8 transition-all duration-300 ${expanded ? "" : "max-h-[260px] overflow-hidden"
                        }`}
                >
                    {overviewSections.map((section) => (
                        <div key={section.title} className="space-y-3">
                            <h4 className="text-base font-bold text-foreground">{section.title}</h4>
                            <p className="text-[15px] leading-relaxed text-muted-foreground">{section.body}</p>

                            {/* Flat bullets */}
                            {section.bullets && (
                                <ul className="space-y-2 mt-2">
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-2.5 text-[15px] text-foreground leading-relaxed">
                                            <span className="flex-shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand-blue))]" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Platform sub-sections */}
                            {section.subSections && (
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                                    {section.subSections.map((sub) => (
                                        <div key={sub.title} className="p-4 rounded-xl border border-border bg-card space-y-2">
                                            <p className="text-sm font-bold text-foreground">{sub.title}</p>
                                            <ul className="space-y-1.5">
                                                {sub.bullets.map((bullet) => (
                                                    <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                                                        <span className="flex-shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand-blue))]" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {!expanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                )}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-3 text-sm font-medium text-[hsl(var(--brand-blue))] hover:underline flex items-center gap-1"
                >
                    {expanded ? (
                        <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
                    ) : (
                        <>See more <ChevronDown className="w-3.5 h-3.5" /></>
                    )}
                </button>
            </div>
        </div>
    );
};

const DeliverablesTab = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {deliverables.map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-border bg-card">
                <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-[hsl(var(--brand-blue))]" strokeWidth={2.5} />
                    </span>
                    <div>
                        <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const ProcessTab = () => (
    <div className="space-y-0">
        {processSteps.map((step, i) => (
            <div key={step.n} className="flex gap-5">
                {/* Number + line */}
                <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full border-2 border-[hsl(var(--brand-blue))] flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[hsl(var(--brand-blue))]">{step.n}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                        <div className="w-px flex-1 my-2 bg-border min-h-[32px]" />
                    )}
                </div>
                {/* Content */}
                <div className={`pb-8 ${i === processSteps.length - 1 ? "pb-0" : ""}`}>
                    <h4 className="font-bold text-base text-foreground mt-1.5">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{step.desc}</p>
                </div>
            </div>
        ))}
    </div>
);

const ReviewsTab = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const visible = reviews.slice(0, visibleCount);
    const hasMore = visibleCount < reviews.length;

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {visible.map((r) => (
                    <div key={r.name} className="p-5 rounded-xl border border-border bg-card">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                                    {r.avatar}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm font-semibold text-foreground">{r.name}</span>
                                        <VerifiedIcon />
                                    </div>
                                </div>
                            </div>
                            <GoogleG />
                        </div>
                        <div className="flex items-center gap-0.5 mb-2 text-[hsl(var(--brand-accent))]">
                            {Array.from({ length: r.stars }).map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">{r.text}</p>
                    </div>
                ))}
            </div>
            {hasMore && (
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={() => setVisibleCount((c) => c + 4)}
                        className="px-6 py-2.5 rounded-lg border border-border bg-card text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

/* ─── Aside (sticky right card) ─────────────────────────── */
const Aside = () => (
    <div className="rounded-2xl border border-border bg-card p-6 space-y-5 shadow-sm">
        <div className="space-y-2">
            <h2 className="text-xl font-bold text-foreground leading-snug">
            Plugin updates
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
            Plugin and theme updates for WordPress sites.
            </p>
        </div>

        <button className="btn-cta w-full py-3.5 rounded-xl font-bold text-base text-primary-foreground bg-blue-500 hover:opacity-90 active:scale-[0.98] transition-all">
            Get started
        </button>

        <div className="space-y-3 pt-1">
            {[
                "Initial WordPress and plugin audit",
                "Update schedule tailored to your site",
                "ABackups, testing and basic troubleshooting after updates",
            ].map((text) => (
                <div key={text} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5">
                        <CheckBadge />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
                </div>
            ))}
        </div>
    </div>
);

/* ─── Main Section ───────────────────────────────────────── */
const ServiceSection = () => {
    const [activeTab, setActiveTab] = useState<Tab>("Overview");

    return (
        <section className="bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1160px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start">

                    {/* ── Left column ── */}
                    <div className="flex-1 min-w-0">

                        {/* Hero image */}
                        <div className="rounded-2xl border border-border overflow-hidden mb-8">
                            <img
                                src={heroImg}
                                alt="Abstract layout between Figma and Webflow logos, representing design handed off to development."
                                className="w-full h-auto block object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Tab bar */}
                        <div
                            id="tabtop"
                            className="flex items-center gap-1 p-1.5 bg-card rounded-xl border border-border mb-8 overflow-x-auto scrollbar-none"
                        >
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === tab
                                        ? "bg-muted text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab content */}
                        <div>
                            {activeTab === "Overview" && <OverviewTab />}
                            {activeTab === "Deliverables" && <DeliverablesTab />}
                            {activeTab === "Process" && <ProcessTab />}
                            {activeTab === "Reviews" && <ReviewsTab />}
                        </div>
                    </div>

                    {/* ── Right aside ── */}
                    <div className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0 lg:self-start lg:sticky lg:top-8">
                        <Aside />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
