import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Footer from "./components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
// Chatbot functionality temporarily disabled
// import SupportAgentWrapper from "@/components/SupportAgentWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SHOWMINE - E-commerce Growth Partner",
  description:
    "We are the partner when it comes to holistic e-commerce growth. Expert team, proven processes, measurable results.",
  keywords: "e-commerce, online shop, digital marketing, shop migration, Shopify, growth",
    generator: 'v0.dev',
    metadataBase: new URL('https://www.showmine.io'),
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'website',
      url: 'https://www.showmine.io/',
      title: 'SHOWMINE - E-commerce Growth Partner',
      description:
        'We are the partner when it comes to holistic e-commerce growth. Expert team, proven processes, measurable results.',
      siteName: 'SHOWMINE',
      images: [
        {
          url: '/images/hero-background.avif',
          width: 1200,
          height: 630,
          alt: 'SHOWMINE - E-commerce Growth Partner',
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'SHOWMINE - E-commerce Growth Partner',
      description:
        'We are the partner when it comes to holistic e-commerce growth. Expert team, proven processes, measurable results.',
      images: ['/images/hero-background.avif'],
      creator: '@showmine',
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1MQS4VZWVT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1MQS4VZWVT');
          `}
        </Script>
        {children}
        <Footer />
        <WhatsAppButton />
        <Script id="org-ld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SHOWMINE',
            url: 'https://www.showmine.io',
            logo: 'https://www.showmine.io/images/showmine.png',
            sameAs: [
              'https://www.linkedin.com/company/showmine',
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: 'info@showmine.io',
              availableLanguage: ['English','German']
            }]
          })}
        </Script>
        {/* Chatbot functionality temporarily disabled
        <SupportAgentWrapper />
        */}
      </body>
    </html>
  )
}
