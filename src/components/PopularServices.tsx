import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const popularServices = [
  {
    title: "Landing-page design",
    description: "Turn your offer into a high converting page",
  },
  {
    title: "Figma to Webflow development",
    description: "Turn your Figma project into a fast, scalable Webflow site.",
  },
  {
    title: "Technical SEO audit",
    description: "Clear SEO fixes for your website",
  },
  {
    title: "Custom AI interface",
    description: "Design and build of a custom AI interface",
  },
  {
    title: "Website design",
    description: "Clear, modern and consistent UI",
  },
  {
    title: "Plugin updates",
    description: "Plugin and theme updates for WordPress sites",
  },
];

const PopularServices = () => {
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
          <h2 className="text-2xl md:text-3xl font-serif">Popular services</h2>
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
          <a href="#" className="btn-secondary inline-flex items-center gap-2">
            Explore all
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularServices;
