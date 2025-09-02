"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel } from "@/components/ui/carousel"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { ArrowRight, MapPin, Clock, Users, Sparkles, Users2, Brain, Laugh, Quote, ChevronDown, ArrowLeft } from "lucide-react"
import { JobApplicationForm } from "@/components/career/job-application-form"

type Position = {
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  info?: string;
};

interface PositionAccordionProps {
  position: Position;
  index: number;
  onApply: () => void;
}

function PositionAccordion({ position, index, onApply }: PositionAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-gray-800 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 hover:bg-gray-900/50 transition-colors focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`position-content-${index}`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-white">{position.title}</h3>
              <span className="px-2.5 py-0.5 bg-blue-900/30 text-blue-400 text-xs rounded-full">
                {position.department}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
              <span>{position.location}</span>
              <span className="text-green-500">•</span>
              <span>{position.type}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-[#4B6F93] text-white hover:bg-[rgb(75, 111, 147)] rounded-xl shadow-lg hover:shadow-xl hidden 
              transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-0.5
                   md:inline-flex border border-blue-400/20"
              onClick={(e) => {
                e.stopPropagation()
                onApply()
              }}
            >
              Apply Now
              <span className="ml-1">👉🏻</span>
            </Button>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen && "transform rotate-180"}`}
              aria-hidden="true"
            />
          </div>
        </div>
      </button>

      <motion.div
        id={`position-content-${index}`}
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 border-t border-gray-800">
          <div className="prose prose-invert max-w-none text-gray-300">
            <p className="mb-4">{position.description}</p>
            {position.responsibilities && position.responsibilities.length > 0 && (
              <>
                <h4 className="text-white font-medium mb-2">Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  {position.responsibilities.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {position.requirements && position.requirements.length > 0 && (
              <>
                <h4 className="text-white font-medium mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  {position.requirements.map((req: string, i: number) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </>
            )}
            {position.info && (
              <p className="text-gray-400 mb-4">{position.info}</p>
            )}
            <Button
              onClick={onApply}
              className="md:hidden bg-[#4B6F93] mt-2"
            >
              Apply for this position
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CareerPage() {
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null)

  const openPositions: Position[] = [
    {
      title: "FRONT-END DEVELOPER",
      location: "Remote / Hybrid",
      type: "Full-time",
      department: "Development",
      description: "We are seeking a skilled and detail-oriented Front-End Shopify Developer to join our team. As a Front-End Shopify Developer, you will be responsible for creating visually appealing and highly functional Shopify-based websites. Your expertise in front-end development, particularly with Shopify, will play a crucial role in delivering exceptional user experiences. If you are passionate about e-commerce development and have a strong proficiency in Shopify, we would love to hear from you.",
      responsibilities: [
        "Collaborate with the design team to implement and translate UI/UX designs into pixel-perfect Shopify themes.",
        "Customize and optimize Shopify themes using HTML, CSS, Tailwind CSS, Alpine.js, and JavaScript to enhance functionality and user experience.",
        "Ensure cross-browser and cross-device compatibility.",
        "Ensure cross-browser and cross-device compatibility of Shopify websites.",
        "Conduct thorough testing and debugging to identify and resolve any front-end issues or bugs.",
        "Integrate third-party applications and plugins to extend Shopify's functionality.",
        "Collaborate with the back-end development team to ensure seamless integration of front-end and back-end components.",
        "Stay up to date with the latest trends and best practices in front-end development and e-commerce."
      ],
      requirements: [
        "Strong proficiency in front-end development, including HTML, CSS, Alpine.js, Tailwind CSS, JavaScript, and responsive design.",
        "Proven experience in developing Shopify-based websites.",
        "Solid understanding of Shopify liquid templating language.",
        "Familiarity with Shopify's theme customization options and best practices.",
        "Experience with version control systems, such as Git.",
        "Knowledge of front-end frameworks and libraries (e.g., React, Vue.js, Tailwind CSS, Alpine.js) is a plus.",
        "Attention to detail and ability to deliver high-quality work within deadlines.",
        "Excellent problem-solving and debugging skills.",
        "Strong communication and collaboration skills."
      ],
      info: "If you are a passionate Front-End Shopify Developer with a keen eye for design and a desire to create exceptional e-commerce experiences, we would love to have you on our team. Please submit your resume, portfolio, and any relevant work samples for consideration."
    },
    {
      title: "JUNIOR UI/UX DESIGNER",
      location: "Remote / Hybrid",
      type: "Full-time",
      department: "Design",
      description: "We are seeking a motivated and creative Junior UX/UI Designer to join our team. As a Junior UX/UI Designer, you will collaborate with our design and development teams to create intuitive and visually appealing user experiences for our Shopify-based projects. Proficiency in Shopify and Figma design tools is essential for this role. This is an excellent opportunity for a passionate designer to grow their skills and contribute to meaningful projects.",
      responsibilities: [
        "Collaborate with the design and development teams to create user-centric designs for Shopify-based websites and applications.",
        "Assist in creating wireframes, prototypes, and user flows to support the design process.",
        "Design visually appealing interfaces that align with brand guidelines and best UX/UI practices.",
        "Conduct user research and incorporate feedback to iterate on designs.",
        "Collaborate with developers to ensure designs are implemented accurately and effectively.",
        "Stay up to date with industry trends and emerging UX/UI design practices."
      ],
      requirements: [
        "Solid understanding of UX/UI design principles and best practices.",
        "Proficiency in Shopify and Figma design tools.",
        "Strong portfolio demonstrating previous design work and projects.",
        "Knowledge of HTML, CSS, and JavaScript is a plus.",
        "Excellent communication and collaboration skills.",
        "Ability to work in a fast-paced, deadline-driven environment.",
        "Attention to detail and ability to multitask."
      ],
      info: "If you are passionate about UX/UI design, have a strong foundation in Shopify and Figma, and are excited about joining a dynamic team, we would love to hear from you. Please submit your resume, portfolio, and any relevant design samples for consideration."
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
    <>
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
                      <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
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

            <div className="max-w-6xl mx-auto">
              <InfiniteMovingCards
                className="mt-4"
                speed="normal"
                pauseOnHover
                items={[
                  {
                    name: "Shrey S",
                    title: "Animator & Video editor",
                    quote: "Showmine is more than just a workplace. It's a place where professional work and fun go hand in hand, where you feel not just like an employee, but like part of a big, dynamic family.",
                  },
                  {
                    name: "Panthil M",
                    title: "Full-stack developer",
                    quote: "The shared energy within the team to achieve great things and the fact that everyone gives their best every day is extremely inspiring.",
                  },
                  {
                    name: "Rutvik D",
                    title: "Shopify Sr Developer",
                    quote: "To be able to grow continuously, I rely on a strong team that supports me and provides me with feedback so that I can continue to expand my creative vision. Through effective communication, I have continuously developed since joining Showmine.",
                  },
                  {
                    name: "Fenal R",
                    title: "Quality assurance analyst",
                    quote: "The collaborative environment at Showmine has helped me grow both professionally and personally. The team's dedication to creating outstanding user experiences is truly inspiring.",
                  },
                  {
                    name: "Sarah",
                    title: "Marketing Specialist",
                    quote: "Working at Showmine has been an incredible journey. The company culture encourages creativity and innovation, and I love being part of a team that values each member's contribution.",
                  },
                ]}
              />
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
        <section id="open-positions" className="py-20 bg-black">
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

            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <PositionAccordion
                  key={index}
                  position={position}
                  index={index}
                  onApply={() => setSelectedPosition(position)}
                />
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Job Application Form Modal */}
      {selectedPosition && (
        <JobApplicationForm
          position={selectedPosition?.title || ''}
          onClose={() => setSelectedPosition(null)}
        />
      )}
    </>
  )
}
