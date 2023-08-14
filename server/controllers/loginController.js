require("dotenv").config();
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { userName, password } = req.body;
  const user = { userName, password };

  if (!userName || !password)
    return res.json({ message: "Both Username and Password are required." });

  // check for user in db
  const validUser = await User.findOne({
    username: userName,
  }).exec();

  if (!validUser) {
    return res.json({ message: "Enter valid username" });
  }

  const validPassword = await bcrypt.compare(password, validUser.password);
  if (validPassword) {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "30m",
    });
    return res.json({ message: "Correct Password", accessToken: accessToken });
  } else {
    return res.json({ message: "Enter valid password" });
  }
};

module.exports = { handleLogin };
