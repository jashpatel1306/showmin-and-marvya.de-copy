import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import heroImg from "@/assets/FigmaToWebflowDevelopment/figma-webflow-hero.png";
import zacAvatar from "@/assets/TeamMember/jash.jpg";

/* ─── Types ─────────────────────────────────────────────── */
type Tab = "Overview" | "Deliverables" | "Process" | "Reviews";

/* ─── Data ───────────────────────────────────────────────── */
const tabs: Tab[] = ["Overview", "Deliverables", "Process", "Reviews"];

const deliverables = [
  {
    title: "Design review",
    desc: "We map components, grids, typography and interactions in Figma before we scope the build.",
  },
  {
    title: "Webflow build",
    desc: "Clean class structure, global styles and layouts that faithfully mirror your Figma while staying maintainable.",
  },
  {
    title: "CMS setup",
    desc: "Collections, reference fields and editor permissions wired to your real content model.",
  },
  {
    title: "QA & accessibility",
    desc: "Responsive checks across modern browsers and devices, plus accessibility minded review guided by WCAG AA.",
  },
  {
    title: "Performance pass",
    desc: "Optimized images and video, script hygiene, lazy loading and Core Web Vitals considered throughout the build.",
  },
  {
    title: "Launch & training",
    desc: "Publishing support, DNS changes if needed, backups and Loom walkthroughs for your editors.",
  },
];

const processSteps = [
  {
    n: "1",
    title: "Kickoff & access",
    desc: "Design walkthrough, component inventory, CMS modeling and migration plan. We agree priorities, tools and access.",
  },
  {
    n: "2",
    title: "Build",
    desc: "Implementation of pages, components and CMS in a private Webflow workspace with regular progress snapshots.",
  },
  {
    n: "3",
    title: "Review & iterate",
    desc: "Weekly reviews to refine states, interactions and content wiring. Feedback is documented so everyone stays aligned.",
  },
  {
    n: "4",
    title: "Launch & support",
    desc: "Publishing, DNS and final checks, followed by a 14 day hyper care window for small fixes and content adjustments.",
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

const overviewLong = `Most Figma to Webflow projects stall because the build is treated like a one off job. Classes are improvised, sections are copied and pasted, and a year later nobody remembers how anything fits together. Our approach is different. We treat your Webflow project as the foundation for the next few years of marketing, not just a quick translation of screens.

We start by auditing your Figma file. Components, grids, typography scales and interaction patterns are mapped before a single page is built. That gives us a clear inventory of what needs to exist in Webflow and what can be simplified. We then set up a class strategy that feels predictable. Global styles control typography, spacing and colors. Components are built from clear base classes rather than a tangle of one off utility classes. The result is a site that feels familiar every time you open the Webflow Designer, even months later.

A site that looks great but loads slowly will cost you visitors and search visibility. Performance is baked into this service from the start. We optimize media assets, use modern formats where appropriate and keep an eye on layout shifts and script weight.

Accessibility is not a bolt on at the end. We plan heading levels, landmarks, link styles and focus states as part of the build. All of this makes your site more usable for everyone.`;

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

/* ─── Tab content panels ─────────────────────────────────── */

const OverviewTab = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-8">
      {/* Description */}
      <p className="text-[15px] leading-relaxed text-foreground">
        We turn detailed Figma designs into fast, accessible Webflow sites that are built to last. Your team gets a clean structure, a thoughtful CMS and a launch that feels under control.
      </p>

      {/* Category + Tools */}
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-0 border border-border rounded-xl overflow-hidden">
        {/* Category */}
        <div className="flex-1 p-5">
          <p className="text-xs font-medium text-muted-foreground mb-3">Category</p>
          <span className="inline-flex items-center px-3 py-1 rounded-lg border border-border bg-card text-sm font-medium text-foreground">
            Development
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

      {/* Long-form text with See more */}
      <div className="relative">
        <div
          className={`prose prose-sm max-w-none text-[15px] leading-relaxed text-foreground space-y-4 transition-all duration-300 ${
            expanded ? "max-h-none" : "max-h-36 overflow-hidden"
          }`}
        >
          {overviewLong.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
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
        Figma to Webflow development
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Turn your Figma project into a fast, scalable Webflow site.
      </p>
    </div>

    <button className="btn-cta w-full py-3.5 rounded-xl font-bold text-base text-primary-foreground bg-blue-500 hover:opacity-90 active:scale-[0.98] transition-all">
      Get started
    </button>

    <div className="space-y-3 pt-1">
      {[
        "Webflow build that mirrors your Figma",
        "QA, accessibility and performance pass",
        "Launch support and training",
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
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab
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
