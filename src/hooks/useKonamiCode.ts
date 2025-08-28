"use client";
import { useEffect, useState, useCallback } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp", 
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA"
];

export function useKonamiCode(callback: () => void) {
  const [, setKeys] = useState<string[]>([]);

  const resetKeys = useCallback(() => {
    setKeys([]);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeys((currentKeys) => {
        const newKeys = [...currentKeys, event.code];
        
        // Keep only the last 10 keys (length of Konami code)
        const trimmedKeys = newKeys.slice(-KONAMI_CODE.length);
        
        // Check if the sequence matches the Konami code
        const matches = trimmedKeys.every((key, index) => key === KONAMI_CODE[index]);
        
        if (matches && trimmedKeys.length === KONAMI_CODE.length) {
          callback();
          return []; // Reset after successful activation
        }
        
        // Reset if the current key doesn't match the expected next key
        const expectedKey = KONAMI_CODE[trimmedKeys.length - 1];
        if (event.code !== expectedKey) {
          // If this key could be the start of the sequence, start over
          if (event.code === KONAMI_CODE[0]) {
            return [event.code];
          }
          return [];
        }
        
        return trimmedKeys;
      });
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);

  return { resetKeys };
}

// Alternative trigger: typing "cat"
export function useCatTrigger(callback: () => void) {
  const [, setTypedKeys] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only capture letter keys
      if (event.code.startsWith("Key")) {
        const letter = event.key.toLowerCase();
        
        setTypedKeys((current) => {
          const newTyped = current + letter;
          
          if (newTyped.endsWith("cat")) {
            callback();
            return ""; // Reset after trigger
          }
          
          // Keep only last 10 characters to prevent memory issues
          return newTyped.slice(-10);
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);

  return { resetTyped: () => setTypedKeys("") };
}