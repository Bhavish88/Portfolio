import React from 'react';
import { motion } from 'framer-motion';

// Premium SVG Icon Components
const PythonIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.97 2c-2.46 0-4.38.2-5.46.73-1.63.8-1.63 2.27-1.63 2.27l.03 2.11h7.1v1.01H4.93C3.2 8.12 2 9.5 2 11.97c0 2.47 1.05 4.38 2.76 4.93.98.32 1.8.32 1.8.32l.03-2.44s-.06-2.92 2.89-2.92h5.52c1.47 0 2.89-1.2 2.89-2.89V6.44C18 3.47 15.42 2 11.97 2zm-2.89 1.63c.53 0 .97.44.97.97 0 .54-.44.98-.97.98a.98.98 0 0 1-.98-.98c0-.53.44-.97.98-.97z M12.03 22c2.46 0 4.38-.2 5.46-.73 1.63-.8 1.63-2.27 1.63-2.27l-.03-2.11H12v-1.01h7.07c1.73 0 2.93-1.38 2.93-3.85 0-2.47-1.05-4.38-2.76-4.93-.98-.32-1.8-.32-1.8-.32l-.03 2.44s.06 2.92-2.89 2.92H9.03c-1.47 0-2.89 1.2-2.89 2.89v5.56c0 2.97 2.58 4.44 6.03 4.44zm2.89-1.63c-.53 0-.97-.44-.97-.97 0-.54.44-.98.97-.98a.98.98 0 0 1 .98.98c0 .53-.44.97-.98.97z" />
  </svg>
);

const DjangoIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.624 3v9.068c0 .942-.236 1.706-.713 2.274-.476.568-1.157.852-2.038.852-.516 0-.95-.084-1.298-.246v-1.926c.264.12.546.18.846.18.594 0 .894-.378.894-1.146V3h2.309zm6.657 5.178h-2.148c-.024.3-.066.6-.126.9-.3-.144-.654-.216-1.056-.216-1.038 0-1.803.45-2.298 1.344-.312.57-.468 1.29-.468 2.16 0 1.944.756 2.916 2.262 2.916.348 0 .696-.06 1.044-.18a2.534 2.534 0 0 0 .156.912h2.298V8.178zm-2.304 4.896c0 .648-.12 1.134-.366 1.458-.24.318-.588.48-1.044.48-.48 0-.828-.168-1.044-.504-.216-.336-.324-.87-.324-1.602 0-.696.108-1.224.324-1.578.222-.36.57-.54 1.044-.54.456 0 .804.168 1.044.504.246.336.366.864.366 1.582z" />
  </svg>
);

const DRFIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M6 10h3M6 14h5" />
    <path d="M14 9.5L17.5 12l-3.5 2.5" />
  </svg>
);

const ReactIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const JSIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h18v18H3V3zm12.525 10.95c-.12-.765-.555-1.29-1.425-1.29-.69 0-1.11.36-1.11.96 0 .84.87.99 1.95 1.485 1.275.585 2.19 1.155 2.19 2.7 0 1.635-1.275 2.655-3.15 2.655-2.07 0-3.12-1.005-3.375-2.46h1.725c.165.735.615 1.11 1.575 1.11.75 0 1.275-.375 1.275-1.02 0-.825-.66-.99-1.68-1.44-1.215-.54-2.46-1.02-2.46-2.685 0-1.5 1.155-2.475 2.91-2.475 1.77 0 2.82.87 3.06 2.19h-1.89zm-6.225-1.68H7.59v5.7c0 1.125-.09 1.785-.81 1.785-.48 0-.765-.3-.765-1.05v-6.435H4.29V17.7c0 1.92 1.095 2.8 2.79 2.8 1.425 0 2.22-.645 2.22-2.1V12.27z"/>
  </svg>
);

const HTML5Icon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2h18l-1.62 18L12 22l-7.38-2L3 2zm13.12 6H7.38l.22 2.45h8.18l-.25 2.73L12 14.28l-3.53-1.1L8.25 11h-2.4l.43 4.85L12 17.38l5.72-1.53.4-4.85h.01L18.4 8h-2.28z"/>
  </svg>
);

const CSS3Icon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2h18l-1.62 18L12 22l-7.38-2L3 2zm12.63 6H7.83l.25 2.5h7.05l-.27 2.72L12 14.22l-2.86-1-.18-2h-2.5l.38 4.2L12 17.15l5.03-1.42.6-6.73H15.63z" />
  </svg>
);

const MySQLIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    <path d="M8 8.5c.5-1 2-2 4-2s3.5 1 4 2" strokeWidth="1"/>
  </svg>
);

const PostgreSQLIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2c-3.31 0-6 2.69-6 6 0 1.25.38 2.4 1.03 3.37L5.5 16.5A1 1 0 0 0 6.5 18h11a1 1 0 0 0 1-1.5l-1.53-5.13C17.62 10.4 18 9.25 18 8c0-3.31-2.69-6-6-6zm-2 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);

const SQLIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    <path d="M3 17v2c0 1.66 4 3 9 3s9-1.34 9-3v-2" />
  </svg>
);

const GitIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const PostmanIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22l10-6 10 6L12 2z" />
  </svg>
);

const skillCategories = [
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: <PythonIcon />, brandColor: 'text-amber-400 group-hover:text-amber-300 group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]', textHover: 'group-hover:text-amber-300' },
      { name: 'Django', icon: <DjangoIcon />, brandColor: 'text-emerald-500 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]', textHover: 'group-hover:text-emerald-400' },
      { name: 'DRF', icon: <DRFIcon />, brandColor: 'text-rose-500 group-hover:text-rose-400 group-hover:drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]', textHover: 'group-hover:text-rose-400' },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <ReactIcon />, brandColor: 'text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]', textHover: 'group-hover:text-cyan-300' },
      { name: 'JavaScript', icon: <JSIcon />, brandColor: 'text-yellow-400 group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]', textHover: 'group-hover:text-yellow-300' },
      { name: 'HTML5', icon: <HTML5Icon />, brandColor: 'text-orange-500 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]', textHover: 'group-hover:text-orange-400' },
      { name: 'CSS3', icon: <CSS3Icon />, brandColor: 'text-sky-400 group-hover:text-sky-300 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]', textHover: 'group-hover:text-sky-300' },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: <MySQLIcon />, brandColor: 'text-sky-500 group-hover:text-sky-400 group-hover:drop-shadow-[0_0_12px_rgba(14,165,233,0.6)]', textHover: 'group-hover:text-sky-400' },
      { name: 'PostgreSQL', icon: <PostgreSQLIcon />, brandColor: 'text-blue-400 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.6)]', textHover: 'group-hover:text-blue-300' },
      { name: 'SQL', icon: <SQLIcon />, brandColor: 'text-indigo-400 group-hover:text-indigo-300 group-hover:drop-shadow-[0_0_12px_rgba(129,140,248,0.6)]', textHover: 'group-hover:text-indigo-300' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <GitIcon />, brandColor: 'text-orange-500 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]', textHover: 'group-hover:text-orange-400' },
      { name: 'GitHub', icon: 'text-zinc-200 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]', textHover: 'group-hover:text-white' },
      { name: 'Postman', icon: <PostmanIcon />, brandColor: 'text-orange-400 group-hover:text-orange-300 group-hover:drop-shadow-[0_0_12px_rgba(251,146,60,0.6)]', textHover: 'group-hover:text-orange-300' },
    ]
  }
];

export default function Skills() {
  // Stagger animation configuration matching About section aesthetic
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Premium ease-out curve
      }
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="relative w-full pt-14 pb-20 sm:pt-20 sm:pb-24 bg-black bg-grid-dots z-10 overflow-hidden"
    >
      {/* Dynamic ambient violet glow background blobs */}
      <div 
        className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-violet-accent/5 blur-[120px] pointer-events-none z-0" 
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" 
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-start gap-8 sm:gap-10">
        
        {/* Editorial Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-black text-white flex items-baseline gap-1 select-none">
            Skills<span className="text-cyan-400 font-extrabold text-glow-subtle font-sans">.</span>
          </h2>
        </motion.div>

        {/* Stacked Categories Container in 2x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="rounded-[28px] border border-zinc-900/60 bg-zinc-950/20 backdrop-blur-xl p-6 sm:p-8 flex flex-col gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.55)] hover:border-zinc-800 transition-colors duration-500 text-left"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 select-none">
                <div className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-accent-light to-violet-accent" />
                <h3 className="font-syne text-lg sm:text-xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <motion.div 
                variants={cardContainerVariants}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      transition: { type: 'spring', stiffness: 450, damping: 15 }
                    }}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-zinc-900 bg-zinc-950/60 flex flex-col items-center justify-center p-2.5 sm:p-3 cursor-pointer select-none group overflow-hidden transition-all duration-300 hover:border-violet-accent/40 hover:bg-zinc-900/10 hover:shadow-[0_8px_30px_rgba(124,58,237,0.14)]"
                  >
                    {/* SVG Icon Centered (always colorful, scales & glows on hover) */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 transition-all duration-300 group-hover:scale-105 flex items-center justify-center mb-1.5 sm:mb-2">
                      {skill.name === 'GitHub' ? (
                        <div className={`w-full h-full transition-all duration-300 ${skill.icon}`}>
                          <GitHubIcon />
                        </div>
                      ) : (
                        <div className={`w-full h-full transition-all duration-300 ${skill.brandColor}`}>
                          {skill.icon}
                        </div>
                      )}
                    </div>

                    {/* Skill Name Label (always visible, transitions color on hover) */}
                    <span className={`text-[8px] sm:text-[9.5px] font-bold tracking-[0.15em] text-zinc-450 uppercase leading-none font-mono transition-colors duration-300 ${skill.textHover}`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
