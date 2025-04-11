"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Nayan Acharya. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in Nepal
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

