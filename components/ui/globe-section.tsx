"use client";

import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import GitHubThreeGlobe from './github-three-globe';

// Dynamically import the GlobeDemo with SSR disabled
// const GlobeDemo = dynamic(() => import('./globe-demo'), {
//   ssr: false,
//   loading: () => (
//     <div className="flex items-center justify-center w-full h-full">
//       <div className="w-64 h-64 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
//     </div>
//   ),
// });

export function GlobeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
            AI-Driven Tools for Data Scraping and Lead Generation: No Coding Required
            </h2>

            {/* Divider with icon */}
            <div className="flex items-center gap-3 select-none" aria-hidden>
                <span className="h-px flex-1 bg-[#E0E0E0]" />
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#E0E0E0] bg-white">
                  <span className="inline-block w-3.5 h-3.5 bg-gray-400 rounded-sm" />
                </span>
                <span className="h-px flex-1 bg-[#E0E0E0]" />
              </div>
            
            <p className="text-lg text-gray-600">
            Our mission is to ensure everyone has access to public data, regardless of their technical expertise. We have developed a platform that doesn't require coding knowledge and has a user-friendly interface to guide you through the process. Simply log in, choose the information you want to scrape, and specify the details you want to extract, and you're done.
            </p>

            <p className="text-lg text-gray-600">
            We have designed our platform with simplicity, so you can focus on the data that matters most to your business. Whether you're a marketer, a researcher, or a business owner, our platform can help you to get data which you can use to gain insights and unlock the potential to expand your business further.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-blue-600">99.9%</h3>
                <p className="text-gray-600">Uptime</p>
              </div>
            </div>
            
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Get Started Today
            </button>
          </motion.div>
          
          {/* Right side globe */}
          <motion.div 
            className="relative h-[400px] w-full lg:h-[560px]"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute inset-0">
              <GitHubThreeGlobe />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
