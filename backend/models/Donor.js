import mongoose from "mongoose";

const donorSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bloodGroup: { type: String, required: true },
  city: { type: String, required: true },
  donationHistory: [
    {
      date: { type: Date },
      quantity: { type: Number } // in units
    }
  ],
  badges: [{ type: String }] // e.g., "Gold Donor", "Top Donor"
}, { timestamps: true });

const Donor = mongoose.model("Donor", donorSchema);
export default Donor;
