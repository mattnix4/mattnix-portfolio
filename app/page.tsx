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
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>

        {/* Content overlay with gradient background for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 z-10">
          <div className="container h-full px-4 md:px-6 mx-auto flex flex-col items-center justify-center">
            {/* Main content card with semi-transparent background */}
            <Card className="max-w-3xl w-full bg-background/80 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-6 md:p-10 space-y-8 text-center">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Nirina Ran</h1>
                  <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
                    Full-Stack Developer specialized in web applications and DevOps solutions
                  </p>
                </div>

                {/* Skills badges in a scrollable container */}
                <div className="flex justify-center">
                  <div className="flex flex-wrap justify-center gap-2 max-w-lg">
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      React
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Angular
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      PHP
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      TypeScript
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Python
                    </Badge>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <Link href="/about">
                      About Me <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg" className="bg-background/50 backdrop-blur-sm">
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-6">
                  <Link
                    href="mailto:dorints.mg@gmail.com"
                    className="text-gray-700 hover:text-primary dark:text-gray-300"
                  >
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                  <Link
                    href="https://github.com/mattnix4/"
                    className="text-gray-700 hover:text-primary dark:text-gray-300"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://mg.linkedin.com/in/nantenaina-randrianarisoa"
                    className="text-gray-700 hover:text-primary dark:text-gray-300"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
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
                Delivering high-quality solutions across web development and data extraction
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
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Developed advanced web scraping tools using JavaScript</li>
                    <li>Automated data extraction workflows for enterprise clients</li>
                    <li>Implemented data cleaning and transformation pipelines</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Full-Stack Developer | Technical Team Lead</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Capdata Software, Antananarivo</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">03/2022 - 07/2024</p>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Led development of HR and management applications using React and Node.js</li>
                    <li>Implemented CI/CD pipelines and DevOps best practices</li>
                    <li>Managed a team of 5 developers, improving productivity by 30%</li>
                    <li>Created custom WordPress plugins for application interoperability</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Capital Software</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">09/2021 - 12/2021</p>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Built flight reservation system using Vue.JS and Symfony</li>
                    <li>Migrated legacy codebase to Git version control</li>
                    <li>Developed web scraping solutions for data-driven applications</li>
                  </ul>
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
