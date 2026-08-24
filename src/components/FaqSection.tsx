import { useState } from "react";
import faqDotsBg from "@/assets/faq/faq-dots-bg.avif";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FaqItem[] = [
    {
      question: "Can multiple WhatsApp Business numbers be managed in one DoubleTick dashboard?",
      answer: "Yes, you can add 500+ WhatsApp Business numbers to a single DoubleTick account and oversee all chats centrally. Plus, broadcasts and automations can be configured separately for each number.",
    },
    {
      question: "Is there a DoubleTick mobile app available?",
      answer: "Yes, DoubleTick is available on both Android and iOS devices. You can download the app to manage your chats, broadcasts, and team on the go.",
    },
    {
      question: "What are the conversation charges?",
      answer: "Conversation charges are billed directly based on WhatsApp's official conversation-based pricing model (marketing, utility, authentication, and service categories). Contact our sales team for a detailed breakdown.",
    },
    {
      question: "Can you consult us for a WhatsApp strategy?",
      answer: "Absolutely! We provide custom onboarding and strategic consulting to help you design effective broadcast campaigns, automation workflows, and team routing structures.",
    },
    {
      question: "How can I become a DoubleTick partner?",
      answer: "You can join our Channel Partner Program to resell DoubleTick and earn recurring commissions. Visit our partners page or get in touch with our partnerships team to apply.",
    },
    {
      question: "Is 3rd-party integration available on DoubleTick?",
      answer: "Yes, DoubleTick offers direct integrations with popular CRMs (like Salesforce, HubSpot, and Zoho), e-commerce platforms (like Shopify and WooCommerce), and custom webhooks/APIs.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f3ec] relative">
      {/* 3-Part Section Layout (Left 120px Column + Center 1118px Column + Right 120px Column) */}
      <div className="relative mx-auto max-w-[1358px] w-full flex justify-center">
        {/* Left Vertical Side Column (W: 120px) with 1cm Cream Gap & Border before Center Column */}
        <div className="hidden xl:flex w-[120px] shrink-0 border-r border-neutral-200 bg-[#f4f3ec]">
          <div
            className="flex-1 relative overflow-hidden border-r border-neutral-200"
            style={{
              backgroundImage:
                "radial-gradient(rgba(163, 163, 163, 0.45) 1px, #f4f3ec 1px)",
              backgroundSize: "5.67px 5.67px",
            }}
          />
          {/* 1cm Solid Cream Vertical Gap/Strip */}
          <div className="w-[16px] bg-[#f4f3ec] shrink-0" />
        </div>

        {/* Center Column (W: 1118px) */}
        <div className="w-[calc(100%-16px)] mx-2 sm:w-[calc(100%-32px)] sm:mx-4 xl:w-[1118px] xl:mx-0 border-l border-r border-neutral-200 flex flex-col items-center bg-white shrink-0">
        {/* Section Header */}
        <div className="pt-8 sm:pt-12 md:pt-20 pb-6 sm:pb-8 md:pb-12 px-3 sm:px-4 md:px-6 text-center max-w-[800px] mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 justify-center mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-[11px] font-bold font-mono text-emerald-600 tracking-[0.2em] uppercase flex items-center gap-1">
              → FAQS ←
            </span>
          </div>
          <h2 className="font-serif text-[#131316] text-xl sm:text-2xl md:text-[39px] leading-tight md:leading-[54.6px] font-semibold mb-2 sm:mb-3 md:mb-4">
            All your doubts answered
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm md:text-base max-w-[620px]">
            You've come this far, get all your queries answered before purchase
          </p>
        </div>

        {/* Accordion Container */}
        <div className="w-full px-2.5 sm:px-4 md:px-6 pb-8 sm:pb-12 md:pb-20 max-w-[908px] mx-auto">
          <div className="flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-[#D1D1D6] bg-white rounded-[6px] overflow-hidden mb-2 sm:mb-2.5 md:mb-3 last:mb-0 transition-all duration-200"
                >
                  {/* Trigger */}
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full py-2.5 px-3 sm:py-3.5 sm:px-4.5 md:py-4 md:px-6 flex items-center justify-between text-left cursor-pointer group focus:outline-none gap-2"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[#131316] group-hover:text-[#007A5A] transition-colors pr-2 sm:pr-4 font-semibold text-xs sm:text-sm md:text-base leading-snug">
                      {item.question}
                    </span>
                    <span className="text-neutral-500 font-mono text-base sm:text-lg md:text-xl leading-none shrink-0 select-none transition-transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Content Panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[800px] opacity-100 border-t border-[#D1D1D6]" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div 
                      className="p-1.5 sm:p-3 md:p-4 bg-[#FAF9F5]"
                      style={{
                        backgroundImage: `url(${faqDotsBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      <div className="bg-white border border-[#E5E4DC] rounded-[6px] p-2.5 sm:p-4 md:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-left">
                        <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {/* Right Vertical Side Column (W: 120px) with 1cm Cream Gap & Border after Center Column */}
        <div className="hidden xl:flex w-[120px] shrink-0 border-l border-neutral-200 bg-[#f4f3ec]">
          {/* 1cm Solid Cream Vertical Gap/Strip */}
          <div className="w-[16px] bg-[#f4f3ec] shrink-0" />
          <div
            className="flex-1 relative overflow-hidden border-l border-neutral-200"
            style={{
              backgroundImage:
                "radial-gradient(rgba(163, 163, 163, 0.45) 1px, #f4f3ec 1px)",
              backgroundSize: "5.67px 5.67px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
