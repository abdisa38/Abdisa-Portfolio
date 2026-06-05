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

      <motion.div 
        style={{ y }}
        className="max-w-7xl mx-auto px-6 z-10 w-full grid lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-8"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.2s ease-out',
          }}
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
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
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
I am a Full-Stack Software Engineer focused on designing, developing, and deploying robust AI-powered systems and enterprise applications.

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
              className="group relative inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden red-glow-hover magnetic-btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 glass-effect border-glow text-white px-8 py-4 rounded-xl font-semibold hover-lift"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              Download Resume
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-red-500/20"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + i * 0.1, type: "spring" }}
                className="flex flex-col gap-1 group cursor-pointer"
              >
                <span className="text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Code Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative hidden lg:block h-[600px] parallax-container"
          style={{
            transform: `rotateX(${mousePosition.y / 5}deg) rotateY(${-mousePosition.x / 5}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
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
                abdisa@cinematic:~
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
                  role: <span className="text-green-400">'Full-Stack Engineer'</span>,
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1 }}
                  className="pl-4"
                >
                  stack: [<span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'Node'</span>, <span className="text-yellow-300">'AI'</span>],
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3 }}
                  className="pl-4"
                >
                  passion: <span className="text-green-400">'3D Experiences'</span>,
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
                  async function <span className="text-blue-400">createMagic</span>() {'{'}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.1 }}
                  className="pl-4 text-gray-500"
                >
                  // Deploying cinematic experience...
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.3 }}
                  className="pl-4"
                >
                  await developer.<span className="text-blue-300">build</span>(<span className="text-green-400">'NextGen App'</span>);
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
