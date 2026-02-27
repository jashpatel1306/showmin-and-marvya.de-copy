import messy from "@/assets/Ga4/1.png";
import lead from "@/assets/Ga4/2.png";
import teams from "@/assets/Ga4/3.webp";
import migrations from "@/assets/Ga4/4.png";

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

const Ga4Marketing = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="section-title text-foreground">
          When to bring in a Google Analytics agency
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
            title="For messy GA4 setups"
            description="You’ve inherited a GA4 property filled with duplicate events, unclear conversions, or data that doesn’t align with other platforms. We clean up the structure so your numbers become consistent and trustworthy."
          />
          <FeatureCard
            image={lead}
            title="For new sites and platform migrations"
            description="If you’re launching a new website or replatforming, we ensure GA4, Tag Manager, and key event tracking are configured correctly from the start—so you’re not fixing data issues later."
          />
          <FeatureCard
            image={teams}
            title="For performance-focused teams"
            description="When growth depends on organic and paid traffic, you need reporting that highlights meaningful outcomes—like conversions and revenue—not just surface-level pageview metrics."
          />
          <FeatureCard
            image={migrations}
            title="For multi-channel funnels"
            description="If your leads move between landing pages, forms, calls, and your CRM, we create a connected tracking setup so you see one clear journey instead of fragmented data across tools."
          />
      </div>
    </section>
  );
};

export default Ga4Marketing;
