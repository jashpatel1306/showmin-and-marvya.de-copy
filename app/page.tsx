"use client"

import React, { useRef, useState, useEffect, createContext, useContext } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useAnimate } from "framer-motion"
import { stagger } from "framer-motion/dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { partners } from "@/data/partners"
import { Card as UICard } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, X, BarChart3, Target, Clock, ArrowRight, Plus, Minus, ArrowLeft, ArrowRight as ArrowRightIcon, ChevronLeft, ChevronRight } from "lucide-react"
import Image, { ImageProps } from "next/image"
import { Navigation } from "@/components/navigation"
import Script from "next/script"

// Carousel Context
const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => { },
  currentIndex: 0,
});

// Outside click hook
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

// Video intersection observer hook
const useVideoIntersection = (videoRef: React.RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            video.play().catch(() => {
              // Handle autoplay policy restrictions
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, [videoRef]);
};

// Video Card Component
const VideoCard = ({
  title,
  description,
  points,
  href,
  ariaLabel,
  posterAlt,
  color = "blue",
  delay = 0.1,
  isMobile = false,
  videoSrc,
  posterSrc,
}: {
  title: string;
  description: string;
  points: string[];
  href: string;
  ariaLabel: string;
  posterAlt: string;
  color?: "blue" | "purple" | "green";
  delay?: number;
  isMobile?: boolean;
  videoSrc?: string;
  posterSrc?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoIntersection(videoRef);

  const colorClasses = {
    blue: "focus-within:ring-blue-400/50 text-blue-400 hover:text-blue-300 focus:ring-blue-400/50",
    purple: "focus-within:ring-purple-400/50 text-purple-400 hover:text-purple-300 focus:ring-purple-400/50",
    green: "focus-within:ring-green-400/50 text-green-400 hover:text-green-300 focus:ring-green-400/50"
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black hover:shadow-2xl transition-all duration-300 focus-within:ring-2 ${isMobile ? 'w-full flex-shrink-0' : ''}`}
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
    >
      {/* Media Container */}
      <div className="relative aspect-[2/3] md:aspect-[3/4] overflow-hidden">
        {videoSrc ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc || "/placeholder.jpg"}
            aria-label={posterAlt}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={posterSrc || "/placeholder.jpg"}
            alt={posterAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6">
        <h3 id={`${title.toLowerCase().replace(/\s+/g, '-')}-title`} className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 max-w-[60ch]">
          {description}
        </p>

        {/* Key Points */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {points.map((point, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-white/10 text-white/80 rounded-full">
              {point}
            </span>
          ))}
        </div>

        {/* <a
          href={href}
          className={`text-xs sm:text-sm font-medium underline-offset-4 hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black rounded ${colorClasses[color]}`}
          aria-label={ariaLabel}
        >
          Read more →
        </a> */}
      </div>
    </motion.article>
  );
};

// Mobile Swiper Component
const MobileSwiper = ({ children }: { children: React.ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const childrenArray = React.Children.toArray(children);
  const totalSlides = childrenArray.length;

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full">
      {/* Swiper Container */}
      <div
        ref={containerRef}
        className="flex overflow-hidden rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {childrenArray.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Blur Image Component
const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill,
  ...rest
}: ImageProps & { fill?: boolean }) => {
  const [isLoading, setLoading] = useState(true);
  const imgProps = {
    className: cn(
      "transition duration-300 object-cover",
      isLoading ? "blur-sm" : "blur-0",
      fill ? "h-full w-full absolute inset-0" : "h-full w-full",
      className,
    ),
    onLoad: () => setLoading(false),
    src: src as string,
    width: fill ? undefined : width,
    height: fill ? undefined : height,
    loading: "lazy" as const,
    decoding: "async" as const,
    alt: alt || "Success story image",
    ...rest,
  };

  return <img {...imgProps} />;
};

// Card Component
const Card = ({
  card,
  index,
  layout = false,
  // Individual props for backward compatibility
  src,
  title,
  category,
  content
}: {
  card?: {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
  };
  index: number;
  layout?: boolean;
  // Individual props
  src?: string;
  title?: string;
  category?: string;
  content?: React.ReactNode;
}) => {
  // Use card prop if provided, otherwise use individual props
  const cardData = card || { src, title, category, content };
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout && cardData.title ? `card-${cardData.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl overflow-hidden p-4 font-sans md:p-10 bg-black/60 backdrop-blur-xl border border-white/10"
            >
              {/* Background media for the modal */}
              {typeof cardData.src === 'string' && cardData.src.includes('.mp4') ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={cardData.src} type="video/mp4" />
                </video>
              ) : (
                <BlurImage
                  src={cardData.src || ""}
                  alt={cardData.title || "Background"}
                  fill
                  className="absolute inset-0 object-cover opacity-25 -z-10"
                />
              )}
              <div className="absolute inset-0 bg-black/30 -z-10" />
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout && cardData.title ? `category-${cardData.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {cardData.category}
              </motion.p>
              <motion.p
                layoutId={layout && cardData.title ? `title-${cardData.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {cardData.title}
              </motion.p>
              <div className="py-10">{cardData.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout && cardData.title ? `card-${cardData.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[30rem] md:w-80 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-6">
          <motion.p
            layoutId={layout && cardData.category ? `category-${cardData.category}` : undefined}
            className="text-left text-sm font-medium text-white md:text-base"
          >
            {cardData.category}
          </motion.p>
          <motion.p
            layoutId={layout && cardData.title ? `title-${cardData.title}` : undefined}
            className="mt-2 max-w-xs text-left text-xl font-semibold [text-wrap:balance] text-white md:text-2xl"
          >
            {cardData.title}
          </motion.p>
        </div>
        {typeof cardData.src === 'string' && cardData.src.includes('.mp4') ? (
          <video
            className="absolute inset-0 z-10 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={cardData.src} type="video/mp4" />
          </video>
        ) : (
          <BlurImage
            src={cardData.src || "/placeholder.jpg"}
            alt={cardData.title || 'Success story'}
            fill
            className="absolute inset-0 z-10"
          />
        )}
      </motion.button>
    </>
  );
};

// Carousel Component
const Carousel = ({ children, initialScroll = 0 }: { children: React.ReactNode; initialScroll?: number }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 230 : 320;
      const gap = window.innerWidth < 768 ? 16 : 24;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row justify-start gap-4 pl-4 pr-12">
            {React.Children.map(children, (child, index) => (
              <motion.div
                key={`card-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut"
                }}
                className="flex-shrink-0"
              >
                {child}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-4 flex justify-end gap-2">
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </button>
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ArrowRightIcon className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

// TextGenerateEffect component with improved animation
const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (scope.current) {
      observer.observe(scope.current);
    }

    return () => observer.disconnect();
  }, [scope]);

  // Animation effect
  useEffect(() => {
    if (isVisible && scope.current) {
      const spans = scope.current.querySelectorAll('span');

      // Reset all spans to initial state
      spans.forEach((span: any) => {
        span.style.opacity = '0';
        if (filter) span.style.filter = 'blur(8px)';
      });

      // Animate each word
      spans.forEach((span: any, i: any) => {
        setTimeout(() => {
          span.animate(
            [
              { opacity: 0, filter: filter ? 'blur(8px)' : 'none' },
              { opacity: 1, filter: 'blur(0px)' }
            ],
            {
              duration: duration * 1000, // Convert to milliseconds
              fill: 'forwards',
              easing: 'ease-out'
            }
          );
        }, i * 80); // Stagger delay between words (80ms)
      });
    }
  }, [isVisible, duration, filter]);

  return (
    <div ref={scope} className={cn("font-light", className)}>
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] leading-tight">
        {wordsArray.map((word, idx) => (
          <span
            key={`${word}-${idx}`}
            className="inline-block opacity-0 mr-2"
            style={{
              filter: filter ? 'blur(8px)' : 'none',
              transition: `opacity 0.5s ease-out, filter 0.5s ease-out`
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

// this funcation use in title and subtitle
const TextGenerateEffectinTitleAndSubtitle = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (scope.current) {
      observer.observe(scope.current);
    }

    return () => observer.disconnect();
  }, [scope]);

  // Animation effect
  useEffect(() => {
    if (isVisible && scope.current) {
      const spans = scope.current.querySelectorAll('span');

      // Reset all spans to initial state
      spans.forEach((span: any) => {
        span.style.opacity = '0';
        if (filter) span.style.filter = 'blur(8px)';
      });

      // Animate each word
      spans.forEach((span: any, i: any) => {
        setTimeout(() => {
          span.animate(
            [
              { opacity: 0, filter: filter ? 'blur(8px)' : 'none' },
              { opacity: 1, filter: 'blur(0px)' }
            ],
            {
              duration: duration * 1000, // Convert to milliseconds
              fill: 'forwards',
              easing: 'ease-out'
            }
          );
        }, i * 80); // Stagger delay between words (80ms)
      });
    }
  }, [isVisible, duration, filter]);

  return (
    <div ref={scope} className={cn("font-light", className)}>
      <div className="text-[14px] leading-tight px-3 py-1.5">
        {wordsArray.map((word, idx) => (
          <span
            key={`${word}-${idx}`}
            className="inline-block opacity-0 mr-2"
            style={{
              filter: filter ? 'blur(8px)' : 'none',
              transition: `opacity 0.5s ease-out, filter 0.5s ease-out`
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

// Client data for tooltips
const clients = [
  { id: 1, name: 'Client 1', designation: 'E-commerce Store', image: '/client/client1.png' },
  { id: 2, name: 'Client 2', designation: 'Fashion Brand', image: '/client/client2.png' },
  { id: 3, name: 'Client 3', designation: 'Tech Startup', image: '/client/client3.png' },
  { id: 4, name: 'Client 4', designation: 'Luxury Goods', image: '/client/client4.png' },
  { id: 5, name: 'Client 5', designation: 'Beauty Products', image: '/client/client5.png' },

];

// AnimatedTooltip component
const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <div className="flex items-center justify-center -space-x-4">
      {items.map((item, idx) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-white">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 h-11 w-11 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Can you help migrate my existing website to Shopify?",
      answer: "Yes, we offer website migration services to seamlessly transfer your existing site to Shopify, ensuring minimal disruption and preserving your SEO efforts."
    },
    {
      question: "Do you provide ongoing support after launching my Shopify store?",
      answer: "Yes, we offer ongoing support and maintenance services, including troubleshooting, platform updates, security enhancements, and performance monitoring to keep your store running smoothly."
    },
    {
      question: "What customization options do you offer for Shopify themes?",
      answer: "We provide extensive customization options, including logo integration, color scheme adjustments, layout modifications, and the integration of custom functionalities to meet your specific branding and business requirements."
    },
    {
      question: "What SEO strategies do you implement for Shopify stores?",
      answer: "We implement comprehensive SEO strategies, including keyword optimization, meta tags, URL optimization, and site speed enhancements, to improve your store's visibility and organic search rankings."
    },
    {
      question: "How long does it take to set up a Shopify store with your services?",
      answer: "The timeline varies based on the complexity of your needs, but typically, we aim to have your Shopify store fully operational within 2-4 weeks from the start of our engagement."
    },
    {
      question: "How do you optimize Shopify stores for mobile devices?",
      answer: "We ensure your Shopify store is fully responsive, optimizing layout and functionality for mobile users to provide a seamless and enjoyable shopping experience across all devices."
    },
    {
      question: "Can you help integrate third-party apps and tools with Shopify?",
      answer: "Absolutely, we assist in integrating essential third-party apps and tools to extend Shopify's functionality, enhance customer experience, and streamline your business operations."
    },
    {
      question: "How do you handle Shopify payment gateway integration?",
      answer: "We seamlessly integrate secure payment gateways like PayPal, Stripe, and others into your Shopify store, ensuring smooth and secure transactions for your customers."
    },
    {
      question: "What analytics and reporting capabilities do you provide for Shopify stores?",
      answer: "We set up analytics tools within Shopify to track key metrics such as traffic sources, conversion rates, sales performance, and customer behaviour, providing valuable insights to optimize your store's performance."
    },
    {
      question: "Can you provide examples of successful Shopify stores you've worked with?",
      answer: "Yes, we have successfully partnered with various businesses across different industries. Explore our client case studies to see how we've helped businesses like yours achieve their e-commerce goals on Shopify."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Split FAQs into two columns for better design layout
  const firstColumn = faqs.slice(0, 5)
  const secondColumn = faqs.slice(5, 10)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {/* First Column */}
      <div className="space-y-4">
        {firstColumn.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-800 rounded-2xl overflow-hidden bg-gray-900/30 hover:border-gray-700 transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 min-h-[60px] sm:min-h-[70px] text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
            >
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-white pr-2 sm:pr-4">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <Plus className="w-5 h-5 text-gray-400" />
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Second Column */}
      <div className="space-y-4">
        {secondColumn.map((faq, index) => {
          const actualIndex = index + 5 // Map to original index for state management
          return (
            <motion.div
              key={actualIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-800 rounded-2xl overflow-hidden bg-gray-900/30 hover:border-gray-700 transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(actualIndex)}
                className="w-full px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 min-h-[60px] sm:min-h-[70px] text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
              >
                <h3 className="text-xs sm:text-sm md:text-base font-medium text-white pr-2 sm:pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === actualIndex ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === actualIndex ? "auto" : 0,
                  opacity: openIndex === actualIndex ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                  <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// Our customers
const brands = [
  { name: "PINKTOWN", img: "/images/customers/pinktownusa.png" },
  { name: "SIMPL", img: "/images/customers/simpl.png" },
  { name: "DIAMONDRENSU", img: "/images/customers/diamondrensu.png" },
  { name: "GOSHAPEI", img: "/images/customers/gosharpei.png" },
  { name: "KYMEE", img: "/images/customers/kymee.png" },
  { name: "LEMARAIS", img: "/images/customers/lemaris.png" },
  { name: "PIRINHILL", img: "/images/customers/pirinhill.png" },
  { name: "WHEELIOSPIN", img: "/images/customers/WheelioSpin.png" },
  { name: "SRFACE", img: "/images/customers/srface.png" },
  { name: "BRITISHJEWEL", img: "/images/customers/britishjewel.png" },
  { name: "PLUMDIAMONDS", img: "/images/customers/plumdiamonds.png" },
  { name: "INDOERA", img: "/images/customers/indoera.png" },
];

const Partners = [
  { name: "algolia", img: "/Partners/algolia.webp" },
  { name: "gorgias", img: "/Partners/gorgias.png" },
  { name: "kimonix", img: "/Partners/kimonix.webp" },
  { name: "shopifyplus", img: "/Partners/shopifyplus.png" },
  { name: "klaviyo", img: "/Partners/klaviyo.webp" },
  { name: "recharge", img: "/Partners/recharge.webp" },
  { name: "returnista", img: "/Partners/returnista.png" },
  { name: "segment", img: "/Partners/segment.webp" },
  { name: "sendcloud", img: "/Partners/sendcloud.webp" },
  { name: "shopify", img: "/Partners/shopify.png" },
  { name: "woo", img: "/Partners/woo.png" },
  { name: "yotpo", img: "/Partners/yotpo.webp" },
]


export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <div className="min-h-screen bg-black text-white ">
      <Script id="ld-breadcrumb-home" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.showmine.io/' }
          ]
        })}
      </Script>
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-6">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.avif"
            alt="Conference room background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" />
        </motion.div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <AnimatedTooltip items={clients} />

            <div className="flex flex-col items-start ml-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-white/90 mt-0.5">190+ successful customers</span>
            </div>

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-4 md:mb-6 lg:mb-8 leading-tight mt-2 md:mt-3 px-2"
          >
            Showmine powers <span className="text-red-500 italic font-normal">brands to grow</span> in the digital world
            <br />
            The performance standard in modern commerce.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10 max-w-4xl mx-auto leading-relaxed text-white/90 px-4"
          >
            <p className="mb-1">
            All-in-one e-commerce growth
            </p>
            <p>
            We help you move faster, operate efficiently, and increase profits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl mx-auto"
          >
            <Button
              className="
                w-full sm:w-auto
                bg-[#4B6F93] hover:bg-[rgb(75, 111, 147)]
                text-white font-medium
                px-4 py-3 sm:px-6 sm:py-3 rounded-xl
                shadow-lg hover:shadow-xl
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-0.5
                text-sm sm:text-base
              "
            >
              <a
                // href="https://calendly.com/showmineinfotech/30min"
                href="https://cal.com/showmine"
                target="_blank"
              >
                Contact 👉🏻
              </a>
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                const element = document.getElementById('support-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="
                w-full sm:w-auto
                bg-grey hover:bg-[rgb(75, 111, 147)]
                text-white font-medium
                px-4 py-3 sm:px-6 sm:py-3 rounded-xl
                shadow-lg hover:shadow-xl
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-0.5
                text-sm sm:text-base
                cursor-pointer
              "
            >
              Learn more
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextGenerateEffectinTitleAndSubtitle
              words="An excerpt from our customers"
              className="px-1 py-0.5 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
              duration={0.5}
            />
          </motion.div>

          <div className="overflow-hidden relative">
            <div className="flex animate-marquee gap-16">
              {/* Original List */}
              {brands.map((brand, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={brand.img}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain  duration-300"
                  />
                </div>
              ))}

              {/* Duplicate for seamless loop */}
              {brands.map((brand, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0">
                  <Image
                    src={brand.img}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-black w-full font-sans">
        <div className="max-w-6xl mx-auto p-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TextGenerateEffectinTitleAndSubtitle
              words="Our services"
              className="px-1 py-0.5 mb-6 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
              duration={0.5}
            />
          </motion.div>
          <h2 id="support-section" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center mb-4 md:mb-6 px-4">How we can support you</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 text-center mb-8 md:mb-12 lg:mb-14 px-4 leading-relaxed">Our services are precisely tailored to provide holistic support.<br className="hidden sm:block" />
            Based on our experience with our own e-commerce companies,<br className="hidden sm:block" />
            we have founded an agency that offers exactly what every<br className="hidden sm:block" />
            E-commerce company looking for.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shopify Development Card */}
            <div className="rounded-2xl border border-blue-400/40 bg-gradient-to-br from-[#162b5c] via-[#0b0e1a] to-black p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between shadow-3xl transition-transform duration-300 hover:scale-105 min-h-[320px] sm:min-h-[360px] md:min-h-[380px] group">
              {/* <div className="flex items-center gap-3 mb-5">
                <BarChart3 className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="uppercase tracking-wider text-blue-300 text-xs font-semibold">Shopify Development</span>
              </div> */}
              <div className="flex items-center mb-5 space-x-4">
                {/* <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <img
                    src="/images/supportInfo/Development.gif"
                    alt="Shopify Development"
                    className="w-30 h-30 object-contain"
                    loading="lazy"
                  />
                </div> */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-4 font-sans">
                  Shopify Development
                </h3>
              </div>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
                We build Shopify stores that load at lightning speed, drive targeted sales, and stand out from the competition. Our stores are designed to become true customer magnets. Store migrations from other platforms to Shopify are part of our everyday work—especially now, as many e-commerce businesses face challenges with outdated systems while Shopify retailers surge ahead. With our unique approach, you don't just gain a competitive edge—you set new standards for performance.              </p>
            </div>
            {/* Growth Consulting Card */}
            <div className="rounded-2xl border border-red-400/40 bg-gradient-to-br from-[#5c162b] via-[#1a0b0e] to-black p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between shadow-3xl transition-transform duration-300 hover:scale-105 min-h-[320px] sm:min-h-[360px] md:min-h-[380px] group">
              {/* <div className="flex items-center gap-3 mb-5">
                <Target className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />
                <span className="uppercase tracking-wider text-red-300 text-xs font-semibold">Growth Consulting</span>
              </div> */}
              <div className="flex items-center mb-5 space-x-4">
                {/* <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <img
                    src="/images/supportInfo/Consulting.gif"
                    alt="Growth Consulting"
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                  />
                </div> */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-4 font-sans">
                  Growth Consulting
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
                In our consulting program, our mission is to help ambitious e-commerce brands scale rapidly, breaking past the limits of traditional methods. We partner closely with our clients, offering end-to-end support throughout their growth journey. Having operated our own stores and successfully scaled multiple e-commerce businesses to seven- and eight-figure annual revenues, we bring proven expertise. All of these insights have been distilled into a clear, strategic, step-by-step roadmap.
              </p>
            </div>
          </div>

          {/* right choice section */}
          <div className="mt-12 text-center py-12">
            <TextGenerateEffect
              words="If you're seeking a partner who thinks strategically, prioritizes your company's interests, and offers proven e-commerce expertise with an exceptional track record, Showmine is the right choice."
              className="text-center"
              duration={0.5}
            />
          </div>
          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
           
            <div className="flex flex-col items-center bg-gradient-to-br from-[#23243a] to-black rounded-2xl border border-blue-400/20 p-8 shadow-3xl">
              <BarChart3 className="w-10 h-10 mb-4 text-blue-400" />
              <h4 className="text-lg font-semibold text-white mb-2 uppercase tracking-wider">1. Analyse</h4>
              <p className="text-gray-300 text-base text-center">Through targeted questions, we analyze your current situation and get a clear picture of your company, sales channels, and goals.</p>
            </div>
           
            <div className="flex flex-col items-center bg-gradient-to-br from-[#2a1e2b] to-black rounded-2xl border border-pink-400/20 p-8 shadow-3xl">
              <Target className="w-10 h-10 mb-4 text-pink-400" />
              <h4 className="text-lg font-semibold text-white mb-2 uppercase tracking-wider">2. Potenzial</h4>
              <p className="text-gray-300 text-base text-center">With our expertise, we reveal growth potentials in the very first conversation—opportunities you may not have seen before.</p>
            </div>
         
            <div className="flex flex-col items-center bg-gradient-to-br from-[#223a2a] to-black rounded-2xl border border-green-400/20 p-8 shadow-3xl">
              <ArrowRight className="w-10 h-10 mb-4 text-green-400" />
              <h4 className="text-lg font-semibold text-white mb-2 uppercase tracking-wider">3. Fahrplan</h4>
              <p className="text-gray-300 text-base text-center">Using our Showmine Method®, we show you the next steps for your business and how to implement them efficiently and profitably with us.</p>
            </div>
          </div> */}
          {/* <div className="mt-12 flex justify-center">
            <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-3xl transition-colors">Book a free consultation</a>
          </div> */}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-black w-full font-sans overflow-hidden">
        <div className="mx-auto text-center max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <TextGenerateEffectinTitleAndSubtitle
              words="Results"
              className="px-1 py-0.5 mb-6 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
              duration={0.5}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-4 px-4">Success stories</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 text-center max-w-2xl mx-auto px-4">Our work delivers not just promises, but measurable results.</p>
          </motion.div>

          <div className="relative">
            <Carousel>
              {[
                {
                  src: "/successStory/kymee.jpg",
                  title: "website optimization",
                  category: "Kymee",
                  content: (
                    <div className="text-left space-y-4">
                      <p>Increased monthly revenue by 240% for an online fashion retailer through strategic digital marketing and conversion rate optimization.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 240% increase in monthly revenue</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 180% higher conversion rate</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 3.5x return on ad spend</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  src: "/successStory/srface1.jpg",
                  title: "wetsuit for every surfer",
                  category: "Srface",
                  content: (
                    <div className="text-left space-y-4">
                      <p>Helped a B2B SaaS company scale their user base by 5x in 12 months through targeted growth strategies and automation.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 500% user growth</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 65% reduction in customer acquisition cost</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 40% increase in monthly recurring revenue</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  src: "/successStory/manucurist.mp4",
                  title: "Beauty, cosmetic & personal care",
                  category: "Manucurist",
                  content: (
                    <div className="text-left space-y-4">
                      <p>Revitalized a traditional retail brand's digital presence, resulting in record-breaking online sales and brand engagement.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 3x increase in online sales</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 4.8/5 average customer rating</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 78% repeat customer rate</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  src: "/successStory/diamondrensu.jpg",
                  title: "Engagement Rings & Wedding",
                  category: "Diamondrensu",
                  content: (
                    <div className="text-left space-y-4">
                      <p>Successfully launched a health and fitness app that achieved 500,000+ downloads in the first 6 months.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 500,000+ downloads</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 4.9/5 App Store rating</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 45% month-over-month growth</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  src: "/successStory/atticsalt.mp4",
                  title: "Clothing",
                  category: "Atticsalt",
                  content: (
                    <div className="text-left space-y-4">
                      <p>Successfully launched a health and fitness app that achieved 500,000+ downloads in the first 6 months.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 500,000+ downloads</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 4.9/5 App Store rating</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 45% month-over-month growth</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  src: "/successStory/lemarais.mp4",
                  title: "Women's clothes shop",
                  category: "Lemarais",
                  content: (
                    <div className="text-left space-y-4">
                      <p>Successfully launched a health and fitness app that achieved 500,000+ downloads in the first 6 months.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 500,000+ downloads</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 4.9/5 App Store rating</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> 45% month-over-month growth</li>
                      </ul>
                    </div>
                  ),
                },
              ].map((story, index) => (
                <Card key={index} card={story} index={index} layout={true} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>


      {/* Comparison Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextGenerateEffectinTitleAndSubtitle
              words="The direct comparison"
              className="px-1 py-0.5 mb-6 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
              duration={0.5}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 md:mb-8 px-4">
              Why should you work with
              <br />
              <span className="text-blue-400 italic">Showmine</span> ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Other Service Providers */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <h3 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400 mb-4 md:mb-6 px-4">Other service providers</h3>
              <div className="bg-gray-900/50 border-gray-800 p-4 sm:p-6 md:p-8 h-full">

                <div className="space-y-6">
                  {[
                    "No own shop operated",
                    "No processes, established structures",
                    "Working with freelancers",
                    "No understanding of context",
                    "Logistics is a foreign word",
                    "Burn your profit through lack of planning",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Showmine */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-10 flex items-center justify-center">
                <img
                  src="/images/SHOWMINE-LIGHT.png"
                  alt="logo"
                  // fill
                  className="w-auto h-8 md:h-6 object-contain"
                // priority
                />
              </div>
              <div className="bg-gradient-to-br from-blue-900/80 to-black border-blue-700/50 p-4 sm:p-6 md:p-8 h-full relative overflow-hidden rounded-xl">
                <div className="absolute top-4 right-4 text-4xl font-light text-blue-400/20">SHOWMINE</div>

                <div className="space-y-6">
                  {[
                    "Own online shops",
                    "Speed & Agile Processes",
                    "Expert team of almost 20 employees",
                    "We understand e-commerce holistically",
                    "Own logistics hall",
                    "Trained for profitability & cash flow",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-white text-sm sm:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextGenerateEffectinTitleAndSubtitle
              words="Our services"
              className="px-1 py-0.5 mb-6 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
              duration={0.5}
            />
          </motion.div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto mb-12">
            <VideoCard
              title="eCommerce"
              description="We are proud Shopify partners and trusted end-to-end production experts for leading brands in the eCommerce industry. Beyond building webshops, we design and implement complete digital architectures tailored for growth."
              points={["Shopify/Plus", "Headless (Hydrogen, Next.js)", "Custom apps & integrations", "Performance & SEO", "CRO & analytics"]}
              href="/services/ecommerce"
              ariaLabel="Read more about eCommerce services"
              posterAlt="Abstract metallic honeycomb pattern, premium texture"
              color="blue"
              delay={0.1}
              videoSrc="/services/Ecomm-1.mp4"
              posterSrc="/services/markting.webp"
            />

            <VideoCard
              title="Design & Websites"
              description="We create best-in-class, automated corporate websites and platforms—built to scale effortlessly and designed to go far beyond the ordinary."
              points={["Brand & UI systems", "UX research", "Accessible (WCAG 2.2)", "Design tokens", "Motion & Web Vitals"]}
              href="/services/design"
              ariaLabel="Read more about Design & Websites"
              posterAlt="Minimal studio scene with glass panels and soft blue highlight"
              color="purple"
              delay={0.2}
              videoSrc="/services/design.mp4"
              posterSrc="/services/markting.webp"
            />

            <VideoCard
              title="Marketing"
              description="Ignite your brand and stand out in the digital landscape with our marketing expertise. From SEO to social media, we deliver impactful results that drive growth. As a Klaviyo elite partner, we design data-driven email and SMS campaigns that convert customer interactions into revenue. As a certified HubSpot solutions provider, we optimize automation, CRM, and inbound strategies to fuel sustainable success. Ready to elevate your online presence and outpace the competition?"
              points={["SEO & content", "Paid social/search", "Email/SMS (Klaviyo)", "CRM & attribution", "Landing pages & tests"]}
              href="/services/marketing"
              ariaLabel="Read more about Marketing services"
              posterAlt="Fragrance bottles with roses on a soft backdrop"
              color="green"
              delay={0.3}
              videoSrc="/services/markting.webp"
              posterSrc="/services/markting.webp"
            />
          </div>

          {/* Mobile Swiper Layout */}
          <div className="lg:hidden max-w-sm mx-auto mb-12">
            <MobileSwiper>
              <VideoCard
                title="eCommerce"
                description="We build high-performing Shopify stores and headless commerce experiences that scale. From checkout to integrations, every detail is optimized for conversion."
                points={["Shopify/Plus", "Headless (Hydrogen, Next.js)", "Custom apps & integrations", "Performance & SEO", "CRO & analytics"]}
                href="/services/ecommerce"
                ariaLabel="Read more about eCommerce services"
                posterAlt="Abstract metallic honeycomb pattern, premium texture"
                color="blue"
                delay={0.1}
                isMobile={true}
                videoSrc="/services/Ecomm-1.mp4"
                posterSrc="/services/markting.webp"
              />

              <VideoCard
                title="Design & Websites"
                description="Beautiful, fast, and accessible websites that express your brand and convert. We craft systems: from design foundations to motion and micro-interactions."
                points={["Brand & UI systems", "UX research", "Accessible (WCAG 2.2)", "Design tokens", "Motion & Web Vitals"]}
                href="/services/design"
                ariaLabel="Read more about Design & Websites"
                posterAlt="Minimal studio scene with glass panels and soft blue highlight"
                color="purple"
                delay={0.2}
                isMobile={true}
                videoSrc="/services/design.mp4"
                posterSrc="/services/markting.webp"
              />

              <VideoCard
                title="Marketing"
                description="Full-funnel growth powered by data. We plan, launch, and optimize campaigns across SEO, paid, email, and SMS to turn attention into revenue."
                points={["SEO & content", "Paid social/search", "Email/SMS (Klaviyo)", "CRM & attribution", "Landing pages & tests"]}
                href="/services/marketing"
                ariaLabel="Read more about Marketing services"
                posterAlt="Fragrance bottles with roses on a soft backdrop"
                color="green"
                delay={0.3}
                isMobile={true}
                videoSrc="/services/Ecomm-1.mp4"
                posterSrc="/services/markting.webp"
              />
            </MobileSwiper>
          </div>

          {/* All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              className="
                inline-flex items-center
                bg-white/10 hover:bg-white/20
                text-white font-medium
                px-4 py-2.5 sm:px-6 sm:py-3 rounded-full
                shadow-lg hover:shadow-xl
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
                text-xs sm:text-sm
              "
            >
              <a href="/services" className="focus:outline-none">
                All Services
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextGenerateEffectinTitleAndSubtitle
              words="What are you waiting for?"
              className="px-1 py-0.5 mb-6 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
              duration={0.5}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 md:mb-8 leading-tight px-4">
              Our customers are already
              <br />
              achieving more growth, more
              <br />
              success and more profitability.
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              Feel free to contact us. In a non-binding initial consultation, you'll
              <br className="hidden sm:block" />
              learn how we can set new standards for your e-commerce
              <br className="hidden sm:block" />
              business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-20">
            {[
              {
                number: "1.",
                title: "Analysis",
                icon: "/images/info/Analysis.gif",
                description:
                  "By asking a few targeted and useful questions, we analyze your current situation and gain a more accurate picture of your company, your sales channels, and your goals.",
              },
              {
                number: "2.",
                title: "Potential",
                icon: "/images/info/Marketing.gif",
                description:
                  "Thanks to our valuable expertise, we can show you growth potential during the initial consultation that you may not have been aware of before.",
              },
              {
                number: "3.",
                title: "Timetable",
                icon: "/images/info/Money.gif",
                description:
                  "Using our Showmine Method®, we will show you the next sensible steps for your company and how you can implement them with us in a time-saving and profitable way.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    {/* <step.icon className="w-10 h-10 text-blue-400" /> */}
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-20 h-20 mb-4 object-contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-3 md:mb-4">
                    {step.number} {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl mx-auto mt-10"
          >
            <Button
              className="
                w-full sm:w-auto
                bg-[#4B6F93] hover:bg-[rgb(75, 111, 147)]
                text-white font-medium
                px-4 py-3 sm:px-6 sm:py-3 rounded-xl
                shadow-lg hover:shadow-xl
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-0.5
                text-sm sm:text-base
              "
            >
              <a
                href="https://cal.com/showmine"
                target="_blank"
              >
                Contact 👉🏻
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-25 bg-black font-sans overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-7"
        >
          <TextGenerateEffectinTitleAndSubtitle
            words="Customer testimonials"
            className="px-1 py-0.5 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
            duration={0.5}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-12 md:mb-16 px-4">What our customers say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Up to Down */}
            <div className="relative h-[500px] overflow-hidden">
              <div className="animate-Showmine-scroll-down flex flex-col gap-8 will-change-transform" style={{ animationDuration: '22s' }}>
                {[
                  {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "We've been working with Showmine for three months. We'd been considering moving our online store to Shopify for a long time, but we're extremely happy and don't regret the decision at all. The Showmine team is very customer-focused, fast, and reliable...",
                    author: "Carolin Ackermann",
                    company: "SEAWATER Cubes GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Implemented at a very high speed and are showing extraordinary results. The personal support is customer-oriented, authentic, and sets standards in the industry. I highly recommend SHOWMINE...",
                    author: "Roman Wächter",
                    company: "",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ].concat([
                  {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "We've been working with Showmine for three months. We'd been considering moving our online store to Shopify for a long time, but we're extremely happy and don't regret the decision at all. The Showmine team is very customer-focused, fast, and reliable...",
                    author: "Carolin Ackermann",
                    company: "SEAWATER Cubes GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Implemented at a very high speed and are showing extraordinary results. The personal support is customer-oriented, authentic, and sets standards in the industry. I highly recommend SHOWMINE...",
                    author: "Roman Wächter",
                    company: "",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ]).map((t, i) => (
                  <div key={i} className="bg-[#18191c] border border-white/10 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group" tabIndex={0} style={{ willChange: 'transform' }}>
                    <p className="text-white text-sm sm:text-base leading-relaxed mb-3 md:mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <img src={t.avatar} alt={t.author} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="font-semibold text-white text-sm sm:text-base">{t.author}</div>
                        {t.company && <div className="text-xs sm:text-sm text-gray-400">{t.company}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Column 2: Down to Up */}
            <div className="relative h-[500px] overflow-hidden">
              <div className="animate-Showmine-scroll-up flex flex-col gap-8 will-change-transform" style={{ animationDuration: '22s' }}>
                {[
                  {
                    text: "Thanks to the outstanding network and the great motivation of the entire Showmine team, you can achieve your e-commerce goals quickly and efficiently.",
                    author: "Wolfgang Grupp Junior",
                    company: "TRIGEMA W. Grupp KG",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "We've been working with Showmine for three months. We'd been considering moving our online store to Shopify for a long time, but we're extremely happy and don't regret the decision at all. The Showmine team is very customer-focused, fast, and reliable...",
                    author: "Carolin Ackermann",
                    company: "SEAWATER Cubes GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ].concat([
                  {
                    text: "Thanks to the outstanding network and the great motivation of the entire Showmine team, you can achieve your e-commerce goals quickly and efficiently.",
                    author: "Wolfgang Grupp Junior",
                    company: "TRIGEMA W. Grupp KG",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "We've been working with Showmine for three months. We'd been considering moving our online store to Shopify for a long time, but we're extremely happy and don't regret the decision at all. The Showmine team is very customer-focused, fast, and reliable...",
                    author: "Carolin Ackermann",
                    company: "SEAWATER Cubes GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ]).map((t, i) => (
                  <div key={i} className="bg-[#18191c] border border-white/10 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group" tabIndex={0} style={{ willChange: 'transform' }}>
                    <p className="text-white text-sm sm:text-base leading-relaxed mb-3 md:mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <img src={t.avatar} alt={t.author} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="font-semibold text-white text-sm sm:text-base">{t.author}</div>
                        {t.company && <div className="text-xs sm:text-sm text-gray-400">{t.company}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Column 3: Up to Down */}
            <div className="relative h-[500px] overflow-hidden">
              <div className="animate-Showmine-scroll-down flex flex-col gap-8 will-change-transform" style={{ animationDuration: '22s' }}>
                {[
                  {
                    text: "Implemented at a very high speed and are showing extraordinary results. The personal support is customer-oriented, authentic, and sets standards in the industry. I highly recommend SHOWMINE...",
                    author: "Roman Wächter",
                    company: "",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Thanks to the outstanding network and the great motivation of the entire Showmine team, you can achieve your e-commerce goals quickly and efficiently.",
                    author: "Wolfgang Grupp Junior",
                    company: "TRIGEMA W. Grupp KG",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ].concat([
                  {
                    text: "Implemented at a very high speed and are showing extraordinary results. The personal support is customer-oriented, authentic, and sets standards in the industry. I highly recommend Showmine...",
                    author: "Roman Wächter",
                    company: "",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Thanks to the outstanding network and the great motivation of the entire Showmine team, you can achieve your e-commerce goals quickly and efficiently.",
                    author: "Wolfgang Grupp Junior",
                    company: "TRIGEMA W. Grupp KG",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ]).map((t, i) => (
                  <div key={i} className="bg-[#18191c] border border-white/10 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group" tabIndex={0} style={{ willChange: 'transform' }}>
                    <p className="text-white text-sm sm:text-base leading-relaxed mb-3 md:mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <img src={t.avatar} alt={t.author} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="font-semibold text-white text-sm sm:text-base">{t.author}</div>
                        {t.company && <div className="text-xs sm:text-sm text-gray-400">{t.company}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Animations and accessibility */}
        <style jsx global>{`
          @keyframes Showmine-scroll-down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          @keyframes Showmine-scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-Showmine-scroll-down {
            animation-name: Showmine-scroll-down;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .animate-Showmine-scroll-up {
            animation-name: Showmine-scroll-up;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-Showmine-scroll-down, .animate-Showmine-scroll-up {
              animation: none !important;
            }
          }
        `}</style>
      </section>


      {/* Team Section */}
      {/* <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextGenerateEffectinTitleAndSubtitle
              words="The founding team"
              className="px-1 py-0.5 mb-6 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
              duration={0.5}
            />

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 md:mb-8 leading-tight px-4">
              The leading minds
              <br />
              of Showmine
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed px-4">
              We have a team of nearly 20 experts
              <br />
              ready and eager to help e-commerce businesses grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            {[
              {
                name: "Jainish Patel",
                expertise: "Finding and helping e-commerce businesses grow",
                image: "/team/jainish.png?height=400&width=300",
              },
              {
                name: "Jash Patel",
                expertise: "Building AI agents for retail and e-commerce",
                image: "/team/jash.png?height=400&width=300",
              },
              // {
              //   name: "Vishal Patel",
              //   expertise: "Areas of expertise: Strategy & Controlling",
              //   image: "/placeholder.svg?height=400&width=300",
              // },
              // {
              //   name: "Hardik Patel",
              //   expertise: "Areas of expertise: Strategy & Controlling",
              //   image: "/placeholder.svg?height=400&width=300",
              // },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-900/50 rounded-xl border-gray-800 overflow-hidden group hover:border-blue-600/50 transition-all duration-300">
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent " />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">{member.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{member.expertise}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partners Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 md:mb-8 px-4">Our partners</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              We work with the best in the industry and
              <br />
              have created the best ecosystem to ensure
              <br />
              your e-commerce business grows
              <br />
              sustainably and stays at the top.
            </p>
          </motion.div>

          <div className="overflow-hidden relative">
            <div className="flex animate-marquee gap-12">
              {/* Original List */}
              {Partners.map((brand, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={brand.img}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain  duration-300"
                  />
                </div>
              ))}

              {/* Duplicate for seamless loop */}
              {Partners.map((brand, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0">
                  <Image
                    src={brand.img}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain opacity-70 transition-opacity duration-600"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextGenerateEffectinTitleAndSubtitle
              words="An excerpt from our customers"
              className="px-1 py-0.5 mb-6 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
              duration={0.5}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 md:mb-8 px-4">
              Questions &
              <span className="text-blue-400 italic">Answers</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Everything you need to know about working with Showmine
            </p>

            <Button
              className="
                w-full sm:w-auto
                bg-[#4B6F93] hover:bg-[rgb(75, 111, 147)]
                text-white font-medium
                px-3 py-2.5 rounded-xl
                shadow-lg hover:shadow-xl
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-0.5
                text-base mt-10
              "
            >
              <a
                href="https://cal.com/showmine"
                target="_blank"
              >
                Contact 👉🏻
              </a>
            </Button>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4B6F93]/20 via-[#4B6F93]/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 md:mb-8 leading-tight px-4">
              Let's discuss your growth
              <br />
              potential together.
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                className="
                w-full sm:w-auto
                bg-[#4B6F93] hover:bg-[rgb(75, 111, 147)]
                text-white font-medium
                px-3 py-2.5 rounded-xl
                shadow-lg hover:shadow-xl
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-0.5
                text-base
              "
              >
                <a
                  href="https://cal.com/showmine"
                  target="_blank"
                >
                  Contact 👉🏻
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>
    </div>
  )
}