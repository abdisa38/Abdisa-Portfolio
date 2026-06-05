import React from "react";
import { motion } from "motion/react";
import { Clock, CheckCircle2, CircleDashed, Rocket, Target } from "lucide-react";

export function CurrentProject() {
  const roadmap = [
    { title: "Requirements & Architecture", status: "completed" },
    { title: "Database Schema & API Design", status: "completed" },
    { title: "Core System Development", status: "in-progress" },
    { title: "Security & Testing Integration", status: "pending" },
    { title: "Production Deployment", status: "pending" },
  ];

  return (
    <section className="w-full py-32 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, #DC143C 1px, transparent 0)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-red-500/30 text-red-500 text-sm font-semibold w-max red-glow"
            >
              <Clock size={16} className="animate-pulse" />
              Currently Building
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block"
              >
                MWU Clearance
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="block text-red-500"
                style={{
                  textShadow: '3px 3px 0px rgba(220, 20, 60, 0.4), 0 0 30px rgba(220, 20, 60, 0.5)',
                }}
              >
                Management System
              </motion.span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              Digitizing and streamlining the entire university clearance process. 
              Eliminating paper trails, reducing processing time from weeks to days, and providing real-time tracking for thousands of students and administrative staff.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 mt-4 glass-effect border border-red-500/30 p-8 rounded-3xl cinematic-shadow group hover:border-red-500/50 transition-all"
            >
              <div className="flex items-center gap-3 text-white font-bold text-xl mb-2">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Target size={20} className="text-red-500" />
                </div>
                Projected Impact
              </div>
              <ul className="space-y-4 text-gray-300">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shadow-lg shadow-red-500/50" />
                  Serve over <span className="text-red-400 font-bold">1,000 graduating students</span> annually.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shadow-lg shadow-red-500/50" />
                  Connect <span className="text-red-400 font-bold">15+ university departments</span> in a unified dashboard.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shadow-lg shadow-red-500/50" />
                  Reduce carbon footprint by eliminating over <span className="text-red-400 font-bold">50,000 paper forms</span>.
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-effect border-2 border-red-500/30 rounded-3xl p-8 cinematic-shadow card-3d"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Rocket className="text-red-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Development Roadmap</h3>
            </div>
            
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-red-500/50 before:to-transparent">
              {roadmap.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex items-center group"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-red-500/30 bg-black shadow-lg shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                    {item.status === 'completed' ? (
                      <CheckCircle2 size={24} className="text-green-400" />
                    ) : item.status === 'in-progress' ? (
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50" />
                    ) : (
                      <CircleDashed size={24} className="text-gray-600" />
                    )}
                  </div>
                  
                  <div className="ml-6 flex-1 p-4 rounded-xl border border-red-500/20 glass-effect transition-all group-hover:border-red-500/40 group-hover:bg-red-500/5">
                    <h4 className={`font-bold ${
                      item.status === 'completed' ? 'text-green-400' : 
                      item.status === 'in-progress' ? 'text-red-400' : 'text-gray-500'
                    }`}>
                      {item.title}
                    </h4>
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
