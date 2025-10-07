import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition">
          Blood Donation
        </Link>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-gray-200 transition">Home</Link></li>
          <li><Link to="/sos" className="hover:text-gray-200 transition">SOS</Link></li>
          <li><Link to="/dashboard" className="hover:text-gray-200 transition">Dashboard</Link></li>
          <li><Link to="/leaderboard" className="hover:text-gray-200 transition">Leaderboard</Link></li>
          <li><Link to="/campaigns" className="hover:text-gray-200 transition">Campaigns</Link></li>
        </ul>
        {/* Mobile menu toggle placeholder (optional for professional UI later) */}
      </div>
    </nav>
  );
};

export default Navbar;
