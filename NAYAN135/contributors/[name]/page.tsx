"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Github, Linkedin, Twitter, Globe, Code, Award, Briefcase } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { contributorsData } from "@/lib/contributors-data"
import { projects } from "@/lib/data"

export default function ContributorProfilePage() {
  const params = useParams()
  const router = useRouter()
  const [contributor, setContributor] = useState(null)
  const [contributorProjects, setContributorProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.name) {
      const decodedName = decodeURIComponent(params.name as string)
      const contributorInfo = contributorsData[decodedName]

      if (contributorInfo) {
        setContributor(contributorInfo)

        // Find projects this contributor worked on
        const relatedProjects = projects.filter((project) => project.contributors.some((c) => c.name === decodedName))
        setContributorProjects(relatedProjects)

        setIsLoading(false)
      } else {
        // Contributor not found, redirect back to contributors page
        router.push("/contributors")
      }
    }
  }, [params.name, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    )
  }

  if (!contributor) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#111111] pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            href="/contributors"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Contributors
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src={contributor.avatar || "/placeholder.svg?height=200&width=200"}
                  alt={contributor.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-800"
                />
                <h1 className="text-2xl font-bold mt-4 text-white">{contributor.name}</h1>
                <p className="text-cyan-400 mt-1">{contributor.role}</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-6">
                {contributor.socialLinks.github && (
                  <a
                    href={contributor.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}

                {contributor.socialLinks.linkedin && (
                  <a
                    href={contributor.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}

                {contributor.socialLinks.twitter && (
                  <a
                    href={contributor.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}

                {contributor.socialLinks.website && (
                  <a
                    href={contributor.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-3 text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-400" />
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {contributor.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h2 className="text-lg font-medium mb-3 text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  Featured Projects
                </h2>
                <ul className="space-y-2">
                  {contributor.featuredProjects.map((project) => (
                    <li key={project} className="flex items-center gap-2 text-gray-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio and Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Bio */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden p-6 mb-8">
              <h2 className="text-xl font-medium mb-4 text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                About
              </h2>
              <p className="text-gray-300 leading-relaxed">{contributor.bio}</p>

              {contributor.testimonial && (
                <div className="mt-6 border-l-4 border-cyan-500 pl-4 italic text-gray-400">
                  "{contributor.testimonial}"
                </div>
              )}
            </div>

            {/* Projects */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden p-6">
              <h2 className="text-xl font-medium mb-6 text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                Projects
              </h2>

              <div className="space-y-6">
                {contributorProjects.map((project) => (
                  <div key={project.title} className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src={project.image || "/placeholder.svg?height=80&width=80"}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                      <div className="flex gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                        >
                          <Github className="w-3 h-3" />
                          GitHub
                        </a>

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                          >
                            <Globe className="w-3 h-3" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

