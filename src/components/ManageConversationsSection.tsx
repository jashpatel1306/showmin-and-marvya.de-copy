import { useState, useEffect } from "react";
import { DottedSection } from "@/components/DottedSection";
import { WDS } from "@/components/wds";

export function ManageConversationsSection() {
  const [activeTab, setActiveTab] = useState("BUILD");
  const [isSticky, setIsSticky] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(0);

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
      desc: "Handle queries 24/7 using your business knowledge base",
      icon: (
        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "reminders",
      title: "Reminders and Notes",
      desc: "Set internal follow-up alerts and pin notes to customer profiles",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      id: "filters",
      title: "Advanced filters & Custom views",
      desc: "Segment chats instantly by status, lead type, tag, or team member",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
    },
    {
      id: "summaries",
      title: "Chat & Call Summaries",
      desc: "Get instant AI-generated call and conversation synopses for quick handovers",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: "hierarchy",
      title: "Hierarchical Team Management",
      desc: "Organize agents into roles, departments, and granular permission tiers",
      icon: (
        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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

            {/* Large Dashboard UI Frame Container (#B2C8DC Slate Blue frame) */}
            <div className="w-full px-4 md:px-8 pb-0">
              <div className="bg-[#B2C8DC] p-2.5 sm:p-4 md:p-6 rounded-xl md:rounded-2xl border border-[#9BB4CC] shadow-xs overflow-hidden">
                {/* Dashboard App Window */}
                <div className="bg-white rounded-lg border border-neutral-300/80 shadow-md overflow-hidden text-left font-sans text-xs">
                  {/* Window Title Bar */}
                  <div className="bg-neutral-100 px-4 py-2.5 border-b border-neutral-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                      </div>
                      <span className="text-[11px] font-semibold text-neutral-600 font-mono ml-2">Inbox</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400 text-[11px]">
                      <span>🔍 Search</span>
                      <span>❓ Help</span>
                      <span>🔔 Alerts</span>
                    </div>
                  </div>

                  {/* 3-Column Dashboard Body */}
                  <div className="grid grid-cols-12 min-h-[380px] md:min-h-[420px] bg-white text-neutral-800">
                    {/* Column 1: Left Inbox Sidebar */}
                    <div className="col-span-3 border-r border-neutral-200 bg-[#FAF9F6] p-2.5 flex flex-col justify-between text-[11px]">
                      <div className="flex flex-col gap-2">
                        <span className="text-[9.5px] font-bold font-mono text-neutral-400 uppercase tracking-wider px-2">ALL CHATS</span>
                        <div className="flex flex-col gap-0.5">
                          <div className="bg-emerald-50 text-emerald-800 font-semibold px-2.5 py-1.5 rounded flex justify-between items-center">
                            <span>All</span>
                            <span className="bg-emerald-600 text-white text-[9px] px-1.5 py-0.5 rounded-full">24521</span>
                          </div>
                          <div className="hover:bg-neutral-100 px-2.5 py-1.5 rounded flex justify-between items-center text-neutral-600">
                            <span>Unread</span>
                            <span className="text-neutral-500 font-mono text-[10px]">1502</span>
                          </div>
                          <div className="hover:bg-neutral-100 px-2.5 py-1.5 rounded flex justify-between items-center text-neutral-600">
                            <span>Awaiting Reply</span>
                            <span className="text-neutral-500 font-mono text-[10px]">189</span>
                          </div>
                          <div className="hover:bg-neutral-100 px-2.5 py-1.5 rounded flex justify-between items-center text-neutral-600">
                            <span>Resolved</span>
                            <span className="text-neutral-500 font-mono text-[10px]">107</span>
                          </div>
                          <div className="hover:bg-neutral-100 px-2.5 py-1.5 rounded flex justify-between items-center text-neutral-600">
                            <span>Expired</span>
                            <span className="text-neutral-500 font-mono text-[10px]">43</span>
                          </div>
                        </div>

                        <div className="border-t border-neutral-200 pt-2.5 mt-2 flex flex-col gap-1 text-[10px]">
                          <div className="px-2 py-1 flex justify-between text-neutral-600 font-medium">
                            <span>💬 MY CHATS</span>
                            <span className="font-mono">321</span>
                          </div>
                          <div className="px-2 py-1 flex justify-between text-neutral-600 font-medium">
                            <span>⏱️ SLA BREACHED</span>
                            <span className="font-mono text-amber-600 font-bold">179</span>
                          </div>
                          <div className="px-2 py-1 flex justify-between text-neutral-600 font-medium">
                            <span>📥 UNASSIGNED CHATS</span>
                            <span className="font-mono">58</span>
                          </div>
                          <div className="px-2 py-1 flex justify-between text-neutral-600 font-medium">
                            <span>📞 MY CALLS</span>
                            <span className="font-mono">99</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Middle Active Conversation Panel */}
                    <div className="col-span-6 border-r border-neutral-200 flex flex-col justify-between bg-white">
                      {/* Chat Header */}
                      <div className="p-3 border-b border-neutral-200 bg-[#FBFBF9] flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-neutral-900 text-xs">Deepak B.</span>
                          <span className="text-[10px] text-neutral-400 block">Customer • Online</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 text-neutral-600">📞 Call</span>
                          <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 text-neutral-600">⚡ Actions ▾</span>
                        </div>
                      </div>

                      {/* Chat Message Thread */}
                      <div className="p-3.5 space-y-3 flex-1 overflow-y-auto bg-[#F7F6F0]/40 text-[11px]">
                        <div className="text-center">
                          <span className="text-[9px] bg-neutral-200/80 text-neutral-600 px-2 py-0.5 rounded font-mono">Today</span>
                        </div>

                        {/* Customer Message */}
                        <div className="flex flex-col items-start gap-1">
                          <div className="bg-white p-2.5 rounded-lg rounded-tl-none border border-neutral-200 shadow-2xs max-w-[85%]">
                            <p>Hi, I&apos;m planning to travel next month. Can you help me with some options?</p>
                            <span className="text-[8px] text-neutral-400 mt-1 block text-right">10:26 AM</span>
                          </div>
                        </div>

                        {/* System Assignment Pill */}
                        <div className="text-center my-1">
                          <span className="text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-mono">
                            Chat assigned to Amar Sharma Sales
                          </span>
                        </div>

                        {/* Agent Response */}
                        <div className="flex flex-col items-end gap-1">
                          <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none border border-[#c5e8ab] shadow-2xs max-w-[88%] text-left">
                            <span className="text-[9.5px] font-bold text-emerald-800 block mb-0.5">Amar Sharma Sales</span>
                            <p>Hi 👋 This is Amar Sharma from MMT, your travel consultant.</p>
                            <p className="mt-1">I&apos;d be happy to help you plan your trip! Could you please share:</p>
                            <ul className="list-disc list-inside mt-1 text-[10px] space-y-0.5">
                              <li>Destination</li>
                              <li>Travel dates</li>
                              <li>Number of travelers</li>
                              <li>Budget range (approx.)</li>
                            </ul>
                            <span className="text-[8px] text-emerald-700 mt-1 block text-right">10:27 AM</span>
                          </div>
                        </div>
                      </div>

                      {/* Message Input Footer */}
                      <div className="p-2.5 border-t border-neutral-200 bg-white flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Type a message or '/' for canned replies..."
                          className="flex-1 text-[11px] bg-neutral-50 px-3 py-1.5 rounded border border-neutral-200 focus:outline-none focus:border-emerald-500"
                        />
                        <button className="bg-emerald-600 text-white text-[11px] px-3 py-1.5 rounded font-medium hover:bg-emerald-700">
                          Send ➢
                        </button>
                      </div>
                    </div>

                    {/* Column 3: Right Details Drawer */}
                    <div className="col-span-3 bg-[#FAF9F6] p-3 text-[10.5px] flex flex-col gap-3">
                      <div className="flex border-b border-neutral-200 pb-1.5 gap-3 font-semibold text-neutral-600">
                        <span className="text-emerald-700 border-b-2 border-emerald-600 pb-1">Details</span>
                        <span>Calls</span>
                        <span>Notes</span>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <span className="text-[9px] text-neutral-400 font-mono block uppercase">CUSTOMER NAME</span>
                          <span className="font-medium text-neutral-800">Deepak B.</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-neutral-400 font-mono block uppercase">PHONE NUMBER</span>
                          <span className="font-mono text-neutral-700">+91 98765 43210</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-neutral-400 font-mono block uppercase">COLLABORATORS</span>
                          <span className="inline-block bg-neutral-200 text-neutral-700 text-[9px] px-1.5 py-0.5 rounded font-mono mt-0.5">DT</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-neutral-400 font-mono block uppercase">CUSTOM FIELDS</span>
                          <span className="text-emerald-600 text-[9.5px] font-semibold block cursor-pointer">+ Add Field</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-neutral-400 font-mono block uppercase">CHAT QUEUE</span>
                          <span className="text-neutral-700 font-medium block">Sales Queue • Priority</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WDS Horizontal Dotted Section below dashboard app frame */}
            <WDS className="m-0 relative z-20" />

            {/* Feature Interactive List & Card Showcase */}
            <div className="w-full px-4 md:px-8 pb-0 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Left 5 Features List */}
                <div className="md:col-span-5 flex flex-col gap-2">
                  {features.map((feat, idx) => {
                    const isActive = selectedFeature === idx;
                    return (
                      <button
                        key={feat.id}
                        onClick={() => setSelectedFeature(idx)}
                        className={`p-4 rounded-xl text-left transition-all flex gap-3.5 items-start border cursor-pointer ${isActive
                          ? "bg-white border-neutral-300 shadow-sm"
                          : "bg-transparent border-transparent hover:bg-neutral-100/60"
                          }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${isActive ? "bg-emerald-50" : "bg-neutral-100"}`}>
                          {feat.icon}
                        </div>
                        <div>
                          <h4 className={`text-sm font-semibold mb-0.5 ${isActive ? "text-neutral-900" : "text-neutral-700"}`}>
                            {feat.title}
                          </h4>
                          <p className="text-xs text-neutral-500 leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right Interactive Preview Card */}
                <div className="md:col-span-7 bg-[#FAF9F6] border border-[#D1D1D6] rounded-xl p-4 md:p-6 relative overflow-hidden shadow-xs">
                  <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-400" />
                  <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-400" />
                  <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-400" />
                  <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-400" />

                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-neutral-300 flex items-center justify-center font-bold text-neutral-700 text-xs">
                        N
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-900 text-xs block">Neil</span>
                        <span className="text-[9.5px] text-neutral-400">Interested Customer</span>
                      </div>
                    </div>
                    <div className="bg-white border border-neutral-300 px-3 py-1 rounded text-xs text-neutral-700 font-medium flex items-center gap-1.5 shadow-2xs">
                      <span>Sales AI Agent</span>
                      <span className="text-[10px]">▼</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4 text-xs">
                    <div className="flex flex-col items-start gap-1">
                      <div className="bg-white p-3 rounded-lg rounded-tl-none border border-neutral-200 shadow-2xs max-w-[80%] text-neutral-800">
                        <p>Hi! I am interested in travelling to Goa</p>
                        <span className="text-[8px] text-neutral-400 block text-right mt-1">05:39 pm</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="text-[9.5px] bg-neutral-200/70 text-neutral-600 px-3 py-0.5 rounded-full font-mono">
                        Chat assigned to Sales AI Agent
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none border border-[#c5e8ab] shadow-2xs max-w-[90%] text-left relative">
                        <span className="text-[9.5px] font-bold text-emerald-800 block mb-1">Sales AI Agent</span>
                        <p className="text-neutral-900">
                          Hi Chirag! Great choice on Goa. 😊
                        </p>
                        <p className="text-neutral-900 mt-1">
                          To send the best package options, share your travel dates, group size, departure city, and vibe (nightlife or relaxed)?
                        </p>
                        <p className="text-neutral-900 mt-1">
                          Let me know your details and preferences!
                        </p>

                        <div className="absolute -bottom-10 right-2 bg-white border border-neutral-300 shadow-md rounded-lg p-1.5 flex flex-col gap-1 z-20 text-[10.5px]">
                          <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-neutral-100 rounded text-neutral-700 font-medium cursor-pointer">
                            <span>🪄</span> Re-Generate Reply
                          </button>
                          <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-neutral-100 rounded text-neutral-700 font-medium cursor-pointer">
                            <span>✍️</span> Improve Writing
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-3 border-t border-neutral-200 flex items-center gap-2">
                    <input
                      type="text"
                      value="We also have special discounts for family packages"
                      readOnly
                      className="flex-1 bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-800 focus:outline-none"
                    />
                    <button className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0 cursor-pointer">
                      ➢
                    </button>
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
                Migrate, modernize, and improve your existing commerce experience
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[660px]">
                Move your ecommerce business to Shopify or transform an existing store into a faster, more flexible, and conversion-focused digital experience.              </p>
            </div>

            <div className="w-full px-4 md:px-8">
              <div className="bg-[#B2C8DC] p-4 sm:p-6 rounded-xl md:rounded-2xl border border-[#9BB4CC] shadow-xs">
                <div className="bg-white rounded-lg border border-neutral-300 p-4 md:p-6 space-y-6">
                  {/* Campaign KPI Metrics Bar */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-neutral-200">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block">TOTAL SENT</span>
                      <span className="text-lg font-bold text-neutral-900 font-mono">142,500</span>
                    </div>
                    <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-neutral-200">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block">DELIVERY RATE</span>
                      <span className="text-lg font-bold text-emerald-600 font-mono">99.6%</span>
                    </div>
                    <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-neutral-200">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block">OPEN RATE</span>
                      <span className="text-lg font-bold text-emerald-600 font-mono">86.4%</span>
                    </div>
                    <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-neutral-200">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block">CLICK-THROUGH</span>
                      <span className="text-lg font-bold text-emerald-600 font-mono">31.2%</span>
                    </div>
                  </div>

                  {/* Broadcast Composer Card */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-6 space-y-3">
                      <span className="text-xs font-bold text-neutral-800 uppercase font-mono tracking-wider block">CAMPAIGN PREVIEW</span>
                      <div className="bg-[#DCF8C6] p-4 rounded-xl border border-[#c5e8ab] text-xs space-y-2 text-neutral-900">
                        <p className="font-bold text-emerald-900">🎉 Festive Flash Sale - Special Offer!</p>
                        <p>Hi {"{{first_name}}"}, we have an exclusive 25% discount reserved for you on our new product catalog!</p>
                        <p className="text-[10px] text-neutral-600">Use code: <strong className="font-mono">FESTIVE25</strong> at checkout.</p>
                        <div className="pt-2 border-t border-emerald-300/50 flex gap-2">
                          <button className="flex-1 bg-white text-emerald-800 font-semibold py-1.5 rounded border border-emerald-300 text-center text-[11px]">
                            🛍️ Shop Now
                          </button>
                          <button className="flex-1 bg-white text-emerald-800 font-semibold py-1.5 rounded border border-emerald-300 text-center text-[11px]">
                            💬 Chat Support
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-6 space-y-3">
                      <div className="bg-[#FAF9F6] p-4 rounded-xl border border-neutral-200 space-y-2.5 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-neutral-700">Target Segment</span>
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-semibold px-2 py-0.5 rounded font-mono">VIP Customers (12,450)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-neutral-700">Schedule</span>
                          <span className="text-neutral-500 font-mono">Send Immediately</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-neutral-700">Variable Mapping</span>
                          <span className="text-emerald-700 font-mono text-[11px]">Auto-Synced ✓</span>
                        </div>
                      </div>
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
                Turn repetitive work into intelligent workflows
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[660px]">
                Automate customer communication, lead generation, follow-ups, internal processes, and repetitive business operations.
              </p>
            </div>

            <div className="w-full px-4 md:px-8">
              <div className="bg-[#B2C8DC] p-4 sm:p-6 rounded-xl md:rounded-2xl border border-[#9BB4CC] shadow-xs">
                <div className="bg-white rounded-lg border border-neutral-300 p-4 md:p-6 space-y-4 text-xs">
                  <span className="text-xs font-bold text-neutral-800 uppercase font-mono tracking-wider block">VISUAL AUTOMATION FLOW CANVAS</span>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
                    <div className="bg-[#FAF9F5] p-3 rounded-lg border border-emerald-300 shadow-2xs">
                      <span className="text-[10px] text-emerald-700 font-mono font-bold block mb-1">STEP 1: TRIGGER</span>
                      <span className="font-semibold text-neutral-800 block">Incoming Message</span>
                      <span className="text-[10px] text-neutral-500 block">Keyword: "Pricing / Quote"</span>
                    </div>
                    <div className="bg-[#FAF9F5] p-3 rounded-lg border border-emerald-300 shadow-2xs">
                      <span className="text-[10px] text-emerald-700 font-mono font-bold block mb-1">STEP 2: AI AGENT</span>
                      <span className="font-semibold text-neutral-800 block">Knowledge Lookup</span>
                      <span className="text-[10px] text-neutral-500 block">Searches product catalog</span>
                    </div>
                    <div className="bg-[#FAF9F5] p-3 rounded-lg border border-emerald-300 shadow-2xs">
                      <span className="text-[10px] text-emerald-700 font-mono font-bold block mb-1">STEP 3: QUALIFY</span>
                      <span className="font-semibold text-neutral-800 block">Collect Budget & Date</span>
                      <span className="text-[10px] text-neutral-500 block">Extracts customer intent</span>
                    </div>
                    <div className="bg-[#FAF9F5] p-3 rounded-lg border border-emerald-300 shadow-2xs">
                      <span className="text-[10px] text-emerald-700 font-mono font-bold block mb-1">STEP 4: HANDOVER</span>
                      <span className="font-semibold text-neutral-800 block">Assign to Sales Team</span>
                      <span className="text-[10px] text-neutral-500 block">Syncs with CRM & notifies agent</span>
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
                Connect the systems that power your business
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[660px]">
                Bring your ecommerce platform, CRM, ERP, inventory, marketing tools, and internal systems together through reliable integrations.
              </p>
            </div>

            <div className="w-full px-4 md:px-8">
              <div className="bg-[#B2C8DC] p-4 sm:p-6 rounded-xl md:rounded-2xl border border-[#9BB4CC] shadow-xs">
                <div className="bg-white rounded-lg border border-neutral-300 p-4 md:p-6 space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-neutral-200 text-left">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block">AVG FIRST RESPONSE</span>
                      <span className="text-lg font-bold text-neutral-900 font-mono">38 seconds</span>
                    </div>
                    <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-neutral-200 text-left">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block">RESOLUTION RATE</span>
                      <span className="text-lg font-bold text-emerald-600 font-mono">94.8%</span>
                    </div>
                    <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-neutral-200 text-left">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block">ACTIVE CHATS</span>
                      <span className="text-lg font-bold text-neutral-900 font-mono">1,420</span>
                    </div>
                    <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-neutral-200 text-left">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block">CUSTOMER CSAT</span>
                      <span className="text-lg font-bold text-emerald-600 font-mono">4.9 / 5.0 ⭐</span>
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
                Technology that grows with your business
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-[660px]">
                From Shopify Plus and B2B commerce to custom business software, build digital infrastructure that can support your next stage of growth.
              </p>
            </div>

            <div className="w-full px-4 md:px-8">
              <div className="bg-[#B2C8DC] p-4 sm:p-6 rounded-xl md:rounded-2xl border border-[#9BB4CC] shadow-xs">
                <div className="bg-white rounded-lg border border-neutral-300 p-4 md:p-6 space-y-4 text-xs">
                  <span className="text-xs font-bold text-neutral-800 uppercase font-mono tracking-wider block">ENTERPRISE GOVERNANCE MATRIX</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#FAF9F5] p-4 rounded-lg border border-neutral-200 space-y-2">
                      <span className="font-bold text-neutral-900 block">🔒 Masked Customer Numbers</span>
                      <p className="text-neutral-500 text-[11px]">Agents communicate with leads without seeing raw phone numbers.</p>
                    </div>
                    <div className="bg-[#FAF9F5] p-4 rounded-lg border border-neutral-200 space-y-2">
                      <span className="font-bold text-neutral-900 block">👥 Role Hierarchy Tiers</span>
                      <p className="text-neutral-500 text-[11px]">Set admin, supervisor, and agent privileges with department scoping.</p>
                    </div>
                    <div className="bg-[#FAF9F5] p-4 rounded-lg border border-neutral-200 space-y-2">
                      <span className="font-bold text-neutral-900 block">📋 Real-Time Audit Logs</span>
                      <p className="text-neutral-500 text-[11px]">Complete event logging for data exports, logins, and message actions.</p>
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
