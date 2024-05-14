const express = require("express");
const router = express.Router()
const HobbyController = require("../controllers/HobbyController.js");
const { authentication } = require("../middleware/authentication.js");

router.put("/addhobby/:hobbyId", authentication, HobbyController.addHobbyToUser);
router.post("/", HobbyController.create);

module.exports = router;