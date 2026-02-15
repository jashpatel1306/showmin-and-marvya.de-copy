import { useState } from "react";

const faqs = [
  {
    question: "Do we have to move everything off Shopify?",
    answer: "No. In most projects we keep Shopify for products and checkout and move marketing pages, content, and some category pages into Webflow.",
  },
  {
    question: "Can you match our current brand and visuals?",
    answer: "Yes. We can either translate your existing look into Webflow or use the migration as a chance to sharpen your brand and page designs.",
  },
  {
    question: "Will this hurt our SEO or paid campaigns?",
    answer: "Handled correctly, it should not. We plan redirects, update key URLs and tracking, and keep important content aligned so search and ads keep working.",
  },
  {
    question: "How long does a Shopify to Webflow project take?",
    answer: "It depends on how many pages we are moving and how much redesign is involved. Smaller projects can launch in a few weeks; larger ones usually take longer.",
  },
  {
    question: "What does a project like this cost?",
    answer: "Pricing depends on scope, number of templates, and how much new design work is needed. Many sit in the mid four to low five figures in USD or GBP.",
  },
  {
    question: "Can you help our team manage two platforms?",
    answer: "Yes. We document how content and products are split between Webflow and Shopify and show your team how to handle updates day to day.",
  },
  {
    question: "What if we later decide to leave Shopify completely?",
    answer: "Splitting marketing into Webflow first makes any future move easier. If you later move commerce as well, you already have a strong front-end in place.",
  },
];

const ShopifyFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left column - Title & CTA */}
          <div className="flex flex-col items-start gap-8 lg:w-[320px] lg:flex-shrink-0 lg:pt-4">
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Shopify FAQS
            </h2>
            <a
              href="./get-started"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] transition-opacity hover:opacity-90"
            >
              Contact us
            </a>
          </div>

          {/* Right column - FAQ list */}
          <div className="flex flex-1 flex-col">
            {faqs.map((item, index) => (
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
      </div>
    </section>
  );
};

export default ShopifyFAQ;
