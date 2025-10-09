"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { partners } from "@/data/partners"
import { ArrowRight, CheckCircle, Clock, Users, Plus, TrendingUp, Brain, Zap, Target, BarChart3 } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What AI and ML services do you offer?",
      answer: "We offer comprehensive AI and ML solutions including predictive analytics, customer behavior analysis, automated marketing campaigns, inventory optimization, personalized recommendations, and intelligent chatbots. Our solutions are specifically tailored for e-commerce businesses to drive growth and improve customer experience."
    },
    {
      question: "How can AI improve my e-commerce business?",
      answer: "AI can transform your e-commerce business by providing personalized shopping experiences, optimizing pricing strategies, predicting customer behavior, automating customer service, improving inventory management, and enhancing marketing campaigns. This leads to increased conversions, higher customer satisfaction, and improved operational efficiency."
    },
    {
      question: "Do you integrate AI with existing Shopify stores?",
      answer: "Yes, we seamlessly integrate AI and ML solutions with existing Shopify stores. Our solutions work with your current setup and can be implemented without disrupting your business operations. We ensure compatibility with your existing apps, themes, and workflows."
    },
    {
      question: "What data is required for AI implementation?",
      answer: "We typically work with your existing customer data, sales history, website analytics, and product information. The more quality data available, the better our AI models perform. We can also help you set up data collection systems if needed."
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer: "Implementation time varies depending on the complexity of the solution. Simple integrations can be completed in 2-4 weeks, while comprehensive AI systems may take 6-12 weeks. We provide detailed timelines during our initial consultation."
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
  { name: "PINKTOWN", img: "/images/customers/pinktownusa.png" },
  { name: "SIMPL", img: "/images/customers/simpl.png" },
  { name: "DIAMONDRENSU", img: "/images/customers/diamondrensu.png" },
  { name: "GOSHAPEI", img: "/images/customers/gosharpei.png" },
  { name: "LEMARAIS", img: "/images/customers/lemaris.png" },
  { name: "PIRINHILL", img: "/images/customers/pirinhill.png" },
  { name: "WHEELIOSPIN", img: "/images/customers/WheelioSpin.png" },
  { name: "SRFACE", img: "/images/customers/srface.png" },
  { name: "PLUMDIAMONDS", img: "/images/customers/plumdiamonds.png" },
  { name: "INDOERA", img: "/images/customers/indoera.png" },
];

export default function AIMLPage() {
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
            {/* Badge with AI indicator */}
            <div
              className="inline-flex items-center mb-8 relative overflow-hidden"
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(13, 13, 13, 0.4)',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '12px 16px',
                gap: '8px',
                height: 'auto',
                width: 'auto',
                placeContent: 'center',
                alignItems: 'center',
                flexFlow: 'row',
                marginTop: '40px'
              }}
            >
              <div className="w-2 h-2 bg-[#4B6F93] rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-extralight">
                AI-Powered E-commerce Solutions
              </span>
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
              Transform your business with{' '}
              <span className="text-[#4B6F93] italic font-bold">AI & Machine Learning</span>
              <br />
              Intelligent solutions for the future of e-commerce.
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
                Leverage the power of artificial intelligence to predict customer behavior,{' '}
                <br className="hidden md:block" />
                optimize operations, and drive unprecedented growth in your e-commerce business.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                size="sm"
                className="bg-[#4B6F93] hover:bg-[#5A87E4] text-white px-6 py-2 text-sm rounded-lg transition-colors duration-200 font-medium"
              >
                Explore AI Solutions 👉🏻
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-8 text-white border-gray-600 py-3 px-4 flex-nowrap rounded-[12px] text-[12px]">
              Our AI Services
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Intelligent Solutions for Every Need</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              From predictive analytics to automated customer service, our AI solutions are designed to{' '}
              <br />
              transform your e-commerce business and drive measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Predictive Analytics",
                description: "Forecast customer behavior, sales trends, and inventory needs with advanced machine learning algorithms.",
                color: "from-[#162b5c] via-[#0b0e1a] to-black",
                borderColor: "border-blue-400/40"
              },
              {
                icon: Target,
                title: "Personalized Recommendations",
                description: "Boost conversions with AI-powered product recommendations tailored to individual customer preferences.",
                color: "from-[#5c162b] via-[#1a0b0e] to-black",
                borderColor: "border-red-400/40"
              },
              {
                icon: Zap,
                title: "Automated Marketing",
                description: "Optimize campaigns in real-time with intelligent automation that adapts to customer responses.",
                color: "from-[#2a5c16] via-[#0e1a0b] to-black",
                borderColor: "border-green-400/40"
              },
              {
                icon: Users,
                title: "Smart Customer Service",
                description: "Provide 24/7 support with intelligent chatbots that understand and resolve customer queries instantly.",
                color: "from-[#5c2a16] via-[#1a0e0b] to-black",
                borderColor: "border-orange-400/40"
              },
              {
                icon: BarChart3,
                title: "Inventory Optimization",
                description: "Maintain perfect stock levels with AI-driven demand forecasting and automated reordering.",
                color: "from-[#165c5c] via-[#0b1a1a] to-black",
                borderColor: "border-cyan-400/40"
              },
              {
                icon: TrendingUp,
                title: "Dynamic Pricing",
                description: "Maximize profits with intelligent pricing strategies that adapt to market conditions and demand.",
                color: "from-[#5c165c] via-[#1a0b1a] to-black",
                borderColor: "border-purple-400/40"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-gradient-to-br ${service.color} border ${service.borderColor} p-8 h-full shadow-3xl transition-transform duration-300 hover:scale-105 group`}>
                  <service.icon className="w-12 h-12 text-[#4B6F93] mb-6 group-hover:text-[#5A87E4] transition-colors" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-8 text-white border-gray-600 py-3 px-4 flex-nowrap rounded-[12px] text-[12px]">
              Why Choose AI?
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">The Future of E-commerce is Here</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover how AI can revolutionize your business operations and customer experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Increased Revenue",
                description: "Boost sales by 25-40% with personalized experiences and optimized pricing",
                metric: "25-40%"
              },
              {
                icon: Clock,
                title: "24/7 Operations",
                description: "Automate processes to run your business around the clock",
                metric: "24/7"
              },
              {
                icon: Target,
                title: "Higher Conversions",
                description: "Improve conversion rates with intelligent product recommendations",
                metric: "3-5x"
              },
              {
                icon: Users,
                title: "Customer Satisfaction",
                description: "Enhance customer experience with instant, intelligent support",
                metric: "95%"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-6 text-center h-full hover:border-[#4B6F93]/50 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-[#4B6F93] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-[#4B6F93] mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-8 text-white border-gray-600 py-3 px-4 flex-nowrap rounded-[12px] text-[12px]">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">How We Implement AI</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our proven methodology ensures successful AI implementation that delivers immediate value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {[
              {
                number: "1.",
                title: "Data Analysis",
                icon: "/images/info/Analysis.gif",
                description: "We analyze your existing data to understand your business patterns and identify AI opportunities."
              },
              {
                number: "2.",
                title: "AI Strategy",
                icon: "/images/info/Marketing.gif",
                description: "Develop a comprehensive AI strategy tailored to your specific business goals and challenges."
              },
              {
                number: "3.",
                title: "Implementation",
                icon: "/images/info/Money.gif",
                description: "Deploy AI solutions with minimal disruption to your existing operations and workflows."
              }
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
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-8 text-white border-gray-600 py-3 px-4 flex-nowrap rounded-[12px] text-[12px]">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">AI Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              See how our AI solutions have transformed businesses and driven exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: "Fashion Retailer",
                result: "35% increase in conversion rate",
                description: "Implemented personalized product recommendations and dynamic pricing, resulting in a 35% boost in conversion rates and 28% increase in average order value.",
                metrics: ["35% CR increase", "28% AOV boost"]
              },
              {
                company: "Electronics Store",
                result: "40% reduction in customer service costs",
                description: "Deployed intelligent chatbots and automated customer service, reducing support costs by 40% while improving customer satisfaction scores.",
                metrics: ["40% cost reduction", "95% satisfaction"]
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-[#162b5c] via-[#0b0e1a] to-black border border-blue-400/40 p-8 h-full shadow-3xl">
                  <h3 className="text-2xl font-semibold text-white mb-2">{story.company}</h3>
                  <div className="text-[#4B6F93] text-xl font-bold mb-4">{story.result}</div>
                  <p className="text-gray-300 leading-relaxed mb-6">{story.description}</p>
                  <div className="flex gap-3">
                    {story.metrics.map((metric, i) => (
                      <span key={i} className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">Our AI Partners</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We work with leading AI and machine learning platforms to deliver{' '}
              <br />
              cutting-edge solutions for your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-light tracking-wider hover:opacity-100 transition-opacity duration-300"
              >
                {partner.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              AI & Machine Learning
              <span className="text-[#4B6F93] italic"> Q&A</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about implementing AI in your e-commerce business
            </p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

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
              Ready to transform your business
              <br />
              with AI?
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
                  href="https://cal.com/showmine"
                  target="_blank"
                >
                  Start AI Journey 👉🏻
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