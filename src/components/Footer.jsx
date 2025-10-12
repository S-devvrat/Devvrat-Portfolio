import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/devvrat-shukla/' },
    { name: 'Resume', icon: '📄', url: '/pdf/Devvrat Shukla Resumee.pdf' }
  ];

  

  const handleEmailClick = () => {
    window.location.href = 'mailto:devvratshukla77469@gmail.com';
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Devvrat Shukla</h3>
                <p className="text-cyan-300 text-sm">Full Stack Developer</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
              Passionate about creating responsive, scalable, and user-friendly web applications 
              using modern technologies. Let's build something amazing together!
            </p>

            
          </motion.div>

          {/* Empty column for spacing */}
          <div className="hidden lg:block"></div>

          {/* Connect Section - Aligned to right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:text-right"
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2 lg:justify-end">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              Let's Connect
            </h4>
            
            {/* Social Links */}
            <div className="space-y-4 mb-6 lg:flex lg:flex-col lg:items-end ">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.name === 'Email' ? undefined : social.url}
                  onClick={social.name === 'Email' ? handleEmailClick : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300 group lg:w-auto lg:justify-end"
                  target={social.name !== 'Email' ? '_blank' : '_self'}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : ''}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 text-sm text-gray-400 lg:justify-end">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Devvrat Shukla. All rights reserved.
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-400"
              >
                ❤️
              </motion.span>
              <span>using React & Tailwind CSS</span>
            </div>

            {/* Build Status */}
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1 px-2 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span>Production Ready</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/30 hover:text-white transition-all duration-300 group"
      >
        <motion.span
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lg"
        >
          ↑
        </motion.span>
      </motion.button>
    </footer>
  );
};

export default Footer;