import React from "react";
import { motion } from "motion/react";
import { Building2, Calendar, ChevronRight, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="w-full py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #DC143C 1px, transparent 1px),
            linear-gradient(to bottom, #DC143C 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <motion.div
        className="absolute top-20 left-1/3 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Briefcase className="text-red-500" size={28} />
            <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">Experience</span>
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
            Professional Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Building real-world impact through enterprise software.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-500/50 to-transparent -translate-x-1/2 hidden sm:block" />

          {/* Experience Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-col sm:flex-row items-center sm:justify-between w-full mb-12 group"
          >
            {/* Timeline node */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              className="hidden sm:flex absolute left-[50%] -translate-x-1/2 w-20 h-20 rounded-3xl glass-effect border-2 border-red-500 items-center justify-center z-10 cinematic-shadow bg-black/80 p-2 overflow-hidden"
            >
              <img src="/src/Assets/kuraz tech logo.jpg" alt="Kuraz Technologies" className="w-full h-full object-contain rounded-2xl" />
            </motion.div>

            {/* Date Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full sm:w-[45%] flex sm:justify-end pb-4 sm:pb-0 sm:pr-12"
            >
              <div className="inline-flex items-center gap-2 text-sm font-bold text-red-500 glass-effect border border-red-500/30 px-6 py-3 rounded-full red-glow">
                <Calendar size={18} />
                2025 - 2026
              </div>
            </motion.div>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full sm:w-[45%] sm:pl-12"
            >
              <div className="glass-effect p-8 rounded-3xl border-2 border-red-500/30 cinematic-shadow hover:border-red-500/50 transition-all duration-500 card-3d group-hover:scale-105">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Software Engineering Intern
                </h3>
                <h4 className="text-xl font-semibold text-red-500 mb-6">
                  Kuraz Technologies
                </h4>
                
                <ul className="space-y-4">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <ChevronRight size={20} className="mt-0.5 text-red-500 shrink-0" />
                    <span>Contributed to enterprise-grade web applications using React and Node.js.</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <ChevronRight size={20} className="mt-0.5 text-red-500 shrink-0" />
                    <span>Optimized database queries, <span className="text-red-400 font-bold">improving performance by 30%</span>.</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <ChevronRight size={20} className="mt-0.5 text-red-500 shrink-0" />
                    <span>Implemented complex UI components from high-fidelity Figma designs.</span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
