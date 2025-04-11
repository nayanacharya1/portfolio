"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink, ChevronDown } from "lucide-react"
import { projects } from "@/lib/data"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  // Show only 3 projects initially, or all if showAllProjects is true
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3)

  return (
    <section id="selectedworks" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Selected Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                <img
                  src={project.image || "/placeholder.svg?height=300&width=600"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-medium">{project.title}</h3>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-400 line-clamp-2">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {!showAllProjects && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAllProjects(true)}
              className="flex items-center gap-2 mx-auto px-6 py-3 bg-white/10 rounded-lg hover:bg-white/15 transition-colors"
            >
              View More 
              <ChevronDown className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#1a1a1a] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image || "/placeholder.svg?height=400&width=800"}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-80 object-cover rounded-t-lg"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h2>
                      <p className="text-gray-400">{selectedProject.description}</p>
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        GitHub
                      </a>
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-lg hover:bg-cyan-500/30 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Contributors */}
                  <div className="mt-8">
                    <h3 className="text-xl font-medium mb-4">Contributors</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedProject.contributors.map((contributor) => (
                        <a
                          key={contributor.name}
                          href={contributor.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <img
                            src={contributor.avatar || "/placeholder.svg?height=40&width=40"}
                            alt={contributor.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium">{contributor.name}</p>
                            <p className="text-sm text-gray-400">{contributor.role}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Detailed Case Study */}
                  {selectedProject.caseStudy && (
                    <>
                      <h3 className="text-xl font-medium mt-6 mb-4">Case Study</h3>
                      <div className="prose text-gray-300">
                        {selectedProject.caseStudy}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

