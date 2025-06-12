"use client"
import { useState } from "react"
import { ExternalLink, Github, Globe, Smartphone, Database, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: "web" | "mobile" | "fullstack" | "api"
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  status: "completed" | "in-progress" | "maintenance" | "abandoned"
  year: string
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "Pandora Dent Clinic",
    description: "A Landing Page built with Laravel. Features include user authentication, product catalog, order management, and admin dashboard with analytics.",
    longDescription:
      "A Landing Page platform built with Laravel. Features include user authentication, product catalog, order management, and admin dashboard with analytics.",
    image: "/img/project-pandoradent.png",
    category: "fullstack",
    technologies: ["Laravel", "MySQL", "Chart.js", "Bootstrap", "SEO", "PHP", "JavaScript"],
    features: [
      "User Authentication",
      "Payment Integration",
      "Admin Dashboard",
      "Inventory Management",
      "Order Tracking",
    ],
    liveUrl: "https://pandoradentclinic.com/",
    // githubUrl: "https://github.com/username/ecommerce-platform",
    status: "completed",
    year: "2024",
  },
  {
    id: "2",
    title: "Lucia.id",
    description: "Job seekers can engage with potential employers, receive feedback on their applications, and even connect with mentors in their field. Employers can gain insights into industry trends and access a diverse pool of talent ready to tackle their challenges.",
    longDescription:
      "Job seekers can engage with potential employers, receive feedback on their applications, and even connect with mentors in their field. Employers can gain insights into industry trends and access a diverse pool of talent ready to tackle their challenges.",
    image: "/img/project-luciaid.png",
    category: "web",
    technologies: ["Next.js", "Next Auth", "MongoDB", "Elysia.js", "Typescript", "Tailwind CSS"],
    features: [
      "Multi-platform Integration",
      "Real-time Analytics",
      "Post Scheduling",
      "Performance Metrics",
      "Custom Reports",
    ],
    // liveUrl: "https://social-dashboard-demo.com",
    // githubUrl: "https://github.com/username/social-dashboard",
    status: "in-progress",
    year: "2025",
  },
  {
    id: "7",
    title: "Eschool.ac.id",
    description: "The best and cheapest school management software in Indonesia. Complete features and according to needs.",
    longDescription:
      "The best and cheapest school management software in Indonesia. Complete features and according to needs.",
    image: "/img/project-eschool.png",
    category: "fullstack",
    technologies: ["Laravel", "Redis", "MySQL", "Breeze", "Javascript", "PHP"],
    features: ["RESTful API", "Data Caching", "Rate Limiting", "API Documentation", "Docker Deployment"],
    liveUrl: "https://elyxstore.vercel.app/",
    status: "completed",
    year: "2024",
  },
  {
    id: "3",
    title: "Teh Poci (API)",
    description: "Mobile Application API for managing Teh Poci Branchs, features include turnover, authentication, roles and much more, This project was made by a team, and I was the backend",
    longDescription:
      "A modern task management application built with React and Node.js. Includes real-time collaboration, drag-and-drop task boards, team management, file attachments, and progress tracking.",
    image: "/img/project-tehpoci.png",
    category: "api",
    technologies: ["Laravel", "MySQL", "PHP"],
    features: ["Real-time Collaboration", "Drag & Drop", "Team Management", "File Uploads", "Progress Tracking"],
    // liveUrl: "https://taskapp-demo.com",
    // githubUrl: "https://github.com/username/task-management",
    status: "completed",
    year: "2024",
  },
  {
    id: "4",
    title: "Teh Poci (Web)",
    description: "This project is a continuation of the mobile API because the client requested a website version to be created so that it can be run on any platform.",
    longDescription:
      "This project is a continuation of the mobile API because the client requested a website version to be created so that it can be run on any platform.",
    image: "/img/project-tehpociweb.png",
    category: "web",
    technologies: ["Laravel", "MySQL", "PHP", "Bootstrap", "Javascript"],
    features: ["Biometric Auth", "Account Management", "Money Transfers", "Transaction History", "Push Notifications"],
    liveUrl: "https://myway.lucia.id",
    status: "completed",
    year: "2025",
  },
  {
    id: "5",
    title: "Woolthermal",
    description: "A Landing Page for selling their products especially Woolthermal, features include Authentication, Admin, and Role Management (Abandoned by Client).",
    longDescription:
      "A comprehensive restaurant management system built with Vue.js and Laravel. Includes point-of-sale system, inventory management, staff scheduling, customer management, and analytics dashboard.",
    image: "/img/project-woolthermal.png",
    category: "fullstack",
    technologies: ["Next.js", "Next Auth", "Elysia.js", "MongoDB", "Swagger", "Chart.js"],
    features: ["POS System", "Inventory Management", "Staff Scheduling", "Customer Management", "Analytics"],
    // liveUrl: "https://restaurant-demo.com",
    status: "abandoned",
    year: "2023",
  },
  {
    id: "6",
    title: "Elyx Store",
    description: "Fullstack e-commerce web app built with Next.js and MySQL, using native Next.js API, This project should still be running but it is unstable",
    longDescription:
      "Fullstack e-commerce web app built with Next.js and MySQL, using native Next.js API, This project should still be running but it is unstable",
    image: "/img/project-elyxstore.png",
    category: "fullstack",
    technologies: ["Next.js", "Next Auth", "Elysia.js", "MongoDB", "Swagger"],
    features: ["RESTful API", "Data Caching", "Rate Limiting", "API Documentation", "Docker Deployment"],
    liveUrl: "https://elyxstore.vercel.app/",
    status: "abandoned",
    year: "2023",
  },
]

function getCategoryIcon(category: string) {
  switch (category) {
    case "web":
      return <Globe className="h-5 w-5" />
    case "mobile":
      return <Smartphone className="h-5 w-5" />
    case "fullstack":
      return <Code className="h-5 w-5" />
    case "api":
      return <Database className="h-5 w-5" />
    default:
      return <Code className="h-5 w-5" />
  }
}

function getCategoryColor(category: string) {
  switch (category) {
    case "web":
      return "bg-blue-500/10 dark:bg-blue-400/20 text-blue-700 dark:text-blue-300 border-blue-500/20 dark:border-blue-400/30"
    case "mobile":
      return "bg-green-500/10 dark:bg-green-400/20 text-green-700 dark:text-green-300 border-green-500/20 dark:border-green-400/30"
    case "fullstack":
      return "bg-purple-500/10 dark:bg-purple-400/20 text-purple-700 dark:text-purple-300 border-purple-500/20 dark:border-purple-400/30"
    case "api":
      return "bg-orange-500/10 dark:bg-orange-400/20 text-orange-700 dark:text-orange-300 border-orange-500/20 dark:border-orange-400/30"
    default:
      return "bg-gray-500/10 dark:bg-gray-400/20 text-gray-700 dark:text-gray-300 border-gray-500/20 dark:border-gray-400/30"
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "completed":
      return "bg-green-500/10 dark:bg-green-400/20 text-green-700 dark:text-green-300"
    case "in-progress":
      return "bg-yellow-500/10 dark:bg-yellow-400/20 text-yellow-700 dark:text-yellow-300"
    case "maintenance":
      return "bg-blue-500/10 dark:bg-blue-400/20 text-blue-700 dark:text-blue-300"
    default:
      return "bg-gray-500/10 dark:bg-gray-400/20 text-gray-700 dark:text-gray-300"
  }
}

function getCategoryLabel(category: string) {
  switch (category) {
    case "web":
      return "Web App"
    case "mobile":
      return "Mobile App"
    case "fullstack":
      return "Full Stack"
    case "api":
      return "API Service"
    default:
      return "Project"
  }
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", "web", "mobile", "fullstack", "api"]
  const filteredProjects =
    selectedCategory === "all" ? projectsData : projectsData.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-16 md:py-24" id="project-section">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Code className="h-12 w-12 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Projects</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my fullstack development work, from web applications to mobile apps and API services
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full capitalize"
            >
              {category === "all" ? "All Projects" : getCategoryLabel(category)}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => <div key={project.id} className="h-full" data-aos="fade-down" data-aos-delay={(index % 4) * 100}>
            <Card
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg py-0 h-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getCategoryColor(project.category)}>
                    <span className="flex items-center gap-1">
                      {getCategoryIcon(project.category)}
                      {getCategoryLabel(project.category)}
                    </span>
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)} variant="secondary">
                    {project.status.replace("-", " ")}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-2xl font-semibold">{project.title}</p>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-4">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  {/* <h5 className="text-sm font-semibold mb-2">Technologies</h5> */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>)}
        </div>

        {/* Project Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700/50">
            <Code className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
              {projectsData.filter((p) => p.category === "fullstack").length}
            </div>
            <div className="text-sm text-purple-700 dark:text-purple-300">Full Stack</div>
          </div>

          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/50">
            <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
              {projectsData.filter((p) => p.category === "web").length}
            </div>
            <div className="text-sm text-blue-700 dark:text-blue-300">Web Apps</div>
          </div>

          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700/50">
            <Smartphone className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-800 dark:text-green-200">
              {projectsData.filter((p) => p.category === "mobile").length}
            </div>
            <div className="text-sm text-green-700 dark:text-green-300">Mobile Apps</div>
          </div>

          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700/50">
            <Database className="h-8 w-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-800 dark:text-orange-200">
              {projectsData.filter((p) => p.category === "api").length}
            </div>
            <div className="text-sm text-orange-700 dark:text-orange-300">API Services</div>
          </div>
        </div>
      </div>
    </section>
  )
}
