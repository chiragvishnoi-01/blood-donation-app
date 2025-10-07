import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl hover:text-gray-200">
          🩸 BloodLink
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link></li>
          <li><Link to="/campaigns" className="hover:text-gray-200">Campaigns</Link></li>
          <li><Link to="/leaderboard" className="hover:text-gray-200">Leaderboard</Link></li>
          <li><Link to="/sos" className="hover:text-gray-200">SOS</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
