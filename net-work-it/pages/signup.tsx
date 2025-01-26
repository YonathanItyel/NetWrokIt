import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Nav } from "@/components/nav"
import { LinkedinIcon as LinkedIn } from "lucide-react"

export default function SignupPage() {
  const handleLinkedInSignup = () => {
    // In a real application, this would initiate the OAuth flow
    console.log("Initiating LinkedIn OAuth flow")
    // Redirect to LinkedIn OAuth URL
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Sign Up - NetWorkIt</title>
        <meta name="description" content="Sign up for NetWorkIt using your LinkedIn account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full px-6 py-8 bg-gray-900 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Join NetWorkIt</h1>
          <p className="text-center text-gray-400 mb-8">Connect with your LinkedIn account to get started</p>
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
      </main>
    </div>
  )
}

