import React, { useState } from "react";
import axios from "../api/axiosConfig";
import { motion } from "framer-motion";

const SOSForm = () => {
  const [formData, setFormData] = useState({
    requesterName: "",
    email: "",
    bloodGroup: "",
    city: "",
    phone: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);
    try {
      const res = await axios.post("/sos", formData);
      setMessage(res.data.message || "SOS request sent successfully!");
      setFormData({
        requesterName: "",
        email: "",
        bloodGroup: "",
        city: "",
        phone: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Error sending SOS request. Please try again.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-lg mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
        🚨 Emergency SOS Request
      </h2>

      {message && (
        <div
          className={`text-center mb-4 font-semibold p-2 rounded ${
            isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-5 border border-red-100"
      >
        {[
          { name: "requesterName", type: "text", placeholder: "Your Name" },
          { name: "email", type: "email", placeholder: "Your Email" },
          { name: "bloodGroup", type: "text", placeholder: "Blood Group (e.g. A+)" },
          { name: "city", type: "text", placeholder: "City" },
          { name: "phone", type: "text", placeholder: "Phone (optional)" },
        ].map((input) => (
          <div key={input.name}>
            <label
              htmlFor={input.name}
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              {input.placeholder}
            </label>
            <input
              id={input.name}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.name]}
              onChange={handleChange}
              required={input.name !== "phone"}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? "bg-red-400 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {loading ? "Sending SOS..." : "🚨 Send SOS"}
        </button>
      </form>
    </motion.div>
  );
};

export default SOSForm;
