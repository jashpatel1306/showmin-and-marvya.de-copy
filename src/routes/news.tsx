import { createFileRoute } from '@tanstack/react-router'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GreenFrame } from "@/components/GreenFrame";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      {
        title: "News — Showmine",
      },
    ],
  }),
  component: NewsPage,
});

// Generate 72 angles at 5-degree intervals (0°, 5°, 10°, ..., 355°)
const hexagonAngles = Array.from({ length: 72 }, (_, i) => i * 5);

function NewsPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col justify-between relative overflow-hidden font-sans">
      <Header forceDark />
      <div className="h-[60px]" />

      {/* Main Black Section containing Steady 360-Degree 5-Degree Interval Hexagon Grid */}
      <main className="flex-1 min-h-[85vh] md:min-h-[750px] bg-black relative flex flex-col items-center justify-center py-8 md:py-12">
        {/* Central Content Area following Header side margins (no side border lines) */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto relative h-full min-h-[70vh] md:min-h-[650px] flex items-center justify-center px-2">
          {/* Rotated Regular Hexagons Spinning Steadily in Clockwise Direction */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            shapeRendering="geometricPrecision"
          >
            <defs>
              <style>{`
                @keyframes spinHexagonsClockwise {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
                .clockwise-hexagon-spin {
                  transform-origin: 50px 50px;
                  animation: spinHexagonsClockwise 90s linear infinite;
                  will-change: transform;
                }
              `}</style>
            </defs>

            {/* 72 Rotated Hexagons with steady, controlled light green stroke */}
            <g className="clockwise-hexagon-spin" shapeRendering="geometricPrecision">
              {hexagonAngles.map((angle) => (
                <polygon
                  key={angle}
                  points="50 2, 91.57 26, 91.57 74, 50 98, 8.43 74, 8.43 26"
                  fill="none"
                  stroke="rgba(39, 181, 120, 0.6)"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                  transform={`rotate(${angle} 50 50)`}
                />
              ))}
            </g>
          </svg>

          {/* Text: "Latest Insights" & Subtitle Inside the Central Intersection Oval Shape */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center p-4 max-w-3xl mx-auto">
            <h1
              className="font-serif font-semibold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight drop-shadow-2xl text-center select-none"
              style={{
                fontFamily: '"Geist Mono", monospace',
                letterSpacing: "-0.01em",
              }}
            >
              Latest Insights
            </h1>

            <p
              className="font-serif font-semibold text-sm sm:text-base md:text-lg text-white/85 tracking-normal drop-shadow-lg text-center mt-3 sm:mt-4 max-w-xl leading-relaxed select-none"
              style={{
                fontFamily: '"Geist Mono", monospace',
              }}
            >
              Discover practical insights, fresh perspectives, and useful ideas designed to help you learn, grow, and stay ahead.
            </p>
          </div>
        </div>
      </main>

      {/* Pure White Section containing Reusable GreenFrame Component */}
      <section className="relative z-10 w-full bg-white text-black border-t border-neutral-200 overflow-hidden py-16 md:py-24">
        {/* Central Container matching Header side margins */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto relative z-10 flex flex-col items-center justify-center">
          {/* Reusable GreenFrame Component */}
          <GreenFrame className="max-w-[1118px]" />
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
