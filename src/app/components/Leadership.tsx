import React from "react";
import { motion } from "motion/react";
import { Award, Users, Star, GraduationCap } from "lucide-react";

export function Leadership() {
  const certifications = [
    {
      title: "Internship Certificate",
      issuer: "Kuraz Technologies",
      icon: <Award className="text-emerald-500" size={24} />
    },
    {
      title: "Future Startup Founders",
      issuer: "Startup Incubation",
      icon: <Star className="text-yellow-500" size={24} />
    },
    {
      title: "Entrepreneurship Training",
      issuer: "Global Business Initiative",
      icon: <GraduationCap className="text-blue-500" size={24} />
    }
  ];

  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-[#05081c] border-y border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Leadership Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-1 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGRhc2hib2FyZCUyMGFuYWx5dGljcyUyMHNjcmVlbnxlbnwxfHx8fDE3ODAzNTQxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080')] opacity-10 bg-cover bg-center mix-blend-overlay" />
            <div className="bg-white dark:bg-[#0a0f1c] rounded-[1.4rem] p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <Users size={40} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-sm font-bold mb-4 uppercase tracking-wider">
                  Leadership
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  CTC Software Development Leader
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl leading-relaxed">
                  Led a team of developers to architect and implement the CTC Learning Management System. 
                  Responsible for conducting code reviews, establishing best practices, and mentoring junior 
                  developers in MERN stack technologies and modern software engineering principles.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:shadow-xl dark:hover:bg-white/[0.07] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#0a0f1c] flex items-center justify-center mb-6">
                {cert.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {cert.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
