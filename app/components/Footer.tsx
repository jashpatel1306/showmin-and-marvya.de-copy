import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111215] border-t border-white/10 pt-14 pb-8 px-4 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Columns */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between w-full">
          {/* Left: Newsletter Signup */}
          <div className="flex-1 flex flex-col items-start mb-8 md:mb-0 md:pr-8">
            {/* Stylized Logo */}
            <div className="text-4xl font-extrabold tracking-widest text-white mb-4 select-none" style={{fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', letterSpacing: '0.12em'}}>SHOWMINE</div>
            <div className="text-lg font-semibold text-white mb-2">Join our newsletter</div>
            <div className="text-gray-400 text-base mb-5 max-w-xs leading-relaxed">Sign up for our newsletter below and be the first to hear about new updates and exciting Shopify and e-commerce topics.</div>
            <form className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-[#18191c] border border-white/10 rounded-l-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base transition-all"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-r-full transition-colors text-base shadow"
              >
                Register
              </button>
            </form>
          </div>
          {/* Middle: Left Links */}
          <div className="flex-1 flex flex-col items-start mb-8 md:mb-0 md:px-8">
            <div className="text-white font-semibold text-lg mb-4">Left</div>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Showmine Logistics</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Showmine Capital</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Reviews</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-base">career</a>
            </nav>
          </div>
          {/* Right: Information Links */}
          <div className="flex-1 flex flex-col items-start md:pl-8">
            <div className="text-white font-semibold text-lg mb-4">information</div>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-base">imprint</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Cookie Settings</a>
            </nav>
          </div>
        </div>
        {/* Bottom Copyright */}
        <div className="w-full pt-8 border-t border-white/10 text-center">
          <span className="text-xs text-gray-500">©2025 Showmine - All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
} 