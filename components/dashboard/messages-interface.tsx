"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Paperclip } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Message {
  id: string
  content: string
  sender: "user" | "nirina" | "ai"
  timestamp: Date
}

export default function MessagesInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm interested in discussing a potential job opportunity with you.",
      sender: "user",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "2",
      content: "Hi there! I'd be happy to discuss. Could you tell me more about the position?",
      sender: "nirina",
      timestamp: new Date(Date.now() - 3500000),
    },
    {
      id: "3",
      content: "We're looking for a Full-Stack Developer with experience in React and Node.js for a 6-month contract.",
      sender: "user",
      timestamp: new Date(Date.now() - 3400000),
    },
    {
      id: "4",
      content:
        "That sounds interesting! I have extensive experience with both React and Node.js. Could you share more details about the project and team?",
      sender: "nirina",
      timestamp: new Date(Date.now() - 3300000),
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsLoading(true)

    try {
      // Simulate AI response
      setTimeout(async () => {
        try {
          // This is a placeholder for actual AI integration
          // In a real implementation, you would use the AI SDK properly
          // const { text } = await generateText({
          //   model: openai("gpt-4o"),
          //   prompt: `You are Nirina's AI assistant. Respond to this message: ${newMessage}`,
          // });

          // For demo purposes, we'll use a hardcoded response
          const aiResponse =
            "Thanks for your message! Nirina will get back to you soon. In the meantime, I can help answer any questions you might have about his skills or experience."

          const aiMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: aiResponse,
            sender: "ai",
            timestamp: new Date(),
          }

          setMessages((prev) => [...prev, aiMessage])
          setIsLoading(false)
        } catch (error) {
          console.error("Error generating AI response:", error)
          setIsLoading(false)
          toast({
            title: "Error",
            description: "Failed to generate AI response. Please try again.",
            variant: "destructive",
          })
        }
      }, 1500)
    } catch (error) {
      setIsLoading(false)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[calc(100vh-180px)]">
      <Card className="md:col-span-1 overflow-hidden">
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="font-medium">Conversations</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-md bg-muted">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="NR" />
                  <AvatarFallback>NR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium">Nirina Randrianarisoa</div>
                  <div className="text-xs text-muted-foreground">Active now</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-3 flex flex-col h-full">
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="NR" />
                <AvatarFallback>NR</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">Nirina Randrianarisoa</div>
                <div className="text-xs text-muted-foreground">Full-Stack Developer</div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex items-start gap-2 max-w-[80%]">
                  {message.sender !== "user" && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt={message.sender === "nirina" ? "NR" : "AI"}
                      />
                      <AvatarFallback>{message.sender === "nirina" ? "NR" : "AI"}</AvatarFallback>
                    </Avatar>
                  )}

                  <div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : message.sender === "ai"
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-muted"
                      }`}
                    >
                      {message.content}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{formatTime(message.timestamp)}</div>
                  </div>

                  {message.sender === "user" && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2 max-w-[80%]">
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-secondary text-secondary-foreground rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 bg-current rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="shrink-0">
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach file</span>
              </Button>
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <Button onClick={handleSendMessage} disabled={isLoading} className="shrink-0">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
