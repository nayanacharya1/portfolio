"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Briefcase, Code, Award, Layers, Mail, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: <Home className="w-6 h-6" /> },
  { name: "Technologies", href: "#technologies", icon: <Layers className="w-6 h-6" /> },
  { name: "Selected Works", href: "#selectedworks", icon: <Code className="w-6 h-6" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Skills", href: "#skills", icon: <Award className="w-6 h-6" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-6 h-6" /> },
  // You can uncomment this if you want the contributors page to be visible in navigation
  //{ name: "Contributors", href: "/contributors", icon: <Users className="w-6 h-6" /> }, 
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav')
      const navHeight = nav ? nav.offsetHeight : 0
      const threshold = 100 + navHeight // adjusted threshold
      const sections = navItems.map((item) => item.href.substring(1))

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= threshold && rect.bottom >= threshold) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation - Centered with only icons */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-40 pt-8">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a]/90 backdrop-blur-md rounded-full border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`p-2 rounded-full transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
                aria-label={item.name}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </motion.nav>
      </div>

      {/* Mobile Navigation Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-6 right-6 z-40 p-2 bg-[#1a1a1a]/90 backdrop-blur-md rounded-full border border-white/10 md:hidden"
      >
        <Menu className="w-6 h-6" />
      </motion.button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 text-xl ${
                    activeSection === item.href.substring(1) ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

