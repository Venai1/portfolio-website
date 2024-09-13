import React from 'react';
import StarsBackground from './ui/stars-background';
import { ShootingStars } from './ui/shooting-stars';

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
    <div className={`absolute inset-0 h-full w-full ${bgClass} z-2`}>
      <ShootingStars />
    </div>
  );
}

export default Background;
