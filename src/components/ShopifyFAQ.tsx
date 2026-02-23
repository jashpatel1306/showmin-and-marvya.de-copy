import { useState } from "react";

const faqs = [
  {
    question: "Do we need to migrate everything away from Shopify?",
    answer: "No. In most cases, Shopify continues to manage products and checkout, while marketing pages, content sections, and selected category experiences are rebuilt in Webflow for greater flexibility.",
  },
  {
    question: "Can you replicate our existing branding and visual style?",
    answer: "Yes. We can faithfully translate your current brand identity into Webflow or use the migration as an opportunity to refine and elevate the overall design system for improved consistency.",
  },
  {
    question: "Will the migration affect our SEO or advertising performance?",
    answer: "When managed properly, performance should remain stable. We carefully handle redirects, preserve key URLs, and ensure tracking systems remain intact so search rankings and paid campaigns continue to function smoothly.",
  },
  {
    question: "How long does a typical Shopify-to-Webflow migration take?",
    answer: "Timelines vary depending on the number of pages being migrated and the level of redesign involved. Smaller migrations can be completed within a few weeks, while more complex projects may require additional time.",
  },
  {
    question: "What is the typical investment for a project like this?",
    answer: "Costs depend on the scope, number of templates, integrations, and the amount of new design work required. Many projects fall within the mid four-figure to low five-figure range in USD or GBP.",
  },
  {
    question: "Can you train our team to manage both Shopify and Webflow?",
    answer: "Yes. We provide clear documentation and walkthroughs explaining how responsibilities are divided between the two platforms, enabling your team to confidently manage products, content, and updates.",
  },
  {
    question: "What happens if we later decide to move completely away from Shopify?",
    answer: "Separating the marketing experience into Webflow first makes any future platform transition significantly easier. If you later migrate the commerce layer as well, your front-end foundation will already be established.",
  },
];

const ShopifyFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
          {/* Left column - Title & CTA */}
          <div className="flex flex-col items-start gap-8 lg:w-[400px] lg:flex-shrink-0 lg:pt-4">
            <h2 className="section-title text-foreground">
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
    </section>
  );
};

export default ShopifyFAQ;
