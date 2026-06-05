import React from "react";
import { motion } from "motion/react";
import { Github, GitPullRequest, GitCommit, GitBranch, Activity } from "lucide-react";

export function GithubImpact() {
  const stats = [
    { label: "Total Repositories", value: "67+", icon: <Github size={24} /> },
    { label: "Total Contributions", value: "1450+", icon: <GitCommit size={24} /> },
    { label: "Pull Requests", value: "120+", icon: <GitPullRequest size={24} /> },
    { label: "Open Source", value: "Ready", icon: <GitBranch size={24} /> },
  ];

  // Generate a mock contribution graph
  const generateGraph = () => {
    const weeks = 52;
    const days = 7;
    const graph = [];
    
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        const level = Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0;
        week.push(level);
      }
      graph.push(week);
    }
    return graph;
  };

  const graphData = generateGraph();

  const getColor = (level: number) => {
    switch (level) {
      case 1: return "bg-red-900/40";
      case 2: return "bg-red-700/60";
      case 3: return "bg-red-500/80";
      case 4: return "bg-red-500";
      default: return "bg-gray-900";
    }
  };

  return (
    <section className="w-full py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #DC143C 1px, transparent 1px),
            linear-gradient(to bottom, #DC143C 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600 rounded-full blur-[180px] opacity-15"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Activity className="text-red-500" size={28} />
            <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">GitHub Impact</span>
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
            Contribution History
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Continuous learning, building, and contributing to the developer community.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative glass-effect border border-red-500/30 group-hover:border-red-500/50 rounded-3xl p-8 flex flex-col items-center text-center cinematic-shadow transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm font-medium text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect border-2 border-red-500/30 rounded-3xl p-10 overflow-hidden cinematic-shadow"
        >
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <h3 className="font-bold text-white text-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Github size={24} className="text-red-500" />
              </div>
              Contribution Graph
            </h3>
            <div className="text-sm text-gray-400 flex items-center gap-3">
              <span>Less</span>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3, 4].map(level => (
                  <div key={level} className={`w-4 h-4 rounded ${getColor(level)} border border-red-500/20`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-4">
            <div className="flex gap-1.5 min-w-max">
              {graphData.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <motion.div
                      key={`${wIdx}-${dIdx}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (wIdx * 0.005) }}
                      whileHover={{ scale: 1.3 }}
                      className={`w-3.5 h-3.5 rounded ${getColor(level)} border border-red-500/20 hover:border-red-500 transition-all duration-200 cursor-pointer`}
                      title={`${level} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-5 pt-8 border-t border-red-500/20">
            <span className="text-sm text-gray-400 font-bold mr-2">Top Technologies:</span>
            {["JavaScript", "TypeScript", "Python", "Java", "C++"].map(tech => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 text-sm font-semibold text-gray-300 glass-effect px-4 py-2 rounded-full border border-red-500/20 hover:border-red-500/40 transition-all cursor-pointer"
              >
                <div className={`w-3 h-3 rounded-full shadow-lg ${
                  tech === 'JavaScript' ? 'bg-yellow-400 shadow-yellow-400/50' :
                  tech === 'TypeScript' ? 'bg-blue-500 shadow-blue-500/50' :
                  tech === 'Python' ? 'bg-blue-300 shadow-blue-300/50' :
                  tech === 'Java' ? 'bg-orange-500 shadow-orange-500/50' : 'bg-pink-500 shadow-pink-500/50'
                }`} />
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
