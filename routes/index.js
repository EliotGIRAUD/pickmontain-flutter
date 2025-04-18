const express = require("express");
const router = express.Router();

// Import models
const User = require("../models/User");
const Event = require("../models/Event");

// Defining relationships between tables
User.hasMany(Event, { foreignKey: "id_user", as: "events" });
Event.belongsTo(User, { foreignKey: "id_user", as: "organizer" });

// Base route
router.get("/", function (req, res) {
  res.send("Bienvenue sur l'API de carmeet");
});

module.exports = router;
