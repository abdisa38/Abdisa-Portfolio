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

        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  className="relative rounded-3xl overflow-hidden aspect-[4/3] group card-3d"
                  whileHover={{ scale: 1.02 }}
                  style={{
                    transform: hoveredIndex === idx ? 'rotateY(5deg) rotateX(5deg)' : 'rotateY(0deg) rotateX(0deg)',
                    transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  {/* Red Border Glow */}
                  <div className="absolute inset-0 border-2 border-red-500/30 rounded-3xl z-10 group-hover:border-red-500 transition-all duration-500" />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
                  <div className="absolute inset-0 bg-red-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: hoveredIndex === idx ? 1 : 0 }}
                      className="glass-effect px-6 py-3 rounded-full border border-red-500/50 text-white font-semibold flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      View Project
                    </motion.div>
                  </div>

                  {/* Cinematic Shadow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 to-transparent blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors"
                    style={{
                      textShadow: hoveredIndex === idx ? '2px 2px 0px rgba(220, 20, 60, 0.4)' : 'none',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Tech Tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 glass-effect border border-red-500/30 text-red-400 rounded-full text-sm font-medium hover:border-red-500 hover:bg-red-500/10 transition-all cursor-pointer"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Metrics */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-4 py-6 border-y border-red-500/20"
                >
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                      {metric}
                    </div>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4 pt-2"
                >
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    className="group relative inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden red-glow-hover"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <ExternalLink size={18} />
                      Live Demo
                    </span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="group inline-flex items-center gap-2 glass-effect border-glow text-white px-8 py-4 rounded-xl font-semibold"
                  >
                    <Github size={18} className="group-hover:rotate-12 transition-transform" />
                    Source
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
