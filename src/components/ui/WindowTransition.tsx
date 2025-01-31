"use client";

import { motion } from "framer-motion";

export const windowTransitionVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeIn",
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
