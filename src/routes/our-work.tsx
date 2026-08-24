import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageVerticalLines } from "@/components/ui/PageVerticalLines";
import { cn } from "@/lib/utils";
import work1 from "@/assets/work/UrbanArrow/workimage.png";
import work2 from "@/assets/work/work2.png";
import kymeeWorkImg from "@/assets/work/kymee/Kymee.webp";
import urbanArrow from "@/assets/work/urban-arrow.png";
import shopifyDesktop1 from "@/assets/Shopify/desktop/imgi_114_WISPNRMsYwXBCaCX7k8zO8g4.jpg";
import shopifyDesktop2 from "@/assets/Shopify/desktop/imgi_54_ZNLK0FforeBXuRq6UoBnpPIU9eY.jpg";
import shopifyDesktop3 from "@/assets/Shopify/desktop/imgi_99_uKw3C8NT4zav4B8uO8NO6Sp6dkQ.jpg";
import shopifyDesktop4 from "@/assets/Shopify/desktop/imgi_148_HiPWByMHZ8kCjthRFeEths1xob4.jpg";
import shopifyDesktop5 from "@/assets/Shopify/desktop/imgi_195_TkxqVBKtNQGAc4zccvPQO8Jikgw.jpg";
import manucuristBanner from "@/assets/work/manucurist/banner.png";
import srfaceHeroBanner from "@/assets/work/SRFACE/imgi_73_SRFACE_Summer_Sale_2026.jpg";
import plumDiamondsBanner from "@/assets/work/Lab Grown Diamond/imgi_123_plum-homepage-0526-2.jpg";
import diamondJewelryBanner from "@/assets/work/Diamond Jewelry/imgi_144_Diamondresu_Lab_Grown_Diamond_Jewelry_aa99fdce-4a4c-4144-9a10-b75248567728.webp";

import ourWorkBg from "@/assets/our-work-bg.png";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      {
        title: "Our Work — Showmine",
      },
      {
        name: "description",
        content:
          "Explore our recent work, e-commerce engineering, and enterprise AI solutions.",
      },
    ],
  }),
  component: OurWorkPage,
});

interface StatItem {
  value: string;
  unit?: string;
  line1: string;
  line2: string;
}

interface WorkFrameCardProps {
  image: string;
  title: string;
  heightClass?: string;
  titleSizeClass?: string;
  tagColsClass?: string;
  showTags?: boolean;
  stats?: StatItem[];
  isCompactButton?: boolean;
  link?: string;
}

interface ViewProjectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isCompact?: boolean;
}

function ViewProjectButton({ className, isCompact = false, ...props }: ViewProjectButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "group/btn relative inline-flex items-center justify-center overflow-hidden rounded-[2px] text-white bg-[#007A5A] cursor-pointer transition-all duration-300 shadow-[0px_0px_0px_1px_#3a8363,0px_1px_2px_0px_rgba(0,0,0,0.64)] hover:bg-[#00684c] shrink-0",
        isCompact
          ? "h-[30px] sm:h-[34px] px-2.5 sm:px-3 text-[10px] sm:text-xs font-semibold"
          : "h-[36px] sm:h-[40px] px-3.5 sm:px-4 text-xs sm:text-sm font-semibold",
        className
      )}
      style={{ fontFamily: '"Geist Mono", monospace' }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1.5 tracking-wider uppercase whitespace-nowrap">
        <span>VIEW PROJECT</span>
        <span className={isCompact ? "text-xs transition-transform duration-300 group-hover/btn:translate-x-1" : "text-sm transition-transform duration-300 group-hover/btn:translate-x-1"}>→</span>
      </span>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(74.61%_74.61%_at_50.39%_0%,rgba(255,255,255,0.32)_0%,rgba(191,191,191,0.24)_25%,rgba(128,128,128,0.16)_50%,rgba(0,0,0,0)_100%)]" />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_1px_0.25px_0px_rgba(255,255,255,0.12),inset_-1px_1px_0.25px_0px_rgba(255,255,255,0.12)]" />
      <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[3px] sm:size-[4px] left-[2px] sm:left-[3px] top-[2px] sm:top-[3px]" />
      <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[3px] sm:size-[4px] right-[2px] sm:right-[3px] top-[2px] sm:top-[3px]" />
      <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[3px] sm:size-[4px] left-[2px] sm:left-[3px] bottom-[2px] sm:bottom-[3px]" />
      <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[3px] sm:size-[4px] right-[2px] sm:right-[3px] bottom-[2px] sm:bottom-[3px]" />
    </button>
  );
}

function WorkFrameCard({
  image,
  title,
  heightClass = "h-[300px] sm:h-[370px] md:h-[440px]",
  titleSizeClass = "text-xl sm:text-2xl md:text-3xl",
  tagColsClass = "grid-cols-1 sm:grid-cols-2",
  showTags = true,
  stats,
  isCompactButton = false,
  link = "/urban-arrow-showmine",
}: WorkFrameCardProps) {
  return (
    <Link to={link} className="block w-full h-full">
      <div className="group relative w-full h-full overflow-hidden rounded-xl bg-white border border-neutral-300 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col cursor-pointer">
        {/* Corner Accent Brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#27B578] z-20" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#27B578] z-20" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#27B578] z-20" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#27B578] z-20" />

        {/* Image Container (Stays visible on hover) */}
        <div
          className={`relative w-full ${heightClass} overflow-hidden bg-neutral-100 shrink-0`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Bottom Content Area beneath picture */}
        <div className="relative w-full flex-1 p-3.5 sm:p-4 md:p-5 bg-white border-t border-neutral-200 text-left flex items-center justify-between min-h-[72px] gap-2 sm:gap-3 overflow-hidden">
          {/* Left Side: Title (Always visible in the same row, truncated if needed to prevent overlap) */}
          <h3
            className={`${titleSizeClass} text-neutral-900 font-normal tracking-tight select-none min-w-0 truncate shrink flex-1 pr-1`}
            style={{
              fontFamily:
                '"Hedvig Letters Serif", "Cormorant Garamond", "Times New Roman", serif',
            }}
            title={title}
          >
            {title}
          </h3>

          {/* Right Side: Subtitle/Stats in Default State & VIEW PROJECT Button in Hover State */}
          <div className="relative flex items-center justify-end shrink-0 h-full">
            {/* Default Subtitle / Stats / Arrow Tags */}
            <div className="transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none group-hover:translate-x-2 flex items-center justify-end">
              {stats && stats.length > 0 ? (
                <div className="flex items-center gap-3 sm:gap-5 text-neutral-900 select-none shrink-0">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div
                        className="flex items-baseline text-lg sm:text-xl md:text-2xl font-normal text-neutral-900"
                        style={{
                          fontFamily:
                            '"Cormorant Garamond", "Hedvig Letters Serif", "Times New Roman", serif',
                        }}
                      >
                        <span className="text-sm sm:text-base mr-0.5 font-sans">↑</span>
                        <span>{stat.value}</span>
                        <sup className="text-[10px] sm:text-xs font-normal">{stat.unit || "%"}</sup>
                      </div>
                      <div
                        className="text-[9px] sm:text-[10px] font-mono font-semibold text-neutral-700 tracking-wider leading-tight uppercase"
                        style={{ fontFamily: '"Geist Mono", monospace' }}
                      >
                        {stat.line1}
                        <br />
                        {stat.line2}
                      </div>
                    </div>
                  ))}
                </div>
              ) : showTags ? (
                <div
                  className={`grid ${tagColsClass} gap-y-1 gap-x-3 text-[11px] sm:text-xs font-semibold text-neutral-800 tracking-wider uppercase whitespace-nowrap`}
                  style={{ fontFamily: '"Geist Mono", monospace' }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-neutral-500">→</span>
                    <span>ECOM UX/UI</span>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Hover State: Black "Let's Talk" styled VIEW PROJECT button right alongside the title */}
            <div className="absolute right-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-x-2 group-hover:translate-x-0 z-10 flex items-center justify-end">
              <ViewProjectButton isCompact={isCompactButton} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

const CATEGORIES = ["ALL", "SHOPIFY PLUS", "BRAND IDENTITY", "ECOM UX/UI", "ART DIRECTION"];

const LOWER_PROJECTS = [
  {
    id: 1,
    image: shopifyDesktop1,
    title: "Diamondrensu",
    category: "SHOPIFY PLUS",
  },
  {
    id: 2,
    image: shopifyDesktop2,
    title: "Pinktown",
    category: "SHOPIFY PLUS",
  },
  {
    id: 3,
    image: shopifyDesktop3,
    title: "Vedalook",
    category: "ECOM UX/UI",
  },
  {
    id: 4,
    image: shopifyDesktop4,
    title: "Wellvesta",
    category: "BRAND IDENTITY",
  },
  {
    id: 5,
    image: shopifyDesktop5,
    title: "Gosharpei",
    category: "ART DIRECTION",
  },
  {
    id: 6,
    image: urbanArrow,
    title: "Pirinhill",
    category: "SHOPIFY PLUS",
  },
  {
    id: 7,
    image: manucuristBanner,
    title: "Manucurist",
    category: "SHOPIFY PLUS",
    link: "/manucurist-showmine",
  },
  {
    id: 8,
    image: srfaceHeroBanner,
    title: "SRFACE",
    category: "SHOPIFY PLUS",
    link: "/srface-showmine",
  },
  {
    id: 9,
    image: plumDiamondsBanner,
    title: "Plum Diamonds",
    category: "SHOPIFY PLUS",
    link: "/plum-diamonds-showmine",
  },
  {
    id: 10,
    image: diamondJewelryBanner,
    title: "Diamond Jewelry",
    category: "SHOPIFY PLUS",
    link: "/diamond-jewelry-showmine",
  },
];

import plumDiamonds from "@/assets/clients/Plum-diamonds.svg";
import diamondrensuLogo from "@/assets/clients/diamondrensu.svg";
import gosharpeiLogo from "@/assets/clients/gosharpei.svg";
import kymeeLogo from "@/assets/clients/kymee.svg";
import dstrctLogo from "@/assets/clients/DSTRCT Solutions.webp";
// import simplLogo from "@/assets/clients/simpl.jpg";
import simple1Logo from "@/assets/clients/simple-1.jpg";
import lemaraisLogo from "@/assets/clients/lemarais.svg";
import pinktownLogo from "@/assets/clients/pinktown.jpg";
import pirinhillLogo from "@/assets/clients/pirinhill.svg";
import wellvestaLogo from "@/assets/clients/wellvesta.png";
import wheelioLogo from "@/assets/clients/wheelio-app.png";
import srfaceLogo from "@/assets/clients/srface.svg";
import vedalookLogo from "@/assets/clients/vedalook.png";
import manucuristLogo from "@/assets/clients/manucurist.png";

// Row 1 Matching User Screenshot
const ROW_1_LOGOS = [
  { logo: diamondrensuLogo, name: "Diamondrensu", desc: "Diamondrensu — Custom Fine Jewelry & Gemstones" },
  { logo: gosharpeiLogo, name: "Sharpei", desc: "Gosharpei — Premium Pet Lifestyle Brand" },
  { logo: kymeeLogo, name: "KYMEE", desc: "KYMEE — Modern Eyewear & Optical Design" },
  { logo: dstrctLogo, name: "DSTRCT Solutions", desc: "DSTRCT — Enterprise E-Commerce Solutions" },
  { logo: plumDiamonds, name: "Plum Diamonds", desc: "Plum Diamonds — Ethical Lab Diamond Jewelry" },
  { logo: diamondrensuLogo, name: "Diamondrensu", desc: "Diamondrensu — Custom Fine Jewelry & Gemstones" },
];

// Row 2 Matching User Screenshot
const ROW_2_LOGOS = [
  { logo: pirinhillLogo, name: "Pirin Hill", desc: "Pirinhill — Organic Cotton & Bamboo Wear" },
  { logo: manucuristLogo, name: "Manucurist", desc: "Manucurist — Green & Clean Beauty E-Commerce" },
  { logo: simple1Logo, name: "Simpl Light", desc: "Simpl — Frictionless Payment Gateway" },
  { logo: lemaraisLogo, name: "Le Marais", desc: "Le Marais — Parisian Haute Couture & Boutique" },
  { logo: pinktownLogo, name: "Pinktown", desc: "Pinktown — Wholesale Fashion & Apparel" },
  { logo: manucuristLogo, name: "Manucurist", desc: "Manucurist — Green & Clean Beauty E-Commerce" },
];

// Row 3 Matching User Screenshot
const ROW_3_LOGOS = [
  { logo: wellvestaLogo, name: "Wellvesta", desc: "Wellvesta — Clinical Bio-Nutritional Science" },
  { logo: wheelioLogo, name: "Wheelio", desc: "Wheelio — Gamified E-Commerce Conversion App" },
  { logo: srfaceLogo, name: "SRFACE", desc: "Srface — Sustainable High-Performance Wetsuits" },
  { logo: vedalookLogo, name: "Vedalook", desc: "Vedalook — Luxury Organic Beauty & Skincare" },
  { logo: wellvestaLogo, name: "Wellvesta", desc: "Wellvesta — Clinical Bio-Nutritional Science" },
  { logo: wheelioLogo, name: "Wheelio", desc: "Wheelio — Gamified E-Commerce Conversion App" },
];

function GridLogoRainCell({ logo, name, desc }: { logo: string; name: string; desc: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const letters = desc.split("");

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/card relative w-[170px] sm:w-[210px] md:w-[240px] lg:w-[260px] h-[80px] sm:h-[100px] md:h-[115px] bg-white border-r border-b border-[#D1D1D6] flex items-center justify-center p-3 sm:p-5 shrink-0 overflow-hidden cursor-pointer transition-colors duration-200 hover:bg-neutral-50 select-none"
    >
      {/* Base Logo */}
      <img
        src={logo}
        alt={name}
        className={cn(
          "max-w-[85%] max-h-[70%] object-contain transition-all duration-300",
          isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
        )}
        loading="lazy"
      />

      {/* Hover Overlay with Rain & Assemble Text Effect */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full bg-neutral-950/95 backdrop-blur-sm p-3 flex items-center justify-center text-center transition-opacity duration-300 z-20 overflow-hidden",
          isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-[1px] gap-y-0.5 max-w-full">
          {letters.map((char, index) => {
            if (char === " ") {
              return <span key={index} className="w-1 inline-block" />;
            }
            const delay = (index % 15) * 22; // staggered falling delay in ms
            const randomDropDistance = 40 + (index % 6) * 14; // falling from top
            return (
              <span
                key={index}
                className="inline-block font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-500 ease-out"
                style={{
                  color: index % 4 === 0 ? "#27B578" : "#FFFFFF",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered
                    ? "translateY(0) scale(1)"
                    : `translateY(-${randomDropDistance}px) scale(0.3)`,
                  transitionDelay: isHovered ? `${delay}ms` : "0ms",
                  fontFamily: '"Geist Mono", monospace',
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const IN_THE_WORKS_IMAGES = [
  "https://otherhalf.studio/cdn/shop/files/Frame_1000006815_1.jpg?v=1776257588&width=1600",
  "https://otherhalf.studio/cdn/shop/files/project_desktop_1.jpg?v=1774446693&width=1600",
  "https://otherhalf.studio/cdn/shop/files/project_desktop_2.jpg?v=1774446694&width=1600",
  "https://otherhalf.studio/cdn/shop/files/project_desktop_4.jpg?v=1774446694&width=1600",
  "https://otherhalf.studio/cdn/shop/files/Project_mobile_4.jpg?v=1774446864&width=1600",
  "https://otherhalf.studio/cdn/shop/files/Project_mobile_5.jpg?v=1774446864&width=1600",
  "https://otherhalf.studio/cdn/shop/files/Project_mobile_1.jpg?v=1774446864&width=1600",
];

function OurWorkPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black relative overflow-x-clip font-sans">
      <Header forceLight />
      <div className="h-[60px]" />
      <div className="relative">
        <PageVerticalLines />

        {/* Section 1: Hero Magazine Editorial Statement Section */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-[#D1D1D6] relative z-10">
          <section
            className="py-[3.5cm] px-6 sm:px-8 md:px-12 relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[580px] sm:min-h-[660px]"
            style={{ backgroundImage: `url(${ourWorkBg})` }}
          >
            <div className="max-w-[calc(896px+5cm)] mx-auto flex flex-col items-center justify-center">
              {/* Editorial Header Status Tag */}
              <div
                className="mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-neutral-300 shadow-sm text-xs font-mono font-medium tracking-wider text-neutral-800 uppercase select-none"
                style={{ fontFamily: '"Geist Mono", monospace' }}
              >
                <span className="w-2 h-2 rounded-full bg-[#27B578] animate-pulse" />
                <span>OUR WORK & PORTFOLIO 2026</span>
              </div>

              {/* Main Justified Statement Text */}
              <p
                className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] text-white leading-snug sm:leading-relaxed md:leading-[1.4] tracking-normal font-normal text-justify select-none pointer-events-none drop-shadow-sm"
                style={{
                  fontFamily:
                    '"Cormorant Garamond", "Hedvig Letters Serif", "Source Serif 4", "Times New Roman", serif',
                }}
              >
                Showmine was built to be exactly that: your other half in strategy, design, and execution. We work closely alongside founders and brands, turning vision into brand-led design and conversion-focused builds. The results speak for themselves.
              </p>

              {/* Editorial Stat Counter Bar */}
              <div
                className="mt-12 w-full pt-8 border-t border-white/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center select-none"
                style={{ fontFamily: '"Geist Mono", monospace' }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">50+</span>
                  <span className="text-xs uppercase tracking-wider text-white/80 mt-1">Enterprise Builds</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">99.8%</span>
                  <span className="text-xs uppercase tracking-wider text-white/80 mt-1">Satisfaction Rate</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">Shopify Plus</span>
                  <span className="text-xs uppercase tracking-wider text-white/80 mt-1">Official Partner</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">Global</span>
                  <span className="text-xs uppercase tracking-wider text-white/80 mt-1">Brand Execution</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section 2: 60/40 Asymmetrical Editorial Feature Showcase */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10">
          <section className="py-[0.5cm] px-[0.5cm] relative overflow-hidden">
            <div className="max-w-[calc(896px+5cm)] mx-auto flex flex-col gap-6">
              {/* Section Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-300 select-none">
                <span
                  className="text-xs font-mono font-semibold tracking-widest text-neutral-700 uppercase"
                  style={{ fontFamily: '"Geist Mono", monospace' }}
                >
                  [ FEATURED SHOWCASE ]
                </span>
              </div>

              {/* Equal 50/50 Width Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full items-stretch">
                <WorkFrameCard
                  image={work1}
                  title="Urban Arrow"
                  heightClass="h-[300px] sm:h-[370px] md:h-[440px]"
                  titleSizeClass="text-xl sm:text-2xl md:text-3xl"
                  showTags={false}
                  stats={[
                    { value: "31", unit: "%", line1: "CONVERSION", line2: "RATE" },
                    { value: "45", unit: "%", line1: "TIME", line2: "ON SITE" },
                  ]}
                  link="/urban-arrow-showmine"
                />
                <WorkFrameCard
                  image={kymeeWorkImg}
                  title="Kymee"
                  heightClass="h-[300px] sm:h-[370px] md:h-[440px]"
                  titleSizeClass="text-xl sm:text-2xl md:text-3xl"
                  showTags={false}
                  stats={[
                    { value: "52", unit: "%", line1: "REVENUE", line2: "GROWTH" },
                    { value: "38", unit: "%", line1: "CHECKOUT", line2: "SPEED" },
                  ]}
                  link="/kymee-showmine"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Section 3: Shopify Plus Partner Banner Section */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10">
          <section className="w-full py-6 sm:py-8 md:py-10 px-6 sm:px-12 md:px-16 relative overflow-hidden">
            <div className="max-w-[calc(896px+5cm)] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-14 relative z-10">
              {/* Left Logo */}
              <div className="shrink-0">
                <picture className="Custom_logo_new">
                  <source
                    media="(max-width: 749px)"
                    type="image/webp"
                    srcSet="https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?format=webp&v=1774280212&width=480 480w, https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?format=webp&v=1774280212&width=749 749w"
                    sizes="(max-width: 749px) 100vw, 100vw"
                  />
                  <source
                    media="(max-width: 749px)"
                    srcSet="https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?v=1774280212&width=480 480w, https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?v=1774280212&width=749 749w"
                    sizes="(max-width: 749px) 100vw, 100vw"
                  />
                  <source
                    type="image/webp"
                    srcSet="https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?format=webp&v=1774280212&width=1200 1200w, https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?format=webp&v=1774280212&width=1600 1600w, https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?format=webp&v=1774280212&width=2000 2000w"
                    sizes="(max-width: 749px) 100vw, 100vw"
                  />
                  <source
                    srcSet="https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?v=1774280212&width=1200 1200w, https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?v=1774280212&width=1600 1600w, https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?format=webp&v=1774280212&width=2000 2000w"
                    sizes="(max-width: 749px) 100vw, 100vw"
                  />
                  <img
                    src="https://otherhalf.studio/cdn/shop/files/Shopify-plus-partner-new.svg?v=1774280212&width=1600"
                    alt="Shopify Plus Partner"
                    loading="lazy"
                    decoding="async"
                    width="152"
                    height="51"
                    className="w-[152px] md:w-[180px] h-auto object-contain"
                  />
                </picture>
              </div>

              {/* Right Info */}
              <div className="flex-1">
                <h2
                  className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] text-neutral-900 leading-snug md:leading-[1.3] tracking-tight font-normal text-justify"
                  style={{
                    fontFamily:
                      '"Hedvig Letters Serif", "Cormorant Garamond", "Times New Roman", serif',
                  }}
                >
                  As a Shopify Plus Partner, we have direct platform access, a dedicated Partner Manager, and faster execution on even the most complex builds.
                </h2>
              </div>
            </div>
          </section>
        </div>

        {/* Section 4: Lower Showcase Section */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10">
          <section className="py-[0.5cm] px-[0.5cm] relative overflow-hidden">
            <div className="w-full mx-auto flex flex-col items-center justify-center gap-6">
              {/* Showcase Grid with 0.5cm gap and margins */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[0.5cm] w-full transition-all duration-300">
                {LOWER_PROJECTS.map((project) => (
                  <WorkFrameCard
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    titleSizeClass="text-base sm:text-lg md:text-xl"
                    tagColsClass="grid-cols-1"
                    isCompactButton={true}
                    link={project.link || "/urban-arrow-showmine"}
                  />
                ))}
              </div>

              {/* Title Pill: OTHER CLIENTS with Divider Line on Upper Side */}
              <div className="w-full pt-8 pb-4 border-t border-[#D1D1D6] flex justify-center">
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-neutral-300 shadow-sm text-xs font-mono font-medium tracking-wider text-neutral-800 uppercase select-none"
                  style={{ fontFamily: '"Geist Mono", monospace' }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27B578] animate-pulse" />
                  <span>OTHER CLIENTS</span>
                </div>
              </div>

              {/* 3-Row Grid Wall Client Logo Marquee Section */}
              <div className="w-full overflow-hidden border-t border-l border-[#D1D1D6] bg-white relative my-4 select-none">
                {/* Left/Right Subtle Fade Gradients */}
                <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/70 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/70 to-transparent z-20 pointer-events-none" />

                {/* ROW 1: Moves Left */}
                <div className="relative w-full overflow-hidden group/marquee1">
                  <div
                    className="flex w-max animate-marquee group-hover/marquee1:[animation-play-state:paused]"
                    style={{ animationDuration: "120s" }}
                  >
                    {[...ROW_1_LOGOS, ...ROW_1_LOGOS, ...ROW_1_LOGOS, ...ROW_1_LOGOS].map((item, idx) => (
                      <GridLogoRainCell
                        key={`r1-${idx}`}
                        logo={item.logo}
                        name={item.name}
                        desc={item.desc}
                      />
                    ))}
                  </div>
                </div>

                {/* ROW 2: Moves Right (Reverse Marquee) */}
                <div className="relative w-full overflow-hidden group/marquee2">
                  <div
                    className="flex w-max animate-marquee-reverse group-hover/marquee2:[animation-play-state:paused]"
                    style={{ animationDuration: "130s" }}
                  >
                    {[...ROW_2_LOGOS, ...ROW_2_LOGOS, ...ROW_2_LOGOS, ...ROW_2_LOGOS].map((item, idx) => (
                      <GridLogoRainCell
                        key={`r2-${idx}`}
                        logo={item.logo}
                        name={item.name}
                        desc={item.desc}
                      />
                    ))}
                  </div>
                </div>

                {/* ROW 3: Moves Left */}
                <div className="relative w-full overflow-hidden group/marquee3">
                  <div
                    className="flex w-max animate-marquee group-hover/marquee3:[animation-play-state:paused]"
                    style={{ animationDuration: "125s" }}
                  >
                    {[...ROW_3_LOGOS, ...ROW_3_LOGOS, ...ROW_3_LOGOS, ...ROW_3_LOGOS].map((item, idx) => (
                      <GridLogoRainCell
                        key={`r3-${idx}`}
                        logo={item.logo}
                        name={item.name}
                        desc={item.desc}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section 5: In The Works Infinite Carousel Section */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-[#D1D1D6] relative z-10">
          <section className="py-[1.2cm] relative overflow-hidden">
            <div className="w-full mx-auto flex flex-col gap-6">
              {/* Section Header with Title */}
              <div className="px-6 sm:px-8 flex items-center justify-between pb-4 border-b border-neutral-300 select-none">
                <h2
                  className="text-xs font-mono font-semibold tracking-widest text-neutral-700 uppercase"
                  style={{ fontFamily: '"Geist Mono", monospace' }}
                >
                  [ IN THE WORKS ]
                </h2>
              </div>

              {/* Infinite Continuous Carousel Track */}
              <div className="relative w-full overflow-hidden py-2 select-none group/marquee">
                <div
                  className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] gap-[0.5cm]"
                  style={{ animationDuration: "140s" }}
                >
                  {[...IN_THE_WORKS_IMAGES, ...IN_THE_WORKS_IMAGES, ...IN_THE_WORKS_IMAGES].map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="relative w-[240px] sm:w-[280px] md:w-[320px] h-[360px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-md border border-neutral-300/80 shrink-0 bg-neutral-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                    >
                      <img
                        src={imgUrl}
                        alt={`In the works ${idx + 1}`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}
