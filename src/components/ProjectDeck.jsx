import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectDeck = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleExploreProjects = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/projects');
    }, 2000); // Match this with animation duration
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.8,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    normal: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1 }
    },
    transitioning: {
      scale: 3,
      opacity: 0.8,
      rotate: 180,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    normal: {
      scale: 1,
      opacity: 0.3,
      transition: { duration: 0.5 }
    },
    transitioning: {
      scale: 10,
      opacity: 1,
      rotate: 360,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const vortexVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 px-4">
      <AnimatePresence mode="wait">
        {!isTransitioning ? (
          <motion.div
            key="normal"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center max-w-4xl mx-auto"
          >
            {/* Background Elements */}
            <motion.div
              variants={backgroundVariants}
              animate="normal"
              className="absolute inset-0"
            >
              <motion.div
                variants={particleVariants}
                animate="normal"
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500 rounded-full mix-blend-screen filter blur-xl"
              />
              <motion.div
                variants={particleVariants}
                animate="normal"
                className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500 rounded-full mix-blend-screen filter blur-xl"
              />
              <motion.div
                variants={particleVariants}
                animate="normal"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500 rounded-full mix-blend-screen filter blur-xl"
              />
            </motion.div>

            {/* Main Content */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 text-lg font-medium">Project Portal</span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
                Dive In
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Enter the realm of <span className="text-cyan-300 font-semibold">digital creation</span> and explore my universe of projects
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExploreProjects}
              className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl font-bold text-white text-lg md:text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                Enter Project Dimension
                <motion.svg 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
              </span>
            </motion.button>

            {/* Preview Dots */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 mt-16"
            >
              {[1, 2, 3].map((dot) => (
                <motion.div
                  key={dot}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: dot * 0.3 }}
                  className="w-3 h-3 bg-cyan-400 rounded-full opacity-60"
                />
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="transition"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-20 w-full h-full flex items-center justify-center"
          >
            {/* Vortex Effect */}
            <motion.div
              variants={vortexVariants}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                {/* Spinning Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border-4 border-cyan-400 rounded-full border-t-transparent"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-purple-400 rounded-full border-b-transparent"
                />
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                />
              </div>
            </motion.div>

            {/* Expanding Background */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 10, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20"
            />

            {/* Floating Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center text-white z-30"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Entering Project Dimension...
              </h3>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto"
              />
            </motion.div>

            {/* Particle Explosion */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: Math.cos((i * 36 * Math.PI) / 180) * 200,
                  y: Math.sin((i * 36 * Math.PI) / 180) * 200,
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                className={`absolute w-2 h-2 rounded-full ${
                  i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-white'
                }`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectDeck;