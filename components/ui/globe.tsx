"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Globe = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <motion.div 
        className="relative w-full h-full rounded-full border-2 border-blue-400/30"
        animate={{
          rotateY: 360,
          rotateX: 15,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 70% 70%, rgba(124, 58, 237, 0.2) 0%, transparent 40%),
            conic-gradient(
              from 0deg,
              transparent 0deg 60deg,
              rgba(59, 130, 246, 0.5) 60deg 120deg,
              transparent 120deg 180deg,
              rgba(124, 58, 237, 0.5) 180deg 240deg,
              transparent 240deg 300deg,
              rgba(59, 130, 246, 0.5) 300deg 360deg
            )
          `,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 rounded-full border border-blue-400/20" />
        <div className="absolute inset-0 rounded-full border border-blue-400/20 rotate-45" />
        <div className="absolute inset-0 rounded-full border border-blue-400/20 rotate-90" />
        <div className="absolute inset-0 rounded-full border border-blue-400/20 rotate-135" />
        
        {children && (
          <div className="absolute inset-0 flex items-center justify-center">
            {children}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export const GlobeDemo = () => {
  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-full w-full"
      >
        <Globe className="h-full w-full">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
          </motion.div>
        </Globe>
      </motion.div>
    </div>
  );
};
