import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import showmineLogo from "@/assets/Showmine-transparent.png";
import { AskAiFooterWidget } from "./AskAiFooterWidget";

export function Footer() {
  return (
    <div data-nav-theme="light" className="footer-wrapper">
      <footer className="flex flex-col items-center relative overflow-hidden w-full border-t border-neutral-200">
        {/* Central Content Column */}
        <div className="footer-upper-layer w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-neutral-200 z-10 relative bg-white pb-[4.5cm] sm:pb-[5.5cm]">
          <div className="relative z-20">
            <div className="overflow-clip px-[16px] md:px-[var(--l)] pt-[40px] md:pt-[var(--xl)] pb-[var(--l)] flex flex-col gap-[20px] md:gap-[var(--l)]">
              <div
                className="flex flex-col gap-[16px] md:gap-0 md:flex-row md:items-center md:justify-between pr-0 md:pr-[var(--m)]"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition:
                    "opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1), transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                <div className="flex flex-col gap-[20px] md:gap-[var(--m)] flex-1">
                  {/* Native Showmine Brand Logo */}
                  <a
                    href="/"
                    className="flex items-center gap-2 shrink-0 w-fit"
                  >
                    <img
                      src={showmineLogo}
                      alt="Showmine"
                      className="h-8 md:h-10 w-auto object-contain"
                    />
                    <span className="text-lg font-bold tracking-tight text-neutral-950 md:text-2xl font-sans">
                      Showmine
                    </span>
                  </a>
                  <div className="flex flex-col md:flex-row gap-[4px] md:gap-[var(--xs)] md:items-center typo-body">
                    <a
                      href="mailto:showmineinfotech@gmail.com"
                      className="text-neutral-950 hover:text-primary transition-colors"
                    >
                      showmineinfotech@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[24px] md:gap-[var(--l)]">

                <div className="flex flex-wrap gap-y-[32px] justify-between md:flex-nowrap md:gap-[20px]">
                  <div
                    className="flex flex-col gap-[16px] md:gap-[var(--m)] w-[calc(50%-16px)] md:w-auto md:flex-1"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      transition:
                        "opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1), transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                  >
                    <span className="typo-label text-neutral-500">PRODUCT</span>
                    <div className="flex flex-col gap-[8px] md:gap-[var(--s)]">
                      <a
                        href="#"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Lead Generation
                      </a>
                      <a
                        href="#"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Email Automation
                      </a>
                      <a
                        href="#"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        B2B Jewellery Management System
                      </a>
                      <a
                        href="#"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Healthcare Solutions
                      </a>
                    </div>
                  </div>

                  <div
                    className="flex flex-col gap-[16px] md:gap-[var(--m)] w-[calc(50%-16px)] md:w-auto md:flex-1"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      transition:
                        "opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1) 80ms, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 80ms",
                    }}
                  >
                    <span className="typo-label text-neutral-500">
                      SERVICES
                    </span>
                    <div className="flex flex-col gap-[8px] md:gap-[var(--s)]">
                      <a
                        href="#"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Shopify E-Commerce
                      </a>
                      <Link
                        to="/shopify-headless"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Shopify Headless
                      </Link>
                      <a
                        href="#"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Shopify Theme Development
                      </a>
                      <Link
                        to="/shopify-plus-development"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Shopify Plus Development
                      </Link>
                      <a
                        href="#"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        AI & Automation
                      </a>
                      <a
                        href="/our-work"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Our Work
                      </a>
                    </div>
                  </div>

                  <div
                    className="flex flex-col gap-[16px] md:gap-[var(--m)] w-[calc(50%-16px)] md:w-auto md:flex-1"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      transition:
                        "opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1) 160ms, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 160ms",
                    }}
                  >
                    <span className="typo-label text-neutral-500">COMPANY</span>
                    <div className="flex flex-col gap-[8px] md:gap-[var(--s)]">
                      <a
                        href="/about"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        About Us
                      </a>
                      <a
                        href="/careers"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Careers
                      </a>
                      <a
                        href="/news"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        News
                      </a>
                      {/* <a
                        href="/terms-and-condition"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Terms and Conditions
                      </a> */}
                      {/* <a
                        href="/privacy-policy"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Privacy Policy
                      </a> */}
                      {/* <a
                        href="/refund-and-cancellations"
                        className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left"
                      >
                        Refund and Cancellations
                      </a> */}
                      {/* <button className="group relative typo-body text-neutral-950 hover:text-primary transition-colors w-fit text-left cursor-pointer">
                        Let's Talk
                      </button> */}
                    </div>
                  </div>

                  <div
                    className="flex flex-col gap-[16px] md:gap-[var(--m)] w-full md:w-auto md:max-w-[280px]"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      transition:
                        "opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1) 240ms, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 240ms",
                    }}
                  >
                    <div className="flex flex-col gap-[8px] md:gap-[var(--s)]">
                      <span className="typo-label text-neutral-500">
                        REGISTERED OFFICE ADDRESS
                      </span>
                      <p className="typo-body text-neutral-950 text-left">
                        16 Seabrook drive, Kitchener, ON V2R 1Y2
                      </p>
                    </div>
                    <div className="flex flex-col gap-[8px] md:gap-[var(--s)]">
                      <span className="typo-label text-neutral-500">
                        CORPORATE OFFICE ADDRESS
                      </span>
                      <p className="typo-body text-neutral-950 text-left">
                        8-9 Mahavir shooping center, Near Gajera cricle, Katargam, Surat.
                      </p>
                    </div>

                    {/* Ask AI about Showmine Widget below address */}
                    <AskAiFooterWidget />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-[16px] md:px-[var(--l)] py-[var(--l)] pb-[32px] md:pb-[var(--l)] flex flex-col md:flex-row gap-[20px] md:gap-0 items-start md:items-center md:justify-between mt-8 relative z-30">
              <div className="flex flex-col gap-[4px] md:gap-[var(--xs)] font-[family-name:var(--font-geist-mono)] font-normal text-[14px] md:text-[15px] leading-[20px] md:leading-[24px] text-neutral-500 text-left">
                <span>© 2026 Showmine. All rights reserved.</span>
                <span>Proudly made in 🇮🇳 India</span>
              </div>
              <div className="flex gap-[20px] md:gap-[var(--m)] items-center justify-start md:justify-center w-full md:w-auto mt-2 md:mt-0">
                <a
                  href="https://www.linkedin.com/company/showmine-infotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group block transition-transform duration-200 hover:scale-110"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-colors duration-200 text-[#373737] hover:text-neutral-950"
                  >
                    <path
                      d="M19.04 19.04H16.08V14.4c0-1.1-.02-2.53-1.54-2.53-1.55 0-1.78 1.2-1.78 2.45v4.72H9.79V9.5h2.85v1.3h.04c.4-.75 1.36-1.54 2.81-1.54 3 0 3.56 1.97 3.56 4.55l-.01 5.23ZM6.45 8.19a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM7.93 19.04H4.96V9.5h2.97v9.54ZM20.52 2H3.48C2.66 2 2 2.65 2 3.44v17.12C2 21.36 2.66 22 3.48 22h17.04c.82 0 1.48-.64 1.48-1.44V3.44C22 2.65 21.33 2 20.52 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group block transition-transform duration-200 hover:scale-110"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-200 text-[#373737] hover:text-neutral-950"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group block transition-transform duration-200 hover:scale-110"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-200 text-[#373737] hover:text-neutral-950"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a> */}
                {/* <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="group block transition-transform duration-200 hover:scale-110"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-200 text-[#373737] hover:text-neutral-950"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>

          {/* SHOWMINE text rendered by turning dots black within letter shapes */}
          <div className="showmine-dot-text-container">
            <span className="showmine-dot-text">SHOWMINE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
