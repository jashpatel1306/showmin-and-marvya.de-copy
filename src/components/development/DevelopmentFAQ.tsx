import { useState } from "react";

const faqs = [
  {
    question: "How do development projects usually start?",
    answer: "We begin with a discovery call to understand your technical requirements, timeline, and budget. From there we provide a detailed scope and proposal. Once agreed, we set up the project structure and start building.",
  },
  {
    question: "What tech stack do you work with?",
    answer: "We work with modern frameworks like React, Next.js, Framer, Webflow, WordPress, and more. We choose the right tools based on your project needs, scalability, and maintenance requirements.",
  },
  {
    question: "Do you provide ongoing development support?",
    answer: "Yes. Many clients retain us for feature additions, bug fixes, and technical updates. We offer flexible retainer arrangements or per-project support depending on your needs.",
  },
  {
    question: "How much does a typical development project cost?",
    answer: "Pricing depends on scope, complexity, and timeline. A landing page build typically starts from $1500, while a full website or web app will be more. We provide clear quotes after our discovery call.",
  },
  {
    question: "Can you work with existing codebases?",
    answer: "Yes. We regularly take over and enhance existing projects. We can refactor, add features, fix bugs, or migrate to a new stack when needed.",
  },
];

const DevelopmentFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="flex flex-col items-start gap-8 lg:w-[320px] lg:flex-shrink-0 lg:pt-4">
            <h2 className="section-title text-foreground">Development FAQs</h2>
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

export default DevelopmentFAQ;
