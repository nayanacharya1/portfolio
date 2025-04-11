"use client"

import { motion } from "framer-motion"

const timelineItems = [
  { year: "2023", title: "Senior Developer", description: "Scaled web applications and led a team." },
  { year: "2021", title: "Frontend Developer", description: "Built interactive user interfaces with React and Next.js." },
  { year: "2019", title: "Junior Developer", description: "Gained foundational experience in full stack development." },
]

export default function Timeline() {
  return (
    <section id="experience" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            My Journey
          </h2>
        </motion.div>
        <div className="space-y-8">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-900/50 rounded-lg"
            >
              <h3 className="text-2xl font-semibold">
                {item.year} - {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
