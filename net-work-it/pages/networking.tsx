import { useState } from "react"
import Layout from "../components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Connection = {
  id: number
  name: string
  company: string
  degree: number
}

export default function Networking() {
  const [searchTerm, setSearchTerm] = useState("")
  const [connections, setConnections] = useState<Connection[]>([])

  const handleSearch = () => {
    // This is a placeholder. In a real application, you would call the LinkedIn API here.
    const mockConnections: Connection[] = [
      { id: 1, name: "John Doe", company: searchTerm, degree: 1 },
      { id: 2, name: "Jane Smith", company: searchTerm, degree: 2 },
      { id: 3, name: "Bob Johnson", company: searchTerm, degree: 1 },
    ]
    setConnections(mockConnections)
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Networking Finder</h1>
      <div className="flex gap-4 mb-6">
        <Input placeholder="Enter company name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {connections.map((connection) => (
          <Card key={connection.id}>
            <CardHeader>
              <CardTitle>{connection.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Company:</strong> {connection.company}
              </p>
              <p>
                <strong>Degree:</strong> {connection.degree}
              </p>
              <Button className="mt-2">Message</Button>
              <Button className="mt-2 ml-2" variant="outline">
                Request Referral
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  )
}

