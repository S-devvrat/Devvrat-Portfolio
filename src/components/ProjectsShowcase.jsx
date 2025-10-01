import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectsShowcase = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      name: 'Ntechzy Website',
      description: 'Designed and developed the entire Ntechzy website as a Full Stack Developer using Next.js, Tailwind CSS, and TypeScript. Handled every aspect, from frontend layouts and smooth, interactive animations to backend integration with APIs for dynamic, real-time content.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'MongoDB', 'Node.js'],
      liveLink: 'https://ntechzy.vercel.app/',
      type: 'fullstack',
      image: '/images/ntechzy.jpg',
      gradient: 'from-blue-500 to-cyan-600',
      features: ['E-commerce Platform', 'User Authentication', 'Admin Dashboard', 'Payment Integration']
    },
    {
      name: 'Dhanwantari College Website',
      description: 'Developed the college website as a Full Stack Developer using React JSX, Tailwind CSS, and JavaScript. Created intuitive layouts, smooth animations, and integrated APIs for dynamic content and real-time updates.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Express.js'],
      liveLink: 'https://fancy-kitsune-f117e3.netlify.app/',
      type: 'fullstack',
      image: '/images/dhanwantari.jpg',
      gradient: 'from-purple-500 to-pink-600',
      features: ['College Portal', 'Course Management', 'Faculty Profiles', 'Event Calendar']
    },
    {
      name: 'SAS College Website',
      description: 'Worked as a Frontend Developer to create a visually appealing, responsive user interface using React JSX, JavaScript, and Tailwind CSS with smooth animations and engaging components.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://lovely-peony-82b6ce.netlify.app/',
      type: 'frontend',
      image: '/images/sas-college.jpg',
      gradient: 'from-green-500 to-teal-600',
      features: ['Modern UI', 'Smooth Animations', 'Accessibility', 'Component Library']
    },
    {
      name: 'Ntechzy Landing Page',
      description: 'Spearheaded the development of a visually striking, fully responsive landing page with React JSX, JavaScript, Tailwind CSS, and RESTful API integration for dynamic content.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'GSAP'],
      liveLink: 'https://rainbow-babka-555e08.netlify.app/',
      type: 'frontend',
      image: '/images/ntechzy-landing.jpg',
      gradient: 'from-orange-500 to-red-600',
      features: ['High Conversion', 'SEO Optimized', 'Analytics', 'A/B Testing']
    },
    {
      name: 'Suryadatta College Landing Page',
      description: 'Developed a visually engaging and responsive landing page with smooth animations and interactive components using React JSX, JavaScript, and Tailwind CSS.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'React Spring'],
      liveLink: 'https://glittery-stroopwafel-21bcf1.netlify.app/',
      type: 'frontend',
      image: '/images/suryadatta.jpg',
      gradient: 'from-indigo-500 to-purple-600',
      features: ['Brand Story', 'Interactive Design', 'Mobile First', 'Fast Loading']
    },
    {
      name: 'Bakson College Landing Page',
      description: 'Created a responsive landing page with RESTful API integration using React JSX, JavaScript, and Tailwind CSS, featuring smooth animations and interactive elements.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      liveLink: 'https://famous-pudding-fde077.netlify.app/',
      type: 'frontend',
      image: '/images/bakson.jpg',
      gradient: 'from-yellow-500 to-orange-600',
      features: ['Dynamic Content', 'API Integration', 'Cross-platform', 'Performance']
    }
  ];

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">

      {/* Enhanced Header */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Projects
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Showcasing my journey in building modern, responsive web applications
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center gap-3"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {projects.map((project, index) => (
          <motion.section
            key={project.name}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-20 lg:mb-32 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Image Side - Made Responsive */}
            <motion.div 
              className="w-full lg:flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative group">
                {/* Main Image Container */}
                <div className={`relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.gradient} aspect-video w-full shadow-2xl`}>
                  {/* Browser Mockup */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
                    {/* Browser Controls */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="flex gap-1 sm:gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-black/30 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
                        <span className="text-white/60 text-xs sm:text-sm font-mono truncate block">
                          {project.liveLink}
                        </span>
                      </div>
                    </div>
                    
                    {/* Image Content */}
                    <div className="flex-1 bg-black/20 rounded-xl lg:rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl sm:text-6xl mb-2 sm:mb-4 opacity-60">🖼️</div>
                        <p className="text-white/50 text-sm font-medium">{project.name}</p>
                        <p className="text-white/30 text-xs mt-1">Project Screenshot</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>

            {/* Content Side - Made Responsive */}
            <motion.div 
              className="w-full lg:flex-1 max-w-2xl mt-8 lg:mt-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 lg:space-y-8">
                {/* Project Header */}
                <div>
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                    <span className="text-cyan-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                      {project.type} Project
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {project.name}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3 sm:mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 sm:gap-3 text-white"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-300 mb-3 sm:mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 + 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm hover:bg-white/10 transition-all duration-300 cursor-default backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group text-sm sm:text-base"
                  >
                    <span>View Live Project</span>
                    <motion.svg
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
        ))}
      </div>

      {/* Simple Back Button at Bottom */}
      <div className="-mt-[135px] py-12 text-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onClick={handleBackClick}
          className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl sm:rounded-2xl font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 mx-auto group text-sm sm:text-base"
        >
          <motion.svg
            animate={{ x: [-2, 0, -2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </motion.svg>
          <span>Back to Home</span>
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectsShowcase;