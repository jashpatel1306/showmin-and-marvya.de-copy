import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "./components/Footer"

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
        {children}
        <Footer />
      </body>
    </html>
  )
}
