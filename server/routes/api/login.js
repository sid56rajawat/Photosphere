require("dotenv").config();

const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/loginController");
const jwt = require("jsonwebtoken");


router.post("/", loginController.handleLogin);

module.exports = router;
