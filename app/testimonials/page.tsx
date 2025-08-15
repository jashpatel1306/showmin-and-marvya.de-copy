"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    text: "We did our Black Friday campaign with Showmine for the first time, and the success far exceeded our expectations. A super success-oriented team with a lot of drive!",
    author: "Michaela & Thomas Zinser",
    company: "Histaminikus GmbH",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
    category: "E-commerce Strategy"
  },
  {
    id: 2,
    text: "Great team! Great people! Great work! I highly recommend Showmine's team for anyone looking to take their online business to the next level.",
    author: "Marc Fassbender",
    company: "Fassbender print",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Print Solutions"
  },
  {
    id: 3,
    text: "Showmine team is very customer-focused, fast, and reliable. We had some special requests regarding factory pickup, and they went above and beyond to find solutions.",
    author: "Carolin Ackermann",
    company: "SEAWATER Cubes GmbH",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Customer Support"
  },
  {
    id: 4,
    text: "Thanks to the outstanding network and the great motivation of the entire Showmine team, you can achieve your e-commerce goals quickly and efficiently.",
    author: "Sarah Johnson",
    company: "E-commerce Business",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Business Growth"
  }
]

const categories = ["All", "E-commerce Strategy", "Print Solutions", "Customer Support", "Business Growth"]

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredTestimonials = activeCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-blue-300 border-blue-400/50 bg-blue-900/20">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Trusted by 100+ Businesses
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            What Our Clients Say
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Discover how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-400/30 mb-4" />
                  <p className="text-gray-300 mb-6 text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      <span className="text-blue-400 text-xs">{testimonial.category}</span>
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
