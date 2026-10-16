
"use client";

import Image from "next/image";
import Header from "./header";

interface FestiveHeaderProps {
  enabled?: boolean;
}

export default function FestiveHeader({
  enabled = true,
}: FestiveHeaderProps) {
  return (
    <>
      {/* Your original header — completely unchanged */}
      <Header />

      {/* Temporary Diwali navbar decoration */}
      {enabled && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-16 overflow-hidden select-none"
        >
          <Image
            src="/diwali-navbar-decoration.png"
            alt=""
            fill
            priority
            sizes="100vw"
            draggable={false}
            className="pointer-events-none object-cover object-[center_35%]"
          />
        </div>
      )}
    </>
  );
}
