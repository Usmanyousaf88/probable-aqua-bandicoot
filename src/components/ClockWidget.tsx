"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Clock, Calendar, CloudSun } from "lucide-react";

export function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="absolute right-6 top-6 w-64 overflow-hidden rounded-xl border border-white/20 bg-black/30 p-4 backdrop-blur-md hover:bg-black/40 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-black/20"
    >
      <div className="flex items-center justify-between">
        <Clock className="h-5 w-5 text-white/80" />
        <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-indigo-100 via-white to-indigo-100 bg-clip-text text-transparent">
          {format(time, "HH:mm:ss")}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-white/60" />
          <span className="text-sm text-white/80">
            {format(time, "EEEE, MMMM d")}
          </span>
        </div>
        <CloudSun className="h-4 w-4 text-white/60" />
      </div>
    </motion.div>
  );
}
