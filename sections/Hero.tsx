'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, Link2, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const typingTexts = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Problem Solver"
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typingTexts[textIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before starting delete
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex]);

  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 text-center overflow-hidden"
    >
      {/* Premium Futuristic Glowing Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-600/15 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-blue-600/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-0" />

      {/* Decorative Grid Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl relative z-10">

        {/* Left Info Column */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-600/10 border border-primary-600/30 text-primary-700 text-xs sm:text-sm font-medium mb-6 uppercase tracking-wider shadow-[0_0_15px_rgba(147,51,234,0.15)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
            Open for Opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-500 to-blue-500 font-black">
              Riya Bhardwaj
            </span>
          </h1>

          <div className="h-10 sm:h-12 flex items-center mb-6 text-lg sm:text-xl md:text-2xl text-white/70 font-medium">
            <span>{typedText}</span>
            <span className="w-1 h-6 bg-primary-600 ml-1.5 animate-[ping_0.8s_infinite]" />
          </div>

          <p className="text-sm sm:text-base text-white/50 max-w-lg mb-8 leading-relaxed">
            B.Tech Computer Science student building scalable full-stack applications with AI integrations, modern frontend interfaces, and performant backend services.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-[0_4px_20px_rgba(147,51,234,0.3)] group"
            >
              Get In Touch
              <Sparkles className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://drive.google.com/file/d/1MXY08pILqPP4AGv7p6nW0zYGYqqmC8Pr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Code className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://github.com/rheaadotcom"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary-600/30 text-white/75 hover:text-primary-600 hover:bg-primary-600/5 transition-all duration-300 shadow-sm"
            >
              <Code className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/riya-bhardwaj2006"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary-600/30 text-white/75 hover:text-primary-600 hover:bg-primary-600/5 transition-all duration-300 shadow-sm"
            >
              <Link2 className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Avatar Column with Holographic Glow */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="relative w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] group">
            {/* Ambient Animated Glow Borders */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-blue-500 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-[glow-slow_6s_ease-in-out_infinite]" />

            {/* Inner Border Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-blue-500 rounded-[2rem] p-[2px]">
              <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative flex items-center justify-center">
                {!imgFailed ? (
                  <img
                    src="/riya.png"
                    alt="Riya Bhardwaj"
                    onError={() => setImgFailed(true)}
                    className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <svg
                    className="w-4/5 h-4/5 text-purple-600/40 relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}

                {/* Animated Scanner Effect */}
                <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-600 to-transparent top-0 animate-[scan_3s_linear_infinite]" />

                {/* Decorative circuit path lines */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        className="absolute bottom-6 flex flex-col items-center gap-1 cursor-pointer z-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={() => {
          const aboutSec = document.getElementById('about');
          if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs uppercase tracking-widest font-medium text-white/50">Scroll Down</span>
        <motion.div
          className="w-1.5 h-6 rounded-full border border-white/30 flex justify-center p-[2px]"
        >
          <motion.div
            className="w-1 h-1.5 bg-primary-600 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
