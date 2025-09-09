"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useAnimate } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { partners } from "@/data/partners"
import { ArrowRight, CheckCircle, Clock, Users, Plus, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { cn } from "@/lib/utils"


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


// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What requirements must your customers meet?",
      answer: "We work with ambitious e-commerce businesses that have a clear vision for growth. Ideally, you should have an existing online presence, annual revenue of at least €500K, and be ready to invest in strategic growth initiatives. We look for partners who value long-term relationships and are committed to implementing our recommendations."
    },
    {
      question: "What possibilities for collaboration are there?",
      answer: "We offer flexible collaboration models including full-service partnerships, strategic consulting, project-based work, and ongoing optimization support. Whether you need complete e-commerce management or specific expertise in areas like logistics, marketing, or international expansion, we can tailor our approach to your needs."
    },
    {
      question: "I'm a dropshipper, am I in the right place with you?",
      answer: "While we primarily focus on businesses with their own inventory and logistics, we can help dropshippers transition to more sustainable models. Our expertise in logistics and supply chain management can guide you toward building a more robust, scalable business with better margins and control."
    },
    {
      question: "At what size does collaboration make sense?",
      answer: "Collaboration typically makes sense for businesses generating at least €500K in annual revenue and looking to scale to €2M+ and beyond. However, we also work with smaller businesses that show exceptional growth potential and are ready to invest in professional e-commerce infrastructure."
    },
    {
      question: "Do you only specialize in Shopify stores?",
      answer: "While we have deep expertise in Shopify and it's our preferred platform for most clients, we also work with other e-commerce platforms including WooCommerce, Magento, and custom solutions. Our focus is on finding the right technology stack for your specific business needs and growth goals."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="border border-gray-800 rounded-2xl overflow-hidden bg-gray-900/30 hover:border-gray-700 transition-all duration-300"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
          >
            <h3 className="text-lg md:text-xl font-medium text-white pr-4">
              {faq.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <Plus className="w-6 h-6 text-gray-400" />
            </motion.div>
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-6">
              <p className="text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

// Our customers
const brands = [
  { name: "MARBERT", img: "/images/customers/1.png" },
  { name: "Bettina Barty", img: "/images/customers/2.png" },
  { name: "ARKTISQUELLE", img: "/images/customers/3.png" },
  { name: "ASMC", img: "/images/customers/4.png" },
  { name: "QUARANTINI", img: "/images/customers/diamondrensu.png" },
  { name: "CHAMP", img: "/images/customers/gosharpei.png" },
  { name: "SIMPL", img: "/images/customers/simpl.png" },
  { name: "PINKTOWN", img: "/images/customers/pinktownusa.png" },
];

const Partners = [
  { name: "algolia", img: "/Partners/algolia.webp" },
  { name: "gorgias", img: "/Partners/gorgias.png" },
  { name: "kimonix", img: "/Partners/kimonix.webp" },
  { name: "shopifyplus", img: "/Partners/shopifyplus.png" },
  { name: "klaviyo", img: "/Partners/klaviyo.webp" },
  { name: "recharge", img: "/Partners/recharge.webp" },
  { name: "returnista", img: "/Partners/returnista.png" },
  { name: "segment", img: "/Partners/segment.webp" },
  { name: "sendcloud", img: "/Partners/sendcloud.webp" },
  { name: "shopify", img: "/Partners/shopify.png" },
  { name: "woo", img: "/Partners/woo.png" },
  { name: "yotpo", img: "/Partners/yotpo.webp" },
]
export default function ShopMigrationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge with green dot indicator */}
            <div
              className="inline-flex items-center mb-8 relative overflow-hidden"
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(13, 13, 13, 0.4)',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '12px 16px',
                // gap: '8px',
                height: 'auto',
                width: 'auto',
                placeContent: 'center',
                alignItems: 'center',
                // display: 'flex',
                flexFlow: 'row',
                marginTop: '40px'
              }}
            >
              <div className="">
                <Image src="/shopify.jpg" alt="Shopify" width={20} height={20} />
              </div>
              <TextGenerateEffectinTitleAndSubtitle
                words="Shopify's most experienced migration partner"
                className="text-sm font-extralight text-white  inline-block"
                duration={0.5}
              />
            </div>

            {/* Main Headline */}
            <h1
              className="mb-8 text-white"
              style={{
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                fontSize: '47px',
                fontWeight: '500',
                letterSpacing: '-0.05em',
                lineHeight: '1em',
                textAlign: 'center',
                color: 'rgb(255, 255, 255)'
              }}
            >
              Does your store need an{' '}
              <span className="text-[#4B6F93] italic font-bold">upgrade?</span>
              <br />
              We'll seamlessly migrate your store to Shopify.
            </h1>

            {/* Subtext */}
            <div
              className="max-w-4xl mx-auto mb-12"
              style={{
                outline: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                opacity: 1,
                flexShrink: 0,
                transform: 'perspective(1200px)',
                willChange: 'transform'
              }}
            >
              <p
                className="text-[#A3A3A3] font-medium leading-relaxed"
                style={{
                  flex: '0 0 auto',
                  height: 'auto',
                  position: 'relative',
                  whiteSpace: 'pre-wrap',
                  width: '100%',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                Whether Shopware, Magento, Oxid, another shop platform or a tailor-made solution –{' '}
                <br className="hidden md:block" />
                We support you in switching to the world's most powerful shop platform: Shopify.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                size="sm"
                className="bg-[#4B6F93] hover:bg-[#5A87E4] text-white px-6 py-2 text-sm rounded-lg transition-colors duration-200 font-medium"
              >
                Request a project 👉🏻
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-10 bg-black">
        <div className="max-w-7xl mx-auto px-4">


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto"
                controls
                poster="/images/video-poster.jpg"
                preload="metadata"
              >
                <source src="/images/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video overlay for better aesthetics */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Zero Downtime",
                description: "Migrate without interrupting your business operations",
              },
              {
                icon: Clock,
                title: "Fast Process",
                description: "Complete migration in record time with our proven methods",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Dedicated migration specialists handle your project",
              },
              {
                icon: TrendingUp,
                title: "Performance Boost",
                description: "Improve site speed and conversion rates post-migration",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-6 text-center h-full">
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Card Section */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="flex flex-col md:flex-row bg-[#18191c] rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            style={{ minHeight: '380px' }}
          >
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col justify-center px-8 py-10 md:py-12 md:px-12">
              <blockquote className="text-white text-2xl md:text-3xl font-light leading-snug mb-8 relative">
                <span className="text-5xl md:text-6xl text-blue-400 font-serif absolute -left-6 -top-8 select-none">“</span>
                In our role as a Shopify Plus Partner, we are far more than just solution experts. Thanks to our extensive practical experience, we support you in every phase of your digital transformation and ensure that your company's digitalization is sustainable and effective.
                <span className="text-5xl md:text-6xl text-blue-400 font-serif absolute -right-6 -bottom-8 select-none">”</span>
              </blockquote>
              <div className="mt-2">
                <div className="text-white text-lg font-bold">Jash Patel</div>
                <div className="text-gray-400 text-base">Managing Director of Showmine</div>
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex-1 min-h-[320px] md:min-h-0">
              <img
                src="/images/marvin-wu.jpg"
                alt="Marvin Wu, Managing Director of Showmine in a modern office setting"
                className="w-full h-full object-cover md:rounded-r-3xl md:rounded-l-none rounded-b-3xl md:rounded-b-none"
                loading="lazy"
                style={{ minHeight: '100%', maxHeight: '480px', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Migration Showcase Section */}
      <section className="w-full bg-black py-20 px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >

          <TextGenerateEffectinTitleAndSubtitle
            words="Already praised by Shopify"
            className="px-1 py-0.5 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
            duration={0.5}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              Fast, high quality <span className="font-normal">&</span> <span className="italic font-script text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Dancing Script, cursive' }}>without limits.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Our store migrations are fast, precise and limitless.<br />
              We ensure your transition to Shopify (Plus) is smooth and efficient, without<br />
              compromising on quality. Your IT infrastructure will be seamlessly integrated, ready<br />
              for new growth.
            </p>
          </div>

          {/* Main Content: Two Columns */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Left: Testimonial Card */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row items-stretch overflow-hidden">
                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center px-8 py-10 md:py-12 md:px-10">
                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-900 text-base leading-relaxed w-full">
                    “Working with Showmine was a true pleasure from the very beginning. The migration of our store from Shopware to Shopify was implemented with breathtaking speed and a passion that far exceeded our expectations. The exceptional expertise and tireless commitment of the entire team inspired and motivated us throughout every phase of the project. Thanks to Showmine, we now feel stronger and better prepared for the future than ever before.”
                  </blockquote>
                  <div className="mt-2">
                    <div className="text-gray-900 text-base font-bold">Birk Borkhard</div>
                  </div>
                </div>
                {/* Headshot Image */}
                <div className="flex-shrink-0 flex items-center md:items-stretch justify-center md:justify-end bg-white">
                  <img
                    src="/images/birk-borkhard.jpg"
                    alt="Birk Borkhard, professional headshot, business suit"
                    className="w-40 h-40 md:w-48 md:h-full object-cover md:rounded-r-3xl rounded-b-3xl md:rounded-b-none"
                    loading="lazy"
                    style={{ minHeight: '100%', maxHeight: '240px', objectPosition: 'center' }}
                  />
                </div>
              </div>
            </div>
            {/* Right: Case Study Details */}
            <div className="flex-1 flex flex-col gap-10">
              <div>
                <h3 className="text-white text-2xl font-semibold mb-3">Migration: Shopware to Shopify</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  ASMC switched from Shopware 5 to Shopify Plus. We migrated all data, integrated the content, and retained the familiar design. Additionally, we developed special features such as upselling in the shopping cart and a points system. We also integrated Klaviyo for newsletters and Reviews.io for reviews.
                </p>
              </div>
              <div>
                <h3 className="text-white text-2xl font-semibold mb-3 lowercase">internationalization</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  We have successfully expanded the shop for Italy and France in order to have an international presence and open up new markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Website Showcase Section */}
      <section className="w-full bg-[#111215] py-16 px-5">
        <div className="max-w-[1800px] mx-auto flex flex-col gap-14">
          {[0, 1, 2].map((rowIdx) => (
            <div
              key={rowIdx}
              className="overflow-hidden w-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              }}
            >
              <div
                className={`flex gap-8 min-w-max animate-scroll-row${rowIdx % 2 === 0 ? '-rtl' : '-ltr'}`}
                style={{ willChange: 'transform' }}
              >
                {/* Duplicate cards for seamless looping */}
                {Array(2)
                  .fill(0)
                  .flatMap((_, dupIdx) =>
                    [
                      // E-commerce/Fashion
                      {
                        title: 'Fashionista',
                        desc: 'Discover the latest trends in fashion.',
                        nav: ['Home', 'Shop', 'Lookbook', 'Contact'],
                        img: '/showcase/fashion.jpg',
                        color: '#f7f7fa',
                        logo: 'F',
                        cta: 'Shop Now',
                      },
                      // Technology/SaaS
                      {
                        title: 'SaaSly',
                        desc: 'Your dashboard, reimagined.',
                        nav: ['Dashboard', 'Analytics', 'Settings'],
                        img: '/showcase/saas.jpg',
                        color: '#eaf6ff',
                        logo: 'S',
                        cta: 'Start Free Trial',
                      },
                      // Food/Restaurant
                      {
                        title: 'TastyBites',
                        desc: 'Delicious food delivered to you.',
                        nav: ['Menu', 'Order', 'About', 'Contact'],
                        img: '/showcase/food.jpg',
                        color: '#fff7f0',
                        logo: 'T',
                        cta: 'Order Now',
                      },
                      // Travel/Tourism
                      {
                        title: 'Wanderly',
                        desc: 'Explore the world with us.',
                        nav: ['Destinations', 'Tours', 'Blog'],
                        img: '/showcase/travel.jpg',
                        color: '#f0f7ff',
                        logo: 'W',
                        cta: 'Book a Trip',
                      },
                      // Finance/Business
                      {
                        title: 'FinPeak',
                        desc: 'Grow your wealth with confidence.',
                        nav: ['Overview', 'Invest', 'Reports'],
                        img: '/showcase/finance.jpg',
                        color: '#f7faff',
                        logo: 'FP',
                        cta: 'Get Started',
                      },
                      // Health/Wellness
                      {
                        title: 'Wellio',
                        desc: 'Your health, our priority.',
                        nav: ['Home', 'Services', 'Team'],
                        img: '/showcase/health.jpg',
                        color: '#f6fff7',
                        logo: 'W',
                        cta: 'Book Appointment',
                      },
                      // Education/Learning
                      {
                        title: 'Learnify',
                        desc: 'Unlock your potential.',
                        nav: ['Courses', 'Tutors', 'Pricing'],
                        img: '/showcase/education.jpg',
                        color: '#f9f7ff',
                        logo: 'L',
                        cta: 'Browse Courses',
                      },
                      // Real Estate
                      {
                        title: 'HomeQuest',
                        desc: 'Find your dream home.',
                        nav: ['Listings', 'Agents', 'Contact'],
                        img: '/showcase/realestate.jpg',
                        color: '#f7fcff',
                        logo: 'HQ',
                        cta: 'View Listings',
                      },
                      // Sports/Fitness
                      {
                        title: 'FitNation',
                        desc: 'Achieve your fitness goals.',
                        nav: ['Workouts', 'Trainers', 'Shop'],
                        img: '/showcase/sports.jpg',
                        color: '#fffef7',
                        logo: 'FN',
                        cta: 'Join Now',
                      },
                      // Creative/Agency
                      {
                        title: 'Creatify',
                        desc: 'Showcasing creative talent.',
                        nav: ['Portfolio', 'About', 'Contact'],
                        img: '/showcase/creative.jpg',
                        color: '#f7f7ff',
                        logo: 'C',
                        cta: 'See Portfolio',
                      },
                    ].map((site, idx) => (
                      <div
                        key={dupIdx + '-' + idx}
                        className="rounded-xl bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 flex flex-col w-[320px] h-[220px] mr-6 relative"
                        style={{ minWidth: 300, maxWidth: 350 }}
                      >
                        {/* Browser Mockup Bar */}
                        <div className="flex items-center px-4 py-2 bg-[#f3f4f6] rounded-t-xl border-b border-gray-200">
                          <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                          <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                          <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                          <div className="ml-4 flex-1 h-4 bg-gray-200 rounded-md"></div>
                        </div>
                        {/* Main Content Area */}
                        <div className="flex-1 flex flex-col justify-between p-4" style={{ background: site.color }}>
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg mr-2">
                              {site.logo}
                            </div>
                            <span className="font-semibold text-gray-800 text-base">{site.title}</span>
                          </div>
                          <div className="flex-1 text-gray-700 text-sm mb-2">{site.desc}</div>
                          <div className="flex items-center gap-2 mb-2">
                            {site.nav.map((item, i) => (
                              <span key={i} className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-0.5 mr-1 last:mr-0">{item}</span>
                            ))}
                          </div>
                          <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded shadow">
                            {site.cta}
                          </button>
                        </div>
                      </div>
                    ))
                  )}
              </div>
            </div>
          ))}
        </div>
        {/* Animations */}
        <style jsx>{`
          @keyframes scroll-row-rtl {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-row-ltr {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-row-rtl {
            animation: scroll-row-rtl 40s linear infinite;
          }
          .animate-scroll-row-ltr {
            animation: scroll-row-ltr 40s linear infinite;
          }
        `}</style>
      </section>

      {/* More than just a migration Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Glowing background effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-cyan-400/15 via-blue-400/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2 w-[500px] h-[300px] bg-gradient-radial from-indigo-400/20 via-purple-400/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

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
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >

              <TextGenerateEffectinTitleAndSubtitle
                words="More than just a migration"
                className="px-1 py-0.5 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
                duration={0.5}
              />
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-5 text-white">
                Our process is{' '}
                <span className="italic text-blue-400" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  unique
                </span>
                .
              </h2>
              <div className="max-w-4xl mx-auto space-y-2">
                <p className="text-[#A3A3A3] text-[18px] ">
                  During our migration projects, we examine all your processes and structures.
                </p>
                <p className="text-[#A3A3A3] text-[18px] ">
                  We take the opportunity to
                </p>
                <p className="text-[#A3A3A3] text-[18px]  font-medium">
                  to completely digitize the entire company.
                </p>
                <p className="text-[#A3A3A3] text-[18px] ">
                  This makes switching to Shopify the foundation for a complete digital transformation.
                </p>
              </div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full">
              {[
                {
                  icon: "/images/info/UIUX.gif",
                  title: "UI / UX Design",
                  description: "Improve the shopping experience with UX/UI design optimized for high-performance Shopify stores."
                },
                {
                  icon: "/images/info/shopifyexpert.gif",
                  title: "Shopify (Plus) Experts",
                  description: "Use our expertise to unlock the full potential of Shopify (Plus) and take your store to the next level."
                },
                {
                  icon: "/images/info/shopifyMigration.gif",
                  title: "Migrating to Shopify",
                  description: "Is your online store currently running on Shopware or WooCommerce and are you struggling with slow customizations?"
                },
                {
                  icon: "/images/info/dataAnalytics.gif",
                  title: "Data Analytics",
                  description: "Through our expertise in data analytics, we gain valuable insights from your data that help improve your store effectively."
                },
                {
                  icon: "/images/info/Salesoptimazation.gif",
                  title: "Shop Analysis & Conversion Rate Optimization",
                  description: "We ensure that customers not only discover your store, but also buy your products."
                },
                {
                  icon: "/images/info/customApps.gif",
                  title: "Custom Apps, Functions and much more",
                  description: "We develop customized apps and software solutions that are perfectly tailored to your business!"
                }
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

      {/* All solution from a single source Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <TextGenerateEffectinTitleAndSubtitle
            words="All solution from a single source"
            className="px-1 py-0.5 mb-6 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
            duration={0.5}
          />

            <h2 className="text-5xl md:text-6xl font-light mb-8 text-white">
              We make it possible.
            </h2>
            <p className="text-[#A3A3A3] text-lg leading-relaxed max-w-4xl mx-auto">
              As one of the leading Shopify (Plus) agencies, we provide our clients with
              comprehensive support in all aspects of Shopify. We ensure that you receive
              the best possible support and build a solid foundation for your e-commerce business.
            </p>
          </motion.div>

          {/* Services Tags Grid - Animated Rows */}
          <div className="mb-16 space-y-8">
            <style jsx>{`
              @keyframes scrollRightToLeft {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-100% - 2rem)); }
              }
              @keyframes scrollLeftToRight {
                0% { transform: translateX(calc(-100% - 2rem)); }
                100% { transform: translateX(0); }
              }
              .animate-scroll-rtl {
                animation: scrollRightToLeft 30s linear infinite;
                display: flex;
                width: max-content;
              }
              .animate-scroll-ltr {
                animation: scrollLeftToRight 30s linear infinite;
                display: flex;
                width: max-content;
              }
              .service-card {
                @apply bg-[#111] border border-gray-800 hover:border-[#4A77D4] hover:shadow-[0_0_15px_rgba(74,119,212,0.3)] rounded-2xl px-8 py-4 flex items-center gap-3 transition-all duration-300 hover:scale-105 flex-shrink-0;
                min-width: 200px;
              }
            `}</style>

            {/* First Row - Right to Left Animation */}
            <div className="overflow-hidden">
              <div className="flex gap-8">
                <div className="animate-scroll-rtl">
                  {[...Array(2)].map((_, dupIdx) => (
                    <div key={`row1-${dupIdx}`} className="flex gap-8">
                      {[
                        { icon: "🔄", title: "Shopify Relaunch" },
                        { icon: "📊", title: "Data Analytics" },
                        { icon: "🧪", title: "A/B Testing" },
                        { icon: "🎨", title: "UI/UX Design" },
                        { icon: "📱", title: "Mobile First" },
                        { icon: "⚡", title: "Performance" },
                        { icon: "🔍", title: "SEO" }
                      ].map((item, index) => (
                        <div key={`row1-item-${index}`} className="service-card">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-sm font-medium text-white">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Row - Left to Right Animation */}
            <div className="overflow-hidden">
              <div className="flex gap-8">
                <div className="animate-scroll-ltr">
                  {[...Array(2)].map((_, dupIdx) => (
                    <div key={`row2-${dupIdx}`} className="flex gap-8">
                      {[
                        { icon: "🧠", title: "Sales Psychology" },
                        { icon: "📧", title: "Email Marketing" },
                        { icon: "📈", title: "Analytics" },
                        { icon: "💡", title: "Strategy" },
                        { icon: "🛒", title: "E-commerce" },
                        { icon: "🌐", title: "Web Development" },
                        { icon: "📱", title: "App Integration" }
                      ].map((item, index) => (
                        <div key={`row2-item-${index}`} className="service-card">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-sm font-medium text-white">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We are Shopify Experts Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-light text-white">
              We are Shopify experts.
            </h3>
            <div className="space-y-4">
              <p className="text-[#A3A3A3] text-lg">
                We have been working exclusively with Shopify since 2018.
              </p>
              <p className="text-[#A3A3A3] text-lg">
                80% of our customers use Shopify Plus.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-[#4B6F93] hover:bg-[#5A87E4] text-white px-8 py-4 text-lg rounded-lg transition-colors duration-200 font-medium"
            >
              Request a project 👉🏻
            </Button>
          </motion.div>
        </div>
      </section>

    
    <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 md:mb-8 px-4">Our partners</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              We work with the best in the industry and
              <br />
              have created the best ecosystem to ensure
              <br />
              your e-commerce business grows
              <br />
              sustainably and stays at the top.
            </p>
          </motion.div>

          <div className="overflow-hidden relative">
            <div className="flex animate-marquee gap-12">
              {/* Original List */}
              {Partners.map((brand, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={brand.img}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain  duration-300"
                  />
                </div>
              ))}

              {/* Duplicate for seamless loop */}
              {Partners.map((brand, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0">
                  <Image
                    src={brand.img}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain opacity-70 transition-opacity duration-600"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextGenerateEffectinTitleAndSubtitle
            words="What are you waiting for?"
            className="px-1 py-0.5 mb-6 text-[6px] font-medium bg-white/10 text-white border-white/20 rounded-full border inline-block"
            duration={0.5}
          />

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              Our customers are already
              <br />
              achieving more growth, more
              <br />
              success and more profitability.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              In a non-binding initial consultation, you will learn how we can
              <br />
              migrate your online store to Shopify.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {[
              {
                number: "1.",
                title: "Analysis",
                icon: "/images/info/Analysis.gif",
                description:
                  "By asking a few targeted and useful questions, we analyze your current situation and gain a more accurate picture of your company, your sales channels, and your goals.",
              },
              {
                number: "2.",
                title: "Potential",
                icon: "/images/info/Marketing.gif",
                description:
                  "Thanks to our valuable expertise, we can show you growth potential during the initial consultation that you may not have been aware of before.",
              },
              {
                number: "3.",
                title: "Timetable",
                icon: "/images/info/Money.gif",
                description:
                  "Using our Showmine Method®, we will show you the next sensible steps for your company and how you can implement them with us in a time-saving and profitable way.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    {/* <step.icon className="w-10 h-10 text-blue-400" /> */}
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-20 h-20 mb-4 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light mb-4">
                    {step.number} {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl mx-auto mt-10"
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
                href="https://calendly.com/showmineinfotech/30min"
                target="_blank"
              >
                Request a project 👉🏻
              </a>
            </Button>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-8 text-white border-gray-600 py-3 px-4 flex-nowrap rounded-[12px] text-[12px] font-normal">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
                The most frequently asked questions about migration
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We often receive the same questions in our initial consultations. To help us make the most of your time, here are some answers.
              </p>
            </motion.div>

            <FAQAccordion />
          </div>
        </section>
      </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#4B6F93]/20 via-[#4B6F93]/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 md:mb-8 leading-tight px-4">
              Let's discuss your growth
              <br />
              potential together.
            </h2>
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
                  href="https://calendly.com/showmineinfotech/30min"
                  target="_blank"
                >
                  Contact 👉🏻
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>
    </div>
  )
}
