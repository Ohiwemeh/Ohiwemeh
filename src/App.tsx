import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing-Page';
import IntroSection from './pages/About';
import HelloSection from './pages/HelloSection';
import PortfolioWelcome from './pages/Landing-Page';
import ProjectsSection from './pages/ProjectsSection';
import ProjectDetail from './pages/ProjectDetail';

const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random()
      };
      
      setTrails(prev => [...prev.slice(-0), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-remove old trails
  useEffect(() => {
    if (trails.length > 0) {
      const timer = setTimeout(() => {
        setTrails(prev => prev.slice(1));
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [trails]);

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="pointer-events-none fixed z-50 mix-blend-difference"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          // transform: 'translate(-50%, -50%)',
          // transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-8 h-8 bg-white rounded-full opacity-60 blur-sm" />
      </div>

      {/* Trail particles */}
      {trails.map((trail, idx) => (
        <div
          key={trail.id}
          className="pointer-events-none fixed z-40"
          style={{
            left: trail.x,
            top: trail.y,
            transform: 'translate(-50%, -50%)',
            animation: `fadeOut 0.8s ease-out forwards`
          }}
        >
          <div 
            className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            style={{
              width: `${12 - idx}px`,
              height: `${12 - idx}px`,
              opacity: 1 - (idx * 0.12)
            }}
          />
        </div>
      ))}

      <style>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.5);
          }
        }
      `}</style>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App relative">
        <MouseFollower />
        <Routes>
          <Route path="/" element={
            <>
              <PortfolioWelcome/>
              <IntroSection/>
              <HelloSection/>
              <ProjectsSection/>
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;