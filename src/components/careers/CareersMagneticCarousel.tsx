import { useState, useRef, useEffect } from "react";
import team1 from "@/assets/careers/team1.png";
import team2 from "@/assets/careers/team2.png";
import team3 from "@/assets/careers/team3.png";
import team4 from "@/assets/careers/team4.png";
import team5 from "@/assets/careers/team5.png";
import team6 from "@/assets/careers/team6.png";

interface CarouselItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  { id: "1", image: team1, title: "Collaborative Engineering", category: "Team Work" },
  { id: "2", image: team2, title: "AI Architecture Sessions", category: "Whiteboarding" },
  { id: "3", image: team3, title: "UI/UX Design Sprints", category: "Product Design" },
  { id: "4", image: team4, title: "Milestone Celebrations", category: "Culture" },
  { id: "5", image: team5, title: "Deep Focus & Pair Coding", category: "Engineering" },
  { id: "6", image: team6, title: "Lounge & Coffee Ideas", category: "Office Life" },
  { id: "7", image: team1, title: "Cross-Functional Syncs", category: "Product" },
  { id: "8", image: team3, title: "Prototyping New Features", category: "Design" },
  { id: "9", image: team2, title: "System Scale Planning", category: "Tech Ops" },
  { id: "10", image: team4, title: "Team Gatherings & Wins", category: "Showmine Life" },
];

export function CareersMagneticCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeImage, setActiveImage] = useState<CarouselItem | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const rect = carouselRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Create duplicated items for smooth seamless infinite scrolling track
  const duplicatedItems = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS];

  return (
    <section
      ref={carouselRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="w-full py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-white relative"
    >
      {/* Top and Bottom Faded Edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-20" />

      {/* Header Accent Pill */}
      <div className="flex justify-center mb-6 px-4">
        <span className="text-xs sm:text-sm font-semibold text-[#007A5A] tracking-wider uppercase bg-[#007A5A]/5 px-3 py-1 rounded-full border border-[#007A5A]/15">
          Life at Showmine — 10 Moments
        </span>
      </div>

      {/* Infinite Magnetic Track */}
      <div className="flex items-center gap-4 sm:gap-6 w-full">
        <div
          className={`flex gap-4 sm:gap-6 items-center w-max ${
            isPaused ? "animate-none" : "animate-marquee"
          }`}
          style={{
            transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -10}px, 0)`,
            transition: isPaused ? "transform 0.2s ease-out" : "none",
          }}
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setActiveImage(item)}
              className="group relative shrink-0 w-[240px] sm:w-[320px] md:w-[360px] h-[170px] sm:h-[220px] md:h-[250px] rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5"
              style={{
                transform: `rotate(${((idx % 5) - 2) * 0.8}deg)`,
              }}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Magnetic Interactive Glow Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#27B578]/80 rounded-2xl transition-colors duration-300 pointer-events-none" />

              {/* Caption & Category Badge */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block text-[10px] sm:text-xs font-semibold px-2 py-0.5 bg-[#27B578] text-neutral-950 rounded-full mb-1">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm md:text-base font-bold text-white leading-snug drop-shadow-sm">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full bg-neutral-900">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 bg-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#007A5A] uppercase tracking-wider">
                  {activeImage.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
                  {activeImage.title}
                </h3>
              </div>
              <a
                href="#open-positions"
                onClick={() => setActiveImage(null)}
                className="px-4 py-2 bg-[#007A5A] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#00684C] transition-colors"
              >
                Join the Team
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
