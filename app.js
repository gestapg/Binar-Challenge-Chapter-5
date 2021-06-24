const express = require("express");

const app = express();
const port = 3000;

const mainRoutes = require("./routes/main");
const loginRoutes = require("./routes/login");
const gameRoutes = require("./routes/game");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(mainRoutes);

app.use(loginRoutes);

app.use(gameRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`You are currently listening on port = ${port}`);
});
