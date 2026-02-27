import messy from "@/assets/Gohighlevel/1.png";
import lead from "@/assets/Gohighlevel/2.png";
import teams from "@/assets/Gohighlevel/3.png";
import migrations from "@/assets/Gohighlevel/4.png";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard = ({ image, title, description }: FeatureCardProps) => (
  <div className="flex flex-col gap-4">
    <div
      className="rounded-[20px] border border-border overflow-hidden flex items-center justify-center px-8 py-10 md:py-14"
      style={{
        background: "linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)",
        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.1)",
        minHeight: "220px",
      }}
    >
      <img
        src={image}
        alt={title}
        className="w-32 h-32 md:w-44 md:h-44 object-contain"
        loading="lazy"
      />
    </div>
    <div className="space-y-1.5 pt-1">
      <h3 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const GoHighLevelMarketing = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="section-title text-foreground">
          When GoHighLevel is the right choice
          </h2>
          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-white shrink-0 self-start md:self-center"
            style={{
              backgroundColor: "rgb(24, 119, 242)",
              boxShadow:
                "inset 0 6.75px 13.5px 0 rgba(0,0,0,0.08), inset 0 0.5625px 1.125px 0 rgba(255,255,255,0.34), 0 1.125px 2.25px 0 rgba(8,8,8,0.19), 0 4px 4.5px 0 rgba(8,8,8,0.05)",
            }}
          >
            Get started
          </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <FeatureCard
            image={messy}
            title="For lead-driven businesses"
            description="If you rely on ads or outbound to book calls, you need funnels, scheduling, and follow-up working together in one system—so leads move smoothly from first click to conversation."
          />
          <FeatureCard
            image={lead}
            title="For simple, focused websites"
            description="When you don’t need a large, content-heavy site, a streamlined set of pages and funnels inside GoHighLevel can keep things clear and conversion-focused."
          />
          <FeatureCard
            image={teams}
            title="For teams already using GoHighLevel daily"
            description="If your team manages pipelines, conversations, and automations in GoHighLevel every day, it often makes sense for your core website and funnel journeys to live there too."
          />
          <FeatureCard
            image={migrations}
            title="For fast-moving campaigns"
            description="When you regularly adjust offers, launch new funnels, or tweak booking flows, keeping everything in one platform makes updates faster and less disruptive."
          />
      </div>
    </section>
  );
};

export default GoHighLevelMarketing;
