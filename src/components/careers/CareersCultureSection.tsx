export function CareersCultureSection() {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#27B578]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Move Fast & Build Impact",
      description:
        "We ship fast, iterate rapidly, and solve high-scale problems for thousands of businesses using automated AI agents.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#27B578]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Customer Obsessed",
      description:
        "Every line of code and feature we release directly empowers small and medium businesses to grow on WhatsApp.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#27B578]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-4a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Autonomy & Ownership",
      description:
        "We trust you to take charge. You own your features from concept to production with minimal bureaucracy.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#27B578]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 012-2h1.065M12 20.935V19a2 2 0 00-2-2h-.5a2 2 0 01-2-2v-.5a2.5 2.5 0 00-2.5-2.5H4" />
        </svg>
      ),
      title: "Remote First Flexibility",
      description:
        "Work from anywhere or join our hub in Surat. We offer flexible hours and focus on output, not seat time.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#007A5A] uppercase mb-2 block">
            Why Join Us
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2D2D2D] tracking-tight"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            Built by engineers & designers passionate about AI
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-white hover:border-[#27B578]/50 hover:shadow-md transition-all duration-200 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-[#042717] flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">{v.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
