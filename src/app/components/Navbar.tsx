import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 40;
          setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-effect cinematic-shadow py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="flex items-center gap-3 group relative cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Custom Tech Emblem */}
          <div className="relative w-11 h-11 flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 via-red-500 to-red-400 rounded-xl blur-sm opacity-60 group-hover:opacity-100 group-hover:blur-md transition-all duration-300 pointer-events-none" />
            
            {/* Emblem Frame */}
            <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-black via-zinc-950 to-black border border-red-500/50 p-2 flex items-center justify-center shadow-lg group-hover:border-red-400 transition-colors">
              <svg 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full text-red-500 group-hover:text-red-400 transition-colors"
              >
                <path 
                  d="M16 4L6 26H11L13.5 20H18.5L21 26H26L16 4Z" 
                  fill="url(#logo-grad-1)" 
                />
                <path 
                  d="M16 11L14.4 16H17.6L16 11Z" 
                  fill="#000000" 
                />
                <path 
                  d="M10 20L16 8L22 20" 
                  stroke="#FF2A55" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <circle cx="16" cy="16" r="1.5" fill="#FFFFFF" />
                <defs>
                  <linearGradient id="logo-grad-1" x1="6" y1="4" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF1E46" />
                    <stop offset="0.5" stopColor="#DC143C" />
                    <stop offset="1" stopColor="#8B0000" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Typography Brandmark */}
          <div className="flex flex-col">
            <div className="flex items-center text-lg font-black tracking-tight text-white group-hover:text-white transition-colors">
              <span>ABDISA</span>
              <span className="text-red-500 font-mono ml-0.5 group-hover:animate-pulse">.</span>
              <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 ml-2 rounded-md bg-red-500/10 border border-red-500/30 text-red-400">DEV</span>
            </div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-gray-400 -mt-1">Full-Stack & AI</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-red-500 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-red-500/20 pl-6">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/abdisa38"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/abdisa-awel"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-red-500 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-effect border-b border-red-500/20 cinematic-shadow py-6 px-6 flex flex-col gap-6 md:hidden"
        >
          <ul className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-red-500 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
