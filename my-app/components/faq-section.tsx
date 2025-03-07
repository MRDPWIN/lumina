"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

export default function FaqSection() {
  const faqs = [
    {
      question: "What is Flinza?",
      answer:
        "Flinza is a comprehensive platform designed to help influencers, content creators, and brands grow their online presence through AI-powered tools, analytics, and expert guidance.",
    },
    {
      question: "How it Works?",
      answer:
        "Our platform provides you with AI-powered content ideas, real-time analytics, automation tools, and collaboration opportunities. Simply sign up, connect your social accounts, and start leveraging our tools to grow your brand.",
    },
    {
      question: "What are benefits?",
      answer:
        "Benefits include increased social media engagement, time-saving automation, data-driven insights, personalized content strategies, expanded reach through collaborations, and expert guidance to monetize your brand effectively.",
    },
    {
      question: "Who can Join?",
      answer:
        "Flinza is perfect for influencers, content creators, small business owners, marketing professionals, coaches, and anyone looking to grow their online presence and monetize their brand.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">FAQ</h2>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex items-center justify-between w-full p-4 text-left border border-gray-800 rounded-lg hover:bg-gray-900"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <Plus className="w-6 h-6" />
              </button>
              {openIndex === index && (
                <div className="p-4 border border-gray-800 border-t-0 rounded-b-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

