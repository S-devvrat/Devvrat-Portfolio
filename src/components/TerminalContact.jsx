import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalContact = () => {
  const [commands, setCommands] = useState([
    { text: 'Welcome to Devvrat\'s terminal interface', type: 'system' },
    { text: 'Type "help" to see available commands', type: 'system' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const commandList = {
    help: {
      response: [
        'Available commands:',
        '• help - Show this help message',
        '• about - Learn about Devvrat',
        '• skills - View technical skills',
        '• projects - See featured projects', 
        '• contact - Get contact information',
        '• resume - Download resume',
        '• clear - Clear terminal',
      ],
      type: 'system'
    },
    about: {
      response: [
        'Devvrat Shukla - Full Stack Developer',
        'Passionate about building modern web applications',
        'Specialized in React, Next.js, Node.js, and TypeScript',
        'Love creating responsive, user-friendly interfaces',
        'Always learning and exploring new technologies'
      ],
      type: 'system'
    },
    skills: {
      response: [
        'Frontend: React, Next.js, TypeScript, Tailwind CSS',
        'Backend: Node.js, Express, REST APIs, MongoDB',
        'Tools: Git, VS Code, Figma, Vercel, Netlify',
        'Languages: JavaScript, TypeScript, Python, HTML/CSS'
      ],
      type: 'system'
    },
    projects: {
      response: [
        'Featured Projects:',
        '• Website - Full stack e-commerce platform',
        '• College Portals - Educational institution websites', 
        '• Landing Pages - Responsive marketing pages',
        'Visit portfolio section for details →'
      ],
      type: 'system'
    },
    contact: {
      response: [
        '📧 Email: devvratshukla77469@gmail.com',
        '📱 Phone: +91 8929020080',
        '📍 Location: India',
      ],
      type: 'contact'
    },
    resume: {
      response: [
        '📄 Download Resume:',
        'Opening resume in new tab...'
      ],
      type: 'action',
      action: () => window.open('/pdf/Devvrat Shukla Resume.pdf', '_blank')
    },
    clear: {
      response: [],
      type: 'clear'
    },
    'copy email': {
      response: ['✅ Email copied to clipboard: devvratshukla@example.com'],
      type: 'action',
      action: () => navigator.clipboard.writeText('devvratshukla@example.com')
    },
    'copy phone': {
      response: ['✅ Phone copied to clipboard: +91 98765 43210'],
      type: 'action', 
      action: () => navigator.clipboard.writeText('+91 98765 43210')
    }
  };

  const handleCommand = (cmd) => {
    const lowerCmd = cmd.toLowerCase().trim();
    const command = commandList[lowerCmd];

    if (command) {
      // Add user command to history
      setCommands(prev => [...prev, { text: `> ${cmd}`, type: 'user' }]);
      
      // Execute command action if exists
      if (command.action) {
        command.action();
      }

      // Clear command if needed
      if (command.type === 'clear') {
        setTimeout(() => setCommands([]), 100);
      } else {
        // Add command response
        command.response.forEach((line, index) => {
          setTimeout(() => {
            setCommands(prev => [...prev, { text: line, type: command.type }]);
          }, index * 50);
        });
      }
    } else {
      setCommands(prev => [
        ...prev, 
        { text: `> ${cmd}`, type: 'user' },
        { text: `Command not found: "${cmd}"`, type: 'error' },
        { text: 'Type "help" for available commands', type: 'system' }
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

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [commands]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-10" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              Know More About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Developer-friendly contact interface
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900 rounded-2xl border border-green-400/20 shadow-2xl shadow-green-500/10 overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-6 py-3 border-b border-green-400/20 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-green-400 text-sm font-mono">
              devvrat@portfolio:~$
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={terminalRef}
            className="h-96 p-6 font-mono text-sm overflow-y-auto terminal-scroll"
          >
            <AnimatePresence>
              {commands.map((command, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-2 ${
                    command.type === 'user' ? 'text-green-400' :
                    command.type === 'error' ? 'text-red-400' :
                    command.type === 'contact' ? 'text-cyan-400' :
                    command.type === 'social' ? 'text-purple-400' :
                    'text-gray-300'
                  }`}
                >
                  {command.text}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
              <span className="text-green-400">➜</span>
              <span className="text-cyan-400">~</span>
              <span className="text-white">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-green-400 outline-none font-mono"
                placeholder={isTyping ? '' : 'Type a command...'}
                disabled={isTyping}
                autoFocus
              />
              {isTyping && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-2 h-4 bg-green-400"
                />
              )}
            </form>
          </div>
        </motion.div>

        {/* Quick Commands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 mb-4">Try these commands:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['help', 'about', 'skills', 'contact', 'resume'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInput(cmd);
                  setTimeout(() => {
                    handleSubmit(new Event('submit'));
                  }, 100);
                }}
                className="px-3 py-1 bg-green-500/10 border border-green-400/30 rounded-lg text-green-400 text-sm font-mono hover:bg-green-500/20 transition-colors"
              >
                {cmd}
              </button>
            ))}
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