"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, MessageCircle, Mail, Plus, Minus, ArrowRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

// Expanded FAQ data with categories
const faqData = [
  {
    category: "Services & Expertise",
    items: [
      {
        question: "What technologies do you specialize in?",
        answer:
          "I primarily work with React, Next.js, TypeScript, and Tailwind CSS for frontend development. I'm also experienced with Node.js, Express, and various database technologies for backend work. My expertise extends to state management solutions like Redux and Zustand, as well as modern build tools and testing frameworks.",
      },
      {
        question: "What types of projects do you work on?",
        answer:
          "I focus on building responsive web applications, interactive dashboards, e-commerce platforms, and content management systems. I enjoy working on projects that require complex UI interactions, performance optimization, and scalable architecture.",
      },
      {
        question: "Do you provide design services as well?",
        answer:
          "While my primary focus is development, I have a strong eye for design and can provide UI/UX recommendations. For projects requiring comprehensive design work, I collaborate with talented designers to ensure a cohesive end product.",
      },
      {
        question: "How do you approach responsive design?",
        answer:
          "I follow a mobile-first approach, ensuring applications work flawlessly across all device sizes. I use modern CSS techniques like Flexbox, Grid, and responsive units, along with Tailwind's responsive utilities to create adaptive layouts that provide optimal user experience regardless of screen size.",
      },
    ],
  },
  {
    category: "Work Process",
    items: [
      {
        question: "What is your development process like?",
        answer:
          "My process typically includes discovery and requirements gathering, planning and architecture, iterative development with regular check-ins, thorough testing, and deployment. I emphasize clear communication throughout and adapt my approach based on project needs and client preferences.",
      },
      {
        question: "How do you handle project management?",
        answer:
          "I use tools like Jira, Trello, or GitHub Projects to track progress and manage tasks. I provide regular updates and maintain transparent communication through your preferred channels. For larger projects, I establish clear milestones and deliverables to ensure steady progress.",
      },
      {
        question: "What is your approach to code quality and testing?",
        answer:
          "I write clean, maintainable code following best practices and industry standards. I implement automated testing using frameworks like Jest and React Testing Library, and perform thorough manual testing to ensure functionality across different browsers and devices.",
      },
      {
        question: "How do you handle project revisions and feedback?",
        answer:
          "Feedback is an essential part of the development process. I welcome constructive criticism and implement revisions promptly. For larger changes that fall outside the original scope, we can discuss adjustments to the timeline or requirements as needed.",
      },
    ],
  },
  {
    category: "Collaboration & Availability",
    items: [
      {
        question: "Do you take freelance projects?",
        answer:
          "Yes, I accept freelance opportunities alongside my current projects. I'm selective about the projects I take on to ensure I can deliver the highest quality work for each client. I'm particularly interested in challenging projects that allow me to leverage my expertise and continue growing as a developer.",
      },
      {
        question: "How can I reach you?",
        answer:
          "You can reach me at nayan374@proton.me or through the contact form on this website. I'm also available on LinkedIn and GitHub. I typically respond to inquiries within 24-48 hours.",
      },
      {
        question: "What is your availability for new projects?",
        answer:
          "My availability varies throughout the year. Please contact me with details about your project, and I'll let you know my current availability and whether it aligns with your timeline. For projects with flexible start dates, I can often accommodate by scheduling in advance.",
      },
      {
        question: "Do you work remotely or on-site?",
        answer:
          "I primarily work remotely, which allows me to serve clients worldwide. However, for local clients or specific project needs, I'm open to on-site work or hybrid arrangements. I'm comfortable with various collaboration tools and can adapt to your team's workflow.",
      },
    ],
  },
  {
    category: "Pricing & Terms",
    items: [
      {
        question: "How do you structure your pricing?",
        answer:
          "I offer flexible pricing models including project-based quotes, hourly rates, and retainer arrangements. The most suitable option depends on your project's scope, complexity, and timeline. I provide detailed proposals outlining deliverables, timeline, and payment terms before beginning any work.",
      },
      {
        question: "What information do you need for a project quote?",
        answer:
          "To provide an accurate quote, I need details about your project goals, desired features, design requirements, timeline expectations, and any existing materials or code. The more information you can provide, the more precise my estimate will be.",
      },
      {
        question: "Do you offer maintenance services after project completion?",
        answer:
          "Yes, I offer ongoing maintenance and support services to ensure your application continues to run smoothly. This can include bug fixes, performance optimizations, security updates, and feature enhancements. We can discuss maintenance packages based on your specific needs.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "For most projects, I require a deposit before beginning work, with remaining payments tied to project milestones or deliverables. I accept payments via bank transfer, PayPal, or other secure payment methods. Detailed payment terms are outlined in the project proposal and contract.",
      },
    ],
  },
]

export default function EnhancedFAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([])
  const [filteredFaqs, setFilteredFaqs] = useState(faqData)
  const searchRef = useRef<HTMLInputElement>(null)

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredFaqs(faqData)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = faqData
      .map((category) => {
        const filteredItems = category.items.filter(
          (item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query),
        )
        return {
          ...category,
          items: filteredItems,
        }
      })
      .filter((category) => category.items.length > 0)

    setFilteredFaqs(filtered)

    // Auto-expand categories and questions that match search
    if (query.length > 2) {
      const matchedCategories = filtered.map((cat) => cat.category)
      setExpandedCategories(matchedCategories)

      const matchedQuestions = filtered.flatMap((cat) => cat.items.map((item) => `${cat.category}-${item.question}`))
      setExpandedQuestions(matchedQuestions)
    }
  }, [searchQuery])

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Toggle question expansion
  const toggleQuestion = (id: string) => {
    setExpandedQuestions((prev) => (prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]))
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery("")
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }

  return (
    <section id="faq" className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Header with animated gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center relative"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 inline-block relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Frequently Asked Questions
            </span>
            <motion.span
              className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Find answers to common questions about my services, process, and collaboration opportunities.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for questions..."
              className="w-full py-4 pl-12 pr-12 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 text-white placeholder-gray-500"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
              >
                <span className="text-sm mr-1">Clear</span>
                <span className="text-xs">×</span>
              </button>
            )}
          </div>

          {/* Search results count */}
          {searchQuery && (
            <div className="mt-2 text-sm text-gray-400">
              Found {filteredFaqs.reduce((acc, cat) => acc + cat.items.length, 0)} results
            </div>
          )}
        </motion.div>

        {/* FAQ Categories and Questions */}
        <div className="space-y-8">
          {filteredFaqs.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">No questions found matching "{searchQuery}"</p>
              <button onClick={clearSearch} className="text-purple-400 hover:text-purple-300 font-medium">
                Clear search and show all questions
              </button>
            </motion.div>
          ) : (
            filteredFaqs.map((category, catIdx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-800 rounded-xl overflow-hidden"
              >
                {/* Category header */}
                <button
                  onClick={() => toggleCategory(category.category)}
                  className={cn(
                    "w-full flex items-center justify-between p-6 text-left transition-colors",
                    expandedCategories.includes(category.category)
                      ? "bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-b border-gray-800"
                      : "bg-gray-900/50 hover:bg-gray-900/80",
                  )}
                >
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mr-3"></span>
                    {category.category}
                    <span className="ml-3 text-sm text-gray-500">({category.items.length})</span>
                  </h3>
                  <div
                    className={cn(
                      "w-6 h-6 flex items-center justify-center rounded-full transition-colors",
                      expandedCategories.includes(category.category)
                        ? "bg-purple-500/20 text-purple-400"
                        : "bg-gray-800 text-gray-400",
                    )}
                  >
                    {expandedCategories.includes(category.category) ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {/* Questions in this category */}
                <AnimatePresence>
                  {expandedCategories.includes(category.category) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="divide-y divide-gray-800/50">
                        {category.items.map((item, idx) => {
                          const questionId = `${category.category}-${item.question}`
                          const isExpanded = expandedQuestions.includes(questionId)

                          return (
                            <div key={idx} className="bg-gray-900/30">
                              <button
                                onClick={() => toggleQuestion(questionId)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-900/50 transition-colors"
                              >
                                <h4 className="text-lg font-medium pr-8">{item.question}</h4>
                                <div
                                  className={cn(
                                    "w-5 h-5 flex items-center justify-center rounded-full transition-colors",
                                    isExpanded
                                      ? "bg-blue-500/20 text-blue-400 rotate-180"
                                      : "bg-gray-800 text-gray-400",
                                  )}
                                >
                                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                                </div>
                              </button>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="p-5 pt-0 text-gray-400 leading-relaxed">
                                      <p>{item.answer}</p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>

        {/* Still have questions section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
              <p className="text-gray-400">
                Feel free to reach out directly if you couldn't find the answer you were looking for.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="mailto:nayan374@proton.me"
                whileHover={{ y: -3 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium text-white"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium text-white"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Form
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Resources section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 flex items-center justify-center gap-2">
            Check out my{" "}
            <a href="#blog" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
              blog posts <ExternalLink className="w-3 h-3 ml-1" />
            </a>{" "}
            for more detailed insights about my work and process.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

