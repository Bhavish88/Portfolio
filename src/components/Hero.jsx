import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';
import resumePdf from '../assets/Bhavish-Resume.pdf';

export default function Hero() {

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] // Premium luxury easeOut
      }
    }
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center pt-20 sm:pt-24 lg:pt-32 pb-12 overflow-hidden bg-black bg-grid-dots z-10"
    >
      {/* Soft gradient blur shapes (ambient violet lighting) */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-violet-accent/5 blur-[100px] sm:blur-[130px] pointer-events-none z-0"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-violet-accent/5 blur-[120px] sm:blur-[160px] pointer-events-none z-0"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">

        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center items-start text-left"
        >


          {/* Main Hero Header - Refined Copy, outline on 'Backend' only, increased font sizing */}
          <motion.h1
            variants={itemVariants}
            className="font-syne text-4xl sm:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] font-extrabold tracking-tight text-white leading-[1.08] mb-6"
          >
            Python
            <span className="text-outline block my-1 leading-none">Backend</span>
            Developer
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-zinc-400 text-sm sm:text-base max-w-xl font-light leading-relaxed mb-8"
          >
            Focused on building secure APIs, backend architecture, authentication systems, and database-driven applications using Python, Django, and MySQL.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 sm:gap-5 mb-8 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex-1 sm:flex-none text-center px-6 py-3 bg-violet-accent hover:bg-violet-accent/90 text-white font-semibold text-[11px] tracking-wider uppercase rounded-full shadow-[0_10px_20px_rgba(124,58,237,0.12)] hover:shadow-[0_10px_25px_rgba(124,58,237,0.25)] transition-all duration-300 select-none text-center whitespace-nowrap"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-none text-center px-6 py-3 border border-zinc-800 bg-zinc-950/20 hover:bg-zinc-900/40 text-zinc-300 hover:text-white font-semibold text-[11px] tracking-wider uppercase rounded-full hover:border-zinc-700 transition-all duration-300 select-none text-center whitespace-nowrap"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social & Resume Icons - Moved down and styled as premium circular buttons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 w-full sm:w-auto"
          >
            {/* GitHub */}
            <a
              href="https://github.com/Bhavish88"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-950/40 border border-zinc-850 hover:border-zinc-650 hover:bg-zinc-900 hover:text-white text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              aria-label="GitHub Profile"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bhavish-mulleshwari-052905374/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-950/40 border border-zinc-850 hover:border-zinc-650 hover:bg-zinc-900 hover:text-white text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:bhavishmulleshwari@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-950/40 border border-zinc-850 hover:border-zinc-650 hover:bg-zinc-900 hover:text-white text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              aria-label="Send Email"
            >
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* Resume Download */}
            <a
              href={resumePdf}
              download="Bhavish-Resume.pdf"
              className="h-10 px-4 flex items-center gap-2 rounded-full bg-zinc-950/40 border border-zinc-850 hover:border-zinc-650 hover:bg-zinc-900 hover:text-white text-zinc-400 text-[10px] tracking-widest font-semibold uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-sm select-none"
              aria-label="Download Resume"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Visual (Redesigned Premium Portrait Frame) */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center gap-5 sm:gap-6 relative">

          {/* Subtle Ambient light behind portrait */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-violet-accent/25 via-transparent to-indigo-500/10 rounded-full blur-2xl opacity-75 z-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-750" />

          {/* Glassmorphic Portrait presentation container */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 w-full max-w-[320px] sm:max-w-[360px] aspect-square rounded-full border border-zinc-800/40 bg-zinc-950/20 backdrop-blur-xl p-2.5 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] group hover:border-violet-accent/30 transition-all duration-700"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900/60 border border-zinc-900/50">
              <img
                src={profileImg}
                alt="Bhavish Mulleshwari"
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-all duration-[1.2s] ease-[0.16,1,0.3,1]"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Tagline Below Photo */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="z-10 text-center max-w-[290px]"
          >
            <p className="font-sans text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-light select-none">
              Passionate about building scalable backend systems, secure APIs, and efficient databases. Let’s build something impactful. <span className="text-violet-accent-light">🚀</span>
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
