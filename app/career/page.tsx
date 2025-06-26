"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Clock, Users } from "lucide-react"

export default function CareerPage() {
  const openPositions = [
    {
      title: "Senior E-commerce Developer",
      location: "Remote / Germany",
      type: "Full-time",
      department: "Development",
      description: "Join our development team to build cutting-edge e-commerce solutions using modern technologies.",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Germany",
      type: "Full-time",
      department: "Marketing",
      description: "Drive growth through innovative digital marketing strategies and campaigns.",
    },
    {
      title: "E-commerce Consultant",
      location: "Remote",
      type: "Full-time",
      department: "Consulting",
      description: "Help clients optimize their e-commerce operations and achieve sustainable growth.",
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
              Career Opportunities
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
              Join the
              <br />
              <span className="text-blue-400 italic">Showmine</span> Team
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Be part of a dynamic team that's shaping the future of e-commerce.
              <br />
              We're looking for passionate individuals who want to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">Why work with us?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Great Team",
                description: "Work with almost 20 passionate professionals who are experts in their fields.",
              },
              {
                icon: Clock,
                title: "Flexible Work",
                description: "Enjoy flexible working hours and remote work opportunities.",
              },
              {
                icon: MapPin,
                title: "Growth Opportunities",
                description: "Continuous learning and career development in a fast-growing company.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-8 text-center h-full">
                  <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">Open Positions</h2>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-8 hover:border-blue-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-semibold">{position.title}</h3>
                        <Badge variant="outline" className="text-blue-400 border-blue-400">
                          {position.department}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-300">{position.description}</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
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
