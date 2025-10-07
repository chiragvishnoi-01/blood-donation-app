import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import CampaignCard from "../components/CampaignCard";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        // We fetch banks then flatten campaigns (backend stores campaigns under banks)
        const res = await axios.get("/banks");
        const all = res.data.flatMap(bank =>
          (bank.campaigns || []).map(c => ({ ...c, bankName: bank.name }))
        );
        setCampaigns(all);
      } catch (err) {
        console.error("Error loading campaigns:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Active Campaigns</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading campaigns...</p>
      ) : campaigns.length === 0 ? (
        <p className="text-center text-gray-500">No campaigns found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((c, i) => (
            <div key={i}>
              <CampaignCard campaign={{ ...c, title: c.title || "Campaign", description: c.description || "", date: c.date || Date.now(), bankName: c.bankName }} />
              {c.bankName && <p className="text-sm text-gray-400 mt-1">Hosted by: {c.bankName}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Campaigns;
