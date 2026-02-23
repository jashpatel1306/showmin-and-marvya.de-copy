import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/cta-background.jpg";
import phoneMockup1 from "@/assets/phone-mockup-1.png";
import phoneMockup2 from "@/assets/phone-mockup-2.png";

const features = [
  {
    title: "Strategic by design",
    description: "Every website decision is backed by research & data.",
  },
  {
    title: "Built for performance",
    description: "Fast, accessible, and optimised for conversions.",
  },
  {
    title: "Enterprise reliability",
    description: "Scalable builds, consistent delivery, and stability.",
  },
  {
    title: "Ongoing partnership",
    description: "We plug into your existing teams and workflows.",
  },
];

const LetsHappen = () => {
  return (
    // <section className="py-20 md:py-32 bg-background relative overflow-hidden">
    //   <div className="container mx-auto px-4 md:px-6">
    //     <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
    //       {/* Left Content */}
    //       <div>
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true }}
    //           transition={{ duration: 0.6 }}
    //           className="mb-10"
    //         >
    //           <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6">
    //             Let's make it happen
    //           </h2>
    //         </motion.div>

    //         <div className="space-y-6">
    //           {features.map((feature, index) => (
    //             <motion.div
    //               key={feature.title}
    //               initial={{ opacity: 0, x: -20 }}
    //               whileInView={{ opacity: 1, x: 0 }}
    //               viewport={{ once: true }}
    //               transition={{ duration: 0.5, delay: index * 0.1 }}
    //               className="flex gap-4"
    //             >
    //               <div className="flex-shrink-0 mt-1">
    //                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 via-teal-400 to-green-400 flex items-center justify-center">
    //                   <CheckCircle className="w-5 h-5 text-white" />
    //                 </div>
    //               </div>
    //               <div>
    //                 <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
    //                 <p className="text-muted-foreground">{feature.description}</p>
    //               </div>
    //             </motion.div>
    //           ))}
    //         </div>
    //       </div>

    //       {/* Right - Decorative Images */}
    //       <motion.div
    //         initial={{ opacity: 0, scale: 0.95 }}
    //         whileInView={{ opacity: 1, scale: 1 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.8 }}
    //         className="relative"
    //       >
    //         {/* Main Image */}
    //         <div className="relative rounded-3xl overflow-hidden shadow-2xl">
    //           <img
    //             src="https://framerusercontent.com/images/5hGNDzpEAVBkY0vmiWum8G9sCaA.jpg?width=5760&height=3240"
    //             alt="Decorative"
    //             className="w-full h-auto object-cover"
    //           />
    //         </div>
            
    //         {/* Floating Phone Images */}
    //         <motion.div
    //           initial={{ opacity: 0, y: 40 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true }}
    //           transition={{ duration: 0.6, delay: 0.3 }}
    //           className="absolute -bottom-8 -left-8 w-32 md:w-40 rounded-2xl overflow-hidden shadow-xl"
    //         >
    //           <img
    //             src="https://framerusercontent.com/images/4wJpWQj7qMLLAU3Dd1roKUYc20.png?width=1170&height=2532"
    //             alt="Mobile app preview"
    //             className="w-full h-auto"
    //           />
    //         </motion.div>
            
    //         <motion.div
    //           initial={{ opacity: 0, y: -40 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true }}
    //           transition={{ duration: 0.6, delay: 0.4 }}
    //           className="absolute -top-8 -right-8 w-28 md:w-36 rounded-2xl overflow-hidden shadow-xl"
    //         >
    //           <img
    //             src="https://framerusercontent.com/images/MpbrjX5owGxoVDwJglxMFE06Hm4.png?width=744&height=1618"
    //             alt="Green Oak Therapies"
    //             className="w-full h-auto"
    //           />
    //         </motion.div>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
    <section className="w-full min-h-screen bg-background p-5 md:p-10 lg:p-20 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-secondary rounded-3xl p-4 md:p-6">
        <div className="bg-card rounded-3xl shadow-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-6 max-w-md">
                <h2 className="section-title text-foreground">
                  Transform your website experience
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Tell us what you need, receive a clear quote and timeline, then let us handle the work while you stay focused on your business.
                </p>
                
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base rounded-lg shadow-cta transition-all duration-200 hover:scale-[1.02]"
                  >
                    Get Started
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground pt-2">
                  No obligation, usually a 20 to 30 minute chat.
                </p>
              </div>
            </div>
           

          {/* Right - Two Overlapping Mobile Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] md:h-[400px] lg:h-[420px] overflow-hidden rounded-3xl"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/40 via-transparent to-violet-500/60" />
            </div>

            {/* Phone 1 - Front left, tilted */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-4 left-4 md:left-8 lg:left-12 w-[40%] md:w-[38%] z-10"
            >
              <div className="rounded-[20px] md:rounded-[28px] overflow-hidden shadow-2xl border-[3px] border-foreground/10 bg-white">
                <img
                  src="https://framerusercontent.com/images/4wJpWQj7qMLLAU3Dd1roKUYc20.png?width=1170&height=2532"
                  alt="Green Oak Therapies mobile preview"
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>

            {/* Phone 2 - Back right, tilted opposite */}
            <motion.div
              initial={{ opacity: 0, y: -40, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-4 right-4 md:right-8 lg:right-12 w-[40%] md:w-[38%]"
            >
              <div className="rounded-[20px] md:rounded-[28px] overflow-hidden shadow-2xl border-[3px] border-foreground/10 bg-black">
                <img
                  src="https://framerusercontent.com/images/MpbrjX5owGxoVDwJglxMFE06Hm4.png?width=744&height=1618"
                  alt="Youth Pro-Animal Awards mobile preview"
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsHappen;
