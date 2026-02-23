import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const popularServices = [
    {
      title: "Figma to Webflow Development",
      description: "Transform your Figma designs into a high-performance, scalable Webflow website built for speed and flexibility.",
    },
    {
      title: "Website Design",
      description: "Modern, clean, and consistent UI design focused on usability, clarity, and brand alignment.",
    },
    {
      title: "Sales Automation",
      description: "Automate lead capture, routing, and follow-ups to ensure every opportunity is tracked and nurtured effectively.",
    },
    {
      title: "Website Copywriting",
      description: "Strategic, conversion-focused copy for full websites or key landing pages that clearly communicate your value.",
    },
    {
      title: "Wireframe Architecture",
      description: "Structured site maps, user journeys, and wireframes that create a strong foundation for design and development.",
    },
    {
      title: "Framer Development",
      description: "Interactive, performance-driven Framer builds that are visually engaging and easy to manage.",
    },
  ];
  

const LandingRecentDesign = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Popular services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularServices.map((service, index) => (
            <motion.a
              key={service.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg flex items-start justify-between gap-4"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a href="/services" className="btn-secondary inline-flex items-center gap-2">
            Explore all
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingRecentDesign;
