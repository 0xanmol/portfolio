"use client";
import { useEffect, useState } from "react";

export default function CuteCat() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [tailPosition, setTailPosition] = useState(0);

  useEffect(() => {
    // Random blinking
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 2000 + Math.random() * 3000);

    // Gentle tail swaying
    const tailInterval = setInterval(() => {
      setTailPosition(Math.random() * 20 - 10); // -10 to 10 degrees
    }, 1500 + Math.random() * 2000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(tailInterval);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Cat Body */}
      <div className="relative">
        {/* Main Body (sitting position) */}
        <div className="w-16 h-20 bg-black rounded-full relative">
          
          {/* Head (bigger and rounder) */}
          <div className="absolute -left-2 -top-6 w-20 h-20 bg-black rounded-full">
            
            {/* Ears */}
            <div className="absolute -top-3 left-3 w-6 h-8 bg-black rounded-t-full transform -rotate-12"></div>
            <div className="absolute -top-3 right-3 w-6 h-8 bg-black rounded-t-full transform rotate-12"></div>
            
            {/* Inner ears (pink) */}
            <div className="absolute -top-2 left-4 w-4 h-6 bg-pink-300 rounded-t-full transform -rotate-12"></div>
            <div className="absolute -top-2 right-4 w-4 h-6 bg-pink-300 rounded-t-full transform rotate-12"></div>
            
            {/* Eyes (big and round like reference) */}
            <div className="absolute top-6 left-4 flex space-x-2">
              {isBlinking ? (
                <>
                  <div className="w-4 h-1 bg-gray-700 rounded-full"></div>
                  <div className="w-4 h-1 bg-gray-700 rounded-full"></div>
                </>
              ) : (
                <>
                  {/* Outer eye circles */}
                  <div className="w-6 h-6 bg-yellow-400 rounded-full relative">
                    {/* Inner eye circles */}
                    <div className="absolute top-1 left-1 w-4 h-4 bg-black rounded-full">
                      {/* Eye shine */}
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-yellow-400 rounded-full relative">
                    <div className="absolute top-1 left-1 w-4 h-4 bg-black rounded-full">
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Nose (small pink dot) */}
            <div className="absolute top-12 left-9 w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
            
            {/* Small mouth */}
            <div className="absolute top-13 left-8 w-3 h-1 border-b-2 border-gray-800 rounded-full"></div>
          </div>
          
          {/* Tail (curved behind) */}
          <div 
            className="absolute -right-6 top-4 w-3 h-16 bg-black rounded-full origin-bottom transition-transform duration-1000"
            style={{ transform: `rotate(${tailPosition + 15}deg)` }}
          ></div>
          
          {/* Front paws */}
          <div className="absolute bottom-0 left-2 w-3 h-4 bg-black rounded-full"></div>
          <div className="absolute bottom-0 right-2 w-3 h-4 bg-black rounded-full"></div>
          
          {/* Chest/belly area */}
          <div className="absolute top-2 left-4 w-8 h-12 bg-black rounded-full"></div>
        </div>

        {/* Subtle shadow */}
        <div className="absolute -bottom-1 left-2 w-12 h-2 bg-black opacity-10 rounded-full blur-sm"></div>
      </div>
    </div>
  );
}