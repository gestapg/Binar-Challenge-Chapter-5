const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.sendFile("login.html", { root: path.join(__dirname, "../", "views") });
});

router.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  res.redirect("/game");
});

module.exports = router;
