"use client";
import React from "react";
import { Timeline } from "./ui/timeline";

const data = [
  {
    title: "Early Career in Retail",
    content: (
      <p className="text-neutral-content mt-2 text-xl">
        It all started with my first job in retail. At Walmart and Best Buy, I learned the value of hard work, customer service, and resilience. Standing on my feet for hours, helping customers, and solving problems on the spot taught me more than just retail skills—it gave me a sense of pride in delivering solutions. Those days were the foundation of my work ethic and people skills that I carry with me today.
      </p>
    ),
  },
  {
    title: "Beginning College",
    content: (
      <p className="text-neutral-content mt-2 text-xl">
        Starting my Bachelor of Science in Computer Science at Queens College was a turning point. I dove into complex topics like operating systems, data structures, and object-oriented programming. Every line of code I wrote in Java or C++ felt like a step closer to my future, filled with curiosity and a drive to learn. 
      </p>
    ),
  },
  {
    title: "Apple Internships",
    content: (
      <p className="text-neutral-content mt-2 text-xl">
        During my time at Apple, I had the chance to make a significant impact through both my Software Engineering and Integrity Engineering internships. I developed and refined automated testing frameworks, enhancing the quality and reliability of Apple’s products. My work contributed to the successful launch of the Apple Vision Pro and new features in iCloud. These experiences reflect my dedication to innovation and my role in advancing technology.
      </p>
    ),
  },
  {
    title: "Looking ahead",
    content: (
      <p className="text-neutral-content mt-2 text-xl">
        With a passion for technology and a strong foundation in software engineering, I am eager to explore new opportunities that will allow me to continue growing, learning, and contributing to impactful projects.
      </p>
    ),
  },
];

const TimelineDemo = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineDemo;
