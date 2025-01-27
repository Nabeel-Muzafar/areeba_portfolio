import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <Card>
        <CardHeader>
          <CardTitle>Areeba Nabeel</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Hello! I'm Areeba Nabeel, a passionate creative professional specializing in 3D modeling with Blender and
            video editing with After Effects and Premiere Pro. With years of experience in the field, I've honed my
            skills to deliver high-quality, visually stunning content for a variety of clients and projects.
          </p>
          <p className="mb-4">
            My journey in the world of digital art and video production began with a fascination for bringing ideas to
            life through visual storytelling. Over the years, I've worked on numerous projects ranging from short films
            and commercials to 3D animations and visual effects.
          </p>
          <p>
            I'm always excited to take on new challenges and push the boundaries of what's possible in the realm of
            digital creation. Whether you need a complex 3D model, a polished video edit, or eye-catching visual
            effects, I'm here to help bring your vision to reality.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

