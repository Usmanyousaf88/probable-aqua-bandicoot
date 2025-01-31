"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Network, Search, Database, MessageSquare, Workflow, Zap } from "lucide-react";

const technologies = [
  {
    name: "Uxer.ai Core",
    icon: Brain,
    description: "Central automation platform acting as the brain of the system",
    features: [
      "UI Automation via Computer Vision",
      "Cross-Platform Compatibility",
      "Workflow Orchestration",
      "Dynamic Decision Making",
      "Self-Healing Capabilities",
      "Human-Like Interaction"
    ],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    name: "Deepgram Voice",
    icon: MessageSquare,
    description: "Advanced speech processing and voice interaction system",
    features: [
      "Real-time Speech-to-Text",
      "Speaker Identification",
      "Multi-language Support",
      "Voice Command Processing",
      "Audio Transcription",
      "Emotion Detection"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "ScraperAPI",
    icon: Network,
    description: "Powerful web data extraction and processing",
    features: [
      "Automated Web Scraping",
      "CAPTCHA Handling",
      "Proxy Management",
      "Real-time Data Collection",
      "Structured Data Extraction",
      "Rate Limit Handling"
    ],
    gradient: "from-emerald-500 to-green-500"
  },
  {
    name: "Tavily Search",
    icon: Search,
    description: "AI-optimized search engine for intelligent data retrieval",
    features: [
      "LLM-Optimized Results",
      "Real-time Information",
      "Structured Data Output",
      "Context-Aware Search",
      "Multi-source Integration",
      "Relevance Ranking"
    ],
    gradient: "from-orange-500 to-amber-500"
  },
  {
    name: "Perplexity API",
    icon: Database,
    description: "Real-time data verification and extended analysis",
    features: [
      "Fact Verification",
      "Source Attribution",
      "Context Analysis",
      "Real-time Updates",
      "Data Synthesis",
      "Accuracy Scoring"
    ],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "Workflow Engine",
    icon: Workflow,
    description: "Advanced task orchestration and process automation",
    features: [
      "Task Scheduling",
      "Error Handling",
      "Process Monitoring",
      "Resource Management",
      "Event Triggering",
      "State Management"
    ],
    gradient: "from-indigo-500 to-blue-500"
  }
];

const examples = [
  {
    title: "Legal Contract Analysis",
    description: "Automated contract review and compliance checking",
    workflow: [
      "Extract contract text using Uxer OCR",
      "Gather legal precedents via ScraperAPI",
      "Verify compliance with Perplexity",
      "Search benchmarks using Tavily",
      "Process negotiation calls with Deepgram"
    ]
  },
  {
    title: "Inventory Management",
    description: "Smart retail inventory tracking and optimization",
    workflow: [
      "Monitor stock levels with Uxer",
      "Track competitor prices via ScraperAPI",
      "Analyze trends using Perplexity",
      "Find suppliers through Tavily",
      "Automate reordering with Workflow Engine"
    ]
  },
  {
    title: "Financial Advisory",
    description: "AI-powered personal finance management",
    workflow: [
      "Extract financial data using Uxer",
      "Process client meetings via Deepgram",
      "Verify market data with Perplexity",
      "Research products using Tavily",
      "Execute trades through Workflow Engine"
    ]
  }
];

export function ControlPanel() {
  return (
    <div className="h-full w-full overflow-auto bg-black/40 p-8">
      <div className="space-y-12">
        {/* Technologies Section */}
        <section>
          <h2 className="mb-8 text-3xl font-bold bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text text-transparent">
            Core Technologies
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${tech.gradient} opacity-20 blur-3xl`} />
                
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg bg-gradient-to-br ${tech.gradient} p-2`}>
                      <tech.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                  </div>
                  
                  <p className="text-white/70">{tech.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {tech.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="text-sm text-white/50">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-8 text-3xl font-bold bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Real-World Examples
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {examples.map((example, idx) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-3xl" />
                
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-white">{example.title}</h3>
                  <p className="text-white/70">{example.description}</p>
                  
                  <div className="space-y-2">
                    {example.workflow.map((step, stepIdx) => (
                      <motion.div
                        key={stepIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 + stepIdx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="text-sm text-white/50">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 24/7 Operation Banner */}
        <section className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 p-8 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative flex items-center justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">24/7 Autonomous Operation</h2>
              <p className="max-w-2xl text-lg text-white/70">
                Our AI agents operate continuously, leveraging multiple technologies to handle complex tasks without human intervention. With self-healing capabilities and adaptive learning, they maintain reliable performance around the clock.
              </p>
            </div>
            <div className="rounded-full bg-white/10 p-4">
              <Zap className="h-12 w-12 text-yellow-400" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
