export function CareersHeroBanner() {
  return (
    <section className="w-full max-w-[1920px] mx-auto min-h-[50vh] lg:min-h-[600px] xl:min-h-[718px] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 relative flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#94C8B5]/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1118px] mx-auto flex flex-col items-center text-center">
        {/* CAREERS Badge */}
        <div className="flex justify-center w-full mb-4 sm:mb-6">
          <span className="inline-flex items-center justify-center text-[#007A5A] font-sans font-bold text-xs sm:text-[13.3px] leading-[17.1px] tracking-[1.57px] text-center uppercase select-none px-3 py-1 bg-[#007A5A]/5 rounded-full border border-[#007A5A]/20">
            CAREERS
          </span>
        </div>

        {/* Headline Text */}
        <h1
          className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[57.3px] leading-[1.2] sm:leading-[1.2] lg:leading-[73px] text-[#2D2D2D] font-semibold text-center max-w-[1024px] tracking-[-0.01em]"
          style={{ fontFamily: '"Geist Mono", monospace' }}
        >
          <span className="relative inline-block">
            <span
              className="absolute bottom-[2px] sm:bottom-[4px] lg:bottom-[9px] left-0 right-0 h-[28%] bg-[#94C8B5] z-0"
              aria-hidden="true"
            />
            <span className="relative z-10">Join our team</span>
          </span>{" "}
          in empowering small and{" "}
          <br className="hidden md:inline" />
          medium businesses towards success!
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 max-w-[720px] font-sans leading-relaxed">
          We're building the future of AI-driven messaging and customer engagement. Discover open roles and join a team that values innovation, speed, and real impact.
        </p>

        {/* View open positions Button */}
        <div className="mt-8 sm:mt-10 flex justify-center w-full">
          <a
            href="#open-positions"
            className="inline-flex items-center justify-center w-full sm:w-[210px] h-[52px] sm:h-[56px] bg-[#007A5A] hover:bg-[#00684C] text-white font-sans text-base font-semibold rounded-[8px] border border-[#2D2D2D] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98] select-none"
          >
            View open positions
          </a>
        </div>
      </div>
    </section>
  );
}
