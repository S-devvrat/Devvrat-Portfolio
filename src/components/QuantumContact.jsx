// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const QuantumContact = () => {
//   const [activeDimension, setActiveDimension] = useState('message');
//   const [isTransmitting, setIsTransmitting] = useState(false);
//   const [entanglementLevel, setEntanglementLevel] = useState(0);
//   const canvasRef = useRef(null);

//   const dimensions = [
//     { id: 'message', name: 'Quantum Message', icon: '📡', color: 'from-cyan-500 to-blue-500' },
//     { id: 'connect', name: 'Neural Connect', icon: '🧠', color: 'from-purple-500 to-pink-500' },
//     { id: 'portal', name: 'Portal Access', icon: '🌀', color: 'from-green-500 to-teal-500' },
//     { id: 'sync', name: 'Mind Sync', icon: '⚡', color: 'from-orange-500 to-red-500' }
//   ];

//   // Quantum particle animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     let animationFrame;
//     const particles = [];

//     class QuantumParticle {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.vx = (Math.random() - 0.5) * 2;
//         this.vy = (Math.random() - 0.5) * 2;
//         this.size = Math.random() * 3 + 1;
//         this.alpha = Math.random() * 0.5 + 0.2;
//         this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

//         this.alpha = 0.2 + Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.3;
//       }

//       draw() {
//         ctx.save();
//         ctx.globalAlpha = this.alpha;
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
        
//         // Glow effect
//         ctx.shadowBlur = 15;
//         ctx.shadowColor = this.color;
//         ctx.fill();
//         ctx.restore();
//       }
//     }

//     // Initialize particles
//     for (let i = 0; i < 50; i++) {
//       particles.push(new QuantumParticle());
//     }

//     const animate = () => {
//       ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       // Draw quantum entanglement lines
//       ctx.strokeStyle = `rgba(34, 211, 238, ${entanglementLevel / 100})`;
//       ctx.lineWidth = 1;

//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }

//       animationFrame = requestAnimationFrame(animate);
//     };

//     const handleResize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     animate();

//     return () => {
//       cancelAnimationFrame(animationFrame);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [entanglementLevel]);

//   const handleTransmissionStart = () => {
//     setIsTransmitting(true);
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += 2;
//       setEntanglementLevel(progress);
//       if (progress >= 100) {
//         clearInterval(interval);
//         setTimeout(() => {
//           setIsTransmitting(false);
//           setEntanglementLevel(0);
//         }, 2000);
//       }
//     }, 50);
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
//       {/* Quantum Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//       />

//       {/* Pulsing Core */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           className="w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"
//         />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-20">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-cyan-400/30">
//             <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
//             <span className="text-cyan-300 text-sm font-medium">Quantum Communication Interface</span>
//           </div>

//           <h2 className="text-5xl md:text-7xl font-bold mb-6">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient">
//               Initiate Connection
//             </span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//             Establish quantum entanglement across the digital spectrum
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Dimension Selector */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-white mb-6">Select Communication Dimension</h3>
            
//             {dimensions.map((dimension) => (
//               <motion.button
//                 key={dimension.id}
//                 whileHover={{ scale: 1.02, x: 10 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => setActiveDimension(dimension.id)}
//                 className={`w-full p-6 rounded-2xl backdrop-blur-lg border-2 transition-all duration-300 text-left ${
//                   activeDimension === dimension.id
//                     ? `bg-gradient-to-r ${dimension.color} border-transparent text-white shadow-2xl`
//                     : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-cyan-400/30'
//                 }`}
//               >
//                 <div className="flex items-center gap-4">
//                   <span className="text-2xl">{dimension.icon}</span>
//                   <div>
//                     <h4 className="text-lg font-semibold mb-1">{dimension.name}</h4>
//                     <p className="text-sm opacity-80">
//                       {dimension.id === 'message' && 'Transmit quantum-encoded message'}
//                       {dimension.id === 'connect' && 'Establish neural interface connection'}
//                       {dimension.id === 'portal' && 'Open dimensional communication portal'}
//                       {dimension.id === 'sync' && 'Initiate consciousness synchronization'}
//                     </p>
//                   </div>
//                 </div>
//               </motion.button>
//             ))}
//           </div>

//           {/* Communication Interface */}
//           <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeDimension}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="h-full"
//               >
//                 {/* Quantum Message */}
//                 {activeDimension === 'message' && (
//                   <div className="space-y-6">
//                     <h3 className="text-2xl font-bold text-white mb-2">Quantum Message Transmission</h3>
//                     <p className="text-gray-400 mb-6">Encode your message in quantum bits for secure delivery</p>
                    
//                     <div className="space-y-4">
//                       <input
//                         type="text"
//                         placeholder="Your quantum signature"
//                         className="w-full p-4 bg-black/30 border border-cyan-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
//                       />
//                       <textarea
//                         placeholder="Enter your quantum-encoded message..."
//                         rows="4"
//                         className="w-full p-4 bg-black/30 border border-cyan-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Temporal coordinates"
//                         className="w-full p-4 bg-black/30 border border-cyan-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {/* Neural Connect */}
//                 {activeDimension === 'connect' && (
//                   <div className="space-y-6">
//                     <h3 className="text-2xl font-bold text-white mb-2">Neural Interface</h3>
//                     <p className="text-gray-400 mb-6">Establish direct neural connection through quantum tunneling</p>
                    
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="p-4 bg-black/30 border border-purple-400/30 rounded-xl text-center">
//                         <div className="text-2xl mb-2">📧</div>
//                         <div className="text-sm text-purple-300">Email Sync</div>
//                       </div>
//                       <div className="p-4 bg-black/30 border border-purple-400/30 rounded-xl text-center">
//                         <div className="text-2xl mb-2">💼</div>
//                         <div className="text-sm text-purple-300">LinkedIn</div>
//                       </div>
//                       <div className="p-4 bg-black/30 border border-purple-400/30 rounded-xl text-center">
//                         <div className="text-2xl mb-2">🐙</div>
//                         <div className="text-sm text-purple-300">GitHub</div>
//                       </div>
//                       <div className="p-4 bg-black/30 border border-purple-400/30 rounded-xl text-center">
//                         <div className="text-2xl mb-2">📱</div>
//                         <div className="text-sm text-purple-300">Telegram</div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Portal Access */}
//                 {activeDimension === 'portal' && (
//                   <div className="space-y-6">
//                     <h3 className="text-2xl font-bold text-white mb-2">Dimensional Portal</h3>
//                     <p className="text-gray-400 mb-6">Access alternate reality communication channels</p>
                    
//                     <div className="p-6 bg-black/30 border border-green-400/30 rounded-xl">
//                       <div className="text-center mb-4">
//                         <div className="text-4xl mb-2">🌀</div>
//                         <div className="text-green-300 font-semibold">Portal Active</div>
//                       </div>
//                       <div className="space-y-2 text-sm text-gray-400">
//                         <div>• Quantum stability: 98.7%</div>
//                         <div>• Temporal alignment: Synchronized</div>
//                         <div>• Bandwidth: 12.4 Tb/s</div>
//                         <div>• Latency: 0.3ms</div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Mind Sync */}
//                 {activeDimension === 'sync' && (
//                   <div className="space-y-6">
//                     <h3 className="text-2xl font-bold text-white mb-2">Consciousness Synchronization</h3>
//                     <p className="text-gray-400 mb-6">Merge cognitive patterns for direct thought transmission</p>
                    
//                     <div className="p-6 bg-black/30 border border-orange-400/30 rounded-xl">
//                       <div className="flex items-center justify-between mb-4">
//                         <span className="text-orange-300">Neural Compatibility</span>
//                         <span className="text-white">87%</span>
//                       </div>
//                       <div className="w-full bg-gray-700 rounded-full h-2">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={{ width: '87%' }}
//                           transition={{ duration: 2, ease: "easeOut" }}
//                           className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Transmission Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleTransmissionStart}
//                   disabled={isTransmitting}
//                   className={`w-full mt-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
//                     isTransmitting
//                       ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
//                       : 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500'
//                   }`}
//                 >
//                   {isTransmitting ? (
//                     <div className="flex items-center justify-center gap-3">
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                         className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                       />
//                       Quantum Transmitting... {entanglementLevel}%
//                     </div>
//                   ) : (
//                     'Initiate Quantum Transmission'
//                   )}
//                 </motion.button>

//                 {/* Entanglement Progress */}
//                 {isTransmitting && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="mt-6 p-4 bg-black/30 border border-cyan-400/30 rounded-xl"
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-cyan-300 text-sm">Quantum Entanglement</span>
//                       <span className="text-white text-sm">{entanglementLevel}%</span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded-full h-2">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         animate={{ width: `${entanglementLevel}%` }}
//                         className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-100"
//                       />
//                     </div>
//                   </motion.div>
//                 )}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Quantum Status */}
//         <div className="text-center mt-12">
//           <div className="inline-flex items-center gap-6 text-sm text-gray-400">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               <span>Quantum Network: Stable</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
//               <span>Entanglement: Ready</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
//               <span>Bandwidth: Optimal</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-gradient {
//           animation: gradient 3s ease infinite;
//           background-size: 200% 200%;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default QuantumContact;