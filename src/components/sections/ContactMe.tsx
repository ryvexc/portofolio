"use client"
import { useState } from "react"
import type React from "react"

import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Github, Linkedin, Twitter, Globe, Instagram } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Spotlight } from "../ui/spotlight-new"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

interface ContactInfo {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}

interface SocialLink {
  icon: React.ReactNode
  href: string
  color: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "ryvexc@gmail.com",
    href: "mailto:ryvexc@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+62 856 0461 8040",
    href: "tel:+6285604618040",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Malang, East Java",
  },
]

const socialLinks: SocialLink[] = [
  // {
  //   icon: <Github className="h-5 w-5" />,
  //   href: "https://github.com/yourusername",
  //   color: "hover:text-gray-900 dark:hover:text-white",
  // },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/arif-kurniawan-935a61307/",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    icon: <FontAwesomeIcon icon={faWhatsapp} className="text-2xl h-5 w-5" />,
    href: `https://wa.me/6285604618040?text=Halo%20mas%20Arif%2C%20saya%20mau%20buat%20website`,
    color: "hover:text-green-400 dark:hover:text-green-300",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    href: "https://www.instagram.com/ryve.tsx/",
    color: "hover:text-purple-600 dark:hover:text-purple-400",
  },
]

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const projectType = formData.get("projectType") as string;
    const budget = formData.get("budget") as string;
    const timeline = formData.get("timeline") as string;
    const message = formData.get("message") as string;

    const generatedWhatsappString = `
      Halo mas Arif, Saya ${name} menghubungi Anda melalui website Anda, Saya ingin membuat proyek dengan detail sebagai berikut:
      - Tipe Proyek: ${projectType}
      - Budget: ${budget}
      - Waktu Penyelesaian: ${timeline}
      
      Untuk detailnya
      ${message}
    `

    window.location.href = `https://wa.me/6285604618040?text=${encodeURIComponent(generatedWhatsappString)}`

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000)
  }

  return <>
    <div className="h-[20rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto text-center">
          Let's discuss your project and create something amazing together.
        </p>
      </div>
    </div>

    <div className="flex justify-center" id="contact-section">
      <div className="container">
        {/* Header */}
        {/* <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Mail className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0">
              <CardHeader>
                <CardTitle><h4>Send me a message</h4></CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Arif Kurniawan"
                          required
                          className="dark:bg-neutral-950"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="ryvexc@gmail.com"
                          required
                          className="dark:bg-neutral-950"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="w-full">
                        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                          Project Type
                        </label>
                        <Select name="projectType" required>
                          <SelectTrigger className="w-full dark:bg-neutral-950">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-app">Web Application</SelectItem>
                            <SelectItem value="mobile-app">Mobile Application</SelectItem>
                            <SelectItem value="ecommerce">E-commerce Site</SelectItem>
                            <SelectItem value="api">API Development</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                            <SelectItem value="maintenance">Maintenance/Updates</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="w-full">
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Budget Range
                        </label>
                        <Select name="budget" required>
                          <SelectTrigger className="w-full dark:bg-neutral-950">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under 500.000</SelectItem>
                            <SelectItem value="5k-10k">500.000 - 1.000.000</SelectItem>
                            <SelectItem value="10k-25k">1.000.000 - 2.000.000</SelectItem>
                            <SelectItem value="25k-50k">2.000.000 - 3.000.000</SelectItem>
                            <SelectItem value="50k-plus">3.000.000 - 5.000.000</SelectItem>
                            <SelectItem value="discuss">Let's Discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="w-full">
                        <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                          Project Timeline
                        </label>
                        <Select name="timeline" required>
                          <SelectTrigger className="w-full dark:bg-neutral-950">
                            <SelectValue placeholder="When do you need this completed?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="2-3-months">2-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="6-plus-months">6+ months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Saya ingin membuat website ... untuk ... saya dengan fitur ..."
                        rows={6}
                        required
                        className="dark:bg-neutral-950"
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-0">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 dark:bg-neutral-950 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-neutral-950 hover:bg-gray-100 dark:hover:bg-neutral-900 transition-colors ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </>
}
