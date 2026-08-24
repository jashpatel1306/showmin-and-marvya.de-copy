import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookDemoButton } from "@/components/BookDemoButton";
import faqDotsBg from "@/assets/faq/faq-dots-bg.avif";
import { PageVerticalLines } from "@/components/ui/PageVerticalLines";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Layers,
  Zap,
  Globe,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/shopify-headless")({
  head: () => ({
    meta: [
      {
        title: "shopify headless - showmine",
      },
      {
        name: "description",
        content:
          "shopify headless",
      },
    ],
  }),
  component: ShopifyHeadlessPage,
});

const SERVICES_TOC_ITEMS = [
  { id: "headless-architecture-design", label: "Headless Architecture Design" },
  { id: "custom-storefront-development", label: "Custom Storefront Development" },
  { id: "api-backend-integration", label: "API Development & Backend Integration" },
  { id: "headless-cms-implementation", label: "Headless CMS Implementation" },
  { id: "performance-optimization-scalability", label: "Headless Performance Optimization & Scalability" },
  { id: "headless-commerce-migration", label: "Headless Commerce Migration Services" },
  { id: "feature-scaling-maintenance", label: "Feature Scaling & Ongoing Maintenance" },
];

const BENEFITS_TOC_ITEMS = [
  { id: "independent-frontend-development", label: "Independent Frontend Development" },
  { id: "smart-system-integrations", label: "Smart System Integrations" },
  { id: "seo-advantage", label: "SEO Advantage" },
  { id: "higher-conversion-rates", label: "Higher Conversion Rates" },
  { id: "consistent-omnichannel-experience", label: "Consistent Omnichannel Experience" },
];

type ProcessAccent = "coral" | "ocean" | "mint";

type ProcessAccentStyles = {
  panel: string;
  ink: string;
  line: string;
};

const PROCESS_ACCENTS: Record<ProcessAccent, ProcessAccentStyles> = {
  coral: {
    panel: "bg-rose-50/80 dark:bg-rose-950/20",
    ink: "text-rose-500 dark:text-rose-400",
    line: "border-rose-200/60 dark:border-rose-500/20",
  },
  ocean: {
    panel: "bg-sky-50/80 dark:bg-sky-950/20",
    ink: "text-sky-600 dark:text-sky-400",
    line: "border-sky-200/60 dark:border-sky-500/20",
  },
  mint: {
    panel: "bg-emerald-50/80 dark:bg-emerald-950/20",
    ink: "text-emerald-600 dark:text-emerald-400",
    line: "border-emerald-200/60 dark:border-emerald-500/20",
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "Every project starts with a discovery call. We'll discuss your goals, current storefront setup, and what's holding your business back.",
    accent: "coral" as ProcessAccent,
  },
  {
    step: "02",
    title: "Choosing the Right Stack",
    description:
      "After the initial call, we evaluate your current setup and define the tools that best fit your goals. Based on your goals and existing setup, we select the ideal combination of tools for your headless commerce build — from the CMS (like Payload, Sanity, Contentful or Strapi) to the commerce engine (Shopify Plus, BigCommerce) and the frontend framework (React, Hydrogen).",
    accent: "ocean" as ProcessAccent,
  },
  {
    step: "03",
    title: "Development & Integration",
    description:
      "Once the stack is approved, our developers start building your new storefront. We connect APIs between your CMS, commerce engine, and backend systems to make sure everything works as one. As a result, you get a clean, fast, and stable architecture that gives your team complete control over updates and performance.",
    accent: "mint" as ProcessAccent,
  },
  {
    step: "04",
    title: "Performance Optimization",
    description:
      "Before release, we make sure everything runs at real speed. We check how your store handles traffic, how APIs respond, and how fast pages load from different regions. If something slows down, it gets fixed before you ever see it live.",
    accent: "coral" as ProcessAccent,
  },
  {
    step: "05",
    title: "Testing & Launch",
    description:
      "When everything's connected and optimized, we run full testing across browsers, devices, and storefronts. We test how the checkout flow and third-party integrations behave in production. Only after that, your new headless store goes live. After launch, we stay close to make sure everything performs exactly as planned.",
    accent: "ocean" as ProcessAccent,
  },
];

const DESKTOP_PIN_PLACEMENTS = [
  "md:absolute md:left-[8%] md:top-0 md:rotate-[7deg]",
  "md:absolute md:right-[8%] md:top-[190px] md:-rotate-[7deg]",
  "md:absolute md:left-[8%] md:top-[530px] md:rotate-[7deg]",
  "md:absolute md:right-[8%] md:top-[850px] md:-rotate-[7deg]",
  "md:absolute md:left-[8%] md:top-[1170px] md:rotate-[7deg]",
];

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M16 3a1 1 0 0 1 .117 1.993L16 5v4.764l1.894 3.789c.054.108.088.22.1.331L18 14v2a1 1 0 0 1-.883.993L17 17h-4v4a1 1 0 0 1-1.993.117L11 21v-4H7a1 1 0 0 1-.993-.883L6 16v-2c0-.117.02-.23.06-.34l.046-.107L8 9.762V5a1 1 0 0 1-.117-1.993L8 3h8Z" />
    </svg>
  );
}

function PinnedProcessCard({
  step,
  index,
  placement,
}: {
  step: (typeof PROCESS_STEPS)[0];
  index: number;
  placement: string;
}) {
  const colors = PROCESS_ACCENTS[step.accent];
  return (
    <article
      className={`relative z-10 w-full transition-transform duration-300 ease-out hover:z-30 hover:scale-105 md:w-[320px] ${placement}`}
    >
      <div className="rounded-[25px] border border-neutral-200/80 bg-white p-2.5 shadow-[0_12px_30px_0_rgba(0,0,0,0.07)]">
        <PinIcon className={`mx-auto mb-3 h-8 w-8 ${colors.ink}`} />

        <div
          className={`relative flex h-full flex-col overflow-hidden rounded-[15px] border p-5 ${colors.panel} ${colors.line}`}
        >
          <span
            className={`mb-3 text-4xl font-bold ${colors.ink}`}
            style={{
              fontFamily: '"Geist Mono", monospace',
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="mb-2.5 text-xl sm:text-2xl font-serif font-normal leading-snug text-neutral-900" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
            {step.title}
          </h3>

          <p className="text-sm leading-relaxed tracking-normal text-neutral-600 font-sans font-normal text-justify">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function processRoutePath(stepCount: number) {
  const segments = [
    "M 260 160 C 500 160, 550 300, 740 300",
    " C 880 300, 500 480, 260 640",
    " C 260 800, 550 960, 740 960",
    " C 880 960, 500 1140, 260 1280",
  ];
  return segments.slice(0, Math.max(0, stepCount - 1)).join("");
}

const FAQS_DATA = [
  {
    question: "Which brands use headless architecture on Shopify?",
    answer:
      "Allbirds, Kotn, Rothy's, FIGS, ILIA, Ruggable, Recess and Verishop in North America, and Chilly's, Victoria Beckham Beauty, Bamford, Seedlip, Staples, Bols, Paul Valentine and Sennheiser in Europe. Nour Hammour, Patta x Tommy and Shogun built headless storefronts for specific launches rather than replacing a main store.",
  },
  {
    question: "How can you tell if a Shopify store is headless?",
    answer:
      "Look at the page source for Liquid-generated markup and Shopify theme asset paths. A headless store will not have them, but its checkout will still run on a Shopify domain. Navigation that changes pages without a full reload is another strong signal, as is a front end served from a framework such as Next.js, Nuxt or Hydrogen.",
  },
  {
    question: "What CMS do headless Shopify brands use?",
    answer:
      "Contentful is the most common choice among the brands covered here, used by Victoria Beckham Beauty, Bamford, Paul Valentine, ILIA and Allbirds. Sanity powers Recess and Nour Hammour, and Chilly's uses Commerce Layer. Hydrogen builds can manage content natively without a separate CMS, which is the route ATTITUDE took.",
  },
  {
    question: "How much does a headless Shopify build cost?",
    answer:
      "Smaller brands building a single custom storefront typically spend between $30,000 and $100,000 or more. Enterprise projects run from several hundred thousand into the millions. Add annual maintenance, CMS licensing, hosting and the internal development resource needed to keep two systems in step when you calculate total cost of ownership.",
  },
  {
    question: "Is a headless Shopify store faster than a theme?",
    answer:
      "Not automatically. Shopify themes are fast by default, with 93% of Shopify brands rated as having a fast storefront and Shopify stores rendering 1.8x faster on average than stores on other platforms. A headless front end can be faster, but a poorly architected one is often slower. Speed is a reason to review your theme before it is a reason to decouple.",
  },
  {
    question: "Do Shopify apps work on a headless store?",
    answer:
      "Apps that operate on the back end, covering areas such as inventory, subscriptions, loyalty and order management, generally continue to work. Apps that inject code into the theme to render something on the storefront will not, because there is no theme. Those need rebuilding against the app's API, which is a cost worth auditing before you commit.",
  },
  {
    question: "What is the difference between Hydrogen and the Storefront API?",
    answer:
      "The Storefront API is the data layer that any front end can query, regardless of framework or hosting. Shopify Hydrogen is an opinionated React stack built on Remix that consumes that API, with commerce components and utilities already built. Hydrogen is faster to start with, the raw Storefront API gives more freedom, and both use the same underlying commerce data.",
  },
  {
    question: "Is headless still worth it now that Online Store 2.0 exists?",
    answer:
      "For many brands, no. Online Store 2.0 sections, app blocks, metafields and custom Liquid closed much of the design gap, and Shopify Editions has since added checkout extensibility, markets tooling and native B2B. The case for headless now rests mainly on running several regional storefronts or on one specific feature a theme genuinely cannot support.",
  },
];

function ShopifyHeadlessPage() {
  const [activeToc, setActiveToc] = useState<string>("headless-architecture-design");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const processCarouselRef = useRef<HTMLDivElement>(null);
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  const scrollProcess = (direction: "left" | "right") => {
    if (processCarouselRef.current) {
      const scrollAmount = 380;
      processCarouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleProcessScroll = () => {
    if (processCarouselRef.current) {
      const container = processCarouselRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = 380;
      const currentIndex = Math.round(scrollPosition / cardWidth);
      setActiveProcessStep(Math.min(Math.max(currentIndex, 0), PROCESS_STEPS.length - 1));
    }
  };

  useEffect(() => {
    const allTocItems = [...SERVICES_TOC_ITEMS, ...BENEFITS_TOC_ITEMS];
    const handleScroll = () => {
      let currentActive = "";
      for (const item of allTocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 380 && rect.bottom >= 80) {
            currentActive = item.id;
            break;
          }
        }
      }
      if (currentActive) {
        setActiveToc(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveToc(id);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 font-sans relative selection:bg-neutral-900 selection:text-white">
      {/* Primary Site Header */}
      <Header forceLight={false} />
      <div className="h-[60px]" />

      <div className="relative">
        <PageVerticalLines />

        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-[#D1D1D6] relative z-10 bg-[#072F1D] text-white px-6 sm:px-12 pt-16 sm:pt-24 pb-16">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
            <span
              className="px-3.5 py-1 bg-white/10 border border-white/15 rounded-full text-[11px] font-mono font-bold tracking-widest text-neutral-300 uppercase"
              style={{ fontFamily: '"Geist Mono", monospace' }}
            >
              SHOPIFY HEADLESS ARCHITECTURE
            </span>

            <h1
              className="text-3xl sm:text-3xl lg:text-4 xl font-serif font-normal tracking-tight leading-[1.1] text-white"
              style={{ fontFamily: '"Hedvig Letters Serif", serif' }}
            >
              HEADLESS COMMERCE DEVELOPMENT SERVICES
              TRUSTED BY ENTERPRISE BRANDS
            </h1>

            {/* Author Meta
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-neutral-400 font-sans mt-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://www.charleagency.com/media/images/about/profilepicnic.png"
                  alt="Nic Dunn, CEO"
                  className="w-8 h-8 rounded-full border border-neutral-700 object-cover"
                />
                <span className="text-white font-medium">Nic Dunn, CEO, Charle Agency</span>
              </div>
              <span className="text-neutral-600">•</span>
              <span className="flex items-center gap-1.5 text-neutral-400">
                <Clock className="w-3.5 h-3.5" />
                Last Updated: July 29, 2026
              </span> 
            </div> */}

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-normal mt-2">
              If your store is slow, updates take months, or plugins keep breaking — you've outgrown your current setup. We rebuild your commerce on modern headless architecture using AI-augmented development workflows, so your storefront launches faster, scales cleanly, and gives your team full control over UX and performance from day one.
            </p>

            {/* Action Button */}
            <div className="mt-4">
              <Link to="/our-work">
                <BookDemoButton className="h-[46px] px-7 text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap">
                  <span className="whitespace-nowrap">EXPLORE SHOPIFY PLUS SERVICES</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </BookDemoButton>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* HERO IMAGE SHOWCASE */}
        {/* ========================================================================= */}
        {/* <section className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 bg-white px-4 sm:px-8 py-8">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl bg-neutral-900 min-h-[320px] sm:min-h-[420px] flex items-center justify-center p-8 text-center">
            <div className="absolute inset-0 bg-radial from-emerald-500/10 via-purple-500/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center gap-4 max-w-2xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                <Layers className="w-8 h-8" />
              </div>
              <span className="text-xs font-mono tracking-widest uppercase text-emerald-400 font-bold">
                SHOPIFY STOREFRONT API • HYDROGEN & OXYGEN
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-white font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                Decoupled Frontends & Enterprise Scale
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                Separate presentation from commerce logic for instant page transitions, multi-region autonomy, and bespoke CMS workflows.
              </p>
            </div>
          </div>
        </section> */}
        <section className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 bg-white px-6 sm:px-10 md:px-12 py-12 sm:py-16">
          {/* Top Centered Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2" style={{ fontFamily: '"Geist Mono", monospace' }}>
              SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
              Our Headless Commerce Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Sticky Table of Contents Sidebar */}
            <aside className="lg:col-span-4 sticky top-24 self-start">
              <div className="p-6 rounded-2xl bg-[#072F1D] text-white border border-[#144A30] shadow-xl flex flex-col gap-4">
                <nav className="flex flex-col gap-1.5 text-xs font-sans text-left">
                  {SERVICES_TOC_ITEMS.map((item) => {
                    const isActive = activeToc === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left py-2.5 px-3.5 rounded-lg transition-all duration-300 leading-relaxed font-medium flex items-center justify-between gap-2 ${isActive
                          ? "bg-gradient-to-r from-emerald-500/25 via-white/10 to-transparent text-white border-l-2 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.35)] ring-1 ring-emerald-400/40 font-semibold"
                          : "text-neutral-300 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] shrink-0 animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Article Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-12 text-left text-neutral-800 leading-relaxed font-sans text-base sm:text-lg">

              {/* SECTION 1 */}
              <div id="headless-architecture-design" className="scroll-mt-28 flex flex-col gap-4 border-b border-neutral-200 pb-10">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Headless Architecture Design
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Every successful headless commerce project starts with a solid foundation.
                  Our team designs a custom headless architecture that connects your storefront, CMS, and backend through scalable APIs. We analyze your current setup, define data flows, and select the best technologies, such as Contentful, Magento, BigCommerce, or Commercetools, to make sure your future system is fast, flexible, and ready to grow.
                </p>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Shopify supports this in two ways. The Storefront API is the open route: any framework you like, whether that is React, Next.js, Vue.js, Nuxt, Gatsby or Astro, hosted wherever you prefer. Shopify Hydrogen is the opinionated route, a React stack built on Remix with commerce components, hooks and utilities already wired to Shopify's APIs. Hydrogen deploys to Oxygen, Shopify's hosting layer, which renders at the edge from more than 285 points of presence and is included on every plan at no extra cost.
                </p>
              </div>

              {/* SECTION 2 */}
              <div id="custom-storefront-development" className="scroll-mt-28 flex flex-col gap-4 border-b border-neutral-200 pb-10">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Custom Storefront Development
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Frontend is our core craft — our senior developers build fast, flexible, and fully custom storefronts with React, Next.js, and Shopify Hydrogen, free from the limitations of traditional CMS.
                  AI-augmented workflows help us scaffold components, generate test suites, and optimize rendering — so your storefront goes from concept to production faster.
                </p>
              </div>

              {/* SECTION 3 */}
              <div id="api-backend-integration" className="scroll-mt-28 flex flex-col gap-4 border-b border-neutral-200 pb-10">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  API Development & Backend Integration
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We connect everything that makes your business work — from CMS and CRM to payment systems and product databases.
                  Our developers build reliable APIs that keep your data in sync and your backend running as efficiently as your frontend — a core part of our headless e-commerce development services that keeps your entire ecosystem stable, scalable, and easy to manage.
                </p>
              </div>

              {/* SECTION 4 */}
              <div id="headless-cms-implementation" className="scroll-mt-28 flex flex-col gap-4 border-b border-neutral-200 pb-10">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Headless CMS Implementation
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We help your content and marketing teams work faster by connecting modern headless CMS platforms like Payload, Contentful, Sanity, or Strapi. You'll be able to publish and update content instantly without relying on developers, while our setup keeps performance and structure fully under control.
                  Payload is a particularly natural fit for Next.js storefronts — its React-native admin installs right inside your app — but whether it, Sanity, or Contentful suits your store best is exactly what we settle in discovery.
                </p>
              </div>

              {/* SECTION 5 */}
              <div id="performance-optimization-scalability" className="scroll-mt-28 flex flex-col gap-4 border-b border-neutral-200 pb-10">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Headless Performance Optimization & Scalability
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Our team optimizes rendering, caching, and CDN delivery so every page loads instantly, even during peak traffic — SSR/SSG, lazy loading, and asset compression keep your Core Web Vitals in the green as your business grows.
                  AI-assisted performance analysis helps us spot bottlenecks across your entire headless stack — from API response times to frontend rendering — and fix them before they impact conversion.
                </p>
              </div>

              {/* SECTION 6 */}
              <div id="headless-commerce-migration" className="scroll-mt-28 flex flex-col gap-4 border-b border-neutral-200 pb-10">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Headless Commerce Migration Services
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We help brands move from legacy or monolithic eCommerce platforms to improve performance, scalability, and content agility.
                  Because our own website runs on a headless setup, we know every pitfall and shortcut — so we handle your migration fast, safely, and without disrupting your ability to sell.
                </p>
              </div>

              {/* SECTION 7 */}
              <div id="feature-scaling-maintenance" className="scroll-mt-28 flex flex-col gap-4">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Feature Scaling & Ongoing Maintenance
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We help your product evolve without refactoring the core. Our engineers extend functionality through scalable APIs — powering catalog updates, personalized carts, checkout flows, and user management.
                  We monitor system performance, automate deployments, and integrate with tools like ERP, CRM, and OMS to keep your entire commerce stack stable and efficient as you scale.

                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MAIN ARTICLE BODY + STICKY SIDEBAR */}
        {/* ========================================================================= */}
        <section className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 bg-white px-6 sm:px-10 md:px-12 py-12 sm:py-16">
          {/* Top Centered Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2" style={{ fontFamily: '"Geist Mono", monospace' }}>
              BENEFITS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
              5 Benefits of Our Headless E-Commerce Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Article Content Column (Left side) */}
            <div className="lg:col-span-8 flex flex-col gap-12 text-left text-neutral-800 leading-relaxed font-sans text-base sm:text-lg">

              {/* BENEFIT SECTION 1 */}
              <div id="independent-frontend-development" className="scroll-mt-28 flex flex-col gap-4 border-b border-neutral-200 pb-10">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Independent Frontend Development
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  A headless setup separates the frontend from the backend, allowing teams to work independently without blocking each other. More importantly, it gives your business the freedom to release new features, redesign pages, or test UX improvements without risking production stability or touching backend order processing.
                </p>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Shopify supports this in two ways: Storefront API for custom React, Next.js, or Remix frontends, and Hydrogen deployed to Oxygen for edge rendering across 285+ global locations.
                </p>
              </div>

              {/* BENEFIT SECTION 2 */}
              <div id="smart-system-integrations" className="scroll-mt-28 flex flex-col gap-4 border-b border-neutral-200 pb-10">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Smart System Integrations
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Integrate your storefront seamlessly with ERPs, CRMs, PIM databases, and custom third-party services via high-performance GraphQL APIs. Keep data synchronized across inventory, customer accounts, and order fulfillment in real time.
                </p>
              </div>

              {/* BENEFIT SECTION 3 */}
              <div id="seo-advantage" className="scroll-mt-28 flex flex-col gap-4 border-b border-neutral-200 pb-10">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  SEO Advantage
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Achieve top-tier Core Web Vitals with server-side rendering (SSR), automatic asset compression, and edge caching. Full control over canonical tags, dynamic XML sitemaps, and structured JSON-LD schemas ensures search engine crawlers rank your catalog higher.
                </p>
              </div>

              {/* BENEFIT SECTION 4 */}
              <div id="higher-conversion-rates" className="scroll-mt-28 flex flex-col gap-4 border-b border-neutral-200 pb-10">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Higher Conversion Rates
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Instantaneous page loads, fluid micro-interactions, and instant app-like navigation eliminate shopper drop-off across the buyer journey. Optimized checkout flows and dynamic personalizations directly increase completed orders and AOV.
                </p>
              </div>

              {/* BENEFIT SECTION 5 */}
              <div id="consistent-omnichannel-experience" className="scroll-mt-28 flex flex-col gap-4">
                <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Consistent Omnichannel Experience
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Deliver a unified brand identity and centralized product data across web storefronts, native iOS/Android mobile apps, social commerce channels, and physical POS terminals from one single headless backend.
                </p>
              </div>

            </div>

            {/* Sticky Table of Contents Sidebar (Right side) */}
            <aside className="lg:col-span-4 sticky top-24 self-start">
              <div className="p-6 rounded-2xl bg-[#072F1D] text-white border border-[#144A30] shadow-xl flex flex-col gap-4">
                <nav className="flex flex-col gap-1.5 text-xs font-sans text-left">
                  {BENEFITS_TOC_ITEMS.map((item) => {
                    const isActive = activeToc === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left py-2.5 px-3.5 rounded-lg transition-all duration-300 leading-relaxed font-medium flex items-center justify-between gap-2 ${isActive
                          ? "bg-gradient-to-r from-emerald-500/25 via-white/10 to-transparent text-white border-l-2 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.35)] ring-1 ring-emerald-400/40 font-semibold"
                          : "text-neutral-300 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] shrink-0 animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PROCESS SECTION */}
        {/* ========================================================================= */}
        <section id="process" className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 bg-white px-6 sm:px-10 md:px-12 py-16 sm:py-24">
          {/* Top Centered Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2" style={{ fontFamily: '"Geist Mono", monospace' }}>
              PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal max-w-3xl mx-auto" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
              The process we follow as a headless commerce development company
            </h2>
          </div>

          {/* Animated Pinned Process Cards Container */}
          <LazyMotion features={domAnimation}>
            <div className="relative mx-auto max-w-5xl">
              <div className="relative flex flex-col gap-8 md:block md:h-[1500px]">
                {/* SVG Animated Path */}
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full w-full md:block"
                  viewBox="0 0 1000 1500"
                  preserveAspectRatio="none"
                >
                  <m.path
                    d={processRoutePath(PROCESS_STEPS.length)}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="8 6"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    className="text-neutral-300"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -140 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </svg>

                {/* 5 Pinned Process Cards */}
                {PROCESS_STEPS.map((step, index) => (
                  <PinnedProcessCard
                    key={`${step.title}-${index}`}
                    step={step}
                    index={index}
                    placement={DESKTOP_PIN_PLACEMENTS[index]}
                  />
                ))}
              </div>
            </div>
          </LazyMotion>
        </section>

        {/* ========================================================================= */}
        {/* FAQS SECTION */}
        {/* ========================================================================= */}
        <section id="faqs" className="w-[calc(100%-16px)] mx-2 sm:w-[calc(100%-32px)] sm:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 bg-white shrink-0">
          {/* Section Header */}
          <div className="pt-8 sm:pt-12 md:pt-20 pb-6 sm:pb-8 md:pb-12 px-3 sm:px-4 md:px-6 text-center max-w-[800px] mx-auto flex flex-col items-center">
            <div className="flex items-center gap-2 justify-center mb-2 sm:mb-3">
              <span className="text-[10px] sm:text-[11px] font-bold font-mono text-emerald-600 tracking-[0.2em] uppercase flex items-center gap-1">
                → FAQS ←
              </span>
            </div>
            <h2 className="font-serif text-[#131316] text-xl sm:text-2xl md:text-[39px] leading-tight md:leading-[54.6px] font-semibold mb-2 sm:mb-3 md:mb-4">
              All your doubts answered
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm md:text-base max-w-[620px]">
              You've come this far, get all your queries answered about headless Shopify development
            </p>
          </div>

          {/* Accordion Container */}
          <div className="w-full px-2.5 sm:px-4 md:px-6 pb-8 sm:pb-12 md:pb-20 max-w-[908px] mx-auto">
            <div className="flex flex-col">
              {FAQS_DATA.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#D1D1D6] bg-white rounded-[6px] overflow-hidden mb-2 sm:mb-2.5 md:mb-3 last:mb-0 transition-all duration-200"
                  >
                    {/* Trigger */}
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-2.5 px-3 sm:py-3.5 sm:px-4.5 md:py-4 md:px-6 flex items-center justify-between text-left cursor-pointer group focus:outline-none gap-2"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[#131316] group-hover:text-[#007A5A] transition-colors pr-2 sm:pr-4 font-semibold text-xs sm:text-sm md:text-base leading-snug">
                        {faq.question}
                      </span>
                      <span className="text-neutral-500 font-mono text-base sm:text-lg md:text-xl leading-none shrink-0 select-none transition-transform duration-200">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Content Panel */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[800px] opacity-100 border-t border-[#D1D1D6]" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className="p-1.5 sm:p-3 md:p-4 bg-[#FAF9F5]"
                        style={{
                          backgroundImage: `url(${faqDotsBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="bg-white border border-[#E5E4DC] rounded-[6px] p-2.5 sm:p-4 md:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-left">
                          <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* Primary Site Footer */}
        <Footer />
      </div>
    </div>
  );
}
