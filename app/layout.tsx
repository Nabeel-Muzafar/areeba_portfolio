import "./globals.css"
import { Poppins } from "next/font/google"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Areeba Nabeel - 3D & Video Professional",
  description: "Portfolio of Areeba Nabeel, specializing in Blender, After Effects, and Premiere Pro",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 fixed top-0 w-full border-b">
            <div className="container flex h-16 items-center justify-between mx-auto">
              <Link href="/" className="font-bold text-2xl gradient-text">
                Areeba Nabeel
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
                <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
              <Link href={"https://www.upwork.com/freelancers/~01451f5a56fe23e261?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~01451f5a56fe23e261%2Fprofile"}><Button>Hire Me</Button></Link>
            </div>
          </header>
          {children}
          <footer className="bg-background py-8 mx-auto">
            <div className="container text-center">
              <p className="text-muted-foreground">© {new Date().getFullYear()} Areeba Nabeel. All rights reserved.</p>
              {/* <div className="mt-4 flex justify-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </Link>
          </div> */}
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

