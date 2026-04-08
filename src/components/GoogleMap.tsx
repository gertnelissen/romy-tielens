"use client";

import { useState } from "react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.5!2d5.3607769!3d50.9703005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c121198b12ad1b%3A0xe86ffcbbf376dbc7!2sKadans!5e0!3m2!1snl!2sbe!4v1700000000000";

export function GoogleMap() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <button
        onClick={() => setLoaded(true)}
        className="w-full h-[300px] bg-sage-50 border border-stone-200 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-sage-100 transition-colors"
      >
        <svg
          className="w-10 h-10 text-sage-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="text-base text-stone-600 font-medium">
          Klik om de kaart te laden
        </span>
        <span className="text-sm text-stone-400">
          Zorgpraktijk Kadans — Kempische Steenweg 565, Hasselt
        </span>
      </button>
    );
  }

  return (
    <iframe
      src={MAP_SRC}
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Zorgpraktijk Kadans — Kempische Steenweg 565, Hasselt"
    />
  );
}
