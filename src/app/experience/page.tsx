"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, TrendingUp, Code, Users, Zap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "KeDA Tech",
      location: "Jakarta, Indonesia",
      date: "Jun 2024 – Aug 2024",
      type: "Internship",
      logo: "/keda_tech_logo.jpg",
      details: [
        "Spearheaded five A/B tests on blog layouts and content presentation and increasing click-through rates by 4%",
        "Engineered accessible, responsive interfaces with Next.js and TypeScript, achieving 95% automated WCAG compliance",
        "Optimized backend APIs with Node.js and Express.js using caching and query refactoring, improving data retrieval efficiency by 20%",
      ],
      skills: ["Next.js", "TypeScript", "Node.js", "Express.js", "A/B Testing", "Accessibility"],
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Front End Developer",
      company: "Wilco Baja Galvalum",
      location: "Jakarta, Indonesia",
      date: "Jun 2023 – Aug 2023",
      type: "Internship",
      logo: "/wilcoGalvalume.jpg",
      details: [
        "Developed and deployed responsive landing pages using HTML5, CSS3, and JavaScript, achieving 30% faster load times",
        "Rebuilt the company website with cross-functional teams, improving mobile usability and increasing session time by 25%",
        "Refactored code and optimized asset loading, reducing bounce rate by 18%",
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Performance Optimization", "UI/UX"],
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Student Worker",
      company: "Pasadena City College International Student Center",
      location: "Pasadena, United States",
      date: "Jun 2023 – Aug 2023",
      type: "Part-time",
      logo: "/pccisc.jpg",
      details: [
        "Conducted front desk operations, aiding students' campus transition, with a focus on timely support and cultural sensitivity",
        "Streamlined student record-keeping processes, ensuring data accuracy while assisting over 200 international students in their campus transition",
        "Led international student orientation for 100+ attendees, ensuring a smooth on boarding experience and fostering a culturally inclusive environment",
      ],
      skills: ["Administrative Support", "Data Entry", "Cross-Cultural Communication", "Team Coordination"],
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
    }
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in software development, from frontend optimization to full-stack engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-white">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${exp.gradient} flex items-center justify-center`}>
                      <IconComponent size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="ml-8 flex-1 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          {/* Company Logo */}
                          <div className="flex-shrink-0">
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-16 h-16 object-contain rounded-lg"
                            />
                          </div>
                          
                          {/* Title and Company Info */}
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-600">
                              <span className="font-semibold text-lg">{exp.company}</span>
                              <div className="flex items-center gap-1">
                                <MapPin size={16} />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-2">
                          <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${exp.gradient}`}>
                            {exp.type}
                          </span>
                          <div className="flex items-center gap-1 text-gray-500">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                          <TrendingUp size={20} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                          <Zap size={20} />
                          {exp.type === "Part-time" ? "Skills Used" : "Technologies Used"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, k) => (
                            <span
                              key={k}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
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
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
