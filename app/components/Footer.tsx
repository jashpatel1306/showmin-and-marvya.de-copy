import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white font-sans" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Newsletter Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo & Branding */}
            <div>
              {/* <h2 className="text-3xl font-light tracking-[0.2em] text-white mb-2">SHOWMINE</h2> */}
              <img
                  src="/images/SHOWMINE-LIGHT.png"
                  alt="logo"
                  // fill
                  className="w-auto h-8 md:h-10 object-contain"
                // priority
                />
            </div>
            
            {/* Newsletter Subscription */}
            <div className="max-w-md">
              <h3 className="text-xl font-medium text-white mb-4">Join our newsletter</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-base">
                Sign up for our newsletter below and be the first to hear about new updates and exciting Shopify and e-commerce topics.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-base"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#4B6F93] hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 whitespace-nowrap hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Register
                </button>
              </form>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/showmine-infotech" target='_blank' className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">Links</h4>
            <nav className="flex flex-col space-y-3">
              <a href="/logistics" className="text-gray-400 hover:text-white transition-colors duration-200 text-base">Showmine Logistics</a>
              <a href="/capital" className="text-gray-400 hover:text-white transition-colors duration-200 text-base">Showmine Capital</a>
              <a href="/reviews" className="text-gray-400 hover:text-white transition-colors duration-200 text-base">Reviews</a>
              <a href="/careers" className="text-gray-400 hover:text-white transition-colors duration-200 text-base">Career</a>
            </nav>
          </div>

          {/* Information Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">Information</h4>
            <nav className="flex flex-col space-y-3">
              <a href="/imprint" className="text-gray-400 hover:text-white transition-colors duration-200 text-base">Imprint</a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-base">Privacy Policy</a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200 text-base">Cookie Settings</a>
            </nav>
            
            {/* Language Switcher */}
            <div className="pt-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                <Globe size={16} />
                <span>English</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              ©2023 Showmine – All Rights Reserved
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors duration-200">Privacy</a>
              <a href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors duration-200">Terms</a>
              <a href="/imprint" className="text-gray-500 hover:text-gray-300 transition-colors duration-200">Imprint</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 