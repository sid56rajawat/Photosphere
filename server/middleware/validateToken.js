const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    // console.log(req);
    const token = req.cookies['accessToken'];
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(decodedToken);
    const user = await User.findOne({ username: decodedToken.userName });
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    if (decodedToken.exp < currentTime) {
      res.json({ valid: false });
    }
    if (user) {
      res.json({ valid: true });
    } else {
      res.json({ valid: false });
    }
  } catch (error) {
    console.error("Token validation error:", error);
    res.json({ valid: false });
  }
});

module.exports = router;
