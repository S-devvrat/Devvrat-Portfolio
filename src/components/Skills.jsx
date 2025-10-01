import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'compact'

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills = [
    { name: 'React', level: 90, icon: '⚛️', color: 'from-cyan-400 to-blue-500', category: 'frontend' },
    { name: 'Next.js', level: 85, icon: '▲', color: 'from-white to-blue-400', category: 'frontend' },
    { name: 'TypeScript', level: 80, icon: 'TS', color: 'from-blue-500 to-blue-700', category: 'frontend' },
    { name: 'Node.js', level: 85, icon: '⬢', color: 'from-green-500 to-green-600', category: 'backend' },
    { name: 'Tailwind CSS', level: 95, icon: '🌊', color: 'from-cyan-400 to-teal-500', category: 'frontend' },
    { name: 'REST API', level: 88, icon: '🔗', color: 'from-green-400 to-emerald-500', category: 'backend' },
    { name: 'Git', level: 82, icon: '📝', color: 'from-orange-400 to-red-500', category: 'tools' },
    { name: 'MongoDB', level: 70, icon: '🍃', color: 'from-green-400 to-green-600', category: 'backend' },
    { name: 'Python', level: 75, icon: '🐍', color: 'from-yellow-400 to-blue-500', category: 'backend' },
    { name: 'JavaScript', level: 92, icon: '🟨', color: 'from-yellow-400 to-yellow-500', category: 'frontend' },
    { name: 'HTML/CSS', level: 95, icon: '🌐', color: 'from-orange-500 to-blue-500', category: 'frontend' },
    { name: 'VS Code', level: 90, icon: '💻', color: 'from-blue-400 to-purple-500', category: 'tools' }
  ];

  const categories = {
    frontend: { name: 'Frontend', color: 'from-cyan-500 to-blue-500', icon: '⚡' },
    backend: { name: 'Backend', color: 'from-green-500 to-emerald-500', icon: '🛠️' },
    tools: { name: 'Tools', color: 'from-purple-500 to-pink-500', icon: '🔧' }
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [activeCategory, viewMode]);

  // Group skills by proficiency level
  const expertSkills = filteredSkills.filter(skill => skill.level >= 85);
  const advancedSkills = filteredSkills.filter(skill => skill.level >= 70 && skill.level < 85);
  const intermediateSkills = filteredSkills.filter(skill => skill.level < 70);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">Technical Expertise</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Skills & Tech
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            My <span className="text-cyan-300">technical toolkit</span> for building <span className="text-purple-300">modern web applications</span>
          </p>

          {/* View Mode Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-sm border ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
              }`}
            >
              Detailed View
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-sm border ${
                viewMode === 'compact'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
              }`}
            >
              Compact View
            </button>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-sm border ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent shadow-lg'
                : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
            }`}
          >
            All Skills
          </button>
          
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-sm border flex items-center gap-2 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {Object.entries(categories).map(([key, category]) => {
            const categorySkills = skills.filter(skill => skill.category === key);
            const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
            
            return (
              <div 
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`p-4 backdrop-blur-lg rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeCategory === key 
                    ? `bg-gradient-to-br ${category.color} border-transparent shadow-xl scale-105` 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:scale-102'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="font-bold text-white">{category.name}</h3>
                      <p className="text-sm text-gray-300">{categorySkills.length} skills</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-white">{avgLevel.toFixed(0)}%</span>
                </div>
                <div className="mt-3 w-full bg-black/30 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-white/80 transition-all duration-500"
                    style={{ width: `${avgLevel}%` }}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Skills Display based on View Mode */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            // Detailed Grid View
            <motion.div
              key="grid-view"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8"
            >
              {/* Expert Skills */}
              {expertSkills.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    Expert Level ({expertSkills.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {expertSkills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Advanced Skills */}
              {advancedSkills.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    Advanced Level ({advancedSkills.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {advancedSkills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Intermediate Skills */}
              {intermediateSkills.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                    Intermediate Level ({intermediateSkills.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {intermediateSkills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            // Compact View
            <motion.div
              key="compact-view"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-4 text-center transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-lg font-bold shadow-lg mx-auto mb-3`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2 truncate">
                      {skill.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                          className={`bg-gradient-to-r ${skill.color} h-1.5 rounded-full`}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-cyan-300 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="p-4 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-cyan-300">{skills.length}</div>
            <div className="text-sm text-gray-400">Total Skills</div>
          </div>
          <div className="p-4 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-green-300">
              {skills.filter(s => s.level >= 85).length}
            </div>
            <div className="text-sm text-gray-400">Expert Level</div>
          </div>
          <div className="p-4 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-blue-300">
              {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
            </div>
            <div className="text-sm text-gray-400">Average Proficiency</div>
          </div>
          <div className="p-4 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-purple-300">
              {Object.keys(categories).length}
            </div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Separate Skill Card Component for better organization
const SkillCard = ({ skill, index }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    }}
    whileHover={{ 
      scale: 1.03,
      y: -5,
      transition: { duration: 0.3 }
    }}
    className="group relative"
  >
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 h-full">
      
      {/* Skill Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-lg font-bold shadow-lg`}>
            {skill.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
              {skill.name}
            </h3>
            <span className="text-xs text-gray-400 capitalize">
              {skill.category}
            </span>
          </div>
        </div>
        
        <span className="text-cyan-300 font-bold text-lg">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Proficiency</span>
          <span className="text-cyan-300">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
            className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full transition-all duration-300 group-hover:scale-y-110 origin-left`}
          />
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  </motion.div>
);

export default Skills;