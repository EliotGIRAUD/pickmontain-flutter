require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_URI
);

// Test de connexion
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie !");
  } catch (error) {
    console.error("Impossible de se connecter à la base de données :", error);
  }
})();

module.exports = sequelize;
