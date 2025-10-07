import React from "react";
import SOSForm from "../components/SOSForm";

const SOS = () => {
  return (
    <div className="container mx-auto px-4 mt-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Emergency SOS</h1>
      <SOSForm />
    </div>
  );
};

export default SOS;
