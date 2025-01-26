import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { SignupModal } from "@/components/signup-modal"

export function Nav() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const openSignupModal = () => setIsSignupModalOpen(true)
  const closeSignupModal = () => setIsSignupModalOpen(false)

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="flex items-center justify-between px-8 py-2 max-w-[1440px] mx-auto">
          <Link href="/" className="text-white text-2xl font-medium">
            NetWorkIt
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#support" className="text-sm text-gray-300 hover:text-white transition-colors">
              Support
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={openSignupModal}>
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
      <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
    </>
  )
}

