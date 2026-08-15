export function BrandLogos() {
  const logoModules = import.meta.glob<string>(
    "../assets/clients/*.{webp,svg,jpg,jpeg,png}",
    {
      eager: true,
      import: "default",
    }
  );
  const LOGOS = Object.values(logoModules);

  // Split logos into 3 rows dynamically
  const count = LOGOS.length;
  const rowSize = Math.ceil(count / 3);
  const row1 = LOGOS.slice(0, rowSize);
  const row2 = LOGOS.slice(rowSize, rowSize * 2);
  const row3 = LOGOS.slice(rowSize * 2);

  return (
    <section id="brand-logos-section" className="bg-white py-16 overflow-hidden">
      <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-neutral-200 flex flex-col items-center bg-white relative">
        {/* Static Left and Right Layout Border Overlays to prevent scrolling content from covering them */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-neutral-200 z-20 pointer-events-none" />

        <div className="pt-4 pb-10 px-4 text-center">
          <span className="text-[12px] font-semibold text-neutral-400 uppercase tracking-[0.15em]">
            Trusted by thousands of global businesses
          </span>
        </div>
        
        {/* Carousel motion slider container */}
        <div className="w-full border-t border-neutral-200 flex flex-col relative select-none">
          {/* Subtle fade effect on the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Right to Left */}
          <div className="marquee-row w-full overflow-hidden flex border-b border-neutral-200">
            <div className="flex shrink-0 animate-marquee-rtl">
              {row1.map((logoUrl, idx) => (
                <div
                  key={`r1-1-${idx}`}
                  className="marquee-logo group flex items-center justify-center w-[200px] h-[88px] border-r border-neutral-200 bg-white hover:bg-neutral-50/50 transition-colors duration-200 cursor-pointer"
                >
                  <img
                    src={logoUrl}
                    alt="Client Logo"
                    className="h-12 w-auto max-w-[150px] object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 animate-marquee-rtl" aria-hidden="true">
              {row1.map((logoUrl, idx) => (
                <div
                  key={`r1-2-${idx}`}
                  className="marquee-logo group flex items-center justify-center w-[200px] h-[88px] border-r border-neutral-200 bg-white hover:bg-neutral-50/50 transition-colors duration-200 cursor-pointer"
                >
                  <img
                    src={logoUrl}
                    alt="Client Logo"
                    className="h-12 w-auto max-w-[150px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="marquee-row w-full overflow-hidden flex border-b border-neutral-200">
            <div className="flex shrink-0 animate-marquee-ltr">
              {row2.map((logoUrl, idx) => (
                <div
                  key={`r2-1-${idx}`}
                  className="marquee-logo group flex items-center justify-center w-[200px] h-[88px] border-r border-neutral-200 bg-white hover:bg-neutral-50/50 transition-colors duration-200 cursor-pointer"
                >
                  <img
                    src={logoUrl}
                    alt="Client Logo"
                    className="h-12 w-auto max-w-[150px] object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 animate-marquee-ltr" aria-hidden="true">
              {row2.map((logoUrl, idx) => (
                <div
                  key={`r2-2-${idx}`}
                  className="marquee-logo group flex items-center justify-center w-[200px] h-[88px] border-r border-neutral-200 bg-white hover:bg-neutral-50/50 transition-colors duration-200 cursor-pointer"
                >
                  <img
                    src={logoUrl}
                    alt="Client Logo"
                    className="h-12 w-auto max-w-[150px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Right to Left */}
          <div className="marquee-row w-full overflow-hidden flex border-b border-neutral-200">
            <div className="flex shrink-0 animate-marquee-rtl">
              {row3.map((logoUrl, idx) => (
                <div
                  key={`r3-1-${idx}`}
                  className="marquee-logo group flex items-center justify-center w-[200px] h-[88px] border-r border-neutral-200 bg-white hover:bg-neutral-50/50 transition-colors duration-200 cursor-pointer"
                >
                  <img
                    src={logoUrl}
                    alt="Client Logo"
                    className="h-12 w-auto max-w-[150px] object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 animate-marquee-rtl" aria-hidden="true">
              {row3.map((logoUrl, idx) => (
                <div
                  key={`r3-2-${idx}`}
                  className="marquee-logo group flex items-center justify-center w-[200px] h-[88px] border-r border-neutral-200 bg-white hover:bg-neutral-50/50 transition-colors duration-200 cursor-pointer"
                >
                  <img
                    src={logoUrl}
                    alt="Client Logo"
                    className="h-12 w-auto max-w-[150px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
