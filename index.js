require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 3000;
const sequelize = require("./config/database");

// Vérifiez la connexion à la base de données
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Synchronisation de la base de données si SYNC_DB est défini à true
if (process.env.SYNC_DB === "true") {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Database synced");
      // Lancement du serveur
      app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
      });
    })
    .catch((err) => {
      console.error("Error syncing database:", err);
    });
} else {
  // Lancement du serveur sans synchronisation de la base de données
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}
