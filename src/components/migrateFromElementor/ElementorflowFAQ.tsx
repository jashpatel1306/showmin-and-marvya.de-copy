import { useState } from "react";

const ElementorFaqs = [
    {
      question: "Can you repair or optimize our current Elementor site?",
      answer:
        "Yes. Most Elementor engagements begin with a detailed audit and stabilization process. We identify performance bottlenecks, layout inconsistencies, and structural issues—then improve key templates and pages without disrupting the rest of the site.",
    },
    {
      question: "Do you only work with Elementor on WordPress?",
      answer:
        "No. We work with Elementor when it’s still the right fit, and with Gutenberg, ACF, or custom themes when a leaner WordPress setup makes more sense. We also build in Webflow or Framer when WordPress is no longer the best long-term option.",
    },
    {
      question: "Can you rebuild our Elementor site into a lighter setup?",
      answer:
        "Yes. If Elementor is limiting performance or flexibility, we can plan a phased rebuild—either into a streamlined WordPress configuration or into Webflow or Framer—based on your goals and internal capabilities.",
    },
    {
      question: "How much can performance improve on an Elementor site?",
      answer:
        "Improvements depend on the starting point. Cleaning up layouts, optimizing assets, and reducing plugin load can deliver noticeable gains. In some cases, a partial or full rebuild offers the most significant improvement. We benchmark before and after so results are measurable.",
    },
    {
      question: "What is the typical timeline for an Elementor project?",
      answer:
        "Smaller audits, cleanups, or landing page projects can be completed within a few weeks. Larger redesigns or multi-template refactors require more time, depending on scope, page count, and feedback cycles.",
    },
    {
      question: "How much does an Elementor project usually cost?",
      answer:
        "Costs vary based on page count, complexity, and the depth of improvements required. Many Elementor projects fall within the low to mid five-figure range (USD or GBP) after reviewing your site and objectives.",
    },
    {
      question: "Do you offer ongoing support after the initial work?",
      answer:
        "Yes. We can continue supporting new pages, experiments, performance improvements, and long-term planning to ensure your Elementor site evolves rather than stagnates.",
    },
  ];

const ElementorflowFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="flex flex-col items-start gap-8 lg:w-[400px] lg:flex-shrink-0 lg:pt-4">
                    <h2 className="section-title text-foreground">
                    Elementor FAQS
                    </h2>
                    <a
                        href="./get-started"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
                    >
                        Contact us
                    </a>
                </div>
                <div className="flex flex-1 flex-col">
                    {ElementorFaqs.map((item, index) => (
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

export default ElementorflowFAQ;
