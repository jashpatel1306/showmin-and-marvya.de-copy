export function ProblemsSection() {
  return (
    <section className="bg-[#f4f3ec]">
      <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-neutral-200 flex flex-col items-center bg-[#f4f3ec]">
        {/* Header Section */}
        <div className="pt-12 md:pt-16 pb-10 md:pb-12 px-4 md:px-6 text-center max-w-[800px] mx-auto flex flex-col items-center bg-[#f4f3ec]">
          <div className="flex items-center gap-2 justify-center mb-3 md:mb-4">
            <span className="w-4 h-px bg-emerald-600/60" />
            <span className="text-[10px] md:text-[11px] font-bold font-mono text-emerald-600 tracking-[0.2em] uppercase">
              WHY WORK WITH US
            </span>
            <span className="w-4 h-px bg-emerald-600/60" />
          </div>
          <h2 className="font-serif text-[#131316] text-[20px] sm:text-[28px] md:text-[28px] lg:text-[32px] leading-[1.15] tracking-tight font-semibold mb-3 md:mb-4">
            Your technology should solve problems, not create more of them.
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[620px]">
            Growing businesses often struggle with disconnected systems, manual processes, limited ecommerce platforms, and technology that doesn't scale with their needs.
          </p>
        </div>

        {/* 4 Problem Cards Grid - Responsive for 1440w, 1024w, 768w, 390w */}
        <div className="w-full border-y border-[#D1D1D6] grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D1D1D6] bg-[#f4f3ec]">
          {/* Card 1 */}
          <div className="p-4 sm:p-5 lg:p-7 flex flex-col text-center justify-between min-h-[480px] md:h-[500px] bg-[#f4f3ec] hover:bg-[#ebeadF]/70 transition-colors duration-200 relative group overflow-hidden">
            <div className="flex flex-col gap-1.5 md:gap-2 mb-4">
              <span className="text-[#E25252] text-[10px] md:text-[11px] font-bold font-mono tracking-[0.15em] uppercase">
                PROBLEM 01
              </span>
              <span className="text-neutral-500 font-mono text-[10px] md:text-[11px] uppercase tracking-wider font-semibold">
                Ecommerce limitations
              </span>
              <h3 className="text-[#131316] font-medium text-[13.5px] md:text-[14px] lg:text-[15px] leading-snug">
                Your store isn't built for your business
              </h3>
              <p className="text-neutral-600 text-[11px] md:text-[12px] leading-relaxed mt-0.5">
                Generic themes and limited functionality can make it difficult to deliver the experience your customers expect.
              </p>
            </div>

            {/* Mockup Frame 1 */}
            <div className="bg-[#E5E4DC]/70 rounded-[4px] p-3 md:p-3.5 relative h-[180px] md:h-[190px] flex flex-col justify-between border border-[#D8D7CE] shadow-2xs">
              {/* Corner Crop Marks */}
              <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-neutral-400" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-neutral-400" />
              <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-neutral-400" />
              <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-neutral-400" />

              <div className="flex flex-col gap-2 z-10 my-auto">
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-[9px] text-neutral-500 font-mono">Customer</span>
                  <div className="bg-white text-[10px] md:text-[11px] text-neutral-800 px-2.5 md:px-3 py-1.5 rounded-lg rounded-tl-none border border-neutral-200/80 shadow-2xs max-w-[92%]">
                    When is my policy maturing???
                  </div>
                </div>

                <div className="flex flex-col items-end gap-0.5 mt-1">
                  <span className="text-[9px] text-neutral-500 font-mono">Agent</span>
                  <div className="bg-[#DCF8C6] text-[10px] md:text-[11px] text-neutral-800 px-2.5 md:px-3 py-1.5 rounded-lg rounded-tr-none border border-[#c5e8ab] shadow-2xs max-w-[95%] text-left">
                    Idk sir please call on the main support number
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D8D7CE] flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">Solution</span>
              <span className="text-[10px] md:text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded border border-emerald-200/50">
                Shopify Solution
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 sm:p-5 lg:p-7 flex flex-col text-center justify-between min-h-[480px] md:h-[500px] bg-[#f4f3ec] hover:bg-[#ebeadF]/70 transition-colors duration-200 relative group overflow-hidden">
            <div className="flex flex-col gap-1.5 md:gap-2 mb-4">
              <span className="text-[#E25252] text-[10px] md:text-[11px] font-bold font-mono tracking-[0.15em] uppercase">
                PROBLEM 02
              </span>
              <span className="text-neutral-500 font-mono text-[10px] md:text-[11px] uppercase tracking-wider font-semibold">
                Manual processes
              </span>
              <h3 className="text-[#131316] font-medium text-[13.5px] md:text-[14px] lg:text-[15px] leading-snug">
                Too much work is still manual
              </h3>
              <p className="text-neutral-600 text-[11px] md:text-[12px] leading-relaxed mt-0.5">
                Copying data, following up with customers, managing leads, sending emails, and repeating the same tasks wastes time and creates room for mistakes.
              </p>
            </div>

            {/* Mockup Frame 2 */}
            <div className="bg-[#E5E4DC]/70 rounded-[4px] p-3 md:p-3.5 relative h-[180px] md:h-[190px] flex flex-col justify-between border border-[#D8D7CE] shadow-2xs">
              {/* Corner Crop Marks */}
              <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-neutral-400" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-neutral-400" />
              <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-neutral-400" />
              <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-neutral-400" />

              <div className="flex flex-col gap-1.5 z-10 my-auto">
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[9px] text-neutral-500 font-mono">Agent</span>
                  <div className="bg-white text-[10px] md:text-[10.5px] text-neutral-800 px-2.5 py-1 rounded-lg rounded-tr-none border border-neutral-200/80 shadow-2xs">
                    Sir are you still interested?
                  </div>
                  <div className="bg-white text-[10px] md:text-[10.5px] text-neutral-800 px-2.5 py-1 rounded-lg rounded-tr-none border border-neutral-200/80 shadow-2xs">
                    Helloo??
                  </div>
                </div>

                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-[9px] text-neutral-500 font-mono">Customer</span>
                  <div className="bg-white text-[10px] md:text-[10.5px] text-neutral-800 px-2.5 py-1 rounded-lg rounded-tl-none border border-neutral-200/80 shadow-2xs max-w-[95%]">
                    No please stop messaging me
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D8D7CE] flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">Solution</span>
              <span className="text-[10px] md:text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded border border-emerald-200/50">
                Automation Solution
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 sm:p-5 lg:p-7 flex flex-col text-center justify-between min-h-[480px] md:h-[500px] bg-[#f4f3ec] hover:bg-[#ebeadF]/70 transition-colors duration-200 relative group overflow-hidden">
            <div className="flex flex-col gap-1.5 md:gap-2 mb-4">
              <span className="text-[#E25252] text-[10px] md:text-[11px] font-bold font-mono tracking-[0.15em] uppercase">
                PROBLEM 03
              </span>
              <span className="text-neutral-500 font-mono text-[10px] md:text-[11px] uppercase tracking-wider font-semibold">
                Disconnected systems
              </span>
              <h3 className="text-[#131316] font-medium text-[13.5px] md:text-[14px] lg:text-[15px] leading-snug">
                Your tools don't talk to each other
              </h3>
              <p className="text-neutral-600 text-[11px] md:text-[12px] leading-relaxed mt-0.5">
                Your Shopify store, CRM, ERP, marketing tools, inventory, and internal systems shouldn't operate as separate islands.
              </p>
            </div>

            {/* Mockup Frame 3 (Illustration: WhatsApp & CRM Disconnected Wire) */}
            <div className="bg-[#E5E4DC]/70 rounded-[4px] p-3 md:p-3.5 relative h-[180px] md:h-[190px] flex items-center justify-center border border-[#D8D7CE] shadow-2xs">
              {/* Corner Crop Marks */}
              <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-neutral-400" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-neutral-400" />
              <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-neutral-400" />
              <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-neutral-400" />

              <div className="flex items-center justify-between w-full px-1 z-10 relative">
                {/* WhatsApp Icon Box */}
                <div className="w-10 h-10 md:w-11 md:h-11 bg-[#25D366] rounded-xl flex items-center justify-center shadow-md shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>

                {/* Disconnected Wire SVG */}
                <div className="flex-1 mx-1 flex items-center justify-center">
                  <svg className="w-full h-9 md:h-10 text-neutral-800" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M 5 20 C 30 38, 30 2, 55 20 C 65 28, 70 12, 78 20" strokeDasharray="3 3" />
                    <circle cx="80" cy="20" r="2.5" fill="currentColor" />
                    <line x1="83" y1="16" x2="83" y2="24" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* CRM Box */}
                <div className="px-2.5 md:px-3 py-1.5 md:py-2 bg-white rounded border border-neutral-300 shadow-xs relative shrink-0">
                  <span className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-neutral-500" />
                  <span className="absolute -top-1 -right-1 w-1 h-1 border-t border-r border-neutral-500" />
                  <span className="absolute -bottom-1 -left-1 w-1 h-1 border-b border-l border-neutral-500" />
                  <span className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-neutral-500" />
                  <span className="text-[10px] md:text-[11px] font-bold text-neutral-800 font-mono tracking-wider">CRM</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D8D7CE] flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">Solution</span>
              <span className="text-[10px] md:text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded border border-emerald-200/50">
                Integration Solution
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-4 sm:p-5 lg:p-7 flex flex-col text-center justify-between min-h-[480px] md:h-[500px] bg-[#f4f3ec] hover:bg-[#ebeadF]/70 transition-colors duration-200 relative group overflow-hidden">
            <div className="flex flex-col gap-1.5 md:gap-2 mb-4">
              <span className="text-[#E25252] text-[10px] md:text-[11px] font-bold font-mono tracking-[0.15em] uppercase">
                PROBLEM 04
              </span>
              <span className="text-neutral-500 font-mono text-[10px] md:text-[11px] uppercase tracking-wider font-semibold">
                Generic software
              </span>
              <h3 className="text-[#131316] font-medium text-[13.5px] md:text-[14px] lg:text-[15px] leading-snug">
                Off-the-shelf software doesn't fit your workflow
              </h3>
              <p className="text-neutral-600 text-[11px] md:text-[12px] leading-relaxed mt-0.5">
                Every industry has different workflows, customers, operations, and challenges. Sometimes an off-the-shelf tool simply isn't enough.
              </p>
            </div>

            {/* Mockup Frame 4 */}
            <div className="bg-[#E5E4DC]/70 rounded-[4px] p-3 md:p-3.5 relative h-[180px] md:h-[190px] flex flex-col justify-between border border-[#D8D7CE] shadow-2xs">
              {/* Corner Crop Marks */}
              <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-neutral-400" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-neutral-400" />
              <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-neutral-400" />
              <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-neutral-400" />

              <div className="flex flex-col gap-1.5 z-10 my-auto">
                <span className="text-[9px] text-neutral-500 font-mono">Customer</span>
                <div className="flex flex-col gap-1">
                  <div className="bg-white text-[9.5px] md:text-[10px] text-neutral-800 px-2 md:px-2.5 py-1 rounded-lg rounded-tl-none border border-neutral-200/80 shadow-2xs flex justify-between items-center gap-1.5">
                    <span className="truncate">Hi I want to purchase now</span>
                    <span className="text-[8px] text-neutral-400 shrink-0">3:30 PM</span>
                  </div>
                  <div className="bg-white text-[9.5px] md:text-[10px] text-neutral-800 px-2 md:px-2.5 py-1 rounded-lg rounded-tl-none border border-neutral-200/80 shadow-2xs flex justify-between items-center gap-1.5">
                    <span className="truncate">Are you there??</span>
                    <span className="text-[8px] text-neutral-400 shrink-0">5:07 PM</span>
                  </div>
                  <div className="bg-white text-[9.5px] md:text-[10px] text-neutral-800 px-2 md:px-2.5 py-1 rounded-lg rounded-tl-none border border-neutral-200/80 shadow-2xs flex justify-between items-center gap-1.5">
                    <span className="truncate">How long do I have to wait 😡</span>
                    <span className="text-[8px] text-neutral-400 shrink-0">6:23 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D8D7CE] flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">Solution</span>
              <span className="text-[10px] md:text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded border border-emerald-200/50">
                Custom Software
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
