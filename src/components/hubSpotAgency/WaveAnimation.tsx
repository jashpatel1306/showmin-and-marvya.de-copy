import { useEffect, useRef } from "react";
import wordpressLogo from "@/assets/HubSpotAgency/hubspot.jpg";

const ICON_COUNT = 7;
const SPEED = 0.00005;

// Generate the sine wave path points
const getPosition = (t: number, width: number, height: number) => {
  // Normalize t to 0-1
  const norm = ((t % 1) + 1) % 1;
  const x = norm * width;
  // Sine wave with 3 periods
  const amplitude = height * 0.28;
  const centerY = height * 0.5;
  const y = centerY + Math.sin(norm * Math.PI * 6) * amplitude;
  return { x, y };
};

const WaveAnimation = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);
  const offsetsRef = useRef<number[]>(
    Array.from({ length: ICON_COUNT }, (_, i) => i / ICON_COUNT)
  );
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      const container = canvasRef.current;
      if (!container) return;

      const width = container.offsetWidth;
      const height = container.offsetHeight;

      offsetsRef.current = offsetsRef.current.map((offset) => {
        let newOffset = offset + SPEED * delta;
        if (newOffset > 1) newOffset -= 1;
        return newOffset;
      });

      iconsRef.current.forEach((icon, i) => {
        if (!icon) return;
        const t = offsetsRef.current[i];
        const { x, y } = getPosition(t, width, height);
        // Fade at edges
        const opacity = Math.min(1, Math.min(t, 1 - t) * 10);
        icon.style.transform = `translate(${x - 28}px, ${y - 28}px) scale(1.4)`;
        icon.style.opacity = String(opacity);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      ref={canvasRef}
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-30"
      style={{ height: "100%" }}
    >
      {Array.from({ length: ICON_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) iconsRef.current[i] = el;
          }}
          className="absolute top-0 left-0 will-change-transform"
          style={{ width: 56, height: 56 }}
        >
          <img
            src={wordpressLogo}
            alt="WordPress logo"
            className="w-full h-full rounded-full object-cover"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default WaveAnimation;
