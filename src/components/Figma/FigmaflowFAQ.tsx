import { useState } from "react";

const FigmaFaqs = [
    {
      question: "Do you only use Figma for design work?",
      answer:
        "Figma is our primary tool for UI and layout design. From there, we move into building the project in Webflow, Framer, or custom code depending on what best fits your needs.",
    },
    {
      question: "Can you organize or improve our existing Figma files?",
      answer:
        "Yes. We can review your current files, reorganize layers and pages, introduce reusable components and styles, and turn unstructured designs into a clean, maintainable system.",
    },
    {
      question: "Can you help us create a design system in Figma?",
      answer:
        "Yes. We can build a component library, define styles, and provide simple guidelines so your team has a lightweight design system to design and scale from.",
    },
    {
      question: "How does the handoff to developers work?",
      answer:
        "We prepare development-ready Figma files with clear components, spacing, and interaction states. We can collaborate directly with your development team or handle the implementation ourselves.",
    },
    {
      question: "Do you work with both product and marketing teams?",
      answer:
        "Yes. We design for marketing websites, landing pages, and product interfaces, helping maintain a consistent visual language across both areas.",
    },
    {
      question: "What is the typical cost of a Figma project?",
      answer:
        "Pricing depends on the scope—such as the number of pages, flows, and components involved. Many Figma projects start in the low five figures (USD or GBP), with detailed estimates after we understand your requirements.",
    },
    {
      question: "Can you continue supporting us after the initial Figma project?",
      answer:
        "Yes. We offer ongoing design support, help design new features, and extend your design system as your product and marketing evolve.",
    },
  ];

const FigmaflowFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="flex flex-col items-start gap-8 lg:w-[400px] lg:flex-shrink-0 lg:pt-4">
                    <h2 className="section-title text-foreground">
                    Figma FAQS
                    </h2>
                    <a
                        href="./get-started"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
                    >
                        Contact us
                    </a>
                </div>
                <div className="flex flex-1 flex-col">
                    {FigmaFaqs.map((item, index) => (
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

export default FigmaflowFAQ;
