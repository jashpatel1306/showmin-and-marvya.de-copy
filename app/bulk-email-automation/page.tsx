"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Shield, LucideIcon, CheckCircle2, Users, Mail, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Script from "next/script"

interface Feature {
    icon?: string;
    IconComponent?: LucideIcon;
    title: string;
    description: string;
    color: string;
  }

const features: Feature[] = [
    {
      icon: "/bulkemail/icon-campaign.png", 
      title: "Campaign Management",
      description: "Create and launch email campaigns in minutes. Schedule sends, set up automations, and manage everything from one dashboard.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: "/bulkemail/icon-contacts.png",
      title: "Smart Contact Lists",
      description: "Organize contacts into targeted groups. Import from CSV, remove duplicates automatically, and keep your lists fresh.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "/bulkemail/icon-template.png",
      title: "Beautiful Templates",
      description: "Design professional emails with our drag-and-drop editor. Save templates and personalize with dynamic fields like {{Name}}.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "/bulkemail/icon-tracking.png",
      title: "Real-Time Analytics",
      description: "Track opens, clicks, and conversions in real-time. Get actionable insights to optimize your campaigns for better results.",
      color: "from-pink-500 to-red-500"
    },
    {
      IconComponent: Zap,
      title: "Lightning Fast Sending",
      description: "Send to thousands in seconds with our optimized delivery system. Connect multiple Gmail accounts for even higher throughput.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      IconComponent: Shield,
      title: "Enterprise Security",
      description: "Your data is encrypted and protected. Individual user accounts with secure access controls keep everything safe.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const steps = [
    {
      icon: Users,
      step: "01",
      title: "Add Your Contacts",
      description: "Import contacts from CSV files or add them manually. Organize them into targeted groups for better campaign results."
    },
    {
      icon: Mail,
      step: "02",
      title: "Design Your Email",
      description: "Choose from professional templates or create your own. Add personalization with dynamic fields like {{Name}} and {{Company}}."
    },
    {
      icon: CheckCircle2,
      step: "03",
      title: "Launch Campaign",
      description: "Schedule your campaign or send immediately. Set up automations and let the system handle the rest while you focus on strategy."
    },
    {
      icon: BarChart3,
      step: "04",
      title: "Track & Optimize",
      description: "Monitor opens, clicks, and conversions in real-time. Use insights to refine your approach and improve future campaigns."
    }
  ];
  
  const stats = [
    { value: "10M+", label: "Emails Delivered", description: "Successfully sent" },
    { value: "10K+", label: "Active Users", description: "Growing daily" },
    { value: "98%", label: "Satisfaction Rate", description: "Customer approval" },
    { value: "24/7", label: "Support", description: "Always available" }
  ];

export default function BulkEmailAutomationPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.showmine.io/' },
      { '@type': 'ListItem', position: 2, name: 'Bulk Email Automation', item: 'https://www.showmine.io/bulk-email-automation' }
    ]
  };

  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SHOWMINE Bulk Email Automation',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://www.showmine.io/bulk-email-automation',
    description: 'Launch, automate, and track high-converting bulk email campaigns with SHOWMINE.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://www.showmine.io/bulk-email-automation'
    },
    provider: {
      '@type': 'Organization',
      name: 'SHOWMINE',
      url: 'https://www.showmine.io'
    }
  };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0
        }
      };

  return (
    <div>
    <div className="min-h-screen bg-black text-white">
      <Script id="ld-breadcrumb-bulk-email" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbLd)}
      </Script>
      <Script id="ld-software-bulk-email" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(softwareLd)}
      </Script>
      <Navigation />
      
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 px-6 py-24 lg:py-32">
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <div className="container relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              ✨ Trusted by 10,000+ businesses
            </motion.div>
            
            <motion.h1 
              className="text-5xl font-bold leading-tight tracking-tight text-primary-foreground lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Send Email Campaigns That <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Convert</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-primary-foreground/90 lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Create, manage, and track professional email campaigns with ease. Reach thousands in minutes with personalized messages that drive results.
            </motion.p>
            
            <motion.div 
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                size="lg" 
                className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_10px_30px_-10px_hsl(var(--accent)/.5)] text-lg px-8 py-6 transition-all hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm text-lg px-8 py-6"
              >
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-8 pt-4 text-primary-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l-2.5-2.5L5 11l4 4 8-8-1.5-1.5L9 12z"/>
                </svg>
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l-2.5-2.5L5 11l4 4 8-8-1.5-1.5L9 12z"/>
                </svg>
                <span className="text-sm">14-day free trial</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div 
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent/20 to-primary-foreground/20 blur-2xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img 
              src="/bulkemail/hero-dashboard.png" 
              alt="Email campaign dashboard showing analytics and templates" 
              className="relative rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>

    
    </div>

    <section className="px-6 py-24 lg:py-32" id="features">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="mb-16 text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight lg:text-6xl">
            Everything You Need to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Powerful features designed to make email marketing simple, effective, and accessible to everyone.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm border border-border"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                borderColor: "hsl(var(--primary) / 0.2)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative space-y-4">
                <motion.div 
                  className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-3"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.IconComponent ? (
                    <feature.IconComponent className="h-8 w-8 text-primary" />
                  ) : (
                    <img src={feature.icon} alt="" className="h-10 w-10" />
                  )}
                </motion.div>
                
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="bg-secondary/50 px-6 py-24 lg:py-32" id="how-it-works">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="mb-16 text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight lg:text-6xl">
            Launch Campaigns in <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">4 Simple Steps</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            From setup to success, we've streamlined every step of the process. Get started in minutes, not hours.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.6
              }}
            >
              <motion.div 
                className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm border border-border"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute top-4 right-4 text-6xl font-bold text-primary/5"
                  whileHover={{ 
                    color: "hsl(var(--primary) / 0.1)",
                    scale: 1.1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.step}
                </motion.div>
                
                <div className="relative space-y-4">
                  <motion.div 
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 0.5
                    }}
                  >
                    <step.icon className="h-7 w-7" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15 + 0.5,
                    duration: 0.5
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-primary px-6 py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container relative mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center space-y-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className="text-5xl font-bold text-accent lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  duration: 0.6
                }}
                whileHover={{ 
                  scale: 1.1,
                  color: "hsl(var(--accent) / 0.8)"
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xl font-semibold text-primary-foreground">{stat.label}</div>
              <div className="text-sm text-primary-foreground/70">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-24 lg:py-32">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-12 lg:p-16 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
          
          <div className="relative text-center space-y-8">
            <motion.h2 
              className="text-4xl font-bold tracking-tight text-primary-foreground lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Transform Your Email Marketing?
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-2xl text-xl text-primary-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Join thousands of businesses already sending successful campaigns. Start your free trial today—no credit card required.
            </motion.p>
            
            <motion.div 
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_10px_30px_-10px_hsl(var(--accent)/.5)] text-lg px-8 py-6"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm text-lg px-8 py-6"
                >
                  Schedule Demo
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-primary-foreground/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l-2.5-2.5L5 11l4 4 8-8-1.5-1.5L9 12z"/>
                </svg>
                <span>14-day free trial</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l-2.5-2.5L5 11l4 4 8-8-1.5-1.5L9 12z"/>
                </svg>
                <span>No credit card required</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l-2.5-2.5L5 11l4 4 8-8-1.5-1.5L9 12z"/>
                </svg>
                <span>Cancel anytime</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

