"use client";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function ProjectLinks({ project }: { project: any }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  if (project.link && !project.link2) {
    return (
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.95 }}
        className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <ExternalLink size={16} className="text-gray-600" />
      </motion.a>
    );
  }

  if (project.link && project.link2) {
    return (
      <div className="relative" ref={dropdownRef}>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowDropdown(!showDropdown)}
          className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ExternalLink size={16} className="text-gray-600" />
        </motion.button>
        
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setShowDropdown(false)}
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={12} />
                Web Crawler
              </div>
            </a>
            <a
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setShowDropdown(false)}
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={12} />
                Search Engine
              </div>
            </a>
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default function MobileProjectsSection() {
  const categoryGradients: { [key: string]: string } = {
    "AI/ML": "from-blue-500 to-cyan-500",
    "Web Development": "from-blue-600 to-slate-600",
    "Mobile Development": "from-green-500 to-emerald-500",
  };

  const projects = [
    {
      name: "Search Engine & Web Crawler",
      description: "Built a scalable full-text search engine with multithreading, MinHash, and PageRank in SQLite.",
      tech: ["Python", "SQLite", "Multithreading", "MinHash", "PageRank"],
      categories: ["AI/ML"],
      logo: "/UCIlogo.jpg",
      link: "https://github.com/frankl7uci/CS121Project2t",
      link2: "https://github.com/maitreyyi/cs121searchengine"
    },
    {
      name: "Minecraft AI Agent",
      description: "Designed an AI agent in Microsoft Malmo using DFS and Q-learning for combat and navigation.",
      tech: ["Python", "Microsoft Malmo", "DFS", "Q-learning"],
      categories: ["AI/ML"],
      logo: "/Minecraft-Symbol.jpg",
      link: "https://github.com/MorStaWid/MalmoMinecraft",
    },
    {
      name: "COBA",
      description: "Built an interactive student networking platform using Next.js and React with real-time features.",
      tech: ["Next.js", "React", "Real-time", "WebSocket"],
      categories: ["Web Development"],
      logo: "/Cobaprofile.png",
      link: "https://github.com/billsusanto/Coba",
    },
    {
      name: "CareVoice",
      description: "Swift-based medical communication app improving doctor–patient clarity for elderly users.",
      tech: ["Swift", "SwiftUI", "UI/UX Design", "Accessibility"],
      categories: ["Mobile Development", "AI/ML"],
      logo: "/Carevoiceprofile.png",
      link: "https://devpost.com/software/care-voice",
    },
    {
      name: "Indorder",
      description: "Automated WhatsApp-based order processing using LLMs and Venom scraping.",
      tech: ["Next.js", "React", "LLMs", "Web Scraping", "Venom"],
      categories: ["Web Development", "AI/ML"],
      logo: "/Indorderprofile.png",
      link: "https://devpost.com/software/indorder",
    },
    {
      name: "VendorSync",
      description: "AI-powered invoice processing and vendor analytics platform with real-time insights.",
      tech: ["NestJS", "Next.js", "PostgreSQL", "OCR", "AI Analytics"],
      categories: ["Web Development", "AI/ML"],
      logo: "/Vendorsyncprofile.png",
      link: "https://devpost.com/software/vendorsync",
    },
  ];

  return (
    <section id="projects" className="py-12 px-4 bg-gray-50/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight pb-2">
          Projects
        </h2>
        <p className="text-gray-600">
          Featured work and hackathon projects
        </p>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-5 shadow-md"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                    {project.categories.map((category, catIndex) => (
                      <span 
                        key={catIndex}
                        className={`px-2 py-0.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${categoryGradients[category]}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                </div>
              </div>
              <ProjectLinks project={project} />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech stack */}
            <div>
              <div className="flex items-center gap-1 text-xs font-semibold text-gray-700 mb-2">
                <Code size={12} />
                Technologies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

