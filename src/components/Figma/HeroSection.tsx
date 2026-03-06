import { motion, useScroll, useTransform } from "framer-motion";
// import HeroBadge from "@/components/HeroBadge";
// import DashboardPreview from "@/components/DashboardPreview";
import figmaDashboardImg from "@/assets/Figma/work-ss.jpeg";
import { useEffect, useRef } from "react";
import elementorLogo from "@/assets/Figma/logo.svg";

const ICON_COUNT = 7;
const SPEED = 0.00003;

// Generate the sine wave path points
const getPosition = (t: number, width: number, height: number) => {
    // Normalize t to 0-1
    const norm = ((t % 1) + 1) % 1;
    const x = norm * width;
    // Sine wave with 3 periods
    const amplitude = height * 0.28;
    const centerY = height * 0.5;
    const y = centerY + Math.sin(norm * Math.PI * 6) * amplitude;
    return { x, y };
};

const WaveAnimation = () => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<HTMLDivElement[]>([]);
    const offsetsRef = useRef<number[]>(
        Array.from({ length: ICON_COUNT }, (_, i) => i / ICON_COUNT)
    );
    const rafRef = useRef<number>(0);

    useEffect(() => {
        let lastTime = performance.now();

        const animate = (time: number) => {
            const delta = time - lastTime;
            lastTime = time;

            const container = canvasRef.current;
            if (!container) return;

            const width = container.offsetWidth;
            const height = container.offsetHeight;

            offsetsRef.current = offsetsRef.current.map((offset) => {
                let newOffset = offset + SPEED * delta;
                if (newOffset > 1) newOffset -= 1;
                return newOffset;
            });

            iconsRef.current.forEach((icon, i) => {
                if (!icon) return;
                const t = offsetsRef.current[i];
                const { x, y } = getPosition(t, width, height);
                // Fade at edges
                const opacity = Math.min(1, Math.min(t, 1 - t) * 10);
                icon.style.transform = `translate(${x - 28}px, ${y - 28}px) scale(1.4)`;
                icon.style.opacity = String(opacity);
            });

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <div
            ref={canvasRef}
            className="absolute inset-0 overflow-hidden pointer-events-none opacity-30"
            style={{ height: "100%" }}
        >
            {Array.from({ length: ICON_COUNT }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) iconsRef.current[i] = el;
                    }}
                    className="absolute top-0 left-0 will-change-transform"
                    style={{ width: 56, height: 56 }}
                >
                    <img
                        src={elementorLogo}
                        alt="WordPress logo"
                        className="w-full h-full"
                        draggable={false}
                    />
                </div>
            ))}
        </div>
    );
};

const HeroBadge = () => {
    return (
        <div className="badge-frosted inline-flex items-center gap-2 px-3 py-1.5">
            <img
                src={elementorLogo}
                alt="HubSpot"
                className="w-4 h-4 "
            />
            <span className="text-sm font-medium text-foreground">
                Figma-first Design
            </span>
        </div>
    );
};

const Herosection = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <div className="min-h-screen bg-background overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full">
                {/* Wave background */}
                <div className="absolute inset-0 z-0" style={{ height: 540 }}>
                    <WaveAnimation />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center pt-32 sm:pt-40 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <HeroBadge />
                    </motion.div>

                    <motion.h1
                        className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-center max-w-4xl leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Figma agency for UI/UX and design systems
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-base sm:text-lg text-foreground max-w-2xl text-center leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We design marketing sites and product interfaces in Figma with clean files, clear components, and developer-friendly structure. You get UI that looks sharp, is easy to maintain, and is ready to build in Webflow, Framer, or your codebase.
                    </motion.p>

                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a
                            href="/get-started"
                            className="cta-primary bg-blue-500 text-white rounded-lg inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all"
                        >
                            Get started
                        </a>
                    </motion.div>
                </div>

                {/* Dashboard Preview */}
                <div
                    ref={containerRef}
                    className="w-full max-w-[1270px] mx-auto px-4 sm:px-8 mt-12 sm:mt-16"
                    style={{ perspective: 1200 }}
                >
                    <motion.div
                        className="rounded-xl overflow-hidden shadow-2xl border border-foreground/5"
                        style={{ rotateX, opacity }}
                    >
                        <img
                            src={figmaDashboardImg}
                            alt="Dashboard preview showing a WordPress website in development for Resurgam"
                            className="w-full h-auto block"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Herosection;
