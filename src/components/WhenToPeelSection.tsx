import cardBrand from "@/assets/card-brand.png";
import cardCampaigns from "@/assets/card-campaigns.png";
import cardSeo from "@/assets/card-seo.png";
import cardFlexibility from "@/assets/card-flexibility.png";

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

const WhenToPeelSection = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 md:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight tracking-tight text-foreground max-w-xl">
            When to peel marketing away from your Shopify theme
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

        {/* Cards Grid - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <FeatureCard
            image={cardBrand}
            title="Your brand has outgrown theme templates"
            description="You want more control over layout, storytelling, and visuals than your current Shopify theme allows."
          />
          <FeatureCard
            image={cardCampaigns}
            title="You run regular campaigns"
            description="You are shipping launches and campaigns often and need landing pages and content that can move at that pace."
          />
          <FeatureCard
            image={cardSeo}
            title="You care more about SEO and content"
            description="You want better structures for content, resources, and category pages than a theme-first setup usually provides."
          />
          <FeatureCard
            image={cardFlexibility}
            title="You want flexibility without losing Shopify"
            description="You are not ready to leave Shopify, but want your marketing site to feel more like a custom build than a slightly tweaked theme."
          />
        </div>
      </div>
    </section>
  );
};

export default WhenToPeelSection;
