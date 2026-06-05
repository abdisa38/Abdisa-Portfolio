import React from "react";
import { motion } from "motion/react";

export function TechStack() {
  const categories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
    },
    {
      name: "Database",
      skills: ["MongoDB", "PostgreSQL", "Prisma"],
    },
    {
      name: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "GitHub"],
    },
    {
      name: "AI & Modern",
      skills: ["OpenAI API", "LangChain", "Vector DBs"],
    },
  ];

  return (
    <section id="tech" className="w-full py-24 bg-slate-50 dark:bg-[#05081c] border-y border-slate-200 dark:border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive suite of modern technologies used to build scalable, high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:bg-white/[0.07] transition-all"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0a0f1c] text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
