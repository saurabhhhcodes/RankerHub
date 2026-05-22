import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowLeft,
  TrendingUp,
  Code2,
  Sparkles,
  BookOpen,
  GitBranch,
  Info,
  Shield,
  Layers,
  Heart
} from "lucide-react";
import { Github, Linkedin, Instagram } from "../components/ui/Icons";
import Card from "../components/ui/Card";

export const About = () => {
  const coreModules = [
    {
      title: "GitRank",
      desc: "Live Git analytics dashboard tracking pull requests, commits, and peer code reviews dynamically.",
      icon: GitBranch,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "CodingVerse",
      desc: "Competitive algorithmic sandbox containing daily code challenges, test suites, and XP tracking.",
      icon: Code2,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "CodingOwl",
      desc: "Consistency study buddy tracking focus sessions, Pomodoro timers, and streak preservation.",
      icon: BookOpen,
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "RankHer",
      desc: "Specialized initiative dashboard highlighting and celebrating achievements of women in technology.",
      icon: Sparkles,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    }
  ];

  const owners = [
    {
      name: "Indresh Suresh",
      role: "Project Owner & Lead Architect",
      bio: "Full-stack developer focused on creating performant, interactive web systems and developer environments. Passionate about software craftsmanship, clean UI animations, and automated ranking models.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", // High quality profile image
      links: {
        github: "https://github.com/indresh404",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        email: "mailto:indresh@rankerhub.dev"
      }
    },
    {
      name: "Divya Sharma",
      role: "Project Owner & UX Director",
      bio: "Product designer and manager specialising in community growth, layout optimization, and accessibility. Dedicated to building engaging developer ecosystems and scaling inclusive open-source project initiatives.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200", // High quality profile image
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        email: "mailto:divya@rankerhub.dev"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100 relative overflow-hidden flex flex-col font-sans">
      
      {/* Background Animated Blobs (optimized with radial gradients instead of expensive blur filters) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blob-purple-strong pointer-events-none animate-blob transform-gpu" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blob-blue-strong pointer-events-none animate-blob [animation-delay:3s] transform-gpu" />
      <div className="absolute top-[35%] left-[25%] w-[40vw] h-[40vw] bg-blob-indigo-strong pointer-events-none animate-pulse-slow transform-gpu" />

      {/* Standalone Header */}
      <header className="w-full h-16 border-b border-slate-800/40 bg-slate-950/40 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-tr from-violet-600 via-indigo-600 to-blue-600 flex items-center justify-center shadow-md">
            <TrendingUp className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400 tracking-tight">
            RankerHub
          </span>
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-800 hover:bg-slate-800/50 text-slate-300 hover:text-white transition duration-200 text-xs font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12 md:py-16 space-y-16 relative z-10">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
            About the Project
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 my-0">
            Developer Gamification
          </h1>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed font-semibold">
            RankerHub is a premium performance-driven dashboard and algorithmic arena built to track coding frequency, analyze Git activity, build consistency streaks, and verify developer progress.
          </p>
        </div>

        {/* Project Description & Modules */}
        <section className="space-y-8">
          <Card className="p-6 bg-slate-950/30 border-slate-800/50 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-violet-400" /> Platform Overview
            </h2>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed font-semibold">
              <p>
                Created as a modern gamified utility, RankerHub connects developers directly to automated commit metrics, algorithm sandboxes, and social verification badges. The dashboard integrates seamlessly with public development timelines to compile a global XP rating.
              </p>
              <p>
                Our system prioritizes data isolation, focusing only on public contribution logs, lines of code changed, and study companion focus timelines. Whether checking daily quests or verifying achievements, RankerHub is engineered to empower software developers on their learning journey.
              </p>
            </div>
          </Card>

          {/* Core Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-800/40 bg-slate-900/10 hover:bg-slate-900/20 transition-all duration-300 flex items-start gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${mod.color} flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white my-0">{mod.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed my-0 font-medium">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Project Owners Block */}
        <section className="space-y-8">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-black text-white my-0">Meet the Project Owners</h2>
            <p className="text-xs text-slate-400 font-semibold">
              The creative visionaries and architects driving the RankerHub engineering ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {owners.map((owner, idx) => (
              <Card
                key={idx}
                className="p-8 bg-slate-950/40 border-slate-800/40 backdrop-blur-2xl hover:border-violet-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Owner Header Info */}
                  <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-slate-800/40 flex-shrink-0">
                      <img src={owner.avatar} alt={owner.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-extrabold text-white my-0 leading-tight">
                        {owner.name}
                      </h3>
                      <span className="text-xs font-bold text-violet-400 block">
                        {owner.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-400 leading-relaxed font-semibold my-0 text-center sm:text-left">
                    {owner.bio}
                  </p>
                </div>

                {/* Connection Links */}
                <div className="mt-8 pt-6 border-t border-slate-800/40 flex justify-center sm:justify-start gap-3">
                  <a
                    href={owner.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition duration-200 cursor-pointer"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={owner.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition duration-200 cursor-pointer"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={owner.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition duration-200 cursor-pointer"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={owner.links.email}
                    className="p-2 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition duration-200 cursor-pointer"
                    title="Email Contact"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

      </main>

      {/* Simple Mini Footer */}
      <footer className="w-full py-8 border-t border-slate-800/40 text-center text-[10px] text-slate-500 font-bold bg-slate-950/20 relative z-10">
        <p className="my-0 flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Indresh Suresh & Divya Sharma © 2026 RankerHub.
        </p>
      </footer>

    </div>
  );
};

export default About;
