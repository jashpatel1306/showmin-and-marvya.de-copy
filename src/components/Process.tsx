import { motion } from "framer-motion";
import { Pencil, Check, Shield, RefreshCw } from "lucide-react";
import { ReactNode } from "react";
import SplitText from "@/components/SplitText";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradientColor: string;
}



export const FeatureCard = ({ title, description, icon, gradientColor }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Icon Container */}
      <div
        className="w-60 h-60 rounded-xl border border-border flex items-center justify-center"
        style={{
          background: `linear-gradient(180deg, hsl(var(--muted)) 0%, ${gradientColor} 100%)`,
        }}
      >
        <div className="w-30 h-30 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {

  const features = [
    {
      title: "Strategic by design",
      description: "Every website decision is backed by research & data.",
      icon: <Pencil className="w-6 h-6 text-service-design" />,
      gradientColor: "hsla(45, 97%, 50%, 0.15)",
    },
    {
      title: "Built for performance",
      description: "Fast, accessible, and optimised for conversions.",
      icon: <Check className="w-6 h-6 text-service-seo" />,
      gradientColor: "hsla(154, 50%, 57%, 0.15)",
    },
    {
      title: "Enterprise reliability",
      description: "Scalable builds, consistent delivery, and stability.",
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      gradientColor: "hsla(300, 43%, 69%, 0.17)",
    },
    {
      title: "Ongoing partnership",
      description: "We plug into your existing teams and workflows.",
      icon: <RefreshCw className="w-6 h-6 text-service-development" />,
      gradientColor: "hsla(202, 64%, 59%, 0.18)",
    },
  ];


  return (
      <section className="my-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title text-foreground">
            <SplitText text="Let's make it happen" delay={55} duration={650} />
            </h2>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradientColor={feature.gradientColor}
              />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Process;
