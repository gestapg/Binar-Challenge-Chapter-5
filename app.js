const express = require("express");

const path = require("path");

const app = express();
const port = 3000;

const mainRoutes = require("./routes/main");
const loginRoutes = require("./routes/login");
const gameRoutes = require("./routes/game");

app.use(express.static("public"));

app.use(mainRoutes);

app.use(loginRoutes);

app.use(gameRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile("404.html", { root: path.join(__dirname, "views") });
});

app.listen(port, () => {
  console.log(`You are currently listening on port = ${port}`);
});
