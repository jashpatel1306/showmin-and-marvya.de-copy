import { useState } from "react";

const faqs = [
  {
    question: "How do design projects usually start?",
    answer: "We begin with a short call to understand your goals, audience, and any constraints. From there we put together a simple proposal that outlines scope, pricing, and timelines. Once agreed, we move into a discovery and wireframe phase before detailed design.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Yes. We are happy to follow existing guidelines, refine them, or help you create a lightweight system if you do not have one yet.",
  },
  {
    question: "What does feedback and sign off look like?",
    answer: "We share work in Figma and walk you through it on calls. You can leave comments directly in the file. We plan for a couple of feedback rounds as standard so there is space to refine details.",
  },
  {
    question: "How much does a typical design project cost?",
    answer: "Pricing depends on scope, complexity, and timelines. As a rough guide, a focused landing page design usually starts from $1500, while a multi page marketing site will be more. After a quick call we can give you a clear, no obligation quote.",
  },
  {
    question: "Do you offer ongoing design support after launch?",
    answer: "Yes. Many clients keep us on to design new pages, components, and campaigns as their business grows. We can work on a flexible ongoing arrangement or on a per project basis.",
  },
];

const DesignFAQ = () => {
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
              Design FAQS
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

export default DesignFAQ;
