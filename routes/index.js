const express = require("express");
const router = express.Router();

// Import des modèles
const User = require("../models/User");
const Event = require("../models/Event");

// Définition des relations entre les tables
User.hasMany(Event, { foreignKey: "id_user", as: "events" });
Event.belongsTo(User, { foreignKey: "id_user", as: "organizer" });

// Route de base
router.get("/", function (req, res) {
  res.send("Bienvenue sur l'API de carmeet");
});

module.exports = router;
