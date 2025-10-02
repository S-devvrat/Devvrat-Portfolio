import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Fade in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse move interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced quantum particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrame;
    const particles = [];
    const mouse = { x: 0, y: 0, radius: 150 };

    class QuantumParticle {
      constructor() {
        this.reset();
        this.originalSize = Math.random() * 3 + 1;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = this.originalSize;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.color = `hsl(${Math.random() * 60 + 200}, 80%, 65%)`;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update() {
        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          this.vx -= Math.cos(angle) * force * 0.5;
          this.vy -= Math.sin(angle) * force * 0.5;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Boundary collision with damping
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -0.8;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -0.8;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        // Pulsing effect
        this.alpha = 0.2 + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.3;
        this.size = this.originalSize + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Mouse move handler for canvas
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 10000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new QuantumParticle());
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Enhanced quantum entanglement lines
      ctx.strokeStyle = `rgba(34, 211, 238, 0.15)`;
      ctx.lineWidth = 0.8;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 0.15 * (1 - distance / 120);
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Enhanced floating tech icons with more variety
  const floatingIcons = [
    { icon: "⚛️", x: "10%", y: "20%", delay: "0s", type: "react" },
    { icon: "▲", x: "85%", y: "30%", delay: "1s", type: "next" },
    { icon: "TS", x: "15%", y: "70%", delay: "2s", type: "typescript" },
    { icon: "⬢", x: "80%", y: "60%", delay: "3s", type: "node" },
    { icon: "🌊", x: "75%", y: "15%", delay: "4s", type: "wave" },
    { icon: "🔗", x: "5%", y: "40%", delay: "5s", type: "chain" },
    { icon: "🚀", x: "90%", y: "80%", delay: "6s", type: "rocket" },
    { icon: "💻", x: "20%", y: "85%", delay: "7s", type: "code" },
    { icon: "🔮", x: "65%", y: "45%", delay: "8s", type: "crystal" },
    { icon: "⚡", x: "35%", y: "25%", delay: "9s", type: "lightning" },
  ];

  const handleExploreWork = () => {
    navigate('/projects');
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:devvratshukla77469@gmail.com";
  };

  const handleResumeClick = () => {
    window.open("/pdf/Devvrat Shukla Resume.pdf", "_blank");
  };

  // Parallax background elements based on mouse position
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
  };

  const parallaxStyleReverse = {
    transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Quantum Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Interactive Background Elements */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={parallaxStyle}
      >
        <div className="w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Enhanced Background Elements with Parallax */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent transition-transform duration-200 ease-out"
        style={parallaxStyle}
      ></div>
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-purple-600/15 via-transparent to-transparent transition-transform duration-300 ease-out"
        style={parallaxStyleReverse}
      ></div>
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent transition-transform duration-400 ease-out"
        style={parallaxStyle}
      ></div>

      {/* Enhanced Responsive Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div 
          className="w-64 h-64 md:w-96 md:h-96 border border-cyan-400/20 rounded-full animate-spin-slow transition-all duration-500 hover:border-cyan-400/40"
          style={parallaxStyleReverse}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 border border-purple-400/20 rounded-full animate-spin-slow transition-all duration-500 hover:border-purple-400/40"
          style={{ animationDirection: "reverse", ...parallaxStyle }}
        ></div>
      </div>

      {/* Enhanced Floating Tech Icons with Hover Effects */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute text-lg md:text-2xl opacity-40 animate-float cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-125 hover:text-${item.type === 'react' ? 'cyan' : item.type === 'next' ? 'white' : 'purple'}-400`}
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
          onClick={() => {
            // Add click effects for icons
            const audio = new Audio('/sounds/click.mp3');
            audio.volume = 0.3;
            audio.play().catch(() => {});
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Enhanced Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] transition-transform duration-500 ease-out"
        style={parallaxStyleReverse}
      ></div>

      {/* Enhanced Glow Orbs with Interaction */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 transition-all duration-700 hover:opacity-25 hover:blur-4xl"
        style={parallaxStyle}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 transition-all duration-700 hover:opacity-25 hover:blur-4xl"
        style={parallaxStyleReverse}
      ></div>

      {/* Main Content Container with Enhanced Animations */}
      <div className={`-mt-10 md:-mt-0 relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Enhanced Profile Photo with Better Interaction */}
        <div className="mb-6 md:mb-8 relative group">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/40 animate-glow overflow-hidden border-2 border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-cyan-500/60 group-hover:border-cyan-300/50">
            <img
              src="/path-to-your-photo.jpg"
              alt="Devvrat Shukla"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center md:hidden">
              <span className="text-2xl md:text-4xl font-bold text-white">
                DS
              </span>
            </div>
          </div>
          <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 bg-cyan-400 rounded-full filter blur-2xl opacity-30 animate-ping-slow group-hover:opacity-50 transition-opacity duration-500"></div>
          
          {/* Enhanced Orbiting dots */}
          <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-5 md:h-5 bg-cyan-400 rounded-full animate-orbit transition-all duration-300 group-hover:scale-150 group-hover:bg-cyan-300"></div>
          <div
            className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-3 h-3 md:w-4 md:h-4 bg-purple-400 rounded-full animate-orbit transition-all duration-300 group-hover:scale-150 group-hover:bg-purple-300"
            style={{ animationDelay: "-2s" }}
          ></div>
          
          {/* Pulse ring effect on hover */}
          <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-ping group-hover:animate-none group-hover:border-cyan-400/60 transition-all duration-500 scale-125 opacity-0 group-hover:opacity-100"></div>
        </div>

        {/* Enhanced Responsive Main Heading */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6 -mt-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient bg-[length:200%_auto] hover:animate-none hover:bg-[length:100%_auto] transition-all duration-500 cursor-default">
              Devvrat
            </span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient bg-[length:200%_auto] hover:animate-none hover:bg-[length:100%_auto] transition-all duration-500 cursor-default"
              style={{ animationDelay: "1s" }}
            >
              Shukla
            </span>
          </h1>
        </div>

        {/* Enhanced Animated Title with Typing Effect */}
        <div className="mb-6 md:mb-8 relative">
          <div className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-2 md:mb-3 transition-all duration-500 hover:text-gray-100">
            Full Stack Developer
          </div>
          <div className="text-lg sm:text-xl text-cyan-300 font-mono animate-pulse flex items-center justify-center gap-2 md:gap-3 transition-all duration-500 hover:text-cyan-200">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-ping"></span>
            <span className="typing-animation">Building Modern Web Experiences</span>
            <span
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></span>
          </div>
        </div>

        {/* Enhanced Contact Information */}
        <div className="mb-6 md:mb-8 flex flex-wrap justify-center gap-4 md:gap-6">
          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 px-5 py-3 md:px-7 md:py-4 text-sm md:text-base text-cyan-300 backdrop-blur-xl bg-cyan-500/15 border border-cyan-400/50 rounded-xl transition-all duration-300 hover:bg-cyan-500/25 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="relative">devvratshukla77469@gmail.com</span>
          </button>

          <button
            onClick={handleResumeClick}
            className="group relative flex items-center gap-2 px-5 py-3 md:px-7 md:py-4 text-sm md:text-base text-purple-300 backdrop-blur-xl bg-purple-500/15 border border-purple-400/50 rounded-xl transition-all duration-300 hover:bg-purple-500/25 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="relative">Download Resume</span>
          </button>
        </div>

        {/* Enhanced Description with Interactive Elements */}
        <div className="max-w-2xl lg:max-w-3xl mb-8 md:mb-12 px-2">
          <div className="backdrop-blur-xl bg-white/8 border border-white/15 rounded-2xl lg:rounded-3xl p-6 md:p-8 shadow-2xl shadow-cyan-500/15 relative overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-cyan-500/25 hover:scale-[1.02] group">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-sweep"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed relative z-10">
              Passionate about creating{" "}
              <span className="text-cyan-300 font-semibold transition-all duration-300 hover:text-cyan-200 hover:scale-105 inline-block cursor-default">
                responsive
              </span>
              ,{" "}
              <span className="text-purple-300 font-semibold transition-all duration-300 hover:text-purple-200 hover:scale-105 inline-block cursor-default">
                scalable
              </span>
              , and{" "}
              <span className="text-green-300 font-semibold transition-all duration-300 hover:text-green-200 hover:scale-105 inline-block cursor-default">
                user-friendly
              </span>{" "}
              web applications using modern technologies like{" "}
              <span className="text-cyan-300 transition-all duration-300 hover:text-cyan-200 hover:scale-105 inline-block cursor-default">
                React
              </span>
              ,{" "}
              <span className="text-purple-300 transition-all duration-300 hover:text-purple-200 hover:scale-105 inline-block cursor-default">
                Next.js
              </span>
              , and{" "}
              <span className="text-green-300 transition-all duration-300 hover:text-green-200 hover:scale-105 inline-block cursor-default">
                Node.js
              </span>
              .
            </p>
          </div>
        </div>

        {/* Enhanced CTA Button with Ripple Effect */}
        <div className="flex justify-center mt-0 md:-mt-10">
          <button
            onClick={handleExploreWork}
            className="group relative px-9 py-4 md:px-12 md:py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl md:rounded-2xl font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 active:scale-95"
          >
            {/* Ripple effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm group-hover:blur-md scale-105"></div>
            
            <span className="relative z-10 flex items-center gap-2 md:gap-3 text-sm md:text-base">
              Explore My Work
              <svg
                className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>


      </div>
    </div>
  );
};

export default Hero;