"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GlobeDemo() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center mb-8"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            Global Data Coverage
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            Our platform provides comprehensive data coverage across multiple countries and regions worldwide.
          </p>
        </motion.div>
        
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          {isMounted ? (
            <div className="flex items-center justify-center w-full h-full">
              <div className="text-center">
                <div className="w-32 h-32 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading 3D Globe...</p>
                <p className="text-sm text-gray-500 mt-2">Interactive globe visualization coming soon</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-32 h-32 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

