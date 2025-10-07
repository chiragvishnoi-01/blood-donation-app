import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import Leaderboard from "../components/Leaderboard.jsx";

const LeaderboardPage = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("/leaderboard");
        setDonors(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Donors</h1>
      <Leaderboard donors={donors} />
    </div>
  );
};

export default LeaderboardPage;
