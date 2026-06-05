import React from "react";
import { motion } from "motion/react";
import { Github, GitPullRequest, GitCommit, GitBranch } from "lucide-react";

export function GithubImpact() {
  const stats = [
    { label: "Total Repositories", value: "67+", icon: <Github size={20} /> },
    { label: "Total Contributions", value: "1450+", icon: <GitCommit size={20} /> },
    { label: "Pull Requests", value: "120+", icon: <GitPullRequest size={20} /> },
    { label: "Open Source", value: "Ready", icon: <GitBranch size={20} /> },
  ];

  // Generate a mock contribution graph
  const generateGraph = () => {
    const weeks = 52;
    const days = 7;
    const graph = [];
    
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        // Randomly assign contribution levels 0-4
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
      case 1: return "bg-emerald-900/40 dark:bg-emerald-900/60";
      case 2: return "bg-emerald-700/60 dark:bg-emerald-700";
      case 3: return "bg-emerald-500/80 dark:bg-emerald-500";
      case 4: return "bg-emerald-400 dark:bg-emerald-400";
      default: return "bg-slate-100 dark:bg-white/5";
    }
  };

  return (
    <section className="w-full py-24 bg-white dark:bg-[#030614]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">GitHub Impact</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A track record of continuous learning, building, and contributing to the open-source community.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 overflow-hidden shadow-sm"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Github size={20} />
              Contribution Graph
            </h3>
            <div className="text-sm text-slate-500 flex items-center gap-2">
              Less
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map(level => (
                  <div key={level} className={`w-3 h-3 rounded-sm ${getColor(level)}`} />
                ))}
              </div>
              More
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-4">
            <div className="flex gap-1 min-w-max">
              {graphData.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((level, dIdx) => (
                    <div 
                      key={`${wIdx}-${dIdx}`} 
                      className={`w-3 h-3 rounded-sm ${getColor(level)} hover:ring-2 ring-slate-400 dark:ring-white transition-all duration-200 cursor-pointer`}
                      title={`${level} contributions on this day`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 pt-6 border-t border-slate-200 dark:border-white/10">
            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium mr-2">Top Technologies:</span>
            {["JavaScript", "TypeScript", "Python", "Java", "C++"].map(tech => (
              <span key={tech} className="flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                <div className={`w-2.5 h-2.5 rounded-full ${
                  tech === 'JavaScript' ? 'bg-yellow-400' :
                  tech === 'TypeScript' ? 'bg-blue-500' :
                  tech === 'Python' ? 'bg-blue-300' :
                  tech === 'Java' ? 'bg-orange-500' : 'bg-pink-500'
                }`} />
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
