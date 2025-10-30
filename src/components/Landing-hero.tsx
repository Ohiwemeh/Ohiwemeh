import React from 'react';

interface LandingHeroProps {
    title?: string;
    subtitle?: string;
}

const LandingHero: React.FC<LandingHeroProps> = ({ title, subtitle }) => {
    return (
        <section className="container mx-auto px-10">
            <div className="py-28">
                <h1 className="text-[150px] font-[Montserrat] font-bold text-teal-100 text-center">
                    {title || "Terrorist Dev"}
                </h1>
                <p className="-mt-14 text-[66.6px] font-[Montserrat] font-meduim text-teal-100 text-center">
                    {subtitle || "Full-stack Developer & Designer"}
                </p>
            </div>
        </section>
    );
};

export default LandingHero;