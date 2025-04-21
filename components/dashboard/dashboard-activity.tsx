import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardActivity({ className }: { className?: string }) {
  const activities = [
    {
      user: {
        name: "Sarah Johnson",
        company: "Tech Innovations",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SJ",
      },
      action: "sent you a message",
      time: "2 hours ago",
    },
    {
      user: {
        name: "Mark Williams",
        company: "Global Recruiters",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MW",
      },
      action: "viewed your profile",
      time: "Yesterday",
    },
    {
      user: {
        name: "Emma Davis",
        company: "DevHire Solutions",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "ED",
      },
      action: "scheduled a meeting",
      time: "2 days ago",
    },
    {
      user: {
        name: "John Smith",
        company: "Talent Finders",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JS",
      },
      action: "sent you a message",
      time: "3 days ago",
    },
    {
      user: {
        name: "Lisa Chen",
        company: "Tech Recruiters Inc.",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "LC",
      },
      action: "viewed your profile",
      time: "1 week ago",
    },
  ]

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your recent interactions with recruiters</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                <p className="text-xs text-muted-foreground">{activity.user.company}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
