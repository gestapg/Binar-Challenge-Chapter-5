const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile("main.html", { root: path.join(__dirname, "../", "views") });
});

module.exports = router;
