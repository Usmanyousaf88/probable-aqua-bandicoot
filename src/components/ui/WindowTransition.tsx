"use client";

import { motion } from "framer-motion";

export const windowTransitionVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
    transition: {
      duration: 0.2,
    },
  },
};

export const useWindowTransition = () => {
  return {
    variants: windowTransitionVariants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
  };
};
