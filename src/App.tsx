import React from 'react';
import LandingPage from './pages/Landing-Page';
import AboutMeSection from './pages/About';

const App: React.FC = () => {
  return (
    <div className="App">
        <LandingPage/>
        <AboutMeSection/>
        
     
    </div>
  );
};

export default App;