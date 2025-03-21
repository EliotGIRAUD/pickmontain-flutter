require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 5000;
const sequelize = require("./config/database");

// Check the connection to the database
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

// Synchronize the database if SYNC_DB is set to true
if (process.env.SYNC_DB === "true") {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Database synced");
      // Start the server
      app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
      });
    })
    .catch((err) => {
      console.error("Error syncing database:", err);
    });
} else {
  // Start the server without synchronizing the database
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}
