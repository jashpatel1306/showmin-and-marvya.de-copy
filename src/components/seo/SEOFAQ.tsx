import { useState } from "react";

const faqs = [
  {
    question: "How do you begin an SEO engagement?",
    answer:
      "We start with a focused discovery call to understand your goals, current traffic, and known issues. From there, we run a light technical and content audit and provide clear, prioritized recommendations with transparent pricing.",
  },
  {
    question: "Do you only optimize sites you’ve built?",
    answer:
      "No. We regularly work on existing Webflow, Framer, and WordPress sites built by other teams. We review the current setup first and provide honest guidance on what’s achievable.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a medium- to long-term channel. Some technical improvements can show impact relatively quickly, but consistent and meaningful growth typically takes several months. We set realistic expectations from the outset.",
  },
  {
    question: "Will you create content for us?",
    answer:
      "Yes. We can support topic planning, keyword research, outlines, and full-page or article writing—ensuring content is structured for both users and search engines.",
  },
  {
    question: "Do you provide link building services?",
    answer:
      "Our priority is strong technical foundations and valuable content. When link building is appropriate, we take a careful, ethical approach focused on relevant, high-quality backlinks and can advise on safe strategies.",
  },
  {
    question: "Can you collaborate with our internal marketing team?",
    answer:
      "Absolutely. We often work alongside in-house marketing and content teams, acting as an SEO partner to provide strategy, technical checks, and ongoing guidance.",
  },
];

const SEOFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="flex flex-col items-start gap-8 lg:w-[400px] lg:flex-shrink-0 lg:pt-4">
            <h2 className="section-title text-foreground">SEO FAQs</h2>
            <a
              href="/get-started"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
            >
              Contact us
            </a>
          </div>
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

export default SEOFAQ;
