const express = require("express");
const bodyParser = require("body-parser");
const register = require("./routes/register");
const signin = require("./routes/signin");
const currentuser = require("./routes/currentuser");

const app = express();

app.use(bodyParser.json());
app.use(register);
app.use(signin);
app.use(currentuser);

app.all("*", (req, res) => {
  console.log("invalid route");
  throw new Error("not found error");
});

module.exports = app;
