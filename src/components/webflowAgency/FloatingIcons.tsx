import { useEffect, useRef } from "react";
import webflowLogo from "@/assets/webflow-logo.svg";

interface FloatingIcon {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  phase: number;
  grayscale: boolean;
}

const FloatingIcons = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<FloatingIcon[]>([]);
  const animFrameRef = useRef<number>(0);
  const iconElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const NUM_ICONS = 8;
    const icons: FloatingIcon[] = [];

    for (let i = 0; i < NUM_ICONS; i++) {
      icons.push({
        id: i,
        x: Math.random() * 100,
        y: 20 + Math.random() * 60,
        size: 40 + Math.random() * 30,
        speed: 0.15 + Math.random() * 0.2,
        opacity: 0.15 + Math.random() * 0.6,
        rotation: Math.random() * 360,
        rotationSpeed: 0.3 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        grayscale: Math.random() > 0.4,
      });
    }
    iconsRef.current = icons;

    // Create DOM elements
    icons.forEach((icon, idx) => {
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.width = `${icon.size}px`;
      el.style.height = `${icon.size}px`;
      el.style.borderRadius = "8px";
      el.style.overflow = "hidden";
      el.style.willChange = "transform, opacity";
      el.style.pointerEvents = "none";

      const img = document.createElement("img");
      img.src = webflowLogo;
      img.alt = "";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      if (icon.grayscale) {
        img.style.filter = "grayscale(1)";
      }

      el.appendChild(img);
      container.appendChild(el);
      iconElementsRef.current[idx] = el;
    });

    let time = 0;
    const animate = () => {
      time += 0.016;
      iconsRef.current.forEach((icon, idx) => {
        const el = iconElementsRef.current[idx];
        if (!el) return;

        icon.x += icon.speed * 0.05;
        if (icon.x > 105) icon.x = -5;

        const waveY = icon.y + Math.sin(time * icon.speed * 2 + icon.phase) * 15;
        icon.rotation += icon.rotationSpeed * 0.3;

        el.style.left = `${icon.x}%`;
        el.style.top = `${waveY}%`;
        el.style.opacity = `${icon.opacity}`;
        el.style.transform = `translate(-50%, -50%) rotate(${icon.rotation}deg)`;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      iconElementsRef.current.forEach((el) => el?.remove());
      iconElementsRef.current = [];
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
};

export default FloatingIcons;
