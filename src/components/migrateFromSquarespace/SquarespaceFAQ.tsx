import { useState } from "react";

const SquarespaceFaq = [
    {
      question: "Can you move our Squarespace site to Webflow or Framer?",
      answer:
        "Yes. Most Squarespace migrations we handle involve transitioning to Webflow or Framer. We map your existing content, redesign priority pages, and rebuild them in the new platform with improved structure and performance.",
    },
    {
      question: "Can you migrate our blog and existing pages?",
      answer:
        "In most cases, yes. We export or carefully recreate important posts and pages, then implement a stronger content structure in Webflow, Framer, or WordPress where appropriate.",
    },
    {
      question: "Will migrating away from Squarespace affect our SEO?",
      answer:
        "When managed correctly, it should not. We implement proper redirects, update internal links, and preserve key content and metadata to maintain search visibility.",
    },
    {
      question: "How long does a typical Squarespace migration take?",
      answer:
        "Smaller websites can often be migrated within a few weeks. Larger sites with multiple templates, content types, or languages typically require additional time depending on scope and feedback timelines.",
    },
    {
      question: "What is the typical investment for a Squarespace migration?",
      answer:
        "Costs vary based on page count, content complexity, and the level of redesign required. Many migration projects fall within the mid four-figure to low five-figure range (USD or GBP).",
    },
    {
      question: "Can we improve content during the migration?",
      answer:
        "Absolutely. Migration is a strong opportunity to refine messaging, update offers, and remove outdated pages. We help prioritize improvements so the project remains focused and manageable.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes. After launch, we can assist with content updates, new pages, performance refinements, and ongoing improvements as you settle into the new platform.",
    },
  ];

const SquarespaceFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="flex flex-col items-start gap-8 lg:w-[500px] lg:flex-shrink-0 lg:pt-4">
                    <h2 className="section-title text-foreground">
                    Squarespace FAQS
                    </h2>
                    <a
                        href="./get-started"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
                    >
                        Contact us
                    </a>
                </div>
                <div className="flex flex-1 flex-col">
                    {SquarespaceFaq.map((item, index) => (
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

export default SquarespaceFAQ;
