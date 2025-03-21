const express = require("express");
const router = express.Router();
const { register, login, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// Registration route
router.post("/register", register);

// Login route
router.post("/login", login);

// Route to get the profile (protected by JWT)
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
