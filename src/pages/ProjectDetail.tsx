import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  stats: { [key: string]: string };
  liveDemo: string;
  github: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  features: string[];
  gallery: string[];
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "CloudScape",
      category: "Web Application",
      description: "A full-stack e-commerce website for a clothing brand, featuring product listings, a shopping cart, and secure user authentication using JWT.",
      tags: ["React", "Node.js", "MongoDB", "Express Js", "JWT", "Tailwind Css", "Cloudinary"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      stats: { Users: "1K+", features: "20+", rating: "4.8" },
      liveDemo: "https://www.cloudscapeorg.com/",
      github: "https://github.com/Ohiwemeh/cloudscape.git",
      overview: "CloudScape is a modern e-commerce platform designed to provide a seamless shopping experience for fashion enthusiasts. Built with a focus on performance and user experience, the platform handles thousands of products and users efficiently.",
      challenge: "The main challenge was creating a scalable e-commerce solution that could handle high traffic while maintaining fast load times and secure transactions. The platform needed to support real-time inventory updates, secure payment processing, and a responsive design that works across all devices.",
      solution: "We implemented a microservices architecture using React for the frontend and Node.js with Express for the backend. MongoDB was chosen for its flexibility in handling product data, while JWT tokens ensure secure authentication. Cloudinary handles image optimization and delivery, significantly improving load times.",
      results: [
        "Achieved 95+ PageSpeed score on mobile and desktop",
        "Reduced cart abandonment rate by 40%",
        "Successfully handling 1000+ active users",
        "Average page load time under 2 seconds"
      ],
      features: [
        "Real-time inventory management",
        "Secure JWT authentication",
        "Advanced product filtering and search",
        "Shopping cart with persistent state",
        "Order tracking system",
        "Admin dashboard for product management",
        "Responsive design for all devices",
        "Image optimization with Cloudinary"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop"
      ]
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
      github: "https://github.com/yourusername/blog-platform",
      overview: "African Times is a comprehensive content management system designed for modern publishers. It combines powerful writing tools with advanced SEO features to help content creators reach their audience effectively.",
      challenge: "Creating a platform that balances ease of use for content creators with powerful SEO and analytics capabilities. The system needed to handle rich media content, support multiple authors, and provide real-time collaboration features.",
      solution: "Built with Next.js for optimal SEO and performance, leveraging server-side rendering and static generation. PostgreSQL provides robust data management, while TypeScript ensures type safety across the codebase. The platform includes a custom markdown editor with live preview.",
      results: [
        "10,000+ active monthly users",
        "2,000+ published articles",
        "Average session duration increased by 60%",
        "SEO ranking improved by 45%"
      ],
      features: [
        "Rich markdown editor with live preview",
        "SEO optimization tools",
        "Multi-author support",
        "Comment moderation system",
        "Analytics dashboard",
        "Social media integration",
        "Responsive design",
        "Dark mode support"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop"
      ]
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
      github: "https://github.com/yourusername/task-management",
      overview: "A comprehensive task management solution designed for teams of all sizes. The platform provides intuitive tools for project planning, task tracking, and team collaboration, all in real-time.",
      challenge: "Building a real-time collaborative platform that could handle multiple users editing simultaneously without conflicts. The system needed to provide instant updates across all connected clients while maintaining data consistency.",
      solution: "Leveraged Firebase's real-time database for instant synchronization across clients. Redux manages complex state, while Material-UI provides a polished, professional interface. Implemented optimistic updates for a responsive user experience.",
      results: [
        "500+ active teams",
        "50,000+ tasks managed",
        "99.9% uptime",
        "Average team productivity increased by 35%"
      ],
      features: [
        "Real-time collaboration",
        "Drag-and-drop Kanban boards",
        "Gantt chart visualization",
        "Task dependencies",
        "Team member assignments",
        "File attachments",
        "Activity timeline",
        "Custom workflows"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&h=800&fit=crop"
      ]
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
      github: "https://github.com/yourusername/portfolio-dashboard",
      overview: "An advanced portfolio tracking dashboard that provides investors with real-time insights into their investments. The platform combines powerful data visualization with AI-powered analytics to help users make informed decisions.",
      challenge: "Processing and visualizing large amounts of financial data in real-time while maintaining smooth performance. The dashboard needed to handle multiple data sources and provide actionable insights without overwhelming users.",
      solution: "Implemented efficient data processing using React hooks and context API. D3.js and Chart.js provide flexible, performant visualizations. The platform integrates with multiple financial APIs to aggregate data and uses caching strategies to minimize API calls.",
      results: [
        "3,000+ active users",
        "Tracking 100+ different assets",
        "Real-time updates with <100ms latency",
        "User engagement increased by 55%"
      ],
      features: [
        "Real-time market data",
        "Interactive charts and graphs",
        "Portfolio performance analytics",
        "AI-powered insights",
        "Custom alerts and notifications",
        "Multi-currency support",
        "Dark mode",
        "Export reports"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop"
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || '1'));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') !== null ||
                           target.closest('button') !== null ||
                           target.classList.contains('interactive-text');
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <div className="text-gray-400 text-xl">Project not found</div>
      </div>
    );
  }

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

      {/* Top decorative corners */}
      <div className="absolute top-10 left-10 z-0">
        <div className="absolute top-0 left-0 h-2 w-32 md:w-64 bg-gradient-to-r from-yellow-600 via-yellow-400 to-transparent opacity-80"></div>
        <div className="absolute top-0 left-0 w-2 h-48 md:h-96 bg-gradient-to-b from-yellow-600 via-yellow-400 to-transparent opacity-80"></div>
      </div>

      {/* Back button */}
      <div className="fixed top-8 left-8 z-40">
        <Link 
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm uppercase tracking-wider"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
      </div>

      <div className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center mb-6 md:mb-8">
            <div className="w-12 md:w-16 h-[2px] bg-yellow-600 mr-4"></div>
            <span className="text-yellow-500 text-xs uppercase tracking-[0.3em] font-light">{project.category}</span>
          </div>

          <h1 className="interactive-text text-4xl md:text-6xl lg:text-7xl font-thin text-gray-200 mb-6 md:mb-8 hover:text-yellow-500 transition-colors duration-500 cursor-default">
            {project.title}
          </h1>

          <p className="interactive-text text-gray-400 text-base md:text-lg max-w-3xl leading-7 md:leading-8 font-light hover:text-gray-200 transition-colors cursor-default mb-8 md:mb-12">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 md:px-4 py-2 bg-gray-800/50 border border-yellow-600/30 text-yellow-500 text-xs uppercase tracking-wider hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 inline-block text-center"
            >
              <span className="relative z-10 text-sm uppercase tracking-wider text-gray-300 group-hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
                Live Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
              <span className="absolute inset-0 border-2 border-yellow-500"></span>
              <span className="absolute inset-0 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>

            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 inline-block text-center"
            >
              <span className="relative z-10 text-sm uppercase tracking-wider text-gray-300 group-hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
                GitHub
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 border-2 border-gray-600"></span>
              <span className="absolute inset-0 bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 md:mb-24 group">
          <div className="absolute -top-4 -left-4 w-16 md:w-20 h-16 md:h-20 border-t-2 border-l-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-top-6 group-hover:-left-6"></div>
          <div className="absolute -bottom-4 -right-4 w-16 md:w-20 h-16 md:h-20 border-b-2 border-r-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6"></div>
          
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="bg-gray-900/50 border border-yellow-500/30 p-6 md:p-8 hover:border-yellow-500 transition-all duration-300">
              <div className="text-yellow-500 text-3xl md:text-4xl font-light mb-2">{value}</div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">{key}</div>
            </div>
          ))}
        </div>

        {/* Overview Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-6 md:mb-8 flex items-center gap-4">
            <span className="w-12 md:w-16 h-[2px] bg-yellow-600"></span>
            Project Overview
          </h2>
          <div className="border-l-2 border-yellow-600/50 pl-6 md:pl-8 hover:border-yellow-600 transition-colors duration-300">
            <p className="text-gray-400 text-base md:text-lg leading-7 md:leading-8 font-light">
              {project.overview}
            </p>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-6 md:mb-8 flex items-center gap-4">
            <span className="w-12 md:w-16 h-[2px] bg-yellow-600"></span>
            The Challenge
          </h2>
          <div className="border-l-2 border-yellow-600/50 pl-6 md:pl-8 hover:border-yellow-600 transition-colors duration-300">
            <p className="text-gray-400 text-base md:text-lg leading-7 md:leading-8 font-light">
              {project.challenge}
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-6 md:mb-8 flex items-center gap-4">
            <span className="w-12 md:w-16 h-[2px] bg-yellow-600"></span>
            The Solution
          </h2>
          <div className="border-l-2 border-yellow-600/50 pl-6 md:pl-8 hover:border-yellow-600 transition-colors duration-300">
            <p className="text-gray-400 text-base md:text-lg leading-7 md:leading-8 font-light">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-6 md:mb-8 flex items-center gap-4">
            <span className="w-12 md:w-16 h-[2px] bg-yellow-600"></span>
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.features.map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 md:p-6 bg-gray-900/30 border border-yellow-600/20 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-yellow-500 mt-2 flex-shrink-0"></div>
                <span className="text-gray-400 text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-6 md:mb-8 flex items-center gap-4">
            <span className="w-12 md:w-16 h-[2px] bg-yellow-600"></span>
            Results & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.results.map((result, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 md:p-6 bg-yellow-500/5 border border-yellow-500/30 hover:bg-yellow-500/10 transition-all duration-300"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-sm md:text-base">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-6 md:mb-8 flex items-center gap-4">
            <span className="w-12 md:w-16 h-[2px] bg-yellow-600"></span>
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden">
                <img 
                  src={img} 
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12 md:py-16 border-t border-yellow-600/30">
          <h3 className="text-2xl md:text-3xl font-light text-gray-200 mb-6 md:mb-8">
            Interested in working together?
          </h3>
          <Link 
            to="/"
            className="inline-block group relative overflow-hidden px-8 md:px-12 py-3 md:py-4"
          >
            <span className="relative z-10 text-sm uppercase tracking-wider text-gray-300 group-hover:text-black transition-colors duration-300">
              View More Projects
            </span>
            <span className="absolute inset-0 border-2 border-yellow-500"></span>
            <span className="absolute inset-0 bg-yellow-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Link>
        </div>
      </div>

      {/* Bottom decorative corners */}
      <div className="absolute bottom-10 right-10 z-0">
        <div className="absolute bottom-0 right-0 h-4 w-48 md:w-96 bg-gradient-to-l from-yellow-600 via-yellow-500 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-4 h-32 md:h-64 bg-gradient-to-t from-yellow-600 via-yellow-500 to-transparent opacity-80"></div>
      </div>

      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
