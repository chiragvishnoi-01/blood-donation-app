import React, { useState } from "react";
import axios from "../api/axiosConfig";

const SOSForm = () => {
  const [form, setForm] = useState({
    requesterName: "",
    email: "",
    bloodGroup: "",
    city: "",
    phone: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("/sos", form);
      setMessage(res.data.message);
      setForm({ requesterName:"", email:"", bloodGroup:"", city:"", phone:"" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Error submitting request");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Emergency SOS Request</h2>
      {message && <p className="mb-4 text-center text-red-600">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input name="requesterName" placeholder="Your Name" value={form.requesterName} onChange={handleChange} required className="border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="border p-2 rounded" />
        <input name="bloodGroup" placeholder="Blood Group" value={form.bloodGroup} onChange={handleChange} required className="border p-2 rounded" />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} required className="border p-2 rounded" />
        <input name="phone" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" className="bg-primaryRed text-white py-2 rounded font-semibold hover:bg-red-700 transition">Send SOS</button>
      </form>
    </div>
  );
};

export default SOSForm;
