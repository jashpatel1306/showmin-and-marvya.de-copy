import { useState } from "react";

const FramerFaqs = [
    {
      question: "Is Framer suitable for SEO?",
      answer:
        "Yes. When configured properly, Framer sites can perform well in search. We set up clear page structures, meta data, content hierarchy, and performance optimizations to give your key pages the best chance to rank.",
    },
    {
      question: "What types of projects do you typically build with Framer?",
      answer:
        "We mainly use Framer for marketing websites and landing pages—such as SaaS sites, product launch pages, waitlists, and focused lead generation pages for services.",
    },
    {
      question: "How does Framer compare to Webflow or WordPress?",
      answer:
        "Framer is excellent for visually rich marketing sites that benefit from motion and rapid iteration. Webflow often suits larger content-driven sites, while WordPress is better for complex publishing workflows. We recommend the right platform after understanding your goals.",
    },
    {
      question: "Can our team edit content in Framer after launch?",
      answer:
        "Yes. We structure pages so your team can safely update text, images, and key sections without affecting the layout or interactions.",
    },
    {
      question: "What is the typical timeline for a Framer project?",
      answer:
        "Smaller landing pages can launch within a few weeks. Full marketing websites typically take around 4–8 weeks depending on page count, complexity, and feedback cycles.",
    },
    {
      question: "How much does a Framer project usually cost?",
      answer:
        "Pricing depends on the size and complexity of the project. As a general guide, Framer projects often start in the low five figures (USD or GBP), with a detailed estimate once we understand your requirements.",
    },
    {
      question: "Can you integrate Framer with our forms and analytics tools?",
      answer:
        "Yes. We frequently connect Framer sites with tools like HubSpot, ActiveCampaign, Stripe, and analytics platforms so you can track performance and manage leads effectively.",
    },
  ];

const FramerflowFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                <div className="flex flex-col items-start gap-8 lg:w-[400px] lg:flex-shrink-0 lg:pt-4">
                    <h2 className="section-title text-foreground">
                    Framer FAQS
                    </h2>
                    <a
                        href="./get-started"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
                    >
                        Contact us
                    </a>
                </div>
                <div className="flex flex-1 flex-col">
                    {FramerFaqs.map((item, index) => (
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

export default FramerflowFAQ;
