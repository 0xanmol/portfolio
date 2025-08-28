"use client";
import { useEffect, useState } from "react";

interface EasterEggCatProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function EasterEggCat({ isVisible, onComplete }: EasterEggCatProps) {
  const [catState, setCatState] = useState<"walking" | "sitting" | "leaving">("walking");
  const [position, setPosition] = useState(-100);

  useEffect(() => {
    if (!isVisible) {
      setPosition(-100);
      setCatState("walking");
      return;
    }

    const walkAcrossScreen = () => {
      const startTime = Date.now();
      const duration = 4000; // 4 seconds to walk across
      const screenWidth = window.innerWidth;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress < 1) {
          const newPosition = -100 + (progress * (screenWidth + 200));
          setPosition(newPosition);
          requestAnimationFrame(animate);
        } else {
          // Cat reached the other side, sit for a moment
          setCatState("sitting");
          setPosition(screenWidth - 50);
          
          // After sitting, leave
          setTimeout(() => {
            setCatState("leaving");
            setTimeout(() => {
              onComplete();
            }, 1000);
          }, 2000);
        }
      };
      
      requestAnimationFrame(animate);
    };

    walkAcrossScreen();
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-20 z-50 transition-all duration-1000 ${
        catState === "leaving" ? "opacity-0 translate-y-4" : "opacity-100"
      }`}
      style={{ left: `${position}px` }}
    >
      {/* Cat Body */}
      <div className="relative">
        {/* Cat Silhouette */}
        <div className="relative">
          {/* Main Body */}
          <div className={`w-16 h-8 bg-black rounded-full relative ${
            catState === "walking" ? "animate-walking-bob" : ""
          }`}>
            {/* Head */}
            <div className="absolute -left-6 -top-1 w-10 h-10 bg-black rounded-full">
              {/* Ears */}
              <div className="absolute -top-2 left-1 w-3 h-4 bg-black rounded-t-full transform -rotate-12"></div>
              <div className="absolute -top-2 right-1 w-3 h-4 bg-black rounded-t-full transform rotate-12"></div>
              
              {/* Eyes */}
              <div className="absolute top-3 left-2 flex space-x-2">
                <div className={`w-1.5 h-1.5 bg-green-400 rounded-full ${catState === "sitting" ? "animate-pulse" : ""}`}></div>
                <div className={`w-1.5 h-1.5 bg-green-400 rounded-full ${catState === "sitting" ? "animate-pulse" : ""}`}></div>
              </div>
            </div>
            
            {/* Tail */}
            <div className={`absolute -right-8 top-0 w-12 h-3 bg-black rounded-full origin-left transform transition-transform duration-500 ${
              catState === "walking" ? "animate-tail-swish" : catState === "sitting" ? "rotate-12 animate-tail-swish" : ""
            }`}></div>
            
            {/* Legs (only visible when walking) */}
            {catState === "walking" && (
              <>
                <div className="absolute bottom-0 left-2 w-2 h-4 bg-black rounded-b-full animate-pulse"></div>
                <div className="absolute bottom-0 left-6 w-2 h-4 bg-black rounded-b-full animate-pulse"></div>
                <div className="absolute bottom-0 right-6 w-2 h-4 bg-black rounded-b-full animate-pulse"></div>
                <div className="absolute bottom-0 right-2 w-2 h-4 bg-black rounded-b-full animate-pulse"></div>
              </>
            )}
          </div>
        </div>

        {/* Sitting Animation */}
        {catState === "sitting" && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-6 bg-black rounded-full opacity-20 animate-pulse"></div>
          </div>
        )}

        {/* Paw Prints Trail */}
        {catState === "walking" && (
          <div className="absolute top-12 -left-20 flex space-x-6 opacity-30">
            <div className="w-2 h-2 bg-black rounded-full animate-fade-out"></div>
            <div className="w-2 h-2 bg-black rounded-full animate-fade-out animation-delay-200"></div>
            <div className="w-2 h-2 bg-black rounded-full animate-fade-out animation-delay-400"></div>
          </div>
        )}
      </div>
    </div>
  );
}