"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type JobApplicationFormProps = {
  position: string
  onClose: () => void
}

export function JobApplicationForm({ position, onClose }: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  })
  const [notification, setNotification] = useState<{title: string; message: string} | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setNotification({
      title: "Application Submitted!",
      message: `Your application for ${position} has been received.`
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50">
      {notification && (
        <div className="fixed top-4 right-4 z-[60] bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
          <div className="font-bold">{notification.title}</div>
          <div>{notification.message}</div>
        </div>
      )}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl border border-gray-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-800">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold">Apply for {position}</h3>
              <p className="text-gray-400 mt-1">Fill out the form below to submit your application</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              ✕
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="personal-info" className="border border-gray-800 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Personal Information</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Full Name *</label>
                  <Input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="resume" className="border border-gray-800 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Resume & Cover Letter</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Resume/CV *</label>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <p className="text-xs text-gray-400 mt-1">Accepted formats: .pdf, .doc, .docx (Max: 5MB)</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Cover Letter</label>
                  <Textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                    placeholder="Tell us why you'd be a great fit for this position..."
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#4B6F93] hover:bg-[#3a5a7a] text-white"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}
