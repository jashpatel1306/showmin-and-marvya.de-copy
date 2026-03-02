import { useState } from "react";

const faqs = [
  {
    question: "How do you begin a copywriting project?",
    answer:
      "We start with a short discovery call and a focused questionnaire to understand your audience, offers, positioning, and examples you like. From there, we outline the page structure before moving into drafting.",
  },
  {
    question: "Do you require final designs before writing?",
    answer:
      "Not necessarily. In many projects, we develop copy alongside design so structure, messaging, and layout evolve together and reinforce one another.",
  },
  {
    question: "Can you refine existing copy instead of rewriting everything?",
    answer:
      "Yes. If you already have content, we can edit and strengthen it—keeping what works, clarifying weak spots, and aligning everything more closely with your goals.",
  },
  {
    question: "How many revision rounds are included?",
    answer:
      "Most projects include at least two rounds of feedback: one for structural or strategic changes and another for refining tone, clarity, and detail.",
  },
  {
    question: "Can you write with SEO in mind?",
    answer:
      "Yes. We incorporate agreed keywords and structure pages to balance search visibility with clear, engaging language for real readers.",
  },
  {
    question: "Do you write for regulated industries, such as finance?",
    answer:
      "Yes, provided your team manages final compliance review. We focus on clear, accurate language and avoid exaggerated claims to support smoother approval processes.",
  },
];

const CopyWritingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full pt-20 md:pt-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left column - Title & CTA */}
          <div className="flex flex-col items-start gap-8 lg:w-[500px] lg:flex-shrink-0 lg:pt-4">
            <h2 className="section-title text-foreground">
            Copywriting FAQS
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

export default CopyWritingFAQ;
