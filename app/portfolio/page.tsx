'use client'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Project, projects } from '../data/projects'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProjectModal } from '../components/project-modal'

const page = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    }
    return (
        <>
            <div className="mx-auto py-16 my-4">
                <section id="portfolio" className="px-4 py-8 md:py-8 bg-muted">
                    <motion.div
                        className="container"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text" variants={fadeIn}>
                            Our Projects
                        </motion.h2>
                        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={stagger}>
                            {projects.map((project) => (
                                <motion.div key={project.id} variants={fadeIn}>
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
                    </motion.div>
                </section>
            </div>
            <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />

        </>
    )
}

export default page