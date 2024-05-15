const express = require("express");
const router = express.Router()
const HobbyController = require("../controllers/TagController.js");
const { authentication } = require("../middleware/authentication.js");

router.put("/addtag", authentication, HobbyController.addTag);

module.exports = router;