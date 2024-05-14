const Post = require("../models/Post");

const PostController ={
    async create(req,res) {
        try{
            const post = await Post.create(req.body)
            res.status(201).send(post)
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: "There was a problem creating the post" })
        }
    },
    async update(req,res) {
        try{
            const post = await Post.findByIdAndUpdate(req.params._id, req.body,
        { new: true })
                res.send({ msg: "Post succesfully updated", Post });
            } catch (error) {
                console.error(error)
                res.status(500).send({ msg: "There was a problem updating the post" })
            }
    },
    async delete(req,res) {
        try {
            const post = await Post.findByIdAndDelete(req.params._id)
            res.send({ msg: "Post delete ", post })
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: "There was a problem trying to remove the post"})
        }
    },
    async getAll(req,res) {
        try{
            const { page = 1, limit = 10 } = req.query;
            const posts = await Post.find()
                .populate("likes.userId")
                .limit(limit)
                .skip((page - 1) * limit);
            res.send(posts)
        } catch (error) {
            console.error(error);
        }
    },
    //async getPostsByTitle(req,res) {
      //  try {
        //    if (req.params.title.length>25){
          //      return res.status(400).send("Search too long")
            //}
            //const tittle = new RegExp(req.params.tittle, "i");
            //const posts = await Post.find({tittle});
            //res.send(posts);
        //} catch (error) {
            //console.error(error);
        //}
    //},
    async getPostsByTitle(req,res) {
        try {
            const posts = await Post.find({
                $text: {
                    $search: req.params.title,
                }, 
            });
            res.send(posts);
        } catch (error) {
            console.error(error);
        }
    },
    async getById(req,res) {
        try{
            const post = await Post.findById(req.params._id)
            res.send(post)
        } catch (error) {
            console.error(error);
        }
    },
    async like(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                { $push: { likes: { like: true, UserId: req.user._id }}},
                { new: true }
            );
            res.send(post);
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: "There was a problem with your like"});
        }
    },
    //async dislike(req, res) {
      //  try {
        //    const post = await Post.findByIdAndDelete(
          //      req.params._id,
            //    { $pull: { likes: { like: true, UserId: req.user._id }} },
            //);
            //res.send({ msg: "Like delete ", post });
        //} catch (error) {
        //    console.error(error)
        //    res.status(500).send({ msg: "There was a problem trying to remove the post"})

    //}
}

module.exports = PostController;