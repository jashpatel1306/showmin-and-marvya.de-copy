"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { partners } from "@/data/partners"
import { ArrowRight, CheckCircle, Clock, Users, Plus, TrendingUp, Settings, Database, Shield, BarChart3, Zap, Target } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Script from "next/script"

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What management systems do you offer?",
      answer: "We offer comprehensive management systems including ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), inventory management, order processing, financial management, and business intelligence dashboards. All systems are specifically designed for e-commerce businesses to streamline operations and improve efficiency."
    },
    {
      question: "How can a management system improve my business?",
      answer: "Management systems can transform your business by centralizing data, automating processes, improving decision-making, reducing errors, increasing productivity, and providing real-time insights. This leads to better resource allocation, improved customer service, and increased profitability."
    },
    {
      question: "Do you integrate management systems with Shopify?",
      answer: "Yes, we seamlessly integrate management systems with Shopify and other e-commerce platforms. Our systems sync data in real-time, ensuring inventory, orders, customer information, and financial data are always up-to-date across all platforms."
    },
    {
      question: "How long does it take to implement a management system?",
      answer: "Implementation time varies based on system complexity and business size. Basic systems can be deployed in 4-6 weeks, while comprehensive ERP solutions may take 8-12 weeks. We provide detailed timelines and milestones during our initial consultation."
    },
    {
      question: "What support do you provide after implementation?",
      answer: "We provide comprehensive post-implementation support including training, documentation, technical support, system updates, and ongoing optimization. Our team ensures you get maximum value from your management system investment."
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

export default function ManagementSystemPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Script id="ld-breadcrumb-mgmt" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.showmine.io/' },
            { '@type': 'ListItem', position: 2, name: 'Management System', item: 'https://www.showmine.io/management-system' }
          ]
        })}
      </Script>
      <Script id="ld-service-mgmt" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'E-commerce Management Systems',
          serviceType: 'ERP, CRM, Inventory, BI',
          provider: { '@type': 'Organization', name: 'SHOWMINE', url: 'https://www.showmine.io' },
          areaServed: 'Worldwide',
          url: 'https://www.showmine.io/management-system',
          description: 'Enterprise-grade management systems for e-commerce: ERP, CRM, inventory, order processing, financials, and business intelligence.'
        })}
      </Script>
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
            {/* Badge with Management indicator */}
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
                Enterprise Management Solutions
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
              Streamline your operations with{' '}
              <span className="text-[#4B6F93] italic font-bold">Management Systems</span>
              <br />
              Complete control over your business processes.
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
                From inventory management to customer relationships, our comprehensive{' '}
                <br className="hidden md:block" />
                management systems give you complete visibility and control over your business.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                size="sm"
                className="bg-[#4B6F93] hover:bg-[#5A87E4] text-white px-6 py-2 text-sm rounded-lg transition-colors duration-200 font-medium"
              >
                Explore Solutions 👉🏻
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Management Systems Grid Section */}
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
              Our Management Systems
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Complete Business Management</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive management systems designed to streamline every aspect of{' '}
              <br />
              your e-commerce business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "ERP System",
                description: "Complete enterprise resource planning with integrated modules for finance, operations, and supply chain management.",
                color: "from-[#162b5c] via-[#0b0e1a] to-black",
                borderColor: "border-blue-400/40"
              },
              {
                icon: Users,
                title: "CRM System",
                description: "Customer relationship management to track interactions, manage leads, and improve customer satisfaction.",
                color: "from-[#5c162b] via-[#1a0b0e] to-black",
                borderColor: "border-red-400/40"
              },
              {
                icon: BarChart3,
                title: "Inventory Management",
                description: "Real-time inventory tracking, automated reordering, and demand forecasting for optimal stock levels.",
                color: "from-[#2a5c16] via-[#0e1a0b] to-black",
                borderColor: "border-green-400/40"
              },
              {
                icon: Settings,
                title: "Order Processing",
                description: "Streamlined order management from receipt to fulfillment with automated workflows and tracking.",
                color: "from-[#5c2a16] via-[#1a0e0b] to-black",
                borderColor: "border-orange-400/40"
              },
              {
                icon: Shield,
                title: "Financial Management",
                description: "Comprehensive financial tracking, reporting, and analysis for better business decision-making.",
                color: "from-[#165c5c] via-[#0b1a1a] to-black",
                borderColor: "border-cyan-400/40"
              },
              {
                icon: TrendingUp,
                title: "Business Intelligence",
                description: "Advanced analytics and reporting dashboards to gain insights and drive strategic decisions.",
                color: "from-[#5c165c] via-[#1a0b1a] to-black",
                borderColor: "border-purple-400/40"
              }
            ].map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-gradient-to-br ${system.color} border ${system.borderColor} p-8 h-full shadow-3xl transition-transform duration-300 hover:scale-105 group`}>
                  <system.icon className="w-12 h-12 text-[#4B6F93] mb-6 group-hover:text-[#5A87E4] transition-colors" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{system.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{system.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
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
              Why Choose Our Systems?
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Transform Your Business Operations</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover how our management systems can revolutionize your business efficiency and productivity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Increased Efficiency",
                description: "Automate processes and reduce manual work by up to 70%",
                metric: "70%"
              },
              {
                icon: Clock,
                title: "Real-time Data",
                description: "Access critical business information instantly from anywhere",
                metric: "24/7"
              },
              {
                icon: Target,
                title: "Better Decisions",
                description: "Make informed decisions with comprehensive analytics and reporting",
                metric: "3x faster"
              },
              {
                icon: Shield,
                title: "Data Security",
                description: "Enterprise-grade security to protect your business data",
                metric: "99.9%"
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

      {/* Implementation Process */}
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">How We Implement Management Systems</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our proven methodology ensures successful system implementation with minimal disruption.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {[
              {
                number: "1.",
                title: "Assessment",
                icon: "/images/info/Analysis.gif",
                description: "We analyze your current business processes and identify areas for improvement and automation."
              },
              {
                number: "2.",
                title: "Customization",
                icon: "/images/info/Marketing.gif",
                description: "Customize the management system to match your specific business requirements and workflows."
              },
              {
                number: "3.",
                title: "Deployment",
                icon: "/images/info/Money.gif",
                description: "Deploy the system with comprehensive training and ongoing support for your team."
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

      {/* Features Showcase */}
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
              System Features
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Powerful Features for Modern Business</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Advanced features designed to handle the complexities of modern e-commerce operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Multi-Channel Integration",
                features: [
                  "Shopify, WooCommerce, Magento integration",
                  "Marketplace synchronization (Amazon, eBay)",
                  "Social media sales tracking",
                  "Unified customer database"
                ]
              },
              {
                title: "Advanced Analytics",
                features: [
                  "Real-time performance dashboards",
                  "Predictive analytics and forecasting",
                  "Custom report generation",
                  "KPI tracking and alerts"
                ]
              },
              {
                title: "Automation & Workflows",
                features: [
                  "Automated order processing",
                  "Inventory reorder triggers",
                  "Customer communication workflows",
                  "Financial reconciliation"
                ]
              },
              {
                title: "Security & Compliance",
                features: [
                  "Enterprise-grade security",
                  "GDPR compliance tools",
                  "Data backup and recovery",
                  "Role-based access control"
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-[#162b5c] via-[#0b0e1a] to-black border border-blue-400/40 p-8 h-full shadow-3xl">
                  <h3 className="text-2xl font-semibold text-white mb-6">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#4B6F93] flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Management System Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              See how our management systems have transformed businesses and streamlined operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: "Multi-Channel Retailer",
                result: "60% reduction in processing time",
                description: "Implemented comprehensive ERP system that unified operations across 5 sales channels, reducing order processing time by 60% and improving inventory accuracy to 99.5%.",
                metrics: ["60% faster processing", "99.5% accuracy"]
              },
              {
                company: "Growing E-commerce Brand",
                result: "40% increase in operational efficiency",
                description: "Deployed integrated CRM and inventory management system, resulting in 40% improvement in operational efficiency and 25% reduction in operational costs.",
                metrics: ["40% efficiency gain", "25% cost reduction"]
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 md:mb-8 px-4">Our Technology Partners</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              We work with leading technology providers to deliver{' '}
              <br />
              robust and scalable management solutions.
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
              Management Systems
              <span className="text-[#4B6F93] italic"> Q&A</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about implementing management systems in your business
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
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>
    </div>
  )
} 