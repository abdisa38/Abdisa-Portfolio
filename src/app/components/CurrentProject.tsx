import React from "react";
import { motion } from "motion/react";
import { Clock, CheckCircle2, CircleDashed, Rocket } from "lucide-react";

export function CurrentProject() {
  const roadmap = [
    { title: "Requirements & Architecture", status: "completed" },
    { title: "Database Schema & API Design", status: "completed" },
    { title: "Core System Development", status: "in-progress" },
    { title: "Security & Testing Integration", status: "pending" },
    { title: "Production Deployment", status: "pending" },
  ];

  return (
    <section className="w-full py-24 bg-slate-900 dark:bg-[#060a1f] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30 w-max">
              <Clock size={14} className="animate-pulse" />
              Currently Building
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              MWU Clearance <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Management System
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Digitizing and streamlining the entire university clearance process. 
              Eliminating paper trails, reducing processing time from weeks to days, and providing real-time tracking for thousands of students and administrative staff.
            </p>

            <div className="flex flex-col gap-4 mt-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3 text-white font-medium mb-2">
                <Rocket size={20} className="text-emerald-400" />
                Projected Impact
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5" />
                  Serve over 10,000 graduating students annually.
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5" />
                  Connect 15+ university departments in a single unified dashboard.
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5" />
                  Reduce carbon footprint by eliminating over 50,000 paper forms.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0a0f1c] border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-8">Development Roadmap</h3>
            
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              {roadmap.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0f1c] text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                    {item.status === 'completed' ? (
                      <CheckCircle2 size={20} className="text-emerald-400" />
                    ) : item.status === 'in-progress' ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                    ) : (
                      <CircleDashed size={20} className="text-slate-600" />
                    )}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur shadow-sm transition-all group-hover:bg-white/[0.04]">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-semibold ${
                        item.status === 'completed' ? 'text-white' : 
                        item.status === 'in-progress' ? 'text-blue-300' : 'text-slate-500'
                      }`}>
                        {item.title}
                      </h4>
                    </div>
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
