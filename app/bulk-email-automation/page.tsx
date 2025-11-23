"use client"

import React from "react"
import { Navigation } from "@/components/navigation"

export default function BulkEmailAutomationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Simple div section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
            <h1 className="text-4xl font-bold text-white mb-4">
              Bulk Email Automation
            </h1>
            <p className="text-lg text-white/80">
              This is a simple div for the bulk email automation page.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

