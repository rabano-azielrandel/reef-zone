"use client";

import Script from "next/script";

export default function Hero() {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.85/build/spline-viewer.js"
        strategy="afterInteractive"
      />

      <div className="relative w-full h-[calc(100vh-2.5rem)] overflow-hidden border border-violet-700">
        <div className="absolute inset-0 scale-110 top-90 -right-80 bg-amber-300">
          <spline-viewer
            url="https://prod.spline.design/W4mOHY2GUPeXEFIW/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
