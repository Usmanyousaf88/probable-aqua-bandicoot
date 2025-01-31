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

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black/80 backdrop-blur-md font-sans px-4 sm:px-6 md:px-10 rounded-lg border border-white/20"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl bg-gradient-to-r from-indigo-200 via-sky-100 to-indigo-200 bg-clip-text text-transparent">
          DeepAgents Journey
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-sm">
          The evolution of AI-powered idea generation
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 sm:pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-16 sm:top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 sm:h-10 absolute left-2 sm:left-3 md:left-3 w-8 sm:w-10 rounded-full bg-black/50 flex items-center justify-center border border-white/20">
                <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-full bg-blue-500/50 border border-blue-300/50" />
              </div>
              <h3 className="hidden md:block text-lg sm:text-xl md:pl-20 md:text-3xl font-bold text-blue-200/70">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 sm:pl-20 pr-2 sm:pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-lg sm:text-2xl mb-3 sm:mb-4 text-left font-bold text-blue-200/70">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/20 to-transparent to-[99%]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-blue-300 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
