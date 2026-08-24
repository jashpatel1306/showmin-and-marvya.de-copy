import { DividerGrid } from "@/components/ui/DividerGrid";

export interface DarkGreenDottedSectionProps {
  heightClass?: string;
  bgClass?: string;
  borderClass?: string;
  containerClass?: string;
  dotColor?: string;
  dotSpacing?: number;
  dotRadius?: number;
  className?: string;
}

export function DarkGreenDottedSection({
  heightClass = "h-[40px] lg:h-[80px]",
  bgClass = "bg-[#072F1D]",
  borderClass = "border-[#144A30]",
  containerClass = "mx-[9.5px] w-[calc(100%-19px)] md:mx-4 md:w-[calc(100%-32px)] xl:mx-auto xl:w-[1118px] border-l border-r border-[#144A30]",
  dotColor = "rgba(39, 181, 120, 0.25)", // Uniform subtle green dots
  dotSpacing = 6,
  dotRadius = 1,
  className,
}: DarkGreenDottedSectionProps) {
  return (
    <DividerGrid
      heightClass={heightClass}
      bgClass={bgClass}
      borderClass={borderClass}
      containerClass={containerClass}
      dotColor={dotColor}
      dotSpacing={dotSpacing}
      dotRadius={dotRadius}
      className={className}
    />
  );
}

export default DarkGreenDottedSection;
