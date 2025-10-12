import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeTech, setActiveTech] = useState(0);

  // Fade in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse move interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Tech stack rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Hexagon grid animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;

    const drawHexagonGrid = () => {
      const width = canvas.width;
      const height = canvas.height;
      const size = 40;
      const hexHeight = size * Math.sqrt(3);

      ctx.clearRect(0, 0, width, height);

      // Draw hexagon grid
      for (let y = -size; y < height + size; y += hexHeight) {
        for (let x = -size; x < width + size; x += size * 1.5) {
          const offset = (Math.floor(y / hexHeight) % 2) * size * 0.75;
          const hexX = x + offset;
          const hexY = y;

          // Calculate distance from mouse
          const distance = Math.sqrt(
            Math.pow(hexX - (mousePosition.x * 50 + width / 2), 2) +
              Math.pow(hexY - (mousePosition.y * 50 + height / 2), 2)
          );

          const opacity = Math.max(0.05, 0.2 * (1 - distance / 200));

          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.lineWidth = 1;

          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const xPos = hexX + size * Math.cos(angle);
            const yPos = hexY + size * Math.sin(angle);
            if (i === 0) {
              ctx.moveTo(xPos, yPos);
            } else {
              ctx.lineTo(xPos, yPos);
            }
          }
          ctx.closePath();
          ctx.stroke();

          // Add glowing dot in center for nearby hexagons
          if (distance < 100) {
            const glowSize = (1 - distance / 100) * 4;
            ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 2})`;
            ctx.beginPath();
            ctx.arc(hexX, hexY, glowSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const animate = () => {
      drawHexagonGrid();
      animationFrame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [mousePosition]);

  const handleExploreWork = () => {
    navigate("/projects");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:devvratshukla77469@gmail.com";
  };

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 30}px, ${
      mousePosition.y * 30
    }px)`,
  };

  const techStack = [
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "TypeScript", icon: "📘", color: "text-blue-400" },
    { name: "Node.js", icon: "⬢", color: "text-green-400" },
    { name: "Next.js", icon: "▲", color: "text-white" },
    { name: "Python", icon: "🐍", color: "text-yellow-400" },
    { name: "MongoDB", icon: "🍃", color: "text-green-300" },
  ];

  const features = [
    { title: "Clean Code", desc: "Maintainable and scalable architecture" },
    { title: "Performance", desc: "Optimized for speed and efficiency" },
    { title: "User Experience", desc: "Intuitive and engaging interfaces" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Hexagon Grid Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl transition-transform duration-500"
          style={parallaxStyle}
        ></div>
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transition-transform duration-500"
          style={{
            transform: `translate(${-mousePosition.x * 20}px, ${
              -mousePosition.y * 20
            }px)`,
          }}
        ></div>
      </div>

      {/* Main Layout */}
      <div
        className={`relative z-10 container mx-auto px-6 lg:px-8 min-h-screen flex items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-8 lg:text-left text-center">
            {/* Animated Welcome Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 mt-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm group hover:border-blue-500/40 transition-all duration-300 lg:inline-flex mx-auto lg:mx-0">
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse "></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm text-blue-300 font-mono tracking-wide ">
                Welcome to my digital space
              </span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Enhanced Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-none">
                Devvrat
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Shukla
                </span>
              </h1>

              <div className="space-y-4">
                <div className="text-2xl lg:text-3xl text-slate-300 font-light">
                  Full Stack Developer
                </div>

                {/* Rotating Tech Stack Display */}
                <div className="h-12 flex items-center lg:justify-start justify-center">
                  <div className="text-lg text-slate-400 font-mono border-l-4 border-cyan-500 pl-4 py-2 transition-all duration-500">
                    <span className="flex items-center gap-3">
                      <span className="text-cyan-400">→</span>
                      <span className={techStack[activeTech].color}>
                        {techStack[activeTech].icon}{" "}
                        {techStack[activeTech].name}
                      </span>
                      <span className="text-slate-500">Specialist</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg font-light lg:text-left text-center">
              Crafting{" "}
              <span className="text-cyan-400 font-semibold">
                digital experiences
              </span>{" "}
              that blend innovative design with{" "}
              <span className="text-purple-400 font-semibold">
                cutting-edge technology
              </span>
              . Passionate about building solutions that make an impact.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-cyan-400 font-semibold text-sm mb-2 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </div>
                  <div className="text-slate-400 text-xs leading-relaxed">
                    {feature.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 lg:justify-start justify-center">
              <button
                onClick={handleExploreWork}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 mb-5 text-white rounded-xl font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent  -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="flex items-center gap-3 relative">
                  Explore My Work
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

          {/* Right Column - Interactive Visual */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/20 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-blue-500/10 lg:mt-0 -mt-10">
              {/* Interactive Tech Orb */}
              <div className="relative w-64 h-64 mx-auto">
                {/* Orb Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"></div>

                {/* Rotating Tech Icons */}
                {techStack.map((tech, index) => {
                  const angle = (index / techStack.length) * Math.PI * 2;
                  const radius = 80;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={tech.name}
                      className={`absolute w-12 h-12 flex items-center justify-center rounded-xl backdrop-blur-sm border transition-all duration-500 cursor-pointer ${
                        activeTech === index
                          ? "bg-cyan-500/20 border-cyan-400/50 scale-110 shadow-lg shadow-cyan-500/25"
                          : "bg-slate-800/30 border-slate-600/30 hover:scale-105"
                      }`}
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                        transform: `rotate(${angle}rad)`,
                      }}
                      onMouseEnter={() => setActiveTech(index)}
                    >
                      <span
                        className={`text-lg ${
                          activeTech === index ? "scale-110" : "scale-100"
                        } transition-transform duration-300`}
                      >
                        {tech.icon}
                      </span>
                    </div>
                  );
                })}

                {/* Central Display */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-600/30 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">
                      {techStack[activeTech].icon}
                    </span>
                  </div>
                </div>
              </div>

              {/* Current Tech Display */}
              <div className="text-center mt-8">
                <div className="text-2xl font-bold text-white mb-2">
                  {techStack[activeTech].name}
                </div>
                <div className="text-slate-400 text-sm">
                  Currently focused on {techStack[activeTech].name} development
                </div>
              </div>
            </div>

            {/* Quick Links Bar - Moved to bottom on mobile */}
            <div className="lg:flex justify-center gap-6 mt-8 hidden">
              {[
                {
                  name: "GitHub",
                  icon: "💻",
                  url: "https://github.com/S-devvrat",
                },
                {
                  name: "LinkedIn",
                  icon: "💼",
                  url: "https://www.linkedin.com/in/devvrat-shukla/",
                },
                {
                  name: "Resume",
                  icon: "📄",
                  action: () =>
                    window.open("/pdf/Devvrat Shukla Resumee.pdf", "_blank"),
                },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={
                    item.action || (() => window.open(item.url, "_blank"))
                  }
                  className="group p-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-lg text-slate-400 transition-all duration-300 hover:bg-slate-700/50 hover:border-cyan-400/30 hover:text-cyan-400 hover:scale-110"
                >
                  <span className="flex items-center gap-2 text-sm">
                    <span className="text-base">{item.icon}</span>
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Bar for Mobile - At the bottom */}
     <div className=" mt-10 lg:hidden bottom-2 left-1/2 transform -translate-x-1/2 w-full flex justify-center gap-4 z-20 px-4 relative">
        {[
          {
            name: "GitHub",
            icon: "💻",
            url: "https://github.com/S-devvrat",
          },
          {
            name: "LinkedIn",
            icon: "💼",
            url: "https://www.linkedin.com/in/devvrat-shukla/",
          },
          {
            name: "Resume",
            icon: "📄",
            action: () =>
              window.open("/pdf/Devvrat Shukla Resumee.pdf", "_blank"),
          },
        ].map((item) => (
          <button
            key={item.name}
            onClick={
              item.action || (() => window.open(item.url, "_blank"))
            }
            className="group p-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg text-slate-300 transition-all duration-300 hover:bg-slate-700/80 hover:border-cyan-400/50 hover:text-cyan-400 hover:scale-110"
          >
            <span className="flex items-center gap-2 text-sm">
              <span className="text-base">{item.icon}</span>
              <span className="hidden sm:inline">{item.name}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:block hidden">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;