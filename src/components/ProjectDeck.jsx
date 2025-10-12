import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectDeck = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleExploreProjects = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/projects');
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonGlowVariants = {
    initial: {
      boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)"
    },
    hover: {
      boxShadow: [
        "0 0 20px rgba(34, 211, 238, 0.3)",
        "0 0 40px rgba(34, 211, 238, 0.5)",
        "0 0 60px rgba(34, 211, 238, 0.3)"
      ],
      scale: 1.05,
      transition: {
        duration: 1,
        repeat: Infinity
      }
    }
  };

  const portalRingVariants = {
    spin: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    },
    spinReverse: {
      rotate: -360,
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900 py-20 px-4">
      <AnimatePresence mode="wait">
        {!isTransitioning ? (
          <motion.div
            key="portal"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 text-center max-w-4xl mx-auto"
          >
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                variants={floatingVariants}
                animate="float"
                className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
              />
              <motion.div
                variants={floatingVariants}
                animate="float"
                transition={{ delay: 1 }}
                className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
              />
              <motion.div
                variants={floatingVariants}
                animate="float"
                transition={{ delay: 2 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
              />
            </div>

            {/* Portal Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                variants={portalRingVariants}
                animate="spin"
                className="absolute w-96 h-96 border-2 border-cyan-400/30 rounded-full"
              />
              <motion.div
                variants={portalRingVariants}
                animate="spinReverse"
                className="absolute w-64 h-64 border border-purple-400/20 rounded-full"
              />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            {/* Main Content */}
            <motion.div variants={itemVariants} className="relative">
              {/* Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                />
                <span className="text-cyan-300 text-lg font-medium tracking-wider">PROJECT PORTAL</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2 
                variants={itemVariants}
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient bg-[length:200%_auto]">
                  EXPLORE
                </span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Step into my <span className="text-cyan-300 font-semibold">digital workshop</span> where ideas transform into exceptional web experiences
              </motion.p>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  variants={buttonGlowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onClick={handleExploreProjects}
                  className="group relative px-16 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl font-bold text-white text-xl md:text-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Animated background shine */}
                  <motion.div
                    animate={{ x: hovered ? "100%" : "-100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                  />
                  
                  <span className="relative z-10 flex items-center gap-4">
                    Enter Project Dimension
                    <motion.svg 
                      animate={{ x: hovered ? 10 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                </motion.button>
              </motion.div>

              {/* Preview Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center gap-6 mt-16"
              >
                <div className="text-cyan-300 text-sm font-medium tracking-wider">
                  PROJECTS AWAITING
                </div>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <motion.div
                      key={dot}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: dot * 0.2 
                      }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-20 w-full h-full flex items-center justify-center"
          >
            {/* Enhanced Vortex Transition */}
            <PortalTransition />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Separate component for the transition effect
const PortalTransition = () => {
  return (
    <>
      {/* Expanding Background */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20"
      />

      {/* Vortex Core */}
      <div className="relative">
        {/* Spinning Rings */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 720 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-80 h-80 border-4 border-cyan-400 rounded-full border-t-transparent"
        />
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -540 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-4 border-purple-400 rounded-full border-b-transparent"
        />
        
        {/* Pulsing Core */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-white text-2xl"
          >
            ⚡
          </motion.div>
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-20 text-center text-white"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Entering Project Dimension...
        </h3>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto"
        />
      </motion.div>
    </>
  );
};

export default ProjectDeck;