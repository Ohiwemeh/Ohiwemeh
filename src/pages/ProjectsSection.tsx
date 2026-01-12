import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState([]);
  const [activeProject, setActiveProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "CloudScape",
      category: "Web Application",
      description: "A full-stack e-commerce website for a clothing brand, featuring product listings, a shopping cart, and secure user authentication using JWT.",
      tags: ["React", "Node.js", "MongoDB", "Express Js", "JWT","Tailwind Css", "Cloudinary"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      stats: { Users: "1K+", features: "20+", rating: "4.8" },
      liveDemo: "https://www.cloudscapeorg.com/",
      github: "https://github.com/Ohiwemeh/cloudscape.git"
    },
    {
      id: 2,
      title: "African Times",
      category: "Content Management",
      description: "Modern blog platform with markdown support, SEO optimization, and admin dashboard. Features include user authentication, comment system, and analytics integration.",
      tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      stats: { users: "10K+", posts: "2K+", rating: "4.9" },
      liveDemo: "https://your-blog-demo.com",
      github: "https://github.com/yourusername/blog-platform"
    },
    {
      id: 3,
      title: "Task Management App",
      category: "Productivity Tool",
      description: "Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features. Includes Kanban boards and Gantt charts.",
      tags: ["React", "Firebase", "Redux", "Material-UI"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      stats: { teams: "500+", tasks: "50K+", rating: "4.7" },
      liveDemo: "https://your-taskapp-demo.com",
      github: "https://github.com/yourusername/task-management"
    },
    {
      id: 4,
      title: "Portfolio Dashboard",
      category: "Data Visualization",
      description: "Interactive dashboard for tracking investment portfolios with real-time market data, custom charts, and AI-powered insights. Features responsive design and dark mode.",
      tags: ["React", "D3.js", "Chart.js", "REST API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      stats: { users: "3K+", assets: "100+", rating: "4.9" },
      liveDemo: "https://your-dashboard-demo.com",
      github: "https://github.com/yourusername/portfolio-dashboard"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') !== null ||
                           target.closest('button') !== null ||
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

      {/* Top decorative corners */}
      <div className="absolute top-10 left-10 z-0">
        <div className="absolute top-0 left-0 h-2 w-64 bg-gradient-to-r from-yellow-600 via-yellow-400 to-transparent opacity-80"></div>
        <div className="absolute top-0 left-0 w-2 h-96 bg-gradient-to-b from-yellow-600 via-yellow-400 to-transparent opacity-80"></div>
      </div>

      <div className="absolute top-10 right-10 z-0">
        <div className="absolute top-0 right-0 h-2 w-64 bg-gradient-to-l from-yellow-600 via-yellow-400 to-transparent opacity-80"></div>
        <div className="absolute top-0 right-0 w-2 h-96 bg-gradient-to-b from-yellow-600 via-yellow-400 to-transparent opacity-80"></div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-yellow-500/10 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-yellow-500/5 rounded-full"></div>

      <div className="px-8 lg:px-16 pt-20 lg:pt-32 pb-20">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-16 h-[2px] bg-yellow-600 mr-4"></div>
            <span className="text-yellow-500 text-xs uppercase tracking-[0.3em] font-light">My Work</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
            <h1 className="interactive-text text-5xl lg:text-7xl font-thin text-gray-200 leading-tight hover:text-yellow-500 transition-colors duration-500 cursor-default">
              Featured <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Projects
              </span>
            </h1>

            <p className="interactive-text text-gray-400 text-sm lg:text-base max-w-xl leading-7 font-light hover:text-gray-200 transition-colors cursor-default">
              A collection of projects that showcase my expertise in building modern, scalable web applications with cutting-edge technologies.
            </p>
          </div>

          {/* Project count indicator */}
          <div className="flex gap-2">
            {projects.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 transition-all duration-500 cursor-pointer ${
                  idx === activeProject 
                    ? 'w-16 bg-yellow-500' 
                    : 'w-8 bg-gray-700 hover:bg-yellow-500/50'
                }`}
                onClick={() => setActiveProject(idx)}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group">
                {/* Decorative corners */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-top-6 group-hover:-left-6"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-yellow-500/10 blur-3xl group-hover:bg-yellow-500/20 transition-all duration-500 -z-10"></div>
                
                {/* Number badge */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-black border-2 border-yellow-500 flex items-center justify-center z-10">
                  <span className="text-yellow-500 text-2xl font-thin">0{idx + 1}</span>
                </div>

                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* View Project overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link 
                      to={`/project/${project.id}`}
                      className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 uppercase text-sm tracking-wider hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>

                {/* Stats bar */}
                <div className="absolute -bottom-8 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border border-yellow-500/30 p-4 flex justify-around opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-yellow-500 text-lg font-light">{value}</div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  {/* Category */}
                  <div className="inline-block px-4 py-1 border border-yellow-600/50 text-yellow-500 text-xs uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h2 className="interactive-text text-3xl lg:text-5xl font-light text-gray-200 hover:text-yellow-500 transition-colors duration-300 cursor-default">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <div className="border-l-2 border-yellow-600/50 pl-6 hover:border-yellow-600 transition-colors duration-300">
                    <p className="interactive-text text-gray-400 text-sm lg:text-base leading-7 font-light hover:text-gray-200 transition-colors duration-300 cursor-default">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="px-4 py-2 bg-gray-800/50 border border-yellow-600/30 text-yellow-500 text-xs uppercase tracking-wider hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action button */}
                  <div className="flex gap-4 pt-6">
                    <Link 
                      to={`/project/${project.id}`}
                      className="group relative overflow-hidden px-6 py-3 inline-block"
                    >
                      <span className="relative z-10 text-sm uppercase tracking-wider text-gray-300 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                        View Case Study
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <span className="absolute inset-0 border-2 border-yellow-500"></span>
                      <span className="absolute inset-0 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="inline-block">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-32 h-[1px] bg-yellow-600"></div>
              <span className="text-yellow-500 text-xs uppercase tracking-[0.3em]">More Projects</span>
              <div className="w-32 h-[1px] bg-yellow-600"></div>
            </div>
            <a 
              href="#all-projects"
              className="inline-block group relative overflow-hidden px-12 py-4"
            >
              <span className="relative z-10 text-base uppercase tracking-wider text-gray-300 group-hover:text-black transition-colors duration-300">
                View All Projects
              </span>
              <span className="absolute inset-0 border-2 border-yellow-500"></span>
              <span className="absolute inset-0 bg-yellow-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative corners */}
      <div className="absolute bottom-10 right-10 z-0">
        <div className="absolute bottom-0 right-0 h-4 w-96 bg-gradient-to-l from-yellow-600 via-yellow-500 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-4 h-64 bg-gradient-to-t from-yellow-600 via-yellow-500 to-transparent opacity-80"></div>
      </div>

      {/* Footer label */}
      <div className="absolute bottom-12 left-16 text-gray-600 text-xs tracking-[0.3em] uppercase z-10 interactive-text hover:text-yellow-500 transition-colors cursor-default">
        Projects · Work · Portfolio
      </div>

      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;