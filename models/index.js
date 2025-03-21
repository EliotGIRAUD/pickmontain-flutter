const sequelize = require("../config/database");

const User = require("./User");
const Mountain = require("./Montain");
const Badge = require("./Badge");
const Score = require("./Score");
const Characteristic = require("./Characteristic");

// User - Mountain (Many-to-Many)
User.belongsToMany(Mountain, { through: "UserMountains", as: "climbedMountains" });
Mountain.belongsToMany(User, { through: "UserMountains", as: "climbers" });

// User - Badge (One-to-Many)
User.hasMany(Badge, { as: "badges" });
Badge.belongsTo(User);

// User - Score (One-to-Many)
User.hasMany(Score, { as: "scores" });
Score.belongsTo(User);

// Mountain - Characteristic (Many-to-Many)
Mountain.belongsToMany(Characteristic, { through: "MountainCharacteristics", as: "characteristics" });
Characteristic.belongsToMany(Mountain, { through: "MountainCharacteristics" });

module.exports = { sequelize, User, Mountain, Badge, Score, Characteristic };
