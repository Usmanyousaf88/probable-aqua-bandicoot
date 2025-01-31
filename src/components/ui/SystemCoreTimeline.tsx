"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Eye, Zap, Binary, RefreshCw, Search, Globe, MessageSquare, Database } from "lucide-react";
import { ChatPreview } from "./chat-preview";
import { cn } from "@/lib/utils";
import { FeaturesSectionWithCardGradient } from "./feature-section-with-card-gradient";
import { BentoGrid } from "./bento-grid";

const coreCapabilities = [
  {
    title: "UI Automation",
    meta: "Uxer.ai",
    description: "Mimic human interactions across any interface using computer vision and screen recognition",
    icon: <Eye className="w-4 h-4 text-blue-500" />,
    status: "Active",
    tags: ["Computer Vision", "Automation"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "AI Search",
    meta: "Tavily API",
    description: "Optimized, AI-driven web searches for relevant information gathering and RAG",
    icon: <Search className="w-4 h-4 text-emerald-500" />,
    status: "Live",
    tags: ["Search", "RAG"],
  },
  {
    title: "Data Verification",
    meta: "Perplexity API",
    description: "Real-time fact checking and data verification from trusted sources",
    icon: <Database className="w-4 h-4 text-purple-500" />,
    tags: ["Verification", "Analysis"],
    colSpan: 2,
  },
  {
    title: "Voice Processing",
    meta: "Deepgram API",
    description: "Advanced speech-to-text and voice interaction capabilities",
    icon: <MessageSquare className="w-4 h-4 text-sky-500" />,
    status: "Active",
    tags: ["Voice", "NLP"],
  },
  {
    title: "Web Scraping",
    meta: "ScraperAPI",
    description: "Extract and monitor data from any website at scale",
    icon: <Globe className="w-4 h-4 text-rose-500" />,
    status: "Live",
    tags: ["Data", "Monitoring"],
  },
];

const timelineData = [
  {
    icon: Brain,
    title: "Intelligent Content Generation",
    description: "AskUxer's AI brain can dynamically generate content based on context and needs.",
    details: [
      "Creates personalized responses and reports in real-time",
      "Generates dynamic checklists for any industry",
      "Adapts content based on user context",
      "Maintains consistent brand voice and style"
    ],
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Eye,
    title: "Advanced Screen Intelligence",
    description: "Extract valuable data from any screen using advanced computer vision.",
    details: [
      "Analyzes screen content without API access",
      "Extracts data from legacy applications",
      "Real-time screen monitoring",
      "Intelligent pattern recognition"
    ],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Real-time Decision Engine",
    description: "Make intelligent decisions based on live data and changing conditions.",
    details: [
      "Analyzes real-time inventory levels",
      "Triggers automated restocking",
      "Processes refund requests",
      "Adapts to market conditions"
    ],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Binary,
    title: "Natural Language Processing",
    description: "Understand and process human language for intuitive interactions.",
    details: [
      "Processes natural language commands",
      "Understands context and intent",
      "Supports multiple languages",
      "Learns from interactions"
    ],
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: RefreshCw,
    title: "Seamless Integration",
    description: "Connect and automate across your entire workflow ecosystem.",
    details: [
      "Integrates with existing workflows",
      "Triggers automated actions",
      "Updates databases in real-time",
      "Maintains data consistency"
    ],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Cpu,
    title: "Adaptive Learning System",
    description: "Continuously improve through learning from past interactions.",
    details: [
      "Stores decision outcomes",
      "Learns from past scenarios",
      "Improves accuracy over time",
      "Updates knowledge base"
    ],
    gradient: "from-cyan-500 to-blue-500"
  }
];

export function SystemCoreTimeline() {
  return (
    <div className="relative w-full space-y-8">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      
      <div className="relative p-10">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text text-transparent">
          AskUxer Intelligence System
        </h2>
        <p className="mt-2 text-lg text-white/60">
          Explore the powerful features that make AskUxer the ultimate AI assistant for dynamic decision-making
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-8 max-w-5xl mx-auto">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-xl border border-white/10 p-6 backdrop-blur-sm
              ${index % 6 === 0 ? "bg-gradient-to-r from-blue-950/30 to-indigo-950/40" :
                index % 6 === 1 ? "bg-gradient-to-r from-violet-950/30 to-purple-950/40" :
                index % 6 === 2 ? "bg-gradient-to-r from-emerald-950/30 to-teal-950/40" :
                index % 6 === 3 ? "bg-gradient-to-r from-amber-950/30 to-orange-950/40" :
                index % 6 === 4 ? "bg-gradient-to-r from-pink-950/30 to-rose-950/40" :
                "bg-gradient-to-r from-cyan-950/30 to-sky-950/40"
              }`}
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-3xl"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${item.gradient})`
              }}
            />
            
            <div className="relative flex gap-6">
              <div className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br",
                item.gradient
              )}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/70">
                  {item.description}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {item.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-white/50"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add the new feature section */}
      {/* Core Capabilities Section */}
      <div className="relative mt-12 mb-20">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-8">
          Core Agent Capabilities
        </h2>
        <BentoGrid items={coreCapabilities} />
      </div>

      {/* Features Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-transparent" />
        <FeaturesSectionWithCardGradient />
      </div>
    </div>
  );
}
