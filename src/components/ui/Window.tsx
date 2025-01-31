"use client";

import { useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Rnd } from "react-rnd";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Square, X, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { windowVariants, glassEffect, borderEffect, shadowEffect } from "./WindowEffects";
import { useWindowTransition } from "./WindowTransition";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  defaultPos?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  onClose?: () => void;
  className?: string;
}

export function Window({ 
  title,
  children,
  defaultPos = { x: 100, y: 100 },
  defaultSize = { width: 800, height: 600 },
  onClose,
  className,
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Rnd
      default={{
        x: defaultPos.x,
        y: defaultPos.y,
        width: defaultSize.width,
        height: defaultSize.height,
      }}
      minWidth={280}
      minHeight={200}
      className="max-w-[95vw] max-h-[95vh] sm:max-w-none sm:max-h-none"
      bounds="window"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: isMaximized ? "fixed" : "absolute",
        top: isMaximized ? 0 : undefined,
        left: isMaximized ? 0 : undefined,
        right: isMaximized ? 0 : undefined,
        bottom: isMaximized ? 0 : undefined,
        width: isMaximized ? "100%" : undefined,
        height: isMaximized ? "100%" : undefined,
      }}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
    >
      <motion.div
        {...useWindowTransition()}
        className={cn(
          "flex h-full w-full flex-col overflow-hidden rounded-lg",
          glassEffect,
          borderEffect,
          shadowEffect,
          "transition-all duration-300 ease-out",
          isMaximized 
            ? "scale-100" 
            : "hover:ring-2 hover:ring-blue-500/30 hover:shadow-xl hover:scale-[1.002] hover:-translate-y-0.5",
          "motion-safe:animate-window-appear",
          className
        )}
      >
        <div className="flex h-9 items-center justify-between border-b border-white/20 bg-gradient-to-b from-white/20 to-white/10 px-3">
          <div className="text-base font-bold tracking-wide bg-gradient-to-r from-violet-200 via-sky-100 to-violet-200 bg-clip-text text-transparent drop-shadow-lg">{title}</div>
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onClose?.()}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300"
            >
              <Minus className="h-4 w-4 text-white/80" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMaximized(!isMaximized)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300"
            >
              {isMaximized ? (
                <Minimize2 className="h-4 w-4 text-white/80" />
              ) : (
                <Maximize2 className="h-4 w-4 text-white/80" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: '#ef4444' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onClose?.()}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-red-500/80 to-rose-600/80 hover:from-red-500 hover:to-rose-600 transition-all duration-300"
            >
              <X className="h-4 w-4 text-white" />
            </motion.button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </motion.div>
    </Rnd>
  );
}
