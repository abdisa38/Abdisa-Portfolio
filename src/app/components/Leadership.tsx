import React from "react";
import { motion } from "motion/react";
import { Award, Users, Star, GraduationCap, Trophy } from "lucide-react";

export function Leadership() {
  const certifications = [
    {
      title: "Internship Certificate",
      issuer: "Kuraz Technologies",
      image: "/assets/Internship Kuraz certificate.jpg"
    },
    {
      title: "Future Startup Founders",
      issuer: "Startup Incubation",
      image: "/assets/certificate Future Startup Founders.jpg"
    },
    {
      title: "Entrepreneurship Training",
      issuer: "Global Business Initiative",
      image: "/assets/certificate Entrepreneurship Training.jpg"
    }
  ];

  return (
    <section className="w-full py-32 bg-black border-y border-red-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #DC143C 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div
        className="absolute bottom-40 right-40 w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px] opacity-20"
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
        
        {/* Leadership Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-500" />
            
            <div className="relative glass-effect border-2 border-red-500/30 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-14 cinematic-shadow">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shrink-0 cinematic-shadow overflow-hidden p-4"
              >
                <img src="/assets/ctc club logo.jpg" alt="CTC Logo" className="w-full h-full object-contain" />
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-red-500/30 text-red-500 text-sm font-bold mb-5 uppercase tracking-wider"
                >
                  <Trophy size={16} />
                  Leadership
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5"
                  style={{
                    textShadow: '2px 2px 0px rgba(220, 20, 60, 0.4)',
                  }}
                >
                  CTC Software Development Leader
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 text-lg max-w-3xl leading-relaxed"
                >
                  Led a team of developers to architect and implement the CTC Learning Management System. 
                  Responsible for conducting code reviews, establishing best practices, and mentoring junior 
                  developers in MERN stack technologies and modern software engineering principles.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Award className="text-red-500" size={24} />
            <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">Certifications</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer"
            >
              {/* Card Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
              
              <div className="relative glass-effect border border-red-500/20 group-hover:border-red-500/50 rounded-3xl overflow-hidden cinematic-shadow transition-all duration-500">
                {/* Certificate Image */}
                <div className="w-full h-64 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Certificate Info */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
