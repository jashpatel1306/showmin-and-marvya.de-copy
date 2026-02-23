import { motion } from "framer-motion";
import { MapPin, Star, Cookie, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/Company/showmine.png";

interface FooterNavLinkProps {
  label: string;
  href: string;
}

export const FooterNavLink = ({ label, href }: FooterNavLinkProps) => {
  return (
    <Link
      to={href}
      className="flex items-center justify-between px-4 py-3 rounded-lg border border-border 
        text-sm text-foreground transition-all duration-200 
        hover:bg-secondary/50 hover:border-border/80 group"
    >
      <span>{label}</span>
      <ArrowUpRight
        className="w-4 h-4 text-muted-foreground transition-transform duration-200 
          group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
};

type ServiceVariant = "design" | "development" | "seo" | "maintenance" | "copywriting" | "ai";

interface ServiceTagProps {
  label: string;
  href: string;
  variant: ServiceVariant;
}

const variantStyles: Record<ServiceVariant, string> = {
  design: "text-pink-500",
  development: "text-sky-500",
  seo: "text-emerald-500",
  maintenance: "text-amber-500",
  copywriting: "text-violet-500",
  ai: "text-cyan-500",
};

export const ServiceTag = ({ label, href, variant }: ServiceTagProps) => {
  return (
    <div className="flex-1 min-w-[150px]">
      <Link
        to={href}
        className={cn(
          "w-full h-11 flex items-center justify-center rounded-lg border border-border text-sm font-medium text-center",
          "transition-all duration-200 hover:bg-secondary/50 hover:border-border/80",
          variantStyles[variant]
        )}
      >
        {label}
      </Link>
    </div>
  );
};

const Footer = () => {
  const services = [
    { label: "Design", href: "/design", variant: "design" as const },
    { label: "Development", href: "/development", variant: "development" as const },
    { label: "SEO", href: "/seo", variant: "seo" as const },
    { label: "Maintenance", href: "/maintenance", variant: "maintenance" as const },
    { label: "Copywriting", href: "/copywriting", variant: "copywriting" as const },
    { label: "AI & Automation", href: "/ai-automation", variant: "ai" as const },
  ];

  const navLinks = [
    // { label: "Landing", href: "/landing" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    { label: "Get Started", href: "/get-started" },
  ];
  return (
    <footer className="w-full bg-background">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-wrap gap-3">
          {services.map((service) => (
            <ServiceTag
              key={service.label}
              label={service.label}
              href={service.href}
              variant={service.variant}
            />
          ))}
        </div>
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-7">
          {/* Left column - Service tags */}
          <div className="flex flex-wrap gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg">
            <img
              src={logo}
              alt=""
              className="" />
              </div>
              <span className="text-xl font-semibold text-foreground">Showmine</span>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Showmine is a web design and development agency based in the Canada,
                partnering with teams across the India, US, UK, and beyond.
              </p>
            </div>
          </div>

          {/* Right column - Description and nav links */}
          <div className="space-y-6">
            {/* Company description */}


            {/* Navigation links grid */}
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <FooterNavLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © 2026 Showmine Ltd
            </p>

            {/* Reviews */}
            {/* <div className="flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-foreground text-foreground" />
              <span className="text-xs text-muted-foreground">
                Rated 5.0 / 5.0 from 31 Google Reviews -{" "}
                <a
                  href="https://share.google/ljyG3vkBcHEDb77gC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline hover:no-underline transition-all"
                >
                  See reviews
                </a>
              </span>
            </div> */}

            {/* Legal links */}
            <div className="flex items-center gap-4">
              <a
                href="/legal/privacy"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="/legal"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Legal
              </a>
              <button
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Cookie settings"
              >
                <Cookie className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
