import { useState, useEffect, useRef } from "react";
import { DottedSection } from "@/components/DottedSection";
import { WDS } from "@/components/wds";
import { HeroGalleryShowcase } from "./ui/HeroGalleryShowcase";
import step1Img from "@/assets/how-it-works/imgi_146_step_01.webp";
import step2Img from "@/assets/how-it-works/imgi_147_step_02.webp";
import step3Img from "@/assets/how-it-works/imgi_148_step_03.webp";
import step4Img from "@/assets/how-it-works/imgi_149_step_04.webp";
import step5Img from "@/assets/how-it-works/imgi_150_step_05.webp";
import transformImg1 from "@/assets/HerosectionAi/broadcasting.avif";
import transformImg2 from "@/assets/HerosectionAi/automation.avif";
import transformImg3 from "@/assets/HerosectionAi/ai-anlaytics.avif";
import transformImg4 from "@/assets/HerosectionAi/cx-governance.avif";
import transformImg5 from "@/assets/HerosectionAi/ai-agents.avif";

import shopifyConnectVid from "@/assets/HomePage/connect/Shopify Integration.mp4";
import crmErpVid from "@/assets/HomePage/connect/CRm and ERP.mp4";
import paymentCheckoutVid from "@/assets/HomePage/connect/Payment and checkout.mp4";
import marketingVid from "@/assets/HomePage/connect/martketing integration.mp4";

export function ManageConversationsSection() {
  const [activeTab, setActiveTab] = useState("BUILD");
  const [isSticky, setIsSticky] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  const featureIndexRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  const [transformSelectedFeature, setTransformSelectedFeature] = useState(0);
  const [transformProgress, setTransformProgress] = useState(0);

  const transformIndexRef = useRef(0);
  const transformStartTimeRef = useRef<number | null>(null);

  const [automateSelectedFeature, setAutomateSelectedFeature] = useState(0);
  const [automateProgress, setAutomateProgress] = useState(0);

  const automateIndexRef = useRef(0);
  const automateStartTimeRef = useRef<number | null>(null);

  const [connectSelectedFeature, setConnectSelectedFeature] = useState(0);
  const [connectProgress, setConnectProgress] = useState(0);

  const connectIndexRef = useRef(0);
  const connectStartTimeRef = useRef<number | null>(null);

  const [scaleSelectedFeature, setScaleSelectedFeature] = useState(0);
  const [scaleProgress, setScaleProgress] = useState(0);

  const scaleIndexRef = useRef(0);
  const scaleStartTimeRef = useRef<number | null>(null);

  // Scroll listener to toggle sticky bar & update active tab on scroll
  useEffect(() => {
    const tabs = ["build", "transform", "automate", "connect", "scale"];

    const handleScroll = () => {
      // 1. Check sticky bar visibility bounds:
      // Starts when five-tab-nav-anchor reaches top header (rect.top <= 60)
      // Ends when section-scale bottom passes under sticky bar (scaleRect.bottom <= 108)
      const anchorEl = document.getElementById("five-tab-nav-anchor");
      const scaleEl = document.getElementById("section-scale");

      if (anchorEl && scaleEl) {
        const anchorTop = anchorEl.getBoundingClientRect().top;
        const scaleBottom = scaleEl.getBoundingClientRect().bottom;

        if (anchorTop <= 60 && scaleBottom > 108) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else if (anchorEl) {
        const anchorTop = anchorEl.getBoundingClientRect().top;
        if (anchorTop <= 60) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }

      // 2. Active section tracking based on viewport getBoundingClientRect (header 60px + nav 48px = 108px threshold)
      const threshold = 160;
      for (let i = tabs.length - 1; i >= 0; i--) {
        const secId = `section-${tabs[i]}`;
        const el = document.getElementById(secId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            setActiveTab(tabs[i].toUpperCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Strict Sequential WhatsApp Status Loop: 6.0 seconds per tab (0 -> 1 -> 2 -> 3 -> 4 -> 0...)
  useEffect(() => {
    const DURATION = 6000; // Exact 6 seconds per tab
    let animId: number;

    const animate = (now: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = now;
      }

      const elapsed = now - startTimeRef.current;
      const currentProgress = Math.min((elapsed / DURATION) * 100, 100);

      if (elapsed >= DURATION) {
        // Strictly move to next tab in order: (0 -> 1 -> 2 -> 3 -> 4 -> 0)
        const nextIdx = (featureIndexRef.current + 1) % 5;
        setSelectedFeature(nextIdx);
        featureIndexRef.current = nextIdx;
        setProgress(0);
        startTimeRef.current = now;
      } else {
        setProgress(currentProgress);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleFeatureSelect = (idx: number) => {
    setSelectedFeature(idx);
    featureIndexRef.current = idx;
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  // Strict Sequential WhatsApp Status Loop for TRANSFORM (6.0s per tab)
  useEffect(() => {
    const DURATION = 6000; // Exact 6 seconds per tab
    let animId: number;

    const animate = (now: number) => {
      if (transformStartTimeRef.current === null) {
        transformStartTimeRef.current = now;
      }

      const elapsed = now - transformStartTimeRef.current;
      const currentProgress = Math.min((elapsed / DURATION) * 100, 100);

      if (elapsed >= DURATION) {
        const nextIdx = (transformIndexRef.current + 1) % 5;
        setTransformSelectedFeature(nextIdx);
        transformIndexRef.current = nextIdx;
        setTransformProgress(0);
        transformStartTimeRef.current = now;
      } else {
        setTransformProgress(currentProgress);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleTransformFeatureSelect = (idx: number) => {
    setTransformSelectedFeature(idx);
    transformIndexRef.current = idx;
    setTransformProgress(0);
    transformStartTimeRef.current = performance.now();
  };

  // Strict Sequential WhatsApp Status Loop for AUTOMATE (6.0s per tab)
  useEffect(() => {
    const DURATION = 6000; // Exact 6 seconds per tab
    let animId: number;

    const animate = (now: number) => {
      if (automateStartTimeRef.current === null) {
        automateStartTimeRef.current = now;
      }

      const elapsed = now - automateStartTimeRef.current;
      const currentProgress = Math.min((elapsed / DURATION) * 100, 100);

      if (elapsed >= DURATION) {
        const nextIdx = (automateIndexRef.current + 1) % 5;
        setAutomateSelectedFeature(nextIdx);
        automateIndexRef.current = nextIdx;
        setAutomateProgress(0);
        automateStartTimeRef.current = now;
      } else {
        setAutomateProgress(currentProgress);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleAutomateFeatureSelect = (idx: number) => {
    setAutomateSelectedFeature(idx);
    automateIndexRef.current = idx;
    setAutomateProgress(0);
    automateStartTimeRef.current = performance.now();
  };

  // Strict Sequential WhatsApp Status Loop for CONNECT (6.0s per tab)
  useEffect(() => {
    const DURATION = 6000; // Exact 6 seconds per tab
    let animId: number;

    const animate = (now: number) => {
      if (connectStartTimeRef.current === null) {
        connectStartTimeRef.current = now;
      }

      const elapsed = now - connectStartTimeRef.current;
      const currentProgress = Math.min((elapsed / DURATION) * 100, 100);

      if (elapsed >= DURATION) {
        const nextIdx = (connectIndexRef.current + 1) % connectFeatures.length;
        setConnectSelectedFeature(nextIdx);
        connectIndexRef.current = nextIdx;
        setConnectProgress(0);
        connectStartTimeRef.current = now;
      } else {
        setConnectProgress(currentProgress);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleConnectFeatureSelect = (idx: number) => {
    setConnectSelectedFeature(idx);
    connectIndexRef.current = idx;
    setConnectProgress(0);
    connectStartTimeRef.current = performance.now();
  };

  // Strict Sequential WhatsApp Status Loop for SCALE (6.0s per tab)
  useEffect(() => {
    const DURATION = 6000; // Exact 6 seconds per tab
    let animId: number;

    const animate = (now: number) => {
      if (scaleStartTimeRef.current === null) {
        scaleStartTimeRef.current = now;
      }

      const elapsed = now - scaleStartTimeRef.current;
      const currentProgress = Math.min((elapsed / DURATION) * 100, 100);

      if (elapsed >= DURATION) {
        const nextIdx = (scaleIndexRef.current + 1) % 5;
        setScaleSelectedFeature(nextIdx);
        scaleIndexRef.current = nextIdx;
        setScaleProgress(0);
        scaleStartTimeRef.current = now;
      } else {
        setScaleProgress(currentProgress);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleScaleFeatureSelect = (idx: number) => {
    setScaleSelectedFeature(idx);
    scaleIndexRef.current = idx;
    setScaleProgress(0);
    scaleStartTimeRef.current = performance.now();
  };

  // Smooth scroll handler when a tab is clicked
  const scrollToSection = (tabName: string) => {
    setActiveTab(tabName);
    const targetId = `section-${tabName.toLowerCase()}`;
    const el = document.getElementById(targetId);
    if (el) {
      // Offset by 60px header + 48px sticky bar = 108px
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 108;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const features = [
    {
      id: "ai-agents",
      title: "Shopify Store Design & Development",
      desc: "Build a Shopify store that looks like your brand and works like your business.",
      image: step1Img,
      badge: "Shopify Plus Partner",
      tag: "Storefront Design",
      icon: (
        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "reminders",
      title: "Headless Commerce",
      desc: "Build flexible, high-performance commerce experiences without being limited by a traditional storefront.",
      image: step2Img,
      badge: "Headless Architecture",
      tag: "API First",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      id: "filters",
      title: "Custom Software",
      desc: "Turn complex business requirements into software built specifically for your workflow.",
      image: step3Img,
      badge: "Workflow Engine",
      tag: "Custom Apps",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
    },
    {
      id: "summaries",
      title: "Websites & Digital Experiences",
      desc: "Create digital experiences that communicate your brand and convert visitors into customers.",
      image: step4Img,
      badge: "Digital Storefront",
      tag: "High Conversion",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: "hierarchy",
      title: "Marketing Foundations",
      desc: "Build the digital foundation your marketing needs to perform.",
      image: step5Img,
      badge: "Growth Infrastructure",
      tag: "Tracking & SEO",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const transformFeatures = [
    {
      id: "migration",
      title: "Migrate to Shopify",
      desc: "Move your ecommerce business to Shopify with a structured migration strategy.",
      image: transformImg1,
      badge: "Platform Migration",
      tag: "Seamless Transition",
      icon: (
        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      id: "speed-optimization",
      title: "Shopify Store Customization",
      desc: "Your existing Shopify store doesn't need to be rebuilt from scratch. We improve what already works and fix what doesn't.",
      image: transformImg2,
      badge: "Store Customization",
      tag: "Performance Boost",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "ux-redesign",
      title: "Replatform & Modernization",
      desc: "Replace outdated technology with a modern digital foundation built for your next stage.",
      image: transformImg3,
      badge: "Modern Architecture",
      tag: "Conversion Rate",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      id: "code-refactoring",
      title: "Shopify Audit",
      desc: "Understand what's stopping your store from performing better.",
      image: transformImg4,
      badge: "Store Audit",
      tag: "Optimization Insights",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: "data-sync",
      title: "Marketing & CRO Transformation",
      desc: "Transform traffic into measurable business growth.",
      image: transformImg5,
      badge: "CRO Growth",
      tag: "Growth Engine",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const automateFeatures = [
    {
      id: "lead-qualification",
      title: "Lead Generation",
      desc: "Find and organize potential customers faster.",
      image: step1Img,
      badge: "AI Qualification",
      tag: "Lead Routing",
      icon: (
        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "communication-bot",
      title: "Email Automation",
      desc: "Turn manual customer communication into automated journeys.",
      image: step2Img,
      badge: "Email Journeys",
      tag: "Automated Messaging",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      id: "marketing-workflows",
      title: "Marketing Automation",
      desc: "Connect your marketing activities into automated customer journeys.",
      image: step3Img,
      badge: "Lifecycle Marketing",
      tag: "Behavior Triggers",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      id: "internal-ops",
      title: "Business Workflow Automation",
      desc: "Automate the repetitive operations that slow your team down.",
      image: step4Img,
      badge: "Process Automation",
      tag: "Internal Workflows",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "crm-sync",
      title: "Ecommerce Automation",
      desc: "Automate the everyday operations behind your online store.",
      image: step5Img,
      badge: "Ecommerce Sync",
      tag: "Store Automation",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const connectFeatures = [
    {
      id: "shopify-integration",
      title: "Shopify Integration",
      desc: "Connect Shopify with the tools your business already relies on.",
      video: shopifyConnectVid,
      image: transformImg1,
      badge: "Shopify Connect",
      tag: "App Integrations",
      icon: (
        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "crm-erp-integration",
      title: "CRM & ERP Integration",
      desc: "Connect customer and operational data across your business.",
      video: crmErpVid,
      image: transformImg5,
      badge: "CRM & ERP",
      tag: "Operational Data",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "payment-checkout",
      title: "Payment & Checkout",
      desc: "Build reliable payment and checkout experiences across your commerce ecosystem.",
      video: paymentCheckoutVid,
      image: transformImg4,
      badge: "Payment Engine",
      tag: "Checkout Flow",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: "marketing-integration",
      title: "Marketing Integration",
      desc: "Connect marketing platforms to the data your business already owns.",
      video: marketingVid,
      image: transformImg2,
      badge: "Marketing Sync",
      tag: "Data Flow",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const scaleFeatures = [
    {
      id: "shopify-plus",
      title: "Shopify Plus",
      desc: "Enterprise commerce infrastructure for ambitious businesses.",
      image: step1Img,
      badge: "Shopify Plus",
      tag: "Enterprise Scale",
      icon: (
        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "b2b-commerce",
      title: "B2B & Wholesale",
      desc: "Commerce experiences designed around complex B2B purchasing workflows.",
      image: step2Img,
      badge: "B2B Commerce",
      tag: "Wholesale Engine",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m3 0h10M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "custom-saas",
      title: "Jewellery Technology",
      desc: "Purpose-built technology for jewellery manufacturers, wholesalers, suppliers, and retailers.",
      image: step3Img,
      badge: "Jewellery Tech",
      tag: "Specialized Stack",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      id: "multi-store",
      title: "Healthcare Technology",
      desc: "Digital systems designed around modern healthcare operations.",
      image: step4Img,
      badge: "Healthcare Tech",
      tag: "Digital Health",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 00-2-2h-1a2 2 0 01-2-2V4.055M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
    },
    {
      id: "performance-audit",
      title: "Growth & Marketing",
      desc: "Turn your digital infrastructure into a measurable growth engine.",
      image: step5Img,
      badge: "Growth Engine",
      tag: "Scale & Marketing",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const renderNavButtons = () => (
    <div className="w-full bg-white grid grid-cols-5 border-t border-b border-[#D1D1D6] divide-x divide-[#D1D1D6]">
      {["BUILD", "TRANSFORM", "AUTOMATE", "CONNECT", "SCALE"].map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => scrollToSection(tab)}
            className={`py-3 sm:py-3.5 px-0.5 sm:px-2 text-[9.5px] min-[380px]:text-[11px] md:text-[12px] font-mono font-bold tracking-normal min-[380px]:tracking-wider sm:tracking-widest transition-all relative cursor-pointer text-center truncate ${isActive
              ? "bg-[#EAF7F1] text-[#007A5A] ring-1 ring-[#27B578] ring-inset z-10"
              : "bg-white text-[#333333] hover:bg-[#F9F9F8] hover:text-black"
              }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );

  return (
    <section className="bg-white relative">
      {/* Dotted Grid Divider above 5-Tab Bar */}
      <DottedSection bgClass="bg-white" />

      {/* Fixed Sticky Header-Attached 5-Tab Bar when scrolled downside past top position */}
      {isSticky && (
        <div className="fixed top-[60px] left-0 right-0 z-40 w-full flex justify-center bg-transparent pointer-events-none">
          <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-neutral-200 bg-white shadow-md pointer-events-auto">
            {renderNavButtons()}
          </div>
        </div>
      )}

      {/* 3-Part Section Layout (Left 120px Dotted Column + Center 1118px Column + Right 120px Dotted Column) */}
      <div className="relative mx-auto max-w-[1358px] w-full flex justify-center">
        {/* Left Vertical Side Column (W: 120px) with 1cm White Gap & Border before Center Column */}
        <div className="hidden xl:flex w-[120px] shrink-0 border-r border-neutral-200 bg-white">
          <div
            className="flex-1 relative overflow-hidden border-r border-neutral-200"
            style={{
              backgroundImage:
                "radial-gradient(rgba(163, 163, 163, 0.45) 1px, #ffffff 1px)",
              backgroundSize: "5.67px 5.67px",
            }}
          />
          {/* 1cm Solid White Vertical Gap/Strip */}
          <div className="w-[16px] bg-white shrink-0" />
        </div>

        {/* Center Column (W: 1118px) */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-[1118px] xl:mx-0 border-l border-r border-neutral-200 flex flex-col items-center bg-white relative shrink-0">
          {/* Anchor point to calculate exact top threshold (60px from header) */}
          <div id="five-tab-nav-anchor" className="w-full h-0 pointer-events-none" />

          {/* Inline Navigation Bar (renders when not sticky, or placeholder when sticky) */}
          <div id="five-tab-nav" className="w-full">
            {isSticky ? (
              <div className="w-full h-[48px] bg-white border-t border-b border-[#D1D1D6]" />
            ) : (
              renderNavButtons()
            )}
          </div>

          {/* 1. BUILD SECTION */}
          <div id="section-build" className="w-full flex flex-col items-center pt-4">
            {/* Section Header */}
            <div className="pt-8 md:pt-12 pb-8 md:pb-10 px-4 md:px-6 text-center max-w-[860px] mx-auto flex flex-col items-center">
              <div className="flex items-center gap-2 justify-center mb-3">
                <span className="w-4 h-px bg-emerald-600/60" />
                <span className="text-[11px] font-bold font-mono text-emerald-600 tracking-[0.2em] uppercase">
                  BUILD
                </span>
                <span className="w-4 h-px bg-emerald-600/60" />
              </div>
              <h2 className="font-serif text-[#131316] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[1.2] tracking-tight font-semibold mb-3 md:mb-4">
                Shopify experiences built around your business
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[660px]">
                Design and develop high-performance Shopify stores that combine strong user experiences, custom functionality, and scalable technology.              </p>
            </div>

            {/* Hero Gallery Showcase Container */}
            <div className="w-full px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-14">
              <HeroGalleryShowcase />
            </div>

            {/* WDS Horizontal Dotted Section below dashboard app frame */}
            <WDS className="m-0 relative z-20" />

            {/* Feature Interactive List & Card Showcase */}
            <div className="w-full px-4 sm:px-6 md:px-8 pt-6 pb-12 md:pt-8 md:pb-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Left 5 Features List */}
                <div className="md:col-span-5 flex flex-col gap-2">
                  {features.map((feat, idx) => {
                    const isActive = selectedFeature === idx;
                    return (
                      <button
                        key={feat.id}
                        onClick={() => handleFeatureSelect(idx)}
                        className={`p-4 rounded-xl text-left transition-all flex flex-col gap-2 border cursor-pointer relative overflow-hidden ${isActive
                          ? "bg-white border-neutral-300 shadow-sm"
                          : "bg-transparent border-transparent hover:bg-neutral-100/60"
                          }`}
                      >
                        <div className="flex gap-3.5 items-start w-full">
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${isActive ? "bg-emerald-50" : "bg-neutral-100"}`}>
                            {feat.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <h4 className={`text-sm font-semibold truncate ${isActive ? "text-neutral-900" : "text-neutral-700"}`}>
                                {feat.title}
                              </h4>
                              {isActive && (
                                <span className="text-[9.5px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                                  {idx + 1}/5
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                              {feat.desc}
                            </p>
                          </div>
                        </div>

                        {/* Edge-to-Edge Status Progress Line at Bottom of Active Tab Card */}
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100 overflow-hidden">
                            <div
                              className="h-full bg-emerald-600"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right Interactive Preview Card with WhatsApp Status Effect */}
                <div
                  className="md:col-span-7 bg-[#FAF9F6] border border-[#D1D1D6] rounded-xl p-4 md:p-6 relative overflow-hidden shadow-xs flex flex-col justify-between"
                >
                  {/* Corner Accent Boxes */}
                  <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-400" />
                  <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-400" />
                  <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-400" />
                  <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-400" />

                  {/* Top WhatsApp Status Bar (5 Segment Progress Bars) */}
                  <div className="flex gap-1.5 mb-4">
                    {features.map((_, idx) => {
                      let barWidth = "0%";
                      if (idx < selectedFeature) {
                        barWidth = "100%";
                      } else if (idx === selectedFeature) {
                        barWidth = `${progress}%`;
                      } else {
                        barWidth = "0%";
                      }
                      return (
                        <div key={idx} className="flex-1 h-1.5 bg-neutral-200/90 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-600"
                            style={{ width: barWidth }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Title & Header Status Info */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        {selectedFeature + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900 text-xs block">
                          {features[selectedFeature].title}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono">
                          {features[selectedFeature].tag} • Status {selectedFeature + 1} of 5 (6s)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full text-[10px] font-medium font-mono">
                        {features[selectedFeature].badge}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Image & Preview Frame */}
                  <div className="space-y-4 mb-4 text-xs">
                    <div className="relative rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-white group">
                      <img
                        src={features[selectedFeature].image}
                        alt={features[selectedFeature].title}
                        className="w-full h-auto object-cover max-h-[300px] transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 flex flex-col justify-end p-4 text-white">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
                          {features[selectedFeature].badge}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold leading-snug">
                          {features[selectedFeature].desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Status Navigation & Indicator Bar */}
                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                      <span>▶️ Auto-advancing (6s per tab)</span>
                    </div>
                    <div className="flex gap-1.5">
                      {features.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleFeatureSelect(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${selectedFeature === idx
                            ? "bg-emerald-600 w-6"
                            : "bg-neutral-300 hover:bg-neutral-400"
                            }`}
                          title={`Switch to Tab ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WDS Horizontal Dotted Section above REACH & BROADCAST */}
          <WDS className="m-0 relative z-20" />

          {/* 2. TRANSFORM SECTION */}
          <div id="section-transform" className="w-full flex flex-col items-center pt-0 pb-0">
            <div className="pt-4 pb-8 px-4 md:px-6 text-center max-w-[860px] mx-auto flex flex-col items-center">
              <div className="flex items-center gap-2 justify-center mb-3">
                <span className="w-4 h-px bg-emerald-600/60" />
                <span className="text-[11px] font-bold font-mono text-emerald-600 tracking-[0.2em] uppercase">
                  TRANSFORM
                </span>
                <span className="w-4 h-px bg-emerald-600/60" />
              </div>
              <h2 className="font-serif text-[#131316] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[1.2] tracking-tight font-semibold mb-3 md:mb-4">
                Turn existing digital experiences into better-performing ones
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[660px]">
                Migrate, redesign, optimize, and modernize your existing technology without losing the data, customers, or business value you've already built.
              </p>
            </div>

            {/* WDS Horizontal Dotted Section above TRANSFORM vertical tab showcase */}
            <WDS className="m-0 relative z-20" />

            {/* Feature Interactive List & Card Showcase for TRANSFORM */}
            <div className="w-full px-4 sm:px-6 md:px-8 pt-6 pb-12 md:pt-8 md:pb-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Left 5 Features List */}
                <div className="md:col-span-5 flex flex-col gap-2">
                  {transformFeatures.map((feat, idx) => {
                    const isActive = transformSelectedFeature === idx;
                    return (
                      <button
                        key={feat.id}
                        onClick={() => handleTransformFeatureSelect(idx)}
                        className={`p-4 rounded-xl text-left transition-all flex flex-col gap-2 border cursor-pointer relative overflow-hidden ${isActive
                          ? "bg-white border-neutral-300 shadow-sm"
                          : "bg-transparent border-transparent hover:bg-neutral-100/60"
                          }`}
                      >
                        <div className="flex gap-3.5 items-start w-full">
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${isActive ? "bg-emerald-50" : "bg-neutral-100"}`}>
                            {feat.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <h4 className={`text-sm font-semibold truncate ${isActive ? "text-neutral-900" : "text-neutral-700"}`}>
                                {feat.title}
                              </h4>
                              {isActive && (
                                <span className="text-[9.5px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                                  {idx + 1}/5
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                              {feat.desc}
                            </p>
                          </div>
                        </div>

                        {/* Edge-to-Edge Status Progress Line at Bottom of Active Tab Card */}
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100 overflow-hidden">
                            <div
                              className="h-full bg-emerald-600"
                              style={{ width: `${transformProgress}%` }}
                            />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right Interactive Preview Card with WhatsApp Status Effect */}
                <div className="md:col-span-7 bg-[#FAF9F6] border border-[#D1D1D6] rounded-xl p-4 md:p-6 relative overflow-hidden shadow-xs flex flex-col justify-between">
                  {/* Corner Accent Boxes */}
                  <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-400" />
                  <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-400" />
                  <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-400" />
                  <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-400" />

                  {/* Top WhatsApp Status Bar (5 Segment Progress Bars) */}
                  <div className="flex gap-1.5 mb-4">
                    {transformFeatures.map((_, idx) => {
                      let barWidth = "0%";
                      if (idx < transformSelectedFeature) {
                        barWidth = "100%";
                      } else if (idx === transformSelectedFeature) {
                        barWidth = `${transformProgress}%`;
                      } else {
                        barWidth = "0%";
                      }
                      return (
                        <div key={idx} className="flex-1 h-1.5 bg-neutral-200/90 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-600"
                            style={{ width: barWidth }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Title & Header Status Info */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        {transformSelectedFeature + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900 text-xs block">
                          {transformFeatures[transformSelectedFeature].title}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono">
                          {transformFeatures[transformSelectedFeature].tag} • Status {transformSelectedFeature + 1} of 5 (6s)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full text-[10px] font-medium font-mono">
                        {transformFeatures[transformSelectedFeature].badge}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Image & Preview Frame */}
                  <div className="space-y-4 mb-4 text-xs">
                    <div className="relative rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-white group">
                      <img
                        src={transformFeatures[transformSelectedFeature].image}
                        alt={transformFeatures[transformSelectedFeature].title}
                        className="w-full h-auto object-cover max-h-[300px] transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 flex flex-col justify-end p-4 text-white">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
                          {transformFeatures[transformSelectedFeature].badge}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold leading-snug">
                          {transformFeatures[transformSelectedFeature].desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Status Navigation & Indicator Bar */}
                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                      <span>▶️ Auto-advancing (6s per tab)</span>
                    </div>
                    <div className="flex gap-1.5">
                      {transformFeatures.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleTransformFeatureSelect(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${transformSelectedFeature === idx
                            ? "bg-emerald-600 w-6"
                            : "bg-neutral-300 hover:bg-neutral-400"
                            }`}
                          title={`Switch to Tab ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WDS Horizontal Dotted Section above WORKFLOW AUTOMATION */}
          <WDS className="m-0 relative z-20" />

          {/* 3. AUTOMATE SECTION */}
          <div id="section-automate" className="w-full flex flex-col items-center pt-0 pb-0">
            <div className="pt-4 pb-8 px-4 md:px-6 text-center max-w-[860px] mx-auto flex flex-col items-center">
              <div className="flex items-center gap-2 justify-center mb-3">
                <span className="w-4 h-px bg-emerald-600/60" />
                <span className="text-[11px] font-bold font-mono text-emerald-600 tracking-[0.2em] uppercase">
                  AUTOMATE
                </span>
                <span className="w-4 h-px bg-emerald-600/60" />
              </div>
              <h2 className="font-serif text-[#131316] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[1.2] tracking-tight font-semibold mb-3 md:mb-4">
                Replace repetitive work with intelligent automation
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[660px]">
                Automate lead generation, customer communication, marketing workflows, internal operations, and repetitive business processes.
              </p>
            </div>

            {/* WDS Horizontal Dotted Section above AUTOMATE vertical tab showcase */}
            <WDS className="m-0 relative z-20" />

            {/* Feature Interactive List & Card Showcase for AUTOMATE */}
            <div className="w-full px-4 sm:px-6 md:px-8 pt-6 pb-12 md:pt-8 md:pb-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Left 5 Features List */}
                <div className="md:col-span-5 flex flex-col gap-2">
                  {automateFeatures.map((feat, idx) => {
                    const isActive = automateSelectedFeature === idx;
                    return (
                      <button
                        key={feat.id}
                        onClick={() => handleAutomateFeatureSelect(idx)}
                        className={`p-4 rounded-xl text-left transition-all flex flex-col gap-2 border cursor-pointer relative overflow-hidden ${isActive
                          ? "bg-white border-neutral-300 shadow-sm"
                          : "bg-transparent border-transparent hover:bg-neutral-100/60"
                          }`}
                      >
                        <div className="flex gap-3.5 items-start w-full">
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${isActive ? "bg-emerald-50" : "bg-neutral-100"}`}>
                            {feat.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <h4 className={`text-sm font-semibold truncate ${isActive ? "text-neutral-900" : "text-neutral-700"}`}>
                                {feat.title}
                              </h4>
                              {isActive && (
                                <span className="text-[9.5px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                                  {idx + 1}/5
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                              {feat.desc}
                            </p>
                          </div>
                        </div>

                        {/* Edge-to-Edge Status Progress Line at Bottom of Active Tab Card */}
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100 overflow-hidden">
                            <div
                              className="h-full bg-emerald-600"
                              style={{ width: `${automateProgress}%` }}
                            />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right Interactive Preview Card with WhatsApp Status Effect */}
                <div className="md:col-span-7 bg-[#FAF9F6] border border-[#D1D1D6] rounded-xl p-4 md:p-6 relative overflow-hidden shadow-xs flex flex-col justify-between">
                  {/* Corner Accent Boxes */}
                  <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-400" />
                  <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-400" />
                  <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-400" />
                  <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-400" />

                  {/* Top WhatsApp Status Bar (5 Segment Progress Bars) */}
                  <div className="flex gap-1.5 mb-4">
                    {automateFeatures.map((_, idx) => {
                      let barWidth = "0%";
                      if (idx < automateSelectedFeature) {
                        barWidth = "100%";
                      } else if (idx === automateSelectedFeature) {
                        barWidth = `${automateProgress}%`;
                      } else {
                        barWidth = "0%";
                      }
                      return (
                        <div key={idx} className="flex-1 h-1.5 bg-neutral-200/90 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-600"
                            style={{ width: barWidth }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Title & Header Status Info */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        {automateSelectedFeature + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900 text-xs block">
                          {automateFeatures[automateSelectedFeature].title}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono">
                          {automateFeatures[automateSelectedFeature].tag} • Status {automateSelectedFeature + 1} of 5 (6s)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full text-[10px] font-medium font-mono">
                        {automateFeatures[automateSelectedFeature].badge}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Image & Preview Frame */}
                  <div className="space-y-4 mb-4 text-xs">
                    <div className="relative rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-white group">
                      <img
                        src={automateFeatures[automateSelectedFeature].image}
                        alt={automateFeatures[automateSelectedFeature].title}
                        className="w-full h-auto object-cover max-h-[300px] transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 flex flex-col justify-end p-4 text-white">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
                          {automateFeatures[automateSelectedFeature].badge}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold leading-snug">
                          {automateFeatures[automateSelectedFeature].desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Status Navigation & Indicator Bar */}
                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                      <span>▶️ Auto-advancing (6s per tab)</span>
                    </div>
                    <div className="flex gap-1.5">
                      {automateFeatures.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAutomateFeatureSelect(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${automateSelectedFeature === idx
                            ? "bg-emerald-600 w-6"
                            : "bg-neutral-300 hover:bg-neutral-400"
                            }`}
                          title={`Switch to Tab ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WDS Horizontal Dotted Section above ANALYTICS & INSIGHTS */}
          <WDS className="m-0 relative z-20" />

          {/* 4. CONNECT SECTION */}
          <div id="section-connect" className="w-full flex flex-col items-center pt-0 pb-0">
            <div className="pt-4 pb-8 px-4 md:px-6 text-center max-w-[860px] mx-auto flex flex-col items-center">
              <div className="flex items-center gap-2 justify-center mb-3">
                <span className="w-4 h-px bg-emerald-600/60" />
                <span className="text-[11px] font-bold font-mono text-emerald-600 tracking-[0.2em] uppercase">
                  CONNECT
                </span>
                <span className="w-4 h-px bg-emerald-600/60" />
              </div>
              <h2 className="font-serif text-[#131316] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[1.2] tracking-tight font-semibold mb-3 md:mb-4">
                Connect every system that powers your business
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[660px]">
                Bring your ecommerce, CRM, ERP, marketing, inventory, payment, and internal systems together so your data flows where it needs to go.
              </p>
            </div>

            {/* WDS Horizontal Dotted Section above CONNECT vertical tab showcase */}
            <WDS className="m-0 relative z-20" />

            {/* Feature Interactive List & Card Showcase for CONNECT */}
            <div className="w-full px-4 sm:px-6 md:px-8 pt-6 pb-12 md:pt-8 md:pb-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Left 5 Features List */}
                <div className="md:col-span-5 flex flex-col gap-2">
                  {connectFeatures.map((feat, idx) => {
                    const isActive = connectSelectedFeature === idx;
                    return (
                      <button
                        key={feat.id}
                        onClick={() => handleConnectFeatureSelect(idx)}
                        className={`p-4 rounded-xl text-left transition-all flex flex-col gap-2 border cursor-pointer relative overflow-hidden ${isActive
                          ? "bg-white border-neutral-300 shadow-sm"
                          : "bg-transparent border-transparent hover:bg-neutral-100/60"
                          }`}
                      >
                        <div className="flex gap-3.5 items-start w-full">
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${isActive ? "bg-emerald-50" : "bg-neutral-100"}`}>
                            {feat.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <h4 className={`text-sm font-semibold truncate ${isActive ? "text-neutral-900" : "text-neutral-700"}`}>
                                {feat.title}
                              </h4>
                              {isActive && (
                                <span className="text-[9.5px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                                  {idx + 1}/{connectFeatures.length}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                              {feat.desc}
                            </p>
                          </div>
                        </div>

                        {/* Edge-to-Edge Status Progress Line at Bottom of Active Tab Card */}
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100 overflow-hidden">
                            <div
                              className="h-full bg-emerald-600"
                              style={{ width: `${connectProgress}%` }}
                            />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right Interactive Preview Card with WhatsApp Status Effect */}
                <div className="md:col-span-7 bg-[#FAF9F6] border border-[#D1D1D6] rounded-xl p-4 md:p-6 relative overflow-hidden shadow-xs flex flex-col justify-between">
                  {/* Corner Accent Boxes */}
                  <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-400" />
                  <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-400" />
                  <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-400" />
                  <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-400" />

                  {/* Top WhatsApp Status Bar (Segment Progress Bars) */}
                  <div className="flex gap-1.5 mb-4">
                    {connectFeatures.map((_, idx) => {
                      let barWidth = "0%";
                      if (idx < connectSelectedFeature) {
                        barWidth = "100%";
                      } else if (idx === connectSelectedFeature) {
                        barWidth = `${connectProgress}%`;
                      } else {
                        barWidth = "0%";
                      }
                      return (
                        <div key={idx} className="flex-1 h-1.5 bg-neutral-200/90 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-600"
                            style={{ width: barWidth }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Title & Header Status Info */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        {connectSelectedFeature + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900 text-xs block">
                          {connectFeatures[connectSelectedFeature].title}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono">
                          {connectFeatures[connectSelectedFeature].tag} • Status {connectSelectedFeature + 1} of {connectFeatures.length} (6s)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full text-[10px] font-medium font-mono">
                        {connectFeatures[connectSelectedFeature].badge}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Video & Preview Frame */}
                  <div className="space-y-4 mb-4 text-xs">
                    <div className="relative rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-black group aspect-video flex items-center justify-center">
                      {"video" in connectFeatures[connectSelectedFeature] && connectFeatures[connectSelectedFeature].video ? (
                        <video
                          key={connectFeatures[connectSelectedFeature].id}
                          src={connectFeatures[connectSelectedFeature].video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover max-h-[340px] transition-all duration-300"
                        />
                      ) : (
                        <img
                          src={connectFeatures[connectSelectedFeature].image}
                          alt={connectFeatures[connectSelectedFeature].title}
                          className="w-full h-auto object-cover max-h-[300px] transition-all duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-4 text-white">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
                          {connectFeatures[connectSelectedFeature].badge}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold leading-snug">
                          {connectFeatures[connectSelectedFeature].desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Status Navigation & Indicator Bar */}
                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                      <span>▶️ Auto-advancing (6s per tab)</span>
                    </div>
                    <div className="flex gap-1.5">
                      {connectFeatures.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleConnectFeatureSelect(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${connectSelectedFeature === idx
                            ? "bg-emerald-600 w-6"
                            : "bg-neutral-300 hover:bg-neutral-400"
                            }`}
                          title={`Switch to Tab ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WDS Horizontal Dotted Section above SECURITY & GOVERNANCE */}
          <WDS className="m-0 relative z-20" />

          {/* 5. SCALE SECTION */}
          <div id="section-scale" className="w-full flex flex-col items-center pt-0 pb-20">
            <div className="pt-4 pb-8 px-4 md:px-6 text-center max-w-[860px] mx-auto flex flex-col items-center">
              <div className="flex items-center gap-2 justify-center mb-3">
                <span className="w-4 h-px bg-emerald-600/60" />
                <span className="text-[11px] font-bold font-mono text-emerald-600 tracking-[0.2em] uppercase">
                  SCALE
                </span>
                <span className="w-4 h-px bg-emerald-600/60" />
              </div>
              <h2 className="font-serif text-[#131316] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[1.2] tracking-tight font-semibold mb-3 md:mb-4">
                Build technology that grows with your business
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[660px]">
                From Shopify Plus and B2B commerce to industry-specific software and growth systems, we help businesses build the infrastructure needed for their next stage.
              </p>
            </div>

            {/* WDS Horizontal Dotted Section above SCALE vertical tab showcase */}
            <WDS className="m-0 relative z-20" />

            {/* Feature Interactive List & Card Showcase for SCALE */}
            <div className="w-full px-4 sm:px-6 md:px-8 pt-6 pb-12 md:pt-8 md:pb-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Left 5 Features List */}
                <div className="md:col-span-5 flex flex-col gap-2">
                  {scaleFeatures.map((feat, idx) => {
                    const isActive = scaleSelectedFeature === idx;
                    return (
                      <button
                        key={feat.id}
                        onClick={() => handleScaleFeatureSelect(idx)}
                        className={`p-4 rounded-xl text-left transition-all flex flex-col gap-2 border cursor-pointer relative overflow-hidden ${isActive
                          ? "bg-white border-neutral-300 shadow-sm"
                          : "bg-transparent border-transparent hover:bg-neutral-100/60"
                          }`}
                      >
                        <div className="flex gap-3.5 items-start w-full">
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${isActive ? "bg-emerald-50" : "bg-neutral-100"}`}>
                            {feat.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <h4 className={`text-sm font-semibold truncate ${isActive ? "text-neutral-900" : "text-neutral-700"}`}>
                                {feat.title}
                              </h4>
                              {isActive && (
                                <span className="text-[9.5px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                                  {idx + 1}/5
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                              {feat.desc}
                            </p>
                          </div>
                        </div>

                        {/* Edge-to-Edge Status Progress Line at Bottom of Active Tab Card */}
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100 overflow-hidden">
                            <div
                              className="h-full bg-emerald-600"
                              style={{ width: `${scaleProgress}%` }}
                            />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right Interactive Preview Card with WhatsApp Status Effect */}
                <div className="md:col-span-7 bg-[#FAF9F6] border border-[#D1D1D6] rounded-xl p-4 md:p-6 relative overflow-hidden shadow-xs flex flex-col justify-between">
                  {/* Corner Accent Boxes */}
                  <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-400" />
                  <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-400" />
                  <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-400" />
                  <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-400" />

                  {/* Top WhatsApp Status Bar (5 Segment Progress Bars) */}
                  <div className="flex gap-1.5 mb-4">
                    {scaleFeatures.map((_, idx) => {
                      let barWidth = "0%";
                      if (idx < scaleSelectedFeature) {
                        barWidth = "100%";
                      } else if (idx === scaleSelectedFeature) {
                        barWidth = `${scaleProgress}%`;
                      } else {
                        barWidth = "0%";
                      }
                      return (
                        <div key={idx} className="flex-1 h-1.5 bg-neutral-200/90 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-600"
                            style={{ width: barWidth }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Title & Header Status Info */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        {scaleSelectedFeature + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900 text-xs block">
                          {scaleFeatures[scaleSelectedFeature].title}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono">
                          {scaleFeatures[scaleSelectedFeature].tag} • Status {scaleSelectedFeature + 1} of 5 (6s)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full text-[10px] font-medium font-mono">
                        {scaleFeatures[scaleSelectedFeature].badge}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Image & Preview Frame */}
                  <div className="space-y-4 mb-4 text-xs">
                    <div className="relative rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-white group">
                      <img
                        src={scaleFeatures[scaleSelectedFeature].image}
                        alt={scaleFeatures[scaleSelectedFeature].title}
                        className="w-full h-auto object-cover max-h-[300px] transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 flex flex-col justify-end p-4 text-white">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
                          {scaleFeatures[scaleSelectedFeature].badge}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold leading-snug">
                          {scaleFeatures[scaleSelectedFeature].desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Status Navigation & Indicator Bar */}
                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                      <span>▶️ Auto-advancing (6s per tab)</span>
                    </div>
                    <div className="flex gap-1.5">
                      {scaleFeatures.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleScaleFeatureSelect(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${scaleSelectedFeature === idx
                            ? "bg-emerald-600 w-6"
                            : "bg-neutral-300 hover:bg-neutral-400"
                            }`}
                          title={`Switch to Tab ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Vertical Side Column (W: 120px) with 1cm White Gap & Border after Center Column */}
        <div className="hidden xl:flex w-[120px] shrink-0 border-l border-neutral-200 bg-white">
          {/* 1cm Solid White Vertical Gap/Strip */}
          <div className="w-[16px] bg-white shrink-0" />
          <div
            className="flex-1 relative overflow-hidden border-l border-neutral-200"
            style={{
              backgroundImage:
                "radial-gradient(rgba(163, 163, 163, 0.45) 1px, #ffffff 1px)",
              backgroundSize: "5.67px 5.67px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
