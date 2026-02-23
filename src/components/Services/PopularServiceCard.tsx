import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type ServiceAccent = "yellow" | "blue" | "green" | "purple" | "coral";

interface PopularServiceCardProps {
  title: string;
  description: string;
  href: string;
  accent: ServiceAccent;
}

const accentColorMap: Record<ServiceAccent, string> = {
  yellow: "hsl(var(--service-yellow))",
  blue: "hsl(var(--service-blue))",
  green: "hsl(var(--service-green))",
  purple: "hsl(var(--service-purple))",
  coral: "hsl(var(--service-coral))",
};

const PopularServiceCard = ({ title, description, href, accent }: PopularServiceCardProps) => {
  const accentColor = accentColorMap[accent];

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
          background: `conic-gradient(from 234deg, transparent 0deg, transparent 240deg, ${accentColor} 240deg, hsl(var(--border)) 540deg, transparent 540deg, transparent 360deg)`,
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

export default PopularServiceCard;
