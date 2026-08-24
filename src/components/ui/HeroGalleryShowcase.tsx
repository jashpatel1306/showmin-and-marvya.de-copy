import React from "react";

// Desktop Images
import desk1 from "@/assets/Shopify/desktop/imgi_42_Rv4TMOeWmFGdEGRuJ3Vz6o7bRw.avif";
import desk2 from "@/assets/Shopify/desktop/imgi_54_ZNLK0FforeBXuRq6UoBnpPIU9eY.jpg";
import desk3 from "@/assets/Shopify/desktop/imgi_66_yeo-poster.avif";
import desk4 from "@/assets/Shopify/desktop/imgi_99_uKw3C8NT4zav4B8uO8NO6Sp6dkQ.jpg";
import desk5 from "@/assets/Shopify/desktop/imgi_114_WISPNRMsYwXBCaCX7k8zO8g4.jpg";
import desk6 from "@/assets/Shopify/desktop/imgi_119_f2DTMSWLzSDzS7z0IbDBW0p3ois.jpg";
import desk7 from "@/assets/Shopify/desktop/imgi_138_NGFUmJ2LyY9ql1QGdJLplKzca8.avif";
import desk8 from "@/assets/Shopify/desktop/imgi_148_HiPWByMHZ8kCjthRFeEths1xob4.jpg";
import desk9 from "@/assets/Shopify/desktop/imgi_185_mPsQXQ0arun7VTSiFchAfSlUGlE.avif";
import desk10 from "@/assets/Shopify/desktop/imgi_195_TkxqVBKtNQGAc4zccvPQO8Jikgw.jpg";
import desk11 from "@/assets/Shopify/desktop/imgi_204_NI6txO74xP5bNsEkPvsdAyh0HMI-poster.avif";
import desk12 from "@/assets/Shopify/desktop/imgi_206_njPHl1FkYIA3QPATOSRiX36dQ-poster.avif";
import desk13 from "@/assets/Shopify/desktop/imgi_211_l1EXLSmd09fHZm2LvOQrf1iRR38-poster.avif";

// Mobile Images
import mob1 from "@/assets/Shopify/mobile/imgi_72_MpbrjX5owGxoVDwJglxMFE06Hm4.jpg";
import mob2 from "@/assets/Shopify/mobile/imgi_90_RQC65QKeAvX19koq89AfBfvPIaI.avif";
import mob3 from "@/assets/Shopify/mobile/imgi_159_4wJpWQj7qMLLAU3Dd1roKUYc20.avif";
import mob4 from "@/assets/Shopify/mobile/imgi_205_fAFnF4aU66tyklT20c6Ro26Aw-poster.avif";
import mob5 from "@/assets/Shopify/mobile/imgi_209_ltrOB20wmAQXJUXHkEbdmyRowg-poster.avif";
import mob6 from "@/assets/Shopify/mobile/imgi_210_ndqfhaVd3GSux1iKCvoHRprzA8-poster.avif";

// Column Data Array mapping to actual Shopify store showcase screenshots
const col1Images = [
  { id: "c1-1", src: desk1, alt: "Mortgage Broker System" },
  { id: "c1-2", src: desk2, alt: "FoodFacts Science Platform" },
  { id: "c1-3", src: desk3, alt: "Botanical Store" },
  { id: "c1-4", src: desk4, alt: "Luxury Renovation Architecture" },
];

const col2Images = [
  { id: "c2-1", src: mob1, alt: "Dealership Ads App" },
  { id: "c2-2", src: mob2, alt: "Essential Oils Mobile App" },
  { id: "c2-3", src: mob3, alt: "Carpet Cleaning Mobile App" },
];

const col3Images = [
  { id: "c3-1", src: desk5, alt: "Consensus AI Research" },
  { id: "c3-2", src: desk6, alt: "Ecommerce Empire Growth" },
  { id: "c3-3", src: desk7, alt: "Zendesk CX AI Agent Studio" },
  { id: "c3-4", src: desk8, alt: "Resurgan Real Estate" },
];

const col4Images = [
  { id: "c4-1", src: desk9, alt: "Essential Oils Botanical" },
  { id: "c4-2", src: desk10, alt: "Recommended Animal Charities" },
  { id: "c4-3", src: desk11, alt: "Local Hero Gym System" },
  { id: "c4-4", src: desk12, alt: "Bespoke Reclaimed Furniture" },
];

const col5Images = [
  { id: "c5-1", src: mob4, alt: "Local Hero Mobile" },
  { id: "c5-2", src: mob5, alt: "Transform 90 Fitness App" },
  { id: "c5-3", src: mob6, alt: "Green Oak Therapies App" },
];

const col6Images = [
  { id: "c6-1", src: desk13, alt: "Pro Athletic Conditioning" },
  { id: "c6-2", src: desk1, alt: "Mortgage OS Platform" },
  { id: "c6-3", src: desk4, alt: "Luxury Renovation Kitchen" },
];

export function HeroGalleryShowcase() {
  return (
    <div className="w-full relative overflow-hidden bg-[#FAF9F6] border border-neutral-200/80 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs">
      {/* Main Multi-Column Scrolling Container */}
      <div className="flex justify-center gap-4 sm:gap-5 md:gap-6 h-[460px] sm:h-[540px] md:h-[620px] overflow-hidden select-none">
        {/* Column 1 (Wide Desktop - Moves Up) */}
        <div className="w-[240px] sm:w-[280px] md:w-[310px] shrink-0 flex flex-col gap-4 sm:gap-5 md:gap-6 animate-vertical-gallery-up">
          {[...col1Images, ...col1Images].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white shrink-0"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block object-contain object-top"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Column 2 (Narrow Mobile - Moves Down) */}
        <div className="hidden sm:flex w-[130px] md:w-[150px] shrink-0 flex-col gap-4 sm:gap-5 md:gap-6 animate-vertical-gallery-down">
          {[...col2Images, ...col2Images].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white shrink-0"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block object-contain object-top"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Column 3 (Wide Desktop - Moves Up Fast) */}
        <div className="w-[240px] sm:w-[280px] md:w-[310px] shrink-0 flex flex-col gap-4 sm:gap-5 md:gap-6 animate-vertical-gallery-up-fast">
          {[...col3Images, ...col3Images].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white shrink-0"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block object-contain object-top"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Column 4 (Wide Desktop - Moves Down Fast) */}
        <div className="hidden md:flex w-[310px] shrink-0 flex-col gap-4 sm:gap-5 md:gap-6 animate-vertical-gallery-down-fast">
          {[...col4Images, ...col4Images].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white shrink-0"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block object-contain object-top"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Column 5 (Narrow Mobile - Moves Up) */}
        <div className="hidden lg:flex w-[150px] shrink-0 flex-col gap-4 sm:gap-5 md:gap-6 animate-vertical-gallery-up">
          {[...col5Images, ...col5Images].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white shrink-0"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block object-contain object-top"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Column 6 (Wide Desktop - Moves Down) */}
        <div className="hidden xl:flex w-[310px] shrink-0 flex-col gap-4 sm:gap-5 md:gap-6 animate-vertical-gallery-down">
          {[...col6Images, ...col6Images].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white shrink-0"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block object-contain object-top"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroGalleryShowcase;
