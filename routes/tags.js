const express = require("express");
const router = express.Router()
const HobbyController = require("../controllers/TagController.js");
const { authentication } = require("../middleware/authentication.js");

router.put("/addtagtopost", authentication, HobbyController.addTagToPost);
router.put("/addtagtouser", authentication, HobbyController.addTagToUser);

module.exports = router;