import { useState, useEffect } from "react";
import { Search, ArrowUpRight, Flame, Code, Bot, SearchCheck, Wrench, PenTool } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  accent: string;
}

const categories = [
  { id: "design", label: "Design", icon: Flame, accentColor: "hsl(var(--service-yellow))" },
  { id: "development", label: "Development", icon: Code, accentColor: "hsl(var(--service-blue))" },
  { id: "seo", label: "SEO", icon: SearchCheck, accentColor: "hsl(var(--service-green))" },
  { id: "maintenance", label: "Maintenance", icon: Wrench, accentColor: "hsl(var(--service-coral))" },
  { id: "copywriting", label: "Copywriting", icon: PenTool, accentColor: "hsl(var(--service-teal))" },
  { id: "automation", label: "AI / Automation", icon: Bot, accentColor: "hsl(var(--service-purple))" },
];

const serviceGroups = [
  {
    id: "design",
    heading: "Design Services",
    subtitle: "Purpose-driven, modern visual experiences",
    accent: "hsl(var(--service-yellow))",
    services: [
      { title: "SaaS Dashboard Design", description: "Transform complex data and workflows into intuitive, user-friendly interfaces.", href: "/services/saas-dashboard-design", accent: "hsl(var(--service-yellow))" },
      { title: "Brand Style Guide", description: "Build a structured visual system that keeps your brand consistent across every touchpoint.", href: "/services/brand-style-guide", accent: "hsl(var(--service-yellow))" },
      { title: "Logo Design", description: "Distinctive, scalable logo systems designed for long-term brand flexibility.", href: "/services/logo-design", accent: "hsl(var(--service-yellow))" },
      { title: "Landing Page Design", description: "High-converting landing pages built around a single, focused conversion goal.", href: "/services/landing-page-design", accent: "hsl(var(--service-yellow))" },
      { title: "Website Design", description: "Clean, modern UI systems that balance usability, clarity, and brand identity.", href: "/services/website-design", accent: "hsl(var(--service-yellow))" },
      { title: "Wireframe Architecture", description: "Strategic site maps, user flows, and wireframes that create a strong project foundation.", href: "/services/wireframe-architecture", accent: "hsl(var(--service-yellow))" },
    ],
  },
  {
    id: "development",
    heading: "Development Services",
    subtitle: "Fast, scalable, and reliable builds",
    accent: "hsl(var(--service-blue))",
    services: [
      { title: "Framer Development", description: "Interactive, high-performance Framer builds that are easy to maintain and scale.", href: "/services/framer-development", accent: "hsl(var(--service-blue))" },
      { title: "WordPress Development", description: "Secure, lightweight WordPress development optimized for performance and stability.", href: "/services/wordpress-development", accent: "hsl(var(--service-blue))" },
      { title: "CMS Development", description: "Well-structured CMS architecture that simplifies content management and publishing.", href: "/services/cms-development", accent: "hsl(var(--service-blue))" },
      { title: "Custom API Integration", description: "Seamless integrations connecting CRMs, marketing platforms, and internal systems.", href: "/services/custom-api-integration", accent: "hsl(var(--service-blue))" },
      { title: "Figma to Webflow Development", description: "Convert Figma designs into fast, scalable, pixel-accurate Webflow builds.", href: "/services/figma-to-webflow-development", accent: "hsl(var(--service-blue))" },
      { title: "Core Web Vitals Optimization", description: "Performance improvements that enhance speed, stability, and search visibility.", href: "/services/core-web-vitals-optimization", accent: "hsl(var(--service-blue))" },
    ],
  },
  {
    id: "seo",
    heading: "SEO Services",
    subtitle: "Search visibility and sustainable growth",
    accent: "hsl(var(--service-green))",
    services: [
      { title: "Technical SEO Audit", description: "Comprehensive audits identifying technical issues and prioritized SEO improvements.", href: "/services/technical-seo-audit", accent: "hsl(var(--service-green))" },
      { title: "Keyword Mapping", description: "Align real search intent with the right pages and structured content journeys.", href: "/services/keyword-mapping", accent: "hsl(var(--service-green))" },
      { title: "Content Audit", description: "Evaluate, optimize, and expand content to strengthen organic performance.", href: "/services/content-audit", accent: "hsl(var(--service-green))" },
      { title: "Schema Markup Implementation", description: "Structured data implementation across key pages to improve search understanding.", href: "/services/schema-markup", accent: "hsl(var(--service-green))" },
      { title: "Backlink Analysis & Strategy", description: "Evaluate current link profiles and identify new authority-building opportunities.", href: "/services/backlink-strategy", accent: "hsl(var(--service-green))" },
      { title: "Local SEO Setup", description: "Optimize local presence, business listings, and location-based search performance.", href: "/services/local-seo-setup", accent: "hsl(var(--service-green))" },
    ],
  },
  {
    id: "maintenance",
    heading: "Maintenance Services",
    subtitle: "Ongoing support, updates, and reliability",
    accent: "hsl(var(--service-coral))",
    services: [
      { title: "Plugin & Theme Updates", description: "Regular updates to keep WordPress plugins and themes secure and stable.", href: "/services/plugin-updates", accent: "hsl(var(--service-coral))" },
      { title: "WordPress Bug Fixes", description: "Rapid troubleshooting and technical fixes to keep your site running smoothly.", href: "/services/wordpress-bug-fixes", accent: "hsl(var(--service-coral))" },
      { title: "Website Speed Improvements", description: "Continuous performance tuning to ensure fast load times and smooth experiences.", href: "/services/website-speed-improvements", accent: "hsl(var(--service-coral))" },
      { title: "Backup Management", description: "Automated backup systems and monitoring to protect your website data.", href: "/services/backup-management", accent: "hsl(var(--service-coral))" },
      { title: "Security Patching", description: "Ongoing security updates and vulnerability management for long-term protection.", href: "/services/security-patching", accent: "hsl(var(--service-coral))" },
      { title: "Content Updates", description: "Flexible website content updates handled quickly for busy teams.", href: "/services/content-updates", accent: "hsl(var(--service-coral))" },
    ],
  },
  {
    id: "copywriting",
    heading: "Copywriting Services",
    subtitle: "Strategic messaging that informs and converts",
    accent: "hsl(var(--service-teal))",
    services: [
      { title: "Case Study Writing", description: "Turn real client successes into persuasive, outcome-driven stories.", href: "/services/case-study-writing", accent: "hsl(var(--service-teal))" },
      { title: "Ghostwriting", description: "Professional ghostwriting support for founders, executives, and teams.", href: "/services/ghostwriting", accent: "hsl(var(--service-teal))" },
      { title: "Email Sequence Copywriting", description: "Conversion-focused email journeys designed to nurture and convert audiences.", href: "/services/email-sequence-copywriting", accent: "hsl(var(--service-teal))" },
      { title: "Blog Article Writing", description: "SEO-driven blog content designed to attract, educate, and grow organic traffic.", href: "/services/blog-article-writing", accent: "hsl(var(--service-teal))" },
      { title: "Landing Page Copywriting", description: "Focused messaging that presents your offer clearly and drives action.", href: "/services/landing-page-copywriting", accent: "hsl(var(--service-teal))" },
      { title: "Website Copywriting", description: "Complete website messaging or key page rewrites aligned with brand voice.", href: "/services/website-copywriting", accent: "hsl(var(--service-teal))" },
    ],
  },
  {
    id: "automation",
    heading: "AI & Automation Services",
    subtitle: "Smarter systems and automated growth workflows",
    accent: "hsl(var(--service-purple))",
    services: [
      { title: "Sales Automation", description: "Automated lead capture, routing, and follow-up systems that improve conversion flow.", href: "/services/sales-automation", accent: "hsl(var(--service-purple))" },
      { title: "Email Automation", description: "Structured email automation journeys designed to educate, nurture, and convert.", href: "/services/email-automation", accent: "hsl(var(--service-purple))" },
      { title: "Zapier Automation Setup", description: "Custom Zapier workflows connecting apps and eliminating manual processes.", href: "/services/zapier-automation", accent: "hsl(var(--service-purple))" },
      { title: "Custom AI Interface", description: "Design and development of tailored AI-powered tools and user interfaces.", href: "/services/custom-ai-interface", accent: "hsl(var(--service-purple))" },
      { title: "AI Content Workflow Setup", description: "Strategy and implementation of AI-assisted content production systems.", href: "/services/ai-content-workflow", accent: "hsl(var(--service-purple))" },
      { title: "Chatbot Setup", description: "Conversational chatbots that answer questions, qualify leads, and capture inquiries.", href: "/services/chatbot-setup", accent: "hsl(var(--service-purple))" },
    ],
  },
];


const ServiceCard = ({ title, description, href, accent }: ServiceItem) => (
  <a
    href={href}
    className="group relative flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 shadow-[0_3.5px_12px_0_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_8px_24px_0_rgba(0,0,0,0.08)]"
  >
    <div
      className="pointer-events-none absolute inset-0 rounded-lg"
      style={{
        padding: "1px",
        mask: "linear-gradient(#fff 0, #fff 0) content-box exclude, linear-gradient(#fff 0, #fff 0)",
        WebkitMask: "linear-gradient(#fff 0, #fff 0) content-box exclude, linear-gradient(#fff 0, #fff 0)",
        filter: "blur(2px) saturate(1.07)",
        background: `conic-gradient(from 330.6deg, transparent 0deg, transparent 240deg, ${accent} 240deg, hsl(var(--border)) 540deg, transparent 540deg, transparent 360deg)`,
      }}
    />
    <div className="flex flex-col gap-2 min-w-0">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    {/* <div className="flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
      <ArrowUpRight className="w-5 h-5" />  
    </div> */}
  </a>
);

const AllServicesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState(serviceGroups[0]?.id || "");
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    serviceGroups.forEach((group) => {
      const el = document.getElementById(group.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(group.id);
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const filteredGroups = serviceGroups
    .map((group) => ({
      ...group,
      services: searchQuery
        ? group.services.filter(
            (s) =>
              s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : group.services,
    }))
    .filter((group) => group.services.length > 0);

  return (
    <section
      ref={ref}
      className={`mt-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Header with search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="section-title text-foreground">
          All services
        </h2>
        <div className="relative flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 w-full sm:w-72">
          <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            placeholder="Search for a service…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar nav - sticky */}
          <nav className="hidden lg:flex flex-col gap-8 lg:w-44 flex-shrink-0 sticky top-8 self-start">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isHighlighted = activeSection === cat.id;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex items-center gap-2.5 text-sm font-semibold transition-all duration-300 ${
                    isHighlighted ? "opacity-100" : "opacity-40 grayscale"
                  } hover:opacity-100`}
                >
                  <Icon
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: cat.accentColor }}
                  />
                  <span className="text-muted-foreground">{cat.label}</span>
                </a>
              );
            })}
          </nav>

          {/* All service groups stacked vertically */}
          <div className="flex-1 flex flex-col gap-16">
            {filteredGroups.map((group) => (
              <div key={group.id} id={group.id}>
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-foreground">{group.heading}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{group.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.services.map((service) => (
                    <ServiceCard key={service.href} {...service} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;
