const express = require("express");
const app = express();
app.use(express.json());

// Importation des routes
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");

// Utilisation des routes avec le préfixe /api
app.use("/api", indexRouter);
app.use("/api", authRouter);

module.exports = app;
