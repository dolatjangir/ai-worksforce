"use client"
import { useState, useEffect, useRef } from 'react';

const words = ["Workforce", "Assistant", "Partner", "Team", "Solution", "Engine"];

export default function CyclingText() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // guard: never allow more than one interval to exist at once
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <span
        className="flex flex-col"
        style={{
          transform: `translateY(-${index * 100}%)`,
          transition: 'transform 500ms ease-in-out', // inline, not dependent on Tailwind class generation
        }}
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