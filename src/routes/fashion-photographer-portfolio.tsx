import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageVerticalLines } from "@/components/ui/PageVerticalLines";
import {
  Sun,
  Moon,
  ArrowRight,
  X,
  Camera,
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Eye,
  ExternalLink,
} from "lucide-react";

// Image Imports from existing high-res asset store
import work1 from "@/assets/work/work1.png";
import work2 from "@/assets/work/work2.png";
import urbanArrow from "@/assets/work/urban-arrow.png";
import shopifyDesktop1 from "@/assets/Shopify/desktop/imgi_54_ZNLK0FforeBXuRq6UoBnpPIU9eY.jpg";
import shopifyDesktop2 from "@/assets/Shopify/desktop/imgi_114_WISPNRMsYwXBCaCX7k8zO8g4.jpg";
import shopifyDesktop3 from "@/assets/Shopify/desktop/imgi_148_HiPWByMHZ8kCjthRFeEths1xob4.jpg";
import shopifyDesktop4 from "@/assets/Shopify/desktop/imgi_195_TkxqVBKtNQGAc4zccvPQO8Jikgw.jpg";
import shopifyDesktop5 from "@/assets/Shopify/desktop/imgi_99_uKw3C8NT4zav4B8uO8NO6Sp6dkQ.jpg";

export const Route = createFileRoute("/fashion-photographer-portfolio")({
  head: () => ({
    meta: [
      {
        title: "Urban Arrow * Showmine",
      },
    ],
  }),
  component: FashionPhotographerPortfolioPage,
});

// Portfolio Filter Categories
const CATEGORIES = ["ALL", "EDITORIAL", "FASHION", "RUNWAY", "PORTRAITS", "CAMPAIGNS"];

// Portfolio Works Items
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Vogue Haute Couture 2026",
    category: "EDITORIAL",
    client: "Vogue Magazine",
    year: "2026",
    image: shopifyDesktop1,
    description: "High-fashion editorial spread shot in Paris showcasing spring haute couture collections.",
    aspect: "tall",
  },
  {
    id: 2,
    title: "Minimalist Structural Form",
    category: "PORTRAITS",
    client: "Abstrak Studio",
    year: "2026",
    image: work1,
    description: "Sculptural portrait series exploring modern architectural shadows and form.",
    aspect: "wide",
  },
  {
    id: 3,
    title: "Paris Fashion Week Runway",
    category: "RUNWAY",
    client: "Maison De L'Ombre",
    year: "2026",
    image: shopifyDesktop2,
    description: "Exclusive backstage and front-row runway coverage during Paris Fashion Week.",
    aspect: "tall",
  },
  {
    id: 4,
    title: "Urban Streetwear Campaign",
    category: "CAMPAIGNS",
    client: "DSTRCT Apparel",
    year: "2025",
    image: urbanArrow,
    description: "Commercial brand campaign featuring contemporary luxury urban outerwear.",
    aspect: "square",
  },
  {
    id: 5,
    title: "Luxe Botanical Skincare",
    category: "FASHION",
    client: "Vedalook Paris",
    year: "2025",
    image: shopifyDesktop3,
    description: "Beauty editorial campaign emphasizing organic textures and radiance.",
    aspect: "tall",
  },
  {
    id: 6,
    title: "Monochrome Elegance",
    category: "PORTRAITS",
    client: "Harper's Bazaar",
    year: "2025",
    image: work2,
    description: "Intimate black-and-white portrait study of contemporary minimalist fashion icons.",
    aspect: "wide",
  },
  {
    id: 7,
    title: "Summer Resort Collection",
    category: "CAMPAIGNS",
    client: "Pinktown Fashion",
    year: "2025",
    image: shopifyDesktop4,
    description: "Vibrant high-contrast campaign shot under natural Mediterranean sunlight.",
    aspect: "tall",
  },
  {
    id: 8,
    title: "Fine Jewelry Showcase",
    category: "FASHION",
    client: "Diamondrensu Luxe",
    year: "2025",
    image: shopifyDesktop5,
    description: "Macro jewelry editorial focusing on ethical lab diamond craftsmanship.",
    aspect: "square",
  },
];

// Featured Magazines / Clients
const CLIENT_LOGOS = [
  "VOGUE",
  "HARPER'S BAZAAR",
  "ELLE",
  "GQ MAGAZINE",
  "CHANEL PARIS",
  "DIOR",
  "YVES SAINT LAURENT",
];

// Services Offered
const SERVICES = [
  {
    icon: Camera,
    title: "Editorial Photography",
    description: "High-end magazine spreads, cover stories, and fashion editorial photography built around compelling narratives.",
  },
  {
    icon: Layers,
    title: "Lookbooks & Campaigns",
    description: "Commercial brand lookbooks, e-commerce fashion shoots, and multi-channel marketing campaigns.",
  },
  {
    icon: Sparkles,
    title: "Art Direction & Concepting",
    description: "Comprehensive creative direction, set design planning, moodboarding, and aesthetic storyboarding.",
  },
  {
    icon: Award,
    title: "High-End Post Production",
    description: "Master color grading, high-end beauty retouching, texture preservation, and digital editorial finishing.",
  },
];

function FashionPhotographerPortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedWork, setSelectedWork] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null);
  const [activeTab, setActiveTab] = useState<"HOME" | "PORTFOLIO" | "ABOUT" | "SERVICES" | "CONTACT">("PORTFOLIO");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredItems =
    activeCategory === "ALL"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 font-sans ${darkMode ? "bg-neutral-950 text-white" : "bg-white text-black"}`}>
      {/* Primary Site Header */}
      <Header forceLight={!darkMode} />
      <div className="h-[60px]" />

      <div className="relative">
        <PageVerticalLines />

        {/* ========================================================================= */}
        {/* HERO SECTION: CASES > URBAN ARROW / PORTFOLIO */}
        {/* ========================================================================= */}
        <section
          id="portfolio"
          className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-[#D1D1D6] relative z-10 px-6 sm:px-10 md:px-14 pt-12 sm:pt-16 pb-8 flex flex-col items-start ${darkMode ? "border-neutral-800 bg-neutral-950" : "bg-white"}`}
        >
          {/* Breadcrumb path: CASES > URBAN ARROW */}
          <div
            className="text-xs sm:text-sm font-mono font-medium tracking-widest text-neutral-500 uppercase mb-3 select-none flex items-center gap-1.5"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            <Link to="/our-work" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              CASES
            </Link>
            <span className="text-neutral-400">&gt;</span>
            <span className="text-neutral-700 dark:text-neutral-300">URBAN ARROW</span>
          </div>

          {/* Giant PORTFOLIO Headline matching screenshot */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-black tracking-tighter uppercase leading-[0.9] text-neutral-900 dark:text-white select-none">
            Urban Arrow  * Showmine
          </h1>

          {/* Subtitle Description */}
          <div className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-4xl font-normal leading-relaxed space-y-4">
            <p>
              Urban Arrow is a pioneering mobility brand from Amsterdam, transforming urban transport with smart design and electric innovation. By replacing cars with cargo bikes, they aim to make cities cleaner, quieter, and more accessible, blending Dutch cycling heritage with modern engineering.
            </p>
            <p>
              Their high-performance e-bikes serve families, businesses, and city dwellers alike, offering modular designs and electric power for everything from school runs to last-mile deliveries. With a focus on sustainability, quality, and freedom of movement, Urban Arrow is leading the global cargo bike revolution.
            </p>
          </div>

          {/* Featured Video Showcase */}
          <div className="mt-8 sm:mt-10 w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-black">
            <video
              src="https://www.flatlineagency.com/wp-content/uploads/2025/08/2025_FLATLINE_AGENCY_X_URBAN_ARROW_V5-1.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto max-h-[650px] object-cover rounded-2xl block"
            />
          </div>
        </section>





        {/* ========================================================================= */}
        {/* SECTION 1: INTRODUCTION */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-10 md:px-14 py-12 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-white text-neutral-900"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left intro title column */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-3" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  [ INTRODUCTION ]
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight leading-snug" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Urban Arrow – The power behind modern movement
                </h2>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["WEBSHOP", "ECOMMERCE", "MARKETING", "GROWTH", "SHOPIFY PLUS"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-neutral-700 dark:text-neutral-300 uppercase rounded-full" style={{ fontFamily: '"Geist Mono", monospace' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Website Link */}
              <a
                href="https://urbanarrow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:text-[#FF5C75] dark:hover:text-[#FF5C75] transition-colors mt-2"
                style={{ fontFamily: '"Geist Mono", monospace' }}
              >
                <span>VIEW LIVE WEBSITE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Right intro content column */}
            <div className="lg:col-span-7 flex flex-col gap-8 text-left">
              <p className="text-xl sm:text-2xl font-serif text-neutral-900 dark:text-white font-normal leading-relaxed border-b border-neutral-200 dark:border-neutral-800 pb-6" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                Purposeful design, tailored to reflect Urban Arrow’s ride into the future.
              </p>

              {/* Challenge block */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Urban Arrow’s challenge – Building for the long haul
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    As a global leader in electric cargo bikes, they were searching for a digital solution that could support complex product architectures, power omnichannel commerce, and bring their vision of smart urban mobility to life.
                  </p>
                  <p>
                    The challenge wasn’t just technical; it was also about translating their premium positioning into a digital experience that balances performance, storytelling, and flexibility across markets.
                  </p>
                </div>
              </div>

              {/* Approach block */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Flatline’s approach – Made for performance
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    To meet Urban Arrow’s ambitions, Flatline Agency delivered a headless solution that separates content from commerce. Built on Shopify and powered by Storyblok, the new platform supports advanced configurations, multiple user journeys, and smart integrations across HubSpot and APIs.
                  </p>
                  <p>
                    We combined scalability with design freedom, delivering a platform that not only performs globally but feels local, personal, and made to move.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: HERO SHOWCASE BANNER IMAGE */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-4 sm:px-8 py-8 ${darkMode ? "border-neutral-800 bg-neutral-950" : "bg-white"}`}>
          <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl">
            <img
              src="https://www.flatlineagency.com/wp-content/uploads/2025/08/Frame-1261153956-scaled.png"
              alt="Urban Arrow Website Interface Showcase"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: THE PROJECT (REPEATER HALF SECTIONS) */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-10 md:px-14 py-12 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-white text-neutral-900"}`}>
          <div className="flex flex-col gap-16">
            {/* Header tag */}
            <div className="text-left border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase" style={{ fontFamily: '"Geist Mono", monospace' }}>
                [ THE PROJECT ]
              </span>
            </div>

            {/* Block 1: Headless build with Storyblok */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Headless build with Storyblok
                </h3>
                <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    We delivered a headless setup, powered by Shopify’s infrastructure and Storyblok CMS, optimized for both scalability and flexibility. While Shopify handles the commerce layer, Storyblok manages content, giving full autonomy to both developers and content teams.
                  </p>
                  <p>
                    The platform supports advanced product logic, including smart SKU structuring and localized pricing, ensuring smooth customer journeys from discovery to checkout. Built with Vue.js, the frontend delivers fast, dynamic experiences across markets.
                  </p>
                  <p>
                    This approach future-proofs Urban Arrow’s digital stack with the speed of a modern framework and the ease of a visual CMS for their growth ambitions.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src="https://www.flatlineagency.com/wp-content/uploads/2025/08/Frame-1261153957-scaled.png"
                  alt="Headless Build with Storyblok"
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 2: Built to convert */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 lg:order-2 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Built to convert
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  We rebuilt Urban Arrow’s product configurator from the ground up, making it easy for users to put together their ideal ride: from frame and color to battery and accessories. Combined with a custom dealer locator, the optimized flow helps users move smoothly from exploration to conversion. HubSpot is fully integrated to capture leads and trigger automated follow-ups, supporting both marketing and sales teams.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src="https://www.flatlineagency.com/wp-content/uploads/2025/06/2T6A9297-scaled-e1754642477267.jpg"
                  alt="Built to convert"
                  className="w-full h-auto max-h-[550px] object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 3: Partnership in motion */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-900 dark:text-white" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                  Partnership in motion
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Urban Arrow came to us with a clear challenge: elevate their global digital presence while maintaining the essence of their brand. Our collaboration was driven by shared ambition, tight alignment, and in-person work sessions to refine both product architecture and narrative. The result? A future-ready platform with the power to scale, sell, and tell the story of movement, sustainability, and innovation, without compromise.
                </p>
              </div>
              <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <img
                  src="https://www.flatlineagency.com/wp-content/uploads/2025/06/IMG_2890-scaled-e1754642584173.jpg"
                  alt="Partnership in motion"
                  className="w-full h-auto max-h-[550px] object-cover block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: GALLERY CAROUSEL (Breaking Boundaries, Building Dreams) */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-10 py-12 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-white text-neutral-900"}`}>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-serif font-normal" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                Breaking Boundaries, Building Dreams
              </h2>
            </div>

            {/* Horizontal Grid / Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                "https://www.flatlineagency.com/wp-content/uploads/2025/06/Urban_Arrow_FamilyNext_Black_046.jpg",
                "https://www.flatlineagency.com/wp-content/uploads/2025/06/Urban_Arrow_FamilyNext_Black_561-1.jpg",
                "https://www.flatlineagency.com/wp-content/uploads/2025/06/Tender_PP_800_lifestyle_WEB-scaled.jpg",
                "https://www.flatlineagency.com/wp-content/uploads/2025/06/UrbanArrow-0849-web_.jpg",
                "https://www.flatlineagency.com/wp-content/uploads/2025/06/IMG_3600_1-scaled.jpg",
                "https://www.flatlineagency.com/wp-content/uploads/2025/06/2T6A5082.jpg",
              ].map((imgUrl, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md group">
                  <img
                    src={imgUrl}
                    alt={`Urban Arrow Showcase ${idx + 1}`}
                    className="w-full h-[280px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: RESULTS SECTION */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-12 py-14 sm:py-16 ${darkMode ? "border-neutral-800 bg-neutral-900/40 text-white" : "bg-neutral-50/50 text-neutral-900"}`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2" style={{ fontFamily: '"Geist Mono", monospace' }}>
                [ RESULTS ]
              </span>
              <h3 className="text-2xl font-serif">Measurable Impact</h3>
            </div>
            <div className="md:col-span-8 flex flex-wrap gap-12 sm:gap-20">
              <div className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-neutral-900 dark:text-white">
                  26
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  Live across countries
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-neutral-900 dark:text-white">
                  750
                </span>
                <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider mt-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                  Dealer network
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: OTHER CASES SHOWCASE */}
        {/* ========================================================================= */}
        <section className={`w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto border-l border-r border-t border-[#D1D1D6] relative z-10 px-6 sm:px-10 py-14 sm:py-20 ${darkMode ? "border-neutral-800 bg-neutral-950 text-white" : "bg-neutral-950 text-white"}`}>
          <div className="flex flex-col gap-10 text-left">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2" style={{ fontFamily: '"Geist Mono", monospace' }}>
                YOUR DIGITAL PULSE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                OTHER CASES
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                {
                  title: "Vingino",
                  category: "ECOMMERCE, B2C, FASHION",
                  image: "https://www.flatlineagency.com/wp-content/uploads/2026/06/imgi_74_5.png",
                },
                {
                  title: "Matt Sleeps",
                  category: "ECOMMERCE, B2C, MARKETING & GROWTH",
                  image: "https://www.flatlineagency.com/wp-content/uploads/2026/05/01A-scaled.png",
                },
                {
                  title: "Olivia & Kate",
                  category: "ECOMMERCE, B2C, FASHION",
                  image: "https://www.flatlineagency.com/wp-content/uploads/2026/01/imgi_450_gouden-multi-oorbellen-3224015.png",
                },
                {
                  title: "Lions Fashion Group",
                  category: "ECOMMERCE, B2C, FASHION",
                  image: "https://www.flatlineagency.com/wp-content/uploads/2026/01/Seven-new-knits.-Three-matching-chinos.-In-total-winter-hues.-Introducing-PS26-–-THE-HOLIDAYS-CA.jpg",
                },
                {
                  title: "Dekbed-discounter",
                  category: "MARKETING & GROWTH, B2C",
                  image: "https://www.flatlineagency.com/wp-content/uploads/2025/07/ontwerp-zonder-titel-2025-04-16t144150404.webp",
                },
              ].map((c, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-xl flex flex-col h-[340px]">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 text-left">
                    <span className="text-[9px] font-mono text-neutral-300 uppercase tracking-widest mb-1" style={{ fontFamily: '"Geist Mono", monospace' }}>
                      {c.category}
                    </span>
                    <h3 className="text-xl font-serif text-white mb-3" style={{ fontFamily: '"Hedvig Letters Serif", serif' }}>
                      {c.title}
                    </h3>
                    <Link
                      to="/our-work"
                      className="px-3.5 py-1.5 bg-white text-neutral-900 rounded text-[10px] font-mono font-bold tracking-wider uppercase inline-flex items-center gap-1 hover:bg-neutral-200 transition-colors w-fit"
                      style={{ fontFamily: '"Geist Mono", monospace' }}
                    >
                      READ CASE STUDY
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Site Footer */}
        <Footer />
      </div>
    </div>
  );
}
