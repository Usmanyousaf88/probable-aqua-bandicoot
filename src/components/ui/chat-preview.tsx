"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Message {
  avatar?: string;
  avatarBackground?: string;
  username: string;
  content: string;
  color?: string;
  duration: number;
  timestamp?: number;
}

interface Channel {
  name: string;
  description: string;
}

type Variations = "default" | "compact" | "expanded";

interface ChatPreviewProps {
  messages?: Message[];
  channel?: Channel;
  maxMessages?: number;
  className?: string;
  gradientBackground?: boolean;
  variation?: Variations;
  removeShadow?: boolean;
  theme?: {
    background?: string;
    border?: string;
    textColor?: string;
    avatarSize?: string;
  };
}

const defaultTheme = {
  background: "bg-background/50",
  border: "border border-foreground/10",
  textColor: "text-foreground/90",
  avatarSize: "w-7 h-7 sm:w-8 sm:h-8",
};

export function ChatPreview({
  messages = defaultMessages,
  channel = defaultChannel,
  maxMessages = 3,
  className,
  gradientBackground = true,
  variation = "default",
  removeShadow = false,
  theme = defaultTheme,
}: ChatPreviewProps) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const addMessage = () => {
      const newMessage = {
        ...messages[currentIndexRef.current],
        timestamp: Date.now(),
      };
      currentIndexRef.current = (currentIndexRef.current + 1) % messages.length;

      setVisibleMessages((prev) => [...prev, newMessage as Message].slice(-maxMessages));

      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(addMessage, newMessage.duration);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          currentIndexRef.current = 0;
          setVisibleMessages([]);
          addMessage();
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setVisibleMessages([]);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [messages, maxMessages]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex-1 w-full max-w-[500px]",
        variation === "compact" && "max-w-[350px]",
        variation === "expanded" && "max-w-[700px]",
        className
      )}
    >
      {gradientBackground && (
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-75" />
      )}

      <div
        className={cn(
          "relative rounded-2xl overflow-hidden backdrop-blur-xl flex flex-col",
          !removeShadow && "shadow-2xl",
          theme.border,
          theme.background
        )}
      >
        <div className="border-b px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[13px] sm:text-sm">
              #{channel.name}
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground truncate flex-1 text-[13px] sm:text-sm">
              {channel.description}
            </span>
          </div>
        </div>

        <div className="p-2.5 pt-0 sm:p-4 sm:pt-0 flex flex-col justify-end relative h-[calc(64px*3+16px)] sm:h-[calc(52px*3+24px)]">
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
          <div className="flex flex-col justify-end gap-2 sm:gap-3 overflow-hidden">
            {visibleMessages.map((message) => (
              <div
                key={message.timestamp}
                className={cn(
                  "flex items-start gap-2 sm:gap-3",
                  message === visibleMessages[visibleMessages.length - 1] &&
                    "animate-message-appear"
                )}
              >
                <div
                  className={cn(
                    "rounded-full flex-shrink-0 relative overflow-hidden",
                    theme.avatarSize,
                    !message.avatar &&
                      (message.avatarBackground ?? "bg-gray-500/30")
                  )}
                >
                  {message.avatar && (
                    <Image
                      src={message.avatar}
                      alt={`${message.username}'s avatar`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "font-medium text-[13px] sm:text-sm",
                        message.color ?? "text-foreground"
                      )}
                    >
                      {message.username}
                    </span>
                    <span className="text-muted-foreground shrink-0 text-[11px] sm:text-xs">
                      just now
                    </span>
                  </div>
                  <p className={cn(theme.textColor, "text-[13px] sm:text-sm")}>
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultChannel: Channel = {
  name: "sales-agent",
  description: "AI Sales Agent Lead Generation & Closing",
};

const defaultMessages: Message[] = [
  {
    avatarBackground: "bg-blue-500/30",
    username: "LeadGen AI",
    content: "Scanning social media for potential leads in the software industry...",
    color: "text-blue-400",
    duration: 3000,
  },
  {
    avatarBackground: "bg-emerald-500/30",
    username: "DataAnalyzer",
    content: "Found 3 companies showing interest in automation solutions",
    color: "text-emerald-400",
    duration: 2500,
  },
  {
    avatarBackground: "bg-purple-500/30",
    username: "Uxer Core",
    content: "Analyzing company profiles and decision makers...",
    color: "text-purple-400",
    duration: 2800,
  },
  {
    avatarBackground: "bg-amber-500/30",
    username: "ScraperAPI",
    content: "Gathering recent tech stack data and growth indicators",
    color: "text-amber-400",
    duration: 3000,
  },
  {
    avatarBackground: "bg-rose-500/30",
    username: "Deepgram Voice",
    content: "Initiating personalized outreach call to Tech Lead at Company A",
    color: "text-rose-400",
    duration: 2500,
  },
  {
    avatarBackground: "bg-sky-500/30",
    username: "Sales Assistant",
    content: "Scheduling demo presentation for next Tuesday at 2 PM",
    color: "text-sky-400",
    duration: 3200,
  },
  {
    avatarBackground: "bg-indigo-500/30",
    username: "Perplexity API",
    content: "Verifying company information and preparing custom proposal",
    color: "text-indigo-400",
    duration: 2800,
  },
  {
    avatarBackground: "bg-green-500/30",
    username: "Workflow Engine",
    content: "Deal closed! Initiating onboarding sequence for Company A",
    color: "text-green-400",
    duration: 3500,
  },
];
