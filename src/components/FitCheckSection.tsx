export function FitCheckSection() {
  const notForYou = [
    {
      text: "Your CEO has a doc of 47 things the page must say.",
      secondary: "(It should say one.)",
    },
    {
      text: "You haven't talked to a customer in 90 days.",
      secondary: "(We won't guess for you.)",
    },
    {
      text: "You need deliverables measured in pages, not revenue.",
      secondary: "(Hire a freelancer.)",
    },
    {
      text: "You treat agencies like vendors, not partners.",
      secondary: "(Life's too short.)",
    },
    {
      text: "You sell vapes, predatory lending, or MLMs.",
      secondary: "(Hard no.)",
    },
  ];

  const forYou = [
    {
      text: "You've hit a ceiling on CVR and don't know why.",
      secondary: "",
    },
    {
      text: "You have a product that actually works.",
      secondary: "(We can't fix a bad one.)",
    },
    {
      text: "You'd rather see a 14-day test than a 40-slide deck.",
      secondary: "",
    },
    {
      text: "You want the person writing the page to take the first call.",
      secondary: "",
    },
    {
      text: "You think design and performance are the same fight.",
      secondary: "",
    },
  ];

  return (
    <section className="fitcheck-section bg-[#f4f3ec]">
      <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-neutral-200 bg-[#f4f3ec] p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col gap-10 md:gap-12">
        {/* Header */}
        <div className="fitcheck_head flex flex-col gap-3 max-w-[760px]">
          <h2 className="h2title is-fitcheck font-serif text-[#131316] text-[32px] sm:text-[40px] md:text-[48px] leading-[1.12] tracking-tight font-semibold">
            Who we don't work with.
          </h2>
          <p className="common-subtext is-fitcheck text-neutral-600 text-sm sm:text-base md:text-[15.5px] leading-relaxed">
            Saying no is a competitive advantage. Here's ours, in writing, so we can both save everyone a discovery call.
          </p>
        </div>

        {/* 2 Columns Grid */}
        <div data-cursor-theme="light" className="fitcheck__columns grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Column 1: Not for you */}
          <div className="fitcheck__col bg-white rounded-xl border border-neutral-200/90 p-6 sm:p-8 flex flex-col gap-6 shadow-xs relative overflow-hidden">
            <div className="fitcheck__col-title text-base sm:text-lg font-bold text-red-600 font-mono flex items-center gap-2 pb-4 border-b border-neutral-200">
              <span className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs font-bold shrink-0">
                ✗
              </span>
              <span>Not for you if</span>
            </div>
            <div className="fitcheck__col-rows flex flex-col gap-4 text-xs sm:text-sm text-neutral-800 leading-relaxed">
              {notForYou.map((item, idx) => (
                <div key={idx} className="fitcheck__col-row flex items-start gap-3">
                  <span className="fitcheck-feature-icon text-neutral-400 font-mono shrink-0 mt-0.5">
                    →
                  </span>
                  <div className="fitcheck-feature-text">
                    {item.text}{" "}
                    {item.secondary && (
                      <span className="fitcheck-feature-text-secondary text-neutral-500 font-normal">
                        {item.secondary}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: For you if */}
          <div className="fitcheck__col is-last bg-white rounded-xl border border-neutral-200/90 p-6 sm:p-8 flex flex-col gap-6 shadow-xs relative overflow-hidden">
            <div className="fitcheck__col-title is-green text-base sm:text-lg font-bold text-emerald-700 font-mono flex items-center gap-2 pb-4 border-b border-neutral-200">
              <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                ✓
              </span>
              <span>For you if</span>
            </div>
            <div className="fitcheck__col-rows flex flex-col gap-4 text-xs sm:text-sm text-neutral-800 leading-relaxed">
              {forYou.map((item, idx) => (
                <div key={idx} className="fitcheck__col-row flex items-start gap-3">
                  <span className="fitcheck-feature-icon text-emerald-600 font-mono shrink-0 mt-0.5">
                    →
                  </span>
                  <div className="fitcheck-feature-text">
                    {item.text}{" "}
                    {item.secondary && (
                      <span className="fitcheck-feature-text-secondary text-neutral-500 font-normal">
                        {item.secondary}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
