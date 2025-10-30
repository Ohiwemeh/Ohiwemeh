import React from 'react';
import HeaderBlack from '../components/Header-black';
import HeroHero from '../components/Hero-hero';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100">
           <HeaderBlack/>
           <HeroHero/>
        </section>
    );
};

export default Hero;