import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDeck = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      name: 'Ntechzy Website',
      description: 'Designed and developed the entire Ntechzy website as a Full Stack Developer using Next.js, Tailwind CSS, and TypeScript.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
      liveLink: 'https://ntechzy.vercel.app/',
      type: 'fullstack',
      category: 'fullstack',
      gradient: 'from-cyan-500 to-blue-600',
      icon: '⚡'
    },
    {
      name: 'Dhanwantari College',
      description: 'Developed the college website as a Full Stack Developer using React JSX, Tailwind CSS, and JavaScript.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      liveLink: 'https://fancy-kitsune-f117e3.netlify.app/',
      type: 'fullstack',
      category: 'fullstack',
      gradient: 'from-purple-500 to-pink-600',
      icon: '🎓'
    },
    {
      name: 'SAS College Website',
      description: 'Worked as a Frontend Developer to create a visually appealing, responsive user interface.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      liveLink: 'https://lovely-peony-82b6ce.netlify.app/',
      type: 'frontend',
      category: 'frontend',
      gradient: 'from-green-500 to-teal-600',
      icon: '🎨'
    },
    {
      name: 'Ntechzy Landing Page',
      description: 'Spearheaded the development of a visually striking, fully responsive landing page.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      liveLink: 'https://rainbow-babka-555e08.netlify.app/',
      type: 'frontend',
      category: 'frontend',
      gradient: 'from-orange-500 to-red-600',
      icon: '🚀'
    },
    {
      name: 'Suryadatta College',
      description: 'Developed a visually engaging and responsive landing page with smooth animations.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      liveLink: 'https://glittery-stroopwafel-21bcf1.netlify.app/',
      type: 'frontend',
      category: 'frontend',
      gradient: 'from-indigo-500 to-purple-600',
      icon: '💫'
    },
    {
      name: 'Bakson College',
      description: 'Created a responsive landing page with RESTful API integration.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      liveLink: 'https://famous-pudding-fde077.netlify.app/',
      type: 'frontend',
      category: 'frontend',
      gradient: 'from-yellow-500 to-orange-600',
      icon: '🌟'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const filterButtons = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-medium" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-fast" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Enhanced Header */}
      <div className="relative z-10 text-center mb-12 md:mb-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-300 text-sm font-medium">Featured Work</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 px-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient">
            Project Portfolio
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed"
        >
          Building <span className="text-cyan-300 font-semibold">modern web experiences</span> with cutting-edge technologies and <span className="text-purple-300 font-semibold">responsive design</span> principles
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 flex flex-wrap justify-center gap-3 mb-12 md:mb-16 px-4"
      >
        {filterButtons.map((filter) => (
          <motion.button
            key={filter.key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-6 py-3 rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 backdrop-blur-sm border ${
              activeFilter === filter.key
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent shadow-lg shadow-cyan-500/25'
                : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            {filter.label}
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              activeFilter === filter.key ? 'bg-white/20' : 'bg-white/10'
            }`}>
              {filter.count}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Enhanced Projects Grid */}
      <motion.div
        key={activeFilter}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-4"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Card Container */}
              <div 
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 h-full cursor-pointer overflow-hidden transition-all duration-500 group-hover:border-cyan-400/30 group-hover:shadow-2xl group-hover:shadow-cyan-500/10"
                onClick={() => window.open(project.liveLink, '_blank')}
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      style={{
                        left: `${20 + i * 20}%`,
                        top: '20%',
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      <span className="text-cyan-300 text-sm font-medium bg-cyan-500/10 px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-lg md:text-xl backdrop-blur-sm border border-white/10"
                    >
                      {project.icon}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.technologies.slice(0, isMobile ? 3 : 4).map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 md:px-3 py-1 bg-black/40 border border-cyan-400/20 rounded-full text-cyan-300 text-xs font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > (isMobile ? 3 : 4) && (
                      <span className="px-2 py-1 bg-black/40 border border-purple-400/20 rounded-full text-purple-300 text-xs">
                        +{project.technologies.length - (isMobile ? 3 : 4)}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-white text-sm md:text-base w-full group/btn overflow-hidden"
                  >
                    <span>View Project</span>
                    <motion.svg 
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(10px) translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-gradient { animation: gradient 3s ease infinite; background-size: 200% 200%; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </section>
  );
};

export default ProjectDeck;