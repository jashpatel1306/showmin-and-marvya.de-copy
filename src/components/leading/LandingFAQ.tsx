import { useState } from "react";

const faqs = [
    {
        question: "Do you provide copywriting along with landing page design?",
        answer: "Yes, we can handle both. Some clients provide their own copy which we optimize within the layout, while others prefer us to develop the full structure and messaging. If needed, we can combine the design project with our dedicated copywriting service.",
      },
      {
        question: "Can you create landing pages tailored to channels like Google Ads or paid social?",
        answer: "Absolutely. Each traffic source requires a different approach. We design pages based on the visitor’s intent—whether they are arriving from paid search, remarketing campaigns, or email audiences—ensuring the experience aligns with the channel strategy.",
      },
      {
        question: "Will the landing page align with our current brand and website?",
        answer: "Yes. We ensure the landing page feels like a seamless extension of your brand by using your established visual identity and refining it where needed. Even when hosted separately from your main website, the design maintains consistency and trust.",
      },
      {
        question: "Can you also develop the landing page in platforms like Webflow, Framer, or WordPress?",
        answer: "Yes, we can deliver ready-to-build design files or manage the full design-and-development process on your preferred platform. Many clients choose a complete end-to-end approach to ensure the final build matches the original design vision.",
      },
      {
        question: "How long does a typical landing page project take?",
        answer: "Most landing page projects are completed within a few weeks, depending on the scope, feedback cycles, and availability of required inputs. Once we review your requirements, we provide a clear timeline with milestones.",
      },
      {
        question: "What information do you need from us before starting?",
        answer: "We typically require details about your offer, target audience, key objections, proof points, and traffic sources. Any previous campaigns, landing pages, or brand assets are also helpful. We collect this information through a short onboarding questionnaire and kickoff session.",
      },
      {
        question: "Do you support testing and ongoing optimization after launch?",
        answer: "Yes. We can design alternative variations, recommend testing strategies, and continue improving the page based on performance data. As insights grow, we refine messaging, layouts, and new iterations to maximize results.",
      },
];

const LandingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left column - Title & CTA */}
          <div className="flex flex-col items-start gap-8 lg:w-[320px] lg:flex-shrink-0 lg:pt-4">
            <h2 className="section-title text-foreground">
            Landing-page design FAQS
            </h2>
            <a
              href="./get-started"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
            >
              Contact us
            </a>
          </div>

          {/* Right column - FAQ list */}
          <div className="flex flex-1 flex-col">
            {faqs.map((item, index) => (
              <div key={index} className="border-t border-border">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <h3 className="pr-4 text-base font-semibold text-foreground md:text-lg">
                    {item.question}
                  </h3>
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-xl font-light text-foreground">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
