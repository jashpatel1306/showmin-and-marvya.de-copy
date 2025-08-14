"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    options?: Parameters<typeof useEmblaCarousel>[0]
  }
>(({ className, options, children, ...props }, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      ...options,
    },
    []
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div ref={ref} className="relative w-full" {...props}>
      <div className="overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child, i) => (
            <div className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-black hover:bg-gray-900 border-gray-700 hover:border-gray-600"
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-black hover:bg-gray-900 border-gray-700 hover:border-gray-600"
          disabled={!canScrollNext}
          onClick={scrollNext}
        >
          <ArrowRight className="h-5 w-5 text-white" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  )
})
Carousel.displayName = "Carousel"

export { Carousel }
