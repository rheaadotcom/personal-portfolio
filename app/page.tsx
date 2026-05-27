import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Certifications from '@/sections/Certifications';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Decorative vertical center glow guide lines */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-gradient-to-b from-primary-600/10 via-transparent to-blue-500/10 pointer-events-none z-0" />
      
      {/* Section contents */}
      <Hero />
      
      <div className="w-full border-t border-white/5 relative z-10" />
      <About />
      
      <div className="w-full border-t border-white/5 relative z-10" />
      <Skills />
      
      <div className="w-full border-t border-white/5 relative z-10" />
      <Projects />
      
      <div className="w-full border-t border-white/5 relative z-10" />
      <Experience />
      
      <div className="w-full border-t border-white/5 relative z-10" />
      <Certifications />
      
      <div className="w-full border-t border-white/5 relative z-10" />
      <Contact />
      
      {/* Footer */}
      <footer className="w-full py-8 text-center text-xs text-white/30 border-t border-white/5 relative z-10">
        <p>© {new Date().getFullYear()} Riya Bhardwaj. All rights reserved.</p>
        <p className="mt-1 font-medium text-primary-600/50">Designed & engineered for high performance</p>
      </footer>
    </div>
  );
}
