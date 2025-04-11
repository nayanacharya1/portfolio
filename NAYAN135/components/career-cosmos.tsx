"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Award, Briefcase, GraduationCap, Code } from "lucide-react"
import { cn } from "@/lib/utils"

// Example data built into the component
const experiences = [
  {
    id: "exp1",
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    period: "2020 - Present",
    location: "San Francisco, CA",
    type: "work",
    description:
      "Led the development of responsive web applications using React, Next.js, and TypeScript. Collaborated with designers and backend engineers to implement new features and improve user experience.",
    achievements: [
      "Reduced page load time by 40% through code optimization and implementing lazy loading techniques",
      "Developed a component library that increased team productivity by 25%",
      "Mentored junior developers and conducted code reviews to ensure high quality standards",
      "Implemented CI/CD pipelines that reduced deployment time by 60%",
    ],
  },
  {
    id: "exp2",
    title: "Frontend Developer",
    company: "InnovateTech",
    period: "2018 - 2020",
    location: "Austin, TX",
    type: "work",
    description:
      "Developed and maintained client-facing applications using React and Redux. Worked closely with UX designers to implement responsive designs and ensure cross-browser compatibility.",
    achievements: [
      "Built a real-time dashboard that increased customer engagement by 35%",
      "Implemented automated testing that reduced bugs in production by 45%",
      "Optimized application performance resulting in 30% faster load times",
      "Contributed to the company's design system, improving consistency across products",
    ],
  },
  {
    id: "exp3",
    title: "Open Source Contributor",
    company: "React Ecosystem",
    period: "2019 - Present",
    location: "Remote",
    type: "contribution",
    description:
      "Active contributor to several open-source projects in the React ecosystem. Focused on improving documentation, fixing bugs, and implementing new features to enhance developer experience.",
    achievements: [
      "Contributed 20+ pull requests to popular React libraries",
      "Created a widely-used utility package with over 50k monthly downloads",
      "Improved documentation that helped reduce common issues reported by 30%",
      "Presented at two community meetups on advanced React patterns",
    ],
  },
  {
    id: "exp4",
    title: "Computer Science Degree",
    company: "Tech University",
    period: "2014 - 2018",
    location: "Boston, MA",
    type: "education",
    description:
      "Completed a Bachelor's degree in Computer Science with a focus on web technologies and software engineering. Participated in various hackathons and coding competitions.",
    achievements: [
      "Graduated with honors (3.8 GPA)",
      "Developed a capstone project that won the department's innovation award",
      "Published a research paper on efficient state management in web applications",
      "Led the university's web development club for two years",
    ],
  },
]

export default function Milestones() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-rotate through experiences unless user is interacting
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovering])

  // Get type-specific styles and icons
  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "from-blue-500 to-cyan-400"
      case "contribution":
        return "from-purple-500 to-pink-400"
      case "education":
        return "from-amber-500 to-orange-400"
      default:
        return "from-blue-500 to-cyan-400"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "work":
        return "Professional"
      case "contribution":
        return "Contribution"
      case "education":
        return "Education"
      default:
        return "Experience"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-4 h-4" />
      case "contribution":
        return <Code className="w-4 h-4" />
      case "education":
        return <GraduationCap className="w-4 h-4" />
      default:
        return <Briefcase className="w-4 h-4" />
    }
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-950 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section title with creative design */}
        <div className="mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-center">
              <span className="inline-block relative">
                Milestones
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h2>
          </motion.div>

          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-32 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl" />
          </div>
        </div>

        {/* Experience navigation dots */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group relative"
                aria-label={`View experience ${index + 1}`}
              >
                <motion.div
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex === index ? "bg-white" : "bg-gray-600 hover:bg-gray-400",
                  )}
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    scale: activeIndex === index ? 1.25 : 1,
                  }}
                />
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -inset-2 rounded-full border border-white/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main experience display */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={containerRef}
        >
          {/* Progress bar */}
          <motion.div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-10"
            initial={{ width: "0%" }}
            animate={{
              width: isHovering ? "0%" : `${((activeIndex + 1) / experiences.length) * 100}%`,
            }}
            transition={{ duration: 5, ease: "linear" }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={experiences[activeIndex].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Background gradient based on experience type */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-0 opacity-10 bg-gradient-to-br",
                    getTypeColor(experiences[activeIndex].type),
                  )}
                />

                {/* Decorative patterns */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm relative z-10">
                {/* Left column - Company and title */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={cn(
                          "px-3 py-1.5 text-xs font-semibold rounded-full flex items-center gap-1.5 bg-gradient-to-r",
                          getTypeColor(experiences[activeIndex].type),
                        )}
                      >
                        {getTypeIcon(experiences[activeIndex].type)}
                        {getTypeLabel(experiences[activeIndex].type)}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {experiences[activeIndex].period}
                      </div>
                    </div>

                    <h3 className="text-4xl font-bold mb-3 leading-tight">{experiences[activeIndex].company}</h3>

                    <h4 className="text-xl text-gray-300 mb-6">{experiences[activeIndex].title}</h4>

                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                      <MapPin className="w-4 h-4" />
                      <span>{experiences[activeIndex].location}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white group w-fit mt-4 md:mt-0"
                  >
                    View details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>

                {/* Right column - Description and achievements */}
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <p className="text-gray-300 leading-relaxed">{experiences[activeIndex].description}</p>
                  </div>

                  <div className="mt-auto">
                    <h5 className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400 mb-4">
                      <Award className="w-4 h-4" />
                      Key Achievements
                    </h5>

                    <ul className="space-y-4">
                      {experiences[activeIndex].achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span
                            className={cn(
                              "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium flex-shrink-0",
                              "bg-gradient-to-br shadow-lg",
                              getTypeColor(experiences[activeIndex].type),
                            )}
                          >
                            {i + 1}
                          </span>
                          <span className="text-gray-200">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Experience navigation */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                whileHover={{ y: -5 }}
                className={cn(
                  "p-4 rounded-xl transition-all duration-300 border relative overflow-hidden",
                  activeIndex === index
                    ? "bg-white/10 border-white/20"
                    : "bg-white/5 border-transparent hover:bg-white/10",
                )}
              >
                {/* Background gradient */}
                {activeIndex === index && (
                  <motion.div
                    className={cn("absolute inset-0 opacity-20 bg-gradient-to-br", getTypeColor(exp.type))}
                    layoutId="activeCardBg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-2">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        `bg-gradient-to-r ${getTypeColor(exp.type)}`,
                      )}
                    >
                      {getTypeIcon(exp.type)}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-center">{exp.company}</p>
                  <p className="text-xs text-gray-400 text-center mt-1 line-clamp-1">{exp.title}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

