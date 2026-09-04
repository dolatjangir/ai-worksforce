"use client"
import { useState, useEffect } from 'react';

const words = ["Workforce", "Assistant", "Partner", "Team", "Solution", "Engine"];

export default function CyclingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <span
        className="flex flex-col transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {words.map((word) => (
          <span key={word} className="block h-[1.2em] leading-[1.2em]">
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}