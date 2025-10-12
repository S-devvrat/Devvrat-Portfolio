import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalContact = () => {
  const [commands, setCommands] = useState([
    { text: 'Welcome to Devvrat\'s terminal interface', type: 'system', delay: 0 },
    { text: 'Type "help" to see available commands', type: 'system', delay: 100 },
    { text: '────────────────────────────────────────', type: 'divider', delay: 200 }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentPath, setCurrentPath] = useState('~/portfolio');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const commandList = {
    help: {
      response: [
        'Available commands:',
        '────────────────────────────────────────',
        '• help     - Show this help message',
        '• about    - Learn about Devvrat',
        '• skills   - View technical skills', 
        '• projects - See featured projects',
        '• contact  - Get contact information',
        '• resume   - Download resume',
        '• social   - Social media links',
        '• clear    - Clear terminal',
        '• theme    - Change terminal theme',
        '────────────────────────────────────────',
        'Tip: Use ↑/↓ arrows for command history'
      ],
      type: 'system'
    },
    about: {
      response: [
        'Devvrat Shukla - Full Stack Developer',
        '────────────────────────────────────────',
        '📍 Based in India',
        '💻 1+ years of development experience',
        '🎯 Specialized in modern web technologies',
        '🚀 Passionate about creating digital experiences',
        '📚 Constantly learning and evolving',
        '────────────────────────────────────────',
        'I transform ideas into functional, beautiful web applications that solve real problems.'
      ],
      type: 'system'
    },
    skills: {
      response: [
        'Technical Stack:',
        '────────────────────────────────────────',
        'Frontend:    React, Next.js, TypeScript, Tailwind CSS',
        'Backend:     Node.js, Express, REST APIs, MongoDB',
        'Mobile:      React Native, Expo',
        'Tools:       Git, Docker, VS Code, Figma, Vercel',
        'Languages:   JavaScript, TypeScript, Python, SQL',
        '────────────────────────────────────────',
        'Always exploring: AI/ML, Web3, Cloud Architecture'
      ],
      type: 'system'
    },
    projects: {
      response: [
        'Featured Projects:',
        '────────────────────────────────────────',
        '🏪 E-Commerce Platform - Full stack online store',
        '🎓 College Portal - Educational management system',
        '📊 Analytics Dashboard - Real-time data visualization',
        '🤖 AI Chat Application - Intelligent conversation bot',
        '📱 Mobile App - Cross-platform React Native app',
        '────────────────────────────────────────',
        'View detailed case studies in portfolio section →'
      ],
      type: 'system'
    },
    contact: {
      response: [
        'Contact Information:',
        '────────────────────────────────────────',
        '📧 Email:    devvratshukla77469@gmail.com',
        '📱 Phone:    +91 8929020080',
        '📍 Location: India',
        '💼 LinkedIn: linkedin.com/in/devvrat-shukla',
        '🐙 GitHub:   github.com/S-devvrat',
        '────────────────────────────────────────',
        'Quick actions:',
        '• Type "copy email" to copy email address',
        '• Type "copy phone" to copy phone number'
      ],
      type: 'contact'
    },
    resume: {
      response: [
        '📄 Opening resume in new tab...',
        '✅ Resume downloaded successfully!'
      ],
      type: 'action',
      action: () => window.open('/pdf/Devvrat Shukla Resumee.pdf', '_blank')
    },
    social: {
      response: [
        'Social Media:',
        '────────────────────────────────────────',
        '💼 LinkedIn  - /in/devvrat-shukla',
        '🐙 GitHub    - /S-devvrat',
        '────────────────────────────────────────',
        'Feel free to connect! 👋'
      ],
      type: 'social'
    },
    theme: {
      response: [
        'Available themes:',
        '────────────────────────────────────────',
        '• green (current) - Classic hacker theme',
        '• blue  - Cyber blue theme',
        '• purple - Royal purple theme',
        '• orange - Sunset orange theme',
        '────────────────────────────────────────',
        'Usage: theme [color-name]'
      ],
      type: 'system'
    },
    clear: {
      response: [],
      type: 'clear'
    },
    'copy email': {
      response: ['✅ Email copied to clipboard!'],
      type: 'success',
      action: () => navigator.clipboard.writeText('devvratshukla77469@gmail.com')
    },
    'copy phone': {
      response: ['✅ Phone number copied to clipboard!'],
      type: 'success', 
      action: () => navigator.clipboard.writeText('+91 8929020080')
    }
  };

  // Theme variants
  const themes = {
    green: { primary: 'text-green-400', border: 'border-green-400', glow: 'shadow-green-500' },
    blue: { primary: 'text-blue-400', border: 'border-blue-400', glow: 'shadow-blue-500' },
    purple: { primary: 'text-purple-400', border: 'border-purple-400', glow: 'shadow-purple-500' },
    orange: { primary: 'text-orange-400', border: 'border-orange-400', glow: 'shadow-orange-500' }
  };
  const [currentTheme, setCurrentTheme] = useState('green');

  const handleCommand = (cmd) => {
    const lowerCmd = cmd.toLowerCase().trim();
    const command = commandList[lowerCmd];

    // Handle theme change
    if (lowerCmd.startsWith('theme ')) {
      const themeName = lowerCmd.split(' ')[1];
      if (themes[themeName]) {
        setCurrentTheme(themeName);
        setCommands(prev => [
          ...prev, 
          { text: `> ${cmd}`, type: 'user' },
          { text: `✅ Theme changed to ${themeName}`, type: 'success' }
        ]);
        return;
      }
    }

    if (command) {
      // Add to command history
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);

      // Add user command to display
      setCommands(prev => [...prev, { text: `➜ ${currentPath} $ ${cmd}`, type: 'user' }]);
      
      // Execute command action if exists
      if (command.action) {
        setTimeout(() => command.action(), 500);
      }

      // Clear command if needed
      if (command.type === 'clear') {
        setTimeout(() => setCommands([]), 100);
      } else {
        // Add command response with staggered delay
        command.response.forEach((line, index) => {
          setTimeout(() => {
            setCommands(prev => [...prev, { text: line, type: command.type }]);
          }, index * 30);
        });
      }
    } else {
      setCommands(prev => [
        ...prev, 
        { text: `➜ ${currentPath} $ ${cmd}`, type: 'user' },
        { text: `❌ Command not found: "${cmd}"`, type: 'error' },
        { text: '💡 Type "help" for available commands', type: 'system' }
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsTyping(true);
    handleCommand(input);
    setInput('');
    
    setTimeout(() => {
      setIsTyping(false);
      terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
    }, 300);
  };

  const handleKeyDown = (e) => {
    // Command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [commands]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className={`absolute top-1/4 left-1/4 w-72 h-72 ${themes[currentTheme].primary} rounded-full mix-blend-screen filter blur-3xl`}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-2 h-2 ${themes[currentTheme].primary} rounded-full`}
            />
            <span className={`${themes[currentTheme].primary} text-lg font-medium tracking-wider`}>
              INTERACTIVE TERMINAL
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              Developer Portal
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my skills and get in touch through this interactive terminal
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={`bg-gray-900 rounded-2xl ${themes[currentTheme].border}/20 border shadow-2xl ${themes[currentTheme].glow}/10 overflow-hidden backdrop-blur-sm`}
        >
          {/* Terminal Header */}
          <div className={`bg-gray-800 px-6 py-4 border-b ${themes[currentTheme].border}/20 flex items-center justify-between`}>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className={`w-3 h-3 ${themes[currentTheme].primary} rounded-full`}></div>
              </div>
              <div className={`${themes[currentTheme].primary} text-sm font-mono`}>
                devvrat@portfolio:~$
              </div>
            </div>
            <div className="text-gray-400 text-sm font-mono">
              v2.1.0
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={terminalRef}
            className="h-96 p-6 font-mono text-sm overflow-y-auto terminal-scroll bg-gray-900/50"
          >
            <AnimatePresence>
              {commands.map((command, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: command.delay ? command.delay / 1000 : 0 }}
                  className={`mb-1 ${
                    command.type === 'user' ? themes[currentTheme].primary :
                    command.type === 'error' ? 'text-red-400' :
                    command.type === 'contact' ? 'text-cyan-400' :
                    command.type === 'social' ? 'text-purple-400' :
                    command.type === 'success' ? 'text-green-400' :
                    command.type === 'divider' ? 'text-gray-600' :
                    'text-gray-300'
                  } ${command.type === 'divider' ? 'select-none' : ''}`}
                >
                  {command.text}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
              <span className={themes[currentTheme].primary}>➜</span>
              <span className="text-cyan-400">{currentPath}</span>
              <span className="text-white">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white outline-none font-mono placeholder-gray-600"
                placeholder={isTyping ? '' : 'Type a command...'}
                disabled={isTyping}
                autoFocus
                spellCheck="false"
              />
              {isTyping && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className={`w-2 h-4 ${themes[currentTheme].primary}`}
                />
              )}
            </form>
          </div>
        </motion.div>

        {/* Quick Commands & Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          {/* Quick Commands */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className={`${themes[currentTheme].primary} font-mono text-sm mb-4`}>QUICK COMMANDS</h3>
            <div className="flex flex-wrap gap-2">
              {['help', 'about', 'skills', 'contact', 'resume', 'social'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setInput(cmd);
                    setTimeout(() => {
                      handleSubmit(new Event('submit'));
                    }, 100);
                  }}
                  className={`px-3 py-2 bg-white/5 border ${themes[currentTheme].border}/30 rounded-lg ${themes[currentTheme].primary} text-sm font-mono hover:bg-white/10 transition-all duration-200 hover:scale-105`}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className={`${themes[currentTheme].primary} font-mono text-sm mb-4`}>FEATURES</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <div>• Command history (↑/↓ arrows)</div>
              <div>• Multiple color themes</div>
              <div>• Quick copy actions</div>
              <div>• Interactive responses</div>
              <div>• Mobile responsive</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .terminal-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(34, 197, 94, 0.3) transparent;
        }
        .terminal-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .terminal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .terminal-scroll::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.3);
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
};

export default TerminalContact;