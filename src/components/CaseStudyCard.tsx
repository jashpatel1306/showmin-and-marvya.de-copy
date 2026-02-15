import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface CaseStudyCardProps {
  videoSrc: string;
  backgroundImage: string;
  stat: string;
  statLabel: string;
  category: string;
  countryFlag: string;
  description: string;
  testimonial: string;
  clientName: string;
  clientRole: string;
  clientAvatar: string;
}
const CaseStudyCard = ({
  videoSrc,
  backgroundImage,
  stat,
  statLabel,
  category,
  countryFlag,
  description,
  testimonial,
  clientName,
  clientRole,
  clientAvatar,
}: CaseStudyCardProps) => {
  return (
    <motion.div
      className="relative w-full rounded-[14px] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        {/* Background layers with parallax effect */}
        <div className="relative aspect-[1.1] overflow-hidden">
          {/* Outer background */}
          <div 
            className="absolute inset-0 rounded-[50px] bg-secondary"
            style={{ transform: "translateY(32px)" }}
          />
          
          {/* Inner white background */}
          <div 
            className="absolute inset-4 rounded-[30px] bg-card opacity-80"
            style={{ transform: "scale(0.94)" }}
          />
          
          {/* Main content area */}
          <div className="absolute inset-8 rounded-[24px] overflow-hidden">
            {/* Background image */}
            <img
              src={backgroundImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Video container */}
            <div className="absolute inset-6 flex items-center justify-center">
              <div className="relative w-3/4 rounded-2xl overflow-hidden border-2 border-border-subtle shadow-lg">
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Stats badge */}
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
              <div className="border-r border-border pr-3">
                <p className="text-xl font-semibold text-foreground">{stat}</p>
              </div>
              <p className="text-sm text-muted-foreground">{statLabel}</p>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="px-4 py-6 space-y-4">
          {/* Category and location */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground opacity-70">
              {category}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-px h-4 bg-muted-foreground/30" />
              <span className="text-base">{countryFlag}</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg font-medium text-foreground leading-snug">
            {description}
          </p>
          
          {/* Testimonial section */}
          <div className="pt-4 space-y-3">
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FDC448] text-[#FDC448]" />
              ))}
            </div>
            
            {/* Quote */}
            <p className="text-sm text-foreground leading-relaxed">
              {testimonial}
            </p>
          </div>
          
          {/* Client info */}
          <div className="flex items-center gap-3 pt-2">
            <img
              src={clientAvatar}
              alt={clientName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-foreground">{clientName}</p>
              <p className="text-sm text-muted-foreground">{clientRole}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default CaseStudyCard;
