const express = require("express"); 
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const mountainRoutes = require("./routes/montain");
dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Authentication routes
app.use("/api/auth", authRoutes);

// Routes to manage mountains
app.use("/api/mountains", mountainRoutes); // New route

module.exports = app; // Exporting the app without starting the server
