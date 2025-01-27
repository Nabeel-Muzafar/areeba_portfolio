import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "3D Character Animation",
    image: "/placeholder.svg?height=400&width=600",
    category: "Blender",
    description: "A detailed 3D character animation showcasing fluid movements and expressive gestures.",
  },
  {
    id: 2,
    title: "Commercial Video Edit",
    image: "/placeholder.svg?height=400&width=600",
    category: "Premiere Pro",
    description: "A dynamic commercial video edit with seamless transitions and engaging pacing.",
  },
  {
    id: 3,
    title: "VFX Breakdown",
    image: "/placeholder.svg?height=400&width=600",
    category: "After Effects",
    description:
      "A comprehensive VFX breakdown revealing the layers of effects applied to create a stunning visual sequence.",
  },
  // Add more projects as needed
]

export default function Project({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <Card>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-96 object-cover rounded-md mb-4"
          />
          <p className="text-lg mb-4">{project.description}</p>
          <p className="text-sm text-muted-foreground">Category: {project.category}</p>
        </CardContent>
      </Card>
    </div>
  )
}

