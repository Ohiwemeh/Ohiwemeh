import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Phone } from 'lucide-react';

interface LandingHeroProps {
    title?: string;
    subtitle?: string;
}

const LandingPage: React.FC<LandingHeroProps> = ({ title, subtitle }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const today = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).replace(/ (\d{4})$/, ',$1');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Header */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
                <div className="flex justify-between items-center px-8 md:px-20 py-6">
                    <div className="relative z-10">
                        <h1 className='font-[Montserrat] font-bold text-xl md:text-2xl bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent'>
                            Ohiwemeh
                        </h1>
                        <div className="h-0.5 w-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
                    </div>
                    <div className="hidden md:block text-teal-300/80 text-sm font-[Montserrat]">{today}</div>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-teal-400">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Main Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-20">
                {/* Animated title with stagger effect */}
                <div className="text-center space-y-6 max-w-5xl animate-fade-in">
                    <div className="inline-block">
                        <span className="text-teal-400/60 text-sm md:text-base font-[Montserrat] tracking-widest uppercase">Welcome to my digital space</span>
                        <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mt-3 mx-auto"></div>
                    </div>

                    <h1 className="text-2xl md:text-7xl lg:text-7xl font-[Montserrat] font-bold leading-tight">
                        <span className="bg-gradient-to-r from-teal-200 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                            {title || "Joseph Ohiwemeh Jegede"}
                        </span>
                    </h1>

                    <p className="text-xl md:text-3xl lg:text-4xl font-light text-teal-100/80 font-[Montserrat] leading-relaxed">
                        {subtitle || "Full-stack Developer & Designer"}
                    </p>

                    <p className="text-base md:text-lg text-teal-100/60 font-[Poppins] max-w-2xl mx-auto leading-relaxed">
                        Crafting elegant digital solutions with precision and creativity. Specializing in modern web development and UI/UX design.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                        <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-[Montserrat] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            View My Work
                        </button>
                        <button className="px-8 py-3 border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10 font-[Montserrat] font-semibold rounded-lg transition-all duration-300">
                            Get In Touch
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-teal-400/60 text-xs font-[Montserrat] uppercase tracking-widest">Scroll</span>
                        <svg className="w-5 h-5 text-teal-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-teal-400/20 py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-teal-400 text-sm font-[Montserrat] uppercase tracking-widest">Full Name</h3>
                            <p className='font-medium font-[Poppins] text-teal-50 text-lg'>Joseph Ohiwemeh Jegede</p>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-teal-400 text-sm font-[Montserrat] uppercase tracking-widest">Email</h3>
                            <a href="mailto:Ohiwemehjoseph@gmail.com" className='font-medium font-[Poppins] text-teal-50 text-lg hover:text-teal-400 transition-colors flex items-center gap-2'>
                                <Mail size={16} />
                                Ohiwemeh@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-teal-400 text-sm font-[Montserrat] uppercase tracking-widest">Phone</h3>
                            <a href="tel:+2349137818358" className='font-medium font-[Poppins] text-teal-50 text-lg hover:text-teal-400 transition-colors flex items-center gap-2'>
                                <Phone size={16} />
                                +234 913 781 8358
                            </a>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent my-8"></div>

                    {/* Bottom */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-teal-100/60 text-sm font-[Poppins]">© 2025 Joseph Ohiwemeh Jegede. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default LandingPage;