import { useState } from "react";
import { Plus, X } from "lucide-react";
import SplitText from "@/components/SplitText";

const faqs = [
  {
    q: "Can you work inside our existing Webflow project?",
    a: "Yes. We can work inside an existing Webflow project, inherit your current class structure and pick up where a previous build left off. Before we start we do a short audit to understand the naming conventions in use and flag anything that might cause issues.",
  },
  {
    q: "What if our Figma file is not fully finished or consistent?",
    a: "That is common. We will flag gaps during the design review and either work with what exists or pause while your design team fills them in. We document every assumption we make so nothing is a surprise at review time.",
  },
  {
    q: "Do you support complex interactions and animations?",
    a: "Yes. Webflow's native interactions cover most of what Figma prototypes describe. For more complex sequences — parallax, scroll-triggered timelines, custom cursors — we use Webflow's IX2 system or lightweight JavaScript where necessary. We scope interactions clearly so you know what is included.",
  },
  {
    q: "How do you handle content migration and redirects?",
    a: "We export your existing content, map old URLs to new ones and build a redirect file before launch. Critical pages are manually checked. We aim to protect every URL that has earned backlinks or organic traffic.",
  },
  {
    q: "What about multi language setups?",
    a: "Webflow's native localisation feature is available on eligible plans and we can set this up as part of the build. For projects on older plans or with complex translation needs we can integrate Weglot or a similar solution. We scope this during kickoff.",
  },
  {
    q: "Can our team edit pages safely after launch?",
    a: "Yes. That is one of the primary goals of the build. We use the Webflow Editor for content edits and lock structural elements that should not change. We also provide Loom walkthroughs and written notes so your editors know exactly what they can touch.",
  },
  {
    q: "Do you use a specific class naming system?",
    a: "We follow a BEM-inspired convention adapted for Webflow. Global utility classes handle typography and spacing. Component classes are prefixed so it is always clear what belongs to what. We document the system and hand it over with the project.",
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
              <SplitText text="Figma to Webflow development FAQS" delay={55} duration={650} />
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
