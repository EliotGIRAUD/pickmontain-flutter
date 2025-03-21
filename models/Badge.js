const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Badge = sequelize.define("Badge", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  isObtained: { type: DataTypes.BOOLEAN, defaultValue: false },
  isColored: { type: DataTypes.BOOLEAN, defaultValue: false },
  level: { type: DataTypes.INTEGER, allowNull: false },
}, { timestamps: true });

module.exports = Badge;
