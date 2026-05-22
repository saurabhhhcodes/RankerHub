import React, { useState } from "react";
import LottiePlayer from "../components/ui/LottiePlayer";
import {
  MapPin,
  Calendar,
  Sparkles,
  Award,
  ShieldCheck,
  TrendingUp,
  Bookmark,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { Github, Twitter, Linkedin } from "../components/ui/Icons";
import successTick from "../assets/animations/succes_tick.json";
import trophyAnimation from "../assets/animations/trophy.json";
import { systemBadges } from "../constants";
import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";
import GradientButton from "../components/ui/GradientButton";

export const Profile = () => {
  const [copied, setCopied] = useState(false);

  const handleShareProfile = () => {
    // Copy fake link
    navigator.clipboard.writeText("https://rankerhub.dev/indresh45");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const profileStats = [
    { label: "XP Points", value: "8,120", detail: "Level 24 Dev" },
    { label: "Git Rank", value: "#4", detail: "Top 0.8% Globally" },
    { label: "Active Streak", value: "12 Days", detail: "Oliver happy" },
    { label: "Challenges", value: "48 Solved", detail: "Trees, BFS, Arrays" }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <SectionHeader
        title="Developer Profile"
        subtitle="Manage your public links, view achievements, and review earned badges."
        badge="Verified Account"
        badgeColor="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
      >
        <GradientButton onClick={handleShareProfile} className="py-2.5 px-4 text-xs">
          {copied ? "Link Copied!" : "Share Profile"}
        </GradientButton>
      </SectionHeader>

      {/* Hero Profile Details Card */}
      <Card className="p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 border-slate-200/50 dark:border-slate-800/50">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Profile Avatar Frame with Active Badge indicator */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <div className="w-full h-full rounded-2xl overflow-hidden ring-4 ring-violet-500/20 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300"
              alt="Indresh Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Active status bubble */}
          <span className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs text-white shadow-md animate-pulse">
            🔥
          </span>
        </div>

        {/* Bio information */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white my-0">
                Indresh
              </h2>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                PRO Member
              </span>
            </div>
            <span className="text-sm font-bold text-slate-400 dark:text-slate-500 block">
              @indresh404 • Senior Frontend Engineer
            </span>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl leading-relaxed font-medium">
            Creative frontend engineer crafting fluid user experiences and glassmorphism systems. Focused on React, TailwindCSS, and Framer Motion. Open-source maintainer and coffee enthusiast. ☕
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-bold text-slate-400">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-slate-400" /> New Delhi, India</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-slate-400" /> Joined May 2026</span>
          </div>

          {/* Social Links Mock */}
          <div className="flex justify-center md:justify-start items-center gap-3 pt-2">
            {[
              { icon: Github, path: "https://github.com/indresh404", color: "hover:bg-slate-100 dark:hover:bg-slate-800" },
              { icon: Twitter, path: "https://twitter.com", color: "hover:bg-blue-500/10 hover:text-blue-500" },
              { icon: Linkedin, path: "https://linkedin.com", color: "hover:bg-indigo-500/10 hover:text-indigo-600" }
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a
                  key={idx}
                  href={soc.path}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-500 transition-all ${soc.color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>

      </Card>

      {/* Grid: Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {profileStats.map((stat, idx) => (
          <Card key={idx} className="p-5 text-center flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {stat.label}
            </span>
            <span className="block text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-none">
              {stat.value}
            </span>
            <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 mt-1 block">
              {stat.detail}
            </span>
          </Card>
        ))}
      </div>

      {/* Grid: Badges (Trophy Case) & Lotties */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Badges Box (Takes 2 cols) */}
        <Card className="lg:col-span-2 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white my-0">
                Badge Achievements case
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Unlock specialized ratings badges by hitting milestones.
              </p>
            </div>
            <Award className="w-5 h-5 text-violet-500" />
          </div>

          {/* Badges List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {systemBadges.map((badge) => (
              <div
                key={badge.id}
                className="relative overflow-hidden p-4 rounded-xl border border-slate-200/40 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-950/20 flex items-center gap-3.5 group hover:border-violet-500/25 transition-all"
              >
                {/* Lottie overlay mock for completion */}
                <div className="absolute right-2 top-2 w-7 h-7 flex-shrink-0 opacity-80 group-hover:scale-110 transition-transform">
                  <LottiePlayer animationData={successTick} loop={false} className="w-full h-full" />
                </div>

                {/* Badge Visual Circle */}
                <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${badge.color} text-white flex items-center justify-center font-black text-sm shadow-md`}>
                  {badge.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-slate-200 leading-tight">
                    {badge.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">
                    {badge.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 font-bold text-center">
            Earned 4 out of 10 community badges.
          </div>
        </Card>

        {/* Global Trophy card */}
        <Card className="flex flex-col items-center justify-center p-8 text-center relative overflow-hidden bg-gradient-to-br from-violet-600/10 to-indigo-600/10 border-violet-500/15">
          <div className="w-40 h-40 flex items-center justify-center mb-4">
            <LottiePlayer animationData={trophyAnimation} loop={true} className="w-full h-full" />
          </div>
          
          <div className="space-y-1">
            <h3 className="font-extrabold text-slate-900 dark:text-white leading-tight my-0">
              Community Champion
            </h3>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 max-w-[200px] block">
              You are globally verified inside the top 1,000 developers.
            </span>
          </div>

          <div className="mt-6 flex items-center gap-1 text-[10px] font-black text-violet-600 dark:text-violet-400 bg-white/70 dark:bg-slate-900/60 border border-violet-500/20 px-3 py-1 rounded-xl shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            RankerHub Verified Member
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Profile;
