import React from "react";

const DonorCard = ({ donor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-red-600">{donor.name}</h3>
      <p className="text-gray-600">Blood Group: <b>{donor.bloodGroup}</b></p>
      <p className="text-gray-600">City: {donor.city}</p>
      <p className="text-gray-600">Contact: {donor.phone}</p>
    </div>
  );
};

export default DonorCard;
