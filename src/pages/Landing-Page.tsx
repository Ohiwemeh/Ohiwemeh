import React, { useState, useEffect, useRef } from 'react';

const PortfolioWelcome: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') !== null ||
                           target.classList.contains('interactive-text');
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="p-6 md:p-12 lg:p-24 min-h-screen bg-[#111111] relative overflow-hidden font-sans selection:bg-yellow-500 selection:text-white">
      
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

      {/* Particles removed */}

      {/* --- DECORATIVE CORNERS --- */}
      
      {/* Top Left Corner */}
      <div className="absolute top-4 left-4 md:top-10 md:left-10 z-0">
        <div className="absolute top-0 left-0 h-2 w-32 md:w-64 bg-gradient-to-r from-yellow-600 via-yellow-400 to-transparent opacity-80"></div>
        <div className="absolute top-0 left-0 w-2 h-48 md:h-96 bg-gradient-to-b from-yellow-600 via-yellow-400 to-transparent opacity-80"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent blur-2xl"></div>
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-0">
        <div className="absolute bottom-0 right-0 h-4 w-48 md:w-96 bg-gradient-to-l from-yellow-600 via-yellow-500 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-4 h-32 md:h-64 bg-gradient-to-t from-yellow-600 via-yellow-500 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 h-4 w-16 md:w-32 bg-gray-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-12 md:h-24 bg-gray-500"></div>
      </div>

      {/* --- HEADER --- */}

      {/* Logo (Top Left) */}
      <div className="absolute top-20 left-6 md:top-24 md:left-24 z-10">
        <div className="relative w-12 h-12 cursor-pointer group">
            <div className="absolute inset-0 bg-gray-600 transform skew-y-12 translate-y-2 translate-x-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-3"></div>
            <div className="absolute inset-0 bg-gray-400 flex items-center justify-center shadow-lg transition-all group-hover:bg-yellow-500">
                <span className="text-gray-800 font-black text-3xl group-hover:scale-110 transition-transform">J</span>
            </div>
            <div className="absolute -left-1 top-1 w-1 h-full bg-gray-500 transform skew-y-12 origin-top-right"></div>
        </div>
      </div>

      {/* Social Icons (Top Right) */}
      <div className="absolute top-20 right-6 md:top-24 md:right-24 flex items-center gap-4 md:gap-8 text-gray-500 z-10">
        <a href="#" className="hover:text-yellow-500 transition-all hover:scale-125 hover:rotate-12 duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <a href="https://github.com/Ohiwemeh" className="hover:text-yellow-500 transition-all hover:scale-125 hover:rotate-12 duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="hover:text-yellow-500 transition-all hover:scale-125 hover:rotate-12 duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </a>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex flex-col lg:flex-row items-start px-6 md:px-12 lg:px-24 pt-32 md:pt-48 h-full">
        
        {/* Left Column - Intro */}
        <div className="w-full lg:w-2/3 lg:pr-16 relative">
          <h1 className="interactive-text text-5xl md:text-7xl lg:text-[7rem] leading-none font-thin text-gray-300 mb-8 md:mb-12 tracking-tight hover:text-yellow-500 transition-colors duration-300 cursor-default">
            Welcome.
          </h1>
          
          <div className="flex">
            <div className="w-[2px] bg-yellow-600 mr-4 md:mr-8 mt-1 h-24 md:h-32 shrink-0"></div>
            
            <div className="space-y-4 md:space-y-6 max-w-xl">
              <p className="interactive-text text-gray-400 text-xs md:text-sm leading-6 md:leading-7 font-light hover:text-gray-200 transition-colors duration-300 cursor-default">
                My name is Joseph Jegede, I'm a front-end developer based in Abuja, Nigeria. I have developed many types of front-ends from well know E-commerce platforms to Blog website.
              </p>
              
              <p className="interactive-text text-gray-400 text-xs md:text-sm leading-6 md:leading-7 font-light hover:text-gray-200 transition-colors duration-300 cursor-default">
                I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Projects */}
        <div className="w-full lg:w-1/3 pt-8 md:pt-12 lg:pl-8">
          <h2 className="interactive-text text-gray-400 text-xl md:text-2xl mb-6 md:mb-8 font-light tracking-wide hover:text-yellow-500 transition-colors cursor-default">Projects</h2>
          
          <div className="relative">
            <div className="absolute -left-2 md:-left-4 top-0 w-2 md:w-4 h-16 md:h-24 border-l border-t border-yellow-600 rounded-tl-sm pointer-events-none"></div>

            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 text-xs md:text-sm transition-all duration-300 block pl-2 hover:pl-4 hover:tracking-wider group relative">
                  <span className="relative z-10">About</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-yellow-500/10 group-hover:w-full transition-all duration-300 -z-0"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 text-xs md:text-sm transition-all duration-300 block pl-2 hover:pl-4 hover:tracking-wider group relative">
                  <span className="relative z-10">My Work</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-yellow-500/10 group-hover:w-full transition-all duration-300 -z-0"></span>
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="text-gray-400 hover:text-yellow-500 text-xs md:text-sm transition-all duration-300 block hover:tracking-wider group relative w-max">
                  <span className="relative z-10">Who I Am </span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 text-xs md:text-sm transition-all duration-300 block hover:tracking-wider group relative w-max">
                  <span className="relative z-10">LED multi</span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/12K3cxAI-6yu6bWNQR_Rt2rd0_PDZUG9OaMiRKfPQrx4/edit?tab=t.0" className="text-gray-400 hover:text-yellow-500 text-xs md:text-sm transition-all duration-300 block border border-gray-600 p-2 md:p-3 hover:border-yellow-500 hover:tracking-wider w-max">
                  Veiw Resume 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="absolute bottom-8 right-6 md:bottom-24 md:right-32 text-gray-600 text-xs tracking-wider z-10 interactive-text hover:text-yellow-500 transition-colors cursor-default">
        ©2025 Ohiwemeh
      </div>

      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
};


export default PortfolioWelcome;