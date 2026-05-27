'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, Sparkles } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { projectsData } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

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
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500 font-black">Projects</span>
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-gradient-to-r from-primary-600 to-blue-500 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <p className="text-xs sm:text-sm text-white/50 mt-4 max-w-md mx-auto">
            Recruiter-focused, high-impact web software showcasing robust architecture and client integrations.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.12}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="24px"
                tiltMaxAngleX={7}
                tiltMaxAngleY={7}
                className="w-full h-full cursor-pointer"
              >
                <div className="h-full flex flex-col p-6 rounded-3xl glass-panel relative overflow-hidden group transition-all duration-300 border border-white/5 hover:border-primary-600/30">
                  
                  {/* Decorative glow corner */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-600/5 group-hover:bg-primary-600/10 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-600/10 flex items-center justify-center text-primary-600">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-700 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Bullet features */}
                  <div className="flex flex-col gap-2 mb-6 flex-grow">
                    <h4 className="text-xs sm:text-sm font-semibold text-white/80">Key Highlights:</h4>
                    <ul className="list-disc list-inside text-xs text-white/40 flex flex-col gap-1 pl-1">
                      {project.features.map((feat) => (
                        <li key={feat} className="leading-relaxed">
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 items-center">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-medium text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-all duration-300 group/btn"
                    >
                      Live Demo
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                    
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm py-2.5 px-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <Code className="w-4 h-4" />
                      Code
                    </a>
                  </div>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
