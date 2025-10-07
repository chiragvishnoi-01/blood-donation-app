import express from "express";
import Donor from "../models/Donor.js";

const router = express.Router();

// GET /api/donors → list all donors
router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/donors → add a donor
router.post("/", async (req, res) => {
  try {
    const { name, email, bloodGroup, city } = req.body;
    if (!name || !email || !bloodGroup || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const donor = await Donor.create({ name, email, bloodGroup, city });
    res.status(201).json(donor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
