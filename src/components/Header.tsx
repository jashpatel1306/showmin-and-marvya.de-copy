import { useEffect, useState } from "react";
import { BookDemoButton } from "./BookDemoButton";
import showmineLogo from "@/assets/Showmine-transparent.png";

interface HeaderProps {
  forceLight?: boolean;
  forceDark?: boolean;
}

export function Header({ forceLight, forceDark }: HeaderProps = {}) {
  const [isLight, setIsLight] = useState(forceDark ? false : (forceLight ?? false));
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

  useEffect(() => {
    if (forceDark) {
      setIsLight(false);
      return;
    }
    if (forceLight) {
      setIsLight(true);
      return;
    }

    const handleScroll = () => {
      const triggerElement =
        document.getElementById("brand-logos-section") ||
        document.getElementById("five-tab-nav");
      if (triggerElement) {
        const rect = triggerElement.getBoundingClientRect();
        // Header height is 60px. When trigger element reaches top of header (rect.top <= 60), switch to light header
        if (rect.top <= 60) {
          setIsLight(true);
        } else {
          setIsLight(false);
        }
      } else {
        setIsLight(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceLight, forceDark]);

  return (
    <>
      <header
        id="top-nav"
        className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
        style={{
          background: isLight ? "#ffffff" : "rgb(4, 39, 23)",
          borderColor: isLight ? "#D1D1D6" : "rgba(39,181,120,0.55)",
          fontFamily: '"Geist Mono", monospace',
        }}
      >
        <div className="flex items-center justify-center">
          {/* Desktop */}
          <div
            className="hidden lg:flex w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r items-center justify-between h-[60px] pl-5 pr-3 transition-colors duration-300"
            style={{ borderColor: isLight ? "#D1D1D6" : "rgba(39,181,120,0.55)" }}
          >
            <a href="/" className="flex items-center gap-2 shrink-0">
              <img
                src={showmineLogo}
                alt="Showmine"
                className={`h-8 sm:h-9 w-auto object-contain transition-all duration-300 ${
                  isLight ? "" : "brightness-0 invert"
                }`}
              />
              <span className={`text-base font-semibold tracking-tight transition-colors duration-300 ${isLight ? "text-black" : "text-white"}`}>
                Showmine
              </span>
            </a>

            <nav className="flex items-center justify-center h-full flex-1">
              <ul className="flex items-center justify-center gap-1">
                <li>
                  <a
                    href="/pricing"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-300 ${
                      isLight
                        ? "text-black/80 hover:text-black hover:bg-black/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-300 ${
                      isLight
                        ? "text-black/80 hover:text-black hover:bg-black/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-300 ${
                      isLight
                        ? "text-black/80 hover:text-black hover:bg-black/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/channel-partner-program"
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-300 ${
                      isLight
                        ? "text-black/80 hover:text-black hover:bg-black/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Partner with us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <button
                className={`inline-flex items-center justify-center rounded-[2px] h-[40px] px-4 py-3 text-sm border transition-colors duration-300 cursor-pointer ${
                  isLight
                    ? "text-black border-neutral-800 hover:bg-black/5"
                    : "text-white hover:bg-white/[0.06] active:bg-white/[0.1]"
                }`}
                style={{ borderColor: isLight ? "#131316" : "rgba(255,255,255,0.7)" }}
              >
                Call us
              </button>
              <BookDemoButton />
            </div>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden w-full px-[9.5px] md:px-4 h-[60px]">
            <div
              className="flex w-full items-center justify-between px-3 border-l border-r transition-colors duration-300"
              style={{ borderColor: isLight ? "#D1D1D6" : "rgba(39,181,120,0.55)" }}
            >
              <a href="/" className="flex items-center gap-2 shrink-0">
                <img
                  src={showmineLogo}
                  alt="Showmine"
                  className={`h-7 sm:h-8 w-auto object-contain transition-all duration-300 ${
                    isLight ? "" : "brightness-0 invert"
                  }`}
                />
                <span className={`text-base font-semibold tracking-tight transition-colors duration-300 ${isLight ? "text-black" : "text-white"}`}>
                  Showmine
                </span>
              </a>
              <div className="flex items-center gap-3">
                <button
                  className={`h-[36px] px-3 rounded-[2px] text-[13px] border transition-colors duration-300 ${
                    isLight ? "text-black border-neutral-800 hover:bg-black/5" : "text-white hover:bg-white/[0.06]"
                  }`}
                  style={{ borderColor: isLight ? "#131316" : "rgba(255,255,255,0.7)" }}
                >
                  Call us
                </button>
                <button
                  aria-label="Open menu"
                  onClick={() => setIsMenuOpen(true)}
                  className={`flex items-center justify-center size-6 transition-colors duration-300 ${
                    isLight ? "text-black hover:bg-black/10" : "text-white hover:bg-white/10"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 5h16" />
                    <path d="M4 12h16" />
                    <path d="M4 19h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#042717] flex flex-col justify-between p-5 sm:p-8 font-[family-name:var(--font-geist-mono)] overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between shrink-0 h-[60px]">
            <a href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 shrink-0">
              <img
                src={showmineLogo}
                alt="Showmine"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <span className="text-lg font-bold tracking-tight text-white font-sans">
                Showmine
              </span>
            </a>

            <div className="flex items-center gap-3">
              <button className="h-[36px] px-3 rounded-[2px] text-[13px] border border-white/70 text-white hover:bg-white/[0.06]">
                Call us
              </button>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="text-white hover:opacity-80 p-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Drawer Menu Links */}
          <nav className="flex flex-col gap-6 sm:gap-8 my-auto py-8">
            <a
              href="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className="text-[20px] sm:text-[22px] font-bold text-white hover:text-[#27B578] transition-colors"
            >
              Pricing
            </a>
            <a
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-[20px] sm:text-[22px] font-bold text-white hover:text-[#27B578] transition-colors"
            >
              About us
            </a>
            <a
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="text-[20px] sm:text-[22px] font-bold text-white hover:text-[#27B578] transition-colors"
            >
              Careers
            </a>
            <a
              href="/channel-partner-program"
              onClick={() => setIsMenuOpen(false)}
              className="text-[20px] sm:text-[22px] font-bold text-white hover:text-[#27B578] transition-colors"
            >
              Partner with us
            </a>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-[20px] sm:text-[22px] font-bold text-white hover:text-[#27B578] transition-colors"
            >
              Contact us
            </a>
          </nav>

          {/* Drawer Footer CTA */}
          <div className="pt-4 border-t border-white/10 w-full shrink-0">
            <BookDemoButton className="w-full h-[48px] text-base justify-center" />
          </div>
        </div>
      )}
    </>
  );
}
