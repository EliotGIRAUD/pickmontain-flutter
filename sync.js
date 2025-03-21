const { sequelize } = require("./models");

sequelize.sync({ force: false }).then(() => {
  console.log("✅ Database is synced!");
  process.exit();
}).catch(error => {
  console.error("❌ Error syncing database:", error);
});
