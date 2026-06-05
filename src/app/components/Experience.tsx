import React from "react";
import { motion } from "motion/react";
import { Building2, Calendar, ChevronRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="w-full py-24 bg-white dark:bg-[#030614]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Experience</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Professional trajectory and industry impact.
          </p>
        </div>

        <div className="relative pl-4 sm:pl-0">
          {/* Main timeline line for desktop */}
          <div className="hidden sm:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10 -translate-x-1/2" />

          {/* Single Experience Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col sm:flex-row items-center sm:justify-between w-full mb-12 group"
          >
            {/* Timeline node */}
            <div className="hidden sm:flex absolute left-[50%] -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-[#0a0f1c] border-4 border-blue-500 items-center justify-center z-10">
              <Building2 size={20} className="text-blue-500" />
            </div>

            {/* Left side (Date) */}
            <div className="w-full sm:w-[45%] flex sm:justify-end pb-4 sm:pb-0 sm:pr-8">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-full">
                <Calendar size={16} />
                2023 - Present
              </div>
            </div>

            {/* Right side (Content) */}
            <div className="w-full sm:w-[45%] sm:pl-8">
              <div className="bg-slate-50 dark:bg-[#0a0f1c] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  Software Engineering Intern
                </h3>
                <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-6">
                  Kuraz Technologies
                </h4>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <ChevronRight size={18} className="mt-0.5 text-blue-500 shrink-0" />
                    <span>Contributed to the development of enterprise-grade web applications using React and Node.js.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <ChevronRight size={18} className="mt-0.5 text-blue-500 shrink-0" />
                    <span>Collaborated closely with senior engineers to optimize database queries, improving performance by 30%.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <ChevronRight size={18} className="mt-0.5 text-blue-500 shrink-0" />
                    <span>Implemented complex UI components translating high-fidelity Figma designs into responsive code.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
