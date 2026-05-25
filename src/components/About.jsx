import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] // Premium luxury easeOut
      }
    }
  };

  return (
    <section 
      id="about" 
      className="relative w-full pt-14 pb-20 sm:pt-20 sm:pb-24 bg-black bg-grid-dots z-10 overflow-hidden"
    >
      {/* Soft gradient blur shapes (ambient glow) */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-violet-accent/5 blur-[100px] pointer-events-none z-0" 
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" 
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-start gap-4 sm:gap-5">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-black text-white flex items-baseline gap-1 select-none">
            About<span className="text-cyan-400 font-extrabold text-glow-subtle font-sans">.</span>
          </h2>
        </motion.div>
 
        {/* Section Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          
          {/* Left Side: About Me Content Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{
              y: -4,
              borderColor: 'rgba(124, 58, 237, 0.12)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
            }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="lg:col-span-7 w-full rounded-[32px] border border-zinc-900/60 bg-zinc-950/30 backdrop-blur-2xl p-8 sm:p-10 flex flex-col justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.02)] h-full cursor-default"
          >
            <div className="flex flex-col gap-7 font-sans text-zinc-300 text-sm sm:text-base leading-[1.72] font-light text-left max-w-[92%] lg:max-w-[88%] my-auto">
              <p>
                I specialize in building scalable backend systems using Python and Django. My experience spans designing robust database architectures, implementing secure authentication systems, and developing efficient RESTful APIs. I focus on writing clean, maintainable code that prioritizes performance and reliability under heavy loads.
              </p>
              <p>
                Beyond core backend systems, I am deeply interested in AI Engineering and Machine Learning. I look forward to combining my engineering foundation with intelligent agentic designs, model integrations, and data-driven pipelines to build the next generation of smart software systems.
              </p>
            </div>

            {/* Subtle technical accent pills to balance vertical space */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-900/60 select-none">
              {['REST APIs', 'Authentication', 'Scalable Systems', 'Database Design', 'AI/ML'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 rounded-full border border-zinc-900 bg-zinc-950/40 text-[9px] font-mono tracking-wider font-medium text-zinc-500 hover:text-zinc-350 hover:border-zinc-850 transition-colors duration-300 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
 
          {/* Right Side: Stacked Information Cards */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6 sm:gap-8">
            
            {/* Card 1 - Education */}
            <motion.div 
              variants={itemVariants}
              whileHover={{
                y: -4,
                borderColor: 'rgba(124, 58, 237, 0.12)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full rounded-3xl border border-zinc-900/60 bg-zinc-950/30 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.02)] flex flex-col gap-5 text-left cursor-default"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center text-violet-accent-light">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="font-syne text-md sm:text-lg font-bold text-white select-none">Education</h3>
              </div>
 
              {/* Card Content */}
              <div className="flex flex-col gap-4 pl-1">
                <div>
                  <h4 className="font-sans text-sm sm:text-md font-semibold text-zinc-100">BSc IT</h4>
                  <span className="font-sans text-zinc-400 text-xs font-light">CGPA: 9.0</span>
                </div>
                <div className="border-t border-zinc-900/40 pt-3">
                  <h4 className="font-sans text-sm sm:text-md font-semibold text-zinc-100">HSC</h4>
                  <span className="font-sans text-zinc-400 text-xs font-light">Percentage: 88%</span>
                </div>
                <p className="font-sans text-zinc-500 text-xs font-light mt-1.5 leading-relaxed">
                  Focused on backend systems, scalable architecture, and modern development practices.
                </p>
              </div>
            </motion.div>
 
            {/* Card 2 - Currently Learning */}
            <motion.div 
              variants={itemVariants}
              whileHover={{
                y: -4,
                borderColor: 'rgba(124, 58, 237, 0.12)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full rounded-3xl border border-zinc-900/60 bg-zinc-950/30 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.02)] flex flex-col gap-5 text-left cursor-default"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center text-cyan-400">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-syne text-md sm:text-lg font-bold text-white select-none">Currently Learning</h3>
              </div>
 
              {/* Card Tags */}
              <div className="flex flex-wrap gap-2.5 pl-1 pt-1">
                <div className="px-4 py-2 rounded-full bg-zinc-900/30 border border-zinc-850 text-zinc-300 text-xs font-medium tracking-wide transition-all duration-300 hover:border-zinc-650 hover:text-white select-none shadow-sm cursor-default hover:-translate-y-0.5">
                  PostgreSQL
                </div>
                <div className="px-4 py-2 rounded-full bg-zinc-900/30 border border-zinc-850 text-zinc-300 text-xs font-medium tracking-wide transition-all duration-300 hover:border-zinc-650 hover:text-white select-none shadow-sm cursor-default hover:-translate-y-0.5">
                  Docker
                </div>
                <div className="px-4 py-2 rounded-full bg-zinc-900/30 border border-zinc-850 text-zinc-300 text-xs font-medium tracking-wide transition-all duration-300 hover:border-zinc-650 hover:text-white select-none shadow-sm cursor-default hover:-translate-y-0.5">
                  Redis
                </div>
                <div className="px-4 py-2 rounded-full bg-zinc-900/30 border border-zinc-850 text-zinc-300 text-xs font-medium tracking-wide transition-all duration-300 hover:border-zinc-650 hover:text-white select-none shadow-sm cursor-default hover:-translate-y-0.5">
                  Celery
                </div>
              </div>
            </motion.div>
 
          </div>

        </motion.div>

      </div>
    </section>
  );
}
