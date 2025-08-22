// "use client"

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Navigation } from "@/components/navigation"
// import { Button } from "@/components/ui/button"
// import { 
//   Target, 
//   BarChart3, 
//   Zap, 
//   Users, 
//   Search, 
//   Mail, 
//   ArrowRight,
//   ChevronDown,
//   ChevronUp,
//   Star,
//   MapPin
// } from "lucide-react"

// interface Feature {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   color: string;
// }

// interface Step {
//   number: string;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// interface FAQ {
//   question: string;
//   answer: string;
// }

// export default function LeadGenerationPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
  
//   // Features data
//   const features: Feature[] = [
//     {
//       icon: <Target className="w-8 h-8 text-white" />,
//       title: "Targeted Lead Generation",
//       description: "Reach your ideal customers with precision targeting based on demographics, behavior, and intent.",
//       color: "from-blue-500 to-blue-700"
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8 text-white" />,
//       title: "Data-Driven Insights",
//       description: "Make informed decisions with real-time analytics and performance metrics.",
//       color: "from-purple-500 to-purple-700"
//     },
//     {
//       icon: <Zap className="w-8 h-8 text-white" />,
//       title: "Automated Workflows",
//       description: "Save time with automated lead nurturing and follow-up sequences.",
//       color: "from-green-500 to-green-700"
//     },
//     {
//       icon: <Users className="w-8 h-8 text-white" />,
//       title: "Team Collaboration",
//       description: "Work seamlessly with your team to manage and convert leads.",
//       color: "from-yellow-500 to-yellow-700"
//     }
//   ];
  
//   // How It Works steps
//   const steps: Step[] = [
//     {
//       number: '01',
//       title: 'Define Your Audience',
//       description: 'Set your target criteria and let our AI find the best matches',
//       icon: <Target className="w-6 h-6 text-white" />
//     },
//     {
//       number: '02',
//       title: 'Generate Leads',
//       description: 'Our system scans multiple sources to find potential customers',
//       icon: <Search className="w-6 h-6 text-white" />
//     },
//     {
//       number: '03',
//       title: 'Engage & Convert',
//       description: 'Reach out with personalized messages and track responses',
//       icon: <Mail className="w-6 h-6 text-white" />
//     }
//   ];
  
//   // FAQ data
//   const faqs: FAQ[] = [
//     {
//       question: "How quickly can I see results?",
//       answer: "Most clients start seeing qualified leads within the first 2 weeks."
//     },
//     {
//       question: "Do you offer lead nurturing?",
//       answer: "Yes, we provide comprehensive lead nurturing solutions."
//     },
//     {
//       question: "CRM integration?",
//       answer: "Integrates with all major CRM systems."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm mb-6"
//             >
//               <Star className="w-4 h-4 mr-2" />
//               Trusted by 10,000+ businesses
//             </motion.div>
            
//             <motion.h1 
//               className="text-5xl md:text-6xl font-bold mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//             >
//               Generate More <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Leads</span>
//             </motion.h1>
            
//             <motion.p 
//               className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Transform your business with our AI-powered lead generation platform.
//             </motion.p>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >
//               <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-xl">
//                 Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-xl">
//                 Book a Demo
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section>
      
//       {/* Features Section */}
//       <section className="py-20 bg-gray-900/50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-bold mb-6">Powerful Features</h2>
//             <p className="text-xl text-gray-400">Everything you need to find and convert leads</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-800/50 rounded-2xl p-8 border border-gray-800"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color}`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//                 <p className="text-gray-400">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* How It Works */}
//       <section className="py-20 bg-black">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-bold mb-6">How It Works</h2>
//             <p className="text-xl text-gray-400">Get started in minutes</p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {steps.map((step, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-lg font-bold mb-4">
//                   {step.number}
//                 </div>
//                 <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//                 <p className="text-gray-400">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* FAQ Section */}
//       <section className="py-20 bg-gray-900/50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="border-b border-gray-800 pb-4">
//                   <button
//                     className="w-full flex justify-between items-center py-4 text-left"
//                     onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                   >
//                     <span className="text-lg font-medium">{faq.question}</span>
//                     {openFaq === index ? (
//                       <ChevronUp className="w-5 h-5 text-gray-400" />
//                     ) : (
//                       <ChevronDown className="w-5 h-5 text-gray-400" />
//                     )}
//                   </button>
//                   {openFaq === index && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="text-gray-400 pb-4">{faq.answer}</p>
//                     </motion.div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//             Start generating high-quality leads today with our 14-day free trial. No credit card required.
//           </p>
//           <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-xl">
//             Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//         </div>
//       </section>
      
//     </div>
//   )
// }


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


    </div>
  )
}
