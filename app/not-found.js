"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamic import of Lottie Player with SSR disabled
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function ComingSoonPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-[300px] md:w-[400px] lg:w-[500px]">
        <Player
          autoplay
          loop
          src="/lootiefile-animation/comingsoon-animation.json"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}