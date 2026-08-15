import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlowHorizonBackground } from "@/components/GlowHorizonBackground";
import work1 from "@/assets/work/work1.png";
import work2 from "@/assets/work/work2.png";
import work3 from "@/assets/work/work3.png";
import work4 from "@/assets/work/work4.png";
import shopifyBag from "@/assets/work/shopify-bag.png";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      {
        title: "Our Work — Showmine",
      },
    ],
  }),
  component: OurWork,
});

// Helper linear interpolation function with clamping
function interpolate(
  val: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  if (val <= inMin) return outMin;
  if (val >= inMax) return outMax;
  return outMin + ((val - inMin) / (inMax - inMin)) * (outMax - outMin);
}

function OurWork() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress as section passes through viewport
        const totalDist = rect.height;
        const currentDist = (windowHeight * 0.85) - rect.top;
        const progress = Math.max(0, Math.min(1, currentDist / totalDist));

        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Frame 1 (Top Left): Enters from Left to Right (0.05 -> 0.25) & STAYS visible
  const frame1Opacity = interpolate(scrollProgress, 0.05, 0.25, 0, 1);
  const frame1X = interpolate(scrollProgress, 0.05, 0.25, -140, 0);

  // Frame 2 (Top Right): Enters from Top to Bottom (0.25 -> 0.48) & STAYS visible
  const frame2Opacity = interpolate(scrollProgress, 0.25, 0.48, 0, 1);
  const frame2Y = interpolate(scrollProgress, 0.25, 0.48, -140, 0);

  // Frame 3 (Bottom Left): Enters from Bottom to Top (0.48 -> 0.70) & STAYS visible
  const frame3Opacity = interpolate(scrollProgress, 0.48, 0.70, 0, 1);
  const frame3Y = interpolate(scrollProgress, 0.48, 0.70, 140, 0);

  // Frame 4 (Bottom Right): Enters from Right to Left (0.70 -> 0.92) & STAYS visible
  const frame4Opacity = interpolate(scrollProgress, 0.70, 0.92, 0, 1);
  const frame4X = interpolate(scrollProgress, 0.70, 0.92, 140, 0);

  return (
    <div className="min-h-screen w-full bg-[#020c07] text-white relative overflow-hidden font-sans">
      {/* Background CSS Glow Horizon Animation */}
      <GlowHorizonBackground />

      <Header forceDark />
      <div className="h-[60px]" />

      <main className="min-h-[85vh] md:min-h-[750px] relative z-10 flex flex-col items-center pt-16 md:pt-24 pb-28 md:pb-40 px-6">
        {/* First Text: 'our work' Aligned Center */}
        <div className="flex flex-col items-center justify-center text-center w-full z-20">
          <h1
            className="font-serif font-semibold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight drop-shadow-lg text-center"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            our work
          </h1>
        </div>

        {/* Second Text: Aligned Center, 3cm Spacing & Larger Font Size */}
        <div
          className="flex flex-col items-center justify-center text-center w-full z-20 mb-6"
          style={{ marginTop: "3cm" }}
        >
          <p
            className="font-serif font-semibold text-2xl sm:text-4xl md:text-5xl text-white/95 tracking-normal drop-shadow-md max-w-4xl text-center leading-[1.2]"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            Technology that feels like it belongs.
          </p>
        </div>
      </main>

      {/* Full-width White Section with 10% Light Green Tint & Uniform Thin 45-Degree Diagonal Lines */}
      <section
        ref={containerRef}
        className="relative z-10 w-full bg-white text-black border-t border-neutral-200 overflow-hidden py-12 md:py-20"
      >
        {/* 10% Light Green Tint Layer */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundColor: "rgba(39, 181, 120, 0.10)" }}
        />

        {/* Crisp Uniform Thin 45-Degree Diagonal Lines SVG Pattern */}
        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          shapeRendering="crispEdges"
        >
          <defs>
            <pattern
              id="thin-diagonal-pattern"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="10"
                stroke="rgba(0, 0, 0, 0.06)"
                strokeWidth="1"
                shapeRendering="crispEdges"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#thin-diagonal-pattern)" />
        </svg>

        {/* Top Row: 1st Frame (Top Left) & 2nd Frame (Top Right) */}
        <div className="relative z-10 w-full max-w-[760px] mx-auto px-4 sm:px-6 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full items-start justify-center">
            {/* 1st Frame (Top Left) */}
            <div
              className="w-full md:w-1/2 aspect-[4/5] bg-neutral-100 overflow-hidden shadow-md hover:shadow-lg group relative rounded-sm"
              style={{
                opacity: frame1Opacity,
                transform: `translateX(${frame1X}px)`,
                willChange: "transform, opacity",
                pointerEvents: frame1Opacity > 0.1 ? "auto" : "none",
              }}
            >
              <img
                src={work1}
                alt="Top Left Picture Frame"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* 2nd Frame (Top Right) */}
            <div
              className="w-full md:w-1/2 aspect-[4/5] bg-neutral-100 overflow-hidden shadow-md hover:shadow-lg group relative rounded-sm"
              style={{
                opacity: frame2Opacity,
                transform: `translateY(${frame2Y}px)`,
                willChange: "transform, opacity",
                pointerEvents: frame2Opacity > 0.1 ? "auto" : "none",
              }}
            >
              <img
                src={work2}
                alt="Top Right Picture Frame"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Full-width Light Green Banner with Shopify Bag Logo & Partner Text */}
        <div
          className="relative z-10 w-full my-4 md:my-6 shadow-sm flex items-center justify-center overflow-hidden"
          style={{
            height: "251.07px",
            backgroundColor: "#a9e1c9", // Solid light green tint to hide background diagonal lines
          }}
        >
          <div className="w-full max-w-[1270px] mx-auto px-6 sm:px-12 md:px-16 flex items-start justify-start h-full relative pt-[64px]">
            {/* Left Section: Shopify Bag Logo + SHOPIFY PLUS PARTNER Text */}
            <div
              className="absolute left-4 sm:left-[64.51px] flex items-center gap-3 text-left pointer-events-none"
              style={{
                top: "calc(64px + 1cm)",
              }}
            >
              <img
                src={shopifyBag}
                alt="Shopify Logo"
                className="object-contain shrink-0"
                style={{
                  width: "50.29px",
                  height: "50.29px",
                }}
              />

              <div
                style={{
                  width: "79.82px",
                  height: "48.71px",
                }}
                className="flex items-center"
              >
                <span
                  className="text-black font-serif font-semibold uppercase leading-[1.15] tracking-wide text-[12px] sm:text-[13px]"
                  style={{
                    fontFamily: '"Geist Mono", monospace',
                  }}
                >
                  SHOPIFY PLUS PARTNER
                </span>
              </div>
            </div>

            {/* Main Partner Description Text Box (shifted right by 4.5cm) */}
            <p
              className="text-black font-normal text-left text-xl sm:text-2xl md:text-[30.9px]"
              style={{
                fontFamily: '"Inter", sans-serif',
                lineHeight: "40.8px",
                letterSpacing: "-1px",
                maxWidth: "963.68px",
                marginLeft: "4.5cm",
              }}
            >
              As a Shopify Plus Partner, we have direct platform access, a dedicated Partner Manager, and faster execution on even the most complex builds.
            </p>
          </div>
        </div>

        {/* Bottom Row: 3rd Frame (Bottom Left) & 4th Frame (Bottom Right) */}
        <div className="relative z-10 w-full max-w-[760px] mx-auto px-4 sm:px-6 mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full items-start justify-center">
            {/* 3rd Frame (Bottom Left) */}
            <div
              className="w-full md:w-1/2 aspect-[4/5] bg-neutral-100 overflow-hidden shadow-md hover:shadow-lg group relative rounded-sm"
              style={{
                opacity: frame3Opacity,
                transform: `translateY(${frame3Y}px)`,
                willChange: "transform, opacity",
                pointerEvents: frame3Opacity > 0.1 ? "auto" : "none",
              }}
            >
              <img
                src={work3}
                alt="Bottom Left Picture Frame"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* 4th Frame (Bottom Right) */}
            <div
              className="w-full md:w-1/2 aspect-[4/5] bg-neutral-100 overflow-hidden shadow-md hover:shadow-lg group relative rounded-sm"
              style={{
                opacity: frame4Opacity,
                transform: `translateX(${frame4X}px)`,
                willChange: "transform, opacity",
                pointerEvents: frame4Opacity > 0.1 ? "auto" : "none",
              }}
            >
              <img
                src={work4}
                alt="Bottom Right Picture Frame"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
