const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../utils/auth");

const router = express.Router();

router.get("/users/currentuser", auth, async (req, res) => {
  try {
    res.send({ message: "you are loggedin" });
  } catch (error) {
    res.send({ message: "you are not logged in" });
  }
});

module.exports = router;
