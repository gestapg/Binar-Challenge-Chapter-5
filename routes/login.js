const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/login", (req, res, next) => {
  const title = "Login";
  const style = "login.css";
  res.render("layouts/login", { title, style });
});

router.post("/login", (req, res, next) => {
  const data = req.body;
  console.log(data);
  res.redirect("/game");
});

module.exports = router;
