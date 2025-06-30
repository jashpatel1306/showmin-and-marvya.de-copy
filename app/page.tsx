"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, X, BarChart3, Target, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <div className="min-h-screen bg-black text-white ">
      <Navigation />

      {/* Hero Section */}  
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.avif"
            alt="Conference room background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" />
        </motion.div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex -space-x-2">
             
                <div className="w-10 h-10  " >
                <img
                src="/client/client1.png"
                loading="lazy"
                className="object-cover md:rounded-r-3xl md:rounded-l-none rounded-b-3xl md:rounded-b-none rounded-lg"
                style={{ minHeight: '100%', maxHeight: '480px', objectPosition: 'center' }}
              />
                </div>
                <div className="w-10 h-10  " >
                <img
                src="/client/client2.png"
                loading="lazy"
                className="object-cover md:rounded-r-3xl md:rounded-l-none rounded-b-3xl md:rounded-b-none rounded-lg"
                style={{ minHeight: '100%', maxHeight: '480px', objectPosition: 'center' }}
              />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" >
                <img
                src="/client/client3.png"
                loading="lazy"
                className="object-cover md:rounded-r-3xl md:rounded-l-none rounded-b-3xl md:rounded-b-none"
                style={{ minHeight: '100%', maxHeight: '480px', objectPosition: 'center' }}
              />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" >
                <img
                src="/client/client5.png"
                loading="lazy"
                className="object-cover md:rounded-r-3xl md:rounded-l-none rounded-b-3xl md:rounded-b-none"
                style={{ minHeight: '100%', maxHeight: '480px', objectPosition: 'center' }}
              />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" >
                <img
                src="/client/client4.png"
                loading="lazy"
                className="object-cover md:rounded-r-3xl md:rounded-l-none rounded-b-3xl md:rounded-b-none"
                style={{ minHeight: '100%', maxHeight: '480px', objectPosition: 'center' }}
              />
                </div>
                
                
                {/* <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white" /> */}
              </div>
              
            </div>
            <div>
            <div className="flex items-center gap-1 ml-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-base text-white/90">350+ successful customers</span>
            </div>
            
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-5xl font-normal mb-8 leading-tight"
          >
            We are <span className="text-red-500 italic font-normal">Your Partner</span> for
            <br />
             Holistic E-commerce Growth.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-white/90"
          >
            <p className="mb-1">
            We offer everything you need for e-commerce success
              <br />
              — all from one source.
            </p>
            <p>
            With our support, you'll grow faster, work more efficiently,
              <br />
              and become more profitable than ever.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              className="
                bg-[#2c4f97] hover:bg-[rgb(75, 111, 147)]
                text-white font-medium
                px-3 py-2.5 rounded-xl
                shadow-lg hover:shadow-xl
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-0.5
                text-base
              "
            >
              Contact 👉🏻
            </Button>
            <Button
              variant="outline"
              className="
                bg-transparent hover:bg-white/10 
                text-white font-medium
                px-3 py-2.5 rounded-xl
                border-white/30 hover:border-white/50
                shadow-lg hover:shadow-xl
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-0.5
                text-base
              "
            >
              Learn more
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-8 text-gray-400 border-gray-600">
              An excerpt from our customers
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60"
          >
            {["MARBERT", "Bettina Barty", "ARKTISQUELLE", "ASMC", "QUARANTINI", "CHAMP"].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-light tracking-wider hover:opacity-100 transition-opacity duration-300"
              >
                {brand}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black w-full font-sans">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">How we can support you</h2>
          <p className="text-lg md:text-xl text-gray-400 text-center mb-14 max-w-2xl">
            Our services are precisely tailored to provide holistic support.<br />
            Based on our experience with our own e-commerce companies,<br />
            we have founded an agency that offers exactly what every<br />
              E-commerce company looking for.
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Shopify Development Card */}
            <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-900/80 to-black p-10 flex flex-col justify-between shadow-xl transition-transform duration-300 hover:scale-105 min-h-[380px]">
              <h3 className="text-3xl font-bold text-white mb-6">Shopify Development</h3>
              <p className="text-white text-base leading-relaxed">
                We develop Shopify stores so that they load extremely quickly, create targeted sales stimuli, and stand out from the competition. The stores we develop literally become customer magnets. Store migrations from other store systems to Shopify are part of our daily business, especially at a time when other store systems are making life increasingly difficult for e-commerce companies and Shopify retailers are overtaking them. Thanks to our unique approach, you not only secure a competitive advantage but also define new performance benchmarks.
              </p>
            </div>
            {/* Growth Consulting Card */}
            <div className="rounded-2xl border border-red-400/20 bg-gradient-to-br from-red-900 via-black-800 to-black-400 p-10 flex flex-col justify-between shadow-xl transition-transform duration-300 hover:scale-105 min-h-[380px]">
              <h3 className="text-3xl font-bold text-white mb-6">Growth Consulting</h3>
              <p className="text-white text-base leading-relaxed">
                In our consulting program, we've made it our mission to scale exciting e-commerce brands at breakneck speed, pushing the boundaries of conventional methods. We work alongside our clients as an active partner, providing comprehensive support throughout their growth. We operate our own shops and have successfully scaled several e-commerce companies to seven- to eight-figure annual sales in recent years. We've distilled these learnings into a strategically sound, step-by-step roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-8 text-gray-400 border-gray-600">
              The direct comparison
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              Why should you work with
              <br />
              <span className="text-blue-400 italic">Showmine</span> ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Other Service Providers */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 p-8 h-full">
                <h3 className="text-2xl md:text-3xl font-light text-gray-400 mb-8">Other service providers</h3>
                <div className="space-y-6">
                  {[
                    "No own shop operated",
                    "No processes, established structures",
                    "Working with freelancers",
                    "No understanding of context",
                    "Logistics is a foreign word",
                    "Burn your profit through lack of planning",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Showmine */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-900/80 to-black border-blue-700/50 p-8 h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl font-light text-blue-400/20">SHOWMINE</div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-8">SHOWMINE</h3>
                <div className="space-y-6">
                  {[
                    "Own online shops",
                    "Speed & Agile Processes",
                    "Expert team of almost 20 employees",
                    "We understand e-commerce holistically",
                    "Own logistics hall",
                    "Trained for profitability & cash flow",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="relative py-24 bg-black font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">Success stories</h2>
          <p className="text-lg md:text-xl text-gray-400 text-center mb-14">Our work delivers not just promises, but measurable results.</p>
        </div>
        {/* Horizontal Scrolling Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-8 items-stretch animate-marvya-horizontal-scroll will-change-transform group"
            style={{animationDuration: '32s'}}
          >
            {[
              // ASMC
              {
                bg: '/placeholder.svg?height=300&width=500', // Replace with industrial/warehouse image
                logo: <div className="text-2xl font-extrabold text-white tracking-wide mb-1">ASMC <span className="block text-xs font-normal tracking-normal text-gray-200">THE ADVENTURE COMPANY</span></div>,
                headline: 'Digital Transformation',
                metrics: [
                  { label: 'Shopify' },
                  { label: 'Industry dominance' },
                ],
              },
              // Histaminikus
              {
                bg: '/placeholder.svg?height=300&width=500', // Replace with couple/kitchen image
                logo: <div className="text-2xl font-extrabold text-white tracking-wide mb-1">Histaminikus<sup>®</sup></div>,
                headline: <><span className="block text-xs font-normal text-gray-200 mb-1">Das Original seit 2017</span>From the garage to the million-dollar company</>,
                metrics: [
                  { label: 'Market leader' },
                  { label: '600% CLV increase' },
                ],
              },
              // Peak
              {
                bg: '/placeholder.svg?height=300&width=500', // Replace with gym/athlete image
                logo: <div className="flex items-center gap-2 text-2xl font-extrabold text-white tracking-wide mb-1"><span className="inline-block">PEAK</span><span className="inline-block text-blue-300">&#9650;</span></div>,
                headline: 'From strong B2B to B2C expansion',
                metrics: [
                  { label: 'Migration to Shopify' },
                  { label: '8% CR overall' },
                ],
              },
            // Duplicate for seamless loop
            ].concat([
              {
                bg: '/placeholder.svg?height=300&width=500',
                logo: <div className="text-2xl font-extrabold text-white tracking-wide mb-1">ASMC <span className="block text-xs font-normal tracking-normal text-gray-200">THE ADVENTURE COMPANY</span></div>,
                headline: 'Digital Transformation',
                metrics: [
                  { label: 'Shopify' },
                  { label: 'Industry dominance' },
                ],
              },
              {
                bg: '/placeholder.svg?height=300&width=500',
                logo: <div className="text-2xl font-extrabold text-white tracking-wide mb-1">Histaminikus<sup>®</sup></div>,
                headline: <><span className="block text-xs font-normal text-gray-200 mb-1">Das Original seit 2017</span>From the garage to the million-dollar company</>,
                metrics: [
                  { label: 'Market leader' },
                  { label: '600% CLV increase' },
                ],
              },
              {
                bg: '/placeholder.svg?height=300&width=500',
                logo: <div className="flex items-center gap-2 text-2xl font-extrabold text-white tracking-wide mb-1"><span className="inline-block">PEAK</span><span className="inline-block text-blue-300">&#9650;</span></div>,
                headline: 'From strong B2B to B2C expansion',
                metrics: [
                  { label: 'Migration to Shopify' },
                  { label: '8% CR overall' },
                ],
              },
            ])
            .map((card, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-[340px] md:w-[400px] h-[320px] md:h-[360px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group/card transition-transform duration-300 hover:scale-105 mx-2"
                tabIndex={0}
                style={{willChange: 'transform'}}
              >
                {/* Background Image */}
                <img
                  src={card.bg}
                  alt="Success story background"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                {/* Card Content */}
                <div className="relative z-20 flex flex-col justify-between h-full p-7">
                  <div>
                    {card.logo}
                  </div>
                  <div className="mt-4 mb-6 text-xl md:text-2xl font-semibold text-white leading-snug">{card.headline}</div>
                  <div className="flex gap-3 mt-auto">
                    {card.metrics.map((m, i) => (
                      <span key={i} className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium shadow-md backdrop-blur-md">
                        {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Fade Shadows */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20 bg-gradient-to-l from-black via-black/80 to-transparent" />
        </div>
        {/* Animations and accessibility */}
        <style jsx global>{`
          @keyframes marvya-horizontal-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marvya-horizontal-scroll {
            animation-name: marvya-horizontal-scroll;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .group:hover .animate-marvya-horizontal-scroll,
          .group:focus-within .animate-marvya-horizontal-scroll {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marvya-horizontal-scroll {
              animation: none !important;
            }
          }
        `}</style>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              Our customers are already
              <br />
              achieving more growth, more
              <br />
              success and more profitability.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Feel free to contact us. In a non-binding initial consultation, you'll
              <br />
              learn how we can set new standards for your e-commerce
              <br />
              business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {[
              {
                number: "1.",
                title: "Analysis",
                icon: BarChart3,
                description:
                  "By asking a few targeted and useful questions, we analyze your current situation and gain a more accurate picture of your company, your sales channels, and your goals.",
              },
              {
                number: "2.",
                title: "Potential",
                icon: Target,
                description:
                  "Thanks to our valuable expertise, we can show you growth potential during the initial consultation that you may not have been aware of before.",
              },
              {
                number: "3.",
                title: "Timetable",
                icon: Clock,
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
                  <div className="w-20 h-20 mx-auto mb-6 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-blue-400" />
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
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-black font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16">What our customers say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Up to Down */}
            <div className="relative h-[500px] overflow-hidden">
              <div className="animate-marvya-scroll-down flex flex-col gap-8 will-change-transform" style={{animationDuration: '22s'}}>
                {[
                  {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "We've been working with Showmine for three months. We'd been considering moving our online store to Shopify for a long time, but we're extremely happy and don't regret the decision at all. The Showmine team is very customer-focused, fast, and reliable...",
                    author: "Carolin Ackermann",
                    company: "SEAWATER Cubes GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Implemented at a very high speed and are showing extraordinary results. The personal support is customer-oriented, authentic, and sets standards in the industry. I highly recommend SHOWMINE...",
                    author: "Roman Wächter",
                    company: "",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ].concat([
              {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "We've been working with Marvya for three months. We'd been considering moving our online store to Shopify for a long time, but we're extremely happy and don't regret the decision at all. The Showmine team is very customer-focused, fast, and reliable...",
                    author: "Carolin Ackermann",
                    company: "SEAWATER Cubes GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Implemented at a very high speed and are showing extraordinary results. The personal support is customer-oriented, authentic, and sets standards in the industry. I highly recommend SHOWMINE...",
                    author: "Roman Wächter",
                    company: "",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ]).map((t, i) => (
                  <div key={i} className="bg-[#18191c] border border-white/10 rounded-2xl shadow-lg p-8 flex flex-col gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group" tabIndex={0} style={{willChange: 'transform'}}>
                    <p className="text-white text-base leading-relaxed mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="font-semibold text-white text-base">{t.author}</div>
                        {t.company && <div className="text-sm text-gray-400">{t.company}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Column 2: Down to Up */}
            <div className="relative h-[500px] overflow-hidden">
              <div className="animate-marvya-scroll-up flex flex-col gap-8 will-change-transform" style={{animationDuration: '22s'}}>
                {[
                  {
                    text: "Thanks to the outstanding network and the great motivation of the entire Showmine team, you can achieve your e-commerce goals quickly and efficiently.",
                    author: "Wolfgang Grupp Junior",
                    company: "TRIGEMA W. Grupp KG",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "We've been working with Marvya for three months. We'd been considering moving our online store to Shopify for a long time, but we're extremely happy and don't regret the decision at all. The Showmine team is very customer-focused, fast, and reliable...",
                    author: "Carolin Ackermann",
                    company: "SEAWATER Cubes GmbH",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ].concat([
                  {
                    text: "Thanks to the outstanding network and the great motivation of the entire Showmine team, you can achieve your e-commerce goals quickly and efficiently.",
                    author: "Wolfgang Grupp Junior",
                    company: "TRIGEMA W. Grupp KG",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                    text: "We've been working with Marvya for three months. We'd been considering moving our online store to Shopify for a long time, but we're extremely happy and don't regret the decision at all. The Showmine team is very customer-focused, fast, and reliable...",
                author: "Carolin Ackermann",
                company: "SEAWATER Cubes GmbH",
                avatar: "/placeholder.svg?height=40&width=40",
              },
                  {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ]).map((t, i) => (
                  <div key={i} className="bg-[#18191c] border border-white/10 rounded-2xl shadow-lg p-8 flex flex-col gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group" tabIndex={0} style={{willChange: 'transform'}}>
                    <p className="text-white text-base leading-relaxed mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="font-semibold text-white text-base">{t.author}</div>
                        {t.company && <div className="text-sm text-gray-400">{t.company}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Column 3: Up to Down */}
            <div className="relative h-[500px] overflow-hidden">
              <div className="animate-marvya-scroll-down flex flex-col gap-8 will-change-transform" style={{animationDuration: '22s'}}>
                {[
                  {
                    text: "Implemented at a very high speed and are showing extraordinary results. The personal support is customer-oriented, authentic, and sets standards in the industry. I highly recommend SHOWMINE...",
                    author: "Roman Wächter",
                    company: "",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Thanks to the outstanding network and the great motivation of the entire Showmine team, you can achieve your e-commerce goals quickly and efficiently.",
                    author: "Wolfgang Grupp Junior",
                    company: "TRIGEMA W. Grupp KG",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ].concat([
                  {
                    text: "Implemented at a very high speed and are showing extraordinary results. The personal support is customer-oriented, authentic, and sets standards in the industry. I highly recommend MARVYA...",
                    author: "Roman Wächter",
                    company: "",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Thanks to the outstanding network and the great motivation of the entire Showmine team, you can achieve your e-commerce goals quickly and efficiently.",
                    author: "Wolfgang Grupp Junior",
                    company: "TRIGEMA W. Grupp KG",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                  {
                    text: "Absolute Shopify experts who did an outstanding job converting our online stores and introducing a subscription system!",
                    author: "Kai Adam",
                    company: "Black Hen Products GmbH",
                    avatar: "/placeholder.svg?height=40&width=40",
                  },
                ]).map((t, i) => (
                  <div key={i} className="bg-[#18191c] border border-white/10 rounded-2xl shadow-lg p-8 flex flex-col gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group" tabIndex={0} style={{willChange: 'transform'}}>
                    <p className="text-white text-base leading-relaxed mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                    <div>
                        <div className="font-semibold text-white text-base">{t.author}</div>
                        {t.company && <div className="text-sm text-gray-400">{t.company}</div>}
                      </div>
                    </div>
                  </div>
            ))}
              </div>
            </div>
          </div>
        </div>
        {/* Animations and accessibility */}
        <style jsx global>{`
          @keyframes marvya-scroll-down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          @keyframes marvya-scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-marvya-scroll-down {
            animation-name: marvya-scroll-down;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .animate-marvya-scroll-up {
            animation-name: marvya-scroll-up;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marvya-scroll-down, .animate-marvya-scroll-up {
              animation: none !important;
            }
          }
        `}</style>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">Our partners</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We work with the best in the industry and
              <br />
              have created the best ecosystem to ensure
              <br />
              your e-commerce business grows
              <br />
              sustainably and stays at the top.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60"
          >
            {["pathway", "DESCARTES pixi", "klaviyo", "gorgias", "TrustShop"].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-light tracking-wider hover:opacity-100 transition-opacity duration-300"
              >
                {partner}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              The leading minds
              <br />
              of Showmine
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Behind us is a team of almost 20 people
              <br />
              who are just waiting to
              <br />
              To help e-commerce businesses grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Jash Patel",
                expertise: "Areas of expertise: business processes, online marketing, development",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Jainish Patel",
                expertise: "Areas of expertise: Sales & Online Marketing",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Vishal Patel",
                expertise: "Areas of expertise: Strategy & Controlling",
                image: "/placeholder.svg?height=400&width=300",
              },
              // {
              //   name: "Hardik Patel",
              //   expertise: "Areas of expertise: Strategy & Controlling",
              //   image: "/placeholder.svg?height=400&width=300",
              // },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 overflow-hidden group hover:border-blue-600/50 transition-all duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{member.expertise}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}