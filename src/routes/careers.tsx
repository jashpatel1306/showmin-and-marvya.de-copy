import { createFileRoute } from '@tanstack/react-router'
import { Header } from "@/components/Header";
import { CareersHeroBanner } from "@/components/careers/CareersHeroBanner";
import { CareersMagneticCarousel } from "@/components/careers/CareersMagneticCarousel";
import { CareersCultureSection } from "@/components/careers/CareersCultureSection";
import { CareersOpenPositions } from "@/components/careers/CareersOpenPositions";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      {
        title: "Careers — Showmine",
      },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      <Header />
      <div className="h-[60px]" />
      <main>
        <CareersHeroBanner />
        <CareersMagneticCarousel />
        <CareersCultureSection />
        <CareersOpenPositions />
      </main>
      <Footer />
    </div>
  );
}
