import React from "react";

const DonorCard = ({ donor, showRank }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
      {showRank && <span className="text-xl font-bold text-red-600 mb-2">#{donor.rank || "?"}</span>}
      <h2 className="text-xl font-semibold text-red-600">{donor.name}</h2>
      <p className="text-gray-600">{donor.city}</p>
      <p className="mt-2 text-gray-700">Blood Group: <span className="font-bold">{donor.bloodGroup}</span></p>
      <p className="mt-2 text-gray-700">Donations: <span className="font-bold">{donor.donationHistory.length}</span></p>
    </div>
  );
};

export default DonorCard;
