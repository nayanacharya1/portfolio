"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/data"
import { useRouter } from "next/navigation"

// Extract all unique contributors from projects
const extractContributors = () => {
  const contributorsMap = new Map()

  projects.forEach((project) => {
    project.contributors.forEach((contributor) => {
      if (!contributorsMap.has(contributor.name)) {
        contributorsMap.set(contributor.name, {
          ...contributor,
          projects: [project.title],
        })
      } else {
        const existingContributor = contributorsMap.get(contributor.name)
        if (!existingContributor.projects.includes(project.title)) {
          existingContributor.projects.push(project.title)
        }
      }
    })
  })

  return Array.from(contributorsMap.values())
}

export default function ContributorsPage() {
  const [contributors, setContributors] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    setContributors(extractContributors())
    setIsLoading(false)
  }, [])

  const handleContributorClick = (name: string) => {
    // Navigate to the contributor's profile page
    router.push(`/contributors/${encodeURIComponent(name)}`)
  }

  return (
    <div className="min-h-screen bg-[#111111] pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="px-4 py-2 bg-gray-800/50 rounded-full text-sm text-gray-400">Secret Page</div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Project Contributors
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            A special thanks to all the amazing people who have contributed to my projects.
            <span className="block mt-2 text-sm text-cyan-400">
              Click on a contributor to view their detailed profile.
            </span>
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-500/30 transition-colors cursor-pointer group"
                onClick={() => handleContributorClick(contributor.name)}
              >
                <div className="p-6 relative">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex items-center gap-4 mb-4 relative">
                    <img
                      src={contributor.avatar || "/placeholder.svg?height=80&width=80"}
                      alt={contributor.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-700 group-hover:border-cyan-500 transition-colors"
                    />
                    <div>
                      <h3 className="text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                        {contributor.name}
                      </h3>
                      <p className="text-gray-400">{contributor.role}</p>
                    </div>
                  </div>

                  <div className="mb-4 relative">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Contributed to:</h4>
                    <div className="flex flex-wrap gap-2">
                      {contributor.projects.map((project) => (
                        <span key={project} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center relative">
                    {contributor.link && (
                      <a
                        href={contributor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}

                    <span className="text-sm text-gray-400 flex items-center gap-1 group-hover:text-white transition-colors">
                      View Profile <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-6 bg-gray-900/30 border border-gray-800 rounded-lg"
        >
          <h2 className="text-xl font-medium mb-4 text-white">About This Page</h2>
          <p className="text-gray-400">
            This is a secret page dedicated to acknowledging all the contributors who have helped make these projects
            possible. Their expertise, dedication, and collaborative spirit have been invaluable to the success of each
            project.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            This page is not linked from the main navigation and can only be accessed directly via URL.
          </div>
        </motion.div>
      </div>
    </div>
  )
}

