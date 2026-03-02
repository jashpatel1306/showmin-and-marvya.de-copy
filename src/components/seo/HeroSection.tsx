import DashboardPreview from "./DashboardPreview";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const services = ["Design", "Development", "SEO", "Maintenance", "Copywriting", "AI & Automation"];

function ServiceBadge() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("SEO");

  return (
    <div className="relative inline-block mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 border border-border rounded-lg px-3 py-1.5 bg-card hover:bg-secondary transition-colors"
      >
        <span className="text-sm text-foreground font-medium">{selected}</span>
        {open ? (
          <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 border border-border rounded-xl bg-card shadow-lg p-3 z-20 min-w-[320px]">
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSelected(s);
                  setOpen(false);
                }}
                className={`px-3 py-1.5 rounded-lg border text-sm transition-colors ${
                  s === selected
                    ? "border-foreground text-foreground font-medium"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const HeroSection = () => {
  return (
    <div>
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <span className="text-lg font-bold tracking-tight text-foreground">South Digital</span>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-[inset_0_6px_13px_rgba(0,0,0,0.08),inset_0_0.5px_1px_rgba(255,255,255,0.34),0_1px_2px_rgba(8,8,8,0.19)] hover:opacity-90 transition-opacity"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 max-w-xl">
            <ServiceBadge />

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.1] text-foreground mb-6">
              SEO for modern websites
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Showmine improves the technical health, structure, and content of websites so you can rank better and win more of the right traffic.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-blue-500 text-primary-foreground px-6 py-3 rounded-lg text-base font-medium shadow-[inset_0_6px_13px_rgba(0,0,0,0.08),inset_0_0.5px_1px_rgba(255,255,255,0.34),0_1px_2px_rgba(8,8,8,0.19),0_4px_4.5px_rgba(8,8,8,0.05)] hover:opacity-90 transition-opacity"
            >
              Chat about SEO
            </a>
          </div>

          {/* Right dashboard */}
          <div className="flex-1 relative pb-12">
            <DashboardPreview />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
