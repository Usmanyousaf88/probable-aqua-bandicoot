"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
}

interface NotificationProps {
  notification: Notification;
  onClose: (id: string) => void;
}

const notificationVariants = {
  initial: { 
    x: 50,
    y: 0,
    opacity: 0,
    scale: 0.9,
  },
  animate: { 
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  exit: { 
    x: 50,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    }
  }
};

const NotificationItem = ({ notification, onClose }: NotificationProps) => {
  const [progress, setProgress] = useState(100);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          onClose(notification.id);
          return 0;
        }
        return prev - 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [notification.id, onClose]);

  const getTypeStyles = () => {
    switch (notification.type) {
      case "success":
        return "from-green-500/20 to-emerald-500/20 border-green-500/30";
      case "error":
        return "from-red-500/20 to-pink-500/20 border-red-500/30";
      case "warning":
        return "from-yellow-500/20 to-orange-500/20 border-yellow-500/30";
      default:
        return "from-blue-500/20 to-indigo-500/20 border-blue-500/30";
    }
  };

  return (
    <motion.div
      layout
      variants={notificationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`relative w-96 overflow-hidden rounded-lg border bg-gradient-to-r backdrop-blur-xl ${getTypeStyles()}`}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium text-white">{notification.title}</h3>
            <p className="mt-1 text-sm text-white/80">{notification.message}</p>
          </div>
          <button
            onClick={() => onClose(notification.id)}
            className="rounded-full p-1 hover:bg-white/10"
          >
            <X className="h-4 w-4 text-white/80" />
          </button>
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-0 h-1 bg-white/20"
        style={{ 
          width: `${progress}%`,
          transition: "width 30ms linear"
        }} 
      />
    </motion.div>
  );
};

export function NotificationContainer({ notifications, onClose }: { 
  notifications: Notification[];
  onClose: (id: string) => void;
}) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence mode="popLayout">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onClose={onClose}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
