import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Github, ExternalLink, ArrowRight, Sparkles } from "lucide-react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "EthioLegalAI",
      description: "An AI-powered legal assistant designed to navigate and simplify Ethiopian law. Built to democratize legal access with natural language processing.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGxlZ2FsJTIwc2NhbGVzJTIwZnV0dXJpc3RpYyUyMHRlY2glMjBibHVlfGVufDF8fHx8MTc4MDM1NDE0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "TypeScript", "OpenAI", "Prisma"],
      metrics: ["Reduced research time by 80%", "Processed 10k+ queries"],
      github: "#",
      demo: "#"
    },
    {
      title: "MWU Laptop Exit Verification System",
      description: "Enterprise security solution for university campus hardware tracking. Features real-time scanning, automated verification, and analytics dashboards.",
      image: "https://images.unsplash.com/photo-1762681829391-74e80741e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBzZWN1cml0eSUyMGxvY2slMjBtb2Rlcm4lMjB0ZWNofGVufDF8fHx8MTc4MDM1NDE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB", "QR Integration"],
      metrics: ["Secured 5,000+ devices", "Zero unauthorized exits"],
      github: "#",
      demo: "#"
    },
    {
      title: "CTC Learning Management System",
      description: "A comprehensive educational platform designed to streamline course delivery, assignments, and student progress tracking for modern institutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGRhc2hib2FyZCUyMGFuYWx5dGljcyUyMHNjcmVlbnxlbnwxfHx8fDE3ODAzNTQxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["MERN Stack", "Redux", "AWS S3", "Socket.io"],
      metrics: ["Active 2,000+ users", "99.9% Uptime"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="w-full py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #DC143C 1px, transparent 1px),
            linear-gradient(to bottom, #DC143C 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }} />
      </div>

      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="text-red-500" size={24} />
              <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">Featured Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold tracking-tight text-white mb-4"
              style={{
                textShadow: '3px 3px 0px rgba(220, 20, 60, 0.3)',
              }}
            >
              Cinematic Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400"
            >
              Enterprise applications and AI systems crafted with precision and innovation.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="group inline-flex items-center gap-2 text-red-500 font-medium hover:gap-4 transition-all"
          >
            View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-[#0a0f1c] aspect-[4/3] border border-slate-200 dark:border-white/10 group shadow-2xl">
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-white/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 py-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200 dark:border-white/10 my-2">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a href={project.demo} className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a href={project.github} className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                    <Github size={18} />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
