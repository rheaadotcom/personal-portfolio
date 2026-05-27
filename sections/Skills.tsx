'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Background neon light flare */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

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
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500 font-black">Skills</span>
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-gradient-to-r from-primary-600 to-blue-500 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <p className="text-xs sm:text-sm text-white/50 mt-4 max-w-md mx-auto">
            A comprehensive overview of my programming expertise, libraries, design standards, and dev tools.
          </p>
        </div>

        {/* Skill Category Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col gap-6 relative overflow-hidden group transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Highlight gradient bar at the top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-600/50 to-blue-500/50 group-hover:from-primary-600 group-hover:to-blue-500 transition-all duration-300" />
              
              <h3 className="text-lg font-bold text-white tracking-wide border-b border-white/5 pb-2">
                {cat.category}
              </h3>

              <div className="flex flex-col gap-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-white/40 group-hover:text-primary-600 transition-colors duration-200">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress track */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary-600 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                      />
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
