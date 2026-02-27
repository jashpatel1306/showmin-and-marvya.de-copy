import { useState } from "react";

const makeFaqs = [
    {
      question: "What types of automations do you build in Make?",
      answer:
        "We primarily design automations around lead management, client workflows, and operations—such as routing new enquiries, updating CRM stages, triggering follow-ups, and synchronizing data across tools.",
    },
    {
      question: "Do you only use Make for automation?",
      answer:
        "Make is our primary automation platform, but we also work with tools like Zapier when appropriate. We recommend the best option based on your existing tech stack and goals.",
    },
    {
      question: "Can you improve or repair our existing Make scenarios?",
      answer:
        "Yes. We audit your current Make setup, simplify overly complex flows, implement monitoring and error handling, and realign scenarios with your current processes.",
    },
    {
      question: "Can you help us identify what should be automated?",
      answer:
        "Absolutely. We can run a focused workshop to map your workflows, highlight high-impact automation opportunities, and prioritize what to build first.",
    },
    {
      question: "How long does a typical Make project take?",
      answer:
        "Simple automation flows can be implemented within one to two weeks. More complex projects involving multiple interconnected scenarios usually take several weeks, depending on scope and tool integrations.",
    },
    {
      question: "What is the typical investment for a Make project?",
      answer:
        "Costs vary depending on the number and complexity of scenarios. Smaller projects often fall within the low-to-mid four-figure range (USD or GBP), with detailed estimates provided after understanding your requirements.",
    },
    {
      question: "Do you offer ongoing support for Make?",
      answer:
        "Yes. We provide continued support to maintain, monitor, and expand your Make automations as your systems and processes evolve.",
    },
  ];
  
const MakeflowFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="flex flex-col items-start gap-8 lg:w-[400px] lg:flex-shrink-0 lg:pt-4">
                    <h2 className="section-title text-foreground">
                    Make FAQS
                    </h2>
                    <a
                        href="./get-started"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
                    >
                        Contact us
                    </a>
                </div>
                <div className="flex flex-1 flex-col">
                    {makeFaqs.map((item, index) => (
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

export default MakeflowFAQ;
