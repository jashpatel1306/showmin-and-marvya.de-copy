import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className=" bg-foreground text-primary-foreground">
      {/* <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Ready to build something great?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your goals. Book a free consultation call today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:hello@south.digital"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-foreground rounded-full font-medium text-base hover:bg-primary-foreground/90 transition-colors"
            >
              Book a call
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <a
              href="mailto:hello@south.digital"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 rounded-full font-medium text-base hover:bg-primary-foreground/10 transition-colors"
            >
              Send an email
            </a>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "150+", label: "Projects delivered" },
            { value: "50+", label: "Happy clients" },
            { value: "8+", label: "Years experience" },
            { value: "99%", label: "Client satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div> */}
      <div className="flex items-center justify-center bg-background p-6">
        <div className="w-full max-w-[1240px]">
          <div
            className="relative overflow-hidden rounded-xl"
            style={{
              background: "var(--hero-gradient)",
              boxShadow: "var(--hero-shadow)",
            }}
          >
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
              <video
                src="https://framerusercontent.com/assets/k6ayhLw5j3wA2005RbCfEx1fARw.mp4"
                loop
                autoPlay
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex items-center justify-between px-8 py-6 sm:px-10 sm:py-8">
              <h3 className="text-xl font-semibold leading-tight tracking-tight text-primary-foreground sm:text-2xl md:text-3xl">
                Leading your website to success
              </h3>

              <a
                href="./get-started"
                className="ml-6 inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-105 active:scale-100"
                style={{ boxShadow: "var(--cta-shadow)" }}
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
