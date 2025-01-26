import { useState } from "react"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Nav } from "@/components/nav"
import { SignupModal } from "@/components/signup-modal"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function LandingPage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const openSignupModal = () => setIsSignupModalOpen(true)
  const closeSignupModal = () => setIsSignupModalOpen(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>NetWorkIt - Job Application Tracker with Networking platform</title>
        <meta
          name="description"
          content="Maximize your job search with NetWorkIt - track applications and leverage your network for referrals."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-10" />
            <img
              src="https://sjc.microlink.io/eViw-MIXbaBsqFe4Ki-h6Zinq5ZIKvw5ZnX4kViKqsQYcWNIvj-TpUowEnGoILyc998Uy3Gmvgoczo4tbBEjLA.jpeg"
              alt="Inspiring night sky with shooting stars"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="relative z-10 text-center space-y-6 mx-auto backdrop-blur-sm bg-black/10">
            <div className="px-4 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Your Career Journey.
                <br />
                Elevated.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mt-6">
                Track applications, leverage your network, and land your dream job faster with AI-powered insights.
              </p>
              <div className="flex items-center justify-center space-x-4 pt-8">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 text-lg px-8"
                  onClick={openSignupModal}
                >
                  Get Started
                </Button>
                <Button size="lg" variant="ghost" className="text-lg px-8">
                  Learn more <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why NetWorkIt</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience job searching reimagined with powerful tools designed for the modern professional.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Smart Application Tracking",
                  description: "Effortlessly manage your job applications with our intuitive tracking system.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Network Insights",
                  description: "Discover hidden connections and referral opportunities at your target companies.",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "AI-Powered Analytics",
                  description: "Get personalized insights and recommendations to optimize your job search.",
                  gradient: "from-orange-500 to-red-500",
                },
              ].map((feature, index) => (
                <div key={index} className="relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl`}
                  />
                  <div className="relative p-8 rounded-3xl bg-gray-900">
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {["Connect with LinkedIn", "Track Applications", "Discover Connections", "Land Your Dream Job"].map(
                (step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      {index + 1}
                    </div>
                    <p className="text-xl">{step}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Transform Your Job Search?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals who are leveraging NetWorkIt to advance their careers.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8"
                onClick={openSignupModal}
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">NetWorkIt</h3>
              <p className="text-sm">Empowering your job search with smart networking.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm">&copy; 2024 NetWorkIt. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
    </div>
  )
}

