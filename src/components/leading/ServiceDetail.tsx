import { useState } from "react";
import { Check, BadgeCheck, Star } from "lucide-react";
import JashIcon from "@/assets/TeamMember/jash.jpg";

const reviews = [
  {
    name: "Peter Maraziotis",
    avatar: "https://framerusercontent.com/images/VFCtAoqV1qVldGulBwVn0DxoG6U.jpg?width=956&height=960",
    text: "Highly recommend the website service, these guys go over and beyond to offer the best service. Really happy with my new site Pete M\n\nDirector\n\nPM Properties",
  },
  {
    name: "Alona Shavi",
    avatar: "https://framerusercontent.com/images/RsIlZnwRsz6sZ43tcYG4oT2c0.jpeg?width=1024&height=1024",
    text: "Zac and his team are fantastic! They listen to everything you want and don't try to sell you something you don't. They offer professional advice and do everything to help you find success through your website. Day 1 our site went live ww already had an inquiry. Highly recommend them, you won't be disappointed!",
  },
  {
    name: "Bamo Sawra",
    avatar: "https://framerusercontent.com/images/lciKwQnrxt7gFKIj2oPtdeOH80.jpg?width=974&height=1054",
    text: "South digital have done a great job designing my website and helping to launch my mobile app. The team are always on hand to answer any questions. Quick service with high quality.",
  },
  {
    name: "Billy Willson",
    avatar: "https://framerusercontent.com/images/aEWzzbuV6dflaMPNYmlMbCegRg.jpeg?width=200&height=200",
    text: "South Digital did an absolutely amazing job on our new website. It exceeded expectations in every way. Not only do their websites look amazing but they also understand functionality and conversion so your website will actually drive revenue for your business.",
  },
  {
    name: "Caroline Santer",
    avatar: "https://framerusercontent.com/images/bujAhzYBOCvRoquv5wAA6h0SwQ.png?width=861&height=861",
    text: "Can't recommend highly enough - outstanding service from start to finish, delivering exactly what was required with great professionalism. Thank you, South Digital!",
  },
  {
    name: "Catherine Delve",
    avatar: "https://framerusercontent.com/images/sGj5yKDE3AjfPt69lD53YUwsOGg.jpeg?width=800&height=800",
    text: "Zac and Ellie have been amazing. They have built us an outstanding new website. We're delighted with the quality, and their service and advice has been second to none. I would highly recommend them",
  },
  {
    name: "Charlie Messinger",
    avatar: "https://framerusercontent.com/images/YBQbasDWQP54PSPZ23cNx9e5NyU.png?width=120&height=120",
    text: "Zac and the team at South Digital are exceptionally skilled, reliable, and communicative. They stepped in to help when our web developer went on maternity leave and have handled our complex website needs through our busiest times of the year with ease. It's been a pleasure to work with them and I would absolutely use their services again in the future.",
  },
  {
    name: "Daniel D'Souza",
    avatar: "https://framerusercontent.com/images/QwZkc2hs34MqZr0KiCWYd9JCo.jpeg?width=603&height=603",
    text: "We're huge fans of working with the team at South Digital. Zac and his team have a unique understanding of Webflow - both from a design perspective and creating innovating development builds. We were able to work together to create a native AI sales experience on our website that connect Webflow and Voiceflow together that has dramatically improved the conversion rate for our demo form.",
  },
];

const tabs = ["Overview", "Deliverables", "Process", "Reviews"];

const tools = [
  { name: "Figma", logo: "https://framerusercontent.com/images/QJeOyFsAINyEooCkrGJZocdpyws.svg", color: "var(--figma-purple)" },
  { name: "WordPress", logo: "https://framerusercontent.com/images/3urgfe1UBbqoFYf6qHiPJd1MKOQ.svg", color: "var(--wordpress-blue)" },
  { name: "Webflow", logo: "https://framerusercontent.com/images/EN8DKbXvlTDjkkycAxucWV0MGu0.svg", color: "var(--webflow-blue)" },
  { name: "Framer", logo: "https://framerusercontent.com/images/erQVobGVFVG48u0pk5nhWEk.svg", color: "var(--framer-blue)" },
];

const articleSections = [
  {
    title: "Landing pages built around a single conversion goal",
    paragraphs: [
      "A landing page should never feel like a mini-website. It is a focused journey designed to move visitors from the first click to one clear action. When pages attempt to promote multiple offers, include too many navigation paths, or overwhelm users with competing messages, conversions often suffer. Our landing page design approach keeps the experience simple, intentional, and goal-driven—shaping every section around the outcome that matters most.",
      "We begin by understanding the context behind each visit. What promise did the ad, email, or campaign make? What challenge is the visitor trying to solve, and what objections might prevent them from taking the next step? Once these answers are clear, the design process focuses on guiding visitors confidently toward a decision, ensuring every element on the page supports that purpose rather than adding unnecessary distractions.",
    ],
  },
  {
    title: "Starting with the offer, audience, and traffic source",
    paragraphs: [
      "Effective landing pages begin long before the layout stage. We first evaluate your offer, define your ideal audience, and understand where your traffic will come from. Visitors arriving from cold paid search behave very differently from subscribers on an email list or warm referrals, so messaging, page length, and content emphasis must adapt accordingly.",
      "Together, we determine what content belongs above the fold, what should appear immediately after, and what details can be placed further down the page for visitors who want deeper information. This approach prevents the common mistake of trying to communicate everything at once. Instead, the page opens with a clear value proposition, supporting proof, and a simple next step."
    ],
  },
  {
    title: "Layouts that guide visitors step by step",
    paragraphs: [
      "Once the narrative is defined, we design a structure that leads visitors through a clear progression. The layout typically includes a focused hero section, a concise explanation of how the solution works, credibility-building proof, answers to common objections, and a confident call to action.",
      "Each section is created with a specific purpose—some build trust, others explain the offer, and others reduce friction. We carefully align copy, visuals, and spacing to support these goals. Form complexity is also matched to the level of commitment required: low-friction offers use minimal fields, while higher-intent requests may include more detailed inputs."
    ],
  },
  {
    title: "Trust, proof, and clarity where they matter most",
    paragraphs: [
      "Strong proof can often outperform long explanations. We identify the most persuasive evidence you already have—testimonials, client logos, short case study highlights, or outcome-focused statistics—and place it strategically at the moments when visitors are most likely to hesitate.",
      "Clarity is equally important. Headings, labels, and calls to action use straightforward language, and any conditions or requirements are presented transparently. When visitors clearly understand what will happen after they click, conversion rates improve and post-conversion friction decreases."
    ],
  },
];

const deliverables = [
  { title: "Offer and audience discovery", description: "A focused session and short questionnaire to understand your offer, audience, objections and traffic sources for the landing page." },
  { title: "Message and structure outline", description: "A simple outline that maps the story of the page, key sections, proof points and calls to action before design begins." },
  { title: "Wireframe for the landing page", description: "A low fidelity layout that shows content order, hierarchy and where each part of the story will sit." },
  { title: "High fidelity landing page design", description: "A complete visual design in Figma for desktop and mobile, including states for buttons, forms and key interactions." },
  { title: "Implementation notes", description: "Annotations or a short build guide for your developers or our team, covering behavior, breakpoints and any integrations." },
  { title: "Optional variations", description: "Suggestions or designs for simple A/B test variants, such as alternative hero treatments or different social proof arrangements." },
];

const sidebarFeatures = [
  "Offer, audience and traffic review",
  "Content first structure and wireframe",
  "High fidelity landing page design and build support",
];

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

const ServiceDetail = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [expanded, setExpanded] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <section className="mt-12">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Preview image */}
          <div className="mb-6 overflow-hidden rounded-xl border border-border">
            <img
              src="https://framerusercontent.com/images/6mmymLwJiOKwOLdtcfDSj3cEV0Y.png"
              alt="Abstract single page frame with strong hero section, representing landing page design."
              className="w-full object-cover"
              style={{ aspectRatio: "1.90476 / 1" }}
            />
          </div>

          {/* Tabs */}
          <div className="mb-8 rounded-xl bg-card p-1.5">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "border border-border bg-secondary text-card-foreground"
                      : "text-muted-foreground hover:text-card-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Overview content */}
          {activeTab === "Overview" && (
            <div>
              {/* Intro */}
              <p className="mb-8 text-base leading-relaxed text-card-foreground">
                We design landing pages that do one job well. Every section, line and button is shaped around your offer, your audience and the traffic you plan to send.
              </p>

              {/* Meta: Category & Tools */}
              <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:gap-0">
                <div className="flex-1">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Category</p>
                  <a href="#" className="relative inline-flex items-center rounded-lg bg-card px-3 py-1.5 text-sm font-medium text-card-foreground">
                    Design
                    <span className="absolute inset-0 rounded-lg bg-[hsl(var(--gold)/0.35)]" />
                  </a>
                </div>
                <div className="flex-1 sm:border-l sm:border-border sm:pl-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <a
                        key={tool.name}
                        href="#"
                        className="relative inline-flex items-center gap-1.5 rounded-lg bg-card px-3 py-1.5 text-sm font-medium text-card-foreground"
                      >
                        <img src={tool.logo} alt={`${tool.name} logo`} className="h-4 w-4 object-contain" />
                        {tool.name}
                        <span
                          className="absolute inset-0 rounded-lg opacity-35"
                          style={{ backgroundColor: `hsl(${tool.color})` }}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Book a call CTA */}
              <div className="mb-8 rounded-xl border-l-4 border-l-[hsl(var(--info))] bg-secondary p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-card-foreground">Book a call to discuss your project</h2>
                    <p className="mt-1 text-sm text-muted-foreground">15-30 minute strategy call, no charge</p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-card-foreground shadow-sm transition-colors hover:bg-secondary"
                  >
                    <div className="h-7 w-7 overflow-hidden rounded-full border border-[hsl(var(--info))]">
                      <img
                        src={JashIcon}
                        alt="Zac Santer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    Book a call with Zac
                  </a>
                </div>
              </div>

              {/* Article content */}
              <div className="relative">
                <div className={`space-y-6 ${!expanded ? "max-h-[400px] overflow-hidden" : ""}`}>
                  {articleSections.map((section) => (
                    <div key={section.title}>
                      <h2 className="mb-3 text-xl font-bold text-card-foreground">{section.title}</h2>
                      {section.paragraphs.map((p, i) => (
                        <p key={i} className="mb-3 text-sm leading-relaxed text-muted-foreground">{p}</p>
                      ))}
                    </div>
                  ))}
                </div>

                {!expanded && (
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                )}

                <div className="relative z-10 mt-4 text-center">
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-sm font-medium text-[hsl(var(--info))] underline transition-colors hover:opacity-80"
                  >
                    {expanded ? "See less" : "See more"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="rounded-xl bg-secondary p-4 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {(showAllReviews ? reviews : reviews.slice(0, 4)).map((review) => (
                  <div
                    key={review.name}
                    className="rounded-lg border border-border bg-card p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={review.avatar}
                          alt={`photo of ${review.name}`}
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-bold text-card-foreground">{review.name}</span>
                          <BadgeCheck className="h-4 w-4 text-[hsl(var(--info))]" />
                        </div>
                      </div>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="mt-2 flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[hsl(45,93%,47%)] text-[hsl(45,93%,47%)]" />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-4">{review.text}</p>
                  </div>
                ))}
              </div>
              {!showAllReviews && reviews.length > 4 && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowAllReviews(true)}
                    className="rounded-lg border border-border bg-secondary px-6 py-2.5 text-sm font-bold text-card-foreground transition-colors hover:bg-card"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Deliverables content */}
          {/* Process content */}
          {activeTab === "Process" && (
            <div className="flex flex-col gap-0">
              {[
                { step: 1, title: "Kickoff and discovery", description: "We review your goals, offer, audience and traffic plans, then gather existing assets, proof and constraints." },
                { step: 2, title: "Story and structure", description: "We shape a clear narrative for the landing page and translate it into a content first outline and wireframe for your review." },
                { step: 3, title: "Design and refinement", description: "We create high fidelity designs for desktop and mobile, then refine details over feedback rounds until the page feels right." },
                { step: 4, title: "Handoff and support", description: "We prepare tidy Figma files and implementation notes, walk your team or developers through the page and stay available during build and launch." },
              ].map((item, index, arr) => (
                <div key={item.step} className="relative flex gap-4">
                  {/* Timeline line + number */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border border-border bg-card">
                      <span className="bg-gradient-to-b from-[hsl(170,68%,46%)] via-[hsl(193,65%,49%)] to-[hsl(207,84%,57%)] bg-clip-text text-sm font-extrabold text-transparent">
                        {item.step}
                      </span>
                    </div>
                    {index < arr.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>
                  {/* Content */}
                  <div className={`pb-8 ${index === arr.length - 1 ? "pb-0" : ""}`}>
                    <h3 className="text-sm font-bold text-card-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Deliverables" && (
            <div className="rounded-xl bg-secondary p-4 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border bg-card p-5"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0 text-[hsl(var(--info))]" strokeWidth={3} />
                      <h3 className="text-sm font-bold text-card-foreground">{item.title}</h3>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[320px] lg:flex-shrink-0">
          <div className="sticky top-8 rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-card-foreground">Landing-page design</h2>
            <p className="mt-2 text-sm text-muted-foreground">Turn your offer into a high converting page</p>

            <a
              href="https://south.digital/get-started?service=Landing+page+design"
              rel="noopener"
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-bold text-primary-foreground shadow-[inset_0_6px_12px_rgba(0,0,0,0.08),inset_0_0.5px_1px_rgba(255,255,255,0.34),0_1px_2px_rgba(8,8,8,0.19),0_4px_4px_rgba(8,8,8,0.05)] transition-all hover:brightness-110"
            >
              Get started
            </a>

            <div className="mt-6 flex flex-col gap-3">
              {sidebarFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full">
                    <CheckBadge />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ServiceDetail;
