import React from 'react';

const LandingFooter: React.FC = () => {
    return (
        <footer className="w-full bottom-0 absolute  text-white py-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                   <h1 className='font-medium font-[Poppins] text-teal-50 text-[20px]'>Joseph Ohiwemeh Jegede</h1>

                   <h1 className='font-medium font-[Poppins] text-teal-50 text-[20px]' >Ohiwemehjoseph@gmail.com</h1>

                   <h1 className='font-medium font-[Poppins] text-teal-50 text-[20px]'>+2349137818358</h1>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;