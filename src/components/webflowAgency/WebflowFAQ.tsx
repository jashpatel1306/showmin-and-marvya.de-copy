import { useState } from "react";

const WebflowFaqs = [
  {
    question: "Is Webflow a strong platform for SEO?",
    answer: "Yes. Webflow provides full control over meta titles, descriptions, headings, alt text, and clean semantic HTML. We also structure URLs properly, implement schema where relevant, and optimize Core Web Vitals and performance to give your site a solid technical SEO foundation.",
  },
  {
    question: "Can our team update content without affecting the design?",
    answer: "Absolutely. We configure Webflow so editors have access only to the content they need to manage. Your team can safely update text, images, blog posts, and case studies while the underlying design system and components remain protected.",
  },
  {
    question: "Do you handle both new Webflow builds and improvements to existing sites?",
    answer: "Yes. We design and develop new Webflow websites from the ground up, and we also refine existing builds by improving structure, adding new sections, enhancing performance, and strengthening content strategy.",
  },
  {
    question: "Can you migrate our current website to Webflow?",
    answer: "Yes. We frequently migrate websites from platforms like WordPress and other builders into Webflow. This includes mapping templates, moving content into CMS collections, planning redirects, and preserving search visibility wherever possible.",
  },
  {
    question: "What is the typical timeline for a Webflow project?",
    answer: "Smaller sites or dedicated landing pages can launch within a few weeks. Larger marketing websites generally take between 6–10 weeks, depending on scope, integrations, complexity, and feedback turnaround.",
  },
  {
    question: "How much does a Webflow project usually cost?",
    answer: "Investment depends on project size and technical requirements. Most Webflow projects begin in the low five-figure range (USD or GBP), with detailed pricing provided once we understand your goals and integrations.",
  },
  {
    question: "Can Webflow integrate with our CRM and other marketing tools?",
    answer: "Yes. We connect Webflow forms and user actions to platforms like HubSpot, ActiveCampaign, Make, Zapier, and analytics tools, ensuring leads and performance data flow seamlessly into your existing systems.",
  },
];

const WebflowFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
        <div className="flex flex-col items-start gap-8 lg:w-[400px] lg:flex-shrink-0 lg:pt-4">
            <h2 className="section-title text-foreground">
              Webflow FAQS
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

export default WebflowFAQ;
