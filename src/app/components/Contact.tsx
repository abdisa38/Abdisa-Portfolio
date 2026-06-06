import React from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, ArrowUpRight, MessageCircle } from "lucide-react";

export function Contact() {
  const links = [
    { name: "Email", icon: <Mail size={28} />, href: "mailto:abdisaawel82@gmail.com", color: "bg-red-500/20 text-red-500" },
    { name: "LinkedIn", icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/abdisa-awel-92b963383/", color: "bg-red-600/20 text-red-400" },
    { name: "GitHub", icon: <Github size={28} />, href: "https://github.com/abdisa38", color: "bg-red-700/20 text-red-300" },
    { name: "Telegram", icon: <Send size={28} />, href: "https://t.me/bdisa38", color: "bg-red-800/20 text-red-200" },
  ];

  return (
    <section id="contact" className="w-full py-32 bg-black border-t border-red-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, #DC143C 2px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600 rounded-full blur-[200px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 rounded-3xl bg-red-500/20 flex items-center justify-center mb-8 cinematic-shadow"
          >
            <MessageCircle size={40} className="text-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight px-4"
          >
            Let's Build Something
            <br/>
            <span
              className="text-red-500"
              style={{
                textShadow: '4px 4px 0px rgba(220, 20, 60, 0.4), 0 0 40px rgba(220, 20, 60, 0.5)',
              }}
            >
              Amazing Together
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mb-14 leading-relaxed"
          >
            Currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll get back to you!
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:abdisaawel82@gmail.com"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white text-lg transition-all duration-300 bg-red-600 rounded-2xl red-glow-hover mb-20"
          >
            <span className="mr-3">Say Hello</span>
            <ArrowUpRight size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
          </motion.a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {links.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
                
                <div className="relative flex flex-col items-center justify-center p-8 rounded-3xl glass-effect border border-red-500/20 group-hover:border-red-500/50 cinematic-shadow transition-all">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <span className="font-bold text-white text-lg">{link.name}</span>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
