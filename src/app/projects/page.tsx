"use client";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function ProjectLinks({ project }: { project: any }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  // If only one link, show single button
  if (project.link && !project.link2) {
    return (
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <ExternalLink size={18} className="text-gray-600" />
      </motion.a>
    );
  }

  // If two links, show dropdown
  if (project.link && project.link2) {
    return (
      <div className="relative" ref={dropdownRef}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowDropdown(!showDropdown)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ExternalLink size={18} className="text-gray-600" />
        </motion.button>
        
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setShowDropdown(false)}
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={14} />
                Web Crawler
              </div>
            </a>
            <a
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setShowDropdown(false)}
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={14} />
                Search Engine
              </div>
            </a>
          </div>
        )}
      </div>
    );
  }

  // If no links, return null
  return null;
}

export default function Projects() {
  // Category gradient mapping for consistency
  const categoryGradients: { [key: string]: string } = {
    "AI/ML": "from-blue-500 to-cyan-500",
    "Web Development": "from-blue-600 to-slate-600",
    "Mobile Development": "from-green-500 to-emerald-500",
  };

  const projects = [
    {
      name: "Search Engine & Web Crawler",
      description:
        "Built a scalable full-text search engine with multithreading, MinHash, and PageRank in SQLite. Features include web crawling, document indexing, and intelligent ranking algorithms.",
      tech: ["Python", "SQLite", "Multithreading", "MinHash", "PageRank"],
      categories: ["AI/ML"],
      logo: "/UCIlogo.jpg",
      link: "https://github.com/frankl7uci/CS121Project2t",
      link2: "https://github.com/maitreyyi/cs121searchengine"
    },
    {
      name: "Minecraft AI Agent",
      description:
        "Designed an AI agent in Microsoft Malmo using DFS and Q-learning for combat and navigation. The agent learns optimal strategies through reinforcement learning.",
      tech: ["Python", "Microsoft Malmo", "DFS", "Q-learning"],
      categories: ["AI/ML"],
      logo: "/Minecraft-Symbol.jpg",
      link: "https://github.com/MorStaWid/MalmoMinecraft",
    },
    {
      name: "COBA",
      description:
        "Built an interactive student networking platform using Next.js and React with real-time features. Enables students to connect, collaborate, and share resources.",
      tech: ["Next.js", "React", "Real-time", "WebSocket"],
      categories: ["Web Development"],
      logo: "/Cobaprofile.png",
      link: "https://github.com/billsusanto/Coba",
    },
    {
      name: "CareVoice",
      description:
        "Developed during the UC Berkeley AI Hackathon 2024. Designed and implemented the Swift-based frontend for a medical communication app improving doctor–patient clarity for elderly users, with a strong focus on accessibility and simplicity.",
      tech: ["Swift", "SwiftUI", "UI/UX Design", "Accessibility"],
      categories: ["Mobile Development", "AI/ML"],
      logo: "/Carevoiceprofile.png",
      link: "https://devpost.com/software/care-voice",
    },
    {
      name: "Indorder",
      description:
        "Built at Cerebral Beach Hacks 2024. Automated WhatsApp-based order processing using LLMs and Venom scraping, reducing manual workload for small business owners. Implemented a responsive Next.js dashboard for real-time order tracking and analytics.",
      tech: ["Next.js", "React", "LLMs", "Web Scraping", "Venom", "API Integration"],
      categories: ["Web Development", "AI/ML"],
      logo: "/Indorderprofile.png",
      link: "https://devpost.com/software/indorder",
    },
    {
      name: "VendorSync",
      description:
        "Created for the IEEE OC AI & Software Hackathon. Developed an AI-powered invoice processing and vendor analytics platform that extracts structured data in seconds and generates real-time vendor performance insights to support business decision-making.",
      tech: ["NestJS", "Next.js", "PostgreSQL", "OCR", "AI Analytics", "Clerk Auth"],
      categories: ["Web Development", "AI/ML"],
      logo: "/Vendorsyncprofile.png",
      link: "https://devpost.com/software/vendorsync",
    },
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in AI, web development, and software engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Card key={i} delay={i * 0.2}>
              <div className="space-y-6">
                {/* Project header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Project Logo */}
                    <div className="flex-shrink-0">
                      <img
                        src={project.logo}
                        alt={`${project.name} logo`}
                        className="w-16 h-16 object-contain rounded-lg"
                      />
                    </div>
                    
                    {/* Project Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        {project.categories.map((category, catIndex) => (
                          <span 
                            key={catIndex}
                            className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${categoryGradients[category]}`}
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* External Links */}
                  <ProjectLinks project={project} />
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Code size={16} />
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/morstawid"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
