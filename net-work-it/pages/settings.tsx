import { useState } from "react"
import Layout from "../components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Settings() {
  const [settings, setSettings] = useState({
    name: "John Doe",
    email: "john@example.com",
    linkedInUrl: "https://www.linkedin.com/in/johndoe",
    emailNotifications: true,
  })

  const handleSave = () => {
    // In a real application, you would save these settings to the backend
    console.log("Saving settings:", settings)
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={settings.name}
                onChange={(e) => setSettings({ ...settings, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="linkedInUrl">LinkedIn URL</Label>
              <Input
                id="linkedInUrl"
                value={settings.linkedInUrl}
                onChange={(e) => setSettings({ ...settings, linkedInUrl: e.target.value })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="emailNotifications"
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
              />
              <Label htmlFor="emailNotifications">Email Notifications</Label>
            </div>
            <Button onClick={handleSave}>Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </Layout>
  )
}

