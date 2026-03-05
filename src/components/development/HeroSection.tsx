import { motion } from "framer-motion";
// import HeroBadge from "./HeroBadge";
// import BrowserMockup from "./BrowserMockup";
// import CodeBlock from "./CodeBlock";
// import DeployPanel from "./DeployPanel";
// import CursorTag from "./CursorTag";
import { ChevronUp, ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import heroImage from "@/assets/Development/hero-website-preview.png";

const tags = ["Design", "Development", "SEO", "Maintenance", "Copywriting", "AI & Automation"];

const HeroBadge = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 cursor-pointer hover:bg-surface transition-colors"
      >
        <span className="text-sm font-medium tracking-tight text-foreground">
          Development
        </span>
        <ChevronUp className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${open ? "" : "rotate-180"}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg p-3 shadow-md z-20 min-w-[280px]">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium tracking-tight text-foreground hover:bg-surface transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface DomainRowProps {
  label: string;
  domain: string;
}

const DomainRow = ({ label, domain }: DomainRowProps) => (
  <div className="border-b border-border last:border-b-0">
    <div className="bg-gray-200 px-3 py-1.5">
      <span className="text-[11px] font-semibold tracking-tight text-foreground font-urbanist">
        {label}
      </span>
    </div>
    <div className="px-3 py-2.5 flex items-start gap-2">
      <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-2.5 h-2.5 text-primary-foreground" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 6l3 3 5-5" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-medium tracking-tight text-foreground font-urbanist">
            {domain}
          </span>
          <ExternalLink className="w-3 h-3 text-foreground" />
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[8px] font-medium text-text-muted font-urbanist">
            Published 3 days ago
          </span>
          <span className="text-[10px] font-semibold text-text-muted">•</span>
          <span className="text-[8px] font-medium text-text-muted underline font-urbanist cursor-pointer">
            Unpublish
          </span>
        </div>
      </div>
    </div>
  </div>
);

const DeployPanel = () => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      <DomainRow label="Staging" domain="staging.yourbrand.com" />
      <DomainRow label="Production" domain="www.yourbrand.com" />
      {/* Footer buttons */}
      <div className="px-3 py-2.5 flex items-center gap-2">
        <button className="px-3 py-1 rounded-lg bg-surface text-[7px] font-extrabold tracking-tight text-foreground font-urbanist">
          Close
        </button>
        <button className="flex-1 px-3 py-1 rounded-lg border border-text-muted text-[7px] font-extrabold tracking-tight text-foreground font-urbanist">
          Publish to selected domains
        </button>
      </div>
    </div>
  );
};

const CursorTag = () => {
  return (
    <div className="inline-flex items-center gap-1 rounded-lg bg-[hsl(199,61%,59%)] px-3 py-1.5 shadow-md">
      <span className="text-sm font-semibold text-foreground font-urbanist">You</span>
      <div className="relative ml-1">
        <svg width="19" height="23" viewBox="0 0 19 23" fill="none">
          <path
            d="M1 1L4.8 22L9.6 12.914L18 11.298L1 1Z"
            fill="hsl(0,0%,0%)"
            stroke="hsl(0,0%,100%)"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};

const lines = [
  { num: "1", code: "<Header/>" },
  { num: "2", code: '<main className="main">' },
  { num: "3", code: "<h1>" },
];

const CodeBlock = () => {
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="h-6 bg-surface" />
      {/* Code area */}
      <div className="px-4 py-3 bg-card">
        {lines.map((line) => (
          <div key={line.num} className="flex gap-4 leading-[23px]">
            <span className="text-xs font-mono text-muted-foreground select-none w-3 text-right">
              {line.num}
            </span>
            <span className="text-xs font-mono text-foreground">{line.code}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


const BrowserMockup = () => {
  return (
    <div className="relative rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      {/* Browser chrome */}
      <div className="bg-card px-4 py-2.5 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[hsl(0,68%,62%)]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(44,79%,62%)]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(130,43%,55%)]" />
        </div>
        {/* URL bar */}
        <div className="flex-1 flex justify-center">
          <div className="bg-surface rounded-md px-4 py-1">
            <span className="text-xs font-medium tracking-tight text-foreground font-urbanist">
              adpros.com
            </span>
          </div>
        </div>
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-surface" />
          <div className="w-4 h-4 rounded bg-surface" />
        </div>
      </div>
      {/* Website preview */}
      <div className="bg-surface">
        <img
          src={heroImage}
          alt="Website design preview showcasing a sleek layout and modern UI"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center pt-16 px-4 overflow-hidden">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="flex flex-col items-start gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroBadge />
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-foreground font-urbanist">
              {"High performance web development".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-text-secondary max-w-md font-urbanist">
              Fast, reliable, and easy to manage websites for teams that want clean builds and smooth launches.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-primary-foreground text-sm font-semibold font-urbanist shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.56px_1.12px_0_rgba(255,255,255,0.34),0_1.12px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] hover:brightness-110 transition-all"
            >
              Chat about development
            </a>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <BrowserMockup />

            {/* Cursor tag - floating bottom right */}
            <motion.div
              className="absolute right-4 bottom-12 z-10"
              animate={{ x: [-2, 2, -2], y: [-2, 2, -2], rotate: [0.5, 1.5, 0.5], skewX: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <CursorTag />
            </motion.div>

            {/* Code block - floating bottom left */}
            <motion.div
              className="absolute -left-6 bottom-[-20px] w-56 z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CodeBlock />
            </motion.div>

            {/* Deploy panel - floating top right */}
            <motion.div
              className="absolute -right-8 -top-4 w-56 z-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <DeployPanel />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
