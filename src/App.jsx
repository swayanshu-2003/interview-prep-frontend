import React, { useState } from "react";
import Login from "./components/ui/Login";
import Dashboard from "./Dashboard";
import ReportsPage from "./components/ui/ReportsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);

  return (
    <div className="min-h-screen">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <div className="p-6">
          <button
            onClick={() => setShowDashboard(!showDashboard)}
            className="px-4 py-2 mb-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {showDashboard ? "Go to Reports" : "Go to Dashboard"}
          </button>
          {showDashboard ? <Dashboard /> : <ReportsPage />}
        </div>
      )}
    </div>
  );
}

export default App;
