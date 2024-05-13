const express = require("express");
const router = express.Router()
const PostController = require("../controllers/PostController");
const { authentication } = require("../middlewares/authentication");

router.post("/", authentication , PostController.create)
router.put("/id/:_id", authentication , PostController.update)
router.delete("/id/:_id", authentication , PostController.delete)
router.get("/", PostController.getAll)
router.get("/title/:title", PostController.getPostsByTitle)
router.get("/id/:_id", PostController.getById)

module.exports = router;