import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import SOS from "./pages/SOS.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LeaderboardPage from "./pages/LeaderboardPage.jsx";
import Campaigns from "./pages/Campaigns.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/campaigns" element={<Campaigns />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
