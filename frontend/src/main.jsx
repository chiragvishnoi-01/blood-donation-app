import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import SOS from "./pages/SOS.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LeaderboardPage from "./pages/LeaderboardPage.jsx";
import Campaigns from "./pages/Campaigns.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
     <main className="flex-grow animate-fadeIn">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sos" element={<SOS />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/leaderboard" element={<LeaderboardPage />} />
    <Route path="/campaigns" element={<Campaigns />} />
  </Routes>
</main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
