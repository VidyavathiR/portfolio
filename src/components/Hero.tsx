import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, MessageCircle, Code, Database, Server, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animatedText, setAnimatedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Vidyavathi R";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Letter-by-letter animation
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setAnimatedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate floating code symbols
  const codeSymbols = ['<>', '{}', '[]', '/>', '()', '&&', '||', '=>', '++', '--'];
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    symbol: codeSymbols[i % codeSymbols.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
  }));

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 dark:bg-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        {/* 3D Grid Effect */}
        <div className="absolute inset-0 bg-slate-900 dark:bg-slate-950">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            }}
          />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(56, 189, 248, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              transform: `translate(${mousePosition.x * -0.005}px, ${mousePosition.y * -0.005}px)`,
            }}
          />
        </div>

        {/* Floating Code Symbols */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute text-teal-400/20 font-mono text-lg select-none pointer-events-none"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            {element.symbol}
          </div>
        ))}

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Tech Icons Floating */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-20 text-teal-400/20"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              animation: 'float 6s ease-in-out infinite',
            }}
          >
            <Code size={40} />
          </div>
          <div 
            className="absolute top-40 right-32 text-cyan-400/20"
            style={{
              transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
              animation: 'float 8s ease-in-out infinite 2s',
            }}
          >
            <Database size={35} />
          </div>
          <div 
            className="absolute bottom-32 left-32 text-sky-400/20"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              animation: 'float 7s ease-in-out infinite 1s',
            }}
          >
            <Server size={38} />
          </div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-teal-400/10 rotate-45"
            style={{
              animation: 'rotate 20s linear infinite',
              transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px) rotate(45deg)`,
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-cyan-400/10"
            style={{
              animation: 'rotate 15s linear infinite reverse',
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            }}
          />
          <div 
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-teal-400/5 rounded-full"
            style={{
              animation: 'pulse 4s ease-in-out infinite',
              transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px)`,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8 space-y-8">
          {/* Greeting */}
          <div className="flex items-center justify-center space-x-3 mb-8 animate-fade-in-down delay-100">
            <div className="w-2 h-2 bg-gradient-to-tr from-teal-400 to-cyan-400 rounded-full animate-pulse shadow-lg" />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-semibold tracking-wider uppercase text-sm font-mono shadow-md px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
              Full Stack Developer
            </span>
            <div className="w-2 h-2 bg-gradient-to-tr from-cyan-400 to-sky-400 rounded-full animate-pulse shadow-lg" />
          </div>

          {/* Main Heading with Letter Animation */}
          <div className="space-y-6 animate-fade-in-up delay-200">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 drop-shadow-xl">
              <span className="block mb-4 text-4xl md:text-5xl font-light text-slate-200/80 animate-fade-in-up delay-300">
                Hi, I'm
              </span>
              <span className="relative inline-block animate-fade-in-up delay-400">
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent font-mono tracking-wider drop-shadow-lg">
                  {animatedText}
                  <span className="animate-pulse">|</span>
                </span>
                <div className="absolute -inset-2 bg-gradient-to-br from-teal-400/20 via-cyan-400/10 to-sky-400/10 rounded-lg blur-2xl opacity-60" />
              </span>
            </h1>

            {/* Animated Subtitle */}
            <div className="space-y-4 animate-fade-in-up delay-500">
              <div className="flex flex-wrap justify-center gap-4 text-xl md:text-2xl font-light">
                <span className="px-4 py-2 bg-blue-900/80 text-blue-200 border border-blue-400 rounded-xl shadow-md font-semibold tracking-wide hover:scale-105 transition animate-fade-in-up delay-600">
                  MERN <span className="ml-1 text-blue-400">Stack</span>
                </span>
                <span className="px-4 py-2 bg-emerald-900/80 text-emerald-200 border border-emerald-400 rounded-xl shadow-md font-semibold tracking-wide hover:scale-105 transition animate-fade-in-up delay-700">
                  Python <span className="ml-1 text-emerald-400">Developer</span>
                </span>
                <span className="px-4 py-2 bg-yellow-900/80 text-yellow-200 border border-yellow-400 rounded-xl shadow-md font-semibold tracking-wide hover:scale-105 transition animate-fade-in-up delay-800">
                  Web <span className="ml-1 text-yellow-400">Developer</span>
                </span>
              </div>
              <p className="text-lg text-slate-400 font-light flex items-center justify-center gap-2 animate-fade-in-up delay-900">
                <span className="w-1 h-1 bg-teal-400 rounded-full" />
                Crafting digital experiences from Bengaluru, Karnataka, India
                <span className="w-1 h-1 bg-teal-400 rounded-full" />
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up delay-1000">
          <a
            href="https://drive.google.com/file/d/19isRfZ7EIklG61vsSF0FDNVGIvKgda1Y/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:-translate-y-1 border border-teal-500 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_#14B8A6] active:shadow-[0_0_30px_#14B8A6] animate-fade-in-up delay-1100"
          >
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Download className="w-5 h-5 mr-3 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">View Resume</span>
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 hover:bg-slate-700/50 hover:shadow-2xl hover:shadow-slate-500/10 hover:-translate-y-1 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_#38BDF8] active:shadow-[0_0_30px_#38BDF8] animate-fade-in-up delay-1200"
          >
            <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Let's Connect
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-slate-400 hover:text-teal-400 transition-colors duration-300 animate-fade-in-up delay-2000"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-mono tracking-wider">Scroll Down</span>
            <ChevronDown size={24} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;