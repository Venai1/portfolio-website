"use client"

import React, { useEffect } from 'react';
import Swift from '../../../public/swift.svg'; // Adjust path if necessary
import Python from '../../../public/python.svg';
import CPlusPlus from '../../../public/c-plusplus.svg';
import Kotlin from '../../../public/kotlin-icon.svg';
import MongoDB from '../../../public/mongodb-icon.svg';
import NextJS from '../../../public/nextjs-icon.svg';
import NodeJS from '../../../public/nodejs-icon.svg';
import ReactLogo from '../../../public/react.svg';
import xcode from '../../../public/xcode.svg';
import typescript from '../../../public/typescript-icon.svg';
import Image from 'next/image'; // Import Image component

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

  return (
    <div className="flex items-center justify-center pb-10">
      <div className="scroller" data-direction="right" data-speed="fast">
        <div className="scroller__inner">
          <Image src={Python.src} alt="Python Logo" className="h-16" width={64} height={64} />
          <Image src={Swift.src} alt="Swift Logo" className="h-16" width={64} height={64} />
          <Image src={CPlusPlus.src} alt="C++ Logo" className="h-16" width={64} height={64} />
          <Image src={Kotlin.src} alt="Kotlin Logo" className="h-16" width={64} height={64} />
          <Image src={MongoDB.src} alt="MongoDB Logo" className="h-16" width={64} height={64} />
          <Image src={NextJS.src} alt="Next.js Logo" className="h-16" width={64} height={64} />
          <Image src={NodeJS.src} alt="Node.js Logo" className="h-16" width={64} height={64} />
          <Image src={ReactLogo.src} alt="React Logo" className="h-16" width={64} height={64} />
          <Image src={xcode.src} alt="Xcode Logo" className="h-16" width={64} height={64} />
          <Image src={typescript.src} alt="TypeScript Logo" className="h-16" width={64} height={64} />
        </div>
      </div>
    </div>
  );
}
