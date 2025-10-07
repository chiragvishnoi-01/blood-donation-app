import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import { motion } from "framer-motion";

const Leaderboard = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("/leaderboard");
        setDonors(res.data);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
      }
    };
    fetchLeaderboard();
  }, []);

  const getMedal = (index) => {
    const medals = ["🥇", "🥈", "🥉"];
    return medals[index] || "❤️";
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        🏆 Top Donors Leaderboard
      </h1>

      {donors.length > 0 ? (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto">
          <ul className="divide-y divide-gray-200">
            {donors.map((donor, index) => (
              <motion.li
                key={donor._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="py-4 px-6 flex justify-between items-center hover:bg-red-50 transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getMedal(index)}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {donor.name}
                    </h3>
                    <p className="text-sm text-gray-500">{donor.city}</p>
                  </div>
                </div>

                <span className="font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full text-sm">
                  🩸 {donor.donationHistory.length} Donations
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">
          No donors ranked yet. Be the first hero to donate! 💪
        </p>
      )}
    </div>
  );
};

export default Leaderboard;
