'use client';

import { motion } from 'framer-motion';
import { Mail, Code, Link2, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000); // clear status after 5s
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background neon orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

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
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500 font-black">Touch</span>
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-gradient-to-r from-primary-600 to-blue-500 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Direct contact info - spans 5 cols */}
          <motion.div
            className="md:col-span-5 flex flex-col justify-between p-8 rounded-3xl glass-panel border border-white/5 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Let&apos;s Build Something!</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Have an exciting opportunity, a hackathon idea, or just want to chat about web technology and artificial intelligence? Drop a message!
              </p>

              <div className="flex flex-col gap-5 mt-6">
                <a 
                  href="mailto:iriyabhardwaj@gmail.com" 
                  className="flex items-center gap-4 text-sm text-white/70 hover:text-primary-600 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-600 group-hover:bg-primary-600/10 group-hover:text-purple-400 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-white/40">Email Me</h4>
                    <span className="font-semibold">iriyabhardwaj@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social profiles */}
            <div className="mt-12">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">Connect Elsewhere</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/rheaadotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/5 hover:border-primary-600/30 text-white/70 hover:text-primary-600 hover:bg-primary-600/10 transition-all duration-300"
                >
                  <Code className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/riya-bhardwaj2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/5 hover:border-primary-600/30 text-white/70 hover:text-primary-600 hover:bg-primary-600/10 transition-all duration-300"
                >
                  <Link2 className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Form wrapper - spans 7 cols */}
          <motion.div
            className="md:col-span-7 p-8 rounded-3xl glass-panel border border-white/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-white/70 pl-0.5">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all duration-200 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-white/70 pl-0.5">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all duration-200 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-white/70 pl-0.5">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all duration-200 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 inline-flex justify-center items-center gap-2 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group/btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
