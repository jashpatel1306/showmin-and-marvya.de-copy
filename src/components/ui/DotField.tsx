import { useEffect, useRef, memo } from "react";
import "./DotField.css";

const TWO_PI = Math.PI * 2;

interface DotFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  textMask?: string;
  textGradientFrom?: string;
  textGradientTo?: string;
  showLogoInMask?: boolean;
}

interface Dot {
  ax: number;
  ay: number;
  sx: number;
  sy: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
  isTextDot?: boolean;
}

interface SizeInfo {
  w: number;
  h: number;
  offsetX: number;
  offsetY: number;
}

interface MouseInfo {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  speed: number;
  active: boolean;
}

const DotField = memo<DotFieldProps>(
  ({
    dotRadius = 1.5,
    dotSpacing = 14,
    cursorRadius = 100,
    cursorForce = 0.1,
    bulgeOnly = true,
    bulgeStrength = 67,
    glowRadius = 110,
    sparkle = false,
    waveAmplitude = 0,
    gradientFrom = "rgba(39, 39, 42, 0.28)",
    gradientTo = "rgba(39, 39, 42, 0.18)",
    glowColor = "rgba(39, 181, 120, 0.35)",
    textMask = "",
    textGradientFrom = "",
    textGradientTo = "",
    showLogoInMask = false,
    ...rest
  }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const glowRef = useRef<SVGCircleElement>(null);
    const dotsRef = useRef<Dot[]>([]);
    const mouseRef = useRef<MouseInfo>({
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      speed: 0,
      active: false,
    });
    const rafRef = useRef<number | null>(null);
    const sizeRef = useRef<SizeInfo>({ w: 0, h: 0, offsetX: 0, offsetY: 0 });
    const glowOpacity = useRef<number>(0);

    const propsRef = useRef({
      dotRadius,
      dotSpacing,
      cursorRadius,
      cursorForce,
      bulgeOnly,
      bulgeStrength,
      sparkle,
      waveAmplitude,
      gradientFrom,
      gradientTo,
      textMask,
      textGradientFrom,
      textGradientTo,
      showLogoInMask,
    });

    propsRef.current = {
      dotRadius,
      dotSpacing,
      cursorRadius,
      cursorForce,
      bulgeOnly,
      bulgeStrength,
      sparkle,
      waveAmplitude,
      gradientFrom,
      gradientTo,
      textMask,
      textGradientFrom,
      textGradientTo,
      showLogoInMask,
    };

    const rebuildRef = useRef<(() => void) | null>(null);
    const glowIdRef = useRef<string>(
      `dot-field-glow-${Math.random().toString(36).slice(2, 9)}`,
    );

    useEffect(() => {
      const canvas = canvasRef.current;
      const glowEl = glowRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let resizeTimer: number;

      function resize() {
        clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(doResize, 100);
      }

      function doResize() {
        if (!canvas || !canvas.parentElement || !ctx) return;
        const rect = canvas.parentElement.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;

        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        sizeRef.current = {
          w,
          h,
          offsetX: rect.left,
          offsetY: rect.top,
        };

        buildDots(w, h);
      }

      function buildDots(w: number, h: number) {
        const p = propsRef.current;
        const step = p.dotRadius + p.dotSpacing;
        const cols = Math.floor(w / step);
        const rows = Math.floor(h / step);
        const padX = (w % step) / 2;
        const padY = (h % step) / 2;
        const dots = new Array<Dot>(rows * cols);

        // Draw offscreen text mask if textMask prop is defined
        let imgData: ImageData | null = null;
        if (p.textMask) {
          const offscreen = document.createElement("canvas");
          offscreen.width = w;
          offscreen.height = h;
          const octx = offscreen.getContext("2d");
          if (octx) {
            octx.fillStyle = "#000000";
            octx.strokeStyle = "#000000";

            const text = p.textMask;

            if (p.showLogoInMask) {
              const fontSize = Math.min(w * 0.09, 125);
              octx.font = `bold ${fontSize}px sans-serif`;
              octx.textBaseline = "middle";

              const textWidth = octx.measureText(text).width;
              const logoHeight = fontSize * 0.75;
              const logoWidth = logoHeight * 1.25;
              const logoSpacing = fontSize * 0.22;

              const totalWidth = logoWidth + logoSpacing + textWidth;
              const startX = (w - totalWidth) / 2;
              const centerY = h - fontSize * 1.25;

              octx.lineWidth = fontSize * 0.12;
              octx.lineCap = "round";
              octx.lineJoin = "round";

              octx.beginPath();
              // First checkmark
              const c1X = startX;
              const c1Y = centerY;
              octx.moveTo(c1X, c1Y + logoHeight * 0.55);
              octx.lineTo(c1X + logoWidth * 0.25, c1Y + logoHeight * 0.85);
              octx.lineTo(c1X + logoWidth * 0.65, c1Y + logoHeight * 0.25);

              // Second checkmark
              const c2X = startX + logoWidth * 0.35;
              octx.moveTo(c2X, c1Y + logoHeight * 0.55);
              octx.lineTo(c2X + logoWidth * 0.25, c1Y + logoHeight * 0.85);
              octx.lineTo(c2X + logoWidth * 0.65, c1Y + logoHeight * 0.25);
              octx.stroke();

              octx.fillText(
                text,
                startX + logoWidth + logoSpacing,
                centerY + logoHeight * 0.5,
              );
            } else {
              // Uppercase pattern text without logo - matching screenshot layout exactly
              const fontSize = Math.min(w * 0.13, 140);
              octx.font = `900 ${fontSize}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
              octx.textBaseline = "middle";

              const letterSpacing = fontSize * 0.14;

              // Calculate total width with letter spacing
              let totalWidth = 0;
              const charWidths: number[] = [];
              for (let i = 0; i < text.length; i++) {
                const charW = octx.measureText(text[i]).width;
                charWidths.push(charW);
                totalWidth += charW;
              }
              totalWidth += (text.length - 1) * letterSpacing;

              const startX = (w - totalWidth) / 2;
              const centerY = h / 2;

              let currentX = startX;
              for (let i = 0; i < text.length; i++) {
                octx.fillText(text[i], currentX, centerY);
                currentX += charWidths[i] + letterSpacing;
              }
            }

            imgData = octx.getImageData(0, 0, w, h);
          }
        }

        let idx = 0;
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const ax = padX + col * step + step / 2;
            const ay = padY + row * step + step / 2;

            let isTextDot = false;
            if (imgData) {
              const pixelX = Math.floor(ax);
              const pixelY = Math.floor(ay);
              if (pixelX >= 0 && pixelX < w && pixelY >= 0 && pixelY < h) {
                const pixelIdx = (pixelY * w + pixelX) * 4;
                if (imgData.data[pixelIdx + 3] > 50) {
                  isTextDot = true;
                }
              }
            }

            dots[idx++] = {
              ax,
              ay,
              sx: ax,
              sy: ay,
              vx: 0,
              vy: 0,
              x: ax,
              y: ay,
              isTextDot,
            };
          }
        }
        dotsRef.current = dots;
      }

      function onMouseMove(e: MouseEvent) {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
        mouseRef.current.active = true;
      }

      function onMouseLeave() {
        mouseRef.current.active = false;
      }

      function updateMouseSpeed() {
        const m = mouseRef.current;
        const dx = m.prevX - m.x;
        const dy = m.prevY - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        m.speed += (dist - m.speed) * 0.5;
        if (m.speed < 0.001) m.speed = 0;
        m.prevX = m.x;
        m.prevY = m.y;
      }

      const speedInterval = window.setInterval(updateMouseSpeed, 20);

      let frameCount = 0;

      function tick() {
        frameCount++;
        const dots = dotsRef.current;
        const m = mouseRef.current;
        const { w, h } = sizeRef.current;
        const p = propsRef.current;
        const len = dots.length;
        const t = frameCount * 0.02;

        const targetGlow = m.active ? 1 : 0;
        glowOpacity.current += (targetGlow - glowOpacity.current) * 0.1;

        if (glowEl && m.active) {
          glowEl.setAttribute("cx", String(m.x));
          glowEl.setAttribute("cy", String(m.y));
          glowEl.style.opacity = String(glowOpacity.current);
        } else if (glowEl) {
          glowEl.style.opacity = String(glowOpacity.current);
        }

        if (ctx) {
          ctx.clearRect(0, 0, w, h);

          const hoverRad = p.cursorRadius || 140;
          const hoverRadSq = hoverRad * hoverRad;
          const rad = p.dotRadius / 2;

          // Physics Update
          for (let i = 0; i < len; i++) {
            const d = dots[i];
            if (!d) continue;

            const dx = m.x - d.ax;
            const dy = m.y - d.ay;
            const distSq = dx * dx + dy * dy;

            if (distSq < hoverRadSq && m.active) {
              const dist = Math.sqrt(distSq);
              const tVal = 1 - dist / hoverRad;
              const push = tVal * tVal * (p.bulgeStrength || 40);
              const angle = Math.atan2(dy, dx);
              d.sx += (d.ax - Math.cos(angle) * push - d.sx) * 0.15;
              d.sy += (d.ay - Math.sin(angle) * push - d.sy) * 0.15;
            } else {
              d.sx += (d.ax - d.sx) * 0.1;
              d.sy += (d.ay - d.sy) * 0.1;
            }
          }

          // Path 1: Draw standard dots (background grid)
          ctx.beginPath();
          const grad = ctx.createLinearGradient(0, 0, w, h);
          grad.addColorStop(0, p.gradientFrom);
          grad.addColorStop(1, p.gradientTo);
          ctx.fillStyle = grad;

          for (let i = 0; i < len; i++) {
            const d = dots[i];
            if (!d || d.isTextDot) continue;

            let drawX = d.sx;
            let drawY = d.sy;

            // Check distance for green hover spotlight
            const dx = m.x - drawX;
            const dy = m.y - drawY;
            const distSq = dx * dx + dy * dy;

            if (m.active && distSq < hoverRadSq) {
              // Skip drawing standard dot here, we draw hovered green dots in separate pass
              continue;
            }

            if (p.waveAmplitude > 0) {
              drawY += Math.sin(d.ax * 0.03 + t) * p.waveAmplitude;
              drawX += Math.cos(d.ay * 0.03 + t * 0.7) * p.waveAmplitude * 0.5;
            }

            ctx.moveTo(drawX + rad, drawY);
            ctx.arc(drawX, drawY, rad, 0, TWO_PI);
          }
          ctx.fill();

          // Path 2: Draw text mask dots (Showmine text)
          if (p.textMask) {
            ctx.beginPath();
            const textGrad = ctx.createLinearGradient(0, 0, w, h);
            textGrad.addColorStop(
              0,
              p.textGradientFrom || "rgba(39, 39, 42, 0.75)",
            );
            textGrad.addColorStop(
              1,
              p.textGradientTo || "rgba(39, 39, 42, 0.65)",
            );
            ctx.fillStyle = textGrad;

            const textRad = rad * 1.25;

            for (let i = 0; i < len; i++) {
              const d = dots[i];
              if (!d || !d.isTextDot) continue;

              let drawX = d.sx;
              let drawY = d.sy;

              // Check distance for green hover spotlight
              const dx = m.x - drawX;
              const dy = m.y - drawY;
              const distSq = dx * dx + dy * dy;

              if (m.active && distSq < hoverRadSq) {
                // Skip drawing here, drawn in hover pass
                continue;
              }

              if (p.waveAmplitude > 0) {
                drawY += Math.sin(d.ax * 0.03 + t) * p.waveAmplitude;
                drawX +=
                  Math.cos(d.ay * 0.03 + t * 0.7) * p.waveAmplitude * 0.5;
              }

              ctx.moveTo(drawX + textRad, drawY);
              ctx.arc(drawX, drawY, textRad, 0, TWO_PI);
            }
            ctx.fill();
          }

          // Path 3: Green Hover Spotlight Dots (Hover interactive effect!)
          if (m.active) {
            for (let i = 0; i < len; i++) {
              const d = dots[i];
              if (!d) continue;

              let drawX = d.sx;
              let drawY = d.sy;

              const dx = m.x - drawX;
              const dy = m.y - drawY;
              const distSq = dx * dx + dy * dy;

              if (distSq < hoverRadSq) {
                const dist = Math.sqrt(distSq);
                const factor = Math.pow(1 - dist / hoverRad, 1.5);
                const dotAlpha = 0.25 + factor * 0.75;
                const activeRad = (d.isTextDot ? rad * 1.3 : rad) * (1 + factor * 0.85);

                ctx.beginPath();
                ctx.fillStyle = `rgba(39, 181, 120, ${dotAlpha})`; // Showmine primary green #27B578!
                ctx.arc(drawX, drawY, activeRad, 0, TWO_PI);
                ctx.fill();
              }
            }
          }
        }

        rafRef.current = requestAnimationFrame(tick);
      }

      doResize();
      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      if (canvas) {
        canvas.parentElement?.addEventListener("mouseleave", onMouseLeave);
      }
      rafRef.current = requestAnimationFrame(tick);

      rebuildRef.current = () => {
        const { w, h } = sizeRef.current;
        if (w > 0 && h > 0) buildDots(w, h);
      };

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        clearInterval(speedInterval);
        clearTimeout(resizeTimer);
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", onMouseMove);
        if (canvas) {
          canvas.parentElement?.removeEventListener("mouseleave", onMouseLeave);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      rebuildRef.current?.();
    }, [dotRadius, dotSpacing, textMask]);

    return (
      <div className="dot-field-container relative w-full h-full" {...rest}>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-pointer"
        />
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <defs>
            <radialGradient id={glowIdRef.current}>
              <stop offset="0%" stopColor={glowColor} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle
            ref={glowRef}
            cx="-9999"
            cy="-9999"
            r={glowRadius}
            fill={`url(#${glowIdRef.current})`}
            style={{ opacity: 0, willChange: "opacity" }}
          />
        </svg>
      </div>
    );
  },
);

DotField.displayName = "DotField";

export default DotField;
