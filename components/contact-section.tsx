"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <a
            href="mailto:hello@nayan135.com.np"
            className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="font-medium text-xl">Email</p>
              <p className="text-gray-400">nayan374@proton.me</p>
            </div>
          </a>

          <a
            href="tel:+9779748703502"
            className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="font-medium text-xl">Phone</p>
              <p className="text-gray-400">+977 9748703502</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/nayan135"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[#0077B5]/20 flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-[#0077B5]" />
            </div>
            <div>
              <p className="font-medium text-xl">LinkedIn</p>
              <p className="text-gray-400">@nayan135</p>
            </div>
          </a>

          <a
            href="https://twitter.com/nooneknows135"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center">
              <Twitter className="w-6 h-6 text-[#1DA1F2]" />
            </div>
            <div>
              <p className="font-medium text-xl">Twitter</p>
              <p className="text-gray-400">@Nooneknows135</p>
            </div>
          </a>

          <a
            href="https://facebook.com/naa_13"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[#1877F2]/20 flex items-center justify-center">
              <Facebook className="w-6 h-6 text-[#1877F2]" />
            </div>
            <div>
              <p className="font-medium text-xl">Facebook</p>
              <p className="text-gray-400">@naa_13</p>
            </div>
          </a>

          <a
            href="https://instagram.com/naayan135"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[#E1306C]/20 flex items-center justify-center">
              <Instagram className="w-6 h-6 text-[#E1306C]" />
            </div>
            <div>
              <p className="font-medium text-xl">Instagram</p>
              <p className="text-gray-400">@naayan135</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

