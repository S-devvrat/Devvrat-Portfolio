import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Quantum particle animation - extracted from your code
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrame;
    const particles = [];

    class QuantumParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.alpha = 0.2 + Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.3;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(new QuantumParticle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw quantum entanglement lines
      ctx.strokeStyle = `rgba(34, 211, 238, 0.1)`;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
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
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Floating tech icons data
  const floatingIcons = [
    { icon: "⚛️", x: "10%", y: "20%", delay: "0s" },
    { icon: "▲", x: "85%", y: "30%", delay: "1s" },
    { icon: "TS", x: "15%", y: "70%", delay: "2s" },
    { icon: "⬢", x: "80%", y: "60%", delay: "3s" },
    { icon: "🌊", x: "75%", y: "15%", delay: "4s" },
    { icon: "🔗", x: "5%", y: "40%", delay: "5s" },
    { icon: "🚀", x: "90%", y: "80%", delay: "6s" },
    { icon: "💻", x: "20%", y: "85%", delay: "7s" },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Quantum Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Pulsing Core - From quantum background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>

      {/* Responsive Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-64 h-64 md:w-96 md:h-96 border border-cyan-400/10 rounded-full animate-spin-slow"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 border border-purple-400/10 rounded-full animate-spin-slow"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute text-lg md:text-2xl opacity-30 animate-float"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Enhanced Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
      ></div>

      {/* Main Content Container */}
      <div className="-mt-10 md:-mt-0 relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Profile Photo */}
        <div className="mb-6 md:mb-8 relative">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/30 animate-glow overflow-hidden border-2 border-white/20">
            <img
              src="/path-to-your-photo.jpg"
              alt="Devvrat Shukla"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center md:hidden">
              <span className="text-xl md:text-3xl font-bold text-white">
                DS
              </span>
            </div>
          </div>
          <div className="absolute inset-0 w-20 h-20 md:w-28 md:h-28 bg-cyan-400 rounded-full filter blur-2xl opacity-20 animate-ping-slow"></div>
          {/* Orbiting dots */}
          <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full animate-orbit"></div>
          <div
            className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-2 h-2 md:w-3 md:h-3 bg-purple-400 rounded-full animate-orbit"
            style={{ animationDelay: "-2s" }}
          ></div>
        </div>

        {/* Responsive Main Heading with Grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient bg-[length:200%_auto]">
              Devvrat
            </span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient bg-[length:200%_auto]"
              style={{ animationDelay: "1s" }}
            >
              Shukla
            </span>
          </h1>
        </div>

        {/* Responsive Animated Title */}
        <div className="mb-6 md:mb-8 relative">
          <div className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-2 md:mb-3">
            Full Stack Developer
          </div>
          <div className="text-lg sm:text-xl text-cyan-300 font-mono animate-pulse flex items-center justify-center gap-2 md:gap-3">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-ping"></span>
            Building Modern Web Experiences
            <span
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-6 md:mb-8 flex flex-wrap justify-center gap-4 md:gap-6">
          <button
            onClick={handleEmailClick}
            className="group flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base text-cyan-300 backdrop-blur-xl bg-cyan-500/10 border border-cyan-400/40 rounded-xl transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
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
            devvratshukla77469@gmail.com
          </button>

          <button
            onClick={handleResumeClick}
            className="group flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base text-purple-300 backdrop-blur-xl bg-purple-500/10 border border-purple-400/40 rounded-xl transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
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
            Download Resume
          </button>
        </div>

        {/* Enhanced Description */}
        <div className="max-w-2xl lg:max-w-3xl mb-8 md:mb-12 px-2">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl lg:rounded-3xl p-6 md:p-8 shadow-2xl shadow-cyan-500/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-sweep"></div>

            <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed relative z-10">
              Passionate about creating{" "}
              <span className="text-cyan-300 font-semibold">responsive</span>,{" "}
              <span className="text-purple-300 font-semibold">scalable</span>,
              and{" "}
              <span className="text-green-300 font-semibold">
                user-friendly
              </span>{" "}
              web applications using modern technologies like{" "}
              <span className="text-cyan-300">React</span>,{" "}
              <span className="text-purple-300">Next.js</span>, and{" "}
              <span className="text-green-300">Node.js</span>.
            </p>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="flex justify-center mt-0 md:-mt-10">
          <button
            onClick={handleExploreWork}
            className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl md:rounded-2xl font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-2 md:gap-3 text-sm md:text-base">
              Explore My Work
              <svg
                className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
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

        {/* Enhanced Scroll Indicator */}
        <div className="sm:hidden flex absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 md:gap-3 text-cyan-300/70">
            <span className="text-xs md:text-sm font-mono tracking-widest">
              SCROLL TO EXPLORE
            </span>
            <div className="w-0.5 h-12 md:h-16 bg-gradient-to-b from-cyan-400 via-purple-400 to-transparent animate-bounce-slow relative">
              <div className="absolute top-0 w-1 h-3 md:h-4 bg-cyan-400 rounded-full animate-scroll-dot"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(16px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(16px) rotate(-360deg);
          }
        }
        @keyframes sweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes scroll-dot {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(48px);
            opacity: 0;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
        .animate-sweep {
          animation: sweep 2s linear infinite;
        }
        .animate-scroll-dot {
          animation: scroll-dot 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes glow {
          from {
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.5);
          }
          to {
            box-shadow: 0 0 25px rgba(34, 211, 238, 0.8),
              0 0 35px rgba(192, 132, 252, 0.6);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;