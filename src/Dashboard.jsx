import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReportsDashboard from "./components/ui/ReportsDashboard";
import { Home, FileText, Users, ClipboardCheck, BookOpen, Map, BarChart2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import lady from "./assets/images/lady.jpg";
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const data = [
    { week: "Week 1", value: 70 },
    { week: "Week 2", value: 60 },
    { week: "Week 3", value: 80 },
    { week: "Week 4", value: 75 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold mb-6">PrepAI</h1>
        <nav className="space-y-2">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" active={activeTab === "Dashboard"} onClick={() => setActiveTab("Dashboard")} />
          <SidebarItem icon={<Users size={18} />} label="Interviews" active={activeTab === "Interviews"} onClick={() => setActiveTab("Interviews")} />
          <SidebarItem icon={<FileText size={18} />} label="GD" active={activeTab === "GD"} onClick={() => setActiveTab("GD")} />
          <SidebarItem icon={<ClipboardCheck size={18} />} label="Tests" active={activeTab === "Tests"} onClick={() => setActiveTab("Tests")} />
          <SidebarItem icon={<BookOpen size={18} />} label="Study Material" active={activeTab === "Study Material"} onClick={() => setActiveTab("Study Material")} />
          <SidebarItem icon={<Map size={18} />} label="Roadmap" active={activeTab === "Roadmap"} onClick={() => setActiveTab("Roadmap")} />
          <SidebarItem icon={<BarChart2 size={18} />} label="Reports" active={activeTab === "Reports"} onClick={() => setActiveTab("Reports")} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === "Reports" ? (
          <ReportsDashboard />
        ) : (
          <>
        <h2 className="text-2xl font-semibold mb-4">Welcome back, Alex</h2>

        {/* Mock Interview Section */}
        <Card className="mb-6 flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-400 text-white">
          <CardContent className="flex justify-between items-center w-full">
            <div>
              <h3 className="text-lg font-semibold">Start Your Next Mock Interview</h3>
              <p className="text-sm opacity-80 mb-3">Practice makes perfect. Let’s get started!</p>
              <Button className="bg-green-500 hover:bg-green-600">Start Interview</Button>
            </div>
            <img
              src={lady}
              alt="Lady"
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          </CardContent>
        </Card>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardContent>
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <ActivityItem title="HR Mock Interview" status="Completed" time="2 days ago" />
              <ActivityItem title="Data Structures Test" status="Completed" time="3 days ago" />
              <ActivityItem title="System Design Study" status="In Progress" time="4 days ago" />
            </CardContent>
          </Card>

          {/* Performance Snapshot */}
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold mb-4">Performance Snapshot</h3>
              <p className="text-3xl font-bold">85%</p>
              <p className="text-sm text-green-500">+5% vs last month</p>
              <div className="h-32 mt-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <XAxis dataKey="week" />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <QuickAction label="Take a Test" />
          <QuickAction label="View Roadmap" />
          <QuickAction label="My Reports" onClick={() => setActiveTab("Reports")} />
          <QuickAction label="Ask a Doubt" />
        </div>
          </>
        )}
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
        active ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function ActivityItem({ title, status, time }) {
  return (
    <div className="flex justify-between items-center py-2 border-b last:border-none">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{status}</p>
      </div>
      <p className="text-sm text-gray-400">{time}</p>
    </div>
  );
}

function QuickAction({ label, onClick }) {
  return (
    <Card onClick={onClick} className="cursor-pointer hover:shadow-md transition">
      <CardContent className="flex justify-center items-center h-20 text-center font-medium">
        {label}
      </CardContent>
    </Card>
  );
}
