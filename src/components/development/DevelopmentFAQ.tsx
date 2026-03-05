import { useState } from "react";

const faqs = [
  {
    question: "Which platforms and technologies do you typically work with?",
    answer:
      "For marketing websites we mainly build in Webflow, Framer, and WordPress, adding custom code where it genuinely improves functionality. We can also collaborate with your internal engineering team for more complex integrations or custom systems.",
  },
  {
    question: "Can you take over an existing website or codebase?",
    answer:
      "Yes. We frequently step into existing projects to improve structure, optimize performance, or add new features. We begin with a short technical review and provide honest advice on whether it makes more sense to improve the current setup or rebuild.",
  },
  {
    question: "How do you handle testing and quality assurance?",
    answer:
      "Each project goes through responsive testing across devices, browser compatibility checks, and basic accessibility reviews. For larger or more complex builds, we can also align with your internal QA processes.",
  },
  {
    question: "Will our team be able to edit the site after launch?",
    answer:
      "Yes. We structure sites so non-technical team members can safely update text, images, and CMS content without affecting the underlying layout or functionality.",
  },
  {
    question: "What is the typical timeline for a development project?",
    answer:
      "Timelines vary depending on scope, design readiness, and integrations. A focused marketing site may take a few weeks, while larger builds take longer. After an initial discussion, we provide a clear timeline with key milestones.",
  },
  {
    question: "Do you provide support after the site launches?",
    answer:
      "Yes. We offer ongoing support for bug fixes, technical maintenance, and continuous improvements—either through a monthly plan or on a pay-as-you-go basis.",
  },
];

const DevelopmentFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full pt-20 md:pt-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="flex flex-col items-start gap-8 lg:w-[500px] lg:flex-shrink-0 lg:pt-4">
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
