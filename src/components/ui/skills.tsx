"use client";

import React, { useEffect } from 'react';
import Swift from '../../../public/swift.svg'; 
import Python from '../../../public/python.svg';
import CPlusPlus from '../../../public/c-plusplus.svg';
import Kotlin from '../../../public/kotlin-icon.svg';
import MongoDB from '../../../public/mongodb-icon.svg';
import NextJS from '../../../public/nextjs-icon.svg';
import NodeJS from '../../../public/nodejs-icon.svg';
import ReactLogo from '../../../public/react.svg';
import xcode from '../../../public/xcode.svg';
import typescript from '../../../public/typescript-icon.svg';
import Image from 'next/image';

export default function Skills() {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        (scroller as HTMLElement).setAttribute('data-animated', 'true');
        
        const scrollerInner = (scroller as HTMLElement).querySelector('.scroller__inner');
        
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);
          
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            (duplicatedItem as HTMLElement).setAttribute('aria-hidden', 'true');
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);

  // Tooltip component for reusability
  const IconWithTooltip = ({ src, alt, label }: { src: string, alt: string, label: string }) => (
    <div className="relative group flex flex-col items-center">
      <Image src={src} alt={alt} className="h-16" width={64} height={64} />
      <span className="absolute bottom-0 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-white bg-black p-1 rounded-md">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative z-[40]">
      <h1 className='text-6xl lg:text-7xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent pb-5 font-serif'>My Skills</h1>
    
      <div className="flex justify-center items-center">
        <div className="pb-10">
          <div className="scroller" data-direction="left" data-speed="fast">
            <div className="scroller__inner flex justify-center items-center space-x-4">
              <IconWithTooltip src={Python.src} alt="Python Logo" label="Python" />
              <IconWithTooltip src={Swift.src} alt="Swift Logo" label="Swift" />
              <IconWithTooltip src={CPlusPlus.src} alt="C++ Logo" label="C++" />
              <IconWithTooltip src={Kotlin.src} alt="Kotlin Logo" label="Kotlin" />
              <IconWithTooltip src={MongoDB.src} alt="MongoDB Logo" label="MongoDB" />
            </div>
          </div>
          <div className="scroller mt-8" data-direction="right" data-speed="fast">
            <div className="scroller__inner flex justify-center items-center space-x-4">
              <IconWithTooltip src={NextJS.src} alt="Next.js Logo" label="Next.js" />
              <IconWithTooltip src={NodeJS.src} alt="Node.js Logo" label="Node.js" />
              <IconWithTooltip src={ReactLogo.src} alt="React Logo" label="React" />
              <IconWithTooltip src={xcode.src} alt="Xcode Logo" label="Xcode" />
              <IconWithTooltip src={typescript.src} alt="TypeScript Logo" label="TypeScript" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
