const express = require("express");
const router = express.Router()
const CommentController = require("../controllers/CommentController");
const { authentication } = require("../middleware/authentication");

router.post("/", authentication, CommentController.create);
router.put("/id/:_id", authentication, CommentController.update);
router.delete("/id/:_id", authentication, CommentController.delete);
router.get("/", authentication, CommentController.getAll);
router.put("/like/:_id", authentication, CommentController.like);
router.delete("/like/:_id", authentication, CommentController.dislike);

module.exports = router;