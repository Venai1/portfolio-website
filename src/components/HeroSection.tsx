import React from "react";
import HeroSection from "./ui/HeroContent";
import Image from "next/image";
import SpaceWalk from "../../public/image.png"
const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Video background 
      
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-[1]" // Set z-index to 1 for the video
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <source src="/blackhole.mp4" type="video/mp4" />
      </video>
      
      /229467.mp4*/}
      
    <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-[1]" // Set z-index to 1 for the video
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <source src="/2ndblackhole.mp4" type="video/mp4" />
      </video>

      {/* Content over the video */}
      <HeroSection />
    </div>
  );
};

export default Hero;
