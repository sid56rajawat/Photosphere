require("dotenv").config();
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { userName, password } = req.body;
  const user = { userName, password };

  if (!userName || !password)
    return res
      .status(400)
      .json({ message: "Both Username and Password are required." });

  // check for user in db
  const validUser = await User.findOne({
    username: userName,
  }).exec();

  if (!validUser) {
    return res.status(401).json({ message: "Enter valid username" });
  }

  const isValidPassword = await bcrypt.compare(password, validUser.password);
  if (isValidPassword) {
    const accessToken = jwt.sign(
      { username: validUser["username"], password: validUser["password"] },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30m",
      }
    );
    const cookieExpiration = Date.now() + 30 * 60 * 1000;
    // Express sessions
    res.cookie("accessToken", accessToken, {
      expires: new Date(cookieExpiration),
      httpOnly: true,
      sameSite: "strict",
    });
    return res.json({ message: "Correct Password" });
  } else {
    return res.status(401).json({ message: "Enter valid password" });
  }
};

module.exports = { handleLogin };
