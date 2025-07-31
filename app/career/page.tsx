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
      <section className="relative overflow-hidden bg-black text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium bg-white/10 text-white border-white/20">
                Your Career, Your Future
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Shape the Future of <span className="text-blue-400">E-commerce</span> With Us
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                At Showmine, we're not just building an e-commerce platform – we're creating experiences that transform businesses. Join our team of passionate innovators who are redefining what's possible in digital commerce. Your ideas, your energy, and your unique perspective are exactly what we need to drive the next wave of e-commerce innovation.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-300">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-base font-medium rounded-lg transition-all duration-300">
                    Learn About Us
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Image Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-blue-500 to-blue-700"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/30">
                  <Users className="h-16 w-16" />
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-purple-500 to-pink-600"
                whileHover={{ y: -8, transition: { duration: 0.3, delay: 0.1 } }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/30">
                  <Users className="h-16 w-16" />
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-green-500 to-teal-600"
                whileHover={{ y: -8, transition: { duration: 0.3, delay: 0.1 } }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/30">
                  <Users className="h-16 w-16" />
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-amber-500 to-orange-600"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/30">
                  <Users className="h-16 w-16" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex justify-center items-center bg-black w-full overflow-hidden py-[100px] px-0">
        <div className="flex flex-col items-center justify-center flex-1 max-w-[1000px] gap-[100px] w-full px-6">
          <motion.div
            className="flex flex-wrap justify-center items-center w-full gap-[80px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Left Column - Image */}
            <motion.div
              className="relative flex flex-col justify-center items-center rounded-[20px] overflow-hidden flex-1 min-w-[300px] aspect-[1.2/1] max-h-[600px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center w-full h-full">
                <Users className="h-32 w-32 text-white/20" />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="flex flex-col items-start justify-start flex-1 min-w-[300px] gap-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Who We Are
              </h2>
              <div className="h-1 w-20 bg-blue-400"></div>
              <p className="text-lg md:text-xl text-gray-300">
                At Showmine, we're revolutionizing the e-commerce landscape through innovative solutions and cutting-edge technology. Our mission is to empower businesses to thrive in the digital marketplace by providing seamless, scalable, and intelligent e-commerce experiences.
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                We believe in the power of collaboration, creativity, and continuous innovation. Our team of passionate experts is dedicated to pushing boundaries and setting new standards in the industry.
              </p>
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-6 text-base font-medium rounded-lg transition-all duration-300"
                >
                  Learn More About Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    
        

      {/* Jobs Section */ }
  <section className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Current Openings
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Explore our available positions and find where you fit in our growing team.
        </p>
      </motion.div>
    </div>
  </section>

  {/* Why Join Us Section */ }
  <section className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Showmine?</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We're building more than a company – we're building a community of innovators, creators, and problem-solvers.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Users,
            title: "Exceptional Team",
            description: "Collaborate with industry experts who are as passionate about e-commerce as you are. We believe in learning from each other every day.",
          },
          {
            icon: Clock,
            title: "Work-Life Harmony",
            description: "Flexible schedules and remote options because we trust you to do your best work, wherever you are.",
          },
          {
            icon: MapPin,
            title: "Career Growth",
            description: "We invest in your development with training, mentorship, and opportunities to take on new challenges.",
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

  {/* Team Testimonials */ }
  <section className="py-20 bg-gradient-to-b from-black to-gray-900">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Hear From Our Team</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Don't just take our word for it – here's what our team members say about working at Showmine.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            quote: "Working at Showmine has been a game-changer for my career. The level of innovation and collaboration here is unmatched.",
            author: "Alex M.",
            role: "Senior Developer"
          },
          {
            quote: "What I love most is the trust and autonomy I'm given to make an impact. Every day brings new challenges and learning opportunities.",
            author: "Sarah K.",
            role: "Product Manager"
          },
          {
            quote: "The culture here is incredible. We work hard, but we also know how to have fun and support each other's growth.",
            author: "Jamal R.",
            role: "UX Designer"
          }
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border-gray-800 p-8 h-full flex flex-col">
              <div className="text-blue-400 text-5xl mb-4">"</div>
              <p className="text-gray-300 mb-6 flex-grow">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Open Positions */ }
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
    </div >
  )
}
