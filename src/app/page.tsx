import React, { useState } from "react";
import Background from "@/components/background";
import HeroSection from "@/components/HeroSection";
import TimelineDemo from "@/components/timeline-entries";
import ThemeButton from "@/components/ui/theme-button";
import { ThemeSwap } from "@/components/ui/swap-theme";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col relative bg-transparent overflow-hidden">
    <ThemeSwap/>
    
    <HeroSection/>
    <TimelineDemo/>
    </main>
  );
}

