"use client";
import { useState, useCallback } from "react";
import { useKonamiCode, useCatTrigger } from "@/hooks/useKonamiCode";
import EasterEggCat from "./EasterEggCat";

export default function EasterEggManager() {
  const [showCat, setShowCat] = useState(false);
  const [catKey, setCatKey] = useState(0); // Force re-render for multiple activations

  const activateEasterEgg = useCallback(() => {
    if (showCat) return; // Prevent multiple cats at once
    
    setShowCat(true);
    setCatKey(prev => prev + 1); // Force re-render with new animation
    
    // Optional: Add a subtle console message for developers
    console.log("🐱 Meow! You found the secret cat!");
  }, [showCat]);

  const handleCatComplete = useCallback(() => {
    setShowCat(false);
  }, []);

  // Set up triggers
  useKonamiCode(activateEasterEgg);
  useCatTrigger(activateEasterEgg);

  return (
    <>
      <EasterEggCat
        key={catKey}
        isVisible={showCat}
        onComplete={handleCatComplete}
      />
      
      {/* Hidden hint for developers - only visible in dev tools */}
      <div 
        className="hidden" 
        data-hint="Try the Konami code (↑↑↓↓←→←→BA) or type 'cat' to find the Easter egg!"
      />
    </>
  );
}