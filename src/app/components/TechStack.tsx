import React from "react";
import { motion } from "motion/react";
import { Layers, Zap } from "lucide-react";

export function TechStack() {
  const categories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: "💻",
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "Python"],
      icon: "⚙️",
    },
    {
      name: "Database",
      skills: ["MongoDB", "MySql", "Postgresql"],
      icon: "🗄️",
    },
    {
      name: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "GitHub"],
      icon: "🚀",
    },
    {
      name: "AI & Modern",
      skills: ["OpenAI API", "LangChain", "Vector DBs"],
      icon: "🤖",
    },
  ];

  return (
    <section id="tech" className="w-full py-32 bg-[#0a0a0a] border-y border-red-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #DC143C 1px, transparent 1px),
            linear-gradient(to bottom, #DC143C 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }} />
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 rounded-full blur-[200px] opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Layers className="text-red-500" size={28} />
            <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">Tech Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
            style={{
              textShadow: '3px 3px 0px rgba(220, 20, 60, 0.3)',
            }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A comprehensive suite of modern technologies for building scalable, high-performance applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              
              <div className="relative p-8 rounded-3xl glass-effect border border-red-500/20 group-hover:border-red-500/40 cinematic-shadow transition-all duration-500">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 group-hover:animate-pulse" />
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 rounded-xl bg-black/50 text-sm font-medium text-gray-300 border border-red-500/20 hover:border-red-500 hover:text-white hover:bg-red-500/10 transition-all cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
