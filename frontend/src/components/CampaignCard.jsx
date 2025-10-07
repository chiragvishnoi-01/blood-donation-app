import React from "react";

const CampaignCard = ({ campaign }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-300">
      <h3 className="text-xl font-bold text-red-600 mb-2">{campaign.title}</h3>
      <p className="text-gray-700 mb-2">{campaign.description}</p>
      <p className="text-gray-500 text-sm">Date: {new Date(campaign.date).toLocaleDateString()}</p>
    </div>
  );
};

export default CampaignCard;
