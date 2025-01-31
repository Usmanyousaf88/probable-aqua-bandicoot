"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { OrderTracking } from "@/components/ui/order-tracking";
import { ChatPreview } from "@/components/ui/chat-preview";
import { AuroraButton } from "@/components/ui/aurora-button";
import { SystemCoreTimeline } from "@/components/ui/SystemCoreTimeline";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

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
      case "Vision Core":
        return [
          {
            title: "UXeR: The Automation Maestro",
            content: (
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Universal UI Automation Engine</h3>
                  <p className="text-sm italic mb-4">Advanced automation platform enabling AI agents to interact with any digital interface at massive scale.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-cyan-300 mb-2">Core Capabilities</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Universal UI interaction</li>
                      <li>Computer vision integration</li>
                      <li>DOM analysis & adaptation</li>
                      <li>24/7 automated operation</li>
                      <li>Cross-platform workflows</li>
                      <li>Massive parallel scaling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyan-300 mb-2">AI Integration</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Perplexity decision engine</li>
                      <li>Tavily search integration</li>
                      <li>ScraperAPI data gathering</li>
                      <li>Deepgram voice commands</li>
                      <li>Adaptive learning system</li>
                      <li>Ethical compliance tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Real-World Applications",
            content: (
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Industry Transformations</h3>
                  <p className="text-sm italic mb-4">How UXeR is revolutionizing key industries through intelligent automation.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-cyan-300 mb-2">Healthcare</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Health Guardian AI triage</li>
                      <li>Emergency response automation</li>
                      <li>Patient data processing</li>
                      <li>Drug discovery assistance</li>
                      <li>Preventive care systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyan-300 mb-2">Enterprise</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Permit Wizard automation</li>
                      <li>Silent Refunds system</li>
                      <li>Payroll optimization</li>
                      <li>Compliance monitoring</li>
                      <li>Fraud prevention</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Advanced Features",
            content: (
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Technical Excellence</h3>
                  <p className="text-sm italic mb-4">Advanced capabilities that make UXeR a revolutionary automation platform.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-cyan-300 mb-2">Adaptive Systems</h4>
                    <div className="space-y-4">
                      <ul className="list-disc pl-4 space-y-2 text-sm">
                        <li>Dynamic UI handling</li>
                        <li>Bot detection avoidance</li>
                        <li>Self-healing workflows</li>
                        <li>No-code interfaces</li>
                        <li>Future-proof adaptation</li>
                      </ul>
                      
                      <div className="mt-6 p-4 rounded-lg bg-black/30 border border-white/10">
                        <h5 className="text-sm font-medium text-cyan-200 mb-4">Real-time Task Progress</h5>
                        <OrderTracking
                          className="scale-90 origin-top-left"
                          steps={[
                            {
                              name: "Task Received",
                              timestamp: "Just now",
                              isCompleted: true,
                            },
                            {
                              name: "Analyzing Requirements",
                              timestamp: "In progress",
                              isCompleted: true,
                            },
                            {
                              name: "Executing Actions",
                              timestamp: "Starting...",
                              isCompleted: false,
                            },
                            {
                              name: "Verifying Results",
                              timestamp: "Pending",
                              isCompleted: false,
                            },
                            {
                              name: "Task Completed",
                              timestamp: "Pending",
                              isCompleted: false,
                            },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyan-300 mb-2">Security & Compliance</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>HIPAA compliance</li>
                      <li>GDPR safeguards</li>
                      <li>Ethical AI controls</li>
                      <li>Audit logging</li>
                      <li>Access management</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          }
        ];
      case "Audio Matrix":
        return [
          {
            title: "24/7 Sales Call Agent",
            content: (
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-200 mb-2">Intelligent Sales Automation</h3>
                  <p className="text-sm italic mb-4">
                    Meet our tireless sales champion that never sleeps, working around the clock to grow your business. 
                    Watch live as our AI agent identifies and closes leads using multiple technologies.
                  </p>
                </div>
                
                <div className="flex justify-center w-full">
                  <ChatPreview 
                    variation="expanded"
                    gradientBackground={true}
                    theme={{
                      background: "bg-black/40",
                      border: "border border-emerald-500/20",
                      textColor: "text-emerald-100/90",
                      avatarSize: "w-8 h-8"
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="font-medium text-emerald-300 mb-2">Core Capabilities</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Customer Reactivation Campaigns</li>
                      <li>High Volume Outbound Prospecting</li>
                      <li>Lead Qualification & Pre-screening</li>
                      <li>Market Research & Surveys</li>
                      <li>Real-time Performance Analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-emerald-300 mb-2">Integration Features</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Vision Core Face Analysis</li>
                      <li>Neural Hub Decision Making</li>
                      <li>Knowledge Base Integration</li>
                      <li>Call Analytics & Recording</li>
                      <li>Sales Coach Insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Audio Matrix",
            content: (
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-200 mb-2">AI-Powered Communication Hub</h3>
                  <p className="text-sm italic mb-4">Comprehensive suite of intelligent communication tools.</p>
                </div>
                <StickyScroll
                  content={[
                    {
                      title: "Sales Call Agent",
                      description: "Automated outbound calling for lead generation and customer reactivation",
                      content: (
                        <div className="p-4">
                          <ul className="list-disc pl-4 space-y-2 text-sm text-white/80">
                            <li>Customer Reactivation Campaigns</li>
                            <li>High Volume Outbound Prospecting</li>
                            <li>Lead Qualification & Pre-screening</li>
                            <li>Market Research & Surveys</li>
                          </ul>
                        </div>
                      ),
                    },
                    {
                      title: "Support Call Agent",
                      description: "24/7 customer support and technical assistance",
                      content: (
                        <div className="p-4">
                          <ul className="list-disc pl-4 space-y-2 text-sm text-white/80">
                            <li>24/7 & Overflow Support</li>
                            <li>Appointment Scheduling</li>
                            <li>Technical Troubleshooting</li>
                            <li>Personalised Reports</li>
                          </ul>
                        </div>
                      ),
                    },
                    {
                      title: "Messaging Agent",
                      description: "Multi-channel messaging support and engagement",
                      content: (
                        <div className="p-4">
                          <ul className="list-disc pl-4 space-y-2 text-sm text-white/80">
                            <li>SMS and WhatsApp Support</li>
                            <li>Reactivations & Upselling</li>
                            <li>Proactive Order Updates</li>
                            <li>Feedback Collection</li>
                          </ul>
                        </div>
                      ),
                    },
                    {
                      title: "Call Analyst Agent",
                      description: "Advanced call analytics and insights generation",
                      content: (
                        <div className="p-4">
                          <ul className="list-disc pl-4 space-y-2 text-sm text-white/80">
                            <li>Sales Opportunity Spotting</li>
                            <li>Compliance Monitoring</li>
                            <li>Customer Insights Reporting</li>
                            <li>Sentiment Analysis</li>
                          </ul>
                        </div>
                      ),
                    },
                    {
                      title: "Knowledge Base",
                      description: "Comprehensive self-service and support resources",
                      content: (
                        <div className="p-4">
                          <ul className="list-disc pl-4 space-y-2 text-sm text-white/80">
                            <li>24/7 Customer Self-Service</li>
                            <li>Internal Employee Support</li>
                            <li>Troubleshooting Guides</li>
                            <li>Policy Retrieval</li>
                          </ul>
                        </div>
                      ),
                    },
                    {
                      title: "Sales Coach Agent",
                      description: "Real-time coaching and performance optimization",
                      content: (
                        <div className="p-4">
                          <ul className="list-disc pl-4 space-y-2 text-sm text-white/80">
                            <li>Real-Time Call Coaching</li>
                            <li>Call Insights & Summaries</li>
                            <li>Sales Rep Onboarding</li>
                            <li>Behavior Analysis</li>
                          </ul>
                        </div>
                      ),
                    },
                  ]}
                  contentClassName="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10"
                />
              </div>
            ),
          },
          {
            title: "Enterprise Solutions",
            content: (
              <div className="text-white/80 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-200 mb-2">Business Applications</h3>
                  <p className="text-sm italic mb-4">Audio AI solutions for enterprise needs.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-emerald-300 mb-2">Communication</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Voice assistants</li>
                      <li>Call analytics</li>
                      <li>Meeting transcription</li>
                      <li>Language translation</li>
                      <li>Voice biometrics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-emerald-300 mb-2">Entertainment</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Game audio</li>
                      <li>Content moderation</li>
                      <li>Streaming analytics</li>
                      <li>Recommendation systems</li>
                      <li>Audience engagement</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          }
        ];
      default:
        return [
          {
            title: "AI OCR Agent Capabilities",
            content: <SystemCoreTimeline />,
          },
          {
            title: "AI Agent Architecture",
            content: (
              <div className="text-white/80 space-y-6">
                <p className="text-lg font-medium text-blue-200">
                  Exploring how technologies work together to create remarkable AI agents - an orchestra of intelligence where each component plays a critical role.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Input & Processing</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Voice, text & visual input processing</li>
                      <li>Advanced computer vision integration</li>
                      <li>Natural Language Processing (NLP)</li>
                      <li>Task extraction & interpretation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Data Management</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Real-time data verification</li>
                      <li>AI-powered search capabilities</li>
                      <li>ScraperAPI deep data extraction</li>
                      <li>Perplexity API validation</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Decision Systems</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Conditional logic processing</li>
                      <li>Adaptive learning mechanisms</li>
                      <li>OpenAI & Gemini integration</li>
                      <li>Dynamic workflow execution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Learning & Security</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Performance monitoring (AskUxer)</li>
                      <li>Auto-retry mechanisms</li>
                      <li>Encrypted data handling</li>
                      <li>Privacy regulation compliance</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <h4 className="font-medium text-blue-300 mb-2">Key Capabilities</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white/5 p-3">
                      <h5 className="text-sm font-medium text-blue-200">Autonomous</h5>
                      <p className="text-xs text-white/60">24/7 operation with minimal human intervention</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3">
                      <h5 className="text-sm font-medium text-blue-200">Intelligent</h5>
                      <p className="text-xs text-white/60">Real-time data analysis and continuous learning</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3">
                      <h5 className="text-sm font-medium text-blue-200">Adaptable</h5>
                      <p className="text-xs text-white/60">Cross-platform functionality and flexibility</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3">
                      <h5 className="text-sm font-medium text-blue-200">Efficient</h5>
                      <p className="text-xs text-white/60">Streamlined processes with improved accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Advanced Integration Systems",
            content: (
              <div className="text-white/80 space-y-6">
                <p className="text-lg font-medium text-blue-200">
                  Deep dive into the sophisticated integration systems that power our AI agents.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">API Orchestration</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Seamless multi-API coordination</li>
                      <li>Real-time data synchronization</li>
                      <li>Automated error handling</li>
                      <li>Load balancing & optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Data Pipeline</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Streaming data processing</li>
                      <li>Real-time analytics</li>
                      <li>Automated data cleaning</li>
                      <li>Schema validation</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Cognitive Processing Units",
            content: (
              <div className="text-white/80 space-y-6">
                <p className="text-lg font-medium text-blue-200">
                  Understanding the brain-like processing units that give our AI agents their intelligence.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Neural Networks</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Deep learning architectures</li>
                      <li>Pattern recognition</li>
                      <li>Adaptive learning</li>
                      <li>Memory optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Decision Making</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Probabilistic reasoning</li>
                      <li>Multi-agent coordination</li>
                      <li>Ethical constraints</li>
                      <li>Uncertainty handling</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Human-AI Collaboration",
            content: (
              <div className="text-white/80 space-y-6">
                <p className="text-lg font-medium text-blue-200">
                  Exploring the seamless integration between human intelligence and AI capabilities.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Interface Design</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Natural language interaction</li>
                      <li>Gesture recognition</li>
                      <li>Emotional intelligence</li>
                      <li>Context awareness</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Collaboration Tools</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Real-time feedback</li>
                      <li>Shared workspaces</li>
                      <li>Progress tracking</li>
                      <li>Knowledge sharing</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Future Innovations",
            content: (
              <div className="text-white/80 space-y-6">
                <p className="text-lg font-medium text-blue-200">
                  Looking ahead at the next generation of AI agent capabilities and innovations.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Emerging Technologies</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Quantum computing integration</li>
                      <li>Biological neural interfaces</li>
                      <li>Self-evolving algorithms</li>
                      <li>Consciousness simulation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-300 mb-2">Research Areas</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Artificial general intelligence</li>
                      <li>Ethical AI frameworks</li>
                      <li>Cognitive architecture</li>
                      <li>Sustainable computing</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          }
        ];
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ 
          scale: 1.05,
          rotateZ: [0, -2, 2, 0],
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowTimeline(true)}
        className="group relative flex w-16 sm:w-20 md:w-24 cursor-pointer flex-col items-center gap-1 sm:gap-2 rounded-lg p-1.5 sm:p-2 text-center hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
      >
        <motion.div 
          className="relative flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.2 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-emerald-500/30 blur-xl" />
          
          {/* Icon background with unique gradient based on label */}
          <div className={`flex h-full w-full items-center justify-center rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 
            ${label === "Neural Hub" ? "bg-gradient-to-br from-violet-500/90 to-fuchsia-500/90 group-hover:from-violet-400/90 group-hover:to-fuchsia-400/90" :
              label === "Vision Core" ? "bg-gradient-to-br from-cyan-500/90 to-blue-500/90 group-hover:from-cyan-400/90 group-hover:to-blue-400/90" :
              label === "Audio Matrix" ? "bg-gradient-to-br from-emerald-500/90 to-teal-500/90 group-hover:from-emerald-400/90 group-hover:to-teal-400/90" :
              "bg-gradient-to-br from-amber-500/90 to-orange-500/90 group-hover:from-amber-400/90 group-hover:to-orange-400/90"
            }`}
          >
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white drop-shadow-lg" />
          </div>
        </motion.div>

        {/* Label with shimmer effect */}
        <div className="relative">
          <motion.span 
            className={`text-xs sm:text-sm font-bold tracking-wide text-transparent drop-shadow-lg bg-clip-text
              ${label === "Neural Hub" ? "bg-gradient-to-r from-violet-100 via-white to-violet-100" :
                label === "Vision Core" ? "bg-gradient-to-r from-cyan-100 via-white to-cyan-100" :
                label === "Audio Matrix" ? "bg-gradient-to-r from-emerald-100 via-white to-emerald-100" :
                "bg-gradient-to-r from-amber-100 via-white to-amber-100"
              }`}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 100%"
            }}
          >
            {label}
          </motion.span>
        </div>
      </motion.div>
      
      {showTimeline && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-4 sm:inset-10 z-50 overflow-hidden"
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
