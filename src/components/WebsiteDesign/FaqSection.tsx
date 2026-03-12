import { useState } from "react";
import { Plus, X } from "lucide-react";
import SplitText from "@/components/SplitText";

const faqs = [
    {
      q: "Do you design in Figma or another tool?",
      a: "We primarily design in Figma because it works well for component-based systems, collaboration, and smooth developer handoff. If your team uses another tool, we can usually provide suitable exports.",
    },
    {
      q: "Can you work with our existing brand guidelines?",
      a: "Yes. We can follow your current brand guidelines, refine them slightly for digital use, or create a lightweight UI system if your brand documentation is minimal.",
    },
    {
      q: "How many pages are included in a typical design project?",
      a: "Most projects focus on core templates such as home, service pages, pricing, resources, article pages, and contact. During discovery we define exactly which pages and templates are included.",
    },
    {
      q: "Can you redesign our current site without rewriting all content?",
      a: "Yes. We can improve the structure and layouts while keeping most of your existing content, and highlight where small copy changes could improve clarity or conversions.",
    },
    {
      q: "Do you design with SEO in mind?",
      a: "Yes. We consider SEO through clear heading hierarchy, logical content structure, internal linking opportunities, and CMS-friendly layouts.",
    },
    {
      q: "How closely do you work with developers?",
      a: "Very closely. If we build the site, design and development happen together. If you have your own developers, we collaborate during planning and handoff to ensure smooth implementation.",
    },
    {
      q: "Can you support design updates after launch?",
      a: "Yes. Many clients continue with ongoing design support for new pages, layout improvements, campaign landing pages, and updates based on performance insights.",
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
              <SplitText text="Website design FAQS" delay={55} duration={650} />
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
