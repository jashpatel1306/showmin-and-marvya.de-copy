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
  <span className="mt-4 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 transition-colors duration-200 hover:bg-neutral-100">
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
  useAutoplayOnView([
    { current: videoRefs.current[0] as HTMLVideoElement | null },
    { current: videoRefs.current[1] as HTMLVideoElement | null },
  ]);
  return (
    <section id={id} className="bg-white text-black py-16 md:py-24 border-b border-gray-200 relative">
      {/* baseline behind */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-neutral-200/90 z-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-8 items-center relative z-10">
        {/* Left column: text */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">{title}</h2>
          <p className="mt-3 text-neutral-600 leading-relaxed max-w-prose">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
          <Link
            href={ctaHref}
            aria-label={ariaLabel}
            className="mt-6 inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black hover:border hover:border-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Right column: media grid */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 grid grid-cols-2 gap-4 relative z-10">
          {media.map((m, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white">
                {m.type === "video" ? (
                  <video
                    ref={(el) => (videoRefs.current[idx] = el)}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 will-change-transform aspect-[16/9] md:aspect-[21/9]"
                    muted
                    loop
                    playsInline
                    autoPlay
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
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 will-change-transform aspect-[16/9] md:aspect-[21/9]"
                    loading="lazy"
                  />
                )}
              </div>
              {/* <p className="mt-2 text-xs text-neutral-500">Optional caption</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-black">
      <Navigation />
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Services</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-neutral-600">
            We design, build, and scale world-class commerce, websites, and growth engines.
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
        description="Proud Shopify partner and end-to-end production expert for leading brands. Beyond webshops, we architect complete, scalable commerce systems."
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
        description="Best-in-class, automated corporate websites and platforms—built to scale and designed to go beyond the ordinary."
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
        description="Full-funnel growth with SEO, paid, email, and SMS. As a Klaviyo elite + HubSpot certified partner, we turn touchpoints into revenue."
        tags={["SEO", "Paid", "Email/SMS", "Automation", "CRM"]}
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


