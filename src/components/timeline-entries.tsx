"use client";
import React from "react";
import { Timeline } from "./ui/timeline";

const data = [
  {
    title: "Early Career in Retail",
    content: (
      <p className="text-neutral-content mt-2 text-xl">
        My first couple jobs were all in retail. At Walmart and Best Buy, I learned the value of hard work, customer service, and resilience. Those days were the foundation of my work ethic and people skills that I carry with me today.
      </p>
    ),
  },
  {
    title: "Beginning College",
    content: (
      <p className="text-neutral-content mt-2 text-xl">
        Starting my Bachelor of Science in Computer Science at Queens College is where I dove into complex topics like operating systems, data structures, and object-oriented programming. This is what furthered my motivation to study Computer Science and made me realize I love the problem solving aspect of it. 
      </p>
    ),
  },
  {
    title: "Apple Internships",
    content: (
      <p className="text-neutral-content mt-2 text-xl">
        During my time at Apple, I had the chance to make a significant impact through both my Software Engineering and Integrity Engineering internships along with retail. I developed and refined automated testing frameworks, enhancing the quality and reliability of Apple’s products. My work contributed to the successful launch of the Apple Vision Pro and new features in iCloud. 
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
    <div className="min-h-screen bg-transparent z-20">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineDemo;
