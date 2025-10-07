import React from "react";
import heroGif from "../public/gif/blood-donation.gif";

const Hero = () => {
  return (
    <section className="bg-red-50 py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-red-600 mb-6">
            Save Lives. Donate Blood.
          </h1>
          <p className="mb-6 text-gray-700 text-lg">
            Join our platform to find donors, request blood in emergencies, and participate in donation campaigns.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="/sos" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded shadow-md transition">
              Request Blood
            </a>
            <a href="/campaigns" className="bg-white border border-red-600 text-red-600 px-6 py-3 rounded shadow-md hover:bg-red-50 transition">
              View Campaigns
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img src={heroGif} alt="Blood Donation" className="w-3/4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
