"use client";
import React, { useState, useEffect } from 'react';

// Define keyframes for the bounce animation
const bounceKeyframes = {
    animation: 'bounce 5s infinite',
  };
  
  // Define the animation in a style element
const bounceStyle = `
    @keyframes bounce {
      0% { transform: translateY(0); }
      20% { transform: translateY(-15px); }
      50% { transform: translateY(0); }
      80% { transform: translateY(-15px); }
      100% { transform: translateY(0); }
    }
  `;
  

const ScrollIndicator: React.FC = () => {
  const [fadeArrow, setFadeArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setFadeArrow(true);
    } else {
      setFadeArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const arrowStyle = {
    position: 'fixed',
    bottom: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '30px',
    color: '#333',
    opacity: fadeArrow ? 0 : 1,
    transition: 'opacity 0.5s ease', 
    ...bounceKeyframes,
  } as React.CSSProperties;

  return (
    <>
      <style>{bounceStyle}</style>
      <div style={arrowStyle}>↓</div>
    </>
  );
};

export default ScrollIndicator;
