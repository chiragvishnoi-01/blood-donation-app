import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
  requesterName: { type: String, required: true },
  email: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String },
  status: { type: String, default: "Pending" } // Pending, Completed
}, { timestamps: true });

const Request = mongoose.model("Request", requestSchema);
export default Request;
