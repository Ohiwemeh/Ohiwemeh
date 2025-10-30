import React from 'react';
import LandingPage from './pages/Landing-Page';
import Hero from './pages/Hero';

const App: React.FC = () => {
  return (
    <div className="App">
        <LandingPage/>
        <Hero/>
     
    </div>
  );
};

export default App;