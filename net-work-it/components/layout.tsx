import Link from "next/link"
import { useRouter } from "next/router"
import { Bell, Settings, User } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">NetWorkIt</h1>
        </div>
        <nav className="mt-6">
          <Link
            href="/"
            className={`flex items-center px-4 py-2 text-gray-700 ${router.pathname === "/" ? "bg-gray-200" : ""}`}
          >
            <User className="mr-3" />
            Dashboard
          </Link>
          <Link
            href="/applications"
            className={`flex items-center px-4 py-2 text-gray-700 ${router.pathname === "/applications" ? "bg-gray-200" : ""}`}
          >
            <Bell className="mr-3" />
            Applications
          </Link>
          <Link
            href="/networking"
            className={`flex items-center px-4 py-2 text-gray-700 ${router.pathname === "/networking" ? "bg-gray-200" : ""}`}
          >
            <User className="mr-3" />
            Networking
          </Link>
          <Link
            href="/settings"
            className={`flex items-center px-4 py-2 text-gray-700 ${router.pathname === "/settings" ? "bg-gray-200" : ""}`}
          >
            <Settings className="mr-3" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  )
}

