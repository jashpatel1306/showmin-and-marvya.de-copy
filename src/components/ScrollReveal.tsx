import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type ScrollRevealProps<T extends keyof JSX.IntrinsicElements = "div"> = {
  as?: T;
  className?: string;
  delay?: number;
  children: React.ReactNode;
} & JSX.IntrinsicElements[T];

const ScrollReveal = <T extends keyof JSX.IntrinsicElements = "div">(
  props: ScrollRevealProps<T>
) => {
  const { as, className, delay = 0, children, ...rest } = props;
  const Tag = (as || "div") as keyof JSX.IntrinsicElements;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Tag
      ref={ref as React.Ref<any>}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...(rest as any)}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;

