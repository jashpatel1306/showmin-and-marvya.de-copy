import { motion } from "framer-motion";

interface GalleryItemProps {
  type: "image" | "video";
  src: string;
  alt?: string;
  aspectRatio?: string;
}

const GalleryItem = ({ type, src, alt = "", aspectRatio = "1.43" }: GalleryItemProps) => {
  return (
    <motion.div
      className="relative w-full rounded gallery-border overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className="relative w-full rounded overflow-hidden"
        style={{ aspectRatio }}
      >
        {type === "image" ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded"
            loading="lazy"
          />
        ) : (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover rounded"
          />
        )}
      </div>
    </motion.div>
  );
};

export default GalleryItem;
