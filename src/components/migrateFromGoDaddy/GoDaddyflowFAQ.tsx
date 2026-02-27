import { useState } from "react";

const WebflowFaqs = [
    {
      question: "Can you move our GoDaddy site to Webflow or Framer?",
      answer:
        "Yes. Most GoDaddy migrations we handle involve transitioning to Webflow or Framer. We carefully map your existing content, redesign priority pages, and rebuild them in the new platform with improved structure and performance.",
    },
    {
      question: "Will migrating away from GoDaddy hurt our SEO?",
      answer:
        "When managed correctly, it should not. We implement proper redirects from old URLs to new ones, update internal links, and preserve important content, metadata, and page structure to protect search visibility.",
    },
    {
      question: "Can you help move our domain and email away from GoDaddy?",
      answer:
        "Yes. We can guide and coordinate domain transfers as part of the migration. Email transitions depend on your current configuration, but we help plan the process to avoid disruption.",
    },
    {
      question: "How long does a typical GoDaddy migration take?",
      answer:
        "Smaller websites can often be migrated within a few weeks. Larger or more customized sites require additional time, depending on scope, integrations, and feedback timelines.",
    },
    {
      question: "What is the usual investment for a GoDaddy migration?",
      answer:
        "Costs depend on page count, redesign depth, and the destination platform. Many migration projects fall within the mid four-figure to low five-figure range (USD or GBP).",
    },
    {
      question: "Can we update or improve content during the migration?",
      answer:
        "Absolutely. Migration is an ideal opportunity to refine messaging, update offers, and remove outdated content. We help prioritize changes so improvements stay focused and manageable.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. After launch, we can assist with refinements, new pages, performance adjustments, and ongoing improvements as you grow into the new platform.",
    },
  ];

const GoDaddyflowFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="flex flex-col items-start gap-8 lg:w-[400px] lg:flex-shrink-0 lg:pt-4">
                    <h2 className="section-title text-foreground">
                        GoDaddy FAQS
                    </h2>
                    <a
                        href="./get-started"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
                    >
                        Contact us
                    </a>
                </div>
                <div className="flex flex-1 flex-col">
                    {WebflowFaqs.map((item, index) => (
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
        </section>
    );
};

export default GoDaddyflowFAQ;
