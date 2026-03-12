import { useEffect, useRef, useState } from "react";
import { ChevronUp, Check } from "lucide-react";

const features = [
    "Custom AI assistants trained on your content",
    "On-brand UX people actually want to use",
    "Built-in guardrails, permissions, and controls",
  ];

const CheckBadge = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="checkGrad" x1="0.04" x2="0.96" y1="0" y2="1">
                <stop offset="0" stopColor="hsl(197, 100%, 80%)" />
                <stop offset="1" stopColor="hsl(214, 100%, 53%)" />
            </linearGradient>
        </defs>
        <path
            d="M 6.153 1.192 C 7.314 -0.397 9.686 -0.397 10.847 1.192 C 11.114 1.556 11.562 1.741 12.008 1.672 C 13.953 1.37 15.63 3.047 15.328 4.992 C 15.259 5.438 15.444 5.886 15.809 6.153 C 17.397 7.314 17.397 9.686 15.809 10.847 C 15.444 11.114 15.259 11.562 15.328 12.008 C 15.63 13.953 13.953 15.63 12.008 15.328 C 11.562 15.259 11.114 15.444 10.847 15.808 C 9.686 17.397 7.314 17.397 6.153 15.808 C 5.886 15.444 5.438 15.259 4.992 15.328 C 3.047 15.63 1.37 13.953 1.672 12.008 C 1.741 11.562 1.556 11.114 1.192 10.847 C -0.397 9.686 -0.397 7.314 1.192 6.153 C 1.556 5.886 1.741 5.438 1.672 4.992 C 1.37 3.047 3.047 1.37 4.992 1.672 C 5.438 1.741 5.886 1.556 6.153 1.192 Z M 12.321 6.73 C 12.638 6.384 12.614 5.847 12.268 5.529 C 11.922 5.212 11.385 5.236 11.067 5.582 L 7.882 8.998 L 6.956 8.184 C 6.611 7.867 6.073 7.889 5.755 8.235 C 5.438 8.581 5.461 9.119 5.807 9.436 L 7.358 10.826 C 7.525 10.979 7.745 11.059 7.97 11.049 C 8.195 11.04 8.408 10.941 8.56 10.774 Z"
            fill="url(#checkGrad)"
        />
    </svg>
);

const HeroFeatures = () => (
    <div className="flex flex-col gap-3.5">
        {features.map((text) => (
            <div key={text} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center">
                    <CheckBadge />
                </span>
                <p className="text-base font-medium text-foreground">{text}</p>
            </div>
        ))}
    </div>
);

// Google colored G logo SVG
const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

// Orange clipboard/projects icon
const ProjectsIcon = () => (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="8" width="22" height="28" rx="2.5" fill="url(#doc-bg)" />
        <rect x="5" y="27" width="22" height="9" rx="1.5" fill="url(#doc-bottom)" opacity="0.7" />
        <path d="M10 16h7M10 20.5h14M10 25h10" stroke="#8c9ac0" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="11" y="4.5" width="10" height="5" rx="1.2" fill="url(#clip-bg)" />
        <circle cx="31" cy="31" r="8" fill="url(#green-bg)" />
        <path d="M28 31h6M31 28v6" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        <defs>
            <linearGradient id="doc-bg" x1="16" y1="8" x2="16" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eaecf7" />
                <stop offset="1" stopColor="#cdd3f1" />
            </linearGradient>
            <linearGradient id="doc-bottom" x1="16" y1="27" x2="16" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#bfc8eb" stopOpacity="0" />
                <stop offset="1" stopColor="#9aaade" />
            </linearGradient>
            <linearGradient id="clip-bg" x1="16" y1="4.5" x2="16" y2="9.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e2843a" />
                <stop offset="1" stopColor="#c06528" />
            </linearGradient>
            <linearGradient id="green-bg" x1="23" y1="23" x2="39" y2="39" gradientUnits="userSpaceOnUse">
                <stop stopColor="#36db39" />
                <stop offset="1" stopColor="#20b823" />
            </linearGradient>
        </defs>
    </svg>
);

// On-demand clipboard with green badge (same style, different icon)
const OnDemandIcon = () => (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="22" height="28" rx="2.5" fill="url(#od-bg)" />
        <path d="M9 15.5h8M9 20h14M9 24.5h10" stroke="#8c9ac0" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="10" y="3.5" width="10" height="5" rx="1.2" fill="url(#od-clip)" />
        <circle cx="31" cy="31" r="8" fill="url(#od-green)" />
        <path d="M28 31h6M31 28v6" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        <defs>
            <linearGradient id="od-bg" x1="15" y1="7" x2="15" y2="35" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eaecf7" />
                <stop offset="1" stopColor="#cdd3f1" />
            </linearGradient>
            <linearGradient id="od-clip" x1="15" y1="3.5" x2="15" y2="8.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e2843a" />
                <stop offset="1" stopColor="#c06528" />
            </linearGradient>
            <linearGradient id="od-green" x1="23" y1="23" x2="39" y2="39" gradientUnits="userSpaceOnUse">
                <stop stopColor="#36db39" />
                <stop offset="1" stopColor="#20b823" />
            </linearGradient>
        </defs>
    </svg>
);

// Blue cycling/refresh arrows for Expert team
const ExpertTeamIcon = () => (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 14 A12 12 0 0 1 30 14" stroke="#3b9ede" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 26 A12 12 0 0 1 10 26" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
        <polyline points="27,10 30,14 26,15" stroke="#3b9ede" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="13,30 10,26 14,25" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const stats = [
    { icon: <GoogleIcon />, bold: "5.0 / 5.0", sub: "Rating on Google" },
    { icon: <ProjectsIcon />, bold: "100+", sub: "Projects completed" },
    { icon: <OnDemandIcon />, bold: "On demand", sub: "No contract tie-ins" },
    { icon: <ExpertTeamIcon />, bold: "Expert team", sub: "Of digital pros" },
];

const StatsBar = () => (
    <div className="w-full mt-[40px]">
        <div className="flex flex-wrap justify-between items-start gap-10 sm:gap-16 lg:gap-24">
            {stats.map((stat) => (
                <div key={stat.bold} className="flex flex-col items-center gap-2.5 min-w-[110px]">
                    <div>{stat.icon}</div>
                    <span className="text-base font-bold text-foreground leading-tight">{stat.bold}</span>
                    <span className="text-sm text-muted-foreground leading-tight">{stat.sub}</span>
                </div>
            ))}
        </div>
    </div>
);

const categories = [
    "Design",
    "Development",
    "SEO",
    "Maintenance",
    "Copywriting",
    "AI & Automation",
];

const BadgeDropdown = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <div className="relative inline-block" ref={ref}>
            <button
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 px-3 py-3 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
                AI & Automation
                <ChevronUp
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "" : "rotate-180"}`}
                />
            </button>

            {open && (
                <div className="absolute left-0 top-full mt-1.5 bg-card border border-border rounded-xl shadow-lg p-2 z-20 min-w-[260px]">
                    <div className="flex flex-wrap gap-1.5 p-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className="px-3 py-1 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-muted transition-colors"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number; // ms between each word
    duration?: number; // ms per word animation
    once?: boolean;
}

const SplitText = ({
    text,
    className = "",
    delay = 60,
    duration = 600,
    once = true,
}: SplitTextProps) => {
    const words = text.split(" ");
    const ref = useRef<HTMLSpanElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setVisible(false);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [once]);

    return (
        <span ref={ref} className={`inline ${className}`} aria-label={text}>
            {words.map((word, i) => (
                <span
                    key={i}
                    aria-hidden="true"
                    className="inline-block overflow-hidden"
                    style={{ marginRight: i < words.length - 1 ? "0.28em" : undefined }}
                >
                    <span
                        className="inline-block"
                        style={{
                            transform: visible ? "translateY(0)" : "translateY(110%)",
                            opacity: visible ? 1 : 0,
                            transition: `transform ${duration}ms cubic-bezier(0.22,1,0.36,1), opacity ${duration * 0.6}ms ease`,
                            transitionDelay: `${i * delay}ms`,
                        }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </span>
    );
};

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 sm:px-6 lg:px-8">
            <div className="w-full max-w-[1160px] mx-auto">

                {/* Card */}
                <div className="spinning-border bg-card shadow-sm">
                    <div className="px-5 py-5 sm:px-8 sm:py-8 lg:px-10 lg:py-10">

                        {/* Badge */}
                        <div className="mb-5">
                            <BadgeDropdown />
                        </div>

                        {/* Full-width heading */}
                        <h3 className="text-4xl sm:text-[2.8rem] md:text-[3.4rem] lg:text-5xl xl:text-[4.2rem] lg:text-[56px] lg:leading-[1.30] font-bold leading-[1.2] tracking-tight text-foreground">
                            <SplitText text="Custom AI interface" delay={70} duration={700} />
                        </h3>

                        {/* Bottom row: bullets left, CTA right */}
                        <div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8">

                            {/* Left: Feature bullets */}
                            <div className="flex-1 min-w-0">
                                <HeroFeatures />
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <a
                                    href="#get-started"
                                    className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-[inset_0_6px_12px_rgba(0,0,0,0.08),inset_0_0.5px_1px_rgba(255,255,255,0.34),0_1px_2px_rgba(8,8,8,0.19),0_4px_4px_rgba(8,8,8,0.05)] transition-all hover:brightness-110"
                                >
                                    Get started
                                </a>

                                <a
                                    href="https://wa.me/8347319280"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3"
                                >
                                    <div className="flex items-center gap-2">
                                        <WhatsAppIcon />
                                        <div>
                                            <p className="text-sm font-semibold text-card-foreground">Chat on WhatsApp</p>
                                            <div className="flex items-center gap-1.5">
                                                <div className="flex items-center gap-1.5 ">
                                                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                                                    <span className="text-xs text-muted-foreground">Typically responds within 1 hour</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Stats — below the card */}
                <StatsBar />
            </div>
        </section>
    );
};

export default HeroSection;
