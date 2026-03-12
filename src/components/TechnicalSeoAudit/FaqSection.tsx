import { useState } from "react";
import { Plus, X } from "lucide-react";
import SplitText from "@/components/SplitText";

const faqs = [
    {
      q: "What is included in a Technical SEO audit?",
      a: "We review crawling, indexing, status codes, site structure, internal links, Core Web Vitals, and platform-specific settings for Webflow, Framer, or WordPress to give you a clear view of your technical SEO health.",
    },
    {
      q: "Do you fix issues as part of the audit?",
      a: "The audit focuses on identifying issues and providing clear recommendations. Smaller fixes may be handled during the project, while larger technical changes are usually completed in a follow-up engagement.",
    },
    {
      q: "Do you need access to our analytics and Search Console?",
      a: "Access is helpful because it allows us to connect technical issues with real search performance. If access is not available, we can still run the audit using crawl data and manual analysis.",
    },
    {
      q: "How is this different from a full SEO audit?",
      a: "A Technical SEO audit focuses on how your site is built and how search engines crawl and index it. A full SEO audit also includes keyword research, content analysis, and backlink evaluation.",
    },
    {
      q: "How long does a Technical SEO audit take?",
      a: "Timelines depend on the size and complexity of your site. Smaller marketing websites usually take a few weeks, while larger or content-heavy sites may take longer.",
    },
    {
      q: "Can you work with our developers or agency?",
      a: "Yes. We often collaborate with internal teams or external agencies to help implement recommendations and clarify technical changes.",
    },
    {
      q: "Will this audit guarantee better rankings?",
      a: "No SEO audit can guarantee rankings. Our goal is to remove technical barriers so search engines can properly crawl, understand, and index your website.",
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
              <SplitText text="Technical SEO audit FAQS" delay={55} duration={650} />
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
