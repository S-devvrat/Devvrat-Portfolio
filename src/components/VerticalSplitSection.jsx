import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const VerticalSplitSection = () => {
  const containerRef = useRef(null);
  const [isSplitComplete, setIsSplitComplete] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // REMOVED all scroll blocking code

  // Smooth spring physics for animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Split animation - completes at 50% scroll
  const splitProgress = useTransform(smoothProgress, [0, 0.5], [0, 1]);
  
  // Check when split is complete
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      if (latest >= 0.5 && !isSplitComplete) {
        setIsSplitComplete(true);
      } else if (latest < 0.5 && isSplitComplete) {
        setIsSplitComplete(false);
      }
    });
    
    return () => unsubscribe();
  }, [smoothProgress, isSplitComplete]);

  // Slow, gradual separation with overflow
  const leftSectionX = useTransform(splitProgress, 
    [0, 1], 
    [0, -300]
  );
  
  const rightSectionX = useTransform(splitProgress, 
    [0, 1], 
    [0, 300]
  );

  const gapWidth = useTransform(splitProgress, 
    [0, 1], 
    [0, 400]
  );

  const leftContentOpacity = useTransform(splitProgress, 
    [0, 0.8, 1], 
    [1, 0.7, 0.3]
  );
  
  const rightContentOpacity = useTransform(splitProgress, 
    [0, 0.8, 1], 
    [1, 0.7, 0.3]
  );

  const contentScale = useTransform(splitProgress, 
    [0, 1], 
    [1, 0.8]
  );

  const centerLineScale = useTransform(splitProgress, [0, 1], [1, 1.5]);
  const topParticleY = useTransform(splitProgress, [0, 1], [0, -100]);
  const topParticleOpacity = useTransform(splitProgress, [0, 0.8], [1, 0]);
  const bottomParticleY = useTransform(splitProgress, [0, 1], [0, 100]);
  const bottomParticleOpacity = useTransform(splitProgress, [0, 0.8], [1, 0]);
  
  const progressIndicatorScale = useTransform(splitProgress, [0, 1], [1, 0.8]);
  const progressIndicatorOpacity = useTransform(splitProgress, [0.7, 1], [1, 0]);
  
  const [displayProgress, setDisplayProgress] = useState("0%");

  // Update scroll progress text
  useEffect(() => {
    const unsubscribe = splitProgress.on("change", (latest) => {
      setDisplayProgress(`${Math.round(latest * 100)}%`);
    });
    
    return () => unsubscribe();
  }, [splitProgress]);

  const techStack = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Three.js'],
    backend: ['Node.js', 'Python', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman', 'AWS']
  };

  const inspirationalLines = [
    "Code is poetry in motion",
    "Transforming ideas into digital reality",
    "Where creativity meets functionality",
    "Building the future, one line at a time",
    "Digital dreams made tangible",
    "Architecting experiences that inspire"
  ];

  return (
    <section 
      ref={containerRef} 
      className="min-h-[130vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-30deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] " />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Sticky Container */}
      <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-visible">
        <div className="relative w-full h-full flex">
          {/* Left Side - Technical Skills */}
          <motion.div 
            style={{ 
              x: leftSectionX,
              opacity: leftContentOpacity,
              scale: contentScale
            }}
            className="flex-1 flex items-center justify-end pr-4 lg:pr-8 xl:pr-16 relative"
          >
            {/* Overflow Gradient Mask */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-20 " />
            
            <div className="max-w-lg relative z-10 mt-[60px]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-500/10 backdrop-blur-lg rounded-full border border-cyan-500/20">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-cyan-300 text-sm font-medium">Technical Arsenal</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Built With<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                    Modern Tech
                  </span>
                </h2>

                {/* Tech Stack Categories */}
                <div className="space-y-6">
                  {Object.entries(techStack).map(([category, technologies]) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/20 transition-all duration-500"
                    >
                      <h3 className="text-lg font-semibold text-cyan-300 mb-4 capitalize">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white border border-white/10 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating Elements that move with the section */}
            <motion.div
              style={{ x: leftSectionX }}
              className="absolute -left-20 top-1/4 text-6xl opacity-20"
            >
              ⚡
            </motion.div>
            <motion.div
              style={{ x: leftSectionX }}
              className="absolute -left-32 bottom-1/4 text-5xl opacity-15"
            >
              💻
            </motion.div>
          </motion.div>

          {/* Animated Center Divider */}
          <motion.div 
            style={{ width: gapWidth }}
            className="flex items-center justify-center relative"
          >
            {/* Glowing Center Line */}
            <motion.div 
              style={{ scale: centerLineScale }}
              className="h-3/4 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full shadow-2xl shadow-cyan-400/30 relative"
            >
              {/* Floating Particles */}
              <motion.div
                style={{ 
                  y: topParticleY,
                  opacity: topParticleOpacity
                }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400"
              />
              <motion.div
                style={{ 
                  y: bottomParticleY,
                  opacity: bottomParticleOpacity
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400"
              />
            </motion.div>

            {/* Scroll Progress Indicator */}
            <motion.div
              style={{ 
                scale: progressIndicatorScale,
                opacity: progressIndicatorOpacity
              }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-cyan-400 text-2xl mb-2"
              >
                ⭕
              </motion.div>
              <div className="text-white text-xs bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                {displayProgress}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Creative Inspiration */}
          <motion.div 
            style={{ 
              x: rightSectionX,
              opacity: rightContentOpacity,
              scale: contentScale
            }}
            className="flex-1 flex items-center justify-start pl-4 lg:pl-8 xl:pl-16 relative"
          >
            {/* Overflow Gradient Mask */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-20" />
            
            <div className="max-w-lg relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 backdrop-blur-lg rounded-full border border-purple-500/20">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-purple-300 text-sm font-medium">Creative Vision</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Driven By<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Innovation
                  </span>
                </h2>

                {/* Inspirational Lines */}
                <div className="space-y-4 mb-8">
                  {inspirationalLines.map((line, index) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-lg text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.5 }}
                        className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0 group-hover:bg-pink-400 transition-colors duration-300"
                      />
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="group-hover:text-purple-200 transition-all duration-300"
                      >
                        {line}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Philosophy Statement */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/20 transition-all duration-500"
                >
                  <p className="text-cyan-200 italic text-center mb-4 text-lg">
                    "The web is my canvas, code is my brush, and user experience is my masterpiece."
                  </p>
                  <div className="text-right text-sm text-gray-400">
                    - Digital Craftsman
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Elements that move with the section */}
            <motion.div
              style={{ x: rightSectionX }}
              className="absolute -right-20 top-1/3 text-6xl opacity-20"
            >
              🎨
            </motion.div>
            <motion.div
              style={{ x: rightSectionX }}
              className="absolute -right-32 bottom-1/3 text-5xl opacity-15"
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VerticalSplitSection;