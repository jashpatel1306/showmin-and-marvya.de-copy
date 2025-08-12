'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

export default function WhatsAppButton() {
  // WhatsApp number in international format (without any spaces, dashes, or other characters)
  const phoneNumber = '+918347318270'; // Replace with your actual WhatsApp number
  const message = 'Hello! I have a question about your services.'; // Default message
  
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  // Add custom animation styles
  useEffect(() => {
    // Create style element if it doesn't exist
    if (!document.getElementById('whatsapp-button-styles')) {
      const style = document.createElement('style');
      style.id = 'whatsapp-button-styles';
      style.textContent = `
        @keyframes slowBounce {
          0%, 100% {
            transform: translateY(0) scale(1);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-15px) scale(1.05);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-slow-bounce {
          animation: slowBounce 4s infinite;
        }
        @media (max-width: 768px) {
          .animate-slow-bounce {
            animation: slowBounce 5s infinite;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white",
          "shadow-lg hover:bg-green-600 transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
          "animate-slow-bounce"
        )}
        onClick={(e) => {
          // Optional: Add any click handling here if needed
        }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
