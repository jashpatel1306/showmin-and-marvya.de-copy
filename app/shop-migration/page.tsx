"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Users, TrendingUp } from "lucide-react"

export default function ShopMigrationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-8 text-gray-400 border-gray-600">
              Shop Migration
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
              Seamless Shop
              <br />
              <span className="text-blue-400 italic">Migration</span> Services
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              We help you migrate your e-commerce store to modern platforms
              <br />
              without losing data, customers, or revenue.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full">
              Start Migration <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
                <div className="text-white text-lg font-bold">Marvin Wu</div>
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
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              Fast, high quality <span className="font-normal">&</span> <span className="italic font-script text-4xl md:text-5xl lg:text-6xl" style={{fontFamily: 'Dancing Script, cursive'}}>without limits.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Our store migrations are fast, precise and limitless.<br/>
              We ensure your transition to Shopify (Plus) is smooth and efficient, without<br/>
              compromising on quality. Your IT infrastructure will be seamlessly integrated, ready<br/>
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
                      <svg key={i} className="w-6 h-6 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
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
    </div>
  )
}
