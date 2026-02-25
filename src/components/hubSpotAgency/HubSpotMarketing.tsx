import messy from "@/assets/HubSpotAgency/messy.avif";
import lead from "@/assets/HubSpotAgency/lead.avif";
import teams from "@/assets/HubSpotAgency/teams.avif";
import migrations from "@/assets/HubSpotAgency/migrations.avif";

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

const HubSpotMarketing = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="section-title text-foreground">
          When to bring in a HubSpot agency
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
            title="For messy or underused HubSpot portals"
            description="You already have HubSpot, but the data feels disorganized, pipelines lack clarity, or your team isn’t fully confident using it day to day. We bring structure, simplify workflows, and make the system easier to trust."
          />
          <FeatureCard
            image={lead}
            title="For lead-driven websites and funnels"
            description="If your growth depends on inbound leads, booked calls, or demo requests, HubSpot should clearly reflect the journey from first interaction to closed deal. We align your site and funnels so every step is properly tracked and visible."
          />
          <FeatureCard
            image={teams}
            title="For teams that need one source of truth"
            description="When sales and marketing rely on different spreadsheets or disconnected reports, decision-making becomes harder. We centralize your data so everyone works from the same clear, accurate view of performance."
          />
          <FeatureCard
            image={migrations}
            title="For CRM migrations into HubSpot"
            description="If you’re moving from another CRM, we help migrate the right data, clean and structure it properly, and connect your website, forms, and workflows so everything works smoothly from day one."
          />
      </div>
    </section>
  );
};

export default HubSpotMarketing;
