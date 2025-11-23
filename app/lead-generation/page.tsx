"use client"

import React, { useState, useEffect, } from "react"
import { motion, useAnimate } from "framer-motion"
import { Navigation } from "@/components/navigation"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Target, BarChart3, Zap, MapPin, Star, Search, Mail, Plus, ArrowRight, Filter, MessageCircle, CheckCircle, Quote } from "lucide-react"
import dynamic from 'next/dynamic'
const GitHubGlobe = dynamic(() => import("@/components/ui/github-globe").then(m => m.GitHubGlobe), { ssr: false })
import { Beams } from "@/components/ui/beams"
import { FocusCard } from "@/components/ui/focus-card"
import { BackgroundBeams } from "@/components/ui/background-beams";
import { GlobeSection } from "@/components/ui/globe-section";
import { UseCasesSection } from "@/components/ui/use-cases-section";
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react";

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Google Maps scraping and how does it work?",
      answer: "Google Maps scraping is an automated process that collects publicly available data from Google Maps, such as business names, addresses, geo-coordinates, ratings, reviews, phone numbers, websites, and emails. <br /> Our Google Maps data scraper is user-friendly and requires no coding experience. You can extract data based on specific parameters like location or business category. Simply follow these steps: -> Log in to our platform -> Go to Google Maps Scraper -> Select the categories you want to scrape -> Choose the locations -> Set your output format and other parameters -> Click 'Get Data'."
    },
    {
      question: "Can I extract emails or phone numbers from Google Maps?",
      answer: "Yes. With our Google Maps scraping tool, you can collect phone numbers and websites for businesses. Additionally, our email scraper tool extracts emails and social media handles directly from those business websites."
    },
    {
      question: "Is it possible to scrape data from Google Maps in real time?",
      answer: "Yes, our automated tool and API allow you to continuously scrape and update data from Google Maps in real time."
    },
    {
      question: "How many records can I scrape using your Google Maps scraping service?",
      answer: "You can extract unlimited records based on your needs. Our pricing model is simple—pay only for the number of records you scrape."
    },
    {
      question: "How accurate is the data obtained through Google Maps scraping?",
      answer: "Our Google Maps scraper ensures that the data you collect is highly accurate, reliable, and timely, tailored to the parameters you set."
    },
    {
      question: "How often should Google Maps scraping be performed to keep the data up to date?",
      answer: "The scraping frequency depends on your business needs. However, we generally recommend performing scraping regularly to maintain up-to-date information."
    },
    {
      question: "Is the data free of personally identifiable information (PII)?",
      answer: "Yes, we only collect publicly available information—similar to manually browsing the web and gathering data yourself."
    }
  ]



  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-4 sm:px-5 md:px-6 py-3.5 sm:py-4 md:py-5 text-left flex items-center justify-between bg-[#000000] hover:bg-[#3b3b3c] transition-colors duration-200"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-white pr-2 sm:pr-4">
              {faq.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <Plus className="w-5 h-5 text-white" />
            </motion.div>
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-white"
          >
            <div className="px-4 sm:px-5 md:px-6 py-3.5 sm:py-4 md:py-4 border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px]">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

// this funcation use in title and subtitle
const TextGenerateEffectinTitleAndSubtitle = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (scope.current) {
      observer.observe(scope.current);
    }

    return () => observer.disconnect();
  }, [scope]);

  // Animation effect
  useEffect(() => {
    if (isVisible && scope.current) {
      const spans = scope.current.querySelectorAll('span');

      // Reset all spans to initial state
      spans.forEach((span: any) => {
        span.style.opacity = '0';
        if (filter) span.style.filter = 'blur(8px)';
      });

      // Animate each word
      spans.forEach((span: any, i: any) => {
        setTimeout(() => {
          span.animate(
            [
              { opacity: 0, filter: filter ? 'blur(8px)' : 'none' },
              { opacity: 1, filter: 'blur(0px)' }
            ],
            {
              duration: duration * 1000, // Convert to milliseconds
              fill: 'forwards',
              easing: 'ease-out'
            }
          );
        }, i * 80); // Stagger delay between words (80ms)
      });
    }
  }, [isVisible, duration, filter]);

  return (
    <div ref={scope} className={cn("font-light", className)}>
      <div className="text-[14px] leading-tight px-3 py-1.5">
        {wordsArray.map((word, idx) => (
          <span
            key={`${word}-${idx}`}
            className="inline-block opacity-0 mr-2"
            style={{
              filter: filter ? 'blur(8px)' : 'none',
              transition: `opacity 0.5s ease-out, filter 0.5s ease-out`
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};



export default function LeadGenerationPage() {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-[#4B6F93]" />,
      title: "AI-Driven Lead Scoring",
      description: "Identify the most promising leads with precision."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#4B6F93]" />,
      title: "Predictive Analytics",
      description: "Forecast customer intent and conversion rates."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#4B6F93]" />,
      title: "Automated Data Enrichment",
      description: "Keep lead details updated and accurate—instantly."
    },
    {
      icon: <Brain className="w-6 h-6 text-[#4B6F93]" />,
      title: "Seamless CRM Integration",
      description: "Sync directly with your sales tools and workflows."
    }
  ]

  const othersFeatures = [
    "Outdated databases with <40% accuracy",
    "Wrong emails that land in spam",
    "Invalid phone numbers that never reach decision-makers",
    "Generic outreach templates that fail to convert",
    "Lack of understanding of Indian B2B markets"
  ];

  const ourFeatures = [
    "Updated databases refreshed every month",
    "80%+ data accuracy, 95% email deliverability",
    "Verified phone numbers of decision-makers",
    "95% inbox placement rate (almost no spam)",
    "Industry-specific targeting, not generic",
    "Proven to generate 3x more business"
  ];

  const steps = [
    {
      number: "1",
      icon: Target,
      title: "Identify Your Target Audience",
      description: "We analyze your business to understand their ideal customer profile and market segments."
    },
    {
      number: "2",
      icon: Search,
      title: "Find the Right-Fit Customers",
      description: "Using advanced tools and databases, we locate businesses that match your criteria perfectly."
    },
    {
      number: "3",
      icon: Filter,
      title: "Filter and Validate Leads",
      description: "Every lead is verified for accuracy, ensuring you get quality contacts, not quantity."
    },
    {
      number: "4",
      icon: MessageCircle,
      title: "Reach Through Best Channels",
      description: "Multi-channel outreach via email, WhatsApp, and phone for maximum engagement."
    },
    {
      number: "5",
      icon: CheckCircle,
      title: "Direct Contacts & Booked Calls",
      description: "You receive warm leads and scheduled calls with qualified prospects ready to discuss business."
    }
  ];

  const testimonials = [
    {
      quote: "For over 42 years, Hanu Prints has been serving clients in packaging solutions. But in the last few years, finding the right kind of B2B leads had become a real challenge. With Showmine Growth, we finally saw a breakthrough. The quality of leads was excellent, every conversation was relevant, and within the first 3 months we closed multiple deals with clients we never thought we'd reach.",
      author: "Rachit Mittal",
      position: "Founder, Hanu Prints"
    },
    {
      quote: "I've been running my manufacturing solutions business for 10 years, and most agencies I worked with before wasted my time with outdated data and irrelevant prospects. Showmine Growth was different. Within weeks, we started talking to actual decision-makers from industries we were targeting. The leads converted into real opportunities, and our sales pipeline grew by almost 2.5x in just one quarter.",
      author: "Punit Kumar",
      position: "Director, Manufacturing Solutions Company"
    },
    {
      quote: "Our software for the manufacturing sector is highly niche, and most lead generation companies couldn't understand our market. Showmine Growth not only understood it but delivered qualified prospects consistently. We saw a 95% email deliverability rate, hardly any spam issues, and our team was able to book calls with top decision-makers in large factories.",
      author: "Sunit Kumar",
      position: "Founder, Manufacturing Software Firm"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Script id="ld-breadcrumb-leadgen" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.showmine.io/' },
            { '@type': 'ListItem', position: 2, name: 'Lead Generation', item: 'https://www.showmine.io/lead-generation' }
          ]
        })}
      </Script>
      <Script id="ld-software" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'SHOWMINE Lead Generation',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: 'https://www.showmine.io/lead-generation',
          description: 'AI-powered lead generation and public data extraction (Google Maps, SERP, reviews) with automated enrichment.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/PreOrder',
            url: 'https://www.showmine.io/lead-generation'
          },
          provider: {
            '@type': 'Organization',
            name: 'SHOWMINE',
            url: 'https://www.showmine.io'
          }
        })}
      </Script>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  India's Trusted{" "}
                  <span className="text-primary">B2B Lead Generation</span>{" "}
                  Partner
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                  We help established Indian businesses get new clients using advanced,
                  global-standard technology — not outdated databases or cookie-cutter methods.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base px-8 bg-[#4B6F93] hover:bg-[rgb(75, 111, 147)] text-white">
                  Book a Call
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-foreground">80%+</div>
                  <div className="text-sm text-muted-foreground">Data Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">92%</div>
                  <div className="text-sm text-muted-foreground">Email Deliverability</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">3x</div>
                  <div className="text-sm text-muted-foreground">More Business</div>
                </div>
              </div>
            </div>

            {/* Right Dashboard Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-2xl p-8 border border-border shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-muted"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">Live Results Dashboard</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Real Client Success Metrics</h3>
                    <p className="text-sm text-muted-foreground">See what our advanced B2B strategies deliver</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-100 dark:bg-success-light rounded-xl p-4 border border-success/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-3 h-3 rounded-full bg-green"></div>
                      </div>
                      <div className="text-2xl font-bold text-green-600 mb-1">₹1.6Cr+</div>
                      <div className="text-xs font-medium text-foreground/80 mb-1">Revenue Generated</div>
                      <div className="text-xs text-muted-foreground">For our clients in 2024</div>
                      <div className="mt-3 h-1.5 bg-green-700 rounded-full w-4/5"></div>
                    </div>

                    <div className="bg-gray-200 dark:bg-info-light rounded-xl p-4 border border-info/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-3 h-3 rounded-full bg-info"></div>
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">847</div>
                      <div className="text-xs font-medium text-foreground/80 mb-1">Qualified Leads</div>
                      <div className="text-xs text-muted-foreground">Delivered this quarter</div>
                      <div className="mt-3 h-1.5 bg-gray-700 rounded-full w-full"></div>
                    </div>

                    <div className="bg-card rounded-xl p-4 border border-border">
                      <div className="text-2xl font-bold text-foreground mb-1">67%</div>
                      <div className="text-xs font-medium text-foreground/80 mb-1">Meeting Rate</div>
                      <div className="text-xs text-muted-foreground">From cold outreach</div>
                    </div>

                    <div className="bg-blue-100 rounded-xl p-4 border border-border">
                      <div className="text-2xl font-bold text-foreground mb-1">4.9★</div>
                      <div className="text-xs font-medium text-foreground/80 mb-1">Client Rating</div>
                      <div className="text-xs text-muted-foreground">Average satisfaction score</div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-4 border border-border">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground mb-2">Latest Success Story</div>
                        <div className="text-sm font-semibold text-foreground mb-2">
                          "300% increase in qualified leads within 90 days"
                        </div>
                        {/* <div className="text-xs text-muted-foreground">- Manufacturing company, Mumbai</div> */}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary">🚀</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ComparisonSection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-4xl">🚀</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Showmine Growth?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the difference between outdated methods and our proven approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* What Others Do */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-red-400 mb-2">What Others Do</h3>
                <p className="text-sm text-muted-foreground">Old-fashioned, ineffective approaches</p>
              </div>

              <div className="space-y-4">
                {othersFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <p className="text-sm text-foreground/80">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Do */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-2 border-primary/20 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  What We Do at Showmine Growth
                </h3>
                <p className="text-sm text-primary">Advanced, proven strategies that work</p>
              </div>

              <div className="space-y-4">
                {ourFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <p className="text-sm text-foreground font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Services We Present Section */}
      <section className="relative overflow-hidden bg-white">
        <BackgroundBeams className="bg-gradient-to-b from-white to-gray-50">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-10 md:mb-12"
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Best Services We Present For Your Business
              {/* Divider with icon */}
              <div className="mt-3 flex items-center gap-3 select-none" aria-hidden>
                <span className="h-px flex-1 bg-[#E0E0E0]" />
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#E0E0E0] bg-white">
                  <span className="inline-block w-3.5 h-3.5 bg-gray-400 rounded-sm" />
                </span>
                <span className="h-px flex-1 bg-[#E0E0E0]" />
              </div>

            </motion.h2>


            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Want to extract data from a public source? With an effortless data scraping process, you can enhance your Lead generation and productivity of your workflow.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            <FocusCard
              icon={
                <MapPin className="w-6 h-6 text-blue-500" />
              }
              title="B2B Lead Generation"
              description="Get access to a comprehensive database for B2B lead generation with vital information about potential customers."
            />

            <FocusCard
              icon={
                <Star className="w-6 h-6 text-yellow-500" />
              }
              title="Email Validation"
              className="md:translate-y-8"
              description="Validate email addresses in bulk with our advanced verification system. Ensure high deliverability and clean your email lists effectively."
            />

            <FocusCard
              icon={
                <Search className="w-6 h-6 text-purple-500" />
              }
              title="Google Search Scraping"
              description="Scrape key information from Google SERP including keywords, ranking positions, and backlinks without any coding skills."
            />

            <FocusCard
              icon={
                <Mail className="w-6 h-6 text-green-500" />
              }
              title="Email & Contact Scraper"
              className="md:translate-y-8"
              description="Extract email addresses, social media handles, and other contact information from websites at scale."
            />

            <FocusCard
              icon={
                <Search className="w-6 h-6 text-purple-500" />
              }
              title="Google Maps Data Scraper"
              description="Extract business information including name, address, phone, website, email, and social media handles from Google Maps."
            />

            <FocusCard
              icon={
                <Mail className="w-6 h-6 text-green-500" />
              }
              title="Google Maps Reviews Scraper"
              className="md:translate-y-8"
              description="Extract all reviews for any business listed on Google My Business with detailed analytics and insights."
            />
          </div>
        </BackgroundBeams>
      </section>

      {/* Global Company Section */}
      <GlobeSection />

      {/* Use Cases & Pricing Section */}
      {/* <UseCasesSection /> */}

      {/* ProcessSection section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that delivers consistent results for your business
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-full w-0.5 h-8 bg-border -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-white px-8 bg-[#4B6F93] hover:bg-[rgb(75, 111, 147)]">
              Book a Call With Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* More than just a migration Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Glowing background effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-cyan-400/15 via-blue-400/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2 w-[500px] h-[300px] bg-gradient-radial from-indigo-400/20 via-purple-400/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-5 text-black">
            Why choose{' '}
            <span className="italic text-blue-400" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Us
            </span>
            .
          </h2>

          <div className="max-w-4xl mx-auto space-y-2">
            <p className="text-[#A3A3A3] text-[18px] ">
              Below are few examples of how our Google Maps Scraper can be beneficial in helping you attain your objectives.
            </p>
          </div>
        </motion.div>

        {/* Structured Background Box Container */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div
            className="relative w-full flex flex-col items-center justify-center"
            style={{
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0a0a0a',
              display: 'flex',
              flex: 'none',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              gap: '24px',
              height: 'min-content',
              justifyContent: 'center',
              overflow: 'visible',
              padding: '64px 64px',
              pointerEvents: 'auto',
              position: 'relative',
              width: '100%',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >


            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full">
              {[
                {
                  icon: "/leadgeneration/leadgeneration.gif",
                  title: "Lead Generation",
                  description: "Google Maps scraping is an effective tool for prospecting for new customers. Use Google Map scraping to gather contact information for potential customers in a specific area."
                },
                {
                  icon: "/leadgeneration/research.gif",
                  title: "Market Research",
                  description: "Identify trends in the local market, such as popular products or services. Create targeted marketing campaigns using this information to inform your marketing and business strategies."
                },
                {
                  icon: "/leadgeneration/datascience.gif",
                  title: "Data Science",
                  description: "With our high-quality data scraping service, you can gather the information you need to build cutting-edge technologies. Power your AI and machine learning models with relevant data to gain valuable insights and drive your business forward."
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center pt-8"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-[#A3A3A3] leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center w-full"
            >
              <Button
                size="sm"
                className="bg-[#4B6F93] hover:bg-[#5A87E4] text-white px-8 py-4 text-lg rounded-lg transition-colors duration-200 font-medium"
              >
                Request a project 👉🏻
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split Background Lead Database Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Background image container (right side on desktop) */}
            <div className="order-2 md:order-2 relative w-full h-[320px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden">
              <img
                src="/lg.png"
                alt="Lead generation dashboard"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* White to transparent overlay for desktop to blend with text area */}
              <div className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              </div>
            </div>

            {/* Text content (left side) */}
            <div className="order-1 md:order-1 relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-black leading-tight">
                Is Google map scraping legal?
              </h3>

              {/* Divider with icon */}
              <div className=" flex items-center gap-3 select-none" aria-hidden>
                <span className="h-px flex-1 bg-[#E0E0E0]" />
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#E0E0E0] bg-white">
                  <span className="inline-block w-3.5 h-3.5 bg-gray-400 rounded-sm" />
                </span>
                <span className="h-px flex-1 bg-[#E0E0E0]" />
              </div>

              <p className="mt-2 text-[14px] md:text-[16px] leading-relaxed text-[#444444] max-w-xl">
                Yes, Google map scraping can be legal under certain circumstances. While Google's terms of service prohibit automated data scraping from their platforms, including Google Maps, there are situations where it may be legal to scrape data. Our Google map scraper tool only collects publicly available and does not violate any data privacy laws or regulations; then, it may be legal to scrape data from Google Maps.
              </p>

              {/* <div className="mt-6">
                <Button
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <a href="https://cal.com/showmine" target="_blank" className="inline-flex items-center gap-2">
                    <span>Sign Up Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

{/* TestimonialsSection  */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real Indian businesses who trust us with their growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>
              
              <div className="mb-6">
                <p className="text-foreground/90 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="text-base px-8">
            Work With Us
          </Button>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-4 md:mb-6 px-4">

              <span className="text-black italic">FAQ</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Discover the FAQs our users ask and the solutions we provide.
            </p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-18 bg-gradient-to-br from-[#4B6F93]/20 via-[#4B6F93]/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4B6F93]/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-light text-white mb-6 leading-tight">
              Start Your Lead Generation Today
            </h2>
            <p className="text-white text-lg mb-6 leading-7">
              "In world's fast-growing B2B market, staying ahead isn't optional — it's survival. At Showmine Growth, we make sure you don't just compete, you win."
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                className="
                w-full sm:w-auto
                bg-[#4B6F93] hover:bg-[rgb(75, 111, 147)]
                text-white font-medium
                px-3 py-2.5 rounded-xl
                shadow-lg hover:shadow-xl
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-0.5
                text-base
              "
              >
                <a
                  href="https://cal.com/showmine"
                  target="_blank"
                >
                  Get Started 👉🏻
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-t from-black to-transparent" />
      </section>
    </div>
  )
}
