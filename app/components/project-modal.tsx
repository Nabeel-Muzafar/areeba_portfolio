import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Project } from "../data/projects"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    if (!project) return null

    const handlePrevImage = () => {
        if (project.content.type === "gallery") {
            setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : project.content?.images.length - 1))
        }
    }

    const handleNextImage = () => {
        if (project.content.type === "gallery") {
            setCurrentImageIndex((prev) => (prev < project.content.images.length - 1 ? prev + 1 : 0))
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent className="sm:max-w-[800px] " >
                <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    {project.content.type === "video" ? (
                        <video src={project.content.url} controls className="w-full h-[50vh]" />
                    ) : (
                        <div className="relative">
                            <Image
                                src={project.content.type === "gallery" ? project.content.images[currentImageIndex] : project.content.url || "/placeholder.svg"}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                            {project.content.type === "gallery" && project.content.images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </button>
                                    <button
                                        onClick={handleNextImage}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <p className="mt-2 font-semibold">Category: {project.category}</p>
            </DialogContent>
        </Dialog>
    )
}

