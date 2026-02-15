import { LucideIcon } from "lucide-react";

interface IconDotProps {
  icon: LucideIcon;
  className?: string;
}

const IconDot = ({ icon: Icon, className = "" }: IconDotProps) => {
  return (
    <div
      className={`relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-secondary border border-border shadow-sm transition-transform hover:scale-110 ${className}`}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" strokeWidth={1.5} />
      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent border-2 border-background" />
    </div>
  );
};

export default IconDot;
