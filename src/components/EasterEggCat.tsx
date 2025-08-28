"use client";
import { useEffect, useState } from "react";

export default function LazyCat() {
  const [catState, setCatState] = useState<"sleeping" | "lazy" | "stretching" | "yawning">("sleeping");
  const [eyesOpen, setEyesOpen] = useState(false);

  useEffect(() => {
    // Random state changes for natural lazy behavior
    const stateInterval = setInterval(() => {
      const states: Array<"sleeping" | "lazy" | "stretching" | "yawning"> = ["sleeping", "lazy", "stretching", "yawning"];
      const randomState = states[Math.floor(Math.random() * states.length)];
      setCatState(randomState);
      
      // Random eye opening/closing
      if (randomState === "lazy" || randomState === "yawning") {
        setEyesOpen(Math.random() > 0.3);
      } else if (randomState === "stretching") {
        setEyesOpen(true);
      } else {
        setEyesOpen(false);
      }
    }, 3000 + Math.random() * 4000); // Random interval between 3-7 seconds

    // Occasional blinking when awake
    const blinkInterval = setInterval(() => {
      if (eyesOpen && catState !== "sleeping") {
        setEyesOpen(false);
        setTimeout(() => setEyesOpen(true), 150);
      }
    }, 2000 + Math.random() * 3000);

    return () => {
      clearInterval(stateInterval);
      clearInterval(blinkInterval);
    };
  }, [catState, eyesOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50 transition-all duration-1000">
      {/* Cat Body */}
      <div className="relative">
        {/* Main Body */}
        <div className={`w-20 h-10 bg-black rounded-full relative transition-all duration-1000 ${
          catState === "stretching" ? "scale-110 translate-y-1" : catState === "sleeping" ? "scale-95" : ""
        }`}>
          {/* Head */}
          <div className="absolute -left-7 -top-2 w-12 h-12 bg-black rounded-full">
            {/* Ears */}
            <div className="absolute -top-2 left-2 w-3 h-5 bg-black rounded-t-full transform -rotate-12"></div>
            <div className="absolute -top-2 right-2 w-3 h-5 bg-black rounded-t-full transform rotate-12"></div>
            
            {/* Inner ears */}
            <div className="absolute -top-1 left-2.5 w-2 h-3 bg-gray-800 rounded-t-full transform -rotate-12"></div>
            <div className="absolute -top-1 right-2.5 w-2 h-3 bg-gray-800 rounded-t-full transform rotate-12"></div>
            
            {/* Eyes */}
            <div className="absolute top-4 left-3 flex space-x-2">
              {catState === "sleeping" ? (
                // Sleeping eyes (closed)
                <>
                  <div className="w-3 h-1 bg-gray-700 rounded-full"></div>
                  <div className="w-3 h-1 bg-gray-700 rounded-full"></div>
                </>
              ) : eyesOpen ? (
                // Open eyes
                <>
                  <div className="w-2 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </>
              ) : (
                // Blinking
                <>
                  <div className="w-2 h-1 bg-gray-700 rounded-full"></div>
                  <div className="w-2 h-1 bg-gray-700 rounded-full"></div>
                </>
              )}
            </div>

            {/* Nose */}
            <div className="absolute top-6 left-5 w-1.5 h-1 bg-pink-400 rounded-full"></div>
            
            {/* Mouth (subtle) */}
            {catState === "yawning" && (
              <div className="absolute top-7 left-4.5 w-2 h-2 bg-pink-300 rounded-full opacity-70"></div>
            )}
          </div>
          
          {/* Tail */}
          <div className={`absolute -right-10 top-1 w-16 h-4 bg-black rounded-full origin-left transition-all duration-2000 ${
            catState === "lazy" ? "animate-lazy-tail-swish" : 
            catState === "stretching" ? "rotate-12" : 
            catState === "sleeping" ? "rotate-6" : ""
          }`}></div>
          
          {/* Paws (visible when stretching) */}
          {catState === "stretching" && (
            <>
              <div className="absolute -bottom-1 left-2 w-3 h-5 bg-black rounded-full transition-all duration-500"></div>
              <div className="absolute -bottom-1 left-7 w-3 h-5 bg-black rounded-full transition-all duration-500"></div>
              <div className="absolute -bottom-1 right-7 w-3 h-5 bg-black rounded-full transition-all duration-500"></div>
              <div className="absolute -bottom-1 right-2 w-3 h-5 bg-black rounded-full transition-all duration-500"></div>
            </>
          )}
        </div>

        {/* Sleeping Z's */}
        {catState === "sleeping" && (
          <div className="absolute -top-8 -right-2 text-gray-400 text-xs animate-bounce-slow">
            <div className="opacity-70">z</div>
            <div className="opacity-50 ml-1 -mt-1">z</div>
            <div className="opacity-30 ml-2 -mt-1">z</div>
          </div>
        )}

        {/* Comfort Shadow */}
        <div className="absolute -bottom-1 left-2 w-16 h-3 bg-black opacity-10 rounded-full blur-sm"></div>
      </div>
    </div>
  );
}