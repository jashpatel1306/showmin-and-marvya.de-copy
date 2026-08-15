import { DividerGrid } from "@/components/ui/DividerGrid";

export interface WDSProps {
  heightClass?: string;
  bgClass?: string;
  borderClass?: string;
  containerClass?: string;
  dotColor?: string;
  greenDotColor?: string;
  dotSpacing?: number;
  dotRadius?: number;
  showGreenAccent?: boolean;
  accentXPercent?: number;
  className?: string;
}

export function WDS({
  heightClass = "h-[40px] lg:h-[80px]",
  bgClass = "bg-white",
  borderClass = "border-neutral-200",
  containerClass = "w-full",
  dotColor = "rgba(163, 163, 163, 0.45)", // Neutral grey dots
  greenDotColor = "rgba(163, 163, 163, 0.45)",
  dotSpacing = 5.67, // ~1.5mm distance between dots (1mm = 3.78px, 1.5mm = 5.67px)
  dotRadius = 1,
  showGreenAccent = false,
  accentXPercent = 0.15,
  className,
}: WDSProps) {
  return (
    <DividerGrid
      heightClass={heightClass}
      bgClass={bgClass}
      borderClass={borderClass}
      containerClass={containerClass}
      dotColor={dotColor}
      greenDotColor={greenDotColor}
      dotSpacing={dotSpacing}
      dotRadius={dotRadius}
      showGreenAccent={showGreenAccent}
      accentXPercent={accentXPercent}
      className={className}
    />
  );
}

export default WDS;
