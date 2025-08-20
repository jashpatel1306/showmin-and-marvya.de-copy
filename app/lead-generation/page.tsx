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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Best Services <span className="text-[#0066FF]">We Present</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Want to extract data from a public source? With an effortless data scraping process, you can enhance your Lead generation and productivity of your workflow. Check out the services we provide.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Service Card 1 */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 pr-16">Google Maps Data Scraper</h3>
              <p className="text-gray-600 mb-6">
                Extracts places/business information from Google Maps, including business name, address, phone number, website URL, Email, Social handles and more.
              </p>
              <div className="flex justify-end">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0066FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center">
                <Star className="w-8 h-8 text-orange-500" />
              </div>
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
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center">
                <Search className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 pr-16">Google Search Scraping</h3>
              <p className="text-gray-600 mb-6">
                Scrape key information from Google SERP without any coding skills such as keywords, ranking position, Links, and other metrics.
              </p>
              <div className="flex justify-end">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 pr-16">Email & Contact Scraper</h3>
              <p className="text-gray-600 mb-6">
                Scrape email addresses, contact information, Social Media handles, website title, meta description from as many as websites you want.
              </p>
              <div className="flex justify-end">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
