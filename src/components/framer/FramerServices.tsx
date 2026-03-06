import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface PopularServiceCardProps {
    title: string;
    description: string;
    href: string;
    // accent: ServiceAccent;
  }

  const PopularWebflowServiceCard = ({ title, description, href }: PopularServiceCardProps) => {
    // const accentColor = accentColorMap[accent];
  
    return (
      <Link
        to={href}
        className="group relative flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 shadow-[0_3.5px_12px_0_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_8px_24px_0_rgba(0,0,0,0.08)]"
      >
        {/* Conic gradient border effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            padding: "1px",
            mask: "linear-gradient(#fff 0, #fff 0) content-box exclude, linear-gradient(#fff 0, #fff 0)",
            WebkitMask: "linear-gradient(#fff 0, #fff 0) content-box exclude, linear-gradient(#fff 0, #fff 0)",
            filter: "blur(2px) saturate(1.07)",
            background: `conic-gradient(from 234deg, transparent 0deg, transparent 240deg, hsl(var(--border)) 540deg, transparent 540deg, transparent 360deg)`,
          }}
        />
  
        <div className="flex flex-col gap-2 min-w-0">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
  
        <div className="flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </Link>
    );
  };

const popularServices = [
  {
    title: "Landing-page design",
    description: "Turn your offer into a high converting page.",
    href: "/landing",
    accent: "yellow" as const,
  },
  {
    title: "Technical SEO audit",
    description: "Clear SEO fixes for your website",
    href: "/services/figma-to-webflow-development",
    accent: "blue" as const,
  },
  {
    title: "Custom AI interface",
    description: "Design and build of a custom AI interface",
    href: "/services/technical-seo-audit",
    accent: "green" as const,
  },
  {
    title: "Website design",
    description: "Clear, modern and consistent UI",
    href: "/services/custom-ai-interface",
    accent: "purple" as const,
  },
  {
    title: "Website speed improvements",
    description: "Speed up your website & improve stability",
    href: "/services/web-design",
    accent: "yellow" as const,
  },
  {
    title: "Content updates",
    description: "Flexible website content updates for busy teams",
    href: "/services/plugin-updates",
    accent: "coral" as const,
  },
];

const FramerServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 bg-background">
      <h2 className="section-title text-foreground mb-8 text-center">
      Services for Framer sites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularServices.map((service) => (
          <PopularWebflowServiceCard key={service.href + service.accent} {...service} />
        ))}
      </div>

      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a href="/services/category/design" className="btn-secondary inline-flex items-center gap-2">
            Explore all
          </a>
        </motion.div>
    </section>
  );
};

export default FramerServices;
