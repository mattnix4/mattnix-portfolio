import Link from "next/link"
import { ArrowLeft, Download, Mail, Phone, MapPin, GraduationCap, Briefcase, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// Add import for Skills3D component
import Skills3D from "@/components/skills-3d"

export default function AboutPage() {
  // Inside the component, update the skills array to include colors
  const skills = [
    { name: "JavaScript", level: 90, color: "#f7df1e" },
    { name: "React", level: 85, color: "#61dafb" },
    { name: "Angular", level: 80, color: "#dd0031" },
    { name: "Node.js", level: 85, color: "#8cc84b" },
    { name: "PHP", level: 75, color: "#777bb4" },
    { name: "TypeScript", level: 80, color: "#3178c6" },
    { name: "Python", level: 70, color: "#3776ab" },
    { name: "HTML/CSS", level: 90, color: "#e34c26" },
    { name: "Git", level: 85, color: "#f05032" },
    { name: "DevOps", level: 75, color: "#ff6c37" },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="ml-auto">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">dorints.mg@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+261 34 544 5555</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Ambohitrarahaba, Antananarivo 101, Madagascar</p>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm font-medium mb-2">Languages</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">English</span>
                      <span className="text-sm">Intermediate</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">French</span>
                      <span className="text-sm">Intermediate</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Passionate about programming with advanced expertise in Full-Stack development, specialized in
                    creating and optimizing web applications. Significant experience in project management and
                    integrating DevOps solutions to improve the efficiency of development processes.
                  </p>

                  <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>

                  {/* Add the 3D skills visualization here */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Skills Visualization</h3>
                    <Skills3D skills={skills} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="mt-6 space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle>Data Extraction Expert</CardTitle>
                  </div>
                  <div className="text-sm text-muted-foreground">SmartOne.ai Madagascar | 07/2024 - Present</div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>
                      Development and configuration of web scraping tools using Javascript for web data extraction.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle>Full-Stack Developer | Technical Team Lead</CardTitle>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Capdata Software, Antananarivo | 03/2022 - 07/2024
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>
                      Design and development of modules for various HR and management applications using Angular, React,
                      and Node.js.
                    </li>
                    <li>Integration of DevOps solutions for CI/CD and process automation.</li>
                    <li>Creation of WordPress plugins for application interoperability.</li>
                    <li>Technical team leadership, responsible for strengthening and integrating development teams.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle>Full-Stack Developer</CardTitle>
                  </div>
                  <div className="text-sm text-muted-foreground">Capital Software | 09/2021 - 12/2021</div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Development of a web application for flight seat reservation using Vue.JS and Symfony.</li>
                    <li>Transfer of work to Git.</li>
                    <li>Development of Crawling and Scraping applications for web data extraction.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="mt-6 space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle>Master in Software Engineering</CardTitle>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    CNTEMAD Ankadifotsty Antananarivo, Madagascar | 2022-2024
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle>Professional License, Software Engineering</CardTitle>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Université Emedia, Tsiadana Ampasanimalo, Madagascar | 2021
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Technical Competencies</h3>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-start mb-3">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Languages</p>
                        <p className="text-sm text-muted-foreground">
                          PHP, JavaScript (Angular, React, NodeJS), TypeScript, Python
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mb-3">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Front-end</p>
                        <p className="text-sm text-muted-foreground">HTML, CSS, frameworks (Angular, React)</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-3">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Back-end</p>
                        <p className="text-sm text-muted-foreground">NodeJS, Symfony, CodeIgniter</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm font-medium">CMS</p>
                        <p className="text-sm text-muted-foreground">WordPress</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start mb-3">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Databases</p>
                        <p className="text-sm text-muted-foreground">PostgreSQL, MySQL, SQLite3, Oracle, MongoDB</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-3">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Mobile</p>
                        <p className="text-sm text-muted-foreground">Flutter</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-3">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Version Control</p>
                        <p className="text-sm text-muted-foreground">Git</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Operating Systems</p>
                        <p className="text-sm text-muted-foreground">Windows, Linux</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
