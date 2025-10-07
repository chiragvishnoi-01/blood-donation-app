import React from "react";
import { Link } from "react-router-dom";
import heroGif from "/gif/blood-donation.gif";

const Hero = () => {
  return (
    <section className="bg-red-50 py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-red-600 mb-4 animate-pulse">
            Save Lives. Donate Blood.
          </h1>
          <p className="mb-6 text-gray-700 text-lg">
            Join our mission to make blood accessible to every life in need.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/sos"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              Request Blood
            </Link>
            <Link
              to="/campaigns"
              className="border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg shadow-md transition"
            >
              View Campaigns
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img
            src={heroGif}
            alt="Blood Donation"
            className="w-3/4 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
