import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primaryRed text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">Blood Donation</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/sos" className="hover:text-gray-200">SOS</Link></li>
          <li><Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link></li>
          <li><Link to="/leaderboard" className="hover:text-gray-200">Leaderboard</Link></li>
          <li><Link to="/campaigns" className="hover:text-gray-200">Campaigns</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
