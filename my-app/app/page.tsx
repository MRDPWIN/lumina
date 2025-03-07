import Image from "next/image"
import { Bell, Camera, Eye, Pen } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import ProjectCard from "@/components/project-card"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Imtiaz is a motherfucker</h1>
              <p className="text-lg mb-6">
                We empower influencers, trainers, and creators to amplify their online presence and monetize their
                unique brand effectively.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">Start Now</Button>
            </div>
            <div className="flex-1">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Influencer marketing"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="bg-transparent border border-gray-700 rounded-full p-4 w-16 h-16 flex items-center justify-center"
              >
                <span className="text-white text-xs">Logoipsum</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 flex justify-center">
            <div className="bg-blue-600 p-8 text-center w-64 rounded-lg">
              <div className="flex justify-center mb-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 6V18M6 12H18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold">10,000</div>
              <div>Happy Clients</div>
            </div>
          </div>

          <div className="text-center mt-8 max-w-2xl mx-auto">
            <p>We empower influencers and creators with innovative tools and expert guidance to amplify their brand.</p>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Expertise
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Results
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Innovation
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Support
              </div>
            </div>
          </div>

          {/* We provide tailored solutions... section */}
          <div className="text-center mt-8 max-w-2xl mx-auto">
            <p>
              We provide tailored solutions, ensuring every client achieves their unique goals effectively and
              efficiently.
            </p>
            <div className="mt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Your Brand Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Empowering Your Brand</h2>
          <p className="text-center max-w-3xl mx-auto mb-16">
            Flinza Media helps influencers, trainers, business owners, and creators grow their brand online with expert
            strategies.
          </p>

          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl h-64 md:h-96">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-8 bg-pink-500 rounded-full transform rotate-12"></div>
              <div className="absolute bottom-0 left-0 w-32 h-8 bg-blue-500 rounded-full transform -rotate-12"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500 rounded-lg transform rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-blue-500 rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/3 w-8 h-8 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-0 right-1/4 w-32 h-8 bg-yellow-500 rounded-full transform skew-x-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tools Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Advanced Tools, Expert Guidance</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              icon={<Bell className="w-8 h-8 text-blue-500" />}
              title="Content Ideas"
              description="AI-powered content ideas tailored to your niche, saving time and boosting creativity effortlessly."
              bgColor="bg-gray-800"
              iconBgColor="bg-pink-500"
            />

            <FeatureCard
              icon={<Eye className="w-8 h-8 text-blue-500" />}
              title="Collaboration Hub"
              description="Connect with influencers and creators, expanding your reach and creating impactful collaborations seamlessly."
              bgColor="bg-gray-800"
              iconBgColor="bg-pink-500"
            />

            <FeatureCard
              icon={<Pen className="w-8 h-8 text-blue-500" />}
              title="Real-Time Analytics"
              description="Gain insights with real-time analytics to refine your strategy and maximize your online performance effectively."
              bgColor="bg-gray-800"
              iconBgColor="bg-pink-500"
            />

            <FeatureCard
              icon={<Camera className="w-8 h-8 text-blue-500" />}
              title="Automation Tools"
              description="Automate posts, engage followers, and track performance, saving time and maximizing your social media impact."
              bgColor="bg-gray-800"
              iconBgColor="bg-pink-500"
            />
          </div>

          <div className="mt-16 space-y-6 max-w-4xl mx-auto">
            <div className="bg-pink-500 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Content Ideas</h3>
              <p>
                Our AI algorithms generate fresh content ideas tailored to your niche, ensuring you always have engaging
                posts ready to captivate your audience.
              </p>
            </div>

            <div className="bg-yellow-500 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Brand Monetization</h3>
              <p>
                Schedule posts, track engagement, and manage multiple accounts from one dashboard, simplifying your
                social media workflow.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-900 rounded-xl p-8 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Advanced Tools, Expert Guidance</h3>
            <p className="mb-4">
              AI-powered content ideas, analytics, automation tools, and collaboration opportunities to boost engagement
              and visibility effortlessly.
            </p>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>
      </section>

      {/* Unlock Brand Potential */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Unlock Brand Potential</h2>
          <p className="text-center max-w-3xl mx-auto mb-16">
            Monetize your brand easily with advanced tools and expert guidance, increasing social media followers, and
            attracting more clients.
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-16">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`w-20 h-20 rounded-full flex items-center justify-center ${
                  [
                    "bg-teal-800",
                    "bg-blue-500",
                    "bg-orange-500",
                    "bg-blue-500",
                    "bg-orange-400",
                    "bg-blue-500",
                    "bg-pink-500",
                  ][i % 7]
                }`}
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProjectCard
              image="/placeholder.svg?height=300&width=400"
              title="AI Growth"
              description="Leveraging AI for exponential follower growth, content creation, and engagement strategies. Transforming social media presence effectively."
              tags={["AI", "Marketing", "Growth"]}
            />

            <ProjectCard
              image="/placeholder.svg?height=300&width=400"
              title="Content Strategy"
              description="AI-driven content strategy, personalized for maximum engagement. Creating compelling narratives that resonate with target audiences effectively."
              tags={["Content", "AI", "Strategy"]}
            />

            <ProjectCard
              image="/placeholder.svg?height=300&width=400"
              title="Marketing Automation"
              description="Automated social media campaigns, scheduled posts, and real-time analytics. Streamlining marketing efforts for maximum impact and efficiency."
              tags={["Marketing", "Automation"]}
              className="md:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Success Stories */}
      <Testimonials />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-xl p-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Ready to Elevate?</h2>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">Join Now</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

