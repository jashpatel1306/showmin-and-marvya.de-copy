import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageVerticalLines } from "@/components/ui/PageVerticalLines";
import { ExternalLink } from "lucide-react";

// Image Imports from SRFACE asset store & showcase store
import srfaceSummerBanner from "@/assets/work/SRFACE/imgi_73_SRFACE_Summer_Sale_2026.jpg";
import srfaceSustainability from "@/assets/work/SRFACE/imgi_189_SRFACE_Sustainability_-_Below_the_surface.jpg";
import srfaceActionImg from "@/assets/work/SRFACE/imgi_208_SRFZ_27_1.jpg";
import srfacePreFooter from "@/assets/work/SRFACE/imgi_377_Pre-footer-products-summer.png";
import srfaceBundleImg from "@/assets/work/SRFACE/imgi_9_SRFACE_SS_Accessory_Bundle.jpg";

import manucuristBanner from "@/assets/work/manucurist/banner.png";
import kymeeWorkImg from "@/assets/work/kymee/Kymee.webp";
import work1 from "@/assets/work/UrbanArrow/workimage.png";
import shopifyDesktop1 from "@/assets/Shopify/desktop/imgi_54_ZNLK0FforeBXuRq6UoBnpPIU9eY.jpg";

export const Route = createFileRoute("/srface-showmine")({
  head: () => ({
    meta: [
      {
        title: "SRFACE * Showmine Case Study",
      },
      {
        name: "description",
        content:
          "Discover how Showmine built a high-converting Shopify Plus storefront for eco-wetsuit brand SRFACE with custom size finders, accessory bundles, and global scale.",
      },
    ],
  }),
  component: SrfaceShowminePage,
});

function SrfaceShowminePage() {
  const [darkMode] = useState(false);

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 font-sans ${darkMode ? "bg-neutral-950 text-white" : "bg-white text-black"}`}>
      {/* Primary Site Header */}
      <Header forceLight={!darkMode} />
      <div className="h-[60px]" />

      <div className="relative">
        <PageVerticalLines />

        {/* ========================================================================= */}
        {/* HERO SECTION: CASES > SRFACE */}
        {/* ========================================================================= */}
        <section
          id="portfolio"
          className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-[#D1D1D6] relative z-10 px-6 sm:px-10 md:px-14 pt-12 sm:pt-16 pb-8 flex flex-col items-start ${darkMode ? "border-neutral-800 bg-neutral-950" : "bg-white"}`}
        >
          {/* Breadcrumb path: CASES > SRFACE */}
          <div
            className="text-xs sm:text-sm font-mono font-medium tracking-widest text-neutral-500 uppercase mb-3 select-none flex items-center gap-1.5"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            <Link to="/our-work" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              CASES
            </Link>
            <span className="text-neutral-400">&gt;</span>
            <span className="text-neutral-700 dark:text-neutral-300">SRFACE</span>
          </div>

          {/* Giant PORTFOLIO Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-black tracking-tighter uppercase leading-[0.9] text-neutral-900 dark:text-white select-none">
            SRFACE * Showmine
          </h1>

          {/* Subtitle Description */}
          <div className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-4xl font-normal leading-relaxed space-y-4 text-left">
            <p>
              SRFACE is an innovative European wetsuit brand disrupting the surf industry with eco-friendly Limestone neoprene, eco-carbon black, and direct-to-consumer pricing. Designed by surfers for surfers, SRFACE cuts out middleman retail markups to deliver top-tier thermal warmth, flexibility, and durability.
            </p>
            <p>
              Showmine partnered with SRFACE to engineer a custom Shopify Plus platform—incorporating an algorithmic Wetsuit Fit Finder, dynamic accessory bundle customizers, and seamless multi-currency international shopping across European surf destinations.
            </p>
          </div>

          {/* Featured Hero Banner Showcase */}
          <div className="mt-8 sm:mt-10 w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-100">
            <img
              src={srfaceSummerBanner}
              alt="SRFACE Case Study Banner"
              className="w-full h-auto max-h-[600px] object-cover object-center rounded-2xl block"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: INTRODUCTION */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-10 md:px-14 py-12 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-white text-neutral-900"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left intro title column */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-3" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  [ INTRODUCTION ]
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight leading-snug" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  SRFACE – Sustainable Eco-Wetsuits & High-Growth DTC E-Commerce
                </h2>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["SURF", "ECOMMERCE", "MARKETING", "GROWTH", "SHOPIFY PLUS"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-neutral-700 dark:text-neutral-300 uppercase rounded-full" style={{ fontFamily: '"Geist Mono", monospace' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Website Link */}
              <a
                href="https://srface.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:text-[#27B578] transition-colors mt-2"
                style={{ fontFamily: '"Geist Mono", monospace' }}
              >
                <span>VIEW LIVE WEBSITE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Right intro content column */}
            <div className="lg:col-span-7 flex flex-col gap-8 text-left">
              <p className="text-xl sm:text-2xl font-serif text-neutral-900 dark:text-white font-normal leading-relaxed border-b border-neutral-200 dark:border-neutral-800 pb-6" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                Engineered for maximum ocean flexibility, crafted with eco-friendly limestone neoprene, and backed by effortless digital commerce.
              </p>

              {/* Challenge block */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  SRFACE’s challenge – Perfect fit sizing & international expansion
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    Wetsuits require a precision fit. For a direct-to-consumer brand, incorrect sizing leads to high return rates and customer frustration. SRFACE needed an intuitive digital tool that recommends the exact wetsuit size based on height, weight, and body build.
                  </p>
                  <p>
                    Additionally, they required a fast, localized platform capable of handling multi-currency transactions and seasonal product drops across Europe and global markets.
                  </p>
                </div>
              </div>

              {/* Approach block */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Showmine’s approach – Smart fit engineering & DTC optimization
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    Showmine developed an integrated Wetsuit Fit Finder tool alongside a high-converting Shopify Plus storefront with dynamic accessory bundling and instant mobile checkout.
                  </p>
                  <p>
                    By combining eco-conscious brand storytelling with frictionless UX design, return rates dropped significantly while conversion rates and average order values reached record highs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: HERO SHOWCASE BANNER IMAGE */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-4 sm:px-8 py-8 ${darkMode ? "border-neutral-800 bg-neutral-950" : "bg-white"}`}>
          <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl">
            <img
              src={srfaceActionImg}
              alt="SRFACE Wetsuit Action Showcase"
              className="w-full h-auto max-h-[650px] object-cover object-center block"
              loading="lazy"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: THE PROJECT (REPEATER HALF SECTIONS) */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-[#D1D1D6] relative z-10 px-6 sm:px-10 md:px-14 py-12 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-white text-neutral-900"}`}>
          <div className="flex flex-col gap-16">
            {/* Header tag */}
            <div className="text-left border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase" style={{ fontFamily: '"Geist Mono", monospace' }}>
                [ THE PROJECT ]
              </span>
            </div>

            {/* Block 1: Sustainable Materials & Below the Surface */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Sustainable Eco-Materials & Brand Transparency
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    SRFACE's commitment to sustainability is highlighted throughout the digital experience—from limestone neoprene sourcing to solvent-free lamination and eco-carbon black recycling.
                  </p>
                  <p>
                    Our editorial design showcases these innovations clearly, building deep trust and resonance with environmentally conscious surfers.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src={srfaceSustainability}
                  alt="SRFACE Sustainability Below the Surface"
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 2: Interactive Accessory Bundling */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 lg:order-2 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Dynamic Accessory Bundles & Summer Collection
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  We engineered custom bundle flows for surf boots, hoods, gloves, and changing robes. Customers receive instant bundle discounts when accessorizing their wetsuit purchase, significantly lifting order value.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src={srfaceBundleImg}
                  alt="SRFACE Accessory Bundle Builder"
                  className="w-full h-auto max-h-[550px] object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 3: Pre-Footer Product Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Pre-Footer Summer Product Showcase
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  High-converting pre-footer modules dynamically feature seasonal bestsellers, summer shorties, and rashguards, maintaining high engagement right to the bottom of every page.
                </p>
              </div>
              <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src={srfacePreFooter}
                  alt="SRFACE Pre-footer Product Showcase"
                  className="w-full h-auto max-h-[550px] object-cover block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: GALLERY (Crafted for the Ocean, Engineered for Scale) */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-10 py-12 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-white text-neutral-900"}`}>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-serif font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                Crafted for the Ocean, Engineered for Scale
              </h2>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                srfaceSummerBanner,
                srfaceActionImg,
                srfaceSustainability,
                srfaceBundleImg,
                srfacePreFooter,
                work1,
              ].map((imgUrl, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md group">
                  <img
                    src={imgUrl}
                    alt={`SRFACE Showcase ${idx + 1}`}
                    className="w-full h-[280px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: RESULTS SECTION */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-12 py-14 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-900/40 text-white" : "bg-neutral-50/50 text-neutral-900"}`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2" style={{ fontFamily: '"Geist Mono", monospace' }}>
                [ RESULTS ]
              </span>
              <h3 className="text-2xl font-serif">Measurable Impact</h3>
            </div>
            <div className="md:col-span-8 flex flex-wrap gap-12 sm:gap-20">
              <div className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-neutral-900 dark:text-white">
                  +58%
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  Conversion Rate
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-neutral-900 dark:text-white">
                  +42%
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  Average Order Value
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-neutral-900 dark:text-white">
                  +62%
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  Fit Finder Accuracy
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: OTHER CASES SHOWCASE */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-10 py-14 sm:py-20 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-neutral-950 text-white"}`}>
          <div className="flex flex-col gap-10 text-left">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2" style={{ fontFamily: '"Geist Mono", monospace' }}>
                YOUR DIGITAL PULSE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                OTHER CASES
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  title: "Manucurist",
                  category: "BEAUTY, SHOPIFY PLUS",
                  image: manucuristBanner,
                  link: "/manucurist-showmine",
                },
                {
                  title: "Kymee",
                  category: "WELLNESS, SHOPIFY PLUS",
                  image: kymeeWorkImg,
                  link: "/kymee-showmine",
                },
                {
                  title: "Urban Arrow",
                  category: "ECOMMERCE, SHOPIFY PLUS, MOBILITY",
                  image: work1,
                  link: "/urban-arrow-showmine",
                },
                {
                  title: "Diamondrensu",
                  category: "JEWELRY, SHOPIFY PLUS",
                  image: shopifyDesktop1,
                  link: "/our-work",
                },
              ].map((c, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-xl flex flex-col h-[340px]">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 text-left">
                    <span className="text-[9px] font-mono text-neutral-300 uppercase tracking-widest mb-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                      {c.category}
                    </span>
                    <h3 className="text-xl font-serif text-[#FAF9F6] mb-3" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                      {c.title}
                    </h3>
                    <Link
                      to={c.link}
                      className="px-3.5 py-1.5 bg-white text-neutral-900 rounded text-[10px] font-mono font-bold tracking-wider uppercase inline-flex items-center gap-1 hover:bg-neutral-200 transition-colors w-fit"
                      style={{ fontFamily: '"Geist Mono", monospace' }}
                    >
                      READ CASE STUDY
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Site Footer */}
        <Footer />
      </div>
    </div>
  );
}
