"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, TrendingUp, Code, Users, Zap } from "lucide-react";

export default function MobileExperienceSection() {
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
      gradient: "from-green-500 to-emerald-500",
    }
  ];

  return (
    <section id="experience" className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight pb-2">
          Experience
        </h2>
        <p className="text-gray-600">
          My journey in software development
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-5 shadow-md"
          >
            {/* Header with logo */}
            <div className="flex items-start gap-3 mb-4">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h3>
                <p className="text-sm font-semibold text-gray-700">{exp.company}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Badge and date */}
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-2 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${exp.gradient}`}>
                {exp.type}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar size={12} />
                <span>{exp.date}</span>
              </div>
            </div>

            {/* Details */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-1">
                <TrendingUp size={14} />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-1">
                <Zap size={14} />
                {exp.type === "Part-time" ? "Skills Used" : "Technologies Used"}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill, k) => (
                  <span
                    key={k}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {skill}
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

