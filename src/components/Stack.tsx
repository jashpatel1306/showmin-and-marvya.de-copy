// import { motion } from "framer-motion";

// const stackItems = [
//   {
//     name: "Figma",
//     icon: "🎨",
//     description: "Design",
//     color: "bg-purple-100 dark:bg-purple-900/40",
//   },
//   {
//     name: "Framer",
//     icon: "⚡",
//     description: "Development",
//     color: "bg-blue-100 dark:bg-blue-900/40",
//   },
//   {
//     name: "Webflow",
//     icon: "🌐",
//     description: "Development",
//     color: "bg-indigo-100 dark:bg-indigo-900/40",
//   },
//   {
//     name: "WordPress",
//     icon: "📝",
//     description: "CMS",
//     color: "bg-sky-100 dark:bg-sky-900/40",
//   },
//   {
//     name: "Shopify",
//     icon: "🛒",
//     description: "E-commerce",
//     color: "bg-green-100 dark:bg-green-900/40",
//   },
//   {
//     name: "Make",
//     icon: "🔧",
//     description: "Automation",
//     color: "bg-violet-100 dark:bg-violet-900/40",
//   },
// ];

// const Stack = () => {
//   return (
//     <section id="stack" className="py-20 md:py-32 bg-muted/30">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-2xl md:text-3xl font-serif mb-4">Our stack</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             We use the best tools in the industry to deliver exceptional results for our clients.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {stackItems.map((item, index) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-card rounded-2xl p-6 text-center border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300 cursor-pointer group"
//             >
//               <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform duration-300`}>
//                 {item.icon}
//               </div>
//               <h3 className="font-semibold mb-1">{item.name}</h3>
//               <p className="text-muted-foreground text-sm">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stack;

import { motion } from "framer-motion";
import { Pencil, Check, Shield, RefreshCw } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradientColor: string;
}

interface TechStackCardProps {
  name: string;
  logoUrl: string;
  logoAlt: string;
  href: string;
}

export const FeatureCard = ({ title, description, icon, gradientColor }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Icon Container */}
      <div
        className="w-20 h-20 rounded-xl border border-border flex items-center justify-center"
        style={{
          background: `linear-gradient(180deg, hsl(var(--muted)) 0%, ${gradientColor} 100%)`,
        }}
      >
        <div className="w-12 h-12 flex items-center justify-center">
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

export const TechStackCard = ({ name, logoUrl, logoAlt, href }: TechStackCardProps) => {
  return (
    <a
      href={href}
      className="block rounded-xl border border-border bg-gradient-to-b from-transparent to-muted/50 hover:to-muted transition-all duration-300 group"
    >
      <div className="p-6 flex items-center justify-center">
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={logoUrl}
            alt={logoAlt}
            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="border-t border-border px-4 py-3">
        <p className="text-sm font-medium text-foreground text-center">{name}</p>
      </div>
    </a>
  );
};



const Stack = () => {

  const techStack = [
    {
      name: "Webflow",
      logoUrl: "https://framerusercontent.com/images/EN8DKbXvlTDjkkycAxucWV0MGu0.svg",
      logoAlt: "Webflow logo",
      href: "./webflow-agency",
    },
    {
      name: "Framer",
      logoUrl: "https://framerusercontent.com/images/erQVobGVFVG48u0pk5nhWEk.svg",
      logoAlt: "Framer logo",
      href: "./framer-agency",
    },
    {
      name: "Figma",
      logoUrl: "https://framerusercontent.com/images/QJeOyFsAINyEooCkrGJZocdpyws.svg",
      logoAlt: "Figma logo",
      href: "./figma-agency",
    },
    {
      name: "Shopify",
      logoUrl: "https://framerusercontent.com/images/WawXoAkLznIt1qE3lnbA4P0rT4E.svg",
      logoAlt: "Shopify logo",
      href: "./migrate-from-shopify",
    },
  ];

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
    <div>
    <section className="py-16 md:py-24 px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Tech Cards Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Column 1 - slight upward offset on desktop */}
              <div className="space-y-4 lg:translate-y-8">
                <TechStackCard {...techStack[0]} />
                <TechStackCard {...techStack[1]} />
              </div>
              {/* Column 2 - slight downward offset on desktop */}
              <div className="space-y-4 lg:-translate-y-8">
                <TechStackCard {...techStack[2]} />
                <TechStackCard {...techStack[3]} />
              </div>
            </div>
          </div>
          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="section-title text-foreground mb-6">
              Fluent with your stack
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We use industry-leading platforms including Webflow, Figma, Framer, and WordPress to design, build, and improve websites with confidence. These are tools we work with every day, and we are proud of the high-quality sites and experiences we create with them.
            </p>
          </div>
        </div>
      </div>

     
    </section>

<section className="py-16 md:py-24 px-6 md:px-8 lg:px-12">
<div className="max-w-6xl mx-auto">
  {/* Section Heading */}
  <div className="text-center mb-12 md:mb-16">
    <h2 className="section-title text-foreground">
      Let's make it happen
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

</div>
  );
};

export default Stack;
