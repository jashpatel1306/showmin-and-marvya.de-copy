import { useState } from "react";

const faqs = [
    {
      question: "Do we need to adopt new tools to get started?",
      answer:
        "In most cases, no. We begin with the tools you already use—such as your website platform, CRM, and email provider. If an additional tool is required, we keep the setup streamlined and practical.",
    },
    {
      question: "Will AI replace our team or support staff?",
      answer:
        "No. We position AI as an assistive layer to handle common, low-risk tasks and questions. Your team remains responsible for complex conversations and key decisions.",
    },
    {
      question: "Is this only for Webflow websites?",
      answer:
        "No. We frequently work with Webflow, Framer, and WordPress sites, connecting them to CRMs, email systems, scheduling tools, and other platforms.",
    },
    {
      question: "How do you ensure safety and accuracy?",
      answer:
        "We define clear boundaries for what AI can and cannot do, rely on your verified content wherever possible, and maintain a clear path to human support when needed.",
    },
    {
      question: "Can you collaborate with our internal tech or operations team?",
      answer:
        "Yes. We’re comfortable working alongside internal teams or external partners to ensure automations align with your existing processes and standards.",
    },
    {
      question: "What happens if an automation fails or needs updating?",
      answer:
        "Each workflow is clearly documented to make updates straightforward. If we provide ongoing support, we can monitor, adjust, and refine automations as your processes evolve.",
    },
  ];

const AiFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full pt-20 md:pt-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left column - Title & CTA */}
          <div className="flex flex-col items-start gap-8 lg:w-[600px] lg:flex-shrink-0 lg:pt-4">
            <h2 className="section-title text-foreground">
            AI & automation FAQS
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

export default AiFAQ;
