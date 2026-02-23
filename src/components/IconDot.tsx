import { LucideIcon, Info } from "lucide-react";
import { useState } from "react";

interface IconDotProps {
  icon: LucideIcon;
  label: string;
  description: string;
  className?: string;
}

const IconDot = ({ icon: Icon, label, description, className = "" }: IconDotProps) => {
  const [hovered, setHovered] = useState(false);
  
    return (
      <div
        className={`relative ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Icon container */}
        <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />
          {/* Info badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full border border-border bg-background flex items-center justify-center cursor-pointer">
            <Info className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground" strokeWidth={2} />
          </div>
        </div>
  
        {/* Hover tooltip card */}
        {hovered && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50 w-[220px] sm:w-[260px] rounded-xl border border-border bg-background p-4 shadow-lg animate-fade-in pointer-events-none">
            <h4 className="font-display text-sm font-bold text-foreground mb-1.5">{label}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          </div>
        )}
      </div>
    );
};

export default IconDot;
