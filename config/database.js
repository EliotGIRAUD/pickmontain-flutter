require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // Port 8889 pour MAMP (obligatoire sur MAC)
    dialect: process.env.DB_DIALECT,
  }
);

module.exports = sequelize;
