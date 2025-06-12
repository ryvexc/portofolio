"use client"
import { useState } from "react"
import { Trophy, Medal, Award, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlowingEffect } from "../ui/glowing-effect"
import CountUp from 'react-countup';
import SafeCountUp from "../mine/SaveCountUp"

interface CompetitionAchievement {
  id: string
  title: string
  competition: string
  position: string
  date: string
  location: string
  category: string
  image: string
  description: string
  link?: string
  prize?: string
}

const achievements: CompetitionAchievement[] = [
  {
    id: "1",
    title: "Runner Up",
    competition: "Web Tech Student Skill Competencies 2024",
    position: "2nd Place",
    date: "April 2024",
    location: "Madiun, East Java",
    category: "Province",
    image: "/img/lksjatim2024.webp",
    description: "Won first place in the national coding competition with an innovative AI-powered solution.",
    prize: "Rp3.750.000",
  },
  {
    id: "2",
    title: "Third Place",
    competition: "Web Tech Student Skill Competencies 2025",
    position: "3rd Place",
    date: "April 2025",
    location: "Malang, East Java",
    category: "Province",
    image: "/img/lksjatim2025.webp",
    description: "Developed a groundbreaking mobile app in 48 hours that impressed international judges.",
    prize: "Rp3.800.000",
  },
  {
    id: "3",
    title: "Highest Score",
    competition: "Web Technology Student Skill Competencies 2024 - Malang",
    position: "Winner",
    date: "February 2024",
    location: "Malang, East Java",
    category: "City",
    image: "/img/lksmalkot2024.jpg",
    description: "Recognized for the most innovative startup idea in the technology sector.",
    prize: "Rp750.000",
  },
  {
    id: "4",
    title: "Second Place",
    competition: "Web Technology Student Skill Competencies 2025 - Malang",
    position: "2nd Place",
    date: "February 2025",
    location: "Malang, East Java",
    category: "City",
    image: "/img/lksmalkot2025s.jpeg",
    description: "Won first place in the national coding competition with an innovative AI-powered solution.",
    prize: "Rp750.000",
  },
]

function getPositionIcon(position: string) {
  if (position.includes("1st") || position === "Winner") {
    return <Trophy className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
  } else if (position.includes("2nd")) {
    return <Medal className="h-5 w-5 text-gray-400 dark:text-slate-200" />
  } else if (position.includes("3rd")) {
    return <Medal className="h-5 w-5 text-amber-600 dark:text-amber-500" />
  }
  return <Award className="h-5 w-5 text-blue-500 dark:text-blue-400" />
}

function getPositionColor(position: string) {
  if (position.includes("1st") || position === "Winner") {
    return "bg-yellow-500/10 dark:bg-yellow-400/20 text-yellow-700 dark:text-yellow-200 border-yellow-500/20 dark:border-yellow-400/30"
  } else if (position.includes("2nd")) {
    return "bg-gray-500/10 dark:bg-slate-400/20 text-gray-700 dark:text-slate-200 border-gray-500/20 dark:border-slate-400/30"
  } else if (position.includes("3rd")) {
    return "bg-amber-200/10 text-amber-500 border-amber-500/20"
  }
  return "bg-blue-500/10 dark:bg-blue-400/20 text-blue-700 dark:text-blue-200 border-blue-500/20 dark:border-blue-400/30"
}

export default function AchievementsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(achievements.map((a) => a.category)))]

  const filteredAchievements =
    selectedCategory === "All" ? achievements : achievements.filter((a) => a.category === selectedCategory)

  return (
    <section className="py-16 md:py-24" id="achievement-section">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Trophy className="h-12 w-12 text-yellow-500" />
          </div>
          {/* <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-yellow-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
            Competition Victories
          </h2> */}
          <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Achievements</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating excellence through competitive achievements and recognition in various fields
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAchievements.map((achievement, index) => <div key={achievement.id} data-aos="fade-down" data-aos-delay={(index % 4) * 100}>
            <Card
              className="relative group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg p-0 pb-10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={achievement.image || "/placeholder.svg"}
                  alt={achievement.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute top-4 left-4">
                  <Badge className={`${getPositionColor(achievement.position)} font-semibold`}>
                    <span className="flex items-center gap-1">
                      {getPositionIcon(achievement.position)}
                      {achievement.position}
                    </span>
                  </Badge>
                </div>
                {achievement.prize && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700 border-green-500/20">
                      {achievement.prize}
                    </Badge>
                  </div>
                )} */}
              </div>

              <CardContent className="px-6">
                <div className="mb-3 relative">
                  {/* <Badge variant="outline" className="mb-2">
                    {achievement.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                  <p className="text-lg font-semibold text-primary">{achievement.competition}</p> */}
                  <div className="flex justify-between mb-3">
                    <Badge className={`${getPositionColor(achievement.position)} font-semibold`}>
                      <span className="flex items-center gap-1">
                        {getPositionIcon(achievement.position)}
                        {achievement.position}
                      </span>
                    </Badge>
                    {achievement.prize && (
                      <div className="">
                        <Badge variant="secondary" className="bg-green-500/10 text-green-700 border-green-500/20">
                          {achievement.prize}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* <h3 className="text-xl font-bold mb-1">{achievement.title}</h3> */}
                  <p className="text-xl font-semibold text-primary">{achievement.competition}</p>

                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">{achievement.description}</p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {achievement.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {achievement.location}
                  </div>
                </div>

                {achievement.link && (
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>)}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border border-yellow-200 dark:border-yellow-700/50">
            <Trophy className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">
              <SafeCountUp end={achievements.filter((a) => a.position.includes("1st") || a.position === "Winner").length} />
            </div>
            <div className="text-sm text-yellow-700 dark:text-yellow-300">First Places</div>
          </div>

          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-200 dark:border-gray-600/50">
            <Medal className="h-8 w-8 text-gray-600 dark:text-slate-200 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              <SafeCountUp end={achievements.filter((a) => a.position.includes("2nd")).length} />
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300">Second Places</div>
          </div>

          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-200 dark:border-amber-700/50">
            <Medal className="h-8 w-8 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-800 dark:text-amber-200">
              <SafeCountUp end={achievements.filter((a) => a.position.includes("3rd")).length} />
            </div>
            <div className="text-sm text-amber-700 dark:text-amber-300">Third Places</div>
          </div>

          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/50">
            <Award className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
              <SafeCountUp end={achievements.length} />
            </div>
            <div className="text-sm text-blue-700 dark:text-blue-300">Total Awards</div>
          </div>
        </div>
      </div>
    </section>
  )
}
