const express = require("express");
const app = express();
app.use(express.json());

// Importation des routes
const indexRouter = require("./routes/index");

// Route par défaut
app.use("/", indexRouter);

module.exports = app;
