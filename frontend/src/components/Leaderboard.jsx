import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

const Leaderboard = () => {
  const [topDonors, setTopDonors] = useState([]);

  useEffect(() => {
    const fetchTopDonors = async () => {
      try {
        const response = await axios.get("/leaderboard");
        setTopDonors(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTopDonors();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Top Donors</h2>
      <ul className="space-y-4">
        {topDonors.map((donor, index) => (
          <li key={donor._id} className="bg-white shadow rounded p-4 flex justify-between items-center hover:shadow-2xl transition duration-300">
            <span>{index + 1}. {donor.name} ({donor.bloodGroup})</span>
            <span className="font-bold">{donor.donationHistory.length} Donations</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
