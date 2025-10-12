import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const radarRef = useRef(null);

  const techStack = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️', color: '#61DAFB', category: 'Library' },
      { name: 'TypeScript', level: 85, icon: 'TS', color: '#3178C6', category: 'Language' },
      { name: 'Next.js', level: 80, icon: '▲', color: '#000000', category: 'Framework' },
      { name: 'Tailwind', level: 95, icon: '🌊', color: '#06B6D4', category: 'CSS' },
      { name: 'JavaScript', level: 92, icon: '🟨', color: '#F7DF1E', category: 'Language' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '⬢', color: '#339933', category: 'Runtime' },
      { name: 'Python', level: 75, icon: '🐍', color: '#3776AB', category: 'Language' },
      { name: 'MongoDB', level: 70, icon: '🍃', color: '#47A248', category: 'Database' },
      { name: 'PostgreSQL', level: 65, icon: '🐘', color: '#336791', category: 'Database' },
      { name: 'Express', level: 82, icon: '🚂', color: '#000000', category: 'Framework' }
    ],
    tools: [
      { name: 'Git', level: 90, icon: '📝', color: '#F05032', category: 'Version Control' },
      { name: 'Docker', level: 70, icon: '🐳', color: '#2496ED', category: 'Containerization' },
      { name: 'AWS', level: 65, icon: '☁️', color: '#FF9900', category: 'Cloud' },
      { name: 'Figma', level: 75, icon: '🎨', color: '#F24E1E', category: 'Design' },
      { name: 'VS Code', level: 95, icon: '💻', color: '#007ACC', category: 'Editor' }
    ]
  };

  const allSkills = [...techStack.frontend, ...techStack.backend, ...techStack.tools];

  // Fixed radial positioning
  const getSkillPosition = (index, total, radius = 200) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2; // Start from top
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium tracking-wider">TECHNICAL MASTERY</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A visual representation of my technical expertise and proficiency across modern development technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Frontend Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:border-cyan-400/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Frontend</h3>
                  <p className="text-slate-400">User Interface & Experience</p>
                </div>
              </div>
              <div className="space-y-4">
                {techStack.frontend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:border-green-400/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-lg">🛠️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Backend</h3>
                  <p className="text-slate-400">Server & Database</p>
                </div>
              </div>
              <div className="space-y-4">
                {techStack.backend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:border-purple-400/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-lg">🔧</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Tools</h3>
                  <p className="text-slate-400">Development & Deployment</p>
                </div>
              </div>
              <div className="space-y-4">
                {techStack.tools.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>


        {/* Tech Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-cyan-300 mb-2">{allSkills.length}</div>
            <div className="text-slate-400">Technologies</div>
          </div>
          <div className="text-center p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-green-300 mb-2">
              {allSkills.filter(s => s.level >= 85).length}
            </div>
            <div className="text-slate-400">Expert Level</div>
          </div>
          <div className="text-center p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-blue-300 mb-2">1+</div>
            <div className="text-slate-400">Years Experience</div>
          </div>
          <div className="text-center p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-purple-300 mb-2">
              {Math.round(allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length)}%
            </div>
            <div className="text-slate-400">Average Proficiency</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Skill Bar Component
const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          style={{ backgroundColor: skill.color }}
        >
          {skill.icon}
        </div>
        <span className="text-white font-medium">{skill.name}</span>
      </div>
      <span className="text-cyan-300 font-bold">{skill.level}%</span>
    </div>
    <div className="w-full bg-slate-700 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: index * 0.1 }}
        className="h-2 rounded-full transition-all duration-300 group-hover:shadow-lg"
        style={{ backgroundColor: skill.color }}
      />
    </div>
  </motion.div>
);

export default Skills;