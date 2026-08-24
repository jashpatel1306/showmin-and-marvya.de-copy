import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GreenFrame } from "@/components/GreenFrame";
import { Facebook, Linkedin, Link as LinkIcon, Share2, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/news_/$id")({
  head: () => ({
    meta: [
      {
        title: "Shopify Headless Commerce: Everything you need to know — Showmine",
      },
    ],
  }),
  component: NewsDetailPage,
});

const TOC_ITEMS = [
  { id: "what-is-shopify-headless-commerce", label: "What is Shopify Headless Commerce?" },
  { id: "why-traditional-shopify-setups-reach-their-limits", label: "Why traditional Shopify setups reach their limits" },
  { id: "key-benefits-of-shopify-headless-commerce", label: "Key benefits of Shopify headless commerce" },
  { id: "challenges-and-considerations", label: "Challenges and considerations" },
  { id: "how-flatline-builds-headless-shopify-experiences", label: "How Flatline builds headless Shopify experiences" },
  { id: "is-shopify-headless-commerce-right-for-your-brand", label: "Is Shopify headless commerce right for your brand?" },
];

const POPULAR_ARTICLES = [
  { title: "10 Tips That Will Help You Build A Brand From Scratch", url: "#" },
  { title: "13/11 Shopify B2B: Our frontier for B2B transactions", url: "#" },
  { title: "What Shopify Summer '26 Editions Actually Changes for Plus Brands (and What's Just Recycled)", url: "#" },
  { title: "11/11 B2B and POS: Integrating Point of Sale systems for efficient B2B transactions", url: "#" },
];

function NewsDetailPage() {
  const { id } = Route.useParams();
  const [activeToc, setActiveToc] = useState<string>("what-is-shopify-headless-commerce");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of TOC_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height + 300) {
            setActiveToc(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-white text-black relative flex flex-col justify-between font-sans">
      <Header forceLight />
      <div className="h-[60px]" />

      <main className="flex-1 w-full bg-white relative z-10">
        {/* Header Content Container matching Header side margins */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto relative z-10 border-l border-r border-[#D1D1D6] px-6 sm:px-10 md:px-12 pt-8 sm:pt-12 pb-12 flex flex-col items-start text-left gap-8">
          <div>
            {/* Category Tag / Kicker */}
            <span
              className="text-xs sm:text-sm font-mono font-semibold tracking-widest text-neutral-500 uppercase select-none"
              style={{ fontFamily: '"Geist Mono", monospace' }}
            >
              INNOVATION
            </span>

            {/* Article Main Headline */}
            <h1 className="mt-4 mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-sans font-medium text-neutral-900 leading-[1.14] tracking-tight max-w-4xl">
              Shopify Headless Commerce: Everything you need to know
            </h1>

            {/* Article TL;DR Excerpt */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed font-normal max-w-4xl">
              TL;DR: Shopify headless commerce separates Shopify’s backend from a custom-built frontend using frameworks like React or Next.js. It gives brands full creative control, faster performance, and enterprise-level scalability. As a Shopify Premier Partner, Flatline helps brands design and deploy composable commerce ecosystems built for growth. Definition: Shopify headless commerce is an architecture that separates Shopify’s...
            </p>
          </div>

          {/* Green Frame Component */}
          <GreenFrame className="w-full max-w-[1118px] min-h-[300px] sm:min-h-[420px] md:min-h-[500px]" aspectRatio="3/2" />
        </div>

        {/* 3-Column Main Article Content Container (Expanded Middle Column with 0.5cm gap) */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto relative z-10 border-l border-r border-t border-[#D1D1D6] px-4 sm:px-6 md:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_220px] xl:grid-cols-[200px_1fr_230px] gap-[0.5cm] items-start">
            
            {/* LEFT COLUMN: Table of Contents (Sticky) */}
            <aside className="hidden lg:block sticky top-28 bg-[#F5F5F7] p-5 rounded-2xl border border-neutral-200/80">
              <p
                className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-4"
                style={{ fontFamily: '"Geist Mono", monospace' }}
              >
                CONTENTS
              </p>
              <nav className="flex flex-col gap-2">
                {TOC_ITEMS.map((item) => {
                  const isActive = activeToc === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setActiveToc(item.id)}
                      className={`text-xs leading-snug transition-all p-2.5 rounded-lg text-left block font-medium ${
                        isActive
                          ? "bg-white text-neutral-900 shadow-sm border border-neutral-200/90 font-semibold"
                          : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </aside>

            {/* CENTER COLUMN: Main Article Content */}
            <article className="prose prose-neutral max-w-none text-neutral-800 leading-relaxed text-base sm:text-lg flex flex-col gap-6">
              <p className="text-base sm:text-lg leading-relaxed">
                <strong>TL;DR:</strong> Shopify headless commerce separates Shopify’s backend from a custom-built frontend using frameworks like React or Next.js. It gives brands full creative control, faster performance, and enterprise-level scalability. As a Shopify Premier Partner, Flatline helps brands design and deploy composable commerce ecosystems built for growth.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                <strong>Definition:</strong> Shopify headless commerce is an architecture that separates Shopify’s backend from a custom-built frontend using modern frameworks like React or Next.js, allowing for complete design freedom, faster speed, and omnichannel flexibility.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Digital commerce has entered a phase where performance, personalization, and flexibility define success. Traditional Shopify themes, while reliable, often limit how far brands can push design and experience. That is where <strong>Shopify headless commerce</strong> or <strong>Shopify Plus headless</strong> comes in.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                By decoupling Shopify’s backend from its storefront, teams can build custom experiences using frameworks like <strong>React</strong>, <strong>Next.js</strong>, and <strong>Hydrogen</strong>, hosted globally on <strong>Oxygen</strong>. This architecture gives brands the power to move faster, launch globally, and create storefronts that truly reflect their identity.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                For developers, <strong>Shopify APIs</strong> open a world of integrations from CMS platforms like Storyblok to automation tools such as HubSpot and Klaviyo, while marketers gain the agility to experiment without compromising speed or stability.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                In this guide, we explore what headless Shopify means in 2025, how composable commerce reshapes enterprise growth, and when going headless makes business sense.
              </p>

              {/* Section 1 */}
              <h2 id="what-is-shopify-headless-commerce" className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-8 mb-4 tracking-tight">
                What is Shopify Headless Commerce?
              </h2>

              <p className="text-base sm:text-lg leading-relaxed">
                Shopify headless commerce is an <strong>eCommerce architecture</strong> that separates the backend, where Shopify handles products, checkout, and data, from a custom-built frontend. This allows brands to create fully tailored storefronts using modern frameworks such as <strong>React</strong>, <strong>Next.js</strong>, or <strong>Shopify Hydrogen</strong>, hosted seamlessly on <strong>Oxygen</strong>.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                In a traditional Shopify setup, your storefront and backend logic are tightly linked. Customizing layouts or adding advanced features often means working within the limits of Liquid templates. Headless commerce removes that limitation. The frontend becomes independent, communicating with Shopify through <strong>Storefront and Admin APIs</strong>, giving developers complete creative control over design and performance.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                This separation not only improves site speed and user experience but also opens the door to <strong>composable commerce</strong>, where your Shopify backend connects to best-in-class tools like Storyblok, Sanity, or Contentful for content, and HubSpot or Klaviyo for marketing automation.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                For developers, headless Shopify means faster workflows, CI/CD deployment, and the freedom to integrate any service through APIs. For brands, it translates to higher scalability, omnichannel consistency, and a future-ready infrastructure.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                <strong>Flatline Agency</strong> is an official <strong>Shopify Premier Partner</strong> specializing in <strong>composable and headless architectures</strong> for enterprise brands, helping teams transition from traditional setups to flexible, API-driven ecosystems that scale globally.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                To make headless builds more accessible, Shopify introduced two native technologies: <strong>Hydrogen</strong> and <strong>Oxygen</strong>.
              </p>

              <ul className="list-disc pl-6 flex flex-col gap-2 my-2 text-base sm:text-lg">
                <li><strong>Hydrogen</strong> is Shopify’s React-based framework for building headless storefronts. The latest Hydrogen release (v2025-07) integrates with React Router 7.9.2 and unifies server functionality under @shopify/hydrogen/oxygen, simplifying deployment workflows.</li>
                <li><strong>Oxygen</strong> is Shopify’s global hosting environment designed specifically for Hydrogen storefronts, ensuring fast load times and automatic scaling across regions, without relying on third-party servers.</li>
              </ul>

              <p className="text-base sm:text-lg leading-relaxed">
                Additionally, <strong>Shopify Headless</strong> allows for comprehensive analytics to inform marketing strategies.
              </p>

              {/* Figure Image Placeholder */}
              <div className="my-6 w-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-md">
                <img
                  src="https://www.flatlineagency.com/wp-content/uploads/2025/10/image-4-1024x576.png"
                  alt="Shopify Headless Commerce Architecture"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <p className="text-base sm:text-lg leading-relaxed">
                Beyond architecture, Shopify has rolled out several backend changes that impact headless developers:
              </p>

              <ul className="list-disc pl-6 flex flex-col gap-2 my-2 text-base sm:text-lg">
                <li>As of <strong>API version 2025-01</strong>, <em>tax and duty fields</em> are no longer returned in the cart object within the Storefront API. Tax calculation now occurs directly at checkout for better accuracy.</li>
                <li>Shopify continues to <strong>deprecate the REST API</strong> to fully transition to GraphQL. Public apps were required to migrate by <strong>February 1, 2025</strong>, with private and custom apps following shortly after.</li>
                <li>Some developers have reported inconsistencies in updatedAt timestamps between the Storefront and Admin APIs, a reminder that version control and API monitoring remain critical in headless environments.</li>
              </ul>

              <p className="text-base sm:text-lg leading-relaxed">
                With these evolutions, <strong>Shopify Headless Commerce</strong> in 2025 is no longer just about separating frontend from backend. It represents a more flexible, developer-first ecosystem that aligns with modern frameworks, performance standards, and the future of composable commerce.
              </p>

              {/* Section 2 */}
              <h2 id="why-traditional-shopify-setups-reach-their-limits" className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-10 mb-4 tracking-tight">
                Why traditional Shopify setups reach their limits
              </h2>

              <p className="text-base sm:text-lg leading-relaxed">
                Shopify’s traditional architecture is built for simplicity, a connected system where design, content, and backend logic all live under one theme. For startups or small brands, this works perfectly. But as businesses scale, creative ambition and technical demands start to push against the platform’s native limits.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">1. Limited design flexibility</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Liquid themes are easy to edit but difficult to scale. The more you customize them, the slower and more fragile they become. Complex visuals, dynamic animations, or custom UX flows often require developer workarounds, increasing technical debt. Headless Shopify setups allow your design team to move freely using React or Next.js, while Shopify continues to manage checkout, inventory, and backend logic.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">2. Performance bottlenecks</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                A growing store means more content, plugins, and scripts, each one adding milliseconds to your load time. According to Google, every 100ms delay can reduce conversion rates by up to 7%. Headless architectures offload this pressure by serving static pages through Hydrogen and Oxygen, delivering <strong>enterprise-grade Shopify performance</strong> globally.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">3. Fragmented omnichannel experience</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Consumers interact with brands across devices, platforms, and even physical touchpoints. Traditional Shopify themes are optimized for web, not for a connected <strong>omnichannel</strong> strategy. By going headless, you can reuse Shopify’s backend across all frontends, apps, marketplaces, kiosks, ensuring unified data, consistent UX, and faster global rollout.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">4. Slower innovation cycles</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Because the frontend and backend are coupled, even small design changes can trigger long deployment processes. Developers must work around the same codebase as marketers, slowing down experimentation and releases. In a <strong>headless Shopify store setup</strong>, teams work in parallel: marketers update content while developers refine UX, no conflicts, no downtime.
              </p>

              <div className="bg-neutral-100 p-5 rounded-xl border-l-4 border-[#27B578] my-4">
                <p className="text-base sm:text-lg font-medium text-neutral-900 m-0">
                  <strong>Key takeaway:</strong> Traditional Shopify is efficient for launch. Headless Shopify is built for growth. As your brand scales across products, regions, and digital touchpoints, decoupling the frontend becomes not just a technical upgrade, but a strategic decision to future-proof your business.
                </p>
              </div>

              {/* Section 3 */}
              <h2 id="key-benefits-of-shopify-headless-commerce" className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-10 mb-4 tracking-tight">
                Key benefits of Shopify headless commerce
              </h2>

              <p className="text-base sm:text-lg leading-relaxed">
                Headless commerce is more than a technical upgrade, it is an evolution in how brands design, build, and scale digital experiences. Below are the key reasons why enterprise teams are moving toward <strong>Shopify Plus headless</strong> architectures in 2025.
              </p>

              <div className="my-6 w-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-md">
                <img
                  src="https://www.flatlineagency.com/wp-content/uploads/2025/10/image-13-1024x676.png"
                  alt="Key Benefits of Shopify Headless Commerce"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">1. Full design freedom</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Traditional Shopify themes limit what can be done visually. Headless removes those barriers. Developers can build custom storefronts using <strong>React, Next.js, or Shopify Hydrogen</strong>, integrating motion, personalization, and modern UI libraries without Liquid restrictions. Designers can create layouts that match the brand identity perfectly, while developers optimize for performance and SEO.
              </p>
              <div className="bg-neutral-100 p-4 rounded-xl border-l-4 border-neutral-400 my-2">
                <p className="text-sm sm:text-base text-neutral-800 m-0">
                  <strong>Key takeaway:</strong> Headless unlocks complete creative freedom, enabling your team to design experiences that go beyond Shopify’s default theme capabilities.
                </p>
              </div>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">2. API-driven performance and speed</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Headless storefronts are powered by Shopify’s <strong>GraphQL Storefront API</strong>, which allows data to flow directly between backend and frontend without heavy themes or unnecessary code. When hosted on <strong>Oxygen</strong>, these storefronts achieve sub-second load times, edge caching, and global scalability, ideal for high-traffic or international stores.
              </p>
              <div className="bg-neutral-100 p-4 rounded-xl border-l-4 border-neutral-400 my-2">
                <p className="text-sm sm:text-base text-neutral-800 m-0">
                  <strong>Key takeaway:</strong> By separating the presentation layer, Shopify headless storefronts deliver enterprise-grade performance and faster conversion-driven experiences.
                </p>
              </div>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">3. Omnichannel consistency</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                In an era where customers switch between mobile, web, and in-store touchpoints, <strong>omnichannel Shopify</strong> experiences are key. A single Shopify backend can now power multiple frontends, apps, microsites, or even IoT interfaces, all connected via APIs. This structure keeps your catalog, content, and checkout perfectly synchronized, no matter where users interact.
              </p>
              <div className="bg-neutral-100 p-4 rounded-xl border-l-4 border-neutral-400 my-2">
                <p className="text-sm sm:text-base text-neutral-800 m-0">
                  <strong>Key takeaway:</strong> Headless ensures brand consistency and data accuracy across every digital and physical channel.
                </p>
              </div>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">4. Developer agility and flexibility</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Headless Shopify development aligns with modern workflows, from CI/CD pipelines to modular components. Teams can deploy updates faster, integrate external APIs, and experiment without disrupting the live environment. It gives developers the autonomy to innovate and marketers the stability to scale confidently.
              </p>
              <div className="bg-neutral-100 p-4 rounded-xl border-l-4 border-neutral-400 my-2">
                <p className="text-sm sm:text-base text-neutral-800 m-0">
                  <strong>Key takeaway:</strong> Agile development becomes possible when your frontend and backend evolve independently, driving both innovation and reliability.
                </p>
              </div>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">5. Scalability for enterprise growth</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                As businesses expand globally, manage multiple currencies, and handle complex inventories, scalability becomes critical. Shopify Plus paired with headless architecture delivers <strong>enterprise Shopify scalability</strong>, supporting large product catalogs and traffic spikes without compromising stability. It also allows teams to add new markets, languages, or customer experiences without re-platforming.
              </p>
              <div className="bg-neutral-100 p-4 rounded-xl border-l-4 border-neutral-400 my-2">
                <p className="text-sm sm:text-base text-neutral-800 m-0">
                  <strong>Key takeaway:</strong> Headless Shopify provides a long-term foundation for growth, a composable system that scales alongside your brand.
                </p>
              </div>

              {/* Section 4 */}
              <h2 id="challenges-and-considerations" className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-10 mb-4 tracking-tight">
                Challenges and considerations
              </h2>

              <p className="text-base sm:text-lg leading-relaxed">
                While Shopify headless commerce unlocks performance, flexibility, and scalability, it is not a one-size-fits-all solution. The same independence that empowers large enterprises can introduce technical complexity and higher operational costs for smaller teams.
              </p>

              <div className="my-6 w-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-md">
                <img
                  src="https://www.flatlineagency.com/wp-content/uploads/2025/10/image-15-1024x557.png"
                  alt="Challenges and Considerations of Headless Commerce"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">1. Development complexity</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Headless setups require developers who understand API integrations, React or Next.js frameworks, and continuous deployment workflows. Managing two environments, Shopify’s backend and a custom frontend, demands stronger coordination between teams.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">2. Higher setup and maintenance costs</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Compared to a traditional Shopify theme, a <strong>headless Shopify store setup</strong> involves a larger upfront investment. You are not just designing a storefront, you are building a composable system with hosting, deployment, and API management.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">3. API dependency and version management</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Shopify headless architectures rely on APIs to connect data across platforms. When Shopify releases new API versions (like the <strong>2025-10 Storefront API</strong>), deprecated fields can impact functionality if not monitored closely.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">4. Security and performance oversight</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                A decoupled architecture increases the number of integration points, each one needs its own security layer. Developers must implement authentication, caching, and error handling at every touchpoint to maintain consistency.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">5. Organizational readiness</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Headless transformation is not just technical, it requires cultural alignment. Marketing, design, and development teams must collaborate in an agile framework where content and code evolve in parallel.
              </p>

              {/* Section 5 */}
              <h2 id="how-flatline-builds-headless-shopify-experiences" className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-10 mb-4 tracking-tight">
                How Flatline builds headless Shopify experiences
              </h2>

              <p className="text-base sm:text-lg leading-relaxed">
                As a <strong>Shopify Premier Partner</strong>, Flatline Agency helps enterprise brands transition from traditional Shopify setups to fully composable architectures designed for scalability, speed, and creative freedom.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">1. Designing with Hydrogen and Oxygen</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                We build <strong>custom Hydrogen storefronts</strong> hosted on <strong>Oxygen</strong>, giving brands global speed, stable infrastructure, and front-end control that goes far beyond Liquid themes.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">2. Integrating composable tools</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Headless success depends on seamless integrations. Flatline connects Shopify backends with composable tools like <strong>Storyblok</strong>, <strong>HubSpot</strong>, <strong>Klaviyo</strong>, and <strong>Contentful</strong>.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">3. Real-world implementations</h4>
              <ul className="list-disc pl-6 flex flex-col gap-2 my-2 text-base sm:text-lg">
                <li><strong>Urban Arrow</strong>: Flatline developed a <strong>headless Shopify Plus setup powered by Storyblok</strong>, enabling full design flexibility and omnichannel scalability.</li>
                <li><strong>Stoov</strong>: Through an optimized <strong>Shopify Markets</strong> structure, Stoov consolidated regional stores into one ecosystem.</li>
              </ul>

              <div className="my-6 w-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-md">
                <img
                  src="https://www.flatlineagency.com/wp-content/uploads/2025/10/image-14-1024x522.png"
                  alt="Flatline Headless Implementations"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Section 6 */}
              <h2 id="is-shopify-headless-commerce-right-for-your-brand" className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-10 mb-4 tracking-tight">
                Is Shopify headless commerce right for your brand?
              </h2>

              <p className="text-base sm:text-lg leading-relaxed">
                Not every business needs a headless setup, but for brands that have outgrown the limits of traditional Shopify, it can be a turning point. The question is not whether you can go headless, but whether your current infrastructure is holding back your growth.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">1. You have outgrown traditional Shopify themes</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                If your creative or UX teams constantly face design limitations, slow updates, or plugin conflicts, your store may have reached its ceiling.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">2. You are scaling across multiple markets or touchpoints</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                Global brands often need one backend powering multiple localized storefronts, apps, or microsites. A headless setup makes this possible.
              </p>

              <h4 className="text-xl font-medium text-neutral-900 mt-6 mb-2">3. Performance directly impacts your revenue</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                When page load time becomes a KPI, going headless is a performance investment. Shopify’s native <strong>Oxygen hosting</strong> and Hydrogen framework enable sub-second storefronts globally.
              </p>

              {/* FAQ Section */}
              <div className="mt-12 pt-8 border-t border-neutral-300 flex flex-col gap-6">
                <h3 className="text-2xl font-semibold text-neutral-900">Frequently asked questions</h3>
                
                <div className="flex flex-col gap-4">
                  <div className="bg-[#F5F5F7] p-5 rounded-xl border border-neutral-200">
                    <h4 className="font-semibold text-neutral-900 text-base sm:text-lg mb-2">What is Shopify headless commerce?</h4>
                    <p className="text-sm sm:text-base text-neutral-700 m-0">Shopify headless commerce is an architecture where Shopify handles the backend, including products, checkout, and data, while a custom frontend built with React, Next.js, or Hydrogen delivers a faster, more personalized user experience.</p>
                  </div>

                  <div className="bg-[#F5F5F7] p-5 rounded-xl border border-neutral-200">
                    <h4 className="font-semibold text-neutral-900 text-base sm:text-lg mb-2">Is Shopify headless only for large brands?</h4>
                    <p className="text-sm sm:text-base text-neutral-700 m-0">No. While Shopify Plus headless setups are popular among enterprise brands, mid-sized businesses also benefit from the flexibility and performance improvements headless architecture provides.</p>
                  </div>

                  <div className="bg-[#F5F5F7] p-5 rounded-xl border border-neutral-200">
                    <h4 className="font-semibold text-neutral-900 text-base sm:text-lg mb-2">What are the benefits of going headless on Shopify Plus?</h4>
                    <p className="text-sm sm:text-base text-neutral-700 m-0">Headless Shopify offers faster page loads, complete creative control, omnichannel consistency, and a scalable architecture built for enterprise performance.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* RIGHT COLUMN: Side Info Boxes (Sticky until middle section finishes scrolling) */}
            <aside className="flex flex-col gap-6 w-full lg:sticky lg:top-28 self-start">
              
              {/* Box 1: Popular Articles & Social Share */}
              <div className="bg-[#F5F5F7] p-5 sm:p-6 rounded-2xl border border-neutral-200/80 flex flex-col gap-4">
                <p
                  className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase select-none"
                  style={{ fontFamily: '"Geist Mono", monospace' }}
                >
                  POPULAR ARTICLES
                </p>

                <div className="flex flex-col divide-y divide-neutral-200">
                  {POPULAR_ARTICLES.map((article, idx) => (
                    <a
                      key={idx}
                      href={article.url}
                      className="py-3 text-xs sm:text-sm text-neutral-800 hover:text-neutral-900 font-medium leading-snug transition-colors first:pt-0 last:pb-0"
                    >
                      {article.title}
                    </a>
                  ))}
                </div>

                {/* Social Share Buttons */}
                <div className="pt-4 border-t border-neutral-300/80 flex items-center justify-between flex-wrap gap-2 text-xs font-mono font-semibold text-neutral-700">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="p-2 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors"
                      title="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4 text-neutral-800" />
                    </button>

                    <button
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="p-2 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors"
                      title="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-neutral-800" />
                    </button>

                    <button
                      onClick={handleCopyLink}
                      className="p-2 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors flex items-center gap-1 text-xs"
                      title="Copy Link"
                    >
                      <LinkIcon className="w-4 h-4 text-neutral-800" />
                      {copiedLink ? <span className="text-[10px] text-[#27B578]">Copied!</span> : null}
                    </button>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-neutral-700 cursor-pointer hover:text-neutral-900">
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </div>
                </div>
              </div>

              {/* Box 2: Sign Up For The Newsletter */}
              <div className="bg-[#F5F5F7] p-5 sm:p-6 rounded-2xl border border-neutral-200/80 flex flex-col gap-4">
                <p
                  className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase select-none"
                  style={{ fontFamily: '"Geist Mono", monospace' }}
                >
                  SIGN UP FOR THE NEWSLETTER
                </p>

                {newsletterSubscribed ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-medium">
                    Thank you for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex items-center w-full bg-white border border-neutral-300 rounded-full p-1 focus-within:border-neutral-900 transition-colors shadow-sm">
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none min-w-0 bg-transparent"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase transition-colors shrink-0"
                    >
                      Subscribe
                    </button>
                  </form>
                )}

                <p className="text-[11px] text-neutral-500 leading-normal">
                  By signing up you agree with our{" "}
                  <a href="#" className="underline hover:text-neutral-900">
                    privacy policy
                  </a>
                </p>
              </div>

              {/* Box 3: Get In Touch */}
              <div className="bg-[#F5F5F7] p-5 sm:p-6 rounded-2xl border border-neutral-200/80 flex flex-col gap-4">
                <p
                  className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase select-none"
                  style={{ fontFamily: '"Geist Mono", monospace' }}
                >
                  GET IN TOUCH
                </p>

                <p className="text-xs text-neutral-700 leading-relaxed">
                  To speak with us, call{" "}
                  <a href="tel:+31613326179" className="font-semibold underline text-neutral-900">
                    (+31) 613 326 179
                  </a>
                  , send us an{" "}
                  <a href="mailto:info@flatlineagency.com" className="font-semibold underline text-neutral-900">
                    email
                  </a>
                  , or reach out to us by chat or WhatsApp.
                </p>

                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href="tel:+31613326179"
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-white border border-neutral-300 rounded-xl text-xs font-mono font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-neutral-700" />
                    <span>(+31) 613 326 179</span>
                  </a>

                  <a
                    href="mailto:info@flatlineagency.com"
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-white border border-neutral-300 rounded-xl text-xs font-mono font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-700" />
                    <span>INFO@FLATLINEAGENCY.COM</span>
                  </a>
                </div>
              </div>

            </aside>

          </div>
        </div>

        {/* Closing Post Navigation & "So, challenge us." CTA Container */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto relative z-10 border-l border-r border-t border-[#D1D1D6] px-6 sm:px-10 md:px-12 py-16 flex flex-col items-center justify-center text-center gap-10">
          {/* Previous / Next Article Navigation Buttons */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/news"
              className="flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:-translate-x-1 transition-transform">
                ←
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-mono font-semibold text-white/60 uppercase tracking-widest">
                  Previous
                </span>
                <span className="text-xs sm:text-sm font-medium truncate">
                  2025 guide: Best email marketing providers for eCommerce
                </span>
              </div>
            </Link>

            <Link
              to="/news"
              className="flex items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-right group"
            >
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-mono font-semibold text-white/60 uppercase tracking-widest">
                  Latest Post
                </span>
                <span className="text-xs sm:text-sm font-medium truncate">
                  How to calculate the Total Cost of Ownership (TCO) for your eCommerce store
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </Link>
          </div>

          {/* "So, challenge us." Statement */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <h3
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight text-neutral-900"
              style={{
                fontFamily:
                  '"Hedvig Letters Serif", "Cormorant Garamond", "Times New Roman", serif',
              }}
            >
              So, <span className="text-neutral-400">challenge us.</span>
            </h3>

            <a
              href="mailto:info@flatlineagency.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-semibold tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
              style={{ fontFamily: '"Geist Mono", monospace' }}
            >
              <span>Schedule a meeting</span>
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
