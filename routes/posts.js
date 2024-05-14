const express = require("express");
const router = express.Router()
const PostController = require("../controllers/PostController");
const { authentication } = require("../middleware/authentication");
const { uploadUserPostImages } = require('../middleware/multer.js');


router.post("/",uploadUserPostImages.single('postImg'), authentication, PostController.create);
router.put("/id/:_id", authentication, PostController.update);
router.delete("/id/:_id", authentication, PostController.delete);
router.get("/", PostController.getAll);
router.get("/title/:title", PostController.getPostsByTitle);
router.get("/id/:_id", PostController.getById);
router.put("/like/:_id", authentication, PostController.like);
router.delete("/like/:_id", authentication, PostController.dislike);

module.exports = router;