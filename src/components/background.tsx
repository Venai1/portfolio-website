// Background.tsx
import React from 'react';
import { StarsBackground } from './ui/stars-background';

// Define BackgroundProps type to expect a `theme` of type Theme
interface BackgroundProps {
  theme: string;
}

const Background: React.FC<BackgroundProps> = ({ theme }) => {
    let bgClass: string;

    switch (theme) {
      case 'dark':
        bgClass = 'bg-dark-theme';
        break;
      case 'sunset':
        bgClass = 'bg-sunset-theme';
        break;
      case 'retro':
        bgClass = 'bg-retro-theme';
        break;
      case 'valentine':
        bgClass = 'bg-light-theme';
        break;
      default:
        bgClass = 'bg-dark-theme';
        break;
    }

  return (
    <div className={`absolute inset-0 -z-10 h-full w-full px-5 py-24 ${bgClass}`}>
         {theme === 'dark' && (
        <StarsBackground starDensity={0.00035} twinkleProbability={0.7} />
      )}    
    </div>
  );
}

export default Background;
