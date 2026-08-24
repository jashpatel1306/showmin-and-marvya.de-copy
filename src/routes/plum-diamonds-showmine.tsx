import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageVerticalLines } from "@/components/ui/PageVerticalLines";
import { ExternalLink } from "lucide-react";

// Image Imports from Plum Diamonds / Lab Grown Diamond asset store
import plumHomepageImg from "@/assets/work/Lab Grown Diamond/imgi_123_plum-homepage-0526-2.jpg";
import emeraldCutImg from "@/assets/work/Lab Grown Diamond/imgi_514_plum_diamonds_emerald_cut_homepage.jpg";
import whyPlumImg from "@/assets/work/Lab Grown Diamond/imgi_531_why_plum_diamonds_lab_grown_diamonds_040925.jpg";
import buildRingImg from "@/assets/work/Lab Grown Diamond/imgi_10_build_your_own_ring.jpg";
import ringDetailImg1 from "@/assets/work/Lab Grown Diamond/imgi_40_8a9c625d-1a86-4a6c-a87b-142cc0b1f967_960.webp";
import ringDetailImg2 from "@/assets/work/Lab Grown Diamond/imgi_47_36.jpg";

import srfaceSummerBanner from "@/assets/work/SRFACE/imgi_73_SRFACE_Summer_Sale_2026.jpg";
import manucuristBanner from "@/assets/work/manucurist/banner.png";
import kymeeWorkImg from "@/assets/work/kymee/Kymee.webp";
import work1 from "@/assets/work/UrbanArrow/workimage.png";

export const Route = createFileRoute("/plum-diamonds-showmine")({
  head: () => ({
    meta: [
      {
        title: "Plum Diamonds * Showmine Case Study",
      },
      {
        name: "description",
        content:
          "Discover how Showmine created a high-converting custom Shopify Plus ring builder and luxury storefront for ethical lab-grown jeweler Plum Diamonds.",
      },
    ],
  }),
  component: PlumDiamondsShowminePage,
});

function PlumDiamondsShowminePage() {
  const [darkMode] = useState(false);

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 font-sans ${darkMode ? "bg-neutral-950 text-white" : "bg-white text-black"}`}>
      {/* Primary Site Header */}
      <Header forceLight={!darkMode} />
      <div className="h-[60px]" />

      <div className="relative">
        <PageVerticalLines />

        {/* ========================================================================= */}
        {/* HERO SECTION: CASES > PLUM DIAMONDS */}
        {/* ========================================================================= */}
        <section
          id="portfolio"
          className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-[#D1D1D6] relative z-10 px-6 sm:px-10 md:px-14 pt-12 sm:pt-16 pb-8 flex flex-col items-start ${darkMode ? "border-neutral-800 bg-neutral-950" : "bg-white"}`}
        >
          {/* Breadcrumb path: CASES > PLUM DIAMONDS */}
          <div
            className="text-xs sm:text-sm font-mono font-medium tracking-widest text-neutral-500 uppercase mb-3 select-none flex items-center gap-1.5"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            <Link to="/our-work" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              CASES
            </Link>
            <span className="text-neutral-400">&gt;</span>
            <span className="text-neutral-700 dark:text-neutral-300">PLUM DIAMONDS</span>
          </div>

          {/* Giant PORTFOLIO Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-black tracking-tighter uppercase leading-[0.9] text-neutral-900 dark:text-white select-none">
            Plum Diamonds * Showmine
          </h1>

          {/* Subtitle Description */}
          <div className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-4xl font-normal leading-relaxed space-y-4 text-left">
            <p>
              Plum Diamonds is a premier ethical fine jeweler specializing in certified lab-grown diamonds and custom engagement rings. Committed to sustainability, transparency, and exquisite hand craftsmanship, Plum Diamonds offers 100% conflict-free lab diamonds set in recycled gold and platinum.
            </p>
            <p>
              Showmine partnered with Plum Diamonds to redefine their e-commerce storefront on Shopify Plus—engineering an intuitive "Build Your Own Ring" customizer, real-time 4C diamond search filters, and high-trust luxury shopping journeys.
            </p>
          </div>

          {/* Featured Hero Banner Showcase */}
          <div className="mt-8 sm:mt-10 w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-100">
            <img
              src={plumHomepageImg}
              alt="Plum Diamonds Case Study Banner"
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
                  Plum Diamonds – Ethically Sourced Luxury & Custom Ring Engineering
                </h2>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["JEWELRY", "ECOMMERCE", "MARKETING", "GROWTH", "SHOPIFY PLUS"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-neutral-700 dark:text-neutral-300 uppercase rounded-full" style={{ fontFamily: '"Geist Mono", monospace' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Website Link */}
              <a
                href="https://www.plumdiamonds.com"
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
                Bridging ethical sustainability with high-end bridal luxury, empowering couples to design their dream engagement ring online.
              </p>

              {/* Challenge block */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Plum Diamonds’ challenge – Complex customization & high-ticket trust
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    Purchasing a custom engagement ring online is a major financial decision. Plum Diamonds needed a platform that educated customers on lab-grown diamond quality while making ring customization effortless and foolproof.
                  </p>
                  <p>
                    Their previous setup lacked real-time diamond search filtering and dynamic 360-degree ring previews, resulting in prolonged decision cycles and missed conversions.
                  </p>
                </div>
              </div>

              {/* Approach block */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Showmine’s approach – Custom Shopify Plus ring configurator
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    Showmine developed a custom ring configurator engine on Shopify Plus, allowing shoppers to select their setting, metal type, band style, and certified lab diamond cut with instant real-time price updates.
                  </p>
                  <p>
                    We coupled this with high-trust elements—including virtual try-ons, free home try-on kits, and seamless 1-on-1 virtual gemologist appointments.
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
              src={emeraldCutImg}
              alt="Plum Diamonds Emerald Cut Showcase"
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

            {/* Block 1: Why Plum Diamonds & Ethical Craftsmanship */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Ethical Lab-Grown Diamonds & Sustainable Luxury
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    Plum Diamonds educates customers on the ethical, environmental, and financial benefits of lab-grown diamonds compared to mined diamonds.
                  </p>
                  <p>
                    We integrated interactive educational modules breaking down carat, clarity, color, and cut certification directly within the shopping experience.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src={whyPlumImg}
                  alt="Why Plum Diamonds Lab Grown Diamonds"
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 2: Interactive Ring Builder */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 lg:order-2 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Interactive "Build Your Own Ring" Configurator
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Our custom ring builder lets users pair certified lab diamonds with solitaire, halo, pave, or vintage ring settings in yellow gold, rose gold, white gold, or platinum, delivering instant pricing and high-definition visual previews.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src={buildRingImg}
                  alt="Build Your Own Ring Configurator"
                  className="w-full h-auto max-h-[550px] object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 3: Precision Detail & High-Ticket Conversion */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Macro Imagery & High-Ticket Conversion Engineering
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Ultra-high resolution ring detail galleries and certificate inspection tools build supreme purchase confidence, lifting engagement ring sales and average order values.
                </p>
              </div>
              <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src={ringDetailImg1}
                  alt="Plum Diamonds Ring Craftsmanship"
                  className="w-full h-auto max-h-[550px] object-cover block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: GALLERY (Crafted for Eternity, Engineered for Scale) */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-10 py-12 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-white text-neutral-900"}`}>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-serif font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                Crafted for Eternity, Engineered for Scale
              </h2>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                plumHomepageImg,
                emeraldCutImg,
                whyPlumImg,
                buildRingImg,
                ringDetailImg1,
                ringDetailImg2,
              ].map((imgUrl, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md group">
                  <img
                    src={imgUrl}
                    alt={`Plum Diamonds Showcase ${idx + 1}`}
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
                  +72%
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  Custom Ring Sales
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-neutral-900 dark:text-white">
                  +54%
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  Average Order Value
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-neutral-900 dark:text-white">
                  +68%
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  Consultation Bookings
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
                  title: "SRFACE",
                  category: "SURF, ECOMMERCE, SHOPIFY PLUS",
                  image: srfaceSummerBanner,
                  link: "/srface-showmine",
                },
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
