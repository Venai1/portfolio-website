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
      <h3 className="text-2xl text-neutral-content text-center max-w-3xl mx-auto pb-10">
                I&apos;ve worked with a variety of framework, languages and tools during my time at school and in the industry.
                <br />
                Here are some of the technologies I&apos;ve worked with:
      </h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        
        {/* Languages */}
        <div>
          <h4 className="text-2xl font-semibold text-accent pb-3">Languages</h4>
          <ul className="text-xl font-semibold list-none space-y-2 text-neutral-content">
            <li>Python</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Swift</li>
          </ul>
        </div>
        
        {/* Frameworks */}
        <div>
          <h4 className="text-2xl font-semibold text-accent pb-3">Frameworks</h4>
          <ul className="list-none text-xl font-semibold space-y-2 text-neutral-content">
            <li>JUnit</li>
            <li>Selenium</li>
            <li>XCTest</li>
            <li>SwiftUI</li>
            <li>GamePlayKit</li>
          </ul>
        </div>
        
        {/* Developer Tools */}
        <div>
          <h4 className="text-2xl font-semibold text-accent pb-3">Developer Tools</h4>
          <ul className="list-none text-xl font-semibold space-y-2 text-neutral-content">
            <li>Git</li>
            <li>VS Code</li>
            <li>PyCharm</li>
            <li>IntelliJ</li>
            <li>Xcode</li>
          </ul>
        </div>
        
        {/* Libraries */}
        <div>
          <h4 className="text-2xl font-semibold text-accent pb-3">Libraries</h4>
          <ul className="list-none text-xl font-semibold space-y-2 text-neutral-content">
            <li>POSIX</li>
            <li>NumPy</li>
            <li>pandas</li>
            <li>Flask</li>
            <li>Spring Boot</li>
          </ul>
        </div>
        
      </div>
      
      <div className="flex justify-center items-center">
        <div className="pb-10">
          <div className="scroller mt-8" data-direction="right" data-speed="fast">
            <div className="scroller__inner flex justify-center items-center space-x-4">
              <IconWithTooltip src={NextJS.src} alt="Next.js Logo" label="Next.js" />
              <IconWithTooltip src={NodeJS.src} alt="Node.js Logo" label="Node.js" />
              <IconWithTooltip src={ReactLogo.src} alt="React Logo" label="React" />
              <IconWithTooltip src={xcode.src} alt="Xcode Logo" label="Xcode" />
              <IconWithTooltip src={typescript.src} alt="TypeScript Logo" label="TypeScript" />
              <IconWithTooltip src={Python.src} alt="Python Logo" label="Python" />
              <IconWithTooltip src={Swift.src} alt="Swift Logo" label="Swift" />
              <IconWithTooltip src={CPlusPlus.src} alt="C++ Logo" label="C++" />
              <IconWithTooltip src={Kotlin.src} alt="Kotlin Logo" label="Kotlin" />
              <IconWithTooltip src={MongoDB.src} alt="MongoDB Logo" label="MongoDB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
