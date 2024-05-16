const express = require("express");
const router = express.Router()
const { authentication } = require("../middleware/authentication.js");
const TagController = require("../controllers/TagController.js");

router.put("/addtagtopost/:postId", authentication, TagController.addTagToPost);
router.put("/addtagtouser", authentication, TagController.addTagToUser);

module.exports = router;