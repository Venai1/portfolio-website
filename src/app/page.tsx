import React, { useState } from "react";
import Background from "@/components/background";
import HeroSection from "@/components/HeroSection";
import TimelineDemo from "@/components/timeline-entries";
import { ThemeSwap } from "@/components/ui/swap-theme";
import ScrollIndicator from "@/components/ui/scroll-down";
import { AboutMe } from "@/components/about-me";
import Skills from "@/components/ui/skills";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col relative bg-transparent overflow-hidden select-none">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    <ThemeSwap/>
    <HeroSection/>
    <AboutMe/>
    <TimelineDemo/>
    <Skills/>
    </main>
  );
}

