import messy from "@/assets/Make/1.png";
import lead from "@/assets/Make/2.png";
import teams from "@/assets/Make/3.png";
import migrations from "@/assets/Make/4.png";

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

const MakeMarketing = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="section-title text-foreground">
          When to bring in a Make agency
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
            title="For manual, repetitive tasks"
            description="If your team is copying data between tools, chasing status updates, or manually moving leads through pipeline stages, automation can remove that burden and reduce errors."
          />
          <FeatureCard
            image={lead}
            title="For multi-step funnels"
            description="When leads pass through forms, calls, pipelines, and email sequences, you need consistent, timely follow-up at every stage. Automation ensures nothing is missed as prospects move forward."
          />
          <FeatureCard
            image={teams}
            title="For scaling teams"
            description="As lead volume and client work increase, your processes should scale too. Well-designed automation helps you grow without adding unnecessary administrative overhead."
          />
          <FeatureCard
            image={migrations}
            title="For complex tool ecosystems"
            description="If you rely on multiple platforms, we connect them into a cohesive system—so your tools work together seamlessly instead of operating as disconnected data silos."
          />
      </div>
    </section>
  );
};

export default MakeMarketing;
