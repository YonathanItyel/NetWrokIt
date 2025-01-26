import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LinkedinIcon as LinkedIn } from "lucide-react"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const handleLinkedInSignup = () => {
    // In a real application, this would initiate the OAuth flow
    console.log("Initiating LinkedIn OAuth flow")
    // Redirect to LinkedIn OAuth URL
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Join NetWorkIt</DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            Connect with your LinkedIn account to get started
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <Button
            onClick={handleLinkedInSignup}
            className="w-full bg-[#0077B5] hover:bg-[#006699] text-white"
            size="lg"
          >
            <LinkedIn className="mr-2 h-5 w-5" />
            Sign up with LinkedIn
          </Button>
          <p className="mt-6 text-sm text-center text-gray-500">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

