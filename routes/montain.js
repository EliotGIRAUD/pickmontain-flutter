const express = require("express");
const Mountain = require("../models/Montain");
const router = express.Router();

// 1. Create a new Mountain
router.post("/", async (req, res) => {
  try {
    const { name, altitude, difficulty, latitude, longitude } = req.body;
    const mountain = await Mountain.create({ name, altitude, difficulty, latitude, longitude });
    res.status(201).json(mountain);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating mountain" });
  }
});

// 2. Get all Mountains
router.get("/", async (req, res) => {
  try {
    const mountains = await Mountain.findAll();
    res.status(200).json(mountains);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching mountains" });
  }
});

// 3. Get a Mountain by ID
router.get("/:id", async (req, res) => {
  try {
    const mountain = await Mountain.findByPk(req.params.id);
    if (mountain) {
      res.status(200).json(mountain);
    } else {
      res.status(404).json({ message: "Mountain not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching mountain" });
  }
});

// 4. Update a Mountain
router.put("/:id", async (req, res) => {
  try {
    const { name, altitude, difficulty, latitude, longitude } = req.body;
    const mountain = await Mountain.findByPk(req.params.id);
    if (mountain) {
      mountain.name = name || mountain.name;
      mountain.altitude = altitude || mountain.altitude;
      mountain.difficulty = difficulty || mountain.difficulty;
      mountain.latitude = latitude || mountain.latitude;
      mountain.longitude = longitude || mountain.longitude;
      await mountain.save();
      res.status(200).json(mountain);
    } else {
      res.status(404).json({ message: "Mountain not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating mountain" });
  }
});

// 5. Delete a Mountain
router.delete("/:id", async (req, res) => {
  try {
    const mountain = await Mountain.findByPk(req.params.id);
    if (mountain) {
      await mountain.destroy();
      res.status(200).json({ message: "Mountain deleted" });
    } else {
      res.status(404).json({ message: "Mountain not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting mountain" });
  }
});

module.exports = router;
