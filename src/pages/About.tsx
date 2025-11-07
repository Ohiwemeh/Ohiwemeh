
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const AboutMeSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-12">
            {/* Decorative flowing lines */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
                <svg className="absolute top-20 right-0 w-96 h-96" viewBox="0 0 200 200">
                    <path d="M 50 100 Q 100 50 150 100" stroke="url(#gradient1)" strokeWidth="0.5" fill="none" />
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg className="absolute bottom-40 left-0 w-96 h-96" viewBox="0 0 200 200">
                    <path d="M 50 50 Q 100 100 50 150" stroke="url(#gradient2)" strokeWidth="0.5" fill="none" />
                    <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* About Me Header Card */}
                <div className="relative mb-12">
                    <div className="absolute -left-4 top-0 w-64 h-20 bg-gradient-to-r from-purple-600 to-purple-500 rounded-r-full flex items-center pl-8">
                        <h2 className="text-white text-3xl md:text-4xl font-bold font-[Montserrat]">About me</h2>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
                    {/* Left Column - Bio and Contact */}
                    <div className="space-y-8">
                        {/* Bio Section */}
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-teal-400/20">
                            <p className="text-teal-100/80 text-base md:text-lg font-[Poppins] leading-relaxed mb-4">
                                <span className="text-teal-400 font-semibold">Hi!</span>
                            </p>
                            <p className="text-teal-100/80 text-base md:text-lg font-[Poppins] leading-relaxed mb-4">
                                My name is <span className="text-teal-400 font-semibold">Joseph Ohiwemeh Jegede</span>.
                            </p>
                            <p className="text-teal-100/80 text-base md:text-lg font-[Poppins] leading-relaxed mb-4">
                                I am a Full-stack Developer & Designer with experience in modern web technologies and creative problem-solving.
                            </p>
                            <p className="text-teal-100/60 text-base md:text-lg font-[Poppins] leading-relaxed">
                                My objective: Challenge myself in new environments to learn, develop, and improve my skills through different projects while creating elegant digital solutions with precision and creativity.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-teal-400/20">
                            <h3 className="text-white text-2xl font-bold font-[Montserrat] italic mb-6">Contact</h3>
                            <div className="space-y-4">
                                <a href="mailto:Ohiwemehjoseph@gmail.com" className="flex items-center gap-3 text-teal-100/80 hover:text-teal-400 transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center group-hover:bg-teal-400/30">
                                        <Mail size={16} className="text-teal-400" />
                                    </div>
                                    <span className="font-[Poppins]">Ohiwemehjoseph@gmail.com</span>
                                </a>
                                <a href="tel:+2349137818358" className="flex items-center gap-3 text-teal-100/80 hover:text-teal-400 transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center group-hover:bg-teal-400/30">
                                        <Phone size={16} className="text-teal-400" />
                                    </div>
                                    <span className="font-[Poppins]">+234 913 781 8358</span>
                                </a>
                                <a href="https://github.com/Ohiwemeh" className="flex items-center gap-3 text-teal-100/80 hover:text-teal-400 transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center group-hover:bg-teal-400/30">
                                        <Github size={16} className="text-teal-400" />
                                    </div>
                                    <span className="font-[Poppins]">github.com/Ohiwemeh</span>
                                </a>
                                <a href="#" className="flex items-center gap-3 text-teal-100/80 hover:text-teal-400 transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center group-hover:bg-teal-400/30">
                                        <Linkedin size={16} className="text-teal-400" />
                                    </div>
                                    <span className="font-[Poppins]">LinkedIn Profile</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Photo */}
                    <div className="flex items-start justify-center lg:justify-end">
                        <div className="relative">
                            {/* Decorative blob background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-teal-500/30 rounded-[3rem] transform rotate-6 blur-2xl"></div>
                            
                            {/* Photo container with border */}
                            <div className="relative w-80 h-96 rounded-[3rem] overflow-hidden border-4 border-teal-400/40 bg-gradient-to-br from-slate-700 to-slate-800">
                                {/* Placeholder - replace with actual image */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center mb-4">
                                            <span className="text-5xl font-bold text-slate-900">JO</span>
                                        </div>
                                        <p className="text-teal-300/60 text-sm font-[Poppins]">Your photo here</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative flowing line */}
                            <svg className="absolute -top-20 -right-10 w-40 h-40 opacity-50" viewBox="0 0 100 100">
                                <path d="M 20 50 Q 50 20 80 50" stroke="url(#photoGradient)" strokeWidth="1" fill="none" />
                                <defs>
                                    <linearGradient id="photoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#14b8a6" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-16 bg-gradient-to-br from-purple-600/20 to-teal-500/20 rounded-[3rem] p-8 md:p-12 border border-purple-400/20 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Education */}
                        <div>
                            <h3 className="text-white text-xl font-bold font-[Montserrat] italic mb-4">Education</h3>
                            <div className="space-y-2">
                                <div className="inline-block px-3 py-1 bg-slate-800/60 rounded-full border border-teal-400/30 mb-2">
                                    <span className="text-teal-300 text-xs font-[Poppins]">2020 - Now</span>
                                </div>
                                <p className="text-teal-100/80 font-[Poppins] text-sm">University - Computer Science</p>
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div>
                            <h3 className="text-white text-xl font-bold font-[Montserrat] italic mb-4">Soft skill</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <span className="text-teal-100/80 font-[Poppins]">Teamwork</span>
                                <span className="text-teal-100/80 font-[Poppins]">Critical Thinking</span>
                                <span className="text-teal-100/80 font-[Poppins]">Communication</span>
                                <span className="text-teal-100/80 font-[Poppins]">Time Management</span>
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div>
                            <h3 className="text-white text-xl font-bold font-[Montserrat] italic mb-4">Technical skill</h3>
                            <div className="flex flex-wrap gap-2">
                                <div className="w-10 h-10 bg-slate-800/60 rounded-lg flex items-center justify-center border border-teal-400/30">
                                    <span className="text-orange-400 font-bold text-xs">HTML</span>
                                </div>
                                <div className="w-10 h-10 bg-slate-800/60 rounded-lg flex items-center justify-center border border-teal-400/30">
                                    <span className="text-blue-400 font-bold text-xs">CSS</span>
                                </div>
                                <div className="w-10 h-10 bg-slate-800/60 rounded-lg flex items-center justify-center border border-teal-400/30">
                                    <span className="text-yellow-400 font-bold text-xs">JS</span>
                                </div>
                                <div className="w-10 h-10 bg-slate-800/60 rounded-lg flex items-center justify-center border border-teal-400/30">
                                    <span className="text-cyan-400 font-bold text-xs">React</span>
                                </div>
                                <div className="w-10 h-10 bg-slate-800/60 rounded-lg flex items-center justify-center border border-teal-400/30">
                                    <span className="text-green-400 font-bold text-xs">Node</span>
                                </div>
                                <div className="w-10 h-10 bg-slate-800/60 rounded-lg flex items-center justify-center border border-teal-400/30">
                                    <span className="text-purple-400 font-bold text-xs">TS</span>
                                </div>
                            </div>
                        </div>

                        {/* Skill Set */}
                        <div>
                            <h3 className="text-white text-xl font-bold font-[Montserrat] italic mb-4">Skill set</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <span className="text-teal-100/80 font-[Poppins]">User Research</span>
                                <span className="text-teal-100/80 font-[Poppins]">Web Design</span>
                                <span className="text-teal-100/80 font-[Poppins]">Wireframing</span>
                                <span className="text-teal-100/80 font-[Poppins]">App Design</span>
                                <span className="text-teal-100/80 font-[Poppins]">Brainstorming</span>
                                <span className="text-teal-100/80 font-[Poppins]">Prototyping</span>
                            </div>
                        </div>
                    </div>

                    {/* Interest & Language Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-teal-400/20">
                        <div>
                            <h3 className="text-white text-xl font-bold font-[Montserrat] italic mb-4">Interest</h3>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="text-teal-100/80 font-[Poppins]">Design Trends</span>
                                <span className="text-teal-400/60">|</span>
                                <span className="text-teal-100/80 font-[Poppins]">Technology</span>
                                <span className="text-teal-400/60">|</span>
                                <span className="text-teal-100/80 font-[Poppins]">Web Development</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-bold font-[Montserrat] italic mb-4">Language</h3>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="text-teal-100/80 font-[Poppins]">English (Fluent)</span>
                                <span className="text-teal-400/60">|</span>
                                <span className="text-teal-100/80 font-[Poppins]">Yoruba (Native)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;