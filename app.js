const express = require("express");

const app = express();
const port = 3000;

const mainRoutes = require("./routes/main");
const loginRoutes = require("./routes/login");

app.use(mainRoutes);

app.use(loginRoutes);

app.listen(port, () => {
  console.log(`You are currently listening on port = ${port}`);
});
