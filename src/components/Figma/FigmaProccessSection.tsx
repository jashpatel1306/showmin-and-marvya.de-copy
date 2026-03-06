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
      title: "Review and define goals",
      description:
        "We assess your current design files, clarify objectives, and decide what the Figma workspace should support—marketing, product design, or both.",
    },
    {
      step: 2,
      title: "Create structure and foundations",
      description:
        "We set up page structures, grid systems, design styles, and base components to establish a reusable and scalable foundation.",
    },
    {
      step: 3,
      title: "Design key screens",
      description:
        "We design the main pages or flows while building components and variants so the system stays consistent as it grows.",
    },
    {
      step: 4,
      title: "Prototype and gather feedback",
      description:
        "Interactive prototypes are created so your team can review flows, test interactions, and provide feedback before development begins.",
    },
    {
      step: 5,
      title: "Developer handoff and documentation",
      description:
        "We organize dev-ready files, provide simple documentation, and structure the project so your team can build and extend confidently.",
    },
  ];

const FigmaProccessSection = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="relative w-full py-16 md:py-24 px-4 md:px-6 overflow-hidden bg-background">
            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="max-w-lg mb-12">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-foreground mb-4">
                        How our Figma projects run
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        A structured process from audit or brief to a tidy Figma file your team can keep using.
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

export default FigmaProccessSection;
