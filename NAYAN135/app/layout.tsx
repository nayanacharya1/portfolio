import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "@/styles/globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Nayan Acharya | Portfolio",
  description: "Full Stack Developer specializing in modern web technologies",
    generator: 'nayanacharya.xyz'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-inter bg-[#111111] text-white`}>
        <Navigation />
        {children}
      </body>
    </html> 
  )
}



import './globals.css'