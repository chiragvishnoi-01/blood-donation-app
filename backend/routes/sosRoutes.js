import express from "express";
import Request from "../models/Request.js";
import Donor from "../models/Donor.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

// POST /api/sos → create SOS request & send email alert
router.post("/", async (req, res) => {
  try {
    const { requesterName, email, bloodGroup, city, phone } = req.body;

    if (!requesterName || !email || !bloodGroup || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save request
    const newRequest = await Request.create({ requesterName, email, bloodGroup, city, phone });

    // Find matching donors
    const donors = await Donor.find({ bloodGroup, city });

    // Send email to all matching donors
    donors.forEach(donor => {
      sendEmail({
        to: donor.email,
        subject: `Urgent Blood Request: ${bloodGroup}`,
        text: `Hello ${donor.name},\n\n${requesterName} needs ${bloodGroup} blood in ${city}. Please contact if you can donate.\n\nPhone: ${phone || "N/A"}`,
      });
    });

    res.status(201).json({ message: "SOS request created & alert sent to donors" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
