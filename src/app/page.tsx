import React, { useState } from "react";
import Background from "@/components/background";
import HeroSection from "@/components/HeroSection";
import TimelineDemo from "@/components/timeline-entries";
import ThemeButton from "@/components/ui/theme-button";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col relative bg-transparent overflow-hidden">
    <ThemeButton/>
    <HeroSection/>
    <TimelineDemo/>
    </main>
  );
}

