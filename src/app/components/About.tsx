import React from "react";
import { motion } from "motion/react";
import { User, Code, Award, Briefcase } from "lucide-react";

export function About() {
  const timeline = [
    { 
      year: "Freshman - 2nd Year", 
      title: "Foundations & Bootcamp Immersion", 
      desc: "Began my software engineering journey at university, completing an intensive 6 month full-stack immersion across the Evangadi Full-Stack Bootcamp and WabiSkills mastering core computer science, modern JavaScript, and MERN stack architectures." 
    },
    { 
      year: "Industry Summer", 
      title: "Backend Engineer Intern @ Kuraz Technologies", 
      desc: "Following bootcamp completion, joined Kuraz Technologies for a 2 month summer backend internship. Engineered high-throughput REST APIs, optimized database queries with a 30% performance boost, and shipped enterprise microservices." 
    },

    { 
      year: "3rd Year - Present", 
      title: "CTC Software Development Leader @ MWU", 
      desc: "Appointed Software Development Leader for the CTC Club at Madda Walabu University. Directing system architecture, conducting code reviews, and mentoring fellow student engineers in production engineering standards." 
    },
    { 
      year: "4th Year & Beyond", 
      title: "AI Engineering & Autonomous Systems", 
      desc: "Advanced into specialized AI Engineering via Scrimba's AI Engineer program. Actively architecting large scale intelligent systems, LLM powered autonomous agents, vector search pipelines, and cutting edge software." 
    },
  ];

  return (
    <section id="about" className="w-full py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #DC143C 1px, transparent 1px),
            linear-gradient(to bottom, #DC143C 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="absolute top-40 left-20 w-96 h-96 bg-[radial-gradient(circle,_rgba(220,20,60,0.18)_0%,_transparent_70%)] pointer-events-none" />

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
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-red-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <img 
                src="/assets/Abdisa Awel profile.jpg"
                alt="Abdisa Awel Tahir"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            <div className="space-y-4 text-gray-400 leading-relaxed glass-effect p-6 rounded-2xl border border-red-500/20">
              <p className="text-gray-300 font-medium">
                I am a 4th-year Computer Science student and Full-Stack & AI Systems Engineer with 2+ years of rigorous experience architecting production applications from idea to deployment.
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
