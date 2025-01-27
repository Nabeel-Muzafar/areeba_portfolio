import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Areeba Nabeel
          </Link>
          <div className="space-x-4">
            <Link href="/about" passHref>
              <Button variant="ghost">About</Button>
            </Link>
            <Link href="/projects" passHref>
              <Button variant="ghost">Projects</Button>
            </Link>
            <Link href="/skills" passHref>
              <Button variant="ghost">Skills</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="primary">Contact</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

