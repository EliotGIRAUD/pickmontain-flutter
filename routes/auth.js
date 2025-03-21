const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

// Route d'inscription
router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, user_type, email, password, role } =
      req.body;

    // Vérifier si l'email est déjà utilisé
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Cet email est déjà enregistré." });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création du nouvel utilisateur
    const newUser = await User.create({
      first_name,
      last_name,
      user_type,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "Utilisateur créé avec succès.",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
});

// Route de connexion
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier l'existence de l'utilisateur
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Identifiants invalides." });
    }

    // Vérification du mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Identifiants invalides." });
    }

    // Génération du token JWT
    const token = jwt.sign(
      { id: user.id_user, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Connexion réussie.",
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
