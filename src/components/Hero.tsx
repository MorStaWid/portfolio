"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-10 lg:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto px-6"
      >
        {/* Profile image with modern styling */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-6 lg:mb-8"
        >
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <img
              src="/profile.jpg"
              alt="Morgan Widjaja"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white animate-pulse" />
        </motion.div>

        {/* Name with gradient text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 lg:mb-4 leading-tight pb-2"
        >
          Morgan Widjaja
        </motion.h1>

        {/* Subtitle with typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 lg:mb-8 font-light flex flex-wrap items-center justify-center gap-x-2 lg:gap-x-4"
        >
          <span className="inline-block">Software Engineer</span>
          <span className="text-blue-400">•</span>
          <span className="inline-block">AI Developer</span>
          <span className="text-blue-400">•</span>
          <span className="inline-block">Frontend Specialist</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mb-8 lg:mb-12 leading-relaxed px-4"
        >
          Building intelligent, user-centered applications that bridge the gap between AI, design, and usability.
        </motion.p>

        {/* Social links with modern buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12 px-4"
        >
          <motion.a
            href="mailto:mogistanlee@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
          >
            <Mail size={18} className="lg:w-5 lg:h-5" />
            <span>Email</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/morstawid"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
          >
            <Linkedin size={18} className="lg:w-5 lg:h-5" />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/morstawid"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
          >
            <Github size={18} className="lg:w-5 lg:h-5" />
            <span>GitHub</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-xs lg:text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="lg:w-6 lg:h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
