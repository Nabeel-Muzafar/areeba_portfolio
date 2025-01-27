import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  // { name: "Character Design", level: 92 },
  { name: "Environment Design", level: 90 },
  { name: "Lighting and Texturing", level: 88 },
  { name: "Rigging", level: 85 },
  { name: "Visual Effects (VFX)", level: 87 },
  { name: "Motion Graphics", level: 89 },
  { name: "Rendering Optimization", level: 88 },
  { name: "Scene Composition", level: 90 },
  // { name: "3D Sculpting", level: 91 },
  { name: "Cinematic Editing", level: 87 },
  { name: "Color Grading", level: 86 },
  { name: "Audio Synchronization", level: 85 },
  { name: "Video Transitions", level: 88 },
  { name: "Clip Sequencing", level: 89 },
  { name: "Title Design", level: 86 },
  { name: "Post-Production Workflow", level: 87 },
];

export default function Skills() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <Card key={skill.name}>
            <CardHeader>
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={skill.level} className="w-full" />
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

