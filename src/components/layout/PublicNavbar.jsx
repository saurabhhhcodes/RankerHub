import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import { Github } from "../ui/Icons";
import ThemeToggle from "../ui/ThemeToggle";

export const PublicNavbar = () => {
  const location = useLocation();

  const handleScrollToSection = (elementId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 h-16 border-b border-slate-200/40 dark:border-slate-800/40 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5">
          <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-tr from-violet-600 via-indigo-600 to-blue-600 flex items-center justify-center shadow-md">
            <TrendingUp className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500 tracking-tight">
            RankerHub
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/#features"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                handleScrollToSection("features");
              }
            }}
            className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            Features
          </Link>
          <Link
            to="?modal=how-it-works"
            className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            How it Works
          </Link>
          <Link
            to="/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            About Us
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/indresh404/RankerHub.git"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition cursor-pointer"
            title="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>

          <ThemeToggle />

          <Link
            to="/login"
            className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/60"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
