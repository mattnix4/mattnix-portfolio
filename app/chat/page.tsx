import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import AIChat from "@/components/ai-chat"

export const metadata: Metadata = {
  title: "AI Chat",
  description: "Chat with Nirina's AI assistant",
}

export default function ChatPage() {
  return (
    <div className="container flex flex-col h-screen max-w-5xl mx-auto px-4">
      <div className="flex items-center py-4">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">AI Assistant</h1>
      </div>

      <div className="flex-1 overflow-hidden">
        <AIChat />
      </div>
    </div>
  )
}
