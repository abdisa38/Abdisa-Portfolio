import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Terminal, Code2, Database, Cpu } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        targetX = (e.clientX - rect.left - rect.width / 2) / 25;
        targetY = (e.clientY - rect.top - rect.height / 2) / 25;

        if (!rafId) {
          rafId = requestAnimationFrame(() => {
            if (leftColRef.current) {
              leftColRef.current.style.transform = `translate3d(${targetX * 0.5}px, ${targetY * 0.5}px, 0)`;
            }
            if (terminalContainerRef.current) {
              terminalContainerRef.current.style.transform = `rotateX(${targetY * 0.4}deg) rotateY(${-targetX * 0.4}deg)`;
            }
            rafId = null;
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Repositories", value: "70+" },
    { label: "Contributions", value: "1500+" },
    { label: "Leadership", value: "CTC Lead" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      {/* Cinematic Background - Optimized GPU Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #DC143C 1px, transparent 1px),
              linear-gradient(to bottom, #DC143C 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }} />
        </div>
        
        {/* Hardware-Accelerated Glow Layers */}
        <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(220,20,60,0.22)_0%,_transparent_70%)]" />
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(220,20,60,0.18)_0%,_transparent_70%)]" />

        {/* Floating Particles */}
        {[10, 25, 40, 55, 70, 85, 20, 35, 65, 80, 15, 50, 75, 90].map((left, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-red-500 rounded-full particle"
            style={{
              left: `${left}%`,
              top: `${(i * 17) % 90 + 5}%`,
              opacity: 0.6,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div 
        className="max-w-7xl mx-auto px-6 z-10 w-full grid lg:grid-cols-2 gap-12 items-center"
      >
        <div
          ref={leftColRef}
          className="flex flex-col gap-8 will-change-transform"
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-red-500/30 text-red-500 text-sm font-medium w-max red-glow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            Available for new opportunities
          </motion.div>

          {/* Main Heading with 3D Effect */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block"
            >
              Building
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block neon-red"
              style={{
                textShadow: `
                  0 0 10px #DC143C,
                  0 0 20px #DC143C,
                  0 0 30px #DC143C,
                  0 0 40px #DC143C,
                  5px 5px 0px rgba(0,0,0,0.7)
                `
              }}
            >
             serious
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="block"
            >
            software.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-lg lg:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            Senior-oriented Full-Stack & AI Systems Engineer architecting robust enterprise backends, scalable web architectures, and autonomous AI-driven applications.
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 bg-black text-red-500 px-8 py-4 rounded-xl font-semibold overflow-hidden border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 magnetic-btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <motion.a
              href="/assets/Abdisa_Awel_Tahir_Resume.pdf"
              download="Abdisa_Awel_Tahir_Resume.pdf"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden red-glow-hover magnetic-btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={18} className="group-hover:animate-bounce" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.a>
          </motion.div>

          {/* Stats Grid - Enhanced Visibility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-red-500/20"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + i * 0.1, type: "spring" }}
                className="flex flex-col gap-1 group cursor-pointer"
              >
                <span className="text-2xl sm:text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3D Code Terminal */}
        <div
          ref={terminalContainerRef}
          className="relative hidden lg:block h-[600px] parallax-container will-change-transform"
        >
          {/* Floating Tech Icons */}
          <motion.div
            animate={{
              y: [-15, 15, -15],
              rotateZ: [0, 5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[5%] left-[5%] z-20 glass-effect p-5 rounded-2xl cinematic-shadow border-glow hover-lift"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white">
              <Code2 size={24} />
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [15, -15, 15],
              rotateZ: [0, -5, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[15%] right-[-5%] z-20 glass-effect p-5 rounded-2xl cinematic-shadow border-glow hover-lift"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white">
              <Database size={24} />
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [10, -10, 10],
              rotateZ: [0, 3, 0],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[40%] right-[15%] z-20 glass-effect p-5 rounded-2xl cinematic-shadow border-glow hover-lift"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white">
              <Cpu size={24} />
            </div>
          </motion.div>

          {/* Main Terminal Card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 to-red-900/30 rounded-[3rem] blur-3xl transform rotate-6" />
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5 }}
            className="card-3d relative h-full glass-effect rounded-[2.5rem] cinematic-shadow overflow-hidden flex flex-col"
            style={{
              border: '2px solid rgba(220, 20, 60, 0.3)',
            }}
          >
            {/* Terminal Header */}
            <div className="h-14 border-b border-red-500/20 flex items-center px-6 gap-3 bg-black/60">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
              </div>
              <div className="mx-auto glass-effect px-4 py-1.5 rounded-lg text-xs text-gray-300 font-mono flex items-center gap-2 border border-red-500/20">
                <Terminal size={14} className="text-red-500" />
                abdisa@code:~
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm text-gray-300 flex-1 overflow-hidden bg-black/80 relative">
              <div className="absolute top-0 left-0 w-10 h-full border-r border-red-500/10 bg-black/60 text-right pr-3 pt-8 text-gray-600 select-none hidden sm:block">
                {[...Array(15)].map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="pl-0 sm:pl-12 space-y-1">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-red-400"
                >
                  const <span className="text-red-300">developer</span> = {'{'} 
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  className="pl-4"
                >
                  name: <span className="text-green-400">'Abdisa Awel Tahir'</span>,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 }}
                  className="pl-4"
                >
                  role: <span className="text-green-400">'Senior Full-Stack & AI Engineer'</span>,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1 }}
                  className="pl-4"
                >
                  stack: [<span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'Node'</span>, <span className="text-yellow-300">'Python'</span>, <span className="text-yellow-300">'AI/LLM'</span>],
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3 }}
                  className="pl-4"
                >
                  focus: <span className="text-green-400">'Distributed Systems & AI Agents'</span>,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="pl-4"
                >
                  theme: <span className="text-red-400">'Cinematic'</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.7 }}
                  className="text-red-400"
                >
                  {'};'}
                </motion.p>
                <br/>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.9 }}
                  className="text-purple-400"
                >
                  async function <span className="text-blue-400">shipArchitecture</span>() {'{'}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.1 }}
                  className="pl-4 text-gray-500"
                >
                  // Deploying mission-critical system...
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.3 }}
                  className="pl-4"
                >
                  await developer.<span className="text-blue-300">deployProduction</span>(<span className="text-green-400">'HighImpact AI App'</span>);
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                  className="text-purple-400"
                >
                  {'}'}
                </motion.p>
                <br/>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 3.7, duration: 1, repeat: Infinity }}
                  className="flex items-center gap-2"
                >
                  <span className="text-red-500">▶</span>
                  <span className="text-gray-400">Running...</span>
                  <span className="inline-block w-2 h-4 bg-red-500 animate-pulse ml-1" />
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
