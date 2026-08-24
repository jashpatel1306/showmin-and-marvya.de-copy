import { DottedSection } from "@/components/DottedSection";

export function AiProfitsSection() {
  return (
    <section data-cursor-theme="light" className="ai-section bg-[#f4f3ec]">
      <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-neutral-200 bg-[#f4f3ec] p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col gap-8 md:gap-12">
        {/* Main Heading */}
        <h2 className="ai__heading font-serif text-[#131316] text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] leading-[1.08] tracking-tight font-semibold max-w-[760px]">
          <span className="ai__heading_span font-normal text-neutral-700 block sm:inline">
            AI is coming <br className="hidden sm:block" />
            for your{" "}
          </span>
          <span className="italic text-neutral-900 font-bold underline decoration-emerald-600/50 decoration-4 underline-offset-4">
            profits.
          </span>
        </h2>

        {/* 2-Column Content Grid */}
        <div className="ai__content grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-[#3A3A3C] text-sm sm:text-base md:text-[15.5px] leading-relaxed">
          {/* Column 1 */}
          <div className="ai__content-col flex flex-col gap-5">
            <p className="ai__content-p">
              Every brand now has access to the same tools, the same stock copy, the same landing page template with a gradient and a dog. Good enough is free. Good enough also doesn't convert.
            </p>
            <p className="ai__content-p">
              The moat moved. It's not in "having a website." It's in having a page so specific to your customer, so precise on the one thing they need to hear, that a model couldn't generate it without you in the room.
            </p>
          </div>

          {/* Column 2 */}
          <div className="ai__content-col flex flex-col gap-5 justify-between">
            <div className="flex flex-col gap-5">
              <p className="ai__content-p">
                We don't sell you an AI workflow. We sell you a point of view, translated into pixels, measured in rupees, shipped in three weeks. The part no model can do for you is decide what you actually believe.
              </p>
              <p className="ai__content-p">
                Pages that convert are pages with{" "}
                <span className="text-span-4 font-serif italic font-bold text-neutral-900 underline decoration-emerald-600/60 underline-offset-4">
                  opinions.
                </span>{" "}
                Opinions that cost money to form. Which is why everyone else won't.
              </p>
            </div>
            <div className="ai__attribution text-xs font-mono font-bold tracking-[0.2em] text-neutral-400 uppercase pt-4 border-t border-neutral-300/70 w-fit mt-2">
              — TLPC · APR 2026
            </div>
          </div>
        </div>

        {/* CTA Row */}
        <div className="ai__cta-row flex items-center justify-end gap-5 pt-8 md:pt-10 border-t border-[#D1D1D6]">
          <div className="ai__cta-note text-xs font-mono text-neutral-500 italic">
            Or read it again. We'll wait.
          </div>
        </div>
      </div>
    </section>
  );
}
