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
import { Brain, Cpu, Waves, Sparkles, Eye, Network, Shield, RefreshCw, Heart, DollarSign, Scale, Workflow } from "lucide-react";
import { BentoGrid } from "@/components/ui/code";
import { ControlPanel } from "@/components/ui/ControlPanel";

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
    <main className="fixed inset-0 overflow-hidden">
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
          icon={Brain} 
          label="Neural Hub" 
          onClick={() => openWindow("documents", "Neural Hub", "AI-powered document analysis and processing center.")} 
        />
        <DesktopIcon 
          icon={Sparkles} 
          label="Vision Core" 
          onClick={() => openWindow("pictures", "Vision Core", "Advanced AI image processing and generation.")} 
        />
        <DesktopIcon 
          icon={Waves} 
          label="Audio Matrix" 
          onClick={() => openWindow("music", "Audio Matrix", "AI-powered audio processing and synthesis.")} 
        />
        <DesktopIcon 
          icon={Cpu} 
          label="System Core" 
          onClick={() => openWindow("settings", "System Core", "AI system configuration and neural network settings.")} 
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
            ) : window.id === "control-panel" ? (
              <ControlPanel />
            ) : window.id === "pictures" ? (
              <BentoGrid items={[
                {
                  title: "Dynamic UI Adaptation",
                  meta: "Self-Healing",
                  description: "Computer vision and DOM analysis for real-time UI changes and adaptations",
                  icon: <Eye className="w-4 h-4 text-cyan-500" />,
                  status: "Active",
                  tags: ["Computer Vision", "DOM", "AI"],
                  colSpan: 2,
                  hasPersistentHover: true,
                },
                {
                  title: "Enterprise Scaling",
                  meta: "10k+ Tasks",
                  description: "Parallel execution and load balancing for massive workflow automation",
                  icon: <Network className="w-4 h-4 text-emerald-500" />,
                  status: "Live",
                  tags: ["Scaling", "Cloud"],
                },
                {
                  title: "API Integration",
                  meta: "Multi-API",
                  description: "Seamless orchestration with Perplexity, Tavily, and Deepgram APIs",
                  icon: <Workflow className="w-4 h-4 text-purple-500" />,
                  tags: ["APIs", "Integration"],
                  colSpan: 2,
                },
                {
                  title: "Security & Compliance",
                  meta: "HIPAA, GDPR",
                  description: "Role-based access control and comprehensive audit logging",
                  icon: <Shield className="w-4 h-4 text-sky-500" />,
                  status: "Secure",
                  tags: ["Security", "Compliance"],
                },
                {
                  title: "Error Recovery",
                  meta: "Auto-Retry",
                  description: "Intelligent error handling with automated retry and fallback paths",
                  icon: <RefreshCw className="w-4 h-4 text-rose-500" />,
                  status: "Active",
                  tags: ["Recovery", "Resilience"],
                },
                {
                  title: "Healthcare Agents",
                  meta: "AI-Powered",
                  description: "Specialized agents for triage, drug discovery, and patient care",
                  icon: <Heart className="w-4 h-4 text-red-500" />,
                  tags: ["Healthcare", "AI"],
                  colSpan: 2,
                },
                {
                  title: "Financial Bots",
                  meta: "Real-time",
                  description: "Automated fraud detection and tax optimization systems",
                  icon: <DollarSign className="w-4 h-4 text-green-500" />,
                  status: "Active",
                  tags: ["Finance", "Automation"],
                },
                {
                  title: "Legal Assistants",
                  meta: "AI-Driven",
                  description: "Contract analysis and automated court filing systems",
                  icon: <Scale className="w-4 h-4 text-amber-500" />,
                  status: "Beta",
                  tags: ["Legal", "AI"],
                },
                {
                  title: "Future Innovation",
                  meta: "Next-Gen",
                  description: "Quantum computing integration and emotional AI development",
                  icon: <Sparkles className="w-4 h-4 text-indigo-500" />,
                  tags: ["Innovation", "Future"],
                  colSpan: 2,
                }
              ]} />
            ) : (
              <div className="text-lg font-medium tracking-wide text-blue-100 drop-shadow-md">
                {window.content}
              </div>
            )}
          </Window>
        )
      )}

      <Taskbar openWindow={openWindow} />
    </main>
  );
}
