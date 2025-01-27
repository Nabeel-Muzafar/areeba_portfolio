import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  { id: 1, title: "3D Character Animation", image: "/placeholder.svg?height=200&width=300", category: "Blender" },
  { id: 2, title: "Commercial Video Edit", image: "/placeholder.svg?height=200&width=300", category: "Premiere Pro" },
  { id: 3, title: "VFX Breakdown", image: "/placeholder.svg?height=200&width=300", category: "After Effects" },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-muted-foreground">{project.category}</span>
              <Link href={`/projects/${project.id}`} passHref>
                <Button variant="outline">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

