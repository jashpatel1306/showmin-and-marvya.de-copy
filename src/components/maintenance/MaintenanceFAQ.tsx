import { useState } from "react";

const faqs = [
  {
    question: "Do you only maintain websites you originally built?",
    answer:
      "No. We regularly maintain Webflow, Framer, and WordPress sites built by other teams. We begin with a short technical review to understand the setup before taking over support.",
  },
  {
    question: "What does a typical maintenance setup look like?",
    answer:
      "Some clients prefer a pay-as-you-go model, submitting tasks when needed. Others choose a monthly retainer that covers updates, monitoring, and small improvements. We’ll recommend the best option based on how frequently your site changes.",
  },
  {
    question: "Can you help with urgent issues?",
    answer:
      "Yes. If a form stops working, a layout breaks, or a page goes offline, we treat it as a priority and quickly investigate and resolve the issue.",
  },
  {
    question: "How do we submit change requests?",
    answer:
      "You can send requests via email, Slack, or another preferred channel. We can also provide access to a client portal if you’d like a centralized place to track and manage tasks.",
  },
  {
    question: "What happens if a task is larger than expected?",
    answer:
      "If a request turns out to require more extensive work, we’ll clearly explain the scope and suggest handling it as a small standalone project with its own timeline and cost—so you remain in control.",
  },
];

const MaintenanceFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full pt-20 md:pt-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="flex flex-col items-start gap-8 lg:w-[500px] lg:flex-shrink-0 lg:pt-4">
            <h2 className="section-title text-foreground">Maintenance FAQs</h2>
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

export default MaintenanceFAQ;
