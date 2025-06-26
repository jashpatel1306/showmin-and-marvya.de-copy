"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsPage() {
  const testimonials = [
    {
      text: "We did our Black Friday campaign with Showmine for the first time, and the success far exceeded our expectations. A super success-oriented team with a lot of drive! Showmine always has great ideas and follows through to the end. We have used her services again and again since then and are consistently highly satisfied! Definitely recommended.",
      author: "Michaela & Thomas Zinser",
      company: "Histaminikus GmbH",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "Great team! Great people! Great work! I highly recommend Showmine's team!",
      author: "Marc Fassbender",
      company: "Fassbender print",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "Showmine team is very customer-focused, fast, and reliable. We had some special requests regarding factory pickup, etc. — even when a solution wasn't always available, the team did everything they could to find one. We feel well looked after all around, and all our requests are always processed and implemented very quickly. We're very much looking forward to our continued collaboration. :)",
      author: "Carolin Ackermann",
      company: "SEAWATER Cubes GmbH",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "Thanks to the outstanding network and the great motivation of the entire Showmine team, you can achieve your e-commerce goals quickly and efficiently.",
      author: "Anonymous Customer",
      company: "E-commerce Business",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

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
              Customer Testimonials
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
              What our customers
              <br />
              <span className="text-blue-400 italic">say about us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Real feedback from real customers who have experienced
              <br />
              the Showmine difference in their e-commerce journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-8 h-full">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                      <p className="text-gray-400">{testimonial.company}</p>
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
