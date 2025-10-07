import React from "react";

const CampaignCard = ({ campaign }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-5 border border-red-100">
      <h3 className="text-xl font-semibold text-red-600 mb-2">
        {campaign.title}
      </h3>
      <p className="text-gray-700 mb-3">{campaign.description}</p>
      <p className="text-sm text-gray-500">
        📅 {new Date(campaign.date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default CampaignCard;
