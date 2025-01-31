"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { AuroraButton } from "@/components/ui/aurora-button";

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export function DesktopIcon({ icon: Icon, label, onClick }: DesktopIconProps) {
  const [showTimeline, setShowTimeline] = useState(false);

  const getTimelineData = (label: string) => {
    switch (label) {
      case "Documents":
        return [
          {
            title: "Sentient Storytelling Engine",
            content: (
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-200 mb-2">Interactive AI Narrative</h3>
                  <p className="text-sm italic mb-4">A dynamic, branching narrative platform where stories evolve based on emotions, social sentiment, and global events.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">API Stack</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Gemini - Story generation & assets</li>
                      <li>Deepgram - Voice synthesis & emotion</li>
                      <li>ScraperAPI - Social trends & news</li>
                      <li>OpenAI - World building & lore</li>
                      <li>Uxer - Platform management</li>
                      <li>Perplexity - Fact checking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Features</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Emotional story adaptation</li>
                      <li>Real-world event integration</li>
                      <li>Dynamic content generation</li>
                      <li>Voice character synthesis</li>
                      <li>Branching narratives</li>
                      <li>Deep world building</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Crisis Simulation Platform",
            content: (
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-200 mb-2">Global Crisis Response</h3>
                  <p className="text-sm italic mb-4">Advanced platform for simulating and responding to global crises, from pandemics to climate disasters.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">API Integration</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Perplexity - Real-time monitoring</li>
                      <li>Gemini - Data visualization</li>
                      <li>OpenAI - Strategy generation</li>
                      <li>Deepgram - Cross-lingual comms</li>
                      <li>Uxer - Simulation automation</li>
                      <li>ScraperAPI - Public sentiment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Core Features</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Real-time crisis monitoring</li>
                      <li>Interactive simulations</li>
                      <li>Policy recommendations</li>
                      <li>Multi-language support</li>
                      <li>Sentiment analysis</li>
                      <li>Detailed reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Education OS",
            content: (
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-200 mb-2">Personalized Learning</h3>
                  <p className="text-sm italic mb-4">Complete educational operating system adapting to each student's unique learning style and pace.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">API Stack</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>OpenAI - Curriculum creation</li>
                      <li>Gemini - Visual learning</li>
                      <li>Deepgram - Voice tutoring</li>
                      <li>Perplexity - Content curation</li>
                      <li>Uxer - Progress tracking</li>
                      <li>ScraperAPI - Education trends</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Key Features</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Adaptive learning paths</li>
                      <li>Interactive content</li>
                      <li>Voice-based tutoring</li>
                      <li>Progress analytics</li>
                      <li>Resource curation</li>
                      <li>Parent/Teacher tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Digital Health Twin",
            content: (
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-200 mb-2">Personal Wellness AI</h3>
                  <p className="text-sm italic mb-4">Comprehensive digital twin for health optimization and longevity, powered by advanced AI.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">API Integration</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Gemini - Health analysis</li>
                      <li>OpenAI - Wellness planning</li>
                      <li>Deepgram - Health coaching</li>
                      <li>Perplexity - Medical research</li>
                      <li>ScraperAPI - Health trends</li>
                      <li>Uxer - Data integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Core Features</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Health data analysis</li>
                      <li>Personalized wellness</li>
                      <li>Voice coaching</li>
                      <li>Evidence-based advice</li>
                      <li>Product recommendations</li>
                      <li>Healthcare integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          }
        ];
      case "Pictures":
        return [
          {
            title: "Image Processing",
            content: (
              <div className="text-white/80 space-y-4">
                <p>AI Image Enhancement</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Automatic image enhancement</li>
                  <li>Smart object recognition</li>
                  <li>Face detection and grouping</li>
                  <li>Scene categorization</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Gallery Features",
            content: (
              <div className="text-white/80 space-y-4">
                <p>Smart Gallery Management</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>AI-powered album creation</li>
                  <li>Automated photo organization</li>
                  <li>Smart image search</li>
                  <li>Memory collections</li>
                </ul>
              </div>
            ),
          }
        ];
      case "Music":
        return [
          {
            title: "Audio Analysis",
            content: (
              <div className="text-white/80 space-y-4">
                <p>Smart Music Processing</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Genre classification</li>
                  <li>Mood detection</li>
                  <li>Beat analysis</li>
                  <li>Artist recognition</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Playlist Creation",
            content: (
              <div className="text-white/80 space-y-4">
                <p>AI-Powered Music Organization</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Smart playlist generation</li>
                  <li>Mood-based recommendations</li>
                  <li>Activity-based suggestions</li>
                  <li>Music discovery</li>
                </ul>
              </div>
            ),
          }
        ];
      default:
        return [
          {
            title: "Market Analysis",
            content: (
              <div className="text-white/80 space-y-4">
                <p>Autonomous Corporate Intelligence Platform</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Real-time competitor tracking with Tavily/Perplexity</li>
                  <li>Multimodal earnings call analysis via Gemini</li>
                  <li>Social sentiment scraping with ScraperAPI</li>
                  <li>Investor call transcription using Deepgram</li>
                </ul>
              </div>
            ),
          }
        ];
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowTimeline(true)}
        className="group relative flex w-20 sm:w-24 cursor-pointer flex-col items-center gap-2 rounded-lg p-2 text-center hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
      >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/80 to-blue-600/80 shadow-lg backdrop-blur-sm group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 group-hover:from-blue-400/80 group-hover:to-blue-500/80">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <span className="text-sm font-bold tracking-wide text-transparent drop-shadow-lg bg-gradient-to-r from-indigo-200 via-sky-100 to-indigo-200 bg-clip-text hover:from-indigo-100 hover:via-sky-50 hover:to-indigo-100 transition-all duration-300">
        {label}
      </span>
      </motion.div>
      
      {showTimeline && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-10 z-50"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="absolute inset-4 overflow-auto">
            <div className="absolute right-4 top-4 z-50">
              <AuroraButton
                onClick={() => setShowTimeline(false)}
                glowClassName="from-red-500 via-pink-500 to-purple-500"
                className="px-6 py-2"
              >
                Close
              </AuroraButton>
            </div>
            <Timeline data={getTimelineData(label)} />
          </div>
        </motion.div>
      )}
    </>
  );
}
