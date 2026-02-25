import { useState } from "react";

const WebflowFaqs = [
    {
      question: "Do you exclusively work with HubSpot?",
      answer:
        "No. While we frequently implement HubSpot, we also work with platforms like GoHighLevel and other lightweight CRMs when they better fit your goals and budget. We recommend the right setup after understanding your needs.",
    },
    {
      question: "Can you improve or repair our current HubSpot setup?",
      answer:
        "Yes. We audit your existing portal, clean up properties and pipelines, and reconnect your website, forms, and tracking so the system feels structured and reliable again.",
    },
    {
      question: "Can you integrate HubSpot with our website and tools?",
      answer:
        "Absolutely. We connect HubSpot to websites built in Webflow, Framer, WordPress, and GoHighLevel, as well as tools like calendars, scheduling apps, and automation platforms.",
    },
    {
      question: "How long does a typical HubSpot project take?",
      answer:
        "Smaller setup or optimization projects can be completed within a few weeks. Larger implementations involving migrations, multiple pipelines, or complex funnels typically require a longer timeline.",
    },
    {
      question: "How much does a HubSpot project usually cost?",
      answer:
        "Costs vary depending on database size, number of pipelines, teams involved, and integrations required. Many HubSpot projects fall within the low to mid five-figure range (USD or GBP).",
    },
    {
      question: "Do you offer ongoing HubSpot support?",
      answer:
        "Yes. We provide continued support for optimizations, new funnels, reporting improvements, and guidance as your team becomes more advanced with HubSpot.",
    },
  ];
const HubSpotflowFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="flex flex-col items-start gap-8 lg:w-[400px] lg:flex-shrink-0 lg:pt-4">
                    <h2 className="section-title text-foreground">
                        HubSpot FAQS
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

export default HubSpotflowFAQ;
