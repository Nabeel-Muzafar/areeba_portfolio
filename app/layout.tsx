import "./globals.css"
import { Poppins } from "next/font/google"
import { motion } from "framer-motion"

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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

