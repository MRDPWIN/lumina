"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Let's Connect and Explore Further Opportunities Together</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex -space-x-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-blue-500"></div>
              ))}
            </div>
            <span>1.5k attendees</span>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-black rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">
              Register Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

