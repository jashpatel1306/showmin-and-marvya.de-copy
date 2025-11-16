"use client"

import { motion, useInView } from "framer-motion"
import { Navigation } from "@/components/navigation"
import Script from "next/script"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Counter Animation Component
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            let startTime: number
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
                setCount(Math.floor(progress * end))
                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }
    }, [isInView, end, duration])

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    )
}

export default function AboutUsPage() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div className="min-h-screen bg-black text-white">
            <Script id="ld-breadcrumb-about-us" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.showmine.io/' },
                        { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.showmine.io/about-us' }
                    ]
                })}
            </Script>
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-gray-900">
                        {/* Team photo background - using a placeholder that represents the team photo */}
                        <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-600 opacity-80"></div>
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        tech enthusiasts with a passion for
                        <br />
                        <span className="text-white">problem solving</span>
                    </motion.h1>
                </div>
            </section>

            <section ref={ref} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-1 text-center lg:text-left"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">our team</h2>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                We are tech enthusiasts dedicated to turning complex challenges into streamlined solutions
                            </p>
                        </motion.div>

                        {/* Right Content - Founders */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
                        >
                            {/* Founders with responsive sizing */}
                            <div className="text-center">
                                <div className="w-64 sm:w-72 lg:w-80 h-80 sm:h-88 lg:h-96 bg-blue-100 rounded-2xl lg:rounded-3xl mx-auto mb-4 lg:mb-6 overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300"></div>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Jash Patel</h3>
                                <p className="text-gray-600">Co-Founder, CEO</p>
                            </div>

                            {/* Jainish patel */}
                            <div className="text-center">
                                <div className="w-80 h-96 bg-gray-800 rounded-3xl mx-auto mb-6 overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Jainish Patel</h3>
                                <p className="text-gray-600">Co-Founder, CTO</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section ref={ref} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-3xl lg:text-4xl font-normal text-gray-900 mb-16 max-w-4xl mx-auto"
                    >
                        businesses all over the world trust devx to build their brand
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-600 mb-4">
                                <AnimatedCounter end={100} />+
                            </div>
                            <p className="text-lg sm:text-xl text-gray-700">brands served</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center"
                        >
                            <div className="text-6xl lg:text-7xl font-bold text-blue-600 mb-4">
                                <AnimatedCounter end={30} />+
                            </div>
                            <p className="text-xl text-gray-700">superstar developers</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-center"
                        >
                            <div className="text-6xl lg:text-7xl font-bold text-blue-600 mb-4">
                                <AnimatedCounter end={94} />
                            </div>
                            <p className="text-xl text-gray-700">client NPS</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section ref={ref} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold text-gray-900 mb-16"
                    >
                        core values
                    </motion.h2>

                    <div className="space-y-16">
                        {/* Problem First Approach */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-blue-600 mb-8">01. Problem First Approach</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">in-depth analysis</h4>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        We delve deep into the challenges you're facing to understand their underlying causes.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3">innovation</h4>
                                    <p className="text-gray-600">
                                        By focusing on problems, we encourage innovation, leading to breakthrough solutions.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3">tailored solutions</h4>
                                    <p className="text-gray-600">
                                        Every problem is unique; we craft customized solutions that precisely match your needs.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Customer Obsession */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-bold text-blue-600 mb-8">02. Customer Obsession</h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3">client-centric solutions</h4>
                                    <p className="text-gray-600">
                                        Your goals are our goals. We align our services to your business objectives.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3">constant communication</h4>
                                    <p className="text-gray-600">
                                        We keep you in the loop at all stages, valuing your feedback and insights.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3">exceeding expectations</h4>
                                    <p className="text-gray-600">
                                        Our obsession drives us to surpass expectations, delivering results that wow you.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* High Degree Of Ownership */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-blue-600 mb-8">03. High Degree Of Ownership</h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3">end-to-end accountability</h4>
                                    <p className="text-gray-600">
                                        We don't just provide solutions; we take full ownership of the process from inception to delivery.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3">initiative</h4>
                                    <p className="text-gray-600">
                                        Our team takes proactive steps to solve problems and seize opportunities, showing genuine care for
                                        your success.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3">reliability</h4>
                                    <p className="text-gray-600">
                                        You can count on us to deliver consistently. Our ownership mindset ensures reliability and
                                        trustworthiness.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section ref={ref} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Team Photos */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <div className="flex space-x-4 overflow-x-auto pb-4">
                            {[...Array(4)].map((_, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex-shrink-0 w-80 h-48 bg-gray-800 rounded-2xl overflow-hidden"
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                we are always on the look out for some of the smartest minds!
                            </h2>
                            <p className="text-xl text-gray-600">Apply now and we will reach out to you</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-center lg:text-right"
                        >
                            <Link href="/contact">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                                    Apply Now
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    )
}

