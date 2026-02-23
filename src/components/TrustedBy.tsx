import { motion } from "framer-motion";
import JashIcon from "@/assets/TeamMember/jash.jpg";
import JainishIcon from "@/assets/TeamMember/jainish.png";
import britishjewel from "@/assets/clients/britishjewel.png";
import diamondrensu from "@/assets/clients/diamondrensu.png";
import gosharpei from "@/assets/clients/gosharpei.png";
import indoera from "@/assets/clients/indoera.png";
import kymee from "@/assets/clients/kymee.png";
import lemaris from "@/assets/clients/lemaris.png";

import pinktownusa from "@/assets/clients/pinktownusa.png";
import pirinhill from "@/assets/clients/pirinhill.png";
import plumdiamonds from "@/assets/clients/plumdiamonds.png";
import simpl from "@/assets/clients/simpl.png";
import srface from "@/assets/clients/srface.png";
import wheeliospin from "@/assets/clients/WheelioSpin.png";


const clients = [
  { name: "British Jewel", logo: britishjewel },
  { name: "Diamond Rensu", logo: diamondrensu },
  { name: "Sharpei", logo: gosharpei },
  { name: "Indo Era", logo: indoera },
  { name: "Kymee", logo: kymee },
  { name: "Le Marais", logo: lemaris },

  { name: "Pink Townusa", logo: pinktownusa },
  { name: "Pirin Hill", logo: pirinhill },
  { name: "Plum Diamonds", logo: plumdiamonds },
  { name: "Simpl", logo: simpl },
  { name: "Srface", logo: srface },
  { name: "Wheelio Spin", logo: wheeliospin },

];

const TrustedBy = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Trusted by leading teams
          </h2>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
        <div className="flex items-center gap-16 md:gap-24 animate-marquee">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 h-8 md:h-10 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 dark:invert"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default TrustedBy;
