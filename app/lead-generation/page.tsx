"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Target, BarChart3, Zap, MapPin, Star, Search, Mail, ArrowRight } from "lucide-react"
import { GitHubGlobe } from "@/components/ui/github-globe"
import { Beams } from "@/components/ui/beams"
import { FocusCard } from "@/components/ui/focus-card"
import { BackgroundBeams } from "@/components/ui/background-beams";
import { GlobeSection } from "@/components/ui/globe-section";
import { UseCasesSection } from "@/components/ui/use-cases-section";

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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <GitHubGlobe />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8 relative z-10"
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 mb-4 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.span
                  className="w-2 h-2 bg-[#4B6F93] rounded-full mr-2"
                  animate={{
                    boxShadow: ['0 0 0 0 rgba(75, 111, 147, 0.7)', '0 0 0 10px rgba(75, 111, 147, 0)'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeOut'
                  }}
                />
                <span className="text-sm font-medium text-gray-300">AI-Powered Lead Generation</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  ✨ Get Public Data Alive
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Showmine enables you to extract valuable business data from Google Maps and other reliable sources with ease. Our platform is designed to be simple, intuitive, and efficient—allowing you to log in, collect data instantly, and gain accurate insights to help grow your business.
              </motion.p>

              <motion.p
                className="text-lg text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                We know your time is valuable, which is why we've built Livescraper to be as straightforward and user-friendly as possible. Once you sign up, you'll have full access to all features. After extracting the data, you can quickly download it and analyze it to uncover new opportunities.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="relative overflow-hidden group bg-gradient-to-r from-[#4B6F93] to-[#5A87E4] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform">
                    <span className="relative z-10">Get Started</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-[#5A87E4] to-[#4B6F93] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Animated background elements */}
              <motion.div
                className="absolute -z-10 -top-20 -left-20 w-64 h-64 bg-[#4B6F93]/10 rounded-full filter blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>

            {/* Right Side - Image Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[500px]"
            >
              {/* Main Featured Image */}
              <motion.div
                className="absolute w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-10 right-0 top-0"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img
                  src="/leadgeneration/scraper1.png"
                  alt="Lead Generation Dashboard"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Top Left Image */}
              <motion.div
                className="absolute w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-2xl left-0 top-0 z-20"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <img
                  src="/leadgeneration/scraper2.png"
                  alt="Data Extraction"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div
                className="absolute w-[40%] h-[45%] rounded-2xl overflow-hidden shadow-2xl left-0 bottom-0 z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <img
                  src="/leadgeneration/scraper3.png"
                  alt="Lead Management"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom Right Image */}
              <motion.div
                className="absolute w-[50%] h-[35%] rounded-2xl overflow-hidden shadow-2xl right-0 bottom-0 z-20"
                initial={{ y: 20, x: 20, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <img
                  src="/leadgeneration/scraper4.png"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Animated Decorative Elements */}
              <div className="absolute -z-10 w-full h-full">
                <motion.div
                  className="absolute w-64 h-64 bg-[#4B6F93]/20 rounded-full -top-32 -left-32 filter blur-3xl"
                  animate={{
                    x: [0, 10, 0],
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute w-96 h-96 bg-[#4B6F93]/10 rounded-full -bottom-48 -right-48 filter blur-3xl"
                  animate={{
                    x: [0, -15, 0],
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute w-40 h-40 bg-[#5A87E4]/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>
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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Best Services We Present For Your Business
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Want to extract data from a public source? With an effortless data scraping process, you can enhance your Lead generation and productivity of your workflow.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
      <UseCasesSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4B6F93]/20 via-[#4B6F93]/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4B6F93]/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-3xl lg:text-5xl font-light text-white mb-8 leading-tight">
              Ready to streamline your
              <br />
              business operations?
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
                  Get Started 👉🏻
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
