import { useState } from "react";

const faqs = [
  {
    question: "What does an SEO audit include?",
    answer: "We analyze technical SEO (crawlability, site speed, mobile-friendliness), on-page SEO (titles, meta descriptions, headings, content structure), and off-page factors. You receive a prioritized action plan with clear next steps.",
  },
  {
    question: "How long until I see results?",
    answer: "SEO is a long-term investment. Technical fixes often show impact within 4–8 weeks. Content and ranking improvements typically take 3–6 months depending on competition and your starting point.",
  },
  {
    question: "Do you offer ongoing SEO support?",
    answer: "Yes. Many clients work with us on ongoing technical SEO, content optimization, and monitoring. We offer monthly retainers tailored to your goals and budget.",
  },
  {
    question: "How much does an SEO audit cost?",
    answer: "Pricing depends on site size and depth of analysis. A standard audit for most marketing sites starts from $800. We provide a clear quote after reviewing your site.",
  },
  {
    question: "Can you work with our existing content?",
    answer: "Yes. We optimize existing pages for better rankings, improve meta tags and structure, and suggest content updates. We can also create new content when needed.",
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
          <div className="flex flex-col items-start gap-8 lg:w-[320px] lg:flex-shrink-0 lg:pt-4">
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
