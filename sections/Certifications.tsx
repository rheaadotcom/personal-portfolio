'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '@/data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 px-6 overflow-hidden">
      {/* Background neon lights */}
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-purple-600/5 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Licenses & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500 font-black">Certifications</span>
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-gradient-to-r from-primary-600 to-blue-500 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex gap-5 items-start group relative transition-all duration-300 overflow-hidden border border-white/5"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Badge Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary-600/10 flex items-center justify-center text-primary-600 group-hover:bg-primary-600/20 transition-colors duration-300 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>

              {/* Text contents */}
              <div className="flex-grow flex flex-col">
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug group-hover:text-primary-700 transition-colors duration-200">
                  {cert.name}
                </h3>
                <span className="text-xs sm:text-sm text-white/50 font-medium mt-1">
                  {cert.issuer}
                </span>
                <span className="text-xs text-white/30 mt-0.5">
                  Issued {cert.date} {cert.credentialId && `• ID: ${cert.credentialId}`}
                </span>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary-600 hover:text-purple-400 font-semibold mt-4 transition-colors duration-200 self-start"
                  >
                    Verify Credential
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
