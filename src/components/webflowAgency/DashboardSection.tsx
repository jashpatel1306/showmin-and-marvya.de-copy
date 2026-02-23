import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dashboardImg from "@/assets/dashboard-screenshot.png";

export default function DashboardSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0.7, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-background py-16 md:py-24"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        <div style={{ perspective: 1200 }}>
          <motion.div
            style={{
              y,
              opacity,
              rotateX,
              scale,
              transformOrigin: "center top",
            }}
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-border">
              <img
                src={dashboardImg}
                alt="Screenshot of a Webflow marketing website designed by South Digital"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
