"use client"
import { Code, Code2, Wrench } from "lucide-react"
import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GlowingEffect } from "../ui/glowing-effect"
import Image from "next/image"

interface Skill {
  name: string
  icon: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    title: "Frameworks & Technologies",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      { name: "Next.js", icon: "/svg/next.svg" },
      { name: "React", icon: "/img/react.png" },
      { name: "Laravel", icon: "/img/laravel.png" },
      { name: "Node.js", icon: "/img/nodejs.png" },
      { name: "Express.js", icon: "/img/expressjs.png" },
      { name: "Elysia.js", icon: "/img/elysia.png" },
      { name: "Tailwind CSS", icon: "/img/tailwind.png" },
      { name: "Bootstrap", icon: "/img/bootstrap.png" },
      { name: "MySQL", icon: "/img/mysql.png" },
      { name: "MongoDB", icon: "/img/mongo.png" },
      { name: "Redis", icon: "/img/redis.png" },
      { name: "Git", icon: "/img/git.png" },
      { name: "Vercel", icon: "/vercel.svg" },
      { name: "Flutter", icon: "/svg/flutter.svg" },
      { name: "Next Auth", icon: "/img/nextauth.png" },
    ],
  },
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "JavaScript", icon: "/img/javascript.png" },
      { name: "TypeScript", icon: "/img/typescript.png" },
      { name: "PHP", icon: "/img/php.png" },
      { name: "Java", icon: "/img/java.png" },
      { name: "Dart", icon: "/img/dart.png" },
      { name: "Python", icon: "/img/python.png" },
      { name: "C++", icon: "/img/cpp.png" },
      { name: "C#", icon: "/img/csharp.png" },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section className="py-16 md:py-24" id="technical-skill-section">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Code2 className="h-12 w-12 text-purple-600 dark:text-purple-600" />
          </div>
          {/* <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Technical Skills
          </h2> */}
          <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Technical Skills</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Programming languages, frameworks, and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category) => (
            <Card key={category.title} className="border-0 gap-0 pb-0">
              <CardHeader className={`text-white`}>
                <CardTitle className="flex items-center gap-3 text-xl">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-4 rounded-lg bg-neutral-950 transition-colors duration-200 group relative"
                      data-aos="fade-right"
                      data-aos-delay={(index % 4) * 100}
                    >
                      <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                      />
                      <div className="text-2xl mb-2">
                        <Image src={skill.icon} alt="" width={40} height={40} className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300 text-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
