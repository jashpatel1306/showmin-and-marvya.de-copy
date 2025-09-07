"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"

const MobileSwiper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    options?: Parameters<typeof useEmblaCarousel>[0]
  }
>(({ className, options, children, ...props }, ref) => {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      loop: true,
      ...options,
    },
    []
  )

  return (
    <div ref={ref} className={`relative w-full ${className}`} {...props}>
      <div className="overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child, i) => (
            <div className="flex-none w-full px-2">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
MobileSwiper.displayName = "MobileSwiper"

export { MobileSwiper }

