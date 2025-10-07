import React from "react";
import Hero from "../components/Hero.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Why Blood Donation Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Blood Donation?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Blood donation is a selfless act that can save lives. Your single donation can help multiple patients in need.
        </p>
        <img src="/gif/blood-donation.gif" alt="Blood Donation" className="mx-auto w-64 md:w-96"/>
      </section>
    </div>
  );
};

export default Home;
