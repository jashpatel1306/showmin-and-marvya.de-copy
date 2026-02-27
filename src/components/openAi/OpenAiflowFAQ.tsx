import { useState } from "react";

const openAiFaqs = [
    {
      question: "Do you rely only on prompting, or do you fine-tune models as well?",
      answer:
        "We use a combination of structured prompting, retrieval over your content (RAG), and fine-tuning when it genuinely adds value. The right approach depends on your data quality, use case complexity, and budget.",
    },
    {
      question: "Can you integrate OpenAI with our existing systems?",
      answer:
        "Yes. We connect OpenAI-powered assistants to tools such as your CRM, help desk, internal databases, or other platforms so they can retrieve context or trigger simple actions where appropriate.",
    },
    {
      question: "How do you approach privacy and data security?",
      answer:
        "We design implementations with data sensitivity in mind, use appropriate API configurations, minimize unnecessary data sharing, and structure flows to protect personal or confidential information.",
    },
    {
      question: "Will AI replace our support or sales team?",
      answer:
        "No. We position AI as an assistive layer—handling common questions and repetitive tasks—so your team can focus on higher-value conversations and complex cases.",
    },
    {
      question: "How long does a typical OpenAI project take?",
      answer:
        "Smaller assistants or proof-of-concept builds can be delivered within a few weeks. More advanced solutions with multiple integrations and workflows typically take longer, depending on scope and iteration cycles.",
    },
    {
      question: "What is the typical investment for an OpenAI project?",
      answer:
        "Costs vary based on scope, integrations, and technical complexity. Many initial implementations fall within the low-to-mid five-figure range (USD or GBP), with clear estimates provided after reviewing your goals.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. We can monitor usage, refine prompts, expand capabilities, and help identify new use cases once the first version is live and delivering measurable value.",
    },
  ];
  
const OpenAiflowFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="flex flex-col items-start gap-8 lg:w-[400px] lg:flex-shrink-0 lg:pt-4">
                    <h2 className="section-title text-foreground">
                        OpenAI FAQS
                    </h2>
                    <a
                        href="./get-started"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
                    >
                        Contact us
                    </a>
                </div>
                <div className="flex flex-1 flex-col">
                    {openAiFaqs.map((item, index) => (
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

export default OpenAiflowFAQ;
