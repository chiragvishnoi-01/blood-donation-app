import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import DonorCard from "../components/DonorCard";

const Dashboard = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await axios.get("/donors"); // Fetch donors from backend
        setDonors(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load donors.");
        setLoading(false);
      }
    };
    fetchDonors();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-xl animate-pulse">Loading donors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
        Donor Dashboard
      </h1>
      {donors.length === 0 ? (
        <p className="text-center text-gray-500">No donors available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {donors.map((donor) => (
            <DonorCard key={donor._id} donor={donor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
