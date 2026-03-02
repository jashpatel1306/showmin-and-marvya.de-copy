// import NavigationDropdown from "@/components/NavigationDropdown";
// import SlackNotification from "@/components/SlackNotification";
// import BrowserMockup from "@/components/BrowserMockup";
// import IncidentReport from "@/components/IncidentReport";
// import DonutChart from "@/components/DonutChart";
// import PerformanceScores from "@/components/PerformanceScores";
import { ArrowDown, ArrowUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const BrowserMockup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
        <div className="mx-auto rounded-md bg-background px-6 py-1">
          <span className="font-body text-xs text-muted-foreground">yourbrand.com</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-5 bg-gray-100">{children}</div>
    </div>
  );
};

const DonutChart = () => {
  const segments = [
    { color: "green", label: "Check-in", percent: 35 },
    { color: "red", label: "Accessibility", percent: 15 },
    { color: "yellow", label: "Safety", percent: 10 },
    { color: "pink", label: "Utility Disruption", percent: 15 },
    { color: "orage", label: "Cleanliness", percent: 10 },
    { color: "grey", label: "Functionality Issues", percent: 15 },
  ];

  // Build conic gradient
  let cumulative = 0;
  const gradientParts = segments.map((seg) => {
    const start = cumulative;
    cumulative += seg.percent;
    return `${seg.color} ${start}% ${cumulative}%`;
  });

  return (
    <div className="w-full rounded-xl border border-border bg-card p-5 shadow-sm">
      <h4 className="mb-4 font-body text-sm font-semibold text-foreground">Incidents</h4>
      <div className="flex items-center gap-6">
        <div
          className="h-28 w-28 shrink-0 rounded-full"
          style={{
            background: `conic-gradient(${gradientParts.join(", ")})`,
            mask: "radial-gradient(circle, transparent 40%, black 41%)",
            WebkitMask: "radial-gradient(circle, transparent 40%, black 41%)",
          }}
        />
        <div className="grid grid-cols-1 gap-1.5">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: seg.color }} />
              <span className="font-body text-[11px] text-muted-foreground">{seg.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IncidentReport = () => {
  return (
    <div className="w-full rounded-xl border border-border bg-card p-5 shadow-sm">
      <h3 className="font-body text-base font-bold text-foreground">Incident report</h3>
      <p className="font-body text-xs text-muted-foreground">yourbrand.com</p>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-md border border-border bg-background px-2.5 py-2">
          <p className="font-body text-[10px] text-muted-foreground">Total incidents</p>
          <p className="mt-0.5 font-body text-lg font-bold text-foreground">03</p>
          <div className="mt-0.5 flex items-center gap-1">
            <ArrowDown className="h-2.5 w-2.5 text-green-500" />
            <span className="font-body text-[10px] text-green-500">8%</span>
          </div>
        </div>
        <div className="rounded-md border border-border bg-background px-2.5 py-2">
          <p className="font-body text-[10px] text-muted-foreground">Avg response time</p>
          <p className="mt-0.5 font-body text-lg font-bold text-foreground">15 mins</p>
          <div className="mt-0.5 flex items-center gap-1">
            <ArrowUp className="h-2.5 w-2.5 text-green-500" />
            <span className="font-body text-[10px] text-green-500">8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavigationDropdown = () => {

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const services = ["Design", "Development", "SEO", "Maintenance", "Copywriting", "AI & Automation"];

  
  return (
    // <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-body text-sm font-medium text-foreground transition-colors hover:bg-secondary">
    //   Maintenance
    //   <ChevronDown className="h-4 w-4 text-muted-foreground" />
    // </button>

    <div className="relative self-start" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background cursor-pointer"
      >
        <span className="text-sm font-semibold text-foreground tracking-tight">Maintenance</span>
        <ChevronDown className={`w-4 h-4 text-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 z-50 bg-background border border-border rounded-xl p-4 shadow-lg min-w-[340px]">
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-lg border border-border bg-background text-sm font-semibold text-foreground tracking-tight cursor-pointer hover:bg-muted transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PerformanceScores = () => {
  const scores = [
    { label: "Performance", score: 94, color: "green" },
    { label: "Accessibility", score: 98, color: "green" },
    { label: "Best Practices", score: 99, color: "green" },
    { label: "SEO", score: 100, color: "green" },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
      <h4 className="mb-4 font-body text-sm font-semibold text-foreground">Diagnose performance issues</h4>
      <div className="flex items-center justify-center gap-5">
        {scores.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1.5">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] bg-green-200"
              style={{ borderColor: item.color }}
            >
              <span className="font-body text-base font-bold text-foreground">{item.score}</span>
            </div>
            <span className="font-body text-[10px] text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CursorTag = () => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotate: 0 }}
    animate={{ opacity: 1, y: 0, rotate: 1 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    className="absolute right-8 bottom-24 z-20"
  >
    <div className="flex items-center gap-1.5">
      {/* Arrow cursor with bounce animation */}
      <motion.svg
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        width="24" height="28" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L4.8 22L9.6 12.914L18 11.298L1 1Z" fill="black" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" />
      </motion.svg>
      {/* <div className="rounded-lg bg-accent px-3 py-1.5 shadow-md">
          <span className="text-xs font-semibold text-accent-foreground">You</span>
        </div> */}
      <CursorTag />
    </div>
  </motion.div>
);

const SlackNotification = () => {
  return (
    <div className="w-[280px] rounded-lg border border-border bg-card p-3 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-start gap-2.5">
        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-md bg-muted">
          <div className="h-full w-full rounded-md bg-gradient-to-br from-pink-accent/30 to-primary/20" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-body text-xs font-bold text-foreground">Kimberly</span>
            <span className="font-body text-[10px] text-muted-foreground">11:15 AM</span>
          </div>
          <p className="mt-0.5 font-body text-[11px] leading-tight text-foreground">
            I need some help really quick for an emergency for{" "}
            <a href="#" className="text-primary hover:underline">
              https://www.mybrand.com/
            </a>
          </p>
          <span className="mt-0.5 inline-block rounded bg-primary/10 px-1 py-0.5 font-body text-[10px] font-medium text-primary">
            @Showmine
          </span>
          <div className="mt-1.5 flex items-center gap-1.5">
            <div className="flex -space-x-1">
              <div className="h-4 w-4 rounded-full border border-card bg-muted" />
              <div className="h-4 w-4 rounded-full border border-card bg-primary/20" />
              <div className="h-4 w-4 rounded-full border border-card bg-success/20" />
            </div>
            <span className="font-body text-[10px] font-bold text-primary">4 replies</span>
            <span className="font-body text-[10px] text-muted-foreground">Today at 11:37 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};


const HeroSection = () => {
  return (
    // <div className="min-h-screen bg-background">
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:pt-36">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center pt-4 lg:pt-16">
          <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "0s" }}>
            <NavigationDropdown />

          </div>

          <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground animate-fade-in-up sm:text-3xl lg:text-5xl" style={{ animationDelay: "0.1s" }}>
            Website maintenance
          </h1>

          <p className="mb-10 max-w-md font-body text-lg leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Showmine looks after and improves websites in Webflow, Framer, and WordPress so your team can stop worrying about fixes and focus on the work that matters.
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button className="rounded-lg bg-blue-500 px-8 py-4 font-body text-base font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-110 active:scale-[0.98]">
              Chat about maintenance
            </button>
          </div>
        </div>

        {/* Right side - Dashboard mockup */}
        <div className="relative">
          {/* Slack notification - positioned top right */}
          <div className="absolute -right-4 -top-2 z-10 hidden lg:block">
            <SlackNotification />
          </div>

          {/* Browser mockup */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <BrowserMockup>
              <IncidentReport />
              <div className="mt-4">
                <DonutChart />
              </div>
            </BrowserMockup>
          </div>

          {/* Performance scores - overlapping bottom left */}
          <div className="absolute -bottom-8 -left-8 z-10 hidden w-[340px] lg:block">
            <PerformanceScores />
          </div>

          {/* You badge */}
          <div className="absolute -right-2 bottom-12 z-10 hidden lg:block">
            <div className="rounded-full bg-primary px-4 py-2 font-body text-xs font-bold text-primary-foreground shadow-lg">
              You
            </div>
          </div>

          {/* Mobile: show performance scores inline */}
          <div className="mt-6 lg:hidden">
            <PerformanceScores />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};


export default HeroSection;
