import React from "react";
import ScrollIndicator from "./scroll-down";

const HeroSection: React.FC = () => {
  return (
    <div className="z-[20]">
      <section className="min-h-screen flex items-center justify-center">
        <section className="bg-transparent min-h-screen items-start justify-start pt-15  font-serif">
          <div className="grid place-items-center">
            <div className="text-neutral-content text-6xl lg:text-7xl font-extrabold pb-4 text-center">
              {/* Ensure "Hello, I'm" and "Venai" stack on smaller screens */}
              <h1 className="block sm:inline">Hello, I'm </h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-br to-accent from-primary block sm:inline">
                Venai
              </h1>
            </div>
            <p className="text-neutral-content text-2xl lg:text-2xl pb-4 text-center">
              Computer Science Student and Tech Enthusiast
            </p>
          </div>
        </section>
      </section>
      <ScrollIndicator />
    </div>
  );
};

export default HeroSection;
