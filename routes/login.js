const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send("Hi you are at LOGIN PAGE");
});

module.exports = router;
