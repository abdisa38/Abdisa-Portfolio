import React from "react";
import { motion } from "motion/react";

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
    <section id="about" className="w-full py-24 bg-white dark:bg-[#030614]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex flex-col gap-6 sticky top-24"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">About Me</h2>
              <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden aspect-square border border-slate-200 dark:border-white/10 shadow-xl bg-slate-100 dark:bg-white/5">
              <img 
                src="https://images.unsplash.com/photo-1705645930353-0e335311ef20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbiUyMHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MXx8fHwxNzgwMzU0MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Abdisa Awel Tahir"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am a Computer Science student with over 2 years of rigorous experience building production-ready applications from idea to deployment.
              </p>
              <p>
                My focus is on creating scalable architectures, intuitive user interfaces, and integrating AI to solve complex business problems.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <div className="relative pl-8 border-l border-slate-200 dark:border-white/10 space-y-12 py-4">
              {timeline.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white dark:bg-[#030614] border-2 border-blue-600 dark:border-blue-500 group-hover:bg-blue-600 transition-colors" />
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
