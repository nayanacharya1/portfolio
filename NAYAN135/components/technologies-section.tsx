"use client"

import { motion } from "framer-motion"
import {
  SiFigma,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiMongodb,
  SiLinux,
  SiC,
  SiCplusplus,
  SiPhp,
} from "react-icons/si"

const technologies = [
  { name: "Figma", icon: SiFigma, color: "#F24E1E", description: "Design tool" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "JavaScript but safer" },
  { name: "React", icon: SiReact, color: "#61DAFB", description: "JavaScript library" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", description: "React framework" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", description: "CSS framework" },
  { name: "Git", icon: SiGit, color: "#F05032", description: "Version control" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", description: "NoSQL database" },
  { name: "Linux", icon: SiLinux, color: "#FFF", description: "Operating system" },
  { name: "C", icon: SiC, color: "#A8B9CC", description: "Low-level programming" },
  { name: "C++", icon: SiCplusplus, color: "#00599C", description: "High-performance programming" },
  { name: "PHP", icon: SiPhp, color: "#787CB5", description: "Server scripting language" },
]

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Current Technologies
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I'm proficient in a range of modern technologies that empower me to build highly functional solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-lg blur" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full hover:border-white/20 transition-colors">
                {tech.icon && (
                  <tech.icon className="w-12 h-12 mb-4 transition-colors" style={{ color: tech.color }} />
                )}
                <h3 className="font-medium text-xl text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

