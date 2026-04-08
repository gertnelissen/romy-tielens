"use client";

import { useEffect } from "react";

// TODO: Replace with Romy's actual Calendly URL
const CALENDLY_URL = "https://calendly.com/romy-tielens/kennismaking";

export function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-xl overflow-hidden border border-stone-200"
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=4a6741`}
      style={{ minWidth: "320px", height: "630px" }}
    />
  );
}
