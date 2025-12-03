import type { Metadata } from "next"

const title = "Bulk Email Automation Software – SHOWMINE"
const description = "Plan, launch, and optimize high-volume email campaigns with SHOWMINE’s bulk automation platform. Personalization, analytics, and deliverability built in."
const url = "https://www.showmine.io/bulk-email-automation"
const ogImage = "/bulkemail/hero-dashboard.png"

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/bulk-email-automation",
  },
  openGraph: {
    title,
    description,
    url,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Bulk Email Automation Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
}

export default metadata



