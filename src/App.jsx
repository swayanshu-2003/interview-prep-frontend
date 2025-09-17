import React, { useState } from "react";
import Landing from "./components/Landing";
import Login from "./components/ui/Login";
import Dashboard from "./Dashboard";
import ReportsPage from "./components/ui/ReportsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen">
      {!isLoggedIn ? (
        <Landing onLogin={() => setIsLoggedIn("login")} />
      ) : isLoggedIn === "login" ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
