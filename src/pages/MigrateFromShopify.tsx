import Header from "@/components/Header";
import Footer from "@/components/Footer";
import shopifyWebflowIcon from "@/assets/shopify-webflow-icon.svg";
import WaveBackground from "@/components/WaveBackground";
import dashboardImg from "@/assets/dashboard-screenshot.webp";
import TrustedBy from "@/components/TrustedBy";
import ShopifyGlance from "@/components/ShopifyGlance";
import FunnelSection from "@/components/FunnelSection";
import WhenToPeelSection from "@/components/WhenToPeelSection";
import HowProjectsRunSection from "@/components/HowProjectsRunSection";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ShopifyFAQ from "@/components/ShopifyFAQ";
import Testimonials from "@/components/Testimonials";
import RecentProjects from "@/components/RecentProjects";

const MigrateFromShopify = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WaveBackground />
      <section className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 py-20 md:py-24">
        <div
          className="inline-flex items-center gap-2 rounded-[7px] px-3 py-1.5 text-sm font-medium"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(255, 255, 255, 0.35)",
            color: "rgb(0, 0, 0)",
          }}
        >
          <img
            src={shopifyWebflowIcon}
            alt="Shopify + Webflow"
            className="w-5 h-5"
          />
          <span>Shopify + Webflow</span>
        </div>

        <h1
          className="mt-6 text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight max-w-3xl"
          style={{ color: "rgb(0, 0, 0)" }}
        >
          Migrate from Shopify themes to Webflow
        </h1>

        <p
          className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ color: "rgb(0, 0, 0)" }}
        >
          If your Shopify theme is holding back your brand or content experience, we can shift your marketing pages to Webflow while keeping Shopify for products and checkout. This gives you a faster, more flexible platform for campaigns and storytelling without the cost or disruption of rebuilding your entire store.
        </p>

        <a
          href="./get-started"
          className="mt-8 inline-flex items-center justify-center rounded-lg px-8 py-3 text-base font-medium text-white transition-all hover:brightness-110"
          style={{
            backgroundColor: "rgb(24, 119, 242)",
            boxShadow:
              "rgba(0, 0, 0, 0.08) 0px 6.75px 13.5px 0px inset, rgba(255, 255, 255, 0.34) 0px 0.5625px 1.125px 0px inset, rgba(8, 8, 8, 0.19) 0px 1.125px 2.25px 0px, rgba(8, 8, 8, 0.05) 0px 4px 4.5px 0px",
          }}
        >
          Get started
        </a>
      </section>
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="overflow-hidden"
            style={{
              perspective: "1200px",
            }}
          >
            <div
              style={{
                transform: "perspective(1200px) rotateX(22deg)",
                transformOrigin: "center bottom",
              }}
            >
              <img
                src={dashboardImg}
                alt="A screenshot of a WordPress website in development for a company named 'Resurgam' with the tagline 'Old buildings. New life.'"
                className="w-full h-auto block"
                style={{ aspectRatio: "1.67114 / 1" }}
              />
            </div>
        </div>
      </section>
      <TrustedBy />
      <ShopifyGlance />
      <RecentProjects />
      <WhenToPeelSection />
      <HowProjectsRunSection />
      <WhyWorkWithUs />
      <Testimonials />
      <ShopifyFAQ />
      <FunnelSection />
      <Footer />
    </div>
  );
};

export default MigrateFromShopify;

