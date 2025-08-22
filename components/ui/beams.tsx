"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Beams() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(0, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
      smoothX.set(x);
      smoothY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, smoothX, smoothY]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <svg className="w-full h-full opacity-30">
        <defs>
          <radialGradient
            id="beam-gradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#4B6F93" stopOpacity="0" />
            <stop offset="50%" stopColor="#5A87E4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4B6F93" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#beam-gradient)"
          style={{
            x: smoothX,
            y: smoothY,
            width: 800,
            height: 800,
            transform: 'translate(-50%, -50%)',
          }}
          className="mix-blend-overlay"
        />
      </svg>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
        style={{
          backgroundSize: "100% 1px",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at center, transparent 10%, black 70%)",
        }}
      />
    </div>
  );
}
