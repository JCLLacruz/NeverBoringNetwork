const express = require("express");
const router = express.Router()
const PostController = require("../controllers/PostController");

router.post("/", PostController.create)
router.put("/id/:_id", PostController.update)
router.delete("/id:_id", PostController.delete)
router.get("/", PostController.getAll)
router.get("/tittle/:tittle", PostController.getPostsByTittle)
router.get("/id/:_id", PostController.getById)

module.exports = router;