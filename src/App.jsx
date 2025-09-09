import React, { useState } from "react";
import Dashboard from "./Dashboard";
import ReportsPage from "./components/ui/ReportsPage";

function App() {
  const [view, setView] = useState("dashboard");

  return (
    <div className="p-4">
      {/* Toggle Switch */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView("dashboard")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            view === "dashboard" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setView("reports")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            view === "reports" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Reports
        </button>
      </div>

      {/* Conditional Rendering */}
      {view === "dashboard" && <Dashboard />}
      {view === "reports" && <ReportsPage />}
    </div>
  );
}

export default App;
