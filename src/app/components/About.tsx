import React from "react";
import { motion } from "motion/react";
import { User, Code, Award, Briefcase } from "lucide-react";

export function About() {
  const timeline = [
    { year: "The Beginning", title: "Started Coding", desc: "Discovered a passion for programming and computer science basics." },
    { year: "Skill Building", title: "Mastering MERN", desc: "Deep dive into MongoDB, Express, React, and Node.js." },
    { year: "Industry", title: "Software Eng. Internship", desc: "Kuraz Technologies - built real-world enterprise tools." },
    { year: "Leadership", title: "Tech Leadership", desc: "Led the CTC Software Development team, mentoring peers." },
    { year: "Production", title: "Real-world Projects", desc: "Deployed multiple applications serving real users." },
    { year: "Present", title: "AI & Scalable Systems", desc: "Currently building intelligent tools and complex management systems." },
  ];

  return (
    <section id="about" className="w-full py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #DC143C 1px, transparent 1px),
            linear-gradient(to bottom, #DC143C 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <motion.div
        className="absolute top-40 left-20 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex flex-col gap-6 md:sticky md:top-24"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-3"
              >
                <User className="text-red-500" size={24} />
                <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">About Me</span>
              </motion.div>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-3"
                style={{
                  textShadow: '3px 3px 0px rgba(220, 20, 60, 0.3)',
                }}
              >
                My Journey
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative rounded-3xl overflow-hidden aspect-square border-2 border-red-500/30 cinematic-shadow card-3d group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
              <div className="absolute inset-0 bg-red-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1705645930353-0e335311ef20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbiUyMHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MXx8fHwxNzgwMzU0MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Abdisa Awel Tahir"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <div className="space-y-4 text-gray-400 leading-relaxed glass-effect p-6 rounded-2xl border border-red-500/20">
              <p className="text-gray-300">
                I am a Computer Science student with over 2 years of rigorous experience building production-ready applications from idea to deployment.
              </p>
              <p>
                My focus is on creating scalable architectures, intuitive user interfaces, and integrating AI to solve complex business problems.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <div className="relative pl-8 border-l-2 border-red-500/30 space-y-12 py-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-3 border-red-500 group-hover:bg-red-600 transition-all shadow-lg shadow-red-500/50"
                  />
                  
                  <div className="glass-effect p-6 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all hover-lift">
                    <span className="text-sm font-bold text-red-500 tracking-wider uppercase">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
