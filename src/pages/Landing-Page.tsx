import React from 'react';
import Header from '../components/Header';
import LandingHero from '../components/Landing-hero';
import LandingFooter from '../components/Landing-footer';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[url('https://res.cloudinary.com/dufw6bsko/image/upload/v1759397731/Landing-page_tw6d47.jpg')] bg-cover">
            <Header/>
           <LandingHero/>
           <LandingFooter/>
        </div>
    );
};

export default LandingPage;