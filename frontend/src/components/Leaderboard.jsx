import React from "react";

const Leaderboard = ({ donors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {donors.map((donor, index) => (
        <div key={donor.id} className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold">{index + 1}. {donor.name}</h2>
          <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
          <p><strong>City:</strong> {donor.city}</p>
          <p><strong>Total Donations:</strong> {donor.totalDonations} units</p>
          {donor.badges && donor.badges.length > 0 && (
            <div className="mt-2 flex space-x-2">
              {donor.badges.map((badge, idx) => (
                <span key={idx} className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">{badge}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
