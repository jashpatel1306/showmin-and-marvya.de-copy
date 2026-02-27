import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

interface StepCardProps {
    step: number;
    title: string;
    description: string;
}

const StepCard = ({ step, title, description }: StepCardProps) => {
    return (
        <div className="h-full rounded-lg border border-border card-gradient p-6 md:p-8 flex flex-col gap-5 w-full md:min-w-[500px] md:w-[500px] select-none">
            <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/60 text-lg font-black gradient-text tracking-tighter leading-none">
                    {step}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
            </div>
            <p className="text-muted-foreground text-[15px] leading-relaxed">{description}</p>
        </div>
    );
};

const steps = [
    {
      step: 1,
      title: "Offers and journey mapping",
      description:
        "We define your core offers, target audiences, and key journeys—from first click through to booked call, purchase, or signup.",
    },
    {
      step: 2,
      title: "Structure and design",
      description:
        "We map out your funnel and site structure, then design priority pages and flows so the experience feels clear, focused, and aligned with your brand.",
    },
    {
      step: 3,
      title: "Build inside GoHighLevel",
      description:
        "We create pages, funnels, and booking workflows directly in GoHighLevel, connect them to pipelines and calendars, and configure essential automations.",
    },
    {
      step: 4,
      title: "Tracking and quality assurance",
      description:
        "We implement tracking, test journeys end to end, and ensure leads, bookings, and follow-ups land exactly where they should.",
    },
    {
      step: 5,
      title: "Launch and optimization",
      description:
        "We support the launch, review early performance data, and refine messaging, layout, or funnel steps to steadily improve results.",
    },
  ];

const GoHighLevelProccessSection = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="relative w-full py-16 md:py-24 px-4 md:px-6 overflow-hidden bg-background">
            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="max-w-lg mb-12">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-foreground mb-4">
                    How our GoHighLevel projects run
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    A clear, streamlined process—from mapping your customer journeys to launching funnels and websites inside GoHighLevel—so everything connects and performs as intended.
                    </p>
                </div>

                {/* Swiper */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={16}
                        slidesPerView={1.05}
                        breakpoints={{
                            640: { slidesPerView: 1.2, spaceBetween: 24 },
                            768: { slidesPerView: 1.5, spaceBetween: 32 },
                            1024: { slidesPerView: 2, spaceBetween: 32 },
                            1280: { slidesPerView: 2.4, spaceBetween: 32 },
                        }}
                        className="!overflow-visible"
                    >
                        {steps.map((step) => (
                            <SwiperSlide key={step.step} className="!h-auto">
                                <StepCard {...step} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation buttons */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-foreground text-background items-center justify-center shadow-lg hover:scale-105 transition-transform"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-foreground text-background items-center justify-center shadow-lg hover:scale-105 transition-transform"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GoHighLevelProccessSection;
