"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { experiences } from "@/lib/data"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Briefcase, GraduationCap, Code } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function CareerShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToCard = (index: number) => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.experience-card')
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
    }
    setActiveIndex(index)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5" />
      case "contribution":
        return <Code className="w-5 h-5" />
      case "education":
        return <GraduationCap className="w-5 h-5" />
      default:
        return <Briefcase className="w-5 h-5" />
    }
  }

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "work":
        return "from-blue-600 to-teal-400 shadow-blue-500/20"
      case "contribution":
        return "from-purple-600 to-pink-400 shadow-purple-500/20"
      case "education":
        return "from-amber-500 to-orange-400 shadow-amber-500/20"
      default:
        return "from-blue-600 to-teal-400 shadow-blue-500/20"
    }
  }

  return (
    <section id="career" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Career Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore the milestones that have shaped my professional path
          </p>
        </motion.div>

        {/* Navigation controls */}
        <div className="flex justify-between items-center mb-8 px-4">
          <button 
            onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
            className="p-2 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex space-x-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  activeIndex === index 
                    ? "bg-blue-400 w-5" 
                    : "bg-slate-700 hover:bg-slate-600"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={() => scrollToCard(Math.min(experiences.length - 1, activeIndex + 1))}
            className="p-2 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
            disabled={activeIndex === experiences.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Horizontal scrolling container */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="experience-card min-w-[300px] md:min-w-[400px] w-[85vw] md:w-[500px] snap-center mx-4 flex-shrink-0"
              onClick={() => setActiveIndex(index)}
            >
              <div className={cn(
                "h-full rounded-xl p-6 border border-slate-800 bg-slate-900/80 backdrop-blur-sm",
                "hover:shadow-lg transition-all duration-300",
                "hover:shadow-lg hover:border-slate-700",
                activeIndex === index ? "ring-2 ring-blue-500/50 shadow-lg" : ""
              )}>
                {/* Card header with icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br p-3 shadow-lg",
                      getTypeStyles(exp.type)
                    )}>
                      {getTypeIcon(exp.type)}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-slate-400">{exp.company}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline info */}
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-5 bg-slate-800/50 rounded-lg p-2.5">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>{exp.period}</span>
                  <span className="mx-1">•</span>
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 line-clamp-3">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-white">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-2.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                    {exp.achievements.length > 3 && (
                      <li className="text-sm text-blue-400 font-medium">+ {exp.achievements.length - 3} more achievements</li>
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
