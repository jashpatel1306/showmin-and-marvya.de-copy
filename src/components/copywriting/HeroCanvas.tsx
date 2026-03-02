import { ChevronDown, ChevronUp, Bold, Italic, Underline, AlignLeft, AlignCenter, List, FileText, MoreVertical } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import BrowserMockup from "@/components/BrowserMockup";
// import ColorPicker from "@/components/ColorPicker";
// import DocumentTabs from "@/components/DocumentTabs";
// import CursorLabel from "@/components/CursorLabel";
// import FeaturesSection from "@/components/FeaturesSection";

const tags = ["Design", "Development", "SEO", "Maintenance", "Copywriting", "AI & Automation"];

const CursorLabel = () => {
  return (
    <div className="inline-flex items-center gap-1.5 bg-accent rounded-lg px-4 py-2 shadow-md">
      <span className="text-sm font-semibold text-accent-foreground">You</span>
      <svg width="19" height="23" viewBox="0 0 19 23" className="ml-1">
        <path
          d="M 1 1 L 4.8 22 L 9.6 12.914 L 18 11.298 Z"
          fill="black"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

const DocumentTabs = () => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl w-[200px]">
      {/* Header */}
      <div className="bg-secondary border-b border-border px-4 py-2">
        <span className="text-xs font-semibold text-foreground">Document tabs</span>
      </div>
      {/* Tab */}
      <div className="border-b border-border px-3 py-2">
        <div className="flex items-center gap-2 bg-muted rounded-full px-3 py-1.5">
          <FileText className="w-3.5 h-3.5 text-foreground" />
          <span className="text-xs font-semibold text-foreground flex-1">Tab 1</span>
          <MoreVertical className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
      </div>
      {/* Items */}
      <div className="px-3 py-2 space-y-0.5">
        {["Overview", "User Personas", "User Journey"].map((item) => (
          <div key={item} className="px-3 py-1.5 rounded-full hover:bg-secondary cursor-pointer transition-colors">
            <span className="text-[13px] text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


const ColorPicker = () => {
  const neutrals = [
    "hsl(220,15%,12%)",
    "hsl(220,14%,18%)",
    "hsl(220,10%,29%)",
    "hsl(220,7%,35%)",
    "hsl(220,6%,47%)",
    "hsl(220,5%,66%)",
    "hsl(220,5%,84%)",
    "hsl(0,0%,100%)",
  ];

  const colors = [
    "hsl(152,92%,30%)",
    "hsl(214,84%,51%)",
    "hsl(243,76%,58%)",
    "hsl(266,81%,58%)",
    "hsl(296,71%,49%)",
    "hsl(330,73%,51%)",
    "hsl(5,74%,49%)",
    "hsl(21,82%,48%)",
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-xl w-[220px]">
      {/* Neutral row */}
      <div className="flex gap-2 mb-2">
        {neutrals.map((c, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full border border-foreground/10 cursor-pointer hover:scale-110 transition-transform"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      {/* Color row */}
      <div className="flex gap-2 mb-3">
        {colors.map((c, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full border border-foreground/10 cursor-pointer hover:scale-110 transition-transform"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      {/* Custom */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-foreground">Custom</span>
        <div className="w-5 h-5 rounded-full bg-accent border border-foreground/10" />
        <div className="border border-border rounded-lg px-3 py-1">
          <span className="text-xs text-foreground">#71C5C0</span>
        </div>
      </div>
    </div>
  );
};

const BrowserMockup = () => {
  return (
    <div className="rounded-lg border border-border overflow-hidden shadow-lg">
      {/* Browser Chrome */}
      <div className="bg-secondary px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[hsl(0,80%,60%)]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(45,90%,60%)]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(130,60%,50%)]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-muted rounded-md px-6 py-1">
            <span className="text-xs text-foreground">yourbrand.com</span>
          </div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="bg-card border-t border-border">
        {/* Toolbar */}
        <div className="flex items-center gap-1 px-4 py-2 border-b border-border">
          <div className="p-1.5 rounded hover:bg-secondary cursor-pointer">
            <Bold className="w-4 h-4 text-foreground" />
          </div>
          <div className="p-1.5 rounded hover:bg-secondary cursor-pointer">
            <Italic className="w-4 h-4 text-foreground" />
          </div>
          <div className="p-1.5 rounded hover:bg-secondary cursor-pointer">
            <Underline className="w-4 h-4 text-foreground" />
          </div>
          <div className="w-px h-5 bg-border mx-1" />
          <div className="w-4 h-4 rounded-full bg-foreground mx-1.5" />
          <div className="w-px h-5 bg-border mx-1" />
          <div className="p-1.5 rounded hover:bg-secondary cursor-pointer">
            <AlignLeft className="w-4 h-4 text-foreground" />
          </div>
          <div className="p-1.5 rounded hover:bg-secondary cursor-pointer">
            <AlignCenter className="w-4 h-4 text-foreground" />
          </div>
          <div className="p-1.5 rounded hover:bg-secondary cursor-pointer">
            <List className="w-4 h-4 text-foreground" />
          </div>
        </div>

        {/* Text Area */}
        <div className="p-5">
          <div className="bg-secondary rounded-lg p-5 space-y-4">
            <p className="text-sm leading-relaxed text-foreground">
              We need another and a wiser and perhaps a more mystical concept of
              animals. Remote from universal nature, and living by complicated
              artifice, man in civilization surveys the creature through the glass
              of his knowledge and sees thereby a feather magnified and the whole
              image in distortion.
            </p>
            <p className="text-sm leading-relaxed text-foreground">
              We patronize them for their incompleteness, for their tragic fate of
              having taken form so far below ourselves. And therein we err, and
              greatly err. For the animal shall not be measured by man.
            </p>
            <p className="text-sm leading-relaxed text-foreground">
              In a world older and more complete than ours they move finished and
              complete, gifted with extensions of the senses we have lost or never
              attained, living by voices we shall never hear. In a world older and
              more complete than ours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


const HeroSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const tagRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!dropdownOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setDropdownOpen(true);
        setActiveIndex(0);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % tags.length);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + tags.length) % tags.length);
        break;
      case "Escape":
        e.preventDefault();
        setDropdownOpen(false);
        setActiveIndex(-1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (activeIndex >= 0) {
          // handle tag selection here if needed
        }
        break;
    }
  }, [dropdownOpen, activeIndex]);

  useEffect(() => {
    if (activeIndex >= 0 && tagRefs.current[activeIndex]) {
      tagRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex]);

  return (
    // <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-36">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Hero Content */}
          <div className="flex-1 max-w-xl pt-4 lg:pt-12">
            {/* Tag */}
            <div className="relative">
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => { setDropdownOpen(!dropdownOpen); setActiveIndex(dropdownOpen ? -1 : 0); }}
                onKeyDown={handleKeyDown}
                className="inline-flex items-center gap-2 border border-border rounded-lg px-4 py-2 mb-4 bg-background hover:bg-secondary transition-colors"
              >
                <span className="text-sm text-foreground">Copywriting</span>
                {dropdownOpen ? (
                  <ChevronUp className="w-4 h-4 text-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-foreground" />
                )}
              </motion.button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 z-20 bg-card border border-border rounded-lg p-3 shadow-lg mb-6"
                  >
                    <div className="flex flex-wrap gap-1.5 w-[240px]" role="menu" onKeyDown={handleKeyDown}>
                      {tags.map((tag, index) => (
                        <button
                          key={tag}
                          ref={(el) => { tagRefs.current[index] = el; }}
                          role="menuitem"
                          tabIndex={activeIndex === index ? 0 : -1}
                          className={`inline-block border border-border rounded-md px-2.5 py-1 text-xs text-foreground cursor-pointer transition-colors outline-none ${activeIndex === index ? 'bg-secondary ring-1 ring-ring' : 'hover:bg-secondary'}`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05] mb-6"
            >
              Copywriting agency
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-md"
            >
              Clear, human copy for websites, landing pages, and digital products
              so visitors understand you quickly and feel confident taking the next
              step.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="inline-flex items-center justify-center bg-blue-500 text-primary-foreground font-medium text-base rounded-lg px-8 py-4 shadow-[inset_0_6px_13px_0_rgba(0,0,0,0.08),inset_0_0.5px_1px_0_rgba(255,255,255,0.34),0_1px_2px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] hover:brightness-110 transition-all"
            >
              Chat about copywriting
            </motion.a>
          </div>

          {/* Right: Editor Mockup */}
          <div className="flex-1 relative w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <BrowserMockup />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="absolute -bottom-6 left-4 md:left-10 z-10"
            >
              <ColorPicker />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="absolute -top-2 -right-2 md:right-0 z-10"
            >
              <DocumentTabs />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              className="absolute bottom-16 right-0 md:right-4 z-10"
            >
              <CursorLabel />
            </motion.div>
          </div>
        </div>
      {/* </div> */}

      {/* <FeaturesSection /> */}
    </div>
  );
};

export default HeroSection;
