import React, { useState, useEffect } from 'react';

const HelloSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState([]);
  const [textVisible, setTextVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger text animation on mount
    setTimeout(() => setTextVisible(true), 300);
    setTimeout(() => setImageLoaded(true), 600);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') !== null ||
                           target.classList.contains('interactive-text');
      
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="min-h-screen bg-[#111111] relative overflow-hidden font-sans selection:bg-yellow-500 selection:text-white">
      
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

      {/* Decorative Top Left Corner */}
      <div className="absolute top-4 left-4 md:top-10 md:left-10 z-0">
        <div className="absolute top-0 left-0 h-2 w-32 md:w-64 bg-gradient-to-r from-yellow-600 via-yellow-400 to-transparent opacity-80"></div>
        <div className="absolute top-0 left-0 w-2 h-48 md:h-96 bg-gradient-to-b from-yellow-600 via-yellow-400 to-transparent opacity-80"></div>
      </div>

      {/* Decorative Bottom Right Corner */}
      <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-0">
        <div className="absolute bottom-0 right-0 h-4 w-48 md:w-96 bg-gradient-to-l from-yellow-600 via-yellow-500 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-4 h-32 md:h-64 bg-gradient-to-t from-yellow-600 via-yellow-500 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 h-4 w-16 md:w-32 bg-gray-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-12 md:h-24 bg-gray-500"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="hidden md:block absolute top-1/4 right-1/4 w-32 h-32 border-2 border-yellow-500/20 rotate-45 animate-pulse"></div>
      <div className="hidden md:block absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-yellow-500/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 md:py-20 lg:py-32 min-h-screen">
        
        {/* Left side - Image with decorative elements */}
        <div className={`relative w-full lg:w-1/2 mb-16 lg:mb-0 transition-all duration-1000 ${
          imageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          
          {/* Yellow accent bars around image */}
          <div className="hidden md:block absolute -top-8 -left-8 w-40 h-2 bg-gradient-to-r from-yellow-600 to-transparent"></div>
          <div className="hidden md:block absolute -top-8 -left-8 w-2 h-40 bg-gradient-to-b from-yellow-600 to-transparent"></div>
          
          {/* Black geometric shape */}
          <div className="hidden md:block absolute -top-16 left-1/4 w-48 h-72 bg-black/90 transform -translate-x-1/2 z-0 border-l-4 border-yellow-600"></div>
          
          {/* Image container with hover effect */}
          <div className="relative z-10 group">
            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl group-hover:bg-yellow-500/30 transition-all duration-500"></div>
            <img 
              src="https://res.cloudinary.com/dufw6bsko/image/upload/v1764077101/Gemini_Generated_Image_gwtt6ogwtt6ogwtt_ybifye.png" 
              alt="Joseph Ohiwemeh Jegede"
              className="relative w-full max-w-[400px] md:max-w-[515px] h-auto transform group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
            />
            
            {/* Decorative corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-yellow-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-yellow-500"></div>
          </div>

          {/* Bottom accent bars */}
          <div className="hidden md:block absolute -bottom-8 -right-8 w-40 h-2 bg-gradient-to-l from-yellow-600 to-transparent"></div>
          <div className="hidden md:block absolute -bottom-8 -right-8 w-2 h-40 bg-gradient-to-t from-yellow-600 to-transparent"></div>
        </div>
        
        {/* Right side - Text content */}
        <div className={`w-full lg:w-1/2 lg:pl-20 transition-all duration-1000 delay-300 ${
          textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}>
          
          {/* Vertical accent line */}
          <div className="flex mb-8 md:mb-12">
            <div className="w-[2px] bg-yellow-600 mr-4 md:mr-8 h-16 md:h-24 shrink-0"></div>
            <div>
              <span className="text-yellow-500 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-light">About Me</span>
            </div>
          </div>

          <h1 className="interactive-text text-4xl md:text-5xl lg:text-7xl font-thin text-gray-200 leading-tight mb-8 md:mb-12 hover:text-yellow-500 transition-colors duration-500 cursor-default">
            Hello, I'm<br/>
            <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-pulse">
              Joseph Ohiwemeh Jegede!
            </span>
          </h1>
          
          {/* Text content with decorative elements */}
          <div className="relative">
            <div className="absolute -left-2 md:-left-4 top-0 w-2 md:w-4 h-24 md:h-32 border-l border-t border-yellow-600/50 rounded-tl-sm"></div>
            
            <div className="space-y-4 md:space-y-6 pl-2 md:pl-4">
              <p className="interactive-text text-gray-400 text-sm lg:text-base leading-7 font-light hover:text-gray-200 transition-colors duration-300 cursor-default">
                I am a dedicated <span className="text-yellow-500 font-normal">Frontend Developer</span> with over <span className="text-yellow-500 font-normal">3 years of experience</span> building clean, responsive, and user-friendly web applications. Specializing in the <span className="text-yellow-500 font-normal">MERN stack and Next.js</span>, I have successfully contributed to projects that blend thoughtful design with robust functionality.
              </p>
              
              <p className="interactive-text text-gray-400 text-xs md:text-sm lg:text-base leading-6 md:leading-7 font-light hover:text-gray-200 transition-colors duration-300 cursor-default">
                I pride myself on being a proactive team player and a fast learner who thrives on new challenges. Whether collaborating on complex problems or optimizing user interfaces, I am passionate about bringing innovative ideas to life through code.
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-6">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB','Tailwind CSS','Figma','Git','GitHub','Javascript','HTML','CSS','Tailwind CSS','Figma','Git','GitHub','Javascript','Bootstrap','Material UI',].map((tech, idx) => (
                  <span 
                    key={tech}
                    className="px-2 md:px-4 py-1 md:py-2 bg-gray-800/50 border border-yellow-600/30 text-yellow-500 text-[10px] md:text-xs uppercase tracking-wider hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6 md:pt-8">
                <a 
                  href="#projects" 
                  className="inline-block relative group overflow-hidden"
                >
                  <span className="relative z-10 px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm uppercase tracking-wider text-gray-300 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                    View My Work
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 border-2 border-yellow-500"></span>
                  <span className="absolute inset-0 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative text */}
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-24 text-gray-600 text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase z-10 interactive-text hover:text-yellow-500 transition-colors cursor-default">
        Frontend Developer
      </div>

      <style>{`
        * {
          cursor: none !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default HelloSection;