import { motion } from "framer-motion";
import purposeShowcase from "@/assets/Development/imgi_180_LMf9z2RaYu3sn3bljYFk0u4O8.png";

const features = [
    {
      title: "Make a strong first impression",
      description:
        "Fast-loading pages, sharp visuals, and responsive layouts that feel polished on every device.",
    },
    {
      title: "Solid technical foundations",
      description:
        "Clean code and modern standards that support accessibility, SEO, performance, and security.",
    },
    {
      title: "Easy to evolve over time",
      description:
        "A well-organized structure that your team can understand and developers can extend without major rewrites.",
    },
  ];
const PurposeSection = () => (
    <section className="mx-auto max-w-[1240px] px-4 py-7 md:py-12">
        {/* Heading row */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-foreground lg:leading-[1.15]"
            >
                A trusted
                <br />
                development team
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-md text-base md:text-lg leading-relaxed text-muted-foreground lg:text-right"
            >
                We focus on semantic markup, sensible class systems, and reusable components so your website looks sharp today and stays maintainable as it grows.
            </motion.p>
        </div>

        {/* Yellow showcase card with image */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-[#71c5c0] p-3 pb-0"
        >
            <div className="overflow-hidden rounded-xl shadow-md aspect-[4/3] md:aspect-[16/9]">
                <img
                    src={purposeShowcase}
                    alt="Client website design showcase"
                    className="w-full h-full object-cover object-top"
                />
            </div>
        </motion.div>

        {/* 3-column features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {features.map((feature, i) => (
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Blue CTA bar */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl px-6 py-5 md:px-8 md:py-6"
            style={{
                background:
                    "linear-gradient(130deg, rgb(8, 116, 166) 0%, rgb(0, 63, 158) 100%)",
            }}
        >
            <h2 className="text-lg md:text-xl font-bold text-white italic">
            Need help with a build or rebuild? We would love to chat.
            </h2>
            <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-foreground shadow-button transition-all hover:opacity-90 active:scale-[0.98] whitespace-nowrap"
            >
                Get started
            </a>
        </motion.div>
    </section>
);

export default PurposeSection;
