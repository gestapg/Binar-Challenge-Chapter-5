const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

const pathFile = path.join(path.dirname(process.mainModule.filename), "data", "user.json");
const pathDir = path.join(path.dirname(process.mainModule.filename), "data");

router.get("/login", (req, res, next) => {
  const title = "Login";
  const style = "login.css";
  res.render("layouts/login", { title, style });
});

router.post("/login", (req, res, next) => {
  const data = req.body;
  fs.readFile(pathFile, (err, user) => {
    let dataUser = [];
    if (err) {
      fs.mkdir(pathDir, (err) => {});
    } else {
      dataUser = JSON.parse(user);
    }
    dataUser.push(data);
    fs.writeFile(pathFile, JSON.stringify(dataUser), (err) => {});
  });
  res.redirect("/game");
});

module.exports = router;
