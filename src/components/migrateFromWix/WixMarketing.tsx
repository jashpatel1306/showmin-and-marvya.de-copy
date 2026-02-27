import messy from "@/assets/Wix/1.png";
import lead from "@/assets/Wix/2.png";
import teams from "@/assets/Wix/3.png";
import migrations from "@/assets/Wix/4.png";

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

const WixMarketing = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
                <h2 className="section-title text-foreground">
                    When it is time to move on from Wix
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
                    image={lead}
                    title="You’ve outgrown template constraints"
                    description="Your current Wix templates feel restrictive, and you want a stronger brand presence with more flexible layouts and design control."
                />
                <FeatureCard
                    image={teams}
                    title="You want stronger SEO foundations"
                    description="As organic search becomes more important, you need cleaner URL structures, faster-loading pages, and deeper control over how your content is organized."
                />
                <FeatureCard
                    image={migrations}
                    title="Your content library is expanding"
                    description="With more pages and resources added over time, managing everything in Wix is starting to feel cluttered or limiting."
                />
                <FeatureCard
                    image={messy}
                    title="You need a platform that scales with you"
                    description="You’re planning new campaigns, products, or market expansions and want a solution that can grow alongside your business—without requiring another full rebuild in the near future."
                />
            </div>
        </section>
    );
};

export default WixMarketing;
