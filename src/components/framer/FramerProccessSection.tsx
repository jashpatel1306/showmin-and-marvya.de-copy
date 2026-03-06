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
      title: "Discovery and objectives",
      description:
        "We define your offer, audience, and key actions so each Framer page is built with a clear purpose.",
    },
    {
      step: 2,
      title: "Page structure and design",
      description:
        "We outline sections, content flow, and layout, then design core pages and reusable components with conversion and motion in mind.",
    },
    {
      step: 3,
      title: "Development in Framer",
      description:
        "We build responsive pages, interactions, and components in Framer, sharing preview links so you can review progress and provide feedback.",
    },
    {
      step: 4,
      title: "Content, QA, and optimization",
      description:
        "We refine copy, connect forms and analytics, and test across devices to ensure the site feels fast, smooth, and reliable.",
    },
    {
      step: 5,
      title: "Launch and team handover",
      description:
        "We support the launch, help run initial experiments, and provide short training so your team can confidently update and create new pages in Framer.",
    },
  ];

const FramerProccessSection = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="relative w-full py-16 md:py-24 px-4 md:px-6 overflow-hidden bg-background">
            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="max-w-lg mb-12">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-foreground mb-4">
                        How our Framer projects run
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    A clear process from brief to launch so your Framer pages are ready to ship and ready to perform.
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

export default FramerProccessSection;
