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
    generator: 'v0.dev'
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
        {/* Chatbot functionality temporarily disabled
        <SupportAgentWrapper />
        */}
      </body>
    </html>
  )
}
