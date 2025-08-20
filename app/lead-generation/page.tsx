"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Target, BarChart3, Zap } from "lucide-react"

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
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-900 px-8 py-6 text-lg rounded-lg">
                  Book a Demo
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
    </div>
  )
}
