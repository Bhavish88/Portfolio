import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeItem, setActiveItem] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Pill Navbar Wrapper */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-6 left-0 right-0 z-40 px-6 sm:px-12 flex justify-center pointer-events-none"
      >
        <div className="w-full max-w-5xl flex items-center justify-between py-3 px-6 sm:px-8 rounded-full border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] pointer-events-auto transition-colors duration-500 hover:border-zinc-700/40">
          
          {/* Left Branding */}
          <div className="flex items-center">
            <a 
              href="#home"
              onClick={() => setActiveItem('Home')}
              className="font-syne text-lg font-bold tracking-wider text-white hover:text-zinc-300 transition-colors duration-300 select-none"
            >
              Bhavish
            </a>
          </div>

          {/* Center Navigation for Desktop */}
          <nav className="hidden md:flex items-center gap-1.5 relative">
            {navItems.map((item, idx) => {
              const isActive = activeItem === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-4 py-2 text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 select-none ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {/* Sliding Hover Background Indicator */}
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-white/[0.04] border border-white/[0.03] rounded-full z-[-1]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {/* Underline for Active Item */}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      className="absolute bottom-1 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-violet-accent-light to-transparent"
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-full border border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all select-none focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, idx) => {
                const isActive = activeItem === item.name;
                return (
                  <motion.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    key={`mobile-${item.name}`}
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`font-syne text-xl tracking-[0.2em] uppercase font-semibold ${
                      isActive ? 'text-violet-accent-light' : 'text-zinc-400'
                    }`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
