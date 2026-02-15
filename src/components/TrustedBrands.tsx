import { useEffect, useState } from "react";

// Two sets of placeholder logos that crossfade
const logoSetsA = [
  { name: "Ad Pros", width: 43, height: 44 },
  { name: "1DS", width: 139, height: 29 },
  { name: "TMP", width: 129, height: 36 },
  { name: "DealerSmart", width: 190, height: 27 },
  { name: "Revolt", width: 98, height: 24 },
];

const logoSetsB = [
  { name: "Clientflow", width: 80, height: 30 },
  { name: "Consensus", width: 166, height: 29 },
  { name: "ACE", width: 152, height: 35 },
  { name: "FoodFacts", width: 151, height: 36 },
  { name: "TKS", width: 139, height: 70 },
];

const PlaceholderLogo = ({
  name,
  width,
  height,
}: {
  name: string;
  width: number;
  height: number;
}) => {
  const scale = Math.min(1, 120 / width, 40 / height);
  return (
    <div className="flex items-center justify-center h-full w-full">
      <svg
        width={width * scale}
        height={height * scale}
        viewBox={`0 0 ${width} ${height}`}
        className="text-foreground/70"
      >
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          rx="4"
          fill="currentColor"
          opacity="0.08"
        />
        <text
          x={width / 2}
          y={height / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fill="currentColor"
          fontSize={Math.min(14, height * 0.5)}
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          {name}
        </text>
      </svg>
    </div>
  );
};

const TrustedBrands = () => {
  const [showSetA, setShowSetA] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSetA((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentSet = showSetA ? logoSetsA : logoSetsB;

  return (
    <section className="relative z-10 flex justify-center px-6 pb-20">
      <div
        className="w-full max-w-[1270px] rounded-xl border bg-card p-6"
        style={{ borderColor: "rgb(225, 225, 230)" }}
      >
        <h2
          className="text-center text-sm font-semibold tracking-wide mb-6"
          style={{ color: "rgb(0, 0, 0)" }}
        >
          Trusted by leading brands
        </h2>

        <div className="grid grid-cols-5 gap-3 h-16">
          {currentSet.map((logo, i) => (
            <div
              key={`${showSetA ? "a" : "b"}-${i}`}
              className="relative overflow-hidden"
            >
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-350 ease-out"
                style={{
                  animation: "logoFadeIn 0.35s cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
                }}
              >
                <PlaceholderLogo
                  name={logo.name}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
