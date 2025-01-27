const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

router.post(
  "/users/register",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { username, email, password } = req.body;
    try {
      console.log("hii");
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User Already Exists" });
      }
      user = new User({ username, email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      res.status(200).send("User created");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Error in Saving");
    }
  }
);

module.exports = router;
