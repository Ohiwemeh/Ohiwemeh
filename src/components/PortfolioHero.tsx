import React from 'react';

const PortfolioHero: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Card */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <nav className="bg-black text-white rounded-3xl shadow-2xl px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="text-sm md:text-base opacity-80 hover:opacity-100 transition">About Us</div>
            <div className="text-sm md:text-base opacity-80 hover:opacity-100 transition">Services</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-2xl">✦</span>
            <span className="text-xl md:text-2xl font-bold">Creatix</span>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-sm md:text-base opacity-80 hover:opacity-100 transition">Projects</div>
            <div className="text-sm md:text-base opacity-80 hover:opacity-100 transition">Contact</div>
            <button className="hidden md:inline-flex bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">Subscribe</button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-10">
        {/* Decorative green star */}
        <div className="absolute left-4 md:left-10 top-2 md:top-4 text-green-400">
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
            <path d="M30 0L33.09 26.91L60 30L33.09 33.09L30 60L26.91 33.09L0 30L26.91 26.91L30 0Z" fill="#4ADE80"/>
          </svg>
        </div>

        {/* Title centered */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
            Empowering Brands
          </h1>
          <div className="flex items-center justify-center gap-2 text-green-500 mb-6">
            <span className="hidden md:inline">❮</span>
            <span className="text-xl md:text-2xl text-gray-700">Through Creative Solutions</span>
            <span className="hidden md:inline">❯</span>
          </div>
        </div>

        {/* Content row: left info, center image, right experience */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">
          {/* Left info panel */}
          <div className="order-2 md:order-1 text-center md:text-left max-w-md md:justify-self-start md:pl-4">
            <p className="text-gray-600 text-sm md:text-base mb-4">
              From web development to branding, we deliver innovative solutions that elevate your brand's presence through exceptional design.
            </p>
            <button className="backdrop-blur-md bg-white/60 text-gray-800 px-5 py-2 rounded-full border border-black/10 hover:bg-white/80 transition-colors text-sm">
              Innovate Your Project
            </button>
          </div>

          {/* Center image */}
          <div className="order-1 md:order-2 relative justify-self-center">
            {/* subtle doodle circle behind */}
            <div className="absolute -left-10 -right-10 -top-6 -bottom-6 rounded-full border-2 border-gray-200 opacity-60 -z-10 hidden md:block"></div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-full overflow-hidden w-[16rem] md:w-[22rem] aspect-[3/4] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                alt="Professional woman"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience badge on the right side */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-28">
              <div className="backdrop-blur-md bg-white/80 border border-black/10 shadow-2xl rounded-2xl px-6 py-4 text-center">
                <div className="text-green-600 text-lg leading-none mb-1">★★★★★</div>
                <div className="text-xl font-bold text-gray-900">10 Years</div>
                <div className="text-gray-600 text-xs">Experience</div>
              </div>
            </div>
          </div>

          {/* Spacer/right column to balance on desktop */}
          <div className="order-3 hidden md:block" />
        </div>

        {/* CTA Buttons centered with glass background */}
        <div className="mt-8 flex items-center justify-center gap-3 md:gap-4">
          <button className="backdrop-blur-md bg-green-500/90 text-white px-6 md:px-8 py-3 rounded-full text-sm md:text-lg font-semibold border border-white/30 shadow-lg hover:bg-green-600/90 transition-colors">
            Get Started
          </button>
          <button className="backdrop-blur-md bg-white/40 text-black px-6 md:px-8 py-3 rounded-full text-sm md:text-lg font-medium border border-black/10 hover:bg-white/60 transition-colors">
            Download Resume
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 px-6">
        <div className="max-w-7xl mx-auto bg-black rounded-3xl shadow-2xl px-6 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">2000+</div>
              <div className="text-gray-400 text-sm">Company</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400 text-sm">Years Exp.</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">800+</div>
              <div className="text-gray-400 text-sm">Hours of Digital</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">150M+</div>
              <div className="text-gray-400 text-sm">In Tracked Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;