import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import DonorCard from "../components/DonorCard";

const Dashboard = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await axios.get("/donors");
        setDonors(res.data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDonors();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
        Donor Dashboard
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading donors...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donors.length > 0 ? (
            donors.map((donor) => <DonorCard key={donor._id} donor={donor} />)
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No donors available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
