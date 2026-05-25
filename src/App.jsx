import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative min-h-screen bg-black text-zinc-300 font-sans selection:bg-zinc-850 selection:text-white overflow-x-hidden">
      {/* Premium Cinematic Intro Transition */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <Intro 
            key="intro-screen" 
            onComplete={() => setShowIntro(false)} 
            name="I AM BHAVISH MULLESHWARI" 
            welcomeText="WELCOME"
          />
        )}
      </AnimatePresence>

      {/* Main Portfolio Homepage */}
      <AnimatePresence>
        {!showIntro && (
          <>
            <Navbar />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certificates />
              <Contact />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
