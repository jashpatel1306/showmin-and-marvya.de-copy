import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const designCategory =  [
  { title: "SaaS dashboard design", description: "Information about service Information about service", href: "#" },
  { title: "Brand style guide", description: "Information about service Information about service", href: "#" },
  { title: "Logo design", description: "Information about service Information about service", href: "#" },
  { title: "Landing-page design", description: "Information about service Information about service", href: "#" },
  { title: "Website design", description: "Information about service Information about service", href: "#" },
  { title: "Wireframe architecture", description: "Information about service Information about service", href: "#" },
];

const DesignCategory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="mx-auto max-w-[1240px] px-4 py-12 md:py-20">

          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-3xl md:text-6xl text-center font-serif">Design services</h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {designCategory.map((service, index) => (
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
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default DesignCategory;

