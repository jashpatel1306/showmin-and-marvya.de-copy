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
  ArrowLeftRight,
  Smartphone,
  KeyRound,
  Store,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/shopify-plus-development")({
  head: () => ({
    meta: [
      {
        title: "shopify plus development - showmine",
      },
      {
        name: "description",
        content: "shopify plus development",
      },
    ],
  }),
  component: ShopifyPlusDevelopmentPage,
});


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
    title: "Defining Business Needs",
    description:
      "We analyze your business goals, services and target audience in depth to create custom solutions that drive growth and success.",
    accent: "coral" as ProcessAccent,
  },
  {
    step: "02",
    title: "Planning Designs",
    description:
      "We develop intuitive UI/UX experiences that combine interactive visuals and seamless functionality to meet user expectations.",
    accent: "ocean" as ProcessAccent,
  },
  {
    step: "03",
    title: "Development Process",
    description:
      "We develop a scalable, robust Shopify Store with custom features and optimized performance to maximize your business growth.",
    accent: "mint" as ProcessAccent,
  },
  {
    step: "04",
    title: "Assuring Quality",
    description:
      "We conduct rigorous and cross-device testing to identify and resolve errors to ensure a flawless launch.",
    accent: "coral" as ProcessAccent,
  },
  {
    step: "05",
    title: "Launch and optimization",
    description:
      "After the store goes live, we closely monitor the store and use data-driven insights to optimize and improve performance.",
    accent: "ocean" as ProcessAccent,
  },
  {
    step: "06",
    title: "Continuous Support",
    description:
      "We provide continuous post-launch, including regular updates, bug fixes, and strategic enhancements to help you scale.",
    accent: "mint" as ProcessAccent,
  },
];

const DESKTOP_PIN_PLACEMENTS = [
  "md:absolute md:left-[8%] md:top-0 md:rotate-[7deg]",
  "md:absolute md:right-[8%] md:top-[190px] md:-rotate-[7deg]",
  "md:absolute md:left-[8%] md:top-[530px] md:rotate-[7deg]",
  "md:absolute md:right-[8%] md:top-[850px] md:-rotate-[7deg]",
  "md:absolute md:left-[8%] md:top-[1170px] md:rotate-[7deg]",
  "md:absolute md:right-[8%] md:top-[1490px] md:-rotate-[7deg]",
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
    " C 260 1440, 550 1600, 740 1600",
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

const FEATURE_FRAMES = [
  {
    title: "Checkout Customization",
  },
  {
    title: "Shopify Functions",
  },
  {
    title: "Built-in B2B Tools",
  },
  {
    title: "Launchpad(To Automate Campaigns)",
  },
  {
    title: "Unlimited Staff Accounts",
  },
  {
    title: "Organization-level Controls",
  },
  {
    title: "High API Limits",
  },
  {
    title: "Multiple Stores Under One License",
  },
  {
    title: "24/7 Support & Strategic Agents",
  },
  {
    title: "SSO & SLA options",
  },
];

const ASSIST_SERVICES = [
  {
    icon: ArrowLeftRight,
    title: "Shopify Plus Migration",
    description: "Replatform seamlessly to Shopify Plus with zero downtime, zero data loss, and preserved SEO rankings.",
  },
  {
    icon: Smartphone,
    title: "Custom Theme Development",
    description: "Bespoke, high-converting Liquid & Hydrogen themes optimized for lightning-fast speed and mobile conversion.",
  },
  {
    icon: Layers,
    title: "Headless Commerce Solutions",
    description: "We help brands to enable headless architecture for flexibility in front-end while using Shopify as the back-end platform.",
  },
  {
    icon: KeyRound,
    title: "API and App Integration",
    description: "Custom ERP, CRM, PIM, and warehouse integrations with dedicated middleware and high-rate limit APIs.",
  },
  {
    icon: Store,
    title: "Multi-Store Management",
    description: "Centralized management of global expansion stores, multi-currency checkouts, and internationalized catalogs.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Level Support",
    description: "24/7 dedicated engineering support, SLA guarantees, and continuous optimization for peak traffic events.",
  },
];

function ShopifyPlusDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredFrame, setHoveredFrame] = useState<number>(2);
  const [hoveredAssist, setHoveredAssist] = useState<number | null>(2);

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
        <section className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-[#D1D1D6] relative z-10 bg-[#072F1D] text-white pl-6 sm:pl-12 pr-[1cm] pt-16 sm:pt-24 pb-16">
          <div className="w-full flex flex-col items-start text-left gap-6">
            <span className="text-sm sm:text-base text-neutral-300 font-sans font-normal tracking-normal max-w-2xl">
              Enterprise-Grade Shopify Plus Solutions with Expertise You Can Rely On
            </span>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.15] bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 bg-clip-text text-transparent py-1 max-w-3xl"
                style={{ fontFamily: '"Hedvig Letters Serif", serif' }}
              >
                Shopify Plus Partner and Development Agency
              </h1>
              <img
                src="/images/shopify-logo-white-transparent.png"
                alt="Shopify Logo"
                className="h-20 sm:h-28 md:h-36 lg:h-40 w-auto object-contain shrink-0 self-start md:self-center ml-auto"
              />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-normal mt-2">
              Supercharge your ecommerce business with Showmine, a prominent Shopify Plus Agency – helping brands go live in just 7 days.
            </p>

            {/* Action Button */}
            <div className="mt-4">
              <BookDemoButton className="h-[46px] px-7 text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap">
                <span className="whitespace-nowrap">VIEW OUR PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </BookDemoButton>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* PROCESS SECTION */}
        {/* ========================================================================= */}
        <section id="process" className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 bg-white px-6 sm:px-10 md:px-12 py-16 sm:py-24">
          {/* Top Centered Section Header */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2" style={{ fontFamily: '"Geist Mono", monospace' }}>
              SERVICE
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-neutral-900 font-normal mb-4" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
              Shopify Plus Features for High-Growth Brands
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans text-justify">
              Shopify Plus offers a robust suite of features tailored to meet the growing demands of high-growth businesses. Shopify plus has the ability to handle high volume transactions and simplifies operations, making it ideal for businesses aiming for rapid growth.
            </p>
          </div>

          {/* 4 Feature Frames Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 md:mb-20">
            {FEATURE_FRAMES.map((frame, idx) => {
              const isHighlighted = hoveredFrame === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredFrame(idx)}
                  className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[160px] transition-all duration-300 ease-out cursor-pointer ${isHighlighted
                    ? "bg-[#072F1D] border border-[#144A30] text-white shadow-[0_15px_35px_rgba(7,47,29,0.35)] scale-[1.03] -translate-y-1.5"
                    : "bg-[#FAFAFA] border border-neutral-200/90 text-neutral-900 hover:border-neutral-300 shadow-sm"
                    }`}
                >
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-sans font-medium tracking-tight ${isHighlighted ? "text-white" : "text-neutral-900"}`}>
                      {frame.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* HOW WE CAN ASSIST YOU SECTION */}
          {/* ========================================================================= */}
          <div className="mt-20 pt-16 border-t border-neutral-200">
            {/* Centered Heading */}
            <div className="text-center mb-10 md:mb-14 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4">
                <span className="text-emerald-500">How We Can Assist You</span>{" "}
                <span className="text-neutral-900">with Shopify Plus</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans max-w-3xl mx-auto">
                Showmine is a trusted <strong className="text-neutral-900 font-semibold">Shopify Plus Development Agency</strong> and certified Shopify Plus partner to offer extensive services. We offer tailored solutions to e-commerce brands to build high performing online stores that increase sales and drive customer satisfaction.
              </p>
            </div>

            {/* 6 Assist Cards Grid (3x2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
              {ASSIST_SERVICES.map((service, idx) => {
                const isHovered = hoveredAssist === idx;
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredAssist(idx)}
                    className={`relative p-8 sm:p-10 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer min-h-[220px] ${
                      isHovered
                        ? "bg-[#FAF7FF] border border-purple-200/80 shadow-[0_15px_35px_rgba(139,92,246,0.12)] scale-[1.02]"
                        : "bg-[#FAFAFA] border border-neutral-200/80 hover:border-neutral-300 shadow-sm"
                    }`}
                  >
                    {!isHovered ? (
                      <div className="flex flex-col items-center gap-5">
                        <IconComponent className="w-9 h-9 text-neutral-800 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="text-lg sm:text-xl font-sans font-bold text-neutral-900">
                          {service.title}
                        </h3>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3">
                        <h3 className="text-base sm:text-lg font-sans font-bold text-neutral-900">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                          {service.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SHOPIFY PLUS JOURNEY SECTION HEADER */}
          {/* ========================================================================= */}
          <div className="mt-20 pt-16 border-t border-neutral-200 text-center mb-12 md:mb-16 max-w-4xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2" style={{ fontFamily: '"Geist Mono", monospace' }}>
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 font-bold mb-4" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
              Your Shopify Plus Journey: From Strategy to Success
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans max-w-3xl mx-auto">
              We guide you throughout the whole journey as a trusted Shopify Plus Partner. Our proven process begins from expert consulting and strategy formation to deployment and support.
            </p>
          </div>

          {/* Animated Pinned Process Cards Container */}
          <LazyMotion features={domAnimation}>
            <div className="relative mx-auto max-w-5xl">
              <div className="relative flex flex-col gap-8 md:block md:h-[1850px]">
                {/* SVG Animated Path */}
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full w-full md:block"
                  viewBox="0 0 1000 1800"
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
              You've come this far, get all your queries answered about Shopify Plus development
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
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[800px] opacity-100 border-t border-[#D1D1D6]" : "max-h-0 opacity-0"
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
