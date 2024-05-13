const express = require("express");
const router = express.Router()
const PostController = require("../controllers/PostController");
const { authentication } = require("../middleware/authentication");

router.post("/", PostController.create);
router.put("/id/:_id", authentication, PostController.update);
router.delete("/id/:_id", authentication, PostController.delete);
router.get("/", PostController.getAll);
router.get("/title/:title", PostController.getPostsByTitle);
router.get("/id/:_id", PostController.getById);
router.put("/likes/:_id", authentication, PostController.like);

module.exports = router;