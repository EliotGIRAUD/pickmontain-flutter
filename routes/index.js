var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Bienvenue sur l'API de carmeet");
});

module.exports = router;
