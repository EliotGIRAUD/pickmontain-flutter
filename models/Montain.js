const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Mountain = sequelize.define("Mountain", {
  name: { type: DataTypes.STRING, allowNull: false },
  altitude: { type: DataTypes.DOUBLE, allowNull: false },
  difficulty: { type: DataTypes.STRING, allowNull: false },
  latitude: { type: DataTypes.DOUBLE, allowNull: false },
  longitude: { type: DataTypes.DOUBLE, allowNull: false },
}, { timestamps: true });

module.exports = Mountain;
