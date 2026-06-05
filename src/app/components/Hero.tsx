import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Download, Terminal, Code2, Database, Zap, Cpu } from "lucide-react";
import { useSpring, animated } from '@react-spring/web';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Repositories", value: "67+" },
    { label: "Contributions", value: "1450+" },
    { label: "Internship", value: "Completed" },
  ];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity }}
      className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #DC143C 1px, transparent 1px),
              linear-gradient(to bottom, #DC143C 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }} />
        </div>
        
        {/* Red Glow Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-red-500 rounded-full blur-[130px]"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-500/20 w-max">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Building Real-World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Digital Solutions
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            I design, develop, and deploy scalable web applications, AI-powered systems, and enterprise solutions that make an impact.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[10%] z-20 bg-white dark:bg-[#0a0f1c] p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
              <Code2 size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Frontend</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">React & Next.js</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] right-[0%] z-20 bg-white dark:bg-[#0a0f1c] p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
              <Database size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Backend</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Node & MongoDB</p>
            </div>
          </motion.div>

          {/* Main Visual */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-[2.5rem] blur-2xl transform rotate-3" />
          <div className="absolute inset-0 bg-slate-900 dark:bg-[#0a0f1c] rounded-[2rem] border border-slate-800 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col">
            <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-slate-800/50 dark:bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto bg-slate-900/50 dark:bg-black/50 px-3 py-1 rounded-md text-xs text-slate-400 font-mono flex items-center gap-2">
                <Terminal size={12} />
                abdisa@portfolio:~
              </div>
            </div>
            <div className="p-6 font-mono text-sm text-slate-300 flex-1 overflow-hidden bg-[#0d1117] relative">
              <div className="absolute top-0 left-0 w-8 h-full border-r border-white/5 bg-[#0d1117] text-right pr-2 pt-6 text-slate-600 select-none hidden sm:block">
                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
              </div>
              <div className="pl-0 sm:pl-10">
                <p className="text-purple-400">const <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="pl-4">name: <span className="text-green-400">'Abdisa Awel Tahir'</span>,</p>
                <p className="pl-4">role: <span className="text-green-400">'Full-Stack Engineer'</span>,</p>
                <p className="pl-4">skills: ['<span className="text-yellow-300">React</span>', '<span className="text-yellow-300">Next.js</span>', '<span className="text-yellow-300">Node</span>'],</p>
                <p className="pl-4">passionateAbout: <span className="text-green-400">'Building AI systems'</span></p>
                <p>{'};'}</p>
                <br/>
                <p className="text-purple-400">async function <span className="text-blue-400">init</span>() {'{'}</p>
                <p className="pl-4 text-slate-500">// Deploying next big thing...</p>
                <p className="pl-4">await developer.<span className="text-blue-300">build</span>(<span className="text-green-400">'Enterprise App'</span>);</p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
