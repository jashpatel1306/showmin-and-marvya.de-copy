"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Clock, Users, Sparkles, Users2, Brain, Laugh, Quote } from "lucide-react"

export default function CareerPage() {
  const openPositions = [
    {
      title: "Senior E-commerce Developer",
      location: "Remote / Hybrid",
      type: "Full-time",
      department: "Development",
      description: "Join our development team to build cutting-edge e-commerce solutions using modern technologies.",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Remote / Hybrid",
      type: "Full-time",
      department: "Marketing",
      description: "Drive growth through innovative digital marketing strategies and campaigns.",
    },
    {
      title: "E-commerce Consultant",
      location: "Remote / Hybrid",
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
                  <Button className="bg-[#4B6F93] hover:bg-[#4B6F93] text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-300">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
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
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Who We Are
              </h4>
              <div className="h-1 w-20 bg-blue-400"></div>
              <p className="text-lg md:text-xl text-white">
              Our mission is to help ambitious e-commerce brands grow rapidly, breaking away from traditional methods. We partner closely with our clients, providing full support to drive their success.
              </p>
             
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core culture</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: 'Motivation',
                description: 'At our company, motivation is the key to success. We create an inspiring work environment that ignites our employees\' ambition and motivates them to give their best. Our shared vision and pursuit of expertise are the driving force behind our team, who are passionate about achieving excellence and setting new standards.',
                image: '/images/hero-bg.jpg',
                alt: 'Cityscape view under a sunny sky'
              },
              {
                title: 'Team Spirit',
                description: 'Our collaboration is characterized by a strong team spirit. We treat each other with respect, trust, and fairness. As a young team, we give everyone the opportunity to develop freely. We make our workplace a great place where people enjoy working and feel comfortable. Team spirit is very important to us.',
                image: '/placeholder.jpg',
                alt: 'Group of professionals discussing in a bright meeting room'
              },
              {
                title: 'Expertise and Specialist Knowledge',
                description: 'We rely on extensive know-how and experience in the e-commerce sector. Your future colleagues are experts in their field and use their in-depth knowledge to develop customized solutions for our customers.',
                image: '/placeholder.jpg',
                alt: 'Developer focused on multiple monitors'
              },
              {
                title: 'Fun',
                description: 'We firmly believe that a positive and joyful work atmosphere is crucial for achieving top performance. Having fun at work opens up limitless opportunities for success and personal development. We meet regularly as a team and enjoy spending time together. Team events, such as restaurant visits, company parties, or shared lunch during breaks, are important to us.',
                image: '/placeholder.jpg',
                alt: 'Smiling team chatting around a laptop'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-[#00000] rounded-xl overflow-hidden border border-black flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                    <p className="text-gray-300 flex-1">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">This is what our team says</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Direct feedback from our dedicated employees who contribute to our success every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Shrey",
                role: "Animator & Video editor",
                testimonial: "Showmine is more than just a workplace. It's a place where professional work and fun go hand in hand, where you feel not just like an employee, but like part of a big, dynamic family.",
                avatar: "/placeholder-user.jpg"
              },
              {
                name: "Panthil",
                role: "Full-stack developer",
                testimonial: "The shared energy within the team to achieve great things and the fact that everyone gives their best every day is extremely inspiring.",
                avatar: "/placeholder-user.jpg"
              },
              {
                name: "Rutvik",
                role: "Shopify Sr Developer",
                testimonial: "To be able to grow continuously, I rely on a strong team that supports me and provides me with feedback so that I can continue to expand my creative vision. Through effective communication, I have continuously developed since joining Showmine.",
                avatar: "/placeholder-user.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-8 flex flex-col transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name}'s avatar`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 flex-1">"{testimonial.testimonial}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Office Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our office</h2>
              <p className="text-lg text-gray-300 mb-8">
                We're located in the heart of Kitchener. Centrally located with good transportation connections. The highlight is the vibrant tech community and beautiful surroundings.
              </p>
              <div className="mb-8 flex flex-col lg:flex-row gap-8">
                <div>
                  <p className="font-semibold text-gray-200 mb-2">Canada:</p>
                  <p className="text-lg text-gray-300 mb-4">16 Seabrook drive,<br />Kitchener, ON N2R 1Y2</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 mb-2">India:</p>
                  <p className="text-lg text-gray-300">8-9, Mahavir shopping center,<br />near Gajara circle,<br />Katargam, Surat</p>
                </div>
              </div>
              <Button
                className="bg-[#4B6F93] hover:bg-[#4B6F93] text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-300"
                onClick={() => {
                  // Scroll to open positions
                  const element = document.getElementById('open-positions');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Apply now <span className="ml-2">👉🏻</span>
              </Button>
            </motion.div>

            {/* Right Column - Map */}
            <motion.div
              className="lg:w-1/2 w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.0174006210136!2d-80.4838406!3d43.4288547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf5e3a0d3fcc9%3A0x8d1d3b9b3b3b3b3b!2s16%20Seabrook%20Dr%2C%20Kitchener%2C%20ON%20N2R%201Y2%2C%20Canada!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Showmine Office Location"
                className="h-full w-full"
              ></iframe>
            </motion.div>
          </div>
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
