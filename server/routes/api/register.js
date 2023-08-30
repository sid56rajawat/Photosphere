const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/registerController");

router.post("/", registerController.handleNewUser);

router.delete("/:userName", registerController.deleteUser);

module.exports = router;
