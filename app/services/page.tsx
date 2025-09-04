"use client";

import React from "react";
import Link from "next/link";

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
  <span className="text-xs px-3 py-1 rounded-full bg-gray-200 text-black transition-colors duration-200 hover:bg-gray-300">
    {label}
  </span>
);

const ServiceBlock: React.FC<ServiceBlockProps> = ({ id, title, description, tags, ctaHref, ctaLabel, ariaLabel, media }) => {
  return (
    <section id={id} className="bg-white text-black py-20 md:py-28 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column: text */}
        <div className="max-w-2xl">
          <p className="text-sm tracking-tight text-gray-500 mb-3">Services</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{title}</h2>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-6 max-w-prose">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
          <Link
            href={ctaHref}
            aria-label={ariaLabel}
            className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white border border-black shadow-sm transition-all duration-200 hover:bg-white hover:text-black"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Right column: media grid */}
        <div className="grid grid-cols-2 gap-4">
          {media.map((m, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden group shadow-sm">
              {m.type === "video" ? (
                <video
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  autoPlay
                  muted
                  loop
                  playsInline
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
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* eCommerce */}
      <ServiceBlock
        id="ecommerce"
        title="eCommerce"
        description="Proud Shopify partner and trusted end-to-end production expert for leading global brands. Beyond building webshops, we create complete digital architectures that drive growth and scalability."
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
        description="We create best-in-class, automated corporate websites and platforms—built to scale effortlessly and designed to go far beyond the ordinary."
        tags={["Design Systems", "UX", "Accessibility", "Motion"]}
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
        description="Ignite your brand and stand out with our marketing expertise. From SEO to social, we deliver results. As a Klaviyo elite partner and HubSpot solutions provider, we drive revenue through automation and strategy."
        tags={["SEO", "Paid", "Email/SMS", "Attribution"]}
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


