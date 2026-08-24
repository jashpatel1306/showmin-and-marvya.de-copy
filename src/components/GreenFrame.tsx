import React from "react";
import greenFrameBg from "@/assets/news/news-frame-bg.png";

interface GreenFrameProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  aspectRatio?: string;
  onClick?: () => void;
}

/**
 * GreenFrame Component
 * Reusable green textured frame background component using src/assets/news/news-frame-bg.png.
 * Preserves 3:2 aspect ratio by default so the background image never disappears or gets partially cropped.
 */
export function GreenFrame({
  className = "",
  style = {},
  children,
  aspectRatio,
  onClick,
}: GreenFrameProps) {
  return (
    <div
      onClick={onClick}
      className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-300 transition-all duration-500 hover:scale-[1.005] ${className}`}
      style={{
        backgroundImage: `url(${greenFrameBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...(aspectRatio ? { aspectRatio } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
