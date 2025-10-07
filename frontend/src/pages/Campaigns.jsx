import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import CampaignCard from "../components/CampaignCard.jsx";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await axios.get("/banks");
        const allCampaigns = res.data.flatMap(bank => bank.campaigns.map(c => ({ ...c, bankName: bank.name })));
        setCampaigns(allCampaigns);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Blood Donation Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((c, idx) => <CampaignCard key={idx} campaign={c} />)}
      </div>
    </div>
  );
};

export default Campaigns;
