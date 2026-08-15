import { useState, useEffect } from "react";

const navMenuItems = [
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Partner with us", href: "/channel-partner-program" },
  { label: "Contact us", href: "/contact" },
  { label: "Call us", href: "tel:+919876543210" },
];

export function CareersHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full h-[64px] bg-white border-b border-[#000000] z-50">
        <div className="w-full max-w-[1920px] h-full mx-auto relative px-4 sm:px-8 xl:px-[96px] flex items-center justify-between">
          {/* Logo Button Link (Position: x=96px, y=10px, Dimension: w=146.04px, h=44px) */}
          <a
            href="/"
            className="flex items-center gap-2.5 w-full max-w-[146.04px] h-[44px] my-[10px] px-2.5 py-1.5 rounded-lg border border-neutral-200/60 bg-neutral-50/50 hover:bg-neutral-100/80 hover:border-neutral-300 active:scale-[0.98] transition-all duration-200 shrink-0 cursor-pointer shadow-2xs group"
            aria-label="Showmine Home"
          >
            <span className="flex h-6 w-6 items-center justify-center shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 transition-transform group-hover:scale-105"
                style={{ color: "#27B578" }}
              >
                <path
                  d="M1 13l4 4L13 9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13l4 4L23 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-[19px] font-bold tracking-tight text-neutral-900 font-sans whitespace-nowrap">
              Showmine
            </span>
          </a>

          {/* Header Menu Bar (Position: x=580.54px, y=20px, Dimension: w=758.9px, h=24px, Spacing: 48px) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-[24px] xl:gap-[48px] h-[24px] absolute left-1/2 -translate-x-1/2 top-[20px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {navMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-semibold text-[16px] leading-[20.5px] text-left transition-colors duration-200 whitespace-nowrap flex items-center h-[20px] ${
                  item.label === "Careers"
                    ? "text-[#27B578] font-bold"
                    : "text-[#7A7A7A] hover:text-neutral-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Get demo Button (Position: x=1684.54px, y=12px, Dimension: w=139.46px, h=40px, Fill: #007A5A, Stroke: #2D2D2D) */}
          <button
            className="hidden sm:inline-flex items-center justify-center w-[139.46px] h-[40px] my-[12px] bg-[#007A5A] hover:bg-[#00684C] text-white font-sans text-[14px] font-semibold rounded-md border border-[#2D2D2D] transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] shrink-0"
          >
            Get demo
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden items-center justify-center p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[64px] z-40 bg-white/95 backdrop-blur-md flex flex-col p-6 lg:hidden border-t border-neutral-200 justify-between">
          <nav className="flex flex-col gap-5 my-auto">
            {navMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-sans font-semibold text-[18px] leading-[24px] ${
                  item.label === "Careers"
                    ? "text-[#27B578] font-bold"
                    : "text-[#7A7A7A] hover:text-neutral-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-neutral-200">
            <button className="w-full h-[44px] bg-[#007A5A] hover:bg-[#00684C] text-white font-sans text-[15px] font-semibold rounded-md border border-[#2D2D2D] transition-colors cursor-pointer">
              Get demo
            </button>
          </div>
        </div>
      )}
    </>
  );
}
