import { useState } from "react";

const ga4FAQ = [
    {
      question: "Do you work exclusively with GA4?",
      answer:
        "Our primary focus is Google Analytics 4, as it’s the current standard for Google Analytics. We also implement and optimize Google Tag Manager, Google Search Console, and Looker Studio alongside GA4 to create a complete measurement setup.",
    },
    {
      question: "Can you repair or improve our existing GA4 setup?",
      answer:
        "Yes. We audit your current GA4 property, remove duplicate or unused events, clarify conversion tracking, and restructure your setup so the data becomes clear and reliable.",
    },
    {
      question: "Can you help with GA4 migrations?",
      answer:
        "Absolutely. Whether you migrated from Universal Analytics or another analytics platform, we review your implementation, address gaps, and ensure GA4 tracks the metrics that truly matter to your business.",
    },
    {
      question: "Do you implement tracking through Google Tag Manager?",
      answer:
        "In most cases, yes. Using Google Tag Manager keeps your tracking flexible, scalable, and easier to update without frequent code changes on your website.",
    },
    {
      question: "Can you connect GA4 with our CRM and advertising platforms?",
      answer:
        "Yes. We help configure conversion tracking for Google Ads and other ad platforms, and where appropriate, integrate analytics data with your CRM to provide a clearer view of the full customer journey.",
    },
    {
      question: "How long does a typical Google Analytics project take?",
      answer:
        "Smaller GA4 setup or cleanup projects can be completed within a few weeks. More complex websites, funnels, or multi-property implementations typically require 4–6 weeks depending on scope.",
    },
    {
      question: "What is the typical investment for a Google Analytics project?",
      answer:
        "Costs depend on the complexity of your current setup and tracking requirements. Smaller projects often fall within the low-to-mid four-figure range (USD or GBP), with detailed estimates provided after reviewing your site and goals.",
    },
  ];

const Ga4FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="flex flex-col items-start gap-8 lg:w-[600px] lg:flex-shrink-0 lg:pt-4">
                    <h2 className="section-title text-foreground">
                    Google Analytics FAQS
                    </h2>
                    <a
                        href="./get-started"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
                    >
                        Contact us
                    </a>
                </div>
                <div className="flex flex-1 flex-col">
                    {ga4FAQ.map((item, index) => (
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

export default Ga4FAQ;
