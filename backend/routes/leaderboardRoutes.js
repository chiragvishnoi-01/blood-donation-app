import express from "express";
import Donor from "../models/Donor.js";

const router = express.Router();

// GET /api/leaderboard → top donors by total donations
router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find();

    // Calculate total donated units for each donor
    const leaderboard = donors.map(d => {
      const totalDonations = d.donationHistory.reduce((sum, entry) => sum + (entry.quantity || 0), 0);
      return {
        id: d._id,
        name: d.name,
        bloodGroup: d.bloodGroup,
        city: d.city,
        badges: d.badges,
        totalDonations
      };
    });

    // Sort descending by totalDonations
    leaderboard.sort((a, b) => b.totalDonations - a.totalDonations);

    res.json(leaderboard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
