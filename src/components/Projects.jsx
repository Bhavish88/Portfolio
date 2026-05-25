import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import licenseTrackerPreview from '../assets/license-tracker-preview.png';
import resumePreview from '../assets/resume-preview.png';

// Mock Terminal Widget for the Featured Project (Fallback)
const TerminalMockup = () => (
  <div className="w-full rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-xl font-mono text-[10px] sm:text-xs overflow-hidden shadow-2xl flex flex-col text-left">
    {/* Header bar */}
    <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/50 border-b border-zinc-900 select-none">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
      </div>
      <span className="text-zinc-500 text-[9px] sm:text-[10px] tracking-wider font-semibold font-mono">[license_verifier.py]</span>
      <div className="w-10" />
    </div>

    {/* Code Area */}
    <div className="p-4 sm:p-5 flex flex-col gap-3.5 leading-relaxed bg-zinc-950/40">
      <div>
        <span className="text-zinc-600 block mb-1"># Authenticated GET payload checking status</span>
        <span className="text-violet-accent-light">import</span> <span className="text-white">requests</span>
        <br />
        <span className="text-white">headers = &#123;</span>
        <span className="text-cyan-400">"Authorization"</span><span className="text-white">: </span><span className="text-emerald-400">"Bearer JWT_TOKEN_SHA256..."</span>
        <span className="text-white">&#125;</span>
        <br />
        <span className="text-white">res = requests.get(</span>
        <br />
        <span className="text-emerald-400 pl-4">"https://api.bhavish.dev/v1/licenses/verify/"</span><span className="text-white">,</span>
        <br />
        <span className="text-white pl-4">headers=headers</span>
        <br />
        <span className="text-white">)</span>
      </div>

      <div className="border-t border-zinc-900/80 pt-3 flex flex-col gap-1">
        <span className="text-zinc-500 font-semibold">[API Output Response]</span>
        <span className="text-cyan-400">&#123;</span>
        <div className="pl-4">
          <span className="text-zinc-400">"status"</span>: <span className="text-emerald-400">"VALID"</span>,
          <br />
          <span className="text-zinc-400">"license_id"</span>: <span className="text-emerald-400">"LIC-2026-X8"</span>,
          <br />
          <span className="text-zinc-400">"days_remaining"</span>: <span className="text-amber-400">14</span>,
          <br />
          <span className="text-zinc-400">"expiry_alert"</span>: <span className="text-rose-400">"alert_sent_to_admin"</span>
        </div>
        <span className="text-cyan-400">&#125;</span>
      </div>
    </div>
  </div>
);

// Mock ATS Checklist Widget for AI Resume Analyzer (Fallback)
const ResumeAnalysisMockup = () => (
  <div className="w-full aspect-[4/3] sm:aspect-[1.5/1] md:aspect-[4/3] rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-xl p-4 sm:p-5 overflow-hidden flex flex-col justify-between text-left font-mono select-none">
    <div className="flex justify-between items-center text-[9px] text-zinc-500 border-b border-zinc-900/60 pb-2">
      <span>RESUME_ANALYZER.EXE</span>
      <span className="text-cyan-400 font-semibold">ATS_SCORE: 92/100</span>
    </div>

    <div className="flex flex-col gap-2.5 my-auto">
      <div className="flex items-center gap-2 text-[9.5px] text-zinc-300">
        <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>Python Backend Core: Match Found</span>
      </div>
      <div className="flex items-center gap-2 text-[9.5px] text-zinc-300">
        <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>Django REST Framework: Match Found</span>
      </div>
      <div className="flex items-center gap-2 text-[9.5px] text-zinc-400">
        <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>AI/ML Keywords: Missing tags</span>
      </div>
    </div>

    <div className="flex items-center justify-between text-[8px] sm:text-[9px] bg-zinc-900/30 border border-zinc-900 rounded-lg p-2 text-zinc-500 font-sans leading-none">
      <span>SUGGEST: Add "Docker", "Celery"</span>
      <span className="text-violet-accent-light font-bold font-mono">MATCH +12%</span>
    </div>
  </div>
);

// Telemetry Widget for Upcoming RuralCare Connect Dashboard
const TelemetryMockup = () => (
  <div 
    className="relative w-full rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-xl p-4 sm:p-5 overflow-hidden flex flex-col justify-between text-left font-mono select-none"
    style={{ aspectRatio: '2.2 / 1' }}
  >
    {/* Locked lock screen / Dashboard Blur overlay */}
    <div className="absolute inset-0 bg-black/65 backdrop-blur-[3.5px] flex flex-col items-center justify-center gap-2 z-20">
      <div className="w-8 h-8 rounded-full border border-violet-accent/20 bg-zinc-950/80 flex items-center justify-center text-violet-accent/70 shadow-[0_0_12px_rgba(124,58,237,0.15)]">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <span className="text-[7.5px] tracking-[0.25em] font-bold text-violet-accent-light/80 uppercase">BUILDING_NOW</span>
    </div>

    {/* Metric Charts / Healthcare Dashboard mockup (Blurred underneath) */}
    <div className="flex flex-col gap-2 z-10 opacity-30 justify-between h-full w-full">
      <div className="flex items-center justify-between text-[7px] text-zinc-500 font-semibold tracking-wider pb-1 border-b border-zinc-900/60">
        <span>CLINIC_PORTAL: ZONE-MH-04 [ONLINE]</span>
        <span className="text-emerald-500 flex items-center gap-1 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          WS_ACTIVE
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3.5 mt-0.5">
        {/* Live Queue tracking */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[6.5px] text-zinc-500 uppercase tracking-widest font-bold">Queue</span>
          <div className="flex flex-col gap-0.5 mt-1 font-sans text-[7px] text-zinc-400">
            <span className="text-rose-450 font-semibold flex items-center gap-1">
              <span className="w-0.5 h-0.5 rounded-full bg-rose-500 animate-pulse" />
              #012 - P1 Emergency
            </span>
            <span className="flex items-center gap-1 text-zinc-400">
              <span className="w-0.5 h-0.5 rounded-full bg-zinc-600" />
              #084 - P2 Scheduled
            </span>
            <span className="flex items-center gap-1 text-zinc-500">
              <span className="w-0.5 h-0.5 rounded-full bg-zinc-700" />
              #104 - P3 Normal
            </span>
          </div>
        </div>

        {/* Medicine Inventory stock */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[6.5px] text-zinc-500 uppercase tracking-widest font-bold">Inventory</span>
          <div className="flex flex-col gap-1.5 mt-1">
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between text-[6px] text-zinc-450 font-sans leading-none">
                <span>Vital Stock</span>
                <span>88%</span>
              </div>
              <div className="w-full h-0.5 bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full w-[88%] bg-emerald-500/80" />
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between text-[6px] text-zinc-450 font-sans leading-none">
                <span>Antibiotics</span>
                <span className="text-rose-400">14% [Low]</span>
              </div>
              <div className="w-full h-0.5 bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full w-[14%] bg-rose-500/80" />
              </div>
            </div>
          </div>
        </div>

        {/* System event logs */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[6.5px] text-zinc-500 uppercase tracking-widest font-bold">System Log</span>
          <div className="flex flex-col gap-0.5 mt-1 font-mono text-[5.5px] text-zinc-500 leading-none">
            <span>[WebSockets] client_id=14</span>
            <span>[Celery] task.queue_update</span>
            <span>[Redis] cache_hit=94%</span>
          </div>
        </div>
      </div>

      {/* Anomaly check */}
      <span className="text-[6px] text-zinc-650 leading-none">[LOG] Queues broadcasted to WebSockets... OK</span>
    </div>
  </div>
);

// Reusable Image Carousel that fades between images and falls back to a code mockup if images aren't present
const ImageCarousel = ({ images, fallbackWidget, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    // Cycle image slides every 3 seconds (at least 2 seconds)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images?.length]);

  if (!images || images.length === 0) {
    return fallbackWidget;
  }

  return (
    <div 
      className="relative w-full rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 flex items-center justify-center group shadow-2xl select-none"
      style={{ aspectRatio: '2.2 / 1' }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={altText}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Navigation Indicators - only visible if there are multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-violet-accent w-4' : 'bg-zinc-600 hover:bg-zinc-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Projects() {
  // Stagger animation configuration matching previous sections
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
        ease: [0.16, 1, 0.3, 1] // Premium ease-out curve
      }
    }
  };

  // Paths to screenshots inside the assets directory
  const trackerImages = [
    licenseTrackerPreview,
  ];

  const analyzerImages = [
    resumePreview,
  ];

  return (
    <section 
      id="projects" 
      className="relative w-full pt-14 pb-20 sm:pt-20 sm:pb-24 bg-black bg-grid-dots z-10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-violet-accent/5 blur-[120px] pointer-events-none z-0" 
      />
      <div 
        className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" 
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-start gap-8 sm:gap-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-black text-white flex items-baseline gap-1 select-none">
            Projects<span className="text-cyan-400 font-extrabold text-glow-subtle font-sans">.</span>
          </h2>
        </motion.div>

        {/* Projects Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="w-full flex flex-col gap-8 sm:gap-10"
        >
          
          {/* ==================== 1. FEATURED PROJECT CARD ==================== */}
          <motion.div 
            variants={itemVariants}
            className="w-full rounded-[32px] border border-zinc-900/60 bg-zinc-950/20 backdrop-blur-xl p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between shadow-[0_25px_60px_rgba(0,0,0,0.6)] hover:border-zinc-800 transition-colors duration-500 group"
          >
            {/* Left Side: Content info */}
            <div className="w-full lg:w-[55%] flex flex-col items-start text-left gap-6 sm:gap-7">
              {/* Badge & Title */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-violet-accent-light uppercase select-none">
                  Featured Project
                </span>
                <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white group-hover:text-violet-accent-light transition-colors duration-300 select-none">
                  License & Certificate Tracker
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                A secure web application for managing and tracking licenses and certificates. Built for administrators to handle authorization, renewal alerts, file attachments, and clean document management inside a developer-centric dashboard.
              </p>

              {/* Highlight Features */}
              <div className="flex flex-col gap-2 text-[12px] font-sans text-zinc-300 select-none pl-1">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-accent" />
                    Authentication
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-accent" />
                    REST APIs
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-accent" />
                    Admin Dashboard
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-accent" />
                    File Handling
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-accent" />
                    Database Integration
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-accent" />
                    Expiry Alerts
                  </div>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-1 select-none">
                {['Django', 'Django REST Framework', 'MySQL', 'JWT Auth', 'HTML/CSS', 'JavaScript'].map((tag) => (
                  <span key={tag} className="px-3.5 py-1.5 rounded-full border border-zinc-900 bg-zinc-950/80 text-[10px] sm:text-[11px] font-mono tracking-wider font-medium text-zinc-400 uppercase transition-all duration-300 hover:border-zinc-800 hover:text-white cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: IDE Mockup / Image Carousel & Buttons */}
            <div className="w-full lg:w-[42%] flex flex-col gap-6 items-stretch justify-center relative">
              <div className="relative w-full flex justify-center items-center">
                {/* Subtle ambient light shape */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-violet-accent/15 to-transparent rounded-[32px] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <ImageCarousel 
                  images={trackerImages} 
                  fallbackWidget={<TerminalMockup />} 
                  altText="License Tracker"
                />
              </div>

              {/* Buttons under the image */}
              <div className="flex gap-4 select-none w-full z-10">
                <a 
                  href="https://github.com/Bhavish88" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 text-center px-6 py-3 border border-zinc-850 bg-zinc-950/40 hover:bg-zinc-900/20 text-zinc-300 hover:text-white font-semibold text-[10px] tracking-wider uppercase rounded-full hover:border-zinc-700 transition-all duration-300 select-none whitespace-nowrap"
                >
                  GitHub Repo
                </a>
                <a 
                  href="https://mydocuvault.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-violet-accent hover:bg-violet-accent/90 text-white font-semibold text-[10px] tracking-wider uppercase rounded-full shadow-[0_10px_20px_rgba(124,58,237,0.1)] hover:shadow-[0_10px_25px_rgba(124,58,237,0.22)] transition-all duration-300 select-none whitespace-nowrap"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>


          {/* ==================== BOTTOM GRID: 2ND & UPCOMING PROJECTS ==================== */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

            {/* SECOND PROJECT CARD (AI Resume Analyzer) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                transition: { type: 'spring', stiffness: 450, damping: 18 }
              }}
              className="rounded-[30px] border border-zinc-900/60 bg-zinc-950/20 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-zinc-800 transition-all duration-500 text-left group"
            >
              <div className="flex flex-col gap-5">
                {/* Visual Widget Preview / Image Carousel */}
                <div className="w-full relative">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-2xl blur-xl opacity-60 pointer-events-none" />
                  <ImageCarousel 
                    images={analyzerImages}
                    fallbackWidget={<ResumeAnalysisMockup />}
                    altText="AI Resume Analyzer"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase select-none">
                    AI Integration
                  </span>
                  <h3 className="font-syne text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 select-none">
                    AI Resume Analyzer
                  </h3>
                  <p className="font-sans text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mt-2.5">
                    An AI-powered resume analysis platform that evaluates resumes against specific jobs, providing improvement suggestions, keyword matching logs, and ATS feedback.
                  </p>
                </div>

                {/* Feature checklist */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10.5px] font-sans text-zinc-350 select-none font-medium mt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    ATS Optimization
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    AI Feedback
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Smart Suggestions
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 select-none mt-1">
                  {['React', 'Python', 'Django', 'AI APIs', 'MySQL'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-zinc-900 bg-zinc-950/70 text-[9px] sm:text-[10px] font-mono tracking-wider font-medium text-zinc-400 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3.5 pt-3 select-none">
                <a 
                  href="https://github.com/Bhavish88/ResumeLens" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-2.5 border border-zinc-850 bg-zinc-950/40 hover:bg-zinc-900/20 text-zinc-300 hover:text-white font-semibold text-[9.5px] tracking-wider uppercase rounded-full hover:border-zinc-700 transition-all duration-300"
                >
                  GitHub Repo
                </a>
                <a 
                  href="https://resume-lens-flax.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-2.5 bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-white font-semibold text-[9.5px] tracking-wider uppercase rounded-full transition-all duration-300"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>


            {/* UPCOMING PROJECT CARD (RuralCare Connect) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                transition: { type: 'spring', stiffness: 450, damping: 18 }
              }}
              className="rounded-[30px] border border-dashed border-zinc-800/80 bg-zinc-950/10 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 text-left group hover:border-zinc-800"
            >
              <div className="flex flex-col gap-5">
                {/* Visual Widget Preview */}
                <div className="w-full relative">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-violet-accent/5 to-transparent rounded-2xl blur-xl opacity-60 pointer-events-none" />
                  <TelemetryMockup />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 select-none">
                    <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-violet-accent-light uppercase">
                      Upcoming Project
                    </span>
                    <span className="text-zinc-650 text-[10px] font-bold font-mono select-none">•</span>
                    <span className="px-2 py-0.5 rounded-full border border-violet-accent/30 bg-violet-accent/5 text-[7.5px] font-bold font-mono tracking-widest text-violet-accent-light uppercase">
                      Real-Time System
                    </span>
                  </div>
                  <h3 className="font-syne text-xl sm:text-2xl font-bold text-zinc-150 select-none">
                    RuralCare Connect
                  </h3>
                  <p className="font-sans text-zinc-500 text-xs sm:text-sm font-light leading-relaxed mt-2.5">
                    A real-time rural healthcare platform designed to manage patient queues, appointment scheduling, and medicine inventory across clinics. Built with scalable backend architecture, live notifications, and asynchronous task processing for high-performance healthcare operations.
                  </p>
                </div>

                {/* Feature list */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10.5px] font-sans text-zinc-500 select-none font-medium mt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    Live Queue Tracking
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    Medicine Availability
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    Emergency Prioritization
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    Real-Time Notifications
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 select-none mt-1">
                  {['React', 'Django REST', 'PostgreSQL', 'Redis', 'Celery', 'WebSockets'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-zinc-950 bg-zinc-950/30 text-[9px] sm:text-[10px] font-mono tracking-wider font-medium text-zinc-500 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Teaser Building Now */}
              <div className="flex gap-3.5 pt-3 select-none">
                <div className="w-full text-center px-4 py-2.5 border border-zinc-900 bg-zinc-950/20 text-zinc-550 font-semibold text-[9.5px] tracking-wider uppercase rounded-full cursor-not-allowed flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 animate-pulse" />
                  <span>Building Now</span>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
