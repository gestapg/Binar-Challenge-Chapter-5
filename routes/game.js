const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/game", (req, res, next) => {
  res.sendFile("./game.html", { root: path.join(__dirname, "../", "views") });
});

module.exports = router;
