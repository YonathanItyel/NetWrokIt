import { useState } from "react"
import Layout from "../components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Application = {
  id: number
  company: string
  jobTitle: string
  status: string
  date: string
}

export default function Applications() {
  const [applications, setApplications] = useState<Application[]>([
    { id: 1, company: "Tech Co", jobTitle: "Software Engineer", status: "Applied", date: "2023-05-01" },
    { id: 2, company: "Startup Inc", jobTitle: "Full Stack Developer", status: "Interviewing", date: "2023-05-05" },
  ])

  const [newApplication, setNewApplication] = useState<Omit<Application, "id">>({
    company: "",
    jobTitle: "",
    status: "Applied",
    date: new Date().toISOString().split("T")[0],
  })

  const handleAddApplication = () => {
    setApplications([...applications, { ...newApplication, id: applications.length + 1 }])
    setNewApplication({
      company: "",
      jobTitle: "",
      status: "Applied",
      date: new Date().toISOString().split("T")[0],
    })
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Application Tracker</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add New Application</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={newApplication.company}
                onChange={(e) => setNewApplication({ ...newApplication, company: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                value={newApplication.jobTitle}
                onChange={(e) => setNewApplication({ ...newApplication, jobTitle: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                value={newApplication.status}
                onValueChange={(value) => setNewApplication({ ...newApplication, status: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Applied">Applied</SelectItem>
                  <SelectItem value="Interviewing">Interviewing</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                  <SelectItem value="Offer">Offer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={newApplication.date}
                onChange={(e) => setNewApplication({ ...newApplication, date: e.target.value })}
              />
            </div>
          </div>
          <Button className="mt-4" onClick={handleAddApplication}>
            Add Application
          </Button>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <Card key={app.id}>
            <CardHeader>
              <CardTitle>{app.company}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Job Title:</strong> {app.jobTitle}
              </p>
              <p>
                <strong>Status:</strong> {app.status}
              </p>
              <p>
                <strong>Date:</strong> {app.date}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  )
}

