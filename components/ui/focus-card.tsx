"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FocusCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FocusCard({
  icon,
  title,
  description,
  className,
}: FocusCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={cn(
        "group relative p-8 rounded-2xl bg-white border border-gray-100",
        "hover:border-transparent transition-all duration-300 overflow-hidden",
        "shadow-sm hover:shadow-lg",
        className
      )}
    >
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
          {React.cloneElement(icon as React.ReactElement, { 
            className: 'w-6 h-6 text-blue-600' 
          })}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
        
        <div className="mt-6 flex justify-end">
          <motion.div 
            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle background accent that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
