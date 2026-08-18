import { cn } from "@/lib/utils";

interface PageVerticalLinesProps {
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
}

/**
 * Continuous Full-Page Vertical Frame Overlay.
 * Renders continuous left and right guide lines spanning full page height.
 */
export function PageVerticalLines({
  className,
  leftClassName,
  rightClassName,
}: PageVerticalLinesProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 left-0 right-0 z-20 mx-auto w-full",
        className
      )}
    >
      <div className="relative w-full h-full max-w-[1440px] mx-auto">
        {/* Left Vertical Line */}
        <div
          className={cn(
            "absolute top-0 bottom-0 left-[9.5px] md:left-4 lg:left-[calc(50%-559px)] w-px bg-neutral-200/60 dark:bg-white/16",
            leftClassName
          )}
        />
        {/* Right Vertical Line */}
        <div
          className={cn(
            "absolute top-0 bottom-0 right-[9.5px] md:right-4 lg:right-[calc(50%-559px)] w-px bg-neutral-200/60 dark:bg-white/16",
            rightClassName
          )}
        />
      </div>
    </div>
  );
}

export default PageVerticalLines;
