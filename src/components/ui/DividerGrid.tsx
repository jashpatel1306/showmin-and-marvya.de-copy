import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DividerGridProps {
  heightClass?: string;
  bgClass?: string;
  borderClass?: string;
  containerClass?: string;
  dotColor?: string;
  greenDotColor?: string;
  dotSpacing?: number;
  dotRadius?: number;
  showGreenAccent?: boolean;
  accentXPercent?: number; // percentage from the left where the green dots cluster is
  className?: string;
}

export function DividerGrid({
  heightClass = "h-[40px] lg:h-[80px]",
  bgClass = "bg-[#f4f3ec]",
  borderClass = "border-neutral-200",
  containerClass = "mx-[9.5px] w-[calc(100%-19px)] md:mx-4 md:w-[calc(100%-32px)] xl:mx-auto xl:w-[1118px] border-l border-r",
  dotColor = "rgba(163, 163, 163, 0.45)", // Neutral grey dots
  greenDotColor = "rgba(163, 163, 163, 0.45)",
  dotSpacing = 5.67, // ~1.5mm distance between dots
  dotRadius = 1,
  showGreenAccent = false,
  accentXPercent = 0.15,
  className,
}: DividerGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let resizeTimer: NodeJS.Timeout;

    const drawGrid = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const spacing = dotSpacing;
      const cols = Math.floor(rect.width / spacing);
      const rows = Math.floor(rect.height / spacing);

      const totalGridWidth = (cols - 1) * spacing;
      const totalGridHeight = (rows - 1) * spacing;
      const startX = Math.round((rect.width - totalGridWidth) / 2);
      const startY = Math.round((rect.height - totalGridHeight) / 2);

      ctx.fillStyle = dotColor;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = Math.round(startX + i * spacing);
          const y = Math.round(startY + j * spacing);

          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    drawGrid();

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        drawGrid();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(() => {
      drawGrid();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      observer.disconnect();
    };
  }, [dotColor, greenDotColor, dotSpacing, dotRadius, showGreenAccent, accentXPercent]);

  return (
    <div className={cn("w-full border-t border-b relative z-30", bgClass, borderClass, className)}>
      {/* Opaque solid background layer spanning full width to mask out any vertical background dots in outer margins */}
      <div className="absolute inset-0 pointer-events-none z-0" />
      <div
        className={cn(
          "relative overflow-hidden z-10",
          containerClass || "mx-[9.5px] w-[calc(100%-19px)] md:mx-4 md:w-[calc(100%-32px)] xl:mx-auto xl:w-[1118px] border-l border-r",
          heightClass,
          borderClass
        )}
      >
        <div className="w-full h-full absolute inset-0">
          <canvas ref={canvasRef} className="pointer-events-none block" />
        </div>
      </div>
    </div>
  );
}

export default DividerGrid;
