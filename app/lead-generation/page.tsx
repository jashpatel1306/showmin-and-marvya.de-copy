"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Target, BarChart3, Zap, MapPin, Star, Search, Mail } from "lucide-react"

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
      <section className="pt-32 pb-20 bg-black ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 mb-4">
                <span className="w-2 h-2 bg-[#4B6F93] rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-300">AI-Powered Lead Generation</span>
              </div> */}
              
              <h1 className="text-5xl md:text-4xl font-bold leading-tight">
                ✨ Get Public Data Alive
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Showmine enables you to extract valuable business data from Google Maps and other reliable sources with ease. Our platform is designed to be simple, intuitive, and efficient—allowing you to log in, collect data instantly, and gain accurate insights to help grow your business.
              </p>
              
              <p className="text-lg text-gray-400">
              We know your time is valuable, which is why we’ve built Livescraper to be as straightforward and user-friendly as possible. Once you sign up, you’ll have full access to all features. After extracting the data, you can quickly download it and analyze it to uncover new opportunities.              </p>
            
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-[#4B6F93] hover:bg-[#5A87E4] text-white px-8 py-6 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
                  Get Started Free
                </Button>
              </div>
            </motion.div>

            {/* Right Side - Feature Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <Card className="h-full p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-[#4B6F93]/50 transition-all duration-300">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Services We Present Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold text-black mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Best Services <motion.span 
                className="text-[#0066FF] inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              >
                We Present
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Want to extract data from a public source? With an effortless data scraping process, you can enhance your Lead generation and productivity of your workflow. Check out the services we provide.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {/* Service Card 1 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { type: 'spring', stiffness: 100 }
                }
              }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(0, 102, 255, 0.1)',
                borderColor: 'rgba(0, 102, 255, 0.2)'
              }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <motion.div 
                className="absolute top-6 right-6 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <MapPin className="w-8 h-8 text-blue-500" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3 pr-16">Google Maps Data Scraper</h3>
              <p className="text-gray-600 mb-6">
                Extracts places/business information from Google Maps, including business name, address, phone number, website URL, Email, Social handles and more.
              </p>
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors"
                  whileHover={{ 
                    backgroundColor: 'rgba(0, 102, 255, 0.1)',
                    scale: 1.1
                  }}
                >
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 text-[#0066FF]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <motion.div 
                className="absolute top-6 right-6 w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <Star className="w-8 h-8 text-orange-500" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3 pr-16">Google Maps Reviews Scraper</h3>
              <p className="text-gray-600 mb-6">
                With Livescraper, you can extract all the reviews for your own business or any business/places available on their Google my business profile.
              </p>
              <div className="flex justify-end">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { type: 'spring', stiffness: 100 }
                }
              }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.1)',
                borderColor: 'rgba(168, 85, 247, 0.2)'
              }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <motion.div 
                className="absolute top-6 right-6 w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <Search className="w-8 h-8 text-purple-500" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3 pr-16">Google Search Scraping</h3>
              <p className="text-gray-600 mb-6">
                Scrape key information from Google SERP without any coding skills such as keywords, ranking position, Links, and other metrics.
              </p>
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors"
                  whileHover={{ 
                    backgroundColor: 'rgba(168, 85, 247, 0.1)',
                    scale: 1.1
                  }}
                >
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 text-purple-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { type: 'spring', stiffness: 100 }
                }
              }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.1)',
                borderColor: 'rgba(16, 185, 129, 0.2)'
              }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <motion.div 
                className="absolute top-6 right-6 w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <Mail className="w-8 h-8 text-green-500" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3 pr-16">Email & Contact Scraper</h3>
              <p className="text-gray-600 mb-6">
                Scrape email addresses, contact information, Social Media handles, website title, meta description from as many as websites you want.
              </p>
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors"
                  whileHover={{ 
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    scale: 1.1
                  }}
                >
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Service Card 5 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { type: 'spring', stiffness: 100 }
                }
              }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.1)',
                borderColor: 'rgba(139, 92, 246, 0.2)'
              }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <motion.div 
                className="absolute top-6 right-6 w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3 pr-16">B2B Lead Generation</h3>
              <p className="text-gray-600 mb-6">
                Get access to a comprehensive database for B2B lead generation with vital information about potential customers.
              </p>
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors"
                  whileHover={{ 
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    scale: 1.1
                  }}
                >
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 text-indigo-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Service Card 6 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { type: 'spring', stiffness: 100 }
                }
              }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.1)',
                borderColor: 'rgba(16, 185, 129, 0.2)'
              }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <motion.div 
                className="absolute top-6 right-6 w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3 pr-16">Email Validation</h3>
              <p className="text-gray-600 mb-6">
                Validate email addresses in bulk with our advanced verification system. Ensure high deliverability and clean your email lists effectively.
              </p>
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors"
                  whileHover={{ 
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                    scale: 1.1
                  }}
                >
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 text-teal-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
