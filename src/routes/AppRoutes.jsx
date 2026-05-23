import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import GitRank from "../pages/GitRank";
import RankHer from "../pages/RankHer";
import CodingVerse from "../pages/CodingVerse";
import CodingOwl from "../pages/CodingOwl";
import Profile from "../pages/Profile";
import Friends from "../pages/Friends";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Achievements from "../pages/Achievements";
import About from "../pages/About";
import ComingSoonCard from "../components/ui/ComingSoonCard";
import GlobalModals from "../components/ui/GlobalModals";
import { Settings as SettingsIcon } from "lucide-react";

// An inline settings page to keep route integrated
const SettingsPage = () => (
  <div className="space-y-6">
    <ComingSoonCard
      title="User & Engine Settings - Coming Soon"
      description="Configure email alerts, change username handles, edit privacy options, and manage GitHub OAuth connection permissions."
      icon={SettingsIcon}
      features={[
        "Account authentication key scopes",
        "Staging profile visibility toggles",
        "Leaderboard notification email alerts",
        "Mascot Oliver focus target customization"
      ]}
      estimatedArrival="Q3 2026"
      showHourglass={true}
    />
  </div>
);

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public Site Layout & Pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gitrank" element={<GitRank />} />
          <Route path="/rankher" element={<RankHer />} />
          <Route path="/codingverse" element={<CodingVerse />} />
          <Route path="/codingowl" element={<CodingOwl />} />
        </Route>

        {/* Standalone About Us page */}
        <Route path="/about" element={<About />} />

        {/* Public Login page (standalone) */}
        <Route path="/login" element={<Login />} />
        
        {/* Layout dashboard sub-pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/gitrank" element={<GitRank />} />
          <Route path="/dashboard/rankher" element={<RankHer />} />
          <Route path="/dashboard/achievements" element={<Achievements />} />
          <Route path="/dashboard/codingverse" element={<CodingVerse />} />
          <Route path="/dashboard/codingowl" element={<CodingOwl />} />
          <Route path="/dashboard/friends" element={<Friends />} />
          <Route path="/dashboard/friends/followers" element={<Friends />} />
          <Route path="/dashboard/friends/following" element={<Friends />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/profile/:username" element={<Profile />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />

        </Route>

        {/* 404 Catch All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalModals />
    </>
  );
};

export default AppRoutes;
