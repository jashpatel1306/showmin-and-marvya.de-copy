import { useState } from "react";
import { toast } from "sonner";
import ContactForm from "./ContactForm";

interface PartnerBadgeProps {
    label: string;
    icon?: React.ReactNode;
  }
  
  const PartnerBadge = ({ label, icon }: PartnerBadgeProps) => (
    <div className="inline-flex items-center gap-1.5 rounded-[7px] border border-foreground/10 bg-background/35 backdrop-blur-sm px-3 py-1.5">
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );

const FramerIcon = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
    <path d="M0 9.333h5V14L0 9.333Z" fill="#05F"/>
    <path d="M0 4.667h5l5 4.666H0V4.667Z" fill="#08F"/>
    <path d="M0 0h10L5 4.667H0V0Z" fill="#0AF"/>
  </svg>
);

const WebflowIcon = () => (
  <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
    <path
      d="M13.99 0L9.52 9.014 5.33 9.014 7.19 5.275h-.08C5.58 7.345 3.27 8.703 0 9.014V5.331s2.1-.123 3.33-1.469H0V0h3.74v3.183h.08L5.35 0h2.83v3.161h.09L9.84 0H14Z"
      fill="hsl(214, 93%, 52%)"
    />
  </svg>
);

const FigmaIcon = () => (
  <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
    <path d="M4 6a2 2 0 114 0 2 2 0 01-4 0Z" fill="#1ABCFE" />
    <path d="M0 10a2 2 0 012-2h2v2a2 2 0 01-4 0Z" fill="#0ACF83" />
    <path d="M4 0v4h2a2 2 0 100-4H4Z" fill="#FF7262" />
    <path d="M0 2a2 2 0 002 2h2V0H2a2 2 0 00-2 2Z" fill="#F24E1E" />
    <path d="M0 6a2 2 0 002 2h2V4H2a2 2 0 00-2 2Z" fill="#A259FF" />
  </svg>
);

const AgencyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
  </svg>
);

const CheckBadge = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="checkGrad" x1="0.04" x2="0.96" y1="0" y2="1">
          <stop offset="0" stopColor="hsl(197, 100%, 80%)" />
          <stop offset="1" stopColor="hsl(214, 100%, 53%)" />
        </linearGradient>
      </defs>
      <path
        d="M 6.153 1.192 C 7.314 -0.397 9.686 -0.397 10.847 1.192 C 11.114 1.556 11.562 1.741 12.008 1.672 C 13.953 1.37 15.63 3.047 15.328 4.992 C 15.259 5.438 15.444 5.886 15.809 6.153 C 17.397 7.314 17.397 9.686 15.809 10.847 C 15.444 11.114 15.259 11.562 15.328 12.008 C 15.63 13.953 13.953 15.63 12.008 15.328 C 11.562 15.259 11.114 15.444 10.847 15.808 C 9.686 17.397 7.314 17.397 6.153 15.808 C 5.886 15.444 5.438 15.259 4.992 15.328 C 3.047 15.63 1.37 13.953 1.672 12.008 C 1.741 11.562 1.556 11.114 1.192 10.847 C -0.397 9.686 -0.397 7.314 1.192 6.153 C 1.556 5.886 1.741 5.438 1.672 4.992 C 1.37 3.047 3.047 1.37 4.992 1.672 C 5.438 1.741 5.886 1.556 6.153 1.192 Z M 12.321 6.73 C 12.638 6.384 12.614 5.847 12.268 5.529 C 11.922 5.212 11.385 5.236 11.067 5.582 L 7.882 8.998 L 6.956 8.184 C 6.611 7.867 6.073 7.889 5.755 8.235 C 5.438 8.581 5.461 9.119 5.807 9.436 L 7.358 10.826 C 7.525 10.979 7.745 11.059 7.97 11.049 C 8.195 11.04 8.408 10.941 8.56 10.774 Z"
        fill="url(#checkGrad)"
      />
    </svg>
  );
  
  const SouthLogo = () => (
    <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="20"
        fontFamily="Urbanist, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="currentColor"
      >
        Showmine
      </text>
    </svg>
  );

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-background font-urbanist">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-5">
        <a href="/" className="text-foreground">
          <SouthLogo />
        </a>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-20 py-8 md:py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Get started
            </h1>

            {/* Steps */}
            <div className="flex flex-col gap-4">
              {["Fill out your details", "Choose a time to chat", "Join a quick call"].map(
                (step) => (
                  <div key={step} className="flex items-center gap-3">
                    <CheckBadge />
                    <span className="text-base font-medium text-foreground">{step}</span>
                  </div>
                )
              )}
            </div>

            {/* Availability */}
            {/* <div className="flex items-center gap-2.5 mt-2">
              <div className="w-2.5 h-2.5 rounded-full bg-status-dot" />
              <span className="text-sm text-muted-foreground">
                Available to start in February 2026
              </span>
            </div> */}

            {/* Partner Badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              <PartnerBadge label="Agency" icon={<AgencyIcon />} />
              <PartnerBadge label="Certified Partner" icon={<WebflowIcon />} />
              <PartnerBadge label="Pro Expert" icon={<FramerIcon />} />
              <PartnerBadge label="Creatives" icon={<FigmaIcon />} />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 max-w-xl w-full">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetStarted;