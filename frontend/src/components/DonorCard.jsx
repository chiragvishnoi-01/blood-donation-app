import React from "react";

const DonorCard = ({ donor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-1">{donor.name}</h2>
      <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
      <p><strong>City:</strong> {donor.city}</p>
      <p><strong>Total Donations:</strong> {donor.donationHistory ? donor.donationHistory.reduce((sum, entry) => sum + (entry.quantity || 0), 0) : 0} units</p>
      {donor.badges && donor.badges.length > 0 && (
        <div className="mt-2 flex space-x-2">
          {donor.badges.map((badge, index) => (
            <span key={index} className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">{badge}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonorCard;
