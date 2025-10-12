import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DevelopmentPhilosophy = () => {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      title: "Clean Code",
      description: "Writing maintainable, readable code that stands the test of time",
      icon: "💎",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "User First",
      description: "Designing experiences that prioritize user needs and accessibility",
      icon: "👥",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Performance",
      description: "Building fast, efficient applications that scale gracefully",
      icon: "⚡",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Innovation",
      description: "Embracing new technologies while respecting proven patterns",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePrinciple(prev => (prev + 1) % principles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [principles.length]);

  return (
    <section className="h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden flex items-center justify-center">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Main Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 text-sm font-medium">DEVELOPMENT PHILOSOPHY</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building With
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Purpose
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Every line of code tells a story. I believe in creating digital experiences 
              that not only function flawlessly but also make a meaningful impact on users' lives.
            </p>
          </motion.div>

          {/* Right Side - Rotating Principles */}
          <div className="relative h-96">
            {principles.map((principle, index) => (
              <PrincipleCard
                key={principle.title}
                principle={principle}
                index={index}
                activePrinciple={activePrinciple}
                onHover={() => setActivePrinciple(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const PrincipleCard = ({ principle, index, activePrinciple, onHover }) => {
  const isActive = index === activePrinciple;
  const position = index - activePrinciple;
  
  return (
    <motion.div
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : Math.max(0.3, 1 - Math.abs(position) * 0.4),
        x: position * 100,
        zIndex: isActive ? 30 : 20 - Math.abs(position)
      }}
      transition={{ duration: 0.5 }}
      className={`absolute top-0 left-0 right-0 backdrop-blur-xl bg-white/5 border rounded-2xl p-8 cursor-pointer transition-all duration-500 ${
        isActive ? 'border-cyan-400/30 shadow-2xl shadow-cyan-500/10' : 'border-white/10'
      }`}
      onMouseEnter={onHover}
    >
      <motion.div
        animate={{ scale: isActive ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center text-2xl mb-6`}
      >
        {principle.icon}
      </motion.div>
      
      <h3 className="text-2xl font-bold text-white mb-4">
        {principle.title}
      </h3>
      
      <p className="text-slate-300 leading-relaxed">
        {principle.description}
      </p>

      {/* Progress indicator */}
      <div className="flex gap-1 mt-6">
        {[0, 1, 2, 3].map((dotIndex) => (
          <div
            key={dotIndex}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              dotIndex === index ? 'bg-cyan-400' : 'bg-slate-600'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default DevelopmentPhilosophy;