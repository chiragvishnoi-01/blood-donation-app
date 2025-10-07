import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

const Leaderboard = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("/leaderboard");
        setDonors(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        🏆 Top Donors Leaderboard
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {donors.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {donors.map((donor, index) => (
              <li
                key={donor._id}
                className="py-3 flex justify-between items-center"
              >
                <span>
                  <b className="text-red-600 mr-2">#{index + 1}</b>
                  {donor.name} — <span className="text-gray-500">{donor.city}</span>
                </span>
                <span className="font-semibold text-gray-700">
                  🩸 {donor.donationHistory.length} donations
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No data yet</p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
