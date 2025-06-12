"use client"
import { useState } from "react"
import { Trophy, Medal, Award, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlowingEffect } from "../ui/glowing-effect"
import CountUp from 'react-countup';
import SafeCountUp from "../mine/SaveCountUp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNewspaper } from "@fortawesome/free-regular-svg-icons"

interface Ceritficate {
  id: string
  title: string
  image: string
}

const achievements: Ceritficate[] = [
  {
    id: "6",
    title: "LKS Jawa Timur 2024 Juara II",
    image: "/img/certificates/lks-jatim-2024-juara-2.jpg",
  },
  {
    id: "7",
    title: "LKS Jawa Timur 2024 Peserta",
    image: "/img/certificates/lks-jatim-2024-peserta.jpg",
  },
  {
    id: "10",
    title: "LKS Jawa Timur 2025 Juara III",
    image: "/img/certificates/lks-jatim-2025-juara-3.jpg",
  },
  {
    id: "11",
    title: "LKS Jawa Timur 2025 Peserta",
    image: "/img/certificates/lks-jatim-2025-peserta.jpg",
  },
  {
    id: "2",
    title: "LKS Kota Malang 2024 Juara I",
    image: "/img/certificates/lks-kota-malang-2024-juara-1.jpg",
  },
  {
    id: "3",
    title: "LKS Kota Malang 2024 Peserta",
    image: "/img/certificates/lks-kota-malang-2024-peserta.jpg",
  },
  {
    id: "4",
    title: "Keselamatan & Kesehatan Kerja 2022",
    image: "/img/certificates/e-learning-k3-2022.jpg",
  },
  {
    id: "5",
    title: "Always Ngoding - Javascript",
    image: "/img/certificates/always-ngoding-javascript.jpg",
  },
  {
    id: "9",
    title: "Praktik Kerja Lapangan (PKL) UBIG 2023-2024",
    image: "/img/certificates/sertifikat-prakerin.jpg",
  },
  {
    id: "8",
    title: "Magang UBIG 2023-2024",
    image: "/img/certificates/magang-ubig-2023-2024.jpg",
  },
  {
    id: "1",
    title: "Bootcamp LKS UBIG 2023-2024",
    image: "/img/certificates/bootcamp-lks-ubig-2023-2024.jpg",
  },
]

export default function SertificatesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  return (
    <section className="py-16 md:py-24" id="sertificate-section">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon icon={faNewspaper} className="text-5xl text-yellow-500" />
          </div>
          {/* <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-yellow-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
            Competition Victories
          </h2> */}
          <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Certificates</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            List of my certificates and achievements in various competitions, showcasing my skills and dedication.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => <div key={achievement.id} data-aos="fade-down" data-aos-delay={(index % 4) * 100}>
            <Card
              className="relative group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg p-0 pb-2"
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

                  {/* <h3 className="text-xl font-bold mb-1">{achievement.title}</h3> */}
                  <p className="text-xl font-semibold text-primary">{achievement.title}</p>

                </div>


              </CardContent>
            </Card>
          </div>)}
        </div>
      </div>
    </section>
  )
}
