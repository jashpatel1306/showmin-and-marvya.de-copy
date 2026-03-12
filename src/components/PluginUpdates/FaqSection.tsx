import { useState } from "react";
import { Plus, X } from "lucide-react";
import SplitText from "@/components/SplitText";

const faqs = [
    {
      q: "Do you only handle plugin updates for WordPress?",
      a: "Yes. This service focuses on WordPress core, plugin, and theme updates. For platforms like Webflow or Framer we provide separate maintenance and development support.",
    },
    {
      q: "Can we keep automatic updates turned on?",
      a: "Sometimes. Minor security releases can safely run automatically, but for critical plugins we usually recommend managed updates to avoid unexpected issues.",
    },
    {
      q: "Will there be downtime during updates?",
      a: "Usually not. Most updates can be applied without taking the site offline. For higher-risk changes we may recommend a quiet maintenance window and will notify you in advance.",
    },
    {
      q: "What happens if an update breaks something?",
      a: "If an update causes issues, we roll back using backups or staging, identify the cause, and recommend the best fix before applying larger changes.",
    },
    {
      q: "Do you manage premium and paid plugins?",
      a: "Yes. As long as license details are available, we manage updates for premium plugins and ensure they remain aligned with your subscriptions.",
    },
    {
      q: "How often should WordPress updates run?",
      a: "It depends on site importance and plugin activity. Many sites follow a monthly update cycle, while security-sensitive sites may require more frequent checks.",
    },
    {
      q: "Can you work with our developers or agency?",
      a: "Yes. We can manage the update process while coordinating with your developers or agency to ensure changes remain safe and aligned with your workflow.",
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
              <SplitText text="Plugin updates FAQS" delay={55} duration={650} />
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
