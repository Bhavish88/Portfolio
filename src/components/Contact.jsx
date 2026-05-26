import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import resumePdf from '../assets/Bhavish-Resume.pdf';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bhavishmulleshwari@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Animation variants matching previous components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] // Premium ease-out curve
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="relative w-full pt-14 pb-12 sm:pt-20 sm:pb-16 bg-black bg-grid-dots z-10 overflow-hidden flex flex-col justify-between min-h-[75vh]"
    >
      {/* Background ambient gradient glow blobs */}
      <div 
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-violet-accent/5 blur-[120px] pointer-events-none z-0" 
      />
      <div 
        className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" 
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center justify-center flex-grow gap-10 sm:gap-14 text-center my-auto">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-black text-white flex items-baseline justify-center gap-1 select-none">
            Contact Me<span className="text-cyan-400 font-extrabold text-glow-subtle font-sans">.</span>
          </h2>
        </motion.div>

        {/* Info & Cards Showcase Wrapper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="w-full max-w-4xl flex flex-col items-center gap-8 sm:gap-10"
        >
          
          {/* Confident Intro Paragraph */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center gap-3 max-w-xl"
          >
            <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.25em] text-violet-accent-light uppercase select-none">
              [ Connect / Collaborate ]
            </span>
            <p className="font-sans text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              I’m open to backend development, AI/ML engineering opportunities, collaborations, and interesting projects. Feel free to connect.
            </p>
          </motion.div>

          {/* Cards Showcase Grid */}
          <motion.div 
            variants={itemVariants}
            className="w-full flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 sm:gap-5 pt-4"
          >
            {/* GitHub Card */}
            <a 
              href="https://github.com/Bhavish88" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-44 rounded-2xl border border-zinc-900/60 bg-zinc-950/20 backdrop-blur-xl p-4 flex flex-col items-center gap-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:border-zinc-800 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group select-none"
            >
              <div className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors duration-300">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-450 uppercase font-semibold group-hover:text-white transition-colors duration-300">
                GitHub
              </span>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/bhavish-mulleshwari-052905374/" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-44 rounded-2xl border border-zinc-900/60 bg-zinc-950/20 backdrop-blur-xl p-4 flex flex-col items-center gap-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:border-zinc-800 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group select-none"
            >
              <div className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors duration-300">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-450 uppercase font-semibold group-hover:text-white transition-colors duration-300">
                LinkedIn
              </span>
            </a>

            {/* Copy Email Card with Tooltip */}
            <div 
              onClick={handleCopyEmail}
              className="relative w-full sm:w-44 rounded-2xl border border-zinc-900/60 bg-zinc-950/20 backdrop-blur-xl p-4 flex flex-col items-center gap-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:border-zinc-800 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-pointer select-none"
            >
              {/* Dynamic Copied Tooltip */}
              <AnimatePresence>
                {copied && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-mono tracking-wider text-emerald-400 font-bold shadow-lg select-none whitespace-nowrap z-30"
                  >
                    Copied!
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors duration-300">
                <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-6 4h10m-5-5v10m-5-5h10" />
                </svg>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-450 uppercase font-semibold group-hover:text-white transition-colors duration-300">
                Copy Email
              </span>
            </div>

            {/* Highlighted Resume Card */}
            <a 
              href={resumePdf} 
              download="Bhavish-Resume.pdf"
              className="w-full sm:w-48 rounded-2xl border border-violet-accent/30 bg-violet-accent/5 backdrop-blur-xl p-4 flex flex-col items-center gap-2.5 shadow-[0_10px_25px_rgba(124,58,237,0.06)] hover:border-violet-accent/70 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(124,58,237,0.15)] transition-all duration-300 group select-none"
            >
              <div className="w-6 h-6 text-violet-accent-light group-hover:text-white transition-colors duration-300">
                <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-violet-accent-light uppercase font-bold group-hover:text-white transition-colors duration-300">
                Download Resume
              </span>
            </a>
          </motion.div>

        </motion.div>

      </div>

      {/* ==================== MINIMAL FOOTER ==================== */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 pt-8 mt-16 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
        
        {/* Left Side: Copyright */}
        <div className="text-[11px] sm:text-xs font-mono text-zinc-500 text-center sm:text-left leading-relaxed">
          © 2026 Bhavish · Python Backend Developer
        </div>

        {/* Center: Built With Tech Info */}
        <div className="text-[9.5px] sm:text-[10.5px] font-mono text-zinc-700 tracking-wider font-light">
          Built with React + Vite
        </div>

        {/* Right Side: Small Outline Socials */}
        <div className="flex items-center gap-4">
          {/* GitHub icon outline */}
          <a 
            href="https://github.com/Bhavish88" 
            target="_blank" 
            rel="noreferrer"
            className="text-zinc-650 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300"
            aria-label="GitHub Link"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          {/* LinkedIn icon outline */}
          <a 
            href="https://www.linkedin.com/in/bhavish-mulleshwari-052905374/" 
            target="_blank" 
            rel="noreferrer"
            className="text-zinc-650 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300"
            aria-label="LinkedIn Link"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
            </svg>
          </a>

          {/* Email icon outline */}
          <a 
            href="mailto:bhavishmulleshwari@gmail.com"
            className="text-zinc-650 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300"
            aria-label="Email Link"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </footer>
    </section>
  );
}
