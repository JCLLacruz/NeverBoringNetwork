const express = require("express");
const router = express.Router()
const CommentController = require("../controllers/CommentController");
const { authentication } = require("../middleware/authentication");

router.post("/", CommentController.create);

module.exports = router;