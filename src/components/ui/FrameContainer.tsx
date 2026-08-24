import React from "react";
import { cn } from "@/lib/utils";

interface FrameContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  borderClassName?: string;
  variant?: "light" | "dark" | "auto";
}

/**
 * Reusable full-page layout frame container.
 * Enforces standardized left and right vertical frame lines across all screen sizes.
 * Any content placed inside this container sits in the middle of the frame grid.
 */
export function FrameContainer({
  children,
  className,
  borderClassName,
  variant = "auto",
  ...props
}: FrameContainerProps) {
  const defaultBorder =
    variant === "dark"
      ? "border-white/16"
      : variant === "light"
      ? "border-neutral-200"
      : "border-neutral-200 dark:border-white/16";

  return (
    <div
      className={cn(
        "w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 lg:w-full lg:max-w-[1118px] lg:mx-auto border-l border-r relative",
        borderClassName || defaultBorder,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default FrameContainer;
