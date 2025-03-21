const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Score = sequelize.define("Score", {
  score: { type: DataTypes.INTEGER, allowNull: false },
  ranking: { type: DataTypes.STRING },
}, { timestamps: true });

module.exports = Score;
