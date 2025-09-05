"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation"

type ServiceBlockProps = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  ctaHref: string;
  ctaLabel: string;
  ariaLabel: string;
  media: Array<{
    type: "video" | "image";
    src: string;
    alt: string;
    poster?: string;
  }>;
};

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="mt-1 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 transition-colors duration-200 hover:bg-neutral-100">
    {label}
  </span>
);

const useAutoplayOnView = (refs: React.RefObject<HTMLVideoElement>[]) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            el.play().catch(() => { });
          } else {
            el.pause();
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );
    refs.forEach((r) => r.current && observer.observe(r.current));
    return () => {
      refs.forEach((r) => r.current && observer.unobserve(r.current as Element));
    };
  }, [refs]);
};

const ServiceBlock: React.FC<ServiceBlockProps> = ({ id, title, description, tags, ctaHref, ctaLabel, ariaLabel, media }) => {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = true;
      video.play().catch(() => { });
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      try {
        video.currentTime = 0;
        video.load();
      } catch { }
    }
  };
  return (
    <section id={id} className="bg-white text-black py-16 md:py-24 border-y border-neutral-200 relative">
      {/* baseline behind */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-neutral-200/90 z-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-8 items-center relative z-10">
        {/* Left column: text */}
        <div className="serviceexcerpt col-span-12 md:col-span-5 lg:col-span-4 w-[346px] min-w-[346px]">
          <h3 className="text-black text-[30px] leading-normal font-light mb-3">{title}</h3>
          <p className=" text-[14px] leading-[25px] font-light text-[#999]" style={{ fontFamily: 'TWK Lausanne' }}>
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
          <Link
            href={ctaHref}
            aria-label={ariaLabel}
            className="mt-4 inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black hover:border hover:border-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Right column: media grid */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {media.map((m, idx) => (
            <div
              key={idx}
              className="group"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <figure className="each-servicelist relative w-full h-[389px] mb-3 overflow-hidden transition-[border-radius] duration-300 ease-in-out rounded-2xl border border-neutral-200 bg-white shadow-sm">
                {m.type === "video" ? (
                  <video
                    ref={(el: any) => (videoRefs.current[idx] = el)}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 will-change-transform"
                    muted
                    playsInline
                    preload="metadata"
                    poster={m.poster}
                    aria-label={m.alt}
                  >
                    <source src={m.src} type="video/mp4" />
                  </video>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.src}
                    alt={m.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 will-change-transform"
                    loading="lazy"
                  />
                )}
              </figure>
              {/* Tags below media appear on hover */}
              <div className="mt-2 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Tag label={m.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  return (
    <main className="bg-black">
      <Navigation />
      {/* Hero */}
      <section className="pt-16 md:pt-48 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="font-serif font-thin text-[54px] leading-[58px] tracking-[-2.4px] text-white">Services</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-neutral-400">
            Showmine Agency specializes in creating tailored digital solutions that directly boost your bottom line.
            We don’t just build—we show you measurable improvements in business performance and customer impact.
            Our focus is on delivering results you can see, experience, and scale.
          </p>
        </div>
      </section>

      {/* baseline between hero and first row */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-neutral-200/90 z-0" />
      </div>

      {/* eCommerce */}
      <ServiceBlock
        id="ecommerce"
        title="eCommerce"
        description="We are proud to partner with Shopify and serve as a full-scale production partner for leading brands in the eCommerce industry. Beyond building your webshop, we design and implement your complete digital architecture."
        tags={["Design", "Headless", "B2C", "Shopify Plus"]}
        ctaHref="/services/ecommerce"
        ctaLabel="Learn More"
        ariaLabel="Learn more about eCommerce services"
        media={[
          { type: "video", src: "/services/Ecomm-1.mp4", poster: "/services/markting.webp", alt: "Modern retail showcase" },
          { type: "video", src: "/services/design.mp4", poster: "/services/markting.webp", alt: "Fashion brand runway" },
        ]}
      />

      {/* Design */}
      <ServiceBlock
        id="design"
        title="Design & Websites"
        description="World-class automated corporate websites and platforms — built to scale from day one and designed to go far beyond the ordinary."
        tags={["Brand Systems", "UX", "Accessibility", "Design Tokens", "Motion"]}
        ctaHref="/services/design"
        ctaLabel="Learn More"
        ariaLabel="Learn more about Design services"
        media={[
          { type: "video", src: "/services/design.mp4", poster: "/services/markting.webp", alt: "Design motion demo" },
          { type: "image", src: "/images/hero-bg.jpg", alt: "Design detail still" },
        ]}
      />

      {/* Marketing */}
      <ServiceBlock
        id="marketing"
        title="Marketing"
        description="Fuel your brand’s growth and stand out in the digital landscape with our full-suite marketing services. From SEO to social media, we create strategies that drive measurable impact. As a Klaviyo Elite Partner, we design data-driven email and SMS campaigns that convert customer interactions into revenue. As a certified HubSpot Solutions Provider, we optimize marketing automation, CRM, and inbound strategies to power sustainable growth. Ready to elevate your online presence and outshine the competition?"
        tags={["SEO", "Paid", "Email/SMS", "Automation", "CRM"]}
        ctaHref="/services/marketing"
        ctaLabel="Learn More"
        ariaLabel="Learn more about Marketing services"
        media={[
          { type: "video", src: "/services/Ecomm-1.mp4", poster: "/services/markting.webp", alt: "Campaign highlight" },
          { type: "image", src: "/images/placeholder.jpg", alt: "Performance dashboards" },
        ]}
      />

      {/* Custom development */}
      <ServiceBlock
        id="custom"
        title="Custom Development"
        description="Starting from scratch is only the first step. The real journey begins when you scale, grow, and push beyond your comfort zone — and we’re here to help you reach those goals."
        tags={["PWA", "DIGITAL MIGRATION", "REPLATFORMING"]}
        ctaHref="/services/marketing"
        ctaLabel="Learn More"
        ariaLabel="Learn more about Marketing services"
        media={[
          { type: "video", src: "/services/Ecomm-1.mp4", poster: "/services/markting.webp", alt: "Campaign highlight" },
          { type: "image", src: "/images/placeholder.jpg", alt: "Performance dashboards" },
        ]}
      />

      {/* AI development */}
      <ServiceBlock
        id="ai"
        title="AI Consultancy"
        description="As a recognized leader in applied AI strategy, we guide businesses through every stage of their AI journey — from ideation to execution. Whether it’s automation, predictive analytics, or custom AI solutions, we simplify complexity and deliver clarity."
        tags={["WRITING MODELS", "KEYNOTES", "PREDICTIVE ANALYSIS", "TRAINING"]}
        ctaHref="/services/marketing"
        ctaLabel="Learn More"
        ariaLabel="Learn more about Marketing services"
        media={[
          { type: "video", src: "/services/Ecomm-1.mp4", poster: "/services/markting.webp", alt: "Campaign highlight" },
          { type: "image", src: "/images/placeholder.jpg", alt: "Performance dashboards" },
        ]}
      />
    </main>
  );
}


