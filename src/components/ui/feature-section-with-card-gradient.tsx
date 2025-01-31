"use client";

import React from "react";
import { useId } from "react";
import { 
  Brain, 
  Bot, 
  Cpu, 
  Network, 
  Workflow, 
  Zap,
  Search,
  Database
} from "lucide-react";

export function FeaturesSectionWithCardGradient() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto px-4">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className={`relative p-6 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group
              ${feature.title === "Uxer.ai Core" ? "bg-gradient-to-r from-violet-950/40 to-fuchsia-950/60" :
                feature.title === "AskUxer AI" ? "bg-gradient-to-r from-blue-950/40 to-cyan-950/60" :
                feature.title === "Deepgram Voice" ? "bg-gradient-to-r from-emerald-950/40 to-teal-950/60" :
                feature.title === "ScraperAPI Data" ? "bg-gradient-to-r from-orange-950/40 to-amber-950/60" :
                feature.title === "Tavily Search" ? "bg-gradient-to-r from-pink-950/40 to-rose-950/60" :
                feature.title === "Perplexity Verify" ? "bg-gradient-to-r from-indigo-950/40 to-purple-950/60" :
                feature.title === "Workflow Engine" ? "bg-gradient-to-r from-sky-950/40 to-blue-950/60" :
                "bg-gradient-to-r from-yellow-950/40 to-amber-950/60"
              }`}
          >
            <Grid size={20} />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm">
                <feature.icon className="h-5 w-5 text-blue-300" />
              </div>
              <p className="text-lg font-bold bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent relative z-20">
                {feature.title}
              </p>
            </div>
            <p className="text-white/70 text-sm relative z-20 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Uxer.ai Core",
    icon: Brain,
    description:
      "Central automation platform acting as the brain, controlling agent actions through computer vision and workflow orchestration across all platforms.",
  },
  {
    title: "AskUxer AI",
    icon: Bot,
    description:
      "Built-in AI assistant for dynamic decision-making, content generation, and information extraction based on real-time data analysis.",
  },
  {
    title: "Deepgram Voice",
    icon: Cpu,
    description:
      "Handles all voice interactions with advanced speech-to-text and speaker identification for natural communication.",
  },
  {
    title: "ScraperAPI Data",
    icon: Network,
    description:
      "Powerful web scraping capabilities for real-time data extraction from any website without handling proxies or CAPTCHAs.",
  },
  {
    title: "Tavily Search",
    icon: Search,
    description:
      "AI-optimized search engine providing structured, LLM-optimized data for quick and accurate decision-making.",
  },
  {
    title: "Perplexity Verify",
    icon: Database,
    description:
      "Real-time data verification and extended context analysis ensuring accurate and up-to-date information.",
  },
  {
    title: "Workflow Engine",
    icon: Workflow,
    description:
      "Advanced workflow orchestration combining UI automation, API calls, and cloud AI tasks for seamless execution.",
  },
  {
    title: "24/7 Operation",
    icon: Zap,
    description:
      "Continuous autonomous execution with self-healing capabilities and adaptive learning for improved reliability.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-white/10 stroke-white/20 mix-blend-overlay opacity-50"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
