"use client";

import { motion } from "framer-motion";
import { BookOpen, Shield, GraduationCap, Heart } from "lucide-react";

const explanations = [
  {
    title: "AI Storyteller",
    icon: BookOpen,
    description: "Imagine having an AI friend that tells you amazing stories! These stories change based on how you feel and what's happening in the world. It's like having a super-smart storyteller who knows exactly what kind of story you'd love to hear.",
    details: [
      "Creates unique stories just for you",
      "Changes the story based on your mood",
      "Adds real-world events to make stories relevant",
      "Characters can talk with realistic voices",
      "Stories can take different paths based on your choices",
      "Creates rich, detailed story worlds"
    ]
  },
  {
    title: "World Problem Solver",
    icon: Shield,
    description: "Think of this as a high-tech crystal ball that helps us prepare for and handle big world problems. Whether it's dealing with health emergencies or natural disasters, it helps people make smart decisions quickly.",
    details: [
      "Watches world events in real-time",
      "Creates practice scenarios to help prepare",
      "Suggests smart solutions to problems",
      "Works in many different languages",
      "Understands how people feel about situations",
      "Makes detailed reports everyone can understand"
    ]
  },
  {
    title: "Smart Learning Buddy",
    icon: GraduationCap,
    description: "This is like having a personal teacher who knows exactly how you learn best! It adjusts everything to match your style and speed, making learning fun and easy.",
    details: [
      "Creates personal learning journeys",
      "Makes lessons fun and interactive",
      "Helps you learn with voice guidance",
      "Shows how well you're doing",
      "Finds the best learning materials",
      "Keeps parents and teachers in the loop"
    ]
  },
  {
    title: "Health Helper",
    icon: Heart,
    description: "Think of this as your personal health coach who knows everything about keeping you healthy and happy. It's like having a doctor, fitness trainer, and wellness guru all in one!",
    details: [
      "Understands your health deeply",
      "Creates personal wellness plans",
      "Gives friendly health advice",
      "Uses real medical research",
      "Suggests products that help you",
      "Works with your healthcare team"
    ]
  }
];

export function ExplanationCards() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 max-h-[calc(100vh-200px)] overflow-y-auto">
      {explanations.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative overflow-hidden rounded-xl border border-white/20 bg-black/30 p-8 backdrop-blur-lg hover:bg-black/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
          
          <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 p-2">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-50 via-white to-indigo-50 bg-clip-text text-transparent tracking-tight">{item.title}</h3>
            </div>
            
            <p className="mb-6 text-white/80">{item.description}</p>
            
            <div className="space-y-2">
              {item.details.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span className="text-sm text-white/70">{detail}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
