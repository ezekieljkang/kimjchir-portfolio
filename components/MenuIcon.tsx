"use client";

import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const MenuIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<lottie.AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/menuV3.json' // Path to your Lottie animation JSON
      });
    }

    return () => {
      animationRef.current?.destroy();
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (animationRef.current) {
      animationRef.current.setDirection(isOpen ? -1 : 1); // Reverse or play forward
      animationRef.current.play();
    }
  };

  return (
    <div className="relative">
      <div
        onClick={toggleMenu}
        className="cursor-pointer w-8 h-8 flex items-center justify-center"
        aria-label="Menu"
      >
        {/* Lottie animation */}
        <div ref={containerRef} className={`absolute top-0 left-0 w-full h-full ${isOpen ? 'block' : 'hidden'}`} />
        
        {/* SVG fallback */}
        <img
          src="/menu.svg"
          alt="Menu Icon"
          className={`absolute top-0 left-0 w-full h-full ${isOpen ? 'hidden' : 'block'}`}
        />
      </div>
    </div>
  );
};

export default MenuIcon;
