import { motion } from "framer-motion";

interface HeroCanvasProps {
  imageSrc: string;
  label?: string;
  commentText?: string;
}

const CursorTag = () => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotate: 0 }}
    animate={{ opacity: 1, y: 0, rotate: 1 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    className="absolute right-8 bottom-24 z-20"
  >
    <div className="flex items-center gap-1.5">
      <motion.svg
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        width="24" height="28" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L4.8 22L9.6 12.914L18 11.298L1 1Z" fill="black" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
      </motion.svg>
      <div className="rounded-lg bg-accent px-3 py-1.5 shadow-md">
        <span className="text-xs font-semibold text-accent-foreground">You</span>
      </div>
    </div>
  </motion.div>
);

const CommentBubble = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.1, duration: 0.5 }}
    className="absolute -top-5 right-4 z-30"
  >
    <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-2.5 shadow-sm">
      <span className="text-xs font-medium text-foreground whitespace-nowrap">
        {text}
        <span className="inline-block w-[0.6em] animate-typing-cursor ml-0 text-left opacity-100">|</span>
      </span>
      <motion.div
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
      >
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-primary-foreground">
          <path d="M1.5 7.5L12.5 7.5M12.5 7.5L8 3M12.5 7.5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </div>
  </motion.div>
);

const HeroCanvas = ({ imageSrc, label = "SEO dashboard", commentText = "organic traffic is up 40%" }: HeroCanvasProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="relative w-full pt-6"
  >
    <CommentBubble text={commentText} />
    <div className="relative overflow-visible">
      <div className="px-3 py-3">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
      </div>
      <div className="relative border border-border rounded-t-xl bg-secondary/50 overflow-hidden" style={{ opacity: 0.9 }}>
        <img
          src={imageSrc}
          alt="SEO preview"
          className="w-full h-auto rounded-t-xl object-cover"
          style={{ aspectRatio: "1.214 / 1" }}
        />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)" }}
      />
      <CursorTag />
    </div>
  </motion.div>
);

export default HeroCanvas;
