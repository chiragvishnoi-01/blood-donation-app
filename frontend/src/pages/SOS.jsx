import React, { useState } from "react";
import axios from "../api/axiosConfig";

const SOSForm = () => {
  const [formData, setFormData] = useState({
    requesterName: "",
    email: "",
    bloodGroup: "",
    city: "",
    phone: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/sos", formData);
      setMessage(res.data.message);
      setFormData({
        requesterName: "",
        email: "",
        bloodGroup: "",
        city: "",
        phone: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("Error sending SOS request. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
        Emergency SOS Request
      </h2>
      {message && (
        <p className="text-center text-green-600 font-semibold mb-4">
          {message}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg space-y-4 border border-red-100"
      >
        <input
          type="text"
          name="requesterName"
          placeholder="Your Name"
          value={formData.requesterName}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group (e.g. A+)"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition"
        >
          Send SOS
        </button>
      </form>
    </div>
  );
};

export default SOSForm;
