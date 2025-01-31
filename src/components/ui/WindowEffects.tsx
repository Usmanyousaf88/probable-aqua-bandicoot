"use client";

import { motion } from "framer-motion";

export const windowVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    filter: "blur(10px)",
    rotateX: "3deg"
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    filter: "blur(0px)",
    rotateX: "0deg",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    filter: "blur(10px)",
    rotateX: "3deg",
    transition: {
      duration: 0.2,
    }
  },
};

export const glassEffect = "bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-lg";
export const borderEffect = "border border-white/20 ring-1 ring-white/10";
export const shadowEffect = "shadow-lg shadow-black/20";
