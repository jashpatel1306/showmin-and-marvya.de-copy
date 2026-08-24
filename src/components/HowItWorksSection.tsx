import step1Img from "@/assets/how-it-works/imgi_146_step_01.webp";
import step2Img from "@/assets/how-it-works/imgi_147_step_02.webp";
import step3Img from "@/assets/how-it-works/imgi_148_step_03.webp";
import step4Img from "@/assets/how-it-works/imgi_149_step_04.webp";
import step5Img from "@/assets/how-it-works/imgi_150_step_05.webp";
import { HowItWorksCircuitOverlay } from "./ui/HowItWorksCircuitOverlay";
import { BookDemoButton } from "./BookDemoButton";

const stepsData = [
    {
        num: 1,
        label: "Discover",
        text: "Understand your business, customers, and goals",
        maxWidth: "180px",
        img: step1Img,
    },
    {
        num: 2,
        label: "Strategize",
        text: "Turn requirements into a clear digital roadmap",
        maxWidth: "180px",
        img: step2Img,
    },
    {
        num: 3,
        label: "Design & Build",
        text: "Turn the strategy into a real digital experience",
        maxWidth: "180px",
        img: step3Img,
    },
    {
        num: 4,
        label: "Connect & Launch",
        text: "Make everything work together and go live with confidence",
        maxWidth: "180px",
        img: step4Img,
    },
    {
        num: 5,
        label: "Optimize & Grow",
        text: "Launch isn't the finish line. It's where growth starts.",
        maxWidth: "180px",
        img: step5Img,
    },
];

export function HowItWorksSection() {
    return (
        <section className="bg-[#072F1D] relative z-30 overflow-hidden">
            <HowItWorksCircuitOverlay />
            {/* Global Defs for SVG circuit gradient */}
            <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
                <defs>
                    <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#27B578" />
                        <stop offset="100%" stopColor="#007A5A" />
                    </linearGradient>
                </defs>
            </svg>

            {/* 3-Part Section Layout matching site structure */}
            <div className="relative mx-auto max-w-[1358px] w-full flex justify-center">
                {/* Left Vertical Side Column (W: 120px) */}
                <div className="hidden xl:flex w-[120px] shrink-0 border-r border-[#144A30] bg-[#072F1D]">
                    <div className="flex-1 relative overflow-hidden bg-[#072F1D]" />
                    <div className="w-[16px] bg-[#072F1D] shrink-0" />
                </div>

                {/* Center Column (W: 1118px) containing the Figma Banner Container */}
                <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-[1118px] xl:mx-0 border-l border-r border-[#144A30] flex flex-col items-center bg-[#072F1D] shrink-0">
                    {/* Banner Container: Responsive on mobile (h-auto), Desktop fixed 582.88px */}
                    <div
                        className="w-full h-auto lg:h-[582.88px] relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-12"
                        style={{
                            background:
                                "radial-gradient(ellipse 60% 60% at 50% 35%, #0F5A38 0%, #072F1D 50%, #041F13 100%)",
                        }}
                    >
                        {/* Top Header Area */}
                        <div className="flex flex-col gap-4">
                            {/* HOW IT WORKS Badge Header */}
                            <div className="flex items-center gap-2 text-[#27B578] font-[family-name:var(--font-geist-mono)] font-semibold text-[14px] leading-[16.8px] tracking-[0.02em] whitespace-nowrap">
                                <svg
                                    width="24"
                                    height="8"
                                    viewBox="0 0 24 8"
                                    fill="none"
                                    className="shrink-0"
                                >
                                    <circle
                                        cx="3.5"
                                        cy="4"
                                        r="2"
                                        stroke="#27B578"
                                        strokeWidth="1.2"
                                        fill="none"
                                    />
                                    <line
                                        x1="5.5"
                                        y1="4"
                                        x2="18.5"
                                        y2="4"
                                        stroke="#27B578"
                                        strokeWidth="1.2"
                                    />
                                    <circle
                                        cx="20.5"
                                        cy="4"
                                        r="2"
                                        stroke="#27B578"
                                        strokeWidth="1.2"
                                        fill="none"
                                    />
                                </svg>
                                <span className="h-[16.8px] flex items-center whitespace-nowrap shrink-0">
                                    HOW WE WORK
                                </span>
                                <svg
                                    width="24"
                                    height="8"
                                    viewBox="0 0 24 8"
                                    fill="none"
                                    className="shrink-0"
                                >
                                    <circle
                                        cx="3.5"
                                        cy="4"
                                        r="2"
                                        stroke="#27B578"
                                        strokeWidth="1.2"
                                        fill="none"
                                    />
                                    <line
                                        x1="5.5"
                                        y1="4"
                                        x2="18.5"
                                        y2="4"
                                        stroke="#27B578"
                                        strokeWidth="1.2"
                                    />
                                    <circle
                                        cx="20.5"
                                        cy="4"
                                        r="2"
                                        stroke="#27B578"
                                        strokeWidth="1.2"
                                        fill="none"
                                    />
                                </svg>
                            </div>

                            {/* Main Title Heading */}
                            <h2 className="font-serif text-white text-[24px] sm:text-[34px] md:text-[39px] leading-[1.25] md:leading-[54.6px] tracking-[-1px] font-semibold max-w-[728.57px] text-left">
                                A clear path from strategy to scalable growth.
                            </h2>
                        </div>

                        {/* Book a demo / Let's Talk Button */}
                        <div className="hidden md:flex absolute right-[44.67px] top-[178.2px] z-20">
                            <BookDemoButton className="w-[132.2px]" />
                        </div>

                        {/* Desktop Bottom Box (Position Y: 262.2px, Dimension: W: 1116.67px x H: 320.67px divided into 5 equal parts) */}
                        <div className="hidden lg:grid absolute bottom-0 left-0 right-0 h-[320.67px] border-t border-[#18553A] grid-cols-5 divide-x divide-[#18553A]">
                            {stepsData.map((step) => (
                                <div key={step.num} className="h-full w-full relative p-4 md:p-5 lg:p-6 flex flex-col items-start justify-between overflow-hidden group">
                                    {/* Text Content */}
                                    <div className="flex flex-col items-start gap-3 relative z-10">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center border border-dashed border-white/40 bg-white/5 text-white font-mono text-[13px] md:text-[14px] font-bold rounded-[2px] shadow-2xs shrink-0">
                                                {step.num}
                                            </div>
                                            {step.label && (
                                                <div className="h-7 md:h-8 px-2.5 flex items-center justify-center border border-dashed border-[#27B578]/50 bg-[#27B578]/10 text-[#27B578] font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-wider rounded-[2px] shadow-2xs shrink-0">
                                                    {step.label}
                                                </div>
                                            )}
                                        </div>
                                        <p
                                            className="font-sans text-white text-[14px] sm:text-[15px] md:text-[16px] leading-[22.4px] tracking-[-0.01em] text-left font-normal"
                                            style={{ maxWidth: step.maxWidth }}
                                        >
                                            {step.text}
                                        </p>
                                    </div>

                                    {/* Image Container */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[183.33px] w-full overflow-hidden pointer-events-none z-0 flex items-end justify-center">
                                        <img
                                            src={step.img}
                                            alt={`Step ${step.num}`}
                                            className="w-full h-full object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                                            style={step.num === 1 ? { transform: "rotate(-1.5deg)" } : undefined}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Step Cards (Stacked responsive list for 320px+ viewports) */}
                        <div className="flex lg:hidden flex-col divide-y divide-[#18553A] border-t border-[#18553A] mt-6 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6">
                            {stepsData.map((step) => (
                                <div key={step.num} className="p-4 sm:p-5 flex items-center justify-between min-h-[115px] relative overflow-hidden bg-[#072F1D]">
                                    <div className="flex flex-col items-start gap-2.5 z-10 pr-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 flex items-center justify-center border border-dashed border-white/40 bg-white/5 text-white font-mono text-[13px] font-bold rounded-[2px] shrink-0">
                                                {step.num}
                                            </div>
                                            {step.label && (
                                                <div className="h-7 px-2 flex items-center justify-center border border-dashed border-[#27B578]/50 bg-[#27B578]/10 text-[#27B578] font-mono text-[11px] font-bold uppercase tracking-wider rounded-[2px] shrink-0">
                                                    {step.label}
                                                </div>
                                            )}
                                        </div>
                                        <p className="font-sans text-white text-[14px] sm:text-[15px] leading-snug text-left font-normal max-w-[210px]">
                                            {step.text}
                                        </p>
                                    </div>
                                    <div className="w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] shrink-0 flex items-center justify-center pointer-events-none z-0">
                                        <img
                                            src={step.img}
                                            alt={`Step ${step.num}`}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Vertical Side Column (W: 120px) */}
                <div className="hidden xl:flex w-[120px] shrink-0 border-l border-[#144A30] bg-[#072F1D]">
                    <div className="w-[16px] bg-[#072F1D] shrink-0" />
                    <div className="flex-1 relative overflow-hidden bg-[#072F1D]" />
                </div>
            </div>
        </section>
    );
}
