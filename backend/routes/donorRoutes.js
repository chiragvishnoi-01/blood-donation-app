import express from "express";
import Donor from "../models/Donor.js";

const router = express.Router();

// GET /api/donors → list all donors or filter by bloodGroup/city
router.get("/", async (req, res) => {
  try {
    const { bloodGroup, city } = req.query;
    let query = {};

    if (bloodGroup) query.bloodGroup = bloodGroup;
    if (city) query.city = city;

    const donors = await Donor.find(query);
    res.json(donors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/donors/:id → get single donor by id
router.get("/:id", async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) return res.status(404).json({ message: "Donor not found" });
    res.json(donor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/donors → add new donor
router.post("/", async (req, res) => {
  try {
    const { name, email, bloodGroup, city } = req.body;
    if (!name || !email || !bloodGroup || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingDonor = await Donor.findOne({ email });
    if (existingDonor) {
      return res.status(400).json({ message: "Donor already exists" });
    }

    const donor = await Donor.create({ name, email, bloodGroup, city, donationHistory: [], badges: [] });
    res.status(201).json(donor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
