import React from 'react'
import { Github, Mail, Phone } from 'lucide-react';

const footer = () => {
  return (
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
                            <a href="https://github.com/Ohiwemeh" className="text-teal-400 hover:text-teal-300 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
  )
}

export default footer
