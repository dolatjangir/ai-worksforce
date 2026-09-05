"use client"
import { useState, useEffect, useRef } from 'react';

const words = ["Workforce", "Assistant", "Partner", "Team", "Solution", "Engine"];
const LINE_HEIGHT_EM = 1.5;

export default function CyclingText() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
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
    <span
      className="relative inline-block align-bottom"
      style={{ height: `${LINE_HEIGHT_EM}em`, overflow: 'hidden' }}
    >
      <span
        className="flex flex-col"
        style={{
          transform: `translateY(-${index * LINE_HEIGHT_EM}em)`, // <-- fixed unit, not %
          transition: 'transform 500ms ease-in-out',
        }}
      >
        {words.map((word) => (
          <span
            key={word}
            style={{ height: `${LINE_HEIGHT_EM}em`, lineHeight: `${LINE_HEIGHT_EM}em` }}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}