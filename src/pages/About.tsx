import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  id: number;
  vx: number;
  vy: number;
  life: number;
}

const IntroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') !== null ||
                           target.classList.contains('interactive-text') ||
                           target.tagName === 'LI';
      
      setIsHovering(isInteractive);

      if (isInteractive && Math.random() > 0.7) {
        const newParticle = {
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          id: Date.now() + Math.random(),
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1
        };
        setParticles(prev => [...prev.slice(-15), newParticle]);
      }
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 0.02
        })).filter(p => p.life > 0)
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#111111] relative overflow-hidden font-sans selection:bg-yellow-500 selection:text-white">
      
      {/* Custom Cursor */}
      <div
        className="pointer-events-none fixed z-50 transition-all duration-150 ease-out"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
        }}
      >
        <div className={`rounded-full transition-all duration-300 ${
          isHovering 
            ? 'w-12 h-12 bg-yellow-500/30 border-2 border-yellow-500' 
            : 'w-6 h-6 bg-white/40'
        }`}>
          {isHovering && (
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 animate-ping" />
          )}
        </div>
      </div>

      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="pointer-events-none fixed z-40"
          style={{
            left: particle.x,
            top: particle.y,
            transform: 'translate(-50%, -50%)',
            opacity: particle.life
          }}
        >
          <div 
            className="rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
            style={{
              width: `${4 + particle.life * 4}px`,
              height: `${4 + particle.life * 4}px`,
              boxShadow: `0 0 ${10 * particle.life}px rgba(234, 179, 8, ${particle.life * 0.6})`
            }}
          />
        </div>
      ))}

      {/* Top yellow accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
      
      {/* Animated progress bar */}
      <div 
        className="absolute top-0 left-0 h-1 bg-yellow-500 transition-all duration-300 z-10"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute top-20 right-20 w-32 h-32 border border-yellow-500/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="hidden md:block absolute bottom-32 left-32 w-24 h-24 border-2 border-yellow-500/10 rounded-full"></div>

      <div className="flex flex-col lg:flex-row items-start justify-between px-6 md:px-8 lg:px-16 pt-16 md:pt-20 lg:pt-32 pb-16 md:pb-20 gap-8 md:gap-12">
        
        {/* Left content */}
        <div className="w-full lg:w-1/2 lg:pr-12">
          
          {/* Section label */}
          <div className="flex items-center mb-6 md:mb-8">
            <div className="w-12 md:w-16 h-[2px] bg-yellow-600 mr-3 md:mr-4"></div>
            <span className="text-yellow-500 text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-light">Who I Am</span>
          </div>

          <h1 className="interactive-text text-4xl md:text-5xl lg:text-7xl font-thin text-gray-200 leading-tight mb-8 md:mb-12 hover:text-yellow-500 transition-colors duration-500 cursor-default">
            Introduction
          </h1>
          
          <div className="space-y-4 md:space-y-6">
            <p className="interactive-text text-gray-400 text-sm lg:text-base leading-7 font-light hover:text-gray-200 transition-colors duration-300 cursor-default">
              I build <span className="text-yellow-500 font-normal">intuitive, responsive web applications</span> that solve real problems for users.
            </p>

            <p className="interactive-text text-gray-400 text-sm lg:text-base leading-7 font-light hover:text-gray-200 transition-colors duration-300 cursor-default">
              With a passion for clean code and user-centered design, I specialize in crafting dynamic frontend experiences using <span className="text-yellow-500 font-normal">React and JavaScript</span>. I focus on creating interfaces that are not just functional, but delightful to use, combining performance optimization with thoughtful UI/UX implementation.
            </p>

            {/* What I Do section */}
            <div className="pt-4 md:pt-6 border-l-2 border-yellow-600/50 pl-4 md:pl-6 hover:border-yellow-600 transition-colors duration-300">
              <h3 className="interactive-text text-yellow-500 text-lg font-normal mb-3 cursor-default">
                What I Do
              </h3>
              <p className="interactive-text text-gray-400 text-sm leading-7 font-light hover:text-gray-200 transition-colors duration-300 cursor-default">
                I transform designs into fully functional web applications, ensuring every pixel and interaction serves a purpose. My expertise spans <span className="text-yellow-500">HTML, CSS, and JavaScript frameworks</span>, with a growing proficiency in backend technologies like <span className="text-yellow-500">Node.js and databases</span>. This full-stack perspective allows me to collaborate effectively with backend teams and understand the complete development lifecycle.
              </p>
            </div>

            {/* My Approach section */}
            <div className="pt-4 md:pt-6 border-l-2 border-yellow-600/50 pl-4 md:pl-6 hover:border-yellow-600 transition-colors duration-300">
              <h3 className="interactive-text text-yellow-500 text-lg font-normal mb-3 cursor-default">
                My Approach
              </h3>
              <p className="interactive-text text-gray-400 text-sm leading-7 font-light hover:text-gray-200 transition-colors duration-300 cursor-default">
                I believe in writing <span className="text-yellow-500">maintainable, scalable code</span> and staying current with industry best practices. I'm committed to continuous learning, whether it's mastering the latest frontend frameworks, exploring backend concepts, or diving into new development methodologies. I thrive in collaborative environments where I can contribute to meaningful projects while mentoring others.
              </p>
            </div>

            {/* Looking to connect section */}
            <div className="pt-4 md:pt-6">
              <h3 className="interactive-text text-yellow-500 text-lg font-normal mb-4 cursor-default">
                Looking to Connect With
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  'Teams building scalable web products',
                  'Companies prioritizing user experience and code quality',
                  'Opportunities to deepen my full-stack capabilities',
                  'Collaborators who are passionate about web development'
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    className="interactive-text text-gray-400 text-xs md:text-sm leading-6 md:leading-7 font-light hover:text-yellow-500 transition-all duration-300 cursor-default flex items-start gap-2 md:gap-3 group"
                  >
                    <span className="text-yellow-500 mt-1 group-hover:scale-125 transition-transform">▸</span>
                    <span className="group-hover:translate-x-2 transition-transform">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-6 md:pt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-yellow-500 transition-colors duration-300 group"
              >
                <span className="relative">
                  Let's Connect
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </span>
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side images */}
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          
          {/* Decorative yellow bars */}
          <div className="hidden md:block absolute -top-8 -right-8 w-48 h-2 bg-gradient-to-l from-yellow-600 to-transparent z-0"></div>
          <div className="hidden md:block absolute -top-8 -right-8 w-2 h-48 bg-gradient-to-b from-yellow-600 to-transparent z-0"></div>

          {/* Black geometric accent */}
          <div 
            className="hidden md:block absolute top-0 left-0 w-64 md:w-80 lg:w-96 h-24 md:h-32 lg:h-40 bg-black/90 z-10 border-b-4 border-yellow-600 transition-all duration-700"
            style={{
              transform: `translateX(${scrollProgress * 20}px)`
            }}
          ></div>
          
          {/* Laptop image with effects */}
          <div className="relative mt-0 md:mt-24 lg:mt-32 ml-0 md:ml-8 lg:ml-20 z-20 group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-yellow-500/10 blur-3xl group-hover:bg-yellow-500/20 transition-all duration-500 -z-10"></div>
            
            {/* Corner brackets */}
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop" 
              alt="Person working on laptop"
              className="w-full h-auto shadow-2xl transform group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0"
            />
            
            {/* Overlay grid effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(234, 179, 8, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 179, 8, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            ></div>
          </div>

          {/* Bottom decorative elements */}
          <div className="hidden md:block absolute -bottom-8 -left-8 w-48 h-2 bg-gradient-to-r from-yellow-600 to-transparent z-0"></div>
          <div className="hidden md:block absolute -bottom-8 -left-8 w-2 h-48 bg-gradient-to-t from-yellow-600 to-transparent z-0"></div>

          {/* Floating code snippet decoration */}
          <div className="hidden md:block absolute -bottom-12 -right-8 bg-gray-900/80 border border-yellow-600/30 px-4 py-2 text-xs text-yellow-500 font-mono backdrop-blur-sm">
            &lt;Building /&gt;
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-16 text-gray-600 text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase z-10 interactive-text hover:text-yellow-500 transition-colors cursor-default">
        About · Skills · Approach
      </div>

      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
};

export default IntroSection;