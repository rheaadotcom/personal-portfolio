'use client';

import { motion } from 'framer-motion';
import { Briefcase, Trophy, Calendar, Star } from 'lucide-react';
import { timelineEvents } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500 font-black">Achievements</span>
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-gradient-to-r from-primary-600 to-blue-500 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <p className="text-xs sm:text-sm text-white/50 mt-4 max-w-md mx-auto">
            My development timeline, open-source work, and key competitive coding/hackathon results.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-8 md:pl-12 flex flex-col gap-12 py-4">
          
          {timelineEvents.map((evt, i) => {
            const isExp = evt.category === 'experience';
            const Icon = isExp ? Briefcase : Trophy;
            
            return (
              <motion.div
                key={evt.title}
                className="relative"
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Timeline connector dot */}
                <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 rounded-full bg-black border-2 border-primary-600 flex items-center justify-center text-primary-600 shadow-[0_0_12px_rgba(147,51,234,0.4)] z-10">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Event Card */}
                <div className="p-6 rounded-2xl glass-panel relative overflow-hidden group hover:border-primary-600/30 transition-all duration-300">
                  
                  {/* Subtle status tag */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs text-primary-600 font-medium">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {isExp ? "Open Source" : "Achievement"}
                    </span>
                    <span className="text-xs text-white/30 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {evt.date}
                    </span>
                  </div>

                  {/* Header */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 group-hover:text-primary-700 transition-colors duration-200">
                    {evt.title}
                  </h3>
                  <h4 className="text-xs sm:text-sm text-white/50 font-medium mb-3">
                    {evt.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
