import React, { useState } from "react";
import axios from "../api/axiosConfig";

const SOSForm = () => {
  const [formData, setFormData] = useState({
    requesterName: "",
    email: "",
    bloodGroup: "",
    city: "",
    phone: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/sos", formData);
      setStatus(response.data.message);
      setFormData({ requesterName: "", email: "", bloodGroup: "", city: "", phone: "" });
    } catch (err) {
      console.error(err);
      setStatus("Error sending SOS request.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Emergency SOS Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="requesterName"
          placeholder="Your Name"
          value={formData.requesterName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group (e.g. A+)"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300"
        >
          Send SOS
        </button>
      </form>
      {status && <p className="mt-4 text-center text-red-600 font-semibold">{status}</p>}
    </div>
  );
};

export default SOSForm;
