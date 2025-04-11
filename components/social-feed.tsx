"use client"

import { motion } from "framer-motion"

export default function SocialFeed() {
  return (
    <section id="social-feed" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          Social Feed
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg">
          Social media feed integration coming soon.
        </motion.p>
      </div>
    </section>
  )
}
