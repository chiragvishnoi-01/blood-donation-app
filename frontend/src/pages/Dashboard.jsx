import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import DonorCard from "../components/DonorCard.jsx";

const Dashboard = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await axios.get("/donors");
        setDonors(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDonors();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Donor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donors.map(donor => <DonorCard key={donor._id} donor={donor} />)}
      </div>
    </div>
  );
};

export default Dashboard;
