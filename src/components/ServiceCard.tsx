import { motion } from "framer-motion";
import { Suspense } from "react";
import ShaderCanvas from "./ShaderCanvas";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  variant: string;
  href?: string;
}

const ServiceCard = ({ title, subtitle, variant, href = "#" }: ServiceCardProps) => {
  return (
    <motion.a
      href={href}
      className="block flex-shrink-0 w-[310px] h-[350px] relative rounded-xl border border-border bg-card overflow-hidden group"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3.5px 12px 0px",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 rounded-xl border border-border"
        style={{
          background: "linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--background)) 50%, hsl(var(--muted)) 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 8s ease infinite",
        }}
      />
      
      {/* Gradient mask overlay */}
      <div className="relative rounded-xl border border-border overflow-hidden h-[350px]">
        <div
          className="absolute inset-0"
          style={{
            mask: "linear-gradient(0deg, rgb(0,0,0) 48.83%, rgba(0,0,0,0.35) 100%)",
            WebkitMask: "linear-gradient(0deg, rgb(0,0,0) 48.83%, rgba(0,0,0,0.35) 100%)",
            opacity: 0.77,
            transform: "rotate(180deg)",
          }}
        >
          <Suspense fallback={<div className="w-full h-full bg-muted" />}>
            <ShaderCanvas variant={variant} />
          </Suspense>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[90px] z-10">
          <h3 className="text-[28px] font-semibold tracking-tight text-foreground">
            {title}
          </h3>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-4 z-10 px-5 py-3 rounded-xl"
          style={{
            backgroundColor: "hsl(var(--glass-bg))",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <p className="text-sm font-medium text-foreground text-center whitespace-nowrap">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.a>
  );
};
export default ServiceCard;
