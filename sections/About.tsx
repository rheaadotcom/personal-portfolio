'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code2, BrainCircuit, Heart, Trophy } from 'lucide-react';

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech Computer Science student building a strong academic and practical engineering base."
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Passionate about building scalable, secure, and user-centric web applications using modern tech stacks."
  },
  {
    icon: BrainCircuit,
    title: "AI / ML Interests",
    description: "Intrigued by neural networks, LLM integrations, and incorporating smart logic into traditional platforms."
  },
  {
    icon: Trophy,
    title: "Hackathons & Challenges",
    description: "Active hackathon participant, NASA Space Apps builder, and dedicated DSA problem-solver."
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Subtle glow behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

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
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500 font-black">Myself</span>
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-gradient-to-r from-primary-600 to-blue-500 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </div>

        {/* Info Grid & Main Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main text block - spans 5 cols on lg */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-6 text-white/70"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Hey, I&apos;m passionate about coding the future.
            </h3>
            
            <p className="text-sm sm:text-base leading-relaxed">
              I am a B.Tech Computer Science student specializing in building high-performance modern web apps and integrating intelligent systems. I believe in writing clean code, solving complex architectural problems, and designing intuitive user journeys.
            </p>
            
            <p className="text-sm sm:text-base leading-relaxed">
              My drive comes from creating software that leaves a lasting impact. Whether contributing to community open-source projects or building proof-of-concept AI validation systems in hackathons, I enjoy tackling new challenges daily.
            </p>

            <div className="p-5 rounded-2xl glass-panel border border-white/5 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-primary-600/10 flex items-center justify-center text-primary-600">
                <Heart className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base">Goal-Oriented</h4>
                <p className="text-xs sm:text-sm text-white/50">Constantly refining DSA skills & designing fault-tolerant systems.</p>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid - spans 7 cols on lg */}
          <motion.div 
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col gap-4 transition-all duration-300 relative group overflow-hidden"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Subtle inner card card hover glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-600/5 rounded-full blur-xl group-hover:bg-primary-600/10 transition-all duration-300 pointer-events-none" />

                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-600 group-hover:bg-primary-600/10 group-hover:text-purple-400 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-base sm:text-lg">{card.title}</h4>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{card.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
