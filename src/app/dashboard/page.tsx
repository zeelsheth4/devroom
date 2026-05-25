"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import DashboardCard from "@/components/dashboard/DashboardCard";

export default function DashboardPage() {
  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <DashboardCard
            title="Projects"
            value="12"
          />

          <DashboardCard
            title="Teams"
            value="5"
          />

          <DashboardCard
            title="Tasks"
            value="28"
          />
        </div>
      </div>
    </div>
  );
}