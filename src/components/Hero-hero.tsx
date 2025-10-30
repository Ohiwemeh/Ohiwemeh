import React from 'react';

interface HeroProps {
    title?: string;
    subtitle?: string;
}

const HeroHero: React.FC<HeroProps> = ({ title, subtitle }) => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </section>
    );
};

export default HeroHero;