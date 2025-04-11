"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 font-poppins">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Nayan Acharya
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl text-gray-300 mb-10">
              Full Stack <span className="text-pink-500">Developer</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 flex items-center justify-center md:justify-start">
              <MapPin className="w-6 h-6 text-pink-500 mr-3" />
              Butwal, NEPAL
            </p>

            <div className="mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg text-white font-medium text-xl shadow-lg shadow-pink-500/20"
              >
                View My Work
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Nayan Acharya"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-purple-500/30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

