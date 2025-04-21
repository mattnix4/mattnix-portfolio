import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardShell from "@/components/dashboard/dashboard-shell"
import MessagesInterface from "@/components/dashboard/messages-interface"

export const metadata: Metadata = {
  title: "Messages",
  description: "Communicate with Nirina through the messaging system",
}

export default function MessagesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Messages" text="Communicate directly with Nirina." />

      <MessagesInterface />
    </DashboardShell>
  )
}
