"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useInView, useTransform, AnimatePresence, useAnimate } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Brain, Bot, BarChart3, Eye, Sparkles, Zap, TrendingUp, Target, DollarSign, Layers, Cpu } from "lucide-react"
import Script from "next/script"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

// Text Generate Effect Component
const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (scope.current) {
            observer.observe(scope.current);
        }

        return () => observer.disconnect();
    }, [scope]);

    useEffect(() => {
        if (isVisible && scope.current) {
            const spans = scope.current.querySelectorAll('span');

            spans.forEach((span: any) => {
                span.style.opacity = '0';
                if (filter) span.style.filter = 'blur(8px)';
            });

            spans.forEach((span: any, i: any) => {
                setTimeout(() => {
                    span.animate(
                        [
                            { opacity: 0, filter: filter ? 'blur(8px)' : 'none' },
                            { opacity: 1, filter: 'blur(0px)' }
                        ],
                        {
                            duration: duration * 1000,
                            fill: 'forwards',
                            easing: 'ease-out'
                        }
                    );
                }, i * 80);
            });
        }
    }, [isVisible, duration, filter]);

    return (
        <div ref={scope} className={cn("font-light", className)}>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] leading-tight">
                {wordsArray.map((word, idx) => (
                    <span
                        key={`${word}-${idx}`}
                        className="inline-block opacity-0 mr-2"
                        style={{
                            filter: filter ? 'blur(8px)' : 'none',
                            transition: `opacity 0.5s ease-out, filter 0.5s ease-out`
                        }}
                    >
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default function AIConsultingPage() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

    const features = [
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Machine Learning Models",
            description: "Custom ML models for predictive analytics, recommendation systems, and intelligent automation.",
        },
        {
            icon: <Bot className="w-6 h-6" />,
            title: "Natural Language Processing",
            description: "Advanced NLP solutions for chatbots, sentiment analysis, and text processing applications.",
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Computer Vision",
            description: "Image recognition, object detection, and visual analysis solutions for various industries.",
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Data Analytics & Insights",
            description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "AI Strategy & Implementation",
            description: "Comprehensive AI strategy development and seamless implementation across your organization.",
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Performance Optimization",
            description: "Continuous monitoring and optimization of AI models for maximum efficiency and accuracy.",
        },
    ]

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div className="min-h-screen bg-black text-white">
            <Script id="ld-breadcrumb-ai-consulting" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.showmine.io/' },
                        { '@type': 'ListItem', position: 2, name: 'AI Consulting', item: 'https://www.showmine.io/ai-consulting' }
                    ]
                })}
            </Script>
            <Navigation />



            <section className="relative min-h-[70vh] flex items-center justify-center bg-white pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <motion.div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                ai consulting
                                <br />
                                <span className="text-blue-600">solutions</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                                Elevate your business with our data-driven AI solutions. From machine learning to natural language
                                processing, we help you harness the power of artificial intelligence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                                    Get Started
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
                                >
                                    View Case Studies
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div className="relative order-first lg:order-last">
                            <div className="relative">
                                <div className="w-full h-80 sm:h-96 lg:h-[400px] bg-gradient-to-br from-purple-100 to-blue-200 rounded-2xl lg:rounded-3xl overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="grid grid-cols-2 gap-4 p-8">
                                            <div className="bg-white rounded-lg p-4 shadow-lg">
                                                <Brain className="w-8 h-8 text-purple-600 mb-2" />
                                                <div className="text-sm font-semibold">Machine Learning</div>
                                                <div className="text-xs text-gray-500">Predictive Models</div>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 shadow-lg">
                                                <Bot className="w-8 h-8 text-blue-600 mb-2" />
                                                <div className="text-sm font-semibold">Chatbots</div>
                                                <div className="text-xs text-gray-500">NLP Powered</div>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 shadow-lg">
                                                <Eye className="w-8 h-8 text-green-600 mb-2" />
                                                <div className="text-sm font-semibold">Computer Vision</div>
                                                <div className="text-xs text-gray-500">Image Recognition</div>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 shadow-lg">
                                                <BarChart3 className="w-8 h-8 text-orange-600 mb-2" />
                                                <div className="text-sm font-semibold">Analytics</div>
                                                <div className="text-xs text-gray-500">Data Insights</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.div className="absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 bg-white p-3 sm:p-4 rounded-xl shadow-lg border z-20">
                                <div className="text-2xl sm:text-3xl font-bold text-purple-600">85%</div>
                                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                                    accuracy
                                    <br />
                                    improvement
                                </div>
                            </motion.div>

                            <motion.div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 -left-4 sm:-left-6 lg:-left-8 bg-white p-3 sm:p-4 rounded-xl shadow-lg border z-20">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-600">40%</div>
                                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                                    process
                                    <br />
                                    automation
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section ref={ref} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">comprehensive ai consulting services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From strategy to implementation, we provide end-to-end AI solutions to transform your business operations
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {features.map((feature, index) => (
                            <motion.div key={index}>
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 sm:p-8">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

