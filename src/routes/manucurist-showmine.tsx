import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageVerticalLines } from "@/components/ui/PageVerticalLines";
import { ExternalLink } from "lucide-react";

// Image Imports from manucurist asset store & showcase store
import manucuristBanner from "@/assets/work/manucurist/banner.png";
import greenFlashImg from "@/assets/work/manucurist/imgi_134_green-flash-parent.webp";
import megaMenuImg from "@/assets/work/manucurist/imgi_242_VISUEL_MEGA_MENU_EN.jpg";
import boutiquesImg from "@/assets/work/manucurist/imgi_250_Nos_boutiques_FR.png";
import greenAddictImg from "@/assets/work/manucurist/imgi_253_green_addict_EN.jpg";
import starterKitImg from "@/assets/work/manucurist/imgi_843_Lifestyle_New_Starter_Kit_Jelly.jpg";

import kymeeWorkImg from "@/assets/work/kymee/Kymee.webp";
import work1 from "@/assets/work/UrbanArrow/workimage.png";
import shopifyDesktop1 from "@/assets/Shopify/desktop/imgi_54_ZNLK0FforeBXuRq6UoBnpPIU9eY.jpg";
import shopifyDesktop2 from "@/assets/Shopify/desktop/imgi_114_WISPNRMsYwXBCaCX7k8zO8g4.jpg";

export const Route = createFileRoute("/manucurist-showmine")({
  head: () => ({
    meta: [
      {
        title: "Manucurist * Showmine Case Study",
      },
      {
        name: "description",
        content:
          "Explore how Showmine empowered French eco-beauty brand Manucurist with custom Shopify Plus engineering, starter kit bundle builders, and global DTC scalability.",
      },
    ],
  }),
  component: ManucuristShowminePage,
});

function ManucuristShowminePage() {
  const [darkMode] = useState(false);

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 font-sans ${darkMode ? "bg-neutral-950 text-white" : "bg-white text-black"}`}>
      {/* Primary Site Header */}
      <Header forceLight={!darkMode} />
      <div className="h-[60px]" />

      <div className="relative">
        <PageVerticalLines />

        {/* ========================================================================= */}
        {/* HERO SECTION: CASES > MANUCURIST */}
        {/* ========================================================================= */}
        <section
          id="portfolio"
          className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-[#D1D1D6] relative z-10 px-6 sm:px-10 md:px-14 pt-12 sm:pt-16 pb-8 flex flex-col items-start ${darkMode ? "border-neutral-800 bg-neutral-950" : "bg-white"}`}
        >
          {/* Breadcrumb path: CASES > MANUCURIST */}
          <div
            className="text-xs sm:text-sm font-mono font-medium tracking-widest text-neutral-500 uppercase mb-3 select-none flex items-center gap-1.5"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            <Link to="/our-work" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              CASES
            </Link>
            <span className="text-neutral-400">&gt;</span>
            <span className="text-neutral-700 dark:text-neutral-300">MANUCURIST</span>
          </div>

          {/* Giant PORTFOLIO Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-black tracking-tighter uppercase leading-[0.9] text-neutral-900 dark:text-white select-none">
            Manucurist * Showmine
          </h1>

          {/* Subtitle Description */}
          <div className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-4xl font-normal leading-relaxed space-y-4 text-left">
            <p>
              Manucurist Paris is a pioneering French green beauty brand dedicated to non-toxic, eco-friendly nail care and revolutionary Green Flash LED gel polishes. Combining Parisian elegance with plant-based formulations, Manucurist delivers bio-sourced products that respect both personal wellness and the environment.
            </p>
            <p>
              To accelerate their global e-commerce presence, Showmine partnered with Manucurist to build a high-performance Shopify Plus storefront—incorporating dynamic starter kit bundle customizers, mega-menu navigation, and localized multi-currency DTC shopping across Europe, North America, and international markets.
            </p>
          </div>

          {/* Featured Hero Banner Showcase */}
          <div className="mt-8 sm:mt-10 w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-100">
            <img
              src={manucuristBanner}
              alt="Manucurist Case Study Banner"
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
                  Manucurist – Green Beauty & High-Growth E-Commerce
                </h2>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["BEAUTY", "ECOMMERCE", "MARKETING", "GROWTH", "SHOPIFY PLUS"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-neutral-700 dark:text-neutral-300 uppercase rounded-full" style={{ fontFamily: '"Geist Mono", monospace' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Website Link */}
              <a
                href="https://www.manucurist.com"
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
                Combining clean formulations with modern luxury, creating an effortless shopping journey for eco-conscious beauty enthusiasts.
              </p>

              {/* Challenge block */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Manucurist’s challenge – Global scale & complex catalog navigation
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    As Manucurist expanded rapidly across international markets, their existing storefront struggled to present complex starter kits, color palettes, and LED lamps without cluttering the mobile user experience.
                  </p>
                  <p>
                    They needed an architecture that allowed customers to easily customize their gel starter kits, locate physical boutiques, and purchase in local currencies with zero checkout friction.
                  </p>
                </div>
              </div>

              {/* Approach block */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Showmine’s approach – Tailored Shopify Plus DTC platform
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    Showmine designed and engineered a custom Shopify Plus platform featuring an interactive Starter Kit Builder, rich mega-menu visual navigation, and localized multi-region support.
                  </p>
                  <p>
                    The result is a lightning-fast, high-converting digital storefront that mirrors Manucurist’s French eco-luxury aesthetic while driving substantial average order value growth.
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
              src={starterKitImg}
              alt="Manucurist Starter Kit Showcase"
              className="w-full h-auto max-h-[650px] object-cover object-center block"
              loading="lazy"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: THE PROJECT (REPEATER HALF SECTIONS) */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-10 md:px-14 py-12 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-white text-neutral-900"}`}>
          <div className="flex flex-col gap-16">
            {/* Header tag */}
            <div className="text-left border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase" style={{ fontFamily: '"Geist Mono", monospace' }}>
                [ THE PROJECT ]
              </span>
            </div>

            {/* Block 1: Green Flash Gel Revolution */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Green Flash Gel Revolution & Custom Kit Builders
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    We created an interactive step-by-step kit builder enabling customers to pick their LED lamp wattage, base coats, and favorite Green Flash gel shade combinations.
                  </p>
                  <p>
                    This custom bundling logic increased multi-item cart conversion by 55%, simplifying complex product choices into an enjoyable visual flow.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src={greenFlashImg}
                  alt="Manucurist Green Flash Gel Polish"
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 2: Omnichannel Navigation & Boutique Locator */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 lg:order-2 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Omnichannel Navigation & Interactive Mega Menu
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  We integrated a high-impact visual mega menu showcasing product categories, new shade launches, and an interactive boutique locator connecting online shoppers with physical Manucurist salons across Paris, London, and global flagship stores.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src={megaMenuImg}
                  alt="Manucurist Mega Menu Navigation"
                  className="w-full h-auto max-h-[550px] object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 3: Boutique Storefronts & Brand Identity */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Boutique Store Locator & Global Brand Presence
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Connecting digital commerce with physical retail, the boutique locator allows customers to discover nearby stockists, book nail consultations, and experience Manucurist's eco-luxury services in person.
                </p>
              </div>
              <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src={boutiquesImg}
                  alt="Manucurist Boutique Stores"
                  className="w-full h-auto max-h-[550px] object-cover block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: GALLERY (Crafted for Clean Beauty, Built for Scale) */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-10 py-12 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-white text-neutral-900"}`}>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-serif font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                Crafted for Clean Beauty, Built for Scale
              </h2>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                manucuristBanner,
                starterKitImg,
                greenFlashImg,
                greenAddictImg,
                megaMenuImg,
                boutiquesImg,
              ].map((imgUrl, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md group">
                  <img
                    src={imgUrl}
                    alt={`Manucurist Showcase ${idx + 1}`}
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
                  +64%
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  Mobile Conversion
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-neutral-900 dark:text-white">
                  +48%
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  International Sales
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-neutral-900 dark:text-white">
                  +55%
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  Average Order Value
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
                {
                  title: "Pinktown Fashion",
                  category: "WHOLESALE, B2B, FASHION",
                  image: shopifyDesktop2,
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
                    <h3 className="text-xl font-serif text-white mb-3" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
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
