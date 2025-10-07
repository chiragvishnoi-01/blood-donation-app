import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import DonorCard from "../components/DonorCard";
import CampaignCard from "../components/CampaignCard";
import donorsData from "../data/donors.json";

const Home = () => {
  return (
    <div className="container mx-auto px-4 mt-8">
      {/* Hero Section */}
      <Hero />

      {/* Recent Donors */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-red-600 flex items-center gap-2">
            🩸 Recent Donors
          </h2>
          <Link
            to="/dashboard"
            className="text-red-500 hover:text-red-700 text-sm font-semibold transition"
          >
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {donorsData.slice(0, 6).map((donor) => (
            <DonorCard key={donor.id} donor={donor} />
          ))}
        </div>
      </section>

      {/* Campaign Section */}
      <section className="mt-20 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-red-600 flex items-center gap-2">
            📅 Active Campaigns
          </h2>
          <Link
            to="/campaigns"
            className="text-red-500 hover:text-red-700 text-sm font-semibold transition"
          >
            Explore Campaigns →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CampaignCard
            campaign={{
              title: "City Blood Drive",
              description: "Join our local drive to save lives and support hospitals.",
              date: new Date(),
              location: "Central City Hospital",
            }}
          />
          <CampaignCard
            campaign={{
              title: "University Camp",
              description: "Students unite to donate and raise awareness.",
              date: new Date(),
              location: "Sunrise University Campus",
            }}
          />
          <CampaignCard
            campaign={{
              title: "Red Cross Awareness Week",
              description: "Spread awareness and donate for emergency needs.",
              date: new Date(),
              location: "Community Hall",
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white rounded-2xl p-10 text-center shadow-lg mb-16">
        <h2 className="text-3xl font-bold mb-4">Need Blood Urgently?</h2>
        <p className="text-lg mb-6">
          Submit an SOS request and our donor network will respond instantly.
        </p>
        <Link
          to="/sos"
          className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Send SOS Request
        </Link>
      </section>
    </div>
  );
};

export default Home;
