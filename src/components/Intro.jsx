import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium Cinematic Intro Transition Component
 * 
 * Features:
 * - Entire screen starts black
 * - Welcome text appears in center with subtle letter spacing
 * - Large name text fades in with character-by-character staggered blur-reveal
 * - Slow cinematic scale-up (camera push-in effect)
 * - Subtle ambient radial light overlay that pulses
 * - Body scroll lock during intro
 * - Automatic fade-out/unmount callback
 */
export default function Intro({ onComplete, name = "I AM BHAVISH MULLESHWARI", welcomeText = "WELCOME" }) {
  
  // Handle automatic timeout and body scroll lock
  useEffect(() => {
    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    // Set a timer to trigger the exit transition after 3.8 seconds
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3800);

    return () => {
      // Restore body scroll on unmount
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Splits name into characters, handling spaces appropriately
  const nameChars = Array.from(name);

  // Framer Motion variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
      opacity: 0,
      filter: "blur(15px)",
      scale: 1.05,
      transition: { 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1] // Custom luxury cubic-bezier easeOut
      } 
    }
  };

  const welcomeVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(8px)", 
      y: 10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.4, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4
      } 
    }
  };

  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035, // Premium character-by-character cascade
        delayChildren: 1.1,     // Start after Welcome text settles
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(10px)", 
      scale: 0.85, 
      y: 8 
    },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const ambientGlowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: [0, 0.4, 0.2, 0.3],
      scale: [0.9, 1.1, 1.0, 1.05],
      transition: { 
        duration: 4, 
        ease: "easeInOut",
        times: [0, 0.4, 0.8, 1],
        repeat: 0
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black select-none overflow-hidden"
    >
      {/* Ambient background glow for visual depth (luxury touch) */}
      <motion.div 
        variants={ambientGlowVariants}
        className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_0%,rgba(255,255,255,0)_60%)] pointer-events-none"
      />

      {/* Main cinematic camera-push container */}
      <motion.div
        animate={{ scale: 1.025 }}
        transition={{ duration: 4.5, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center px-4"
      >
        {/* Welcome Text */}
        <motion.span
          variants={welcomeVariants}
          initial="hidden"
          animate="visible"
          className="font-sans uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.45em] text-zinc-500 font-medium mb-5 text-glow-subtle"
        >
          {welcomeText}
        </motion.span>

        {/* Name Text (Staggered Characters) */}
        <motion.h1
          variants={nameContainerVariants}
          initial="hidden"
          animate="visible"
          className="font-syne text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-glow-strong flex flex-nowrap justify-center whitespace-nowrap leading-tight max-w-none"
        >
          {nameChars.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block origin-bottom"
              style={{ 
                // Maintain space spacing
                marginRight: char === ' ' ? '0.25em' : '0',
                // Subtle modern gradient/glow masking
                willChange: "transform, opacity, filter" 
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
