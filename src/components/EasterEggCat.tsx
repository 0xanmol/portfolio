"use client";
import { useEffect, useState } from "react";

export default function SlimWalkingCat() {
  const [position, setPosition] = useState({ x: -80, y: 0 });
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [isWalking] = useState(true);
  const [legPhase, setLegPhase] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const catWidth = 60;
    const speed = 0.8;

    const animate = () => {
      if (!isWalking) return;

      setPosition(prev => {
        let newX = prev.x + (speed * direction);
        let newY = prev.y;
        let newDirection = direction;

        // Bounce off edges
        if (newX > screenWidth) {
          newX = screenWidth;
          newDirection = -1;
        } else if (newX < -catWidth) {
          newX = -catWidth;
          newDirection = 1;
        }

        // Occasionally change vertical position for variety
        if (Math.random() < 0.002) {
          newY = Math.random() * (screenHeight - 200) + 50;
        }

        setDirection(newDirection);
        return { x: newX, y: newY };
      });

      // Animate legs
      setLegPhase(prev => (prev + 0.3) % (Math.PI * 2));
    };

    const animationId = setInterval(animate, 16); // ~60fps

    // Random direction changes
    const directionChange = setInterval(() => {
      if (Math.random() < 0.1) {
        setDirection(prev => -prev);
      }
    }, 3000);

    return () => {
      clearInterval(animationId);
      clearInterval(directionChange);
    };
  }, [direction, isWalking]);

  const legOffset1 = Math.sin(legPhase) * 2;
  const legOffset2 = Math.sin(legPhase + Math.PI) * 2;

  return (
    <div
      className="fixed z-50 transition-all duration-300 pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y || (typeof window !== 'undefined' ? window.innerHeight - 120 : 400)}px`,
        transform: direction === -1 ? 'scaleX(-1)' : 'scaleX(1)'
      }}
    >
      {/* Slim Cat Body */}
      <div className="relative">
        
        {/* Main Body - sleek and elongated */}
        <div className="w-12 h-6 bg-black rounded-full relative animate-walking-bob">
          
          {/* Head - proportional and sleek */}
          <div className="absolute -left-4 -top-1 w-8 h-8 bg-black rounded-full">
            
            {/* Ears - sharp and alert */}
            <div className="absolute -top-2 left-1 w-2 h-3 bg-black rounded-t-full transform -rotate-12"></div>
            <div className="absolute -top-2 right-1 w-2 h-3 bg-black rounded-t-full transform rotate-12"></div>
            
            {/* Eyes - sleek almond shape */}
            <div className="absolute top-2 left-1.5 flex space-x-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-80"></div>
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-80"></div>
            </div>

            {/* Nose */}
            <div className="absolute top-4 left-3 w-1 h-1 bg-pink-400 rounded-full"></div>
          </div>
          
          {/* Elegant tail - long and curved */}
          <div className="absolute -right-6 top-1 w-8 h-2 bg-black rounded-full origin-left animate-tail-flow"></div>
          <div className="absolute -right-12 top-0 w-6 h-2 bg-black rounded-full origin-left animate-tail-tip"></div>
          
          {/* Walking legs - animated */}
          <div className="absolute bottom-0 left-1 w-1.5 h-4 bg-black rounded-full" 
               style={{ transform: `translateY(${legOffset1}px)` }}></div>
          <div className="absolute bottom-0 left-3 w-1.5 h-4 bg-black rounded-full"
               style={{ transform: `translateY(${legOffset2}px)` }}></div>
          <div className="absolute bottom-0 right-3 w-1.5 h-4 bg-black rounded-full"
               style={{ transform: `translateY(${legOffset1}px)` }}></div>
          <div className="absolute bottom-0 right-1 w-1.5 h-4 bg-black rounded-full"
               style={{ transform: `translateY(${legOffset2}px)` }}></div>
        </div>

        {/* Dynamic shadow */}
        <div className="absolute -bottom-1 left-0 w-12 h-1.5 bg-black opacity-20 rounded-full blur-sm animate-pulse"></div>
      </div>
    </div>
  );
}