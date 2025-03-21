const app = require("./app");
const port = process.env.PORT || 3000;
// const sequelize = require("./config/database");
// const models = require("./models");
require("dotenv").config();

// Synchronisation de la base de données
// sequelize
//   .sync({ alter: true })
//   .then(() => console.log("Database synced"))
//   .catch((err) => console.error("Error syncing database:", err));

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
