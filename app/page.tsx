import Link from "next/link"
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroScene from "@/components/hero-scene"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D Animation */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-b from-background to-background/80">
        <HeroScene />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 md:px-6 space-y-8 text-center z-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Nirina Randrianarisoa</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Full-Stack Developer specialized in web applications and DevOps solutions
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-sm py-1">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="text-sm py-1">
                  React
                </Badge>
                <Badge variant="outline" className="text-sm py-1">
                  Angular
                </Badge>
                <Badge variant="outline" className="text-sm py-1">
                  Node.js
                </Badge>
                <Badge variant="outline" className="text-sm py-1">
                  PHP
                </Badge>
                <Badge variant="outline" className="text-sm py-1">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-sm py-1">
                  Python
                </Badge>
              </div>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/about">
                  About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Link href="mailto:dorints.mg@gmail.com" className="text-gray-500 hover:text-primary">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="https://github.com/Nirina" className="text-gray-500 hover:text-primary">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/Nirina" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                My journey as a developer and technical team leader
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Data Extraction Expert</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">SmartOne.ai Madagascar</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">07/2024 - Present</p>
                  <p className="text-sm">
                    Development and configuration of web scraping tools using Javascript for web data extraction.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Full-Stack Developer | Technical Team Lead</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Capdata Software, Antananarivo</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">03/2022 - 07/2024</p>
                  <p className="text-sm">
                    Design and development of modules for HR and management applications using Angular, React, and
                    Node.js. Integration of DevOps solutions for CI/CD and process automation. Technical team leadership
                    and development team integration.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Capital Software</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">09/2021 - 12/2021</p>
                  <p className="text-sm">
                    Development of a web application for flight seat reservation using Vue.JS and Symfony. Git workflow
                    implementation. Development of Crawling and Scraping applications for web data extraction.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/about">
                View Full CV <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI-Powered Assistance</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Chat with my AI assistant to learn more about my skills and experience
              </p>
            </div>
            <div className="w-full max-w-md">
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4">Want to know more about my work or skills?</p>
                  <Button asChild className="w-full">
                    <Link href="/chat">Chat with AI Assistant</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Collaborate?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Register to access my dashboard and connect directly with me
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild variant="secondary">
                <Link href="/auth/register">Register as Recruiter</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/auth/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
