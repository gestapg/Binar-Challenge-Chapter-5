const express = require("express");
const router = express.Router();

router.get("/game", (req, res, next) => {
  res.send("Hi you are at GAME PAGE");
});

module.exports = router;
