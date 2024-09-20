"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10 pb-10 relative z-[40]"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 pt-20 md:px-8 lg:px-10">
        <h2 className="text-6xl lg:text-7xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent pb-5 font-serif">
          My Journey
        </h2>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accent via-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ item }: { item: TimelineEntry }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: itemScrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "start 30%"],
  });

  const colorTransform = useTransform(
    itemScrollYProgress,
    [0.5, 1],
    ["#f0f0f0", "#63e"]
  );

  return (
    <div
      className="flex justify-start pt-10 md:pt-40 md:gap-10"
      ref={itemRef}
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black dark:bg-black flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-neutral-800 dark:bg-neutral-800 border border-neutral-700 dark:border-neutral-700 p-2" />
        </div>
        <motion.h3
          className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold"
          style={{ color: colorTransform }}
        >
          {item.title}
        </motion.h3>
      </div>
      <div className="relative pl-20 pr-4 md:pl-4 w-full text-2xl">
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#63e] font-serif">
          {item.title}
        </h3>
        {item.content}
      </div>
    </div>
  );
};