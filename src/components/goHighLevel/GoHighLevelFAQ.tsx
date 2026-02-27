import { useState } from "react";

const goHighLevelFaqs = [
    {
      question: "Do you exclusively build in GoHighLevel?",
      answer:
        "No. We use GoHighLevel when it aligns with your goals, and choose platforms like Webflow or Framer when a more flexible marketing site is a better fit. We recommend the right combination after understanding your needs.",
    },
    {
      question: "Can you optimize our existing GoHighLevel funnels?",
      answer:
        "Yes. We audit your current funnels and pages, improve structure and messaging, and ensure they connect cleanly with your pipelines, calendars, and automations.",
    },
    {
      question: "Can you migrate our website or funnels into GoHighLevel?",
      answer:
        "Yes. We can rebuild key pages and funnels inside GoHighLevel, or help decide which parts should remain on your main site and which should move into the platform.",
    },
    {
      question: "How is tracking handled for GoHighLevel funnels?",
      answer:
        "We configure tracking using tools like Google Analytics, Google Tag Manager, and ad platform pixels so you have clear visibility into funnel performance.",
    },
    {
      question: "What is the typical timeline for a GoHighLevel project?",
      answer:
        "Smaller funnel builds can launch within a few weeks. Full website and funnel setups in GoHighLevel typically take longer, depending on scope and feedback cycles.",
    },
    {
      question: "What does a GoHighLevel project usually cost?",
      answer:
        "Costs vary based on the number of funnels, pages, and automations required. Smaller projects often fall within the low-to-mid four-figure range (USD or GBP), with detailed estimates provided after reviewing your setup.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. We provide continued support to refine funnels, launch new campaigns, and keep your GoHighLevel environment organized and performing well.",
    },
  ];

const GoHighLevelFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="flex flex-col items-start gap-8 lg:w-[500px] lg:flex-shrink-0 lg:pt-4">
                    <h2 className="section-title text-foreground">
                        GoHighLevel FAQS
                    </h2>
                    <a
                        href="./get-started"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
                    >
                        Contact us
                    </a>
                </div>
                <div className="flex flex-1 flex-col">
                    {goHighLevelFaqs.map((item, index) => (
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

export default GoHighLevelFAQ;
