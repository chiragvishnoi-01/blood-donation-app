import mongoose from "mongoose";

const bloodBankSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  city: { type: String, required: true },
  bloodStock: {
    A_pos: { type: Number, default: 0 },
    A_neg: { type: Number, default: 0 },
    B_pos: { type: Number, default: 0 },
    B_neg: { type: Number, default: 0 },
    AB_pos: { type: Number, default: 0 },
    AB_neg: { type: Number, default: 0 },
    O_pos: { type: Number, default: 0 },
    O_neg: { type: Number, default: 0 }
  },
  campaigns: [
    {
      title: { type: String },
      description: { type: String },
      date: { type: Date }
    }
  ]
}, { timestamps: true });

const BloodBank = mongoose.model("BloodBank", bloodBankSchema);
export default BloodBank;
