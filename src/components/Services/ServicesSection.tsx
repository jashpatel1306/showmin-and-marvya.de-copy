import framerDevImage from "@/assets/Services/framer-development.png";
import technicalSeoImage from "@/assets/Services/technical-seo.png";
import FeaturedServiceCard from "./FeaturedServiceCard";
import PopularServiceCard from "./PopularServiceCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import GuidanceCTA from "./GuidanceCTA";
import AllServicesSection from "./AllServicesSection";

const featuredServices = [
  {
    title: "Framer development",
    description: "Smooth, interactive and easy to maintain",
    image: framerDevImage,
    imageAlt: "Abstract stack of interface frames with Framer logo, representing interactive Framer development.",
    href: "/services/framer-development",
  },
  {
    title: "Technical SEO audit",
    description: "Clear SEO fixes for your website",
    image: technicalSeoImage,
    imageAlt: "Abstract diagnostic panels with central dashboard line, representing technical SEO audit.",
    href: "/services/technical-seo-audit",
  },
];

const popularServices = [
  {
    title: "Landing-page design",
    description: "Turn your offer into a high converting page",
    href: "/landing",
    accent: "yellow" as const,
  },
  {
    title: "Figma to Webflow development",
    description: "Turn your Figma project into a fast, scalable Webflow site.",
    href: "/services/figma-to-webflow-development",
    accent: "blue" as const,
  },
  {
    title: "Technical SEO audit",
    description: "Clear SEO fixes for your website",
    href: "/services/technical-seo-audit",
    accent: "green" as const,
  },
  {
    title: "Custom AI interface",
    description: "Design and build of a custom AI interface",
    href: "/services/custom-ai-interface",
    accent: "purple" as const,
  },
  {
    title: "Website design",
    description: "Clear, modern and consistent UI",
    href: "/services/web-design",
    accent: "yellow" as const,
  },
  {
    title: "Plugin updates",
    description: "Plugin and theme updates for WordPress sites",
    href: "/services/plugin-updates",
    accent: "coral" as const,
  },
];

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1440px] px-8 py-16 md:py-24">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Services
          </h1>
        </section>

        {/* Featured Services */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredServices.map((service) => (
              <FeaturedServiceCard key={service.href} {...service} />
            ))}
          </div>
        </section>

        {/* Popular Services */}
        <section>
          <h2 className="section-title text-foreground mb-8">
            Popular services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularServices.map((service) => (
              <PopularServiceCard key={service.href + service.accent} {...service} />
            ))}
          </div>
        </section>

        {/* Guidance CTA */}
      <AnimatedSection delay={100}>
          <GuidanceCTA />
        </AnimatedSection>

        {/* All Services */}
        <AllServicesSection />
      </div>

      
    </main>
  );
};

export default Services;
