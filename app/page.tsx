"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Award, Users, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { projects, Project } from "./data/projects"
import { ProjectModal } from "./components/project-modal"



const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  // const portfolio = [
  //   {
  //     title: "1",
  //     category: CATEGORY["3D"],
  //     thumnail: "/",
  //     video_url: "/"
  //   }
  // ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    console.log('public data', formData, process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

    try {
      const result = await emailjs.send(
        "service_hlzd3ym",
        "template_8e5ku1d",
        formData,
        {
          publicKey: "7cMTocZc0H41HotRE"
        }
        // process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )

      console.log(result.text)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Failed to send email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="mx-auto">


      <main className="flex-grow ">
        <section className="px-8 py-24 md:py-32 bg-gradient-to-b from-background via-background to-muted">
          <motion.div
            className="container flex flex-col md:flex-row items-center justify-between gap-8"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div className="flex-1 text-center md:text-left" variants={fadeIn}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Bringing Ideas to Life with 3D & Video
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Specializing in Blender, After Effects, and Premiere Pro
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Showreel
                </Button>
              </div>
            </motion.div>
            <motion.div className="flex-1 relative" variants={fadeIn}>
              <Image
                src="/areeba_main.jpeg"
                alt="3D Render"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-4 -left-4 bg-background p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className="font-bold">3+ Years Experience</p>
                <p className="text-muted-foreground">in 3D & Video Production</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <motion.div
            className="container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text" variants={fadeIn}>
              About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div variants={fadeIn}>
                <p className="text-lg mb-4">
                  Hello! I'm Areeba Nabeel, a passionate creative professional specializing in 3D modeling with Blender
                  and video editing with After Effects and Premiere Pro. With years of experience in the field, I've
                  honed my skills to deliver high-quality, visually stunning content for a variety of clients and
                  projects.
                </p>
                <p className="text-lg mb-4">
                  My journey in the world of digital art and video production began with a fascination for bringing
                  ideas to life through visual storytelling. Over the years, I've worked on numerous projects ranging
                  from short films and commercials to 3D animations and visual effects.
                </p>
                {/* <Button variant="outline" size="lg">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
              </motion.div>
              <motion.div className="grid grid-cols-2 gap-4" variants={stagger}>
                <motion.div variants={fadeIn}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <Award className="h-12 w-12 mb-4 text-primary" />
                      <h3 className="text-2xl font-bold mb-2">50+</h3>
                      <p className="text-center text-muted-foreground">Projects Completed</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <Users className="h-12 w-12 mb-4 text-primary" />
                      <h3 className="text-2xl font-bold mb-2">25+</h3>
                      <p className="text-center text-muted-foreground">Satisfied Clients</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn} className="col-span-2">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <Mail className="h-12 w-12 mb-4 text-primary" />
                      <Link href={'/#contact'}><Button variant="outline">Get in Touch</Button></Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="portfolio" className="px-4 py-8 md:py-8 bg-muted">
          <motion.div
            className="container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text" variants={fadeIn}>
              Featured Projects
            </motion.h2>
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={stagger}>
              {projects.map((project) => (
                project.type === "Featured" && <motion.div key={project.id} variants={fadeIn}>
                  <Card className="overflow-hidden group">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <Image
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                      />
                    </motion.div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 h-[70px]">{project.description}</p>
                      <div className="flex justify-between  items-center">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                          View Project
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="text-center mt-12" variants={fadeIn}>
              <Link href={'/portfolio'}><Button size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section id="skills" className="py-16 md:py-24">
          <motion.div
            className="container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text" variants={fadeIn}>
              My Skills
            </motion.h2>
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={stagger}>
              {[
                { name: "3d Animation", level: 92 },
                { name: "Environment Design", level: 90 },
                { name: "Lighting and Texturing", level: 88 },
                { name: "Rigging", level: 85 },
                { name: "Visual Effects (VFX)", level: 87 },
                { name: "Motion Graphics", level: 89 },
                { name: "Rendering Optimization", level: 88 },
                { name: "Scene Composition", level: 90 },
                { name: "3D Modeling", level: 91 },
                { name: "Cinematic Editing", level: 87 },
                { name: "Color Grading", level: 86 },
                { name: "Audio Synchronization", level: 85 },
                { name: "Video Transitions", level: 88 },
                { name: "Clip Sequencing", level: 89 },
                { name: "Title Design", level: 86 },
                { name: "Post-Production Workflow", level: 87 },
              ].map((skill) => (
                <motion.div key={skill.name} variants={fadeIn}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                      <div className="w-full bg-muted rounded-full h-4 mb-2">
                        <motion.div
                          className="bg-primary h-4 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                      <p className="text-right text-sm text-muted-foreground">{skill.level}%</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-muted">
          <motion.div
            className="container"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text" variants={fadeIn}>
              Get in Touch
            </motion.h2>
            <motion.div variants={fadeIn}>
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-2 rounded-md border"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-2 rounded-md border"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded-md border"
                        rows={4}
                        placeholder="Your message here..."
                        required
                      ></textarea>
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                  {submitStatus === "success" && <p className="mt-4 text-green-600">Message sent successfully!</p>}
                  {submitStatus === "error" && (
                    <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </main>


      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

