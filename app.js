const express = require("express"); 
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Routes d'authentification
app.use("/api/auth", authRoutes);

module.exports = app; // 🚀 On exporte uniquement l'application sans démarrer le serveur
