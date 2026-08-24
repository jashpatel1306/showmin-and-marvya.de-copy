import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandLogos } from "@/components/BrandLogos";
import { ProblemsSection } from "@/components/ProblemsSection";
import { Footer } from "@/components/Footer";
import { DividerGrid } from "@/components/ui/DividerGrid";
import { PageVerticalLines } from "@/components/ui/PageVerticalLines";

import { ManageConversationsSection } from "@/components/ManageConversationsSection";
import { AiProfitsSection } from "@/components/AiProfitsSection";
import { FitCheckSection } from "@/components/FitCheckSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DarkGreenDottedSection } from "@/components/DarkGreenDottedSection";
import { DottedSection } from "@/components/DottedSection";
import { FaqSection } from "@/components/FaqSection";
import { StartTodayBanner } from "@/components/StartTodayBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Showmine — Agentic AI Operating System for WhatsApp at Scale",
      },
      {
        name: "description",
        content:
          "Centralize every number, department, and conversation into one secure command center with AI automation and broadcasting tools.",
      },
      {
        property: "og:title",
        content: "Showmine — Agentic AI for WhatsApp at Scale",
      },
      {
        property: "og:description",
        content:
          "Unified inbox, AI agents, automation, broadcasting, governance and analytics for WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="relative min-h-screen overflow-x-clip bg-background"
      data-nav-theme="dark"
    >
      <Header />
      <div className="h-[60px]" />
      <div className="relative">
        <PageVerticalLines />
        <Hero />
        <BrandLogos />
        <DividerGrid />
        <ProblemsSection />
        <ManageConversationsSection />
        <DottedSection />
        <AiProfitsSection />
        <DottedSection />
        <FitCheckSection />
        <DarkGreenDottedSection />
        <HowItWorksSection />
        <DarkGreenDottedSection />
        <FaqSection />
        <DottedSection />
        <StartTodayBanner />
        <Footer />
      </div>
    </div>
  );
}
