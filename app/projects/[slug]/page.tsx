"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronLeft, Github, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"
import type { Project } from "@/lib/data"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { slug } = params

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find((p) => p.slug === slug)
      if (foundProject) {
        setProject(foundProject)
      } else {
        router.push("/projects")
      }
    }
  }, [slug, router])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white pt-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src={project.images?.[currentImageIndex] || project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-gray-400 text-lg">{project.description}</p>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: project.detailedDescription }} />
            </div>

            {/* Contributors */}
            <div className="pt-8">
              <h2 className="text-2xl font-semibold mb-4">Contributors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.contributors.map((contributor) => (
                  <a
                    key={contributor.name}
                    href={contributor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <img
                      src={contributor.avatar || "/placeholder.svg"}
                      alt={contributor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{contributor.name}</h3>
                      <p className="text-sm text-gray-400">{contributor.role}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

