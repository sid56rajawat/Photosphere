require("dotenv").config();

const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) res.sendStatus(403);
    req.user = user;
    next();
  });
}
router.get("/", authenticateToken, (req, res) => {
  res.json({ messsage: "Your token is valid" });
});

router.post("/", loginController.handleLogin);

module.exports = router;