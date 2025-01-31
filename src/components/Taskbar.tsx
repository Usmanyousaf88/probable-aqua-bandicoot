"use client";

import { useState, type FC } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Command } from "lucide-react";

interface TaskbarProps {
  openWindow: (id: string, title: string, content: string) => void;
}

export function Taskbar({ openWindow }: TaskbarProps) {
  const [isStartOpen, setIsStartOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 sm:h-14 items-center justify-between bg-gradient-to-t from-black/70 via-black/40 to-transparent px-2 sm:px-4 shadow-2xl backdrop-blur-lg border-t border-white/10 hover:from-black/80 transition-colors duration-300">
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsStartOpen(!isStartOpen)}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300"
        >
          <Command className="h-6 w-6 text-white" />
        </motion.button>
      </div>
      
      <div className="flex items-center gap-4 pr-2 text-sm text-white">
        <div>{format(new Date(), "h:mm a")}</div>
      </div>

      {isStartOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-16 sm:bottom-12 left-0 mb-2 w-[calc(100vw-1rem)] sm:w-80 rounded-lg border border-white/20 bg-black/40 p-4 backdrop-blur-md"
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium tracking-wide"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: "documents", label: "Documents", content: "Your documents will appear here." },
              { id: "pictures", label: "Pictures", content: "Your pictures will appear here." },
              { id: "music", label: "Music", content: "Your music will appear here." },
              { id: "computer", label: "Computer", content: "Computer management and files." },
              { id: "control-panel", label: "Control Panel", content: "System settings and controls." },
              { id: "help", label: "Help", content: "Windows Vista help and support." }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  openWindow(item.id, item.label, item.content);
                  setIsStartOpen(false);
                }}
                className="flex items-center gap-2 rounded-md p-2 text-left text-white transition-colors hover:bg-white/20 active:bg-white/30"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
