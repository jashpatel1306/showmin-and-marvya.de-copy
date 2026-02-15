import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GalleryItem from "./GalleryItem";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  aspectRatio?: string;
}

interface GalleryColumnProps {
  items: MediaItem[];
  speed?: number;
  className?: string;
}

const GalleryColumn = ({ items, speed = 0.5, className = "" }: GalleryColumnProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <div ref={containerRef} className={`flex flex-col gap-3 ${className}`}>
      <motion.div 
        className="flex flex-col gap-3"
        style={{ y }}
      >
        {items.map((item, index) => (
          <GalleryItem
            key={index}
            type={item.type}
            src={item.src}
            alt={item.alt}
            aspectRatio={item.aspectRatio}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default GalleryColumn;
