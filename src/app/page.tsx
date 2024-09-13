import React, { useState } from "react";
import Background from "@/components/background";
import HeroSection from "@/components/HeroSection";
import TimelineDemo from "@/components/timeline-entries";
import { AboutMe } from "@/components/about-me";
import Skills from "@/components/ui/skills";
import StarsCanvas from "@/components/ui/stars-background";
import Projects from "@/components/projects";

export default function Home() {

  return (
    <main className="min-h-screen flex-col relative bg-transparent overflow-hidden select-none">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    <Background theme='dark' />
    <StarsCanvas />
    <HeroSection/>
    <AboutMe/>
    <TimelineDemo/>
    <Skills/>
    <Projects/>
    </main>
  );
}

