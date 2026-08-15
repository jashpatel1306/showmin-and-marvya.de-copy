export function GlowHorizonBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#020c07]">
      {/* 1. Deep Dark Green Corner & Background Radial Gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] max-w-[2000px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 15%, rgba(18, 99, 62, 0.4) 0%, rgba(6, 40, 24, 0.65) 50%, rgba(2, 12, 7, 0.98) 85%, #020c07 100%)",
          animation: "glow-horizon-breathe 8s ease-in-out infinite",
        }}
      />

      {/* 2. SVG Horizon Curved Dome with Dimmed Soft Green Rim (No Harsh White) */}
      <div className="absolute top-0 left-0 right-0 h-[480px] sm:h-[520px] md:h-[560px] w-full pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 540"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dark Green Corners & Atmospheric Linear Gradient */}
            <linearGradient id="soft-green-atmosphere" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#02140c" stopOpacity="0.98" />
              <stop offset="35%" stopColor="#042617" stopOpacity="0.92" />
              <stop offset="65%" stopColor="#0c4a2e" stopOpacity="0.8" />
              <stop offset="90%" stopColor="#166e43" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#27b578" stopOpacity="0.55" />
            </linearGradient>

            {/* Soft Green Rim Gradient - Dimmed White, Soft Emerald */}
            <linearGradient id="soft-green-rim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(2, 20, 12, 0.95)" />
              <stop offset="25%" stopColor="rgba(39, 181, 120, 0.35)" />
              <stop offset="50%" stopColor="rgba(167, 243, 208, 0.55)" />
              <stop offset="75%" stopColor="rgba(39, 181, 120, 0.35)" />
              <stop offset="100%" stopColor="rgba(2, 20, 12, 0.95)" />
            </linearGradient>

            {/* Soft Filter Glow */}
            <filter id="soft-green-blur" x="-30%" y="-40%" width="160%" height="180%">
              <feGaussianBlur stdDeviation="8" result="blur1" />
              <feGaussianBlur stdDeviation="22" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Filled Atmosphere above curve */}
          <path
            d="M -100,-100 L 1540,-100 L 1540,110 Q 720,470 -100,110 Z"
            fill="url(#soft-green-atmosphere)"
          />

          {/* Wide Soft Green Rim Glow */}
          <path
            d="M -100,110 Q 720,470 1540,110"
            stroke="rgba(39, 181, 120, 0.3)"
            strokeWidth="16"
            fill="none"
            filter="url(#soft-green-blur)"
            style={{ opacity: 0.65 }}
          />

          {/* Dimmed Soft Green Rim Line */}
          <path
            d="M -100,110 Q 720,470 1540,110"
            stroke="url(#soft-green-rim)"
            strokeWidth="3"
            fill="none"
            filter="url(#soft-green-blur)"
          />
        </svg>
      </div>

      {/* 3. Soft Green Center Aura (No Bright White Spot) */}
      <div
        className="absolute top-[390px] sm:top-[430px] md:top-[450px] left-1/2 -translate-x-1/2 w-[500px] h-[90px] rounded-[100%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(39, 181, 120, 0.25) 0%, rgba(12, 74, 46, 0.12) 50%, transparent 85%)",
          filter: "blur(24px)",
          animation: "glow-horizon-pulse 5s ease-in-out infinite",
        }}
      />

      {/* 4. Corner Vignette Fading Corners to Dark Green */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#020c07_100%)] pointer-events-none" />
    </div>
  );
}
