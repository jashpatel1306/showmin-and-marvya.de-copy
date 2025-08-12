'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export default function WhatsAppButton() {
  // WhatsApp number in international format (without any spaces, dashes, or other characters)
  const phoneNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your actual WhatsApp number
  const message = 'Hello! I have a question about your services.'; // Default message
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white",
          "shadow-lg hover:bg-green-600 transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        )}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
