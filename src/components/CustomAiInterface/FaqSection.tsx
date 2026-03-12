import { useState } from "react";
import { Plus, X } from "lucide-react";
import SplitText from "@/components/SplitText";

const faqs = [
    {
      q: "What is a custom AI interface?",
      a: "A custom AI interface is a tool that lets people interact with your content or systems using natural language. It might appear as a help assistant on your website, an internal search tool, or a focused chatbot that handles a specific task.",
    },
    {
      q: "Which AI models and platforms do you use?",
      a: "We select models and platforms based on your needs, existing stack, and comfort level. The real focus is defining the right use case, controlling behavior, and connecting the assistant to reliable content sources.",
    },
    {
      q: "What content can the AI use?",
      a: "The assistant can use any content you choose to make available, such as website copy, help articles, documentation, guides, or structured data. We work with you to define what is in scope and what should remain private.",
    },
    {
      q: "How do you keep the assistant safe and on brand?",
      a: "We define clear guardrails for topics, tone, and behavior. Responses are grounded in approved content, and the system is tested with real examples before launch to ensure safe and consistent interactions.",
    },
    {
      q: "Will this replace our support or sales team?",
      a: "No. The assistant handles common or repetitive questions so your team can focus on more complex or high-value conversations. Sensitive or important requests are always passed to a human.",
    },
    {
      q: "How long does a project usually take?",
      a: "Timelines depend on scope. A focused assistant using existing content may take a few weeks, while more complex interfaces with integrations or multiple use cases may take longer.",
    },
    {
      q: "Can the interface be improved after launch?",
      a: "Yes. We can provide ongoing support to refine behavior, update content sources, add new capabilities, or integrate the assistant with additional tools.",
    },
  ];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1160px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ── Left ── */}
          <div className="lg:w-[340px] xl:w-[500px] flex-shrink-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              <SplitText text="Custom AI interface FAQS" delay={55} duration={650} />
            </h2>
            <a
              href="https://south.digital/get-started?service=Figma+to+Webflow+development"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground bg-blue-500 hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
            >
              Contact us
            </a>
          </div>

          {/* ── Right: accordion ── */}
          <div className="flex-1 min-w-0">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-t border-border">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-foreground leading-snug">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors">
                      {isOpen ? (
                        <X className="w-4 h-4 text-foreground" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4 text-foreground" strokeWidth={2.5} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* bottom border */}
            <div className="border-t border-border" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
