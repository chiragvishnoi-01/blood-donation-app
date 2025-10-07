import React from "react";
import Hero from "../components/Hero";
import DonorCard from "../components/DonorCard";
import CampaignCard from "../components/CampaignCard";
import donorsData from "../data/donors.json";

const Home = () => {
  return (
    <div className="container mx-auto px-4 mt-6">
      <Hero />
      
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Recent Donors</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {donorsData.slice(0, 6).map(donor => (
            <DonorCard key={donor.id} donor={donor} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Active Campaigns</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <CampaignCard
            campaign={{ title: "City Blood Drive", description: "Donate blood to save lives", date: new Date() }}
          />
          <CampaignCard
            campaign={{ title: "University Blood Camp", description: "Students donating blood", date: new Date() }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
