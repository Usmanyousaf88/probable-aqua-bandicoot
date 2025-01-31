"use client";

"use client";

import { useState, useCallback } from "react";
import { NotificationContainer, type Notification } from "@/components/ui/notification";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SplineScene } from "@/components/ui/Spline";
import { MorphingText } from "@/components/ui/morphing-text";
import { Window } from "@/components/ui/Window";
import { Taskbar } from "@/components/Taskbar";
import { DesktopIcon } from "@/components/DesktopIcon";
import { ExplanationCards } from "@/components/ui/ExplanationCards";
import { FolderHeart, Settings2, Music2, ImagePlus, MailPlus, Chrome, Calendar, Calculator } from "lucide-react";

export default function HomePage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [windows, setWindows] = useState<Array<{
    id: string;
    title: string;
    content: string;
    isOpen: boolean;
    position: { x: number; y: number };
  }>>([]);

  const closeWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isOpen: false } : w
    ));
  };

  const addNotification = useCallback((notification: Omit<Notification, "id">) => {
    const id = Math.random().toString(36).substring(7);
    setNotifications((prev) => [...prev, { ...notification, id }]);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  }, []);

  // Add notification when window opens
  const openWindow = (id: string, title: string, content: string) => {
    const existingWindow = windows.find(w => w.id === id);
    if (existingWindow) {
      setWindows(windows.map(w =>
        w.id === id ? { ...w, isOpen: true } : w
      ));
    } else {
      setWindows([...windows, {
        id,
        title,
        content,
        isOpen: true,
        position: { x: Math.random() * 100 + 150, y: Math.random() * 100 + 50 },
      }]);
      addNotification({
        title: "Window Opened",
        message: `${title} window has been opened`,
        type: "info"
      });
    }
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <NotificationContainer 
        notifications={notifications}
        onClose={removeNotification}
      />
      <BackgroundBeamsWithCollision className="absolute inset-0 -z-10 h-screen">
        <div className="absolute inset-0 z-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-x-0 bottom-20 flex items-center justify-center z-10">
          <MorphingText
            texts={[
              "DeepAgents ✨",
              "AI Innovation 🚀", 
              "Future of Tech 🌟",
              "100M Ideas 💡",
              "Endless Possibilities ∞"
            ]}
            className="text-white"
          />
        </div>
      </BackgroundBeamsWithCollision>
      
      <div className="absolute left-2 sm:left-6 top-6 grid grid-cols-1 gap-4">
        <DesktopIcon 
          icon={FolderHeart} 
          label="Documents" 
          onClick={() => openWindow("documents", "Documents", "Your documents will appear here.")} 
        />
        <DesktopIcon 
          icon={ImagePlus} 
          label="Pictures" 
          onClick={() => openWindow("pictures", "Pictures", "Your pictures will appear here.")} 
        />
        <DesktopIcon 
          icon={Music2} 
          label="Music" 
          onClick={() => openWindow("music", "Music", "Your music will appear here.")} 
        />
        <DesktopIcon 
          icon={Settings2} 
          label="Settings" 
          onClick={() => openWindow("settings", "Settings", "System settings and configuration options.")} 
        />
      </div>

      <div className="absolute right-2 sm:right-6 top-6 grid grid-cols-1 gap-4">
        <DesktopIcon 
          icon={MailPlus} 
          label="Mail" 
          onClick={() => openWindow("mail", "Mail", "Your email client will appear here.")} 
        />
        <DesktopIcon 
          icon={Chrome} 
          label="Browser" 
          onClick={() => openWindow("browser", "Web Browser", "Your web browser will appear here.")} 
        />
        <DesktopIcon 
          icon={Calendar} 
          label="Calendar" 
          onClick={() => openWindow("calendar", "Calendar", "Your calendar and events will appear here.")} 
        />
        <DesktopIcon 
          icon={Calculator} 
          label="Calculator" 
          onClick={() => openWindow("calculator", "Calculator", "Basic calculator application.")} 
        />
      </div>
      
      {windows.map((window) => 
        window.isOpen && (
          <Window
            key={window.id}
            title={window.title}
            defaultPos={window.position}
            onClose={() => closeWindow(window.id)}
          >
            {window.id === "documents" ? (
              <ExplanationCards />
            ) : (
              <div className="text-lg font-medium tracking-wide text-blue-100 drop-shadow-md">
                {window.content}
              </div>
            )}
          </Window>
        )
      )}

      <div className="mb-[50px]">
        <Taskbar openWindow={openWindow} />
      </div>
    </main>
  );
}
