import React from "react";
import { Link } from "react-router-dom";
import bloodGif from "../../public/gif/blood-donation.gif";

const Hero = () => {
  return (
    <section className="bg-primaryRed text-white py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Donate Blood, Save Lives</h1>
      <p className="mb-6 text-center max-w-xl">Join our mission to make the world a safer place by donating blood and helping those in need.</p>
      <Link to="/sos" className="bg-white text-primaryRed px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">Request Blood Now</Link>
      <img src={bloodGif} alt="Blood Donation" className="mt-8 w-64 md:w-96" />
    </section>
  );
};

export default Hero;
