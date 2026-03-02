import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import WorkflowDiagram from "./WorkflowDiagram";

const services = ["Design", "Development", "SEO", "Maintenance", "Copywriting", "AI & Automation"];

const Index = () => {
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
    // <div className="min-h-screen bg-background">
    <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-16 lg:pt-24">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center justify-between">
            {/* Left content */}
            <div className="flex flex-col gap-8 w-full lg:w-[45%] max-w-xl mx-auto lg:mx-0">
              {/* Badge Dropdown */}
              <div className="relative self-start" ref={ref}>
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background cursor-pointer"
                >
                  <span className="text-sm font-semibold text-foreground tracking-tight">AI & automation</span>
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

              {/* Heading */}
              <h1 className="text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1]">
                AI & automation agency
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground font-semibold leading-relaxed tracking-tight">
                AI and light automations tools so inquiries, follow ups, and simple tasks run quietly in the background.
              </p>

              {/* CTA Button */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-500 text-primary-foreground font-semibold text-base tracking-tight"
                  style={{ boxShadow: "var(--shadow-button)" }}
                >
                  Chat about AI & automation
                </a>
              </div>
            </div>

            {/* Right workflow diagram */}
            <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
              <div className="relative flex items-center justify-center" style={{ width: "min(560px, 100%)", height: "min(500px, 90vw)" }}>
                <div
                  className="absolute scale-[0.52] sm:scale-[0.70] md:scale-[0.82] lg:scale-100 origin-center"
                  style={{ width: "560px", height: "500px" }}
                >
                  <WorkflowDiagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  // </div>
  );
};

export default Index;
