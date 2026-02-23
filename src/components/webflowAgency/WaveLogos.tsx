import { useEffect, useRef } from "react";
import webflowLogoCircle from "@/assets/webflow-logo-circle.svg";

const LOGO_COUNT = 7;
const SPEED = 0.00005;
const WAVE_AMPLITUDE = 150;
const WAVE_PERIODS = 2;

function getWaveY(x: number, width: number) {
  const progress = x / width;
  return Math.sin(progress * Math.PI * 2 * WAVE_PERIODS) * WAVE_AMPLITUDE;
}

interface LogoItem {
  offset: number;
  scale: number;
}

export default function WaveLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const logosRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const logos: LogoItem[] = Array.from({ length: LOGO_COUNT }, (_, i) => ({
      offset: i / LOGO_COUNT,
      scale: 1.9,
    }));

    let startTime = performance.now();

    function animate(time: number) {
      const container = containerRef.current;
      if (!container) return;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const centerY = height / 2;
      const elapsed = time - startTime;

      logos.forEach((logo, i) => {
        const el = logosRef.current[i];
        if (!el) return;

        const currentOffset = ((logo.offset + elapsed * SPEED) % 1 + 1) % 1;
        const x = currentOffset * width;
        const y = centerY + getWaveY(x, width);
        
        // Fade at edges
        const edgeFade = Math.min(currentOffset * 10, (1 - currentOffset) * 10, 1);

        el.style.transform = `translate(${x - 28}px, ${y - 28}px) scale(${logo.scale})`;
        el.style.opacity = String(Math.max(0, edgeFade));
      });

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {Array.from({ length: LOGO_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) logosRef.current[i] = el;
          }}
          className="absolute top-0 left-0 will-change-transform"
          style={{ width: 56, height: 56 }}
        >
          <img
            src={webflowLogoCircle}
            alt=""
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
