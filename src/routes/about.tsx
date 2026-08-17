import { createFileRoute } from '@tanstack/react-router'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DarkVeil } from "@/components/DarkVeil";
// ??

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us — Showmine",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col justify-between relative overflow-hidden font-sans">
      <Header forceDark />
      <div className="h-[60px]" />

      {/* Main Section with Kexsio Dark Veil WebGL Background Animation */}
      <main className="flex-1 min-h-[85vh] md:min-h-[750px] relative flex flex-col items-center justify-center bg-black">
        <DarkVeil
          speed={0.4}
          warpAmount={0.3}
          hueShift={140}
          noiseIntensity={0.05}
          className="w-full flex-1 flex flex-col items-center justify-center py-16 md:py-24 px-6 min-h-[85vh] md:min-h-[750px]"
        >
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto h-full my-auto py-12">
            <h1
              className="font-serif font-semibold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight drop-shadow-2xl text-center select-none"
              style={{
                fontFamily: '"Geist Mono", monospace',
                letterSpacing: "-0.01em",
              }}
            >
              about showmine
            </h1>

            <p
              className="font-serif font-semibold text-lg sm:text-2xl md:text-3xl text-white/90 tracking-normal drop-shadow-lg text-center mt-6 sm:mt-8 max-w-3xl leading-relaxed select-none"
              style={{
                fontFamily: '"Geist Mono", monospace',
              }}
            >
              Building high-performance e-commerce engineering, agentic AI systems, and enterprise digital solutions.
            </p>
          </div>
        </DarkVeil>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
