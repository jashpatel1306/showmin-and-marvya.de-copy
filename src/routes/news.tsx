import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GreenFrame } from "@/components/GreenFrame";
import frame1Img from "@/assets/news/frame-1.jpg";

const FRAME_ITEMS = [
  {
    slug: "shopify-headless-commerce",
    image: frame1Img,
    title: "Shopify Headless Commerce: Everything you need to know",
  },
  {
    slug: "building-a-strong-brand",
    image: null,
    title: "Frame 02",
  },
  {
    slug: "shopify-b2b-transactions",
    image: null,
    title: "Frame 03",
  },
  {
    slug: "shopify-summer-editions",
    image: null,
    title: "Frame 04",
  },
  {
    slug: "b2b-and-pos-integration",
    image: null,
    title: "Frame 05",
  },
  {
    slug: "email-marketing-providers",
    image: null,
    title: "Frame 06",
  },
  {
    slug: "total-cost-of-ownership",
    image: null,
    title: "Frame 07",
  },
  {
    slug: "omnichannel-retail-strategies",
    image: null,
    title: "Frame 08",
  },
  {
    slug: "enterprise-ecommerce-scalability",
    image: null,
    title: "Frame 09",
  },
];

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
    <div className="min-h-screen w-full bg-white text-black flex flex-col justify-between relative overflow-hidden font-sans">
      <Header forceLight />
      <div className="h-[60px]" />

      {/* Hero Section with Clean White Background & Statement Text */}
      <main className="flex-1 bg-white relative flex flex-col items-center justify-center py-10 md:py-16 overflow-hidden">
        {/* Central Content Area following Header side margins */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto relative z-10 py-12 md:py-16 flex items-center justify-center px-4 bg-white border-l border-r border-[#D1D1D6]">
          {/* Main Statement Text */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center p-4 max-w-3xl mx-auto">
            <h1
              className="font-mono font-medium text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-neutral-900 leading-snug sm:leading-relaxed md:leading-[1.4] tracking-tight text-center select-none max-w-2xl"
              style={{
                fontFamily: '"Geist Mono", monospace',
              }}
            >
              Our thoughts on e-commerce, technology, Shopify and design. Actionable advice to grow your business.
            </h1>
          </div>
        </div>
      </main>

      {/* Pure White Section containing Reusable GreenFrame Component */}
      <section className="relative z-10 w-full bg-white text-black border-t border-neutral-200 overflow-hidden py-[1cm]">
        {/* Central Container matching Header side margins */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto relative z-10 flex flex-col items-center justify-center">
          {/* Reusable GreenFrame Component with 9 Frames Grid (3 per row, 0.5cm gap & padding) */}
          <GreenFrame className="max-w-[1118px] p-[0.5cm]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[0.5cm] w-full">
              {FRAME_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to="/news/$id"
                  params={{ id: item.slug }}
                  className="group relative w-full h-full overflow-hidden rounded-xl bg-white border border-neutral-300 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col cursor-pointer"
                >
                  {/* Corner Accent Brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#27B578] z-20" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#27B578] z-20" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#27B578] z-20" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#27B578] z-20" />

                  {/* Frame Image / Media Container (Height matching lower 6 frames) */}
                  <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] overflow-hidden bg-neutral-900 shrink-0 flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    ) : (
                      <span className="font-mono text-xs font-semibold tracking-widest text-white/50 group-hover:text-white uppercase select-none transition-colors">
                        FRAME 0{idx + 1}
                      </span>
                    )}
                  </div>

                  {/* Bottom Content Area beneath frame */}
                  <div className="relative w-full flex-1 p-3.5 sm:p-4 bg-white border-t border-neutral-200 text-left flex items-center justify-between min-h-[64px] gap-2">
                    <h3
                      className="text-base sm:text-lg md:text-xl text-neutral-900 font-normal tracking-tight select-none truncate flex-1"
                      style={{
                        fontFamily:
                          '"Hedvig Letters Serif", "Cormorant Garamond", "Times New Roman", serif',
                      }}
                      title={item.title}
                    >
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </GreenFrame>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
