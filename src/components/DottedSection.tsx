import { DividerGrid } from "@/components/ui/DividerGrid";

export interface DottedSectionProps {
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

export function DottedSection({
  heightClass = "h-[40px] lg:h-[80px]",
  bgClass = "bg-[#f4f3ec]",
  borderClass = "border-neutral-200",
  containerClass = "mx-[9.5px] w-[calc(100%-19px)] md:mx-4 md:w-[calc(100%-32px)] xl:mx-auto xl:w-[1118px] border-l border-r border-neutral-200",
  dotColor = "rgba(163, 163, 163, 0.40)", // Uniform neutral grey dots
  greenDotColor = "rgba(163, 163, 163, 0.40)",
  dotSpacing = 6,
  dotRadius = 1,
  showGreenAccent = false,
  accentXPercent = 0.15,
  className,
}: DottedSectionProps) {
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

export default DottedSection;
