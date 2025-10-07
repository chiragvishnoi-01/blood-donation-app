import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import DonorCard from "../components/DonorCard";

const LeaderboardPage = () => {
  const [topDonors, setTopDonors] = useState([]);

  useEffect(() => {
    const fetchTopDonors = async () => {
      try {
        const res = await axios.get("/leaderboard");
        setTopDonors(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTopDonors();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
        Top Donors Leaderboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topDonors.map(donor => (
          <DonorCard key={donor._id} donor={donor} showRank={true} />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;
