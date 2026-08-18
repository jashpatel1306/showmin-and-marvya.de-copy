import { useState, useEffect } from "react";
import { BookDemoButton } from "./BookDemoButton";
import imgInbox from "@/assets/HerosectionAi/inbox.avif";
import imgAgents from "@/assets/HerosectionAi/ai-agents.avif";
import imgAutomation from "@/assets/HerosectionAi/automation.avif";
import imgBroadcasting from "@/assets/HerosectionAi/broadcasting.avif";
import imgGovernance from "@/assets/HerosectionAi/cx-governance.avif";
import imgAnalytics from "@/assets/HerosectionAi/ai-anlaytics.avif";

import imgFacebookLeft from "@/assets/HerosectionAi/facebook/left.avif";
import imgFacebookRight from "@/assets/HerosectionAi/facebook/right.avif";

// Decorative animated circuit SVGs
import leftTop from "@/components/hero-svgs/left-top.html?raw";
import rightTop from "@/components/hero-svgs/right-top.html?raw";
import leftMid from "@/components/hero-svgs/left-mid.html?raw";
import rightMid from "@/components/hero-svgs/right-mid.html?raw";
import leftBot from "@/components/hero-svgs/left-bot.html?raw";
import rightBot from "@/components/hero-svgs/right-bot.html?raw";
import mobileLeft from "@/components/hero-svgs/mobile-left.html?raw";
import mobileRight from "@/components/hero-svgs/mobile-right.html?raw";

import iconInbox from "@/components/hero-svgs/tab-inbox.html?raw";
import iconAgents from "@/components/hero-svgs/tab-agents.html?raw";
import iconAutomation from "@/components/hero-svgs/tab-automation.html?raw";
import iconBroadcasting from "@/components/hero-svgs/tab-broadcasting.html?raw";
import iconGovernance from "@/components/hero-svgs/tab-governance.html?raw";
import iconAnalytics from "@/components/hero-svgs/tab-analytics.html?raw";

const TAB_IMAGES = {
  inbox: imgInbox,
  agents: imgAgents,
  automation: imgAutomation,
  broadcasting: imgBroadcasting,
  governance: imgGovernance,
  analytics: imgAnalytics,
} as const;

const TABS = [
  { id: "inbox", label: "SHOPIFY", svg: iconInbox },
  { id: "agents", label: "SHOPIFY PLUS", svg: iconAgents },
  { id: "automation", label: "B2B COMMERCE", svg: iconAutomation },
  { id: "broadcasting", label: "AUTOMATION", svg: iconBroadcasting },
  { id: "governance", label: "SOFTWARE", svg: iconGovernance },
  { id: "analytics", label: "AI SOLUTIONS", svg: iconAnalytics },
] as const;

const TAB_DURATION = 6000; // Auto-rotate interval (6 seconds)

export function Hero() {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("inbox");

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => {
        const currentIndex = TABS.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % TABS.length;
        return TABS[nextIndex].id;
      });
    }, TAB_DURATION);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #004421 0%, #042717 100%)",
      }}
    >
      {/* Global SVG Definitions for Circuit Animations */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27B578" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#78ffbe" stopOpacity="1" />
            <stop offset="100%" stopColor="#27B578" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
      {/* Top green light line with travelling glow */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px z-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(39,181,120,0) 0%, rgba(39,181,120,0.55) 20%, rgba(39,181,120,0.55) 80%, rgba(39,181,120,0) 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 h-px w-[40%]"
          style={{
            background:
              "linear-gradient(to right, rgba(39,181,120,0) 0%, rgba(120,255,190,0.95) 50%, rgba(39,181,120,0) 100%)",
            boxShadow:
              "0 0 12px 2px rgba(39,181,120,0.85), 0 0 24px 4px rgba(39,181,120,0.45)",
            animation:
              "hero-beam-sweep 4.5s cubic-bezier(0.45, 0, 0.55, 1) infinite",
          }}
        />
      </div>

      {/* Mobile / tablet circuits */}
      <div
        className="pointer-events-none absolute inset-0 lg:hidden overflow-hidden"
        dangerouslySetInnerHTML={{ __html: mobileLeft + mobileRight }}
      />

      {/* Desktop 3-part layout (W: 1440px) */}
      <div className="relative mx-auto max-w-[1440px] w-full flex">
        {/* Left Column (Designs) */}
        <div className="hidden xl:block w-[161px] shrink-0 h-[1200px] relative overflow-hidden z-[1]">
          <div
            className="absolute inset-0"
            dangerouslySetInnerHTML={{ __html: leftTop + leftMid + leftBot }}
          />
        </div>

        {/* Center Column (Content) */}
        <div className="relative z-10 w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto shrink-0 border-l border-r border-white/16 lg:h-[1200px] flex flex-col items-center px-4 lg:px-0">
          {/* Animated left pillar glow on top of left border */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-px overflow-hidden hidden lg:block">
            <div
              className="absolute left-0 w-px h-[30%]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(39,181,120,0) 0%, rgba(120,255,190,0.95) 50%, rgba(39,181,120,0) 100%)",
                boxShadow:
                  "0 0 12px 2px rgba(39,181,120,0.85), 0 0 24px 4px rgba(39,181,120,0.4)",
                animation:
                  "hero-beam-sweep-v 5s cubic-bezier(0.45,0,0.55,1) infinite",
              }}
            />
          </div>
          {/* Animated right pillar glow on top of right border */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-px overflow-hidden hidden lg:block">
            <div
              className="absolute left-0 w-px h-[30%]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(39,181,120,0) 0%, rgba(120,255,190,0.95) 50%, rgba(39,181,120,0) 100%)",
                boxShadow:
                  "0 0 12px 2px rgba(39,181,120,0.85), 0 0 24px 4px rgba(39,181,120,0.4)",
                animation:
                  "hero-beam-sweep-v 5s cubic-bezier(0.45,0,0.55,1) infinite 1.5s",
              }}
            />
          </div>

          {/* Meta badge - Y: 80px */}
          <div className="pt-20 lg:py-0 lg:mt-[80px] flex items-center justify-center">
            <div className="flex items-center gap-2">
              <img
                src={imgFacebookLeft}
                alt=""
                className="shrink-0 w-[27px] lg:w-[36px] h-auto"
              />
              <div className="flex flex-col items-center gap-2 pb-3">
                <MetaLogo />
                <span className="text-white text-center text-[13px] leading-tight font-medium">
                  COMMERCE · SOFTWARE ·
                  <br />
                  AUTOMATION
                </span>
              </div>
              <img
                src={imgFacebookRight}
                alt=""
                className="shrink-0 w-[27px] lg:w-[36px] h-auto"
              />
            </div>
          </div>

          {/* Headline - Y: 181px */}
          <h1
            className="text-white text-center max-w-[820px] lg:max-w-[789px] lg:h-[167.41px] text-[34px] sm:text-[48px] lg:text-[61px] leading-[1.1] lg:leading-[85.4px] tracking-tight lg:tracking-[-0.01em] font-normal mt-[28px] lg:mt-[31px]"
            style={{ fontFamily: '"Hedvig Letters Serif", "Cormorant Garamond", "Times New Roman", serif' }}
          >
            We build digital systems
            <br className="lg:hidden" /> that move businesses forward
            {/* <br /> */}

          </h1>

          {/* Subhead - Y: 362.81px */}
          <p className="text-center max-w-[700px] lg:h-[65.82px] text-[15px] lg:text-[16px] leading-relaxed lg:leading-[22.4px] lg:tracking-[-0.01em] text-white/50 mt-4 lg:mt-[14.4px] px-4 lg:px-0">
            We design and develop high-performance Shopify experiences, business software, and automation solutions built around the way your business actually works.
          </p>

          {/* CTAs - Y: 462.03px */}
          <div className="flex items-center justify-center gap-5 lg:gap-[14.14px] w-full lg:w-auto px-4 lg:px-0 mt-6 lg:mt-[33.4px] lg:h-[40px]">
            <BookDemoButton className="w-full lg:w-[130.86px] flex-1 lg:flex-none" />
            <a
              href="/pricing"
              className="shrink-0 lg:flex-none w-full lg:w-auto flex-1 lg:flex-none"
            >
              <button className="inline-flex items-center justify-center rounded-[2px] cursor-pointer whitespace-nowrap transition-colors h-[40px] w-full lg:w-[130.86px] text-sm font-medium text-white border border-white/70 hover:bg-white/[0.06] active:bg-white/[0.1]">
                <span className="relative z-10">View plans</span>
              </button>
            </a>
          </div>

          {/* Tabs - Y: 546.03px */}
          <div className="mt-8 lg:mt-[44px] flex border-y border-dashed border-white/12 w-full max-w-[1116px] h-[56px] md:h-[72px] lg:h-[73.33px]">
            {TABS.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  aria-label={t.label}
                  className={`relative flex items-center justify-center gap-2 h-full border-r border-dashed last:border-r-0 border-white/12 transition-all duration-300 ease-out cursor-pointer md:pt-3 md:pb-2 ${isActive
                    ? "flex-[1.5] md:flex-1 flex-row md:flex-col bg-[#05502D] px-3 md:px-0"
                    : "flex-1 flex-row md:flex-col hover:bg-[rgba(255,255,255,0.04)]"
                    }`}
                >
                  <div
                    className={`w-5 h-5 ${isActive ? "text-[#27B578]" : "text-white/65"}`}
                    dangerouslySetInnerHTML={{ __html: t.svg }}
                  />
                  <span
                    className={`text-[11px] font-semibold tracking-[0.05em] uppercase transition-all duration-200 ${isActive
                      ? "block text-white"
                      : "hidden md:block text-white/65"
                      }`}
                  >
                    {t.label}
                  </span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#27B578]"
                      style={{
                        animation: `tab-progress ${TAB_DURATION}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Screenshot - Y: 620.03px */}
          <div className="relative w-full max-w-[1118px] overflow-hidden bg-[#021a0e] border border-white/10 rounded-sm shadow-2xl mt-8 lg:mt-0">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#27B578] z-10" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#27B578] z-10" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#27B578] z-10" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#27B578] z-10" />
            <img
              src={TAB_IMAGES[active]}
              alt={`Showmine ${active} dashboard`}
              className="w-full block"
              width={1600}
              height={960}
            />
          </div>
        </div>

        {/* Right Column (Designs) */}
        <div className="hidden xl:block w-[161px] shrink-0 h-[1200px] relative overflow-hidden z-[1]">
          <div
            className="absolute inset-0"
            dangerouslySetInnerHTML={{
              __html: rightTop + rightMid + rightBot,
            }}
          />
        </div>
      </div>
    </section>
  );
}

function MetaLogo() {
  return (
    <svg viewBox="0 0 287 191" className="h-4" aria-label="Meta">
      <path
        fill="#0081FB"
        d="M31.06 126c0 11 2.41 19.41 5.56 24.51A19 19 0 0 0 53.19 160c8.1 0 15.51-2 29.79-21.76 11.44-15.83 24.92-38 34-51.92l15.36-23.59c10.67-16.39 23-34.61 37.18-46.96C181.07 5.6 193.54 0 206.09 0c21.07 0 41.14 12.21 56.5 35.11C279.41 60.18 287.5 91.77 287.5 124.36c0 19.38-3.82 33.62-10.32 44.87-6.28 10.88-18.52 21.77-39.11 21.77v-31c17.63 0 22.03-16.2 22.03-34.74 0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85 0-26.8 11.2-40.23 31.17-7.14 10.61-14.47 23.54-22.7 38.13l-9.06 16.05c-18.2 32.27-22.81 39.62-31.91 51.75C84.74 184 73.49 191 53.19 191c-21.27 0-34.72-9.21-43.05-23.09C3.34 156.6 0 141.76 0 124.85l31.06 1.15Z"
      />
      <path
        fill="#0064E1"
        d="M24.49 37.3C38.73 15.35 59.28 0 82.85 0c13.65 0 27.22 4.04 41.39 15.61 15.5 12.65 32 33.48 52.63 67.81l7.39 12.32c17.84 29.78 28 45.13 33.95 52.36 7.66 9.29 13.02 12 19.5 12 17.63 0 22.03-16.2 22.03-34.74l27.4-.86c0 19.38-3.82 33.62-10.32 44.87-6.28 10.88-18.52 21.77-39.11 21.77-12.8 0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L172.4 99.7c-12.99-21.73-24.91-37.91-31.81-45.24-7.41-7.88-16.92-17.4-32.16-17.4-12.34 0-22.81 8.66-31.57 21.9L24.49 37.3Z"
      />
      <path
        fill="#0064E1"
        d="M82.35 37.07c-12.34 0-22.81 8.66-31.57 21.9-12.39 18.7-19.97 46.57-19.97 73.32 0 11 2.41 19.41 5.56 24.51L10.14 167.91C3.34 156.6 0 141.76 0 124.85 0 93.94 8.48 61.72 24.49 37.3 38.73 15.35 59.28 0 82.85 0l-.5 37.07Z"
      />
    </svg>
  );
}
