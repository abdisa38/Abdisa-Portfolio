import React from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

export function Contact() {
  const links = [
    { name: "Email", icon: <Mail size={24} />, href: "mailto:hello@example.com", color: "bg-red-500/10 text-red-500" },
    { name: "LinkedIn", icon: <Linkedin size={24} />, href: "#", color: "bg-blue-600/10 text-blue-600" },
    { name: "GitHub", icon: <Github size={24} />, href: "#", color: "bg-slate-800/10 text-slate-800 dark:bg-white/10 dark:text-white" },
    { name: "Telegram", icon: <Send size={24} />, href: "#", color: "bg-sky-500/10 text-sky-500" },
  ];

  return (
    <section id="contact" className="w-full py-32 bg-slate-50 dark:bg-[#05081c] border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Let's Build Something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Amazing Together.
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
            Currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href="mailto:hello@example.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 dark:bg-white dark:text-slate-900 font-pj rounded-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 dark:focus:ring-white mb-16"
          >
            <span className="mr-2 text-lg">Say Hello</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <span className="font-semibold text-slate-900 dark:text-white">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
