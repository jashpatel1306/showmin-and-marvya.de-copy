import { useState, useRef, useEffect } from "react";
import { Check, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    { label: "Design", heading: "Landing-page design" },
    { label: "Development", heading: "Web development" },
    { label: "SEO", heading: "SEO optimization" },
    { label: "Maintenance", heading: "Website maintenance" },
    { label: "Copywriting", heading: "Copywriting" },
    { label: "AI & Automation", heading: "AI & Automation" },
];

const features = [
    "Designed for one clear action",
    "Built around your offer and audience",
    "Fast to ship and easy to iterate",
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
const HeroCard = () => {
    const [selected, setSelected] = useState(services[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);


    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12 lg:p-16">
            {/* Warm animated gradient background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[hsl(var(--warm-glow-1)/0.4)] via-transparent to-[hsl(var(--warm-glow-2)/0.3)]" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 animate-pulse rounded-full bg-[hsl(var(--warm-glow-1)/0.25)] blur-3xl" style={{ animationDuration: "4s" }} />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-60 w-60 animate-pulse rounded-full bg-[hsl(var(--warm-glow-3)/0.25)] blur-3xl" style={{ animationDuration: "5s" }} />
            <div className="pointer-events-none absolute right-1/3 top-1/4 h-48 w-48 animate-pulse rounded-full bg-[hsl(var(--warm-glow-2)/0.15)] blur-3xl" style={{ animationDuration: "6s" }} />

            <div className="relative z-10">
                {/* Dropdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6 pt-4 lg:pt-8"
                >
                    {/* Design Badge with Dropdown */}
                    <div ref={dropdownRef} className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 cursor-pointer hover:bg-secondary transition-colors"
                        >
                            <span className="text-sm font-medium text-foreground">{selected.label}</span>
                            <motion.svg
                                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </motion.svg>
                        </button>

                        <AnimatePresence>
                            {dropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-0 top-full mt-2 z-50 rounded-xl border border-border bg-background p-4 shadow-lg"
                                >
                                    <div className="flex flex-wrap gap-2 max-w-xs">
                                        {services.map((service) => (
                                            <button
                                                key={service.label}
                                                type="button"
                                                onClick={() => {
                                                    setSelected(service);
                                                    setDropdownOpen(false);
                                                }}
                                                className="inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                                            >
                                                {service.label}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[56px] lg:leading-[1.1]">
                    Landing-page design
                    </h1>

                    {/* Content area */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    {/* Features */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                                    <CheckBadge />
                                </div>
                                <span className="text-base text-muted-foreground">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div>
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#get-started"
                            className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-[inset_0_6px_12px_rgba(0,0,0,0.08),inset_0_0.5px_1px_rgba(255,255,255,0.34),0_1px_2px_rgba(8,8,8,0.19),0_4px_4px_rgba(8,8,8,0.05)] transition-all hover:brightness-110"
                        >
                            Get started
                        </a>

                        <a
                            href="https://wa.me/447535605721"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3"
                        >
                            <div className="flex items-center gap-2">
                                <MessageCircle className="h-4 w-4 text-[hsl(var(--whatsapp))]" />
                                <div>
                                    <p className="text-sm font-semibold text-card-foreground">Chat on WhatsApp</p>
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                                        <p className="text-xs text-muted-foreground">Typically responds within 1 hour</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    </div>
                </div>
                </motion.div>

               

                
            </div>
        </div>
    );
};

export default HeroCard;
