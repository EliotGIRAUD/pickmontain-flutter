const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Characteristic = sequelize.define("Characteristic", {
  type: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  premiumOnly: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { timestamps: true });

module.exports = Characteristic;
