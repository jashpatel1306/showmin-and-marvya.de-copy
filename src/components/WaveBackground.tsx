import { useEffect, useRef } from "react";
import wordpressIcon from "@/assets/wordpress-icon.png";

const ICON_COUNT = 7;
const WAVE_PATH = "M 0 284 C 103 133 207 133 310 284 C 413 436 517 436 620 284 C 723 133 827 133 930 284 C 1033 436 1136 436 1239 284";

const WaveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icons = containerRef.current?.querySelectorAll<HTMLDivElement>(".wave-icon");
    if (!icons) return;

    let animationId: number;
    let startTime: number | null = null;
    const speed = 0.003; // controls how fast icons travel along the path

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) * speed;

      icons.forEach((icon, i) => {
        const baseOffset = (i / ICON_COUNT) * 100;
        const currentOffset = ((baseOffset + elapsed) % 110) - 5; // slight overflow for smooth wrapping
        const clampedOffset = Math.max(0, Math.min(100, currentOffset));

        // Fade in/out at edges
        let opacity = 1;
        if (currentOffset < 5) opacity = currentOffset / 5;
        if (currentOffset > 95) opacity = (100 - currentOffset) / 5;
        opacity = Math.max(0, Math.min(1, opacity));

        icon.style.offsetDistance = `${clampedOffset}%`;
        icon.style.opacity = String(opacity);
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: "570px" }}
      >
        {Array.from({ length: ICON_COUNT }).map((_, i) => (
          <div
            key={i}
            className="wave-icon absolute top-0 left-0"
            style={{
              offsetPath: `path("${WAVE_PATH}")`,
              offsetDistance: `${(i / ICON_COUNT) * 100}%`,
              opacity: 0,
              width: 56,
              height: 56,
              transform: "scale(1.9)",
            }}
          >
            <img
              src={wordpressIcon}
              alt=""
              className="w-full h-full object-cover rounded-full"
              draggable={false}
            />
          </div>
        ))}
      </div>
      {/* Gradient fade to white at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "200px",
          background: "linear-gradient(to bottom, transparent, hsl(var(--background)))",
        }}
      />
    </div>
  );
};

export default WaveBackground;
