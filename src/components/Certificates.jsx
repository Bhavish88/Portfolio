import React from 'react';
import { motion } from 'framer-motion';

// Mock Certificate Document Graphic (displayed inside the card on hover)
const CertificateMockup = () => (
  <div className="absolute top-6 right-6 w-16 h-12 rounded border border-zinc-800/80 bg-zinc-950 p-1.5 flex flex-col justify-between shadow-2xl opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20">
    {/* Micro header and lines representing certificate text */}
    <div className="flex flex-col gap-1 w-[80%]">
      <div className="w-full h-1 rounded bg-zinc-800" />
      <div className="w-[70%] h-0.5 rounded bg-zinc-900" />
      <div className="w-[50%] h-0.5 rounded bg-zinc-900" />
    </div>

    {/* Verification Badge/Seal */}
    <div className="self-end flex items-center justify-center w-3.5 h-3.5 rounded-full bg-amber-500/20 border border-amber-500/60 shadow-[0_0_8px_rgba(245,158,11,0.3)]">
      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
    </div>
  </div>
);

const certificatesList = [
  {
    title: 'Python Django 101',
    provider: 'Great Learning',
    category: 'Backend Development',
    year: '2024',
    description: 'Foundational Django backend development and web application architecture.',
    isPrimary: true,
  },
  {
    title: 'Advanced SQL',
    provider: 'Kaggle',
    category: 'Database Systems',
    year: '2024',
    description: 'Advanced SQL querying, joins, aggregations, and database optimization concepts.',
    isPrimary: true,
  },
  {
    title: 'Intro to SQL',
    provider: 'Kaggle',
    category: 'Database Fundamentals',
    year: '2023',
    description: 'Core SQL concepts including queries, filtering, sorting, and relational database basics.',
    isPrimary: true,
  },
  {
    title: 'Intermediate Machine Learning',
    provider: 'Kaggle',
    category: 'Machine Learning',
    year: '2024',
    description: 'Practical machine learning workflows, model improvement, validation, and feature engineering.',
    isPrimary: true,
  },
  {
    title: 'Intro to Machine Learning',
    provider: 'Kaggle',
    category: 'AI / Machine Learning',
    year: '2024',
    description: 'Fundamental machine learning concepts and predictive model development.',
    isPrimary: true,
  },
  {
    title: 'AI for Beginners',
    provider: 'RT-MSSU Mumbai',
    category: 'AI Fundamentals',
    year: '2023',
    description: 'Introduction to AI concepts, workflows, and beginner-level intelligent systems understanding.',
    isPrimary: false, // Optional Certificate (less emphasis)
  }
];

export default function Certificates() {
  // Stagger animation configuration matching other sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Premium ease-out curve
      }
    }
  };

  return (
    <section 
      id="certificates" 
      className="relative w-full pt-14 pb-20 sm:pt-20 sm:pb-24 bg-black bg-grid-dots z-10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-violet-accent/5 blur-[120px] pointer-events-none z-0" 
      />
      <div 
        className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" 
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
            Certificates<span className="text-cyan-400 font-extrabold text-glow-subtle font-sans">.</span>
          </h2>
        </motion.div>

        {/* Certificate Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificatesList.map((cert) => {
            const isPrimary = cert.isPrimary;
            return (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: 'spring', stiffness: 450, damping: 18 }
                }}
                className={`relative rounded-3xl border flex flex-col p-6 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-500 group text-left ${
                  isPrimary 
                    ? 'border-zinc-900/60 bg-zinc-950/20 hover:border-violet-accent/40' 
                    : 'border-zinc-900/40 bg-zinc-950/10 opacity-70 hover:opacity-100 hover:border-violet-accent/30'
                }`}
              >
                {/* Visual Certificate Mockup Graphic on Hover */}
                {isPrimary && <CertificateMockup />}

                <div className="flex flex-col gap-4">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between select-none">
                    <span className={`text-[8.5px] font-mono font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border ${
                      isPrimary 
                        ? 'border-violet-accent/20 bg-violet-accent/5 text-violet-accent-light' 
                        : 'border-zinc-800 bg-zinc-900/30 text-zinc-400'
                    }`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Title & Platform */}
                  <div className="flex flex-col gap-1 pr-16">
                    <h3 className={`font-syne text-lg sm:text-xl font-bold text-white transition-colors duration-300 select-none ${
                      isPrimary ? 'group-hover:text-violet-accent-light' : 'group-hover:text-zinc-300'
                    }`}>
                      {cert.title}
                    </h3>
                    <span className="text-[11px] font-sans text-zinc-450 font-medium">
                      Platform: <span className="text-zinc-350">{cert.provider}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`font-sans text-[12.5px] leading-relaxed font-light ${
                    isPrimary ? 'text-zinc-400' : 'text-zinc-500'
                  }`}>
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
