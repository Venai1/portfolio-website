import React from "react";
import HeroSection from "./ui/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover transform translate-x-1/2 translate-y-1/2"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <source src="/blackhole.mp4" type="video/mp4" />
      </video>

      {/* Content over the video */}
      <HeroSection />
    </div>
  );
};

export default Hero;
